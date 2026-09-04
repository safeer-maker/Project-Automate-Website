# PowerShell Extraction Engine for projectautomate.com
$ErrorActionPreference = "Continue"

$baseDir = "c:\Users\Safeer\dev\Project-Automate-Website\extracted_projectautomate"
$apiDir = Join-Path $baseDir "api_data"
$pagesHtmlDir = Join-Path $baseDir "pages_html"
$postsHtmlDir = Join-Path $baseDir "posts_html"
$mediaDir = Join-Path $baseDir "media"
$formsDir = Join-Path $baseDir "forms"
$blueprintDir = Join-Path $baseDir "astro_blueprint"

$dirs = @($baseDir, $apiDir, $pagesHtmlDir, $postsHtmlDir, $mediaDir, $formsDir, $blueprintDir)
foreach ($d in $dirs) {
    if (!(Test-Path $d)) {
        New-Item -ItemType Directory -Path $d -Force | Out-Null
    }
}

Write-Host "====================================================="
Write-Host " 1. FETCHING WORDPRESS REST API CATALOG"
Write-Host "====================================================="

function Curl-GetJson ($url, $outPath) {
    Write-Host "Fetching: $url"
    $tempFile = [System.IO.Path]::GetTempFileName()
    & curl.exe -s -L -H "User-Agent: Mozilla/5.0" "$url" -o $tempFile
    if (Test-Path $tempFile) {
        $raw = [System.IO.File]::ReadAllText($tempFile)
        [System.IO.File]::WriteAllText($outPath, $raw)
        Remove-Item $tempFile -Force
        return $raw
    }
    return $null
}

# 1. Site Info
Curl-GetJson "https://projectautomate.com/wp-json/" (Join-Path $apiDir "site_info.json") | Out-Null

# 2. Pages
$pagesJsonRaw = Curl-GetJson "https://projectautomate.com/wp-json/wp/v2/pages?per_page=100" (Join-Path $apiDir "pages.json")
$pages = $pagesJsonRaw | ConvertFrom-Json

# 3. Posts
$postsJsonRaw = Curl-GetJson "https://projectautomate.com/wp-json/wp/v2/posts?per_page=100" (Join-Path $apiDir "posts.json")
$posts = $postsJsonRaw | ConvertFrom-Json

# 4. Categories
Curl-GetJson "https://projectautomate.com/wp-json/wp/v2/categories?per_page=100" (Join-Path $apiDir "categories.json") | Out-Null

# 5. Media (Multiple pages if needed)
$allMedia = @()
$pageIndex = 1
while ($true) {
    $tempMediaFile = [System.IO.Path]::GetTempFileName()
    Write-Host "Fetching Media catalog page $pageIndex..."
    & curl.exe -s -L -H "User-Agent: Mozilla/5.0" "https://projectautomate.com/wp-json/wp/v2/media?per_page=100&page=$pageIndex" -o $tempMediaFile
    $mRaw = [System.IO.File]::ReadAllText($tempMediaFile)
    Remove-Item $tempMediaFile -Force
    
    if ($mRaw -match '^\[.*\]$') {
        $mObj = $mRaw | ConvertFrom-Json
        if ($mObj.Count -eq 0) { break }
        $allMedia += $mObj
        Write-Host "  Retrieved $($mObj.Count) media items."
        if ($mObj.Count -lt 100) { break }
        $pageIndex++
    } else {
        break
    }
}
$allMediaJson = $allMedia | ConvertTo-Json -Depth 10
[System.IO.File]::WriteAllText((Join-Path $apiDir "media.json"), $allMediaJson)
Write-Host "Total media items in catalog: $($allMedia.Count)"

Write-Host "`n====================================================="
Write-Host " 2. DOWNLOADING FULL RAW HTML FOR ALL PAGES"
Write-Host "====================================================="

$routesMap = @()

foreach ($page in $pages) {
    $slug = $page.slug
    if (-not $slug -or $slug -eq "") { $slug = "home" }
    $url = $page.link
    $outFile = Join-Path $pagesHtmlDir "$slug.html"
    Write-Host "Downloading Page: $url -> $slug.html"
    & curl.exe -s -L -H "User-Agent: Mozilla/5.0" "$url" -o "$outFile"
    
    $routesMap += [PSCustomObject]@{
        Type = "Page"
        Title = $page.title.rendered
        Slug = $slug
        Url = $url
        HtmlFile = "pages_html/$slug.html"
        AstroRoute = if ($slug -eq "home" -or $slug -eq "") { "src/pages/index.astro" } else { "src/pages/$slug/index.astro" }
        Template = $page.template
        Modified = $page.modified
    }
}

Write-Host "`n====================================================="
Write-Host " 3. DOWNLOADING FULL RAW HTML FOR ALL POSTS"
Write-Host "====================================================="

foreach ($post in $posts) {
    $slug = $post.slug
    $url = $post.link
    $outFile = Join-Path $postsHtmlDir "$slug.html"
    Write-Host "Downloading Post: $url -> $slug.html"
    & curl.exe -s -L -H "User-Agent: Mozilla/5.0" "$url" -o "$outFile"
    
    $routesMap += [PSCustomObject]@{
        Type = "Post"
        Title = $post.title.rendered
        Slug = $slug
        Url = $url
        HtmlFile = "posts_html/$slug.html"
        AstroRoute = "src/pages/blog/$slug.astro"
        Template = $post.template
        Modified = $post.modified
    }
}

# Save routes map
$routesMapJson = $routesMap | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText((Join-Path $blueprintDir "routes_map.json"), $routesMapJson)

Write-Host "`n====================================================="
Write-Host " 4. EXTRACTING & DOWNLOADING MEDIA ASSETS"
Write-Host "====================================================="

$downloadedMedia = @()
$mediaUrlSet = @{}

# Add from media API
foreach ($m in $allMedia) {
    if ($m.source_url) {
        $mediaUrlSet[$m.source_url] = @{
            title = $m.title.rendered
            alt = $m.alt_text
            mime = $m.mime_type
            media_details = $m.media_details
        }
    }
}

# Scan HTML files for any additional wp-content/uploads images or videos
$allHtmlFiles = (Get-ChildItem -Path $pagesHtmlDir -Filter "*.html") + (Get-ChildItem -Path $postsHtmlDir -Filter "*.html")
$videoEmbeds = @()

foreach ($hf in $allHtmlFiles) {
    $htmlText = [System.IO.File]::ReadAllText($hf.FullName)
    
    # Upload URLs
    $uploadMatches = [regex]::Matches($htmlText, 'https?://projectautomate\.com/wp-content/uploads/[^"''\s\)\>]+', 'IgnoreCase')
    foreach ($um in $uploadMatches) {
        $cleanedUrl = $um.Value -replace '&amp;', '&'
        # strip query parameters or scaled suffixes for unique base
        if (!$mediaUrlSet.ContainsKey($cleanedUrl)) {
            $mediaUrlSet[$cleanedUrl] = @{
                title = [System.IO.Path]::GetFileNameWithoutExtension($cleanedUrl)
                alt = ""
                mime = ""
            }
        }
    }
    
    # Video embeds (YouTube, Vimeo, mp4)
    $videoMatches = [regex]::Matches($htmlText, '(https?://(?:www\.)?(?:youtube\.com|youtu\.be|vimeo\.com)[^"''\s\<\>]+|https?://projectautomate\.com/[^"''\s\<\>]+\.mp4)', 'IgnoreCase')
    foreach ($vm in $videoMatches) {
        $videoEmbeds += [PSCustomObject]@{
            SourcePage = $hf.Name
            VideoUrl = $vm.Value
        }
    }
}

Write-Host "Total unique media URLs discovered: $($mediaUrlSet.Keys.Count)"

$mediaIndex = 1
$mediaInventory = @()

foreach ($mUrl in $mediaUrlSet.Keys) {
    $uri = [System.Uri]$mUrl
    $filename = [System.IO.Path]::GetFileName($uri.LocalPath)
    if (-not $filename) { continue }
    
    # decode filename
    $filename = [System.Uri]::UnescapeDataString($filename)
    $localFilePath = Join-Path $mediaDir $filename
    
    if (!(Test-Path $localFilePath)) {
        Write-Host "[$mediaIndex/$($mediaUrlSet.Keys.Count)] Downloading: $filename"
        & curl.exe -s -L -H "User-Agent: Mozilla/5.0" "$mUrl" -o "$localFilePath"
    } else {
        Write-Host "[$mediaIndex/$($mediaUrlSet.Keys.Count)] Already exists: $filename"
    }
    
    $fileInfo = Get-Item -Path $localFilePath -ErrorAction SilentlyContinue
    $fileSize = if ($fileInfo) { $fileInfo.Length } else { 0 }
    
    $mediaInventory += [PSCustomObject]@{
        OriginalUrl = $mUrl
        LocalFile = "media/$filename"
        Filename = $filename
        SizeBytes = $fileSize
        Alt = $mediaUrlSet[$mUrl].alt
        Title = $mediaUrlSet[$mUrl].title
    }
    $mediaIndex++
}

# Save Media Inventory
$mediaInvJson = $mediaInventory | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText((Join-Path $blueprintDir "media_inventory.json"), $mediaInvJson)

# Save Video Inventory
$videoInvJson = $videoEmbeds | Select-Object -Unique SourcePage, VideoUrl | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText((Join-Path $blueprintDir "video_embeds.json"), $videoInvJson)

Write-Host "`n====================================================="
Write-Host " 5. EXTRACTING METFORMS & FORM LOGIC"
Write-Host "====================================================="

$formsFound = @()
foreach ($hf in $allHtmlFiles) {
    $content = [System.IO.File]::ReadAllText($hf.FullName)
    if ($content -match 'data-form-id="(\d+)"') {
        $formMatches = [regex]::Matches($content, 'id="metform-wrap-[^"]+"[^>]*data-form-id="(\d+)"')
        foreach ($fm in $formMatches) {
            $fId = $fm.Groups[1].Value
            # extract fields
            $inputMatches = [regex]::Matches($content, 'name="([^"]+)"')
            $fieldNames = @()
            foreach ($im in $inputMatches) {
                if ($im.Groups[1].Value -notmatch 'nonce|action|submit') {
                    $fieldNames += $im.Groups[1].Value
                }
            }
            $formsFound += [PSCustomObject]@{
                Page = $hf.Name
                FormId = $fId
                Fields = ($fieldNames | Select-Object -Unique)
            }
        }
    }
}

$formsJson = $formsFound | Select-Object -Unique Page, FormId | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText((Join-Path $formsDir "forms_summary.json"), $formsJson)

Write-Host "====================================================="
Write-Host " EXTRACTION COMPLETE!"
Write-Host "====================================================="
