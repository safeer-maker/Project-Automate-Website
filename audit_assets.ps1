$htmlPath = "pa-web-wordpress/Home - PROJECT_automate.html"
$baseDir = "pa-web-wordpress"
$filesDir = "pa-web-wordpress/Home - PROJECT_automate_files"

$content = [System.IO.File]::ReadAllText($htmlPath)

Write-Host "==============================="
Write-Host "1. CSS STYLESHEETS CHECK"
Write-Host "==============================="
$cssMatches = [regex]::Matches($content, '<link[^>]+href="([^"]+)"[^>]*>', 'IgnoreCase')
$cssHrefs = @()
foreach ($m in $cssMatches) {
    if ($m.Value -match 'rel=["'']stylesheet["'']' -or $m.Groups[1].Value -match '\.css') {
        $cssHrefs += $m.Groups[1].Value
    }
}
$missingCss = @()
$foundCss = @()
$externalCss = @()
foreach ($href in ($cssHrefs | Select-Object -Unique)) {
    if ($href -like "http*" -or $href -like "//*") {
        $externalCss += $href
    } elseif ($href -like "data:*") {
        # ignore data uri
    } else {
        $decoded = [System.Uri]::UnescapeDataString($href)
        $full = Join-Path $baseDir $decoded
        if (Test-Path $full) { $foundCss += $href } else { $missingCss += $href }
    }
}
Write-Host "Found CSS: $($foundCss.Count), Missing CSS: $($missingCss.Count), External CSS: $($externalCss.Count)"
if ($missingCss.Count -gt 0) {
    Write-Host "Missing CSS files:"
    $missingCss | ForEach-Object { Write-Host "  - $_" }
}

Write-Host "`n==============================="
Write-Host "2. JAVASCRIPT SCRIPTS CHECK"
Write-Host "==============================="
$jsMatches = [regex]::Matches($content, '<script[^>]+src="([^"]+)"', 'IgnoreCase')
$missingJs = @()
$foundJs = @()
$externalJs = @()
foreach ($m in $jsMatches) {
    $src = $m.Groups[1].Value
    if ($src -like "http*" -or $src -like "//*") {
        $externalJs += $src
    } elseif ($src -like "data:*") {
    } else {
        $decoded = [System.Uri]::UnescapeDataString($src)
        $full = Join-Path $baseDir $decoded
        if (Test-Path $full) { $foundJs += $src } else { $missingJs += $src }
    }
}
Write-Host "Found JS: $($foundJs.Count), Missing JS: $($missingJs.Count), External JS: $($externalJs.Count)"
if ($missingJs.Count -gt 0) {
    Write-Host "Missing JS files:"
    $missingJs | Select-Object -Unique | ForEach-Object { Write-Host "  - $_" }
}
if ($externalJs.Count -gt 0) {
    Write-Host "External JS files:"
    $externalJs | Select-Object -Unique | ForEach-Object { Write-Host "  - $_" }
}

Write-Host "`n==============================="
Write-Host "3. IMAGES & SRCSET AUDIT"
Write-Host "==============================="
$allImgRefs = @()
$imgMatches = [regex]::Matches($content, '<img[^>]+src="([^"]+)"', 'IgnoreCase')
foreach ($m in $imgMatches) { $allImgRefs += $m.Groups[1].Value }

$srcsetMatches = [regex]::Matches($content, 'srcset="([^"]+)"', 'IgnoreCase')
foreach ($s in $srcsetMatches) {
    $parts = $s.Groups[1].Value -split ','
    foreach ($p in $parts) {
        $trimmed = $p.Trim()
        if ($trimmed) {
            $url = ($trimmed -split '\s+')[0]
            if ($url) { $allImgRefs += $url }
        }
    }
}

$missingImg = @()
$foundImg = @()
$externalImg = @()
foreach ($ref in ($allImgRefs | Select-Object -Unique)) {
    if ($ref -like "data:*") { continue }
    if ($ref -like "http*" -or $ref -like "//*") {
        $externalImg += $ref
    } else {
        $decoded = [System.Uri]::UnescapeDataString($ref)
        $full = Join-Path $baseDir $decoded
        if (Test-Path $full) { $foundImg += $ref } else { $missingImg += $ref }
    }
}
Write-Host "Total unique image references in HTML: $(($allImgRefs | Select-Object -Unique).Count)"
Write-Host "Found local images: $($foundImg.Count), Missing local images: $($missingImg.Count), External images: $($externalImg.Count)"
if ($missingImg.Count -gt 0) {
    Write-Host "Missing images:"
    $missingImg | ForEach-Object { Write-Host "  - $_" }
}
if ($externalImg.Count -gt 0) {
    Write-Host "External image URLs in HTML:"
    $externalImg | ForEach-Object { Write-Host "  - $_" }
}

Write-Host "`n==============================="
Write-Host "4. ANCHOR LINKS (HREFs)"
Write-Host "==============================="
$aMatches = [regex]::Matches($content, '<a[^>]+href="([^"]+)"', 'IgnoreCase')
$allHrefs = @()
foreach ($m in $aMatches) { $allHrefs += $m.Groups[1].Value }
$uniqueHrefs = $allHrefs | Select-Object -Unique
Write-Host "Total unique anchor hrefs: $($uniqueHrefs.Count)"
$uniqueHrefs | ForEach-Object { Write-Host "  - $_" }

Write-Host "`n==============================="
Write-Host "5. VIDEO / IFRAME / EMBEDS"
Write-Host "==============================="
$iframeMatches = [regex]::Matches($content, '<iframe[^>]+src="([^"]+)"', 'IgnoreCase')
Write-Host "Iframes count: $($iframeMatches.Count)"
foreach ($m in $iframeMatches) { Write-Host "  iframe src: $($m.Groups[1].Value)" }

$videoSrcMatches = [regex]::Matches($content, '<source[^>]+src="([^"]+)"', 'IgnoreCase')
Write-Host "Video <source> count: $($videoSrcMatches.Count)"
foreach ($m in $videoSrcMatches) { Write-Host "  source src: $($m.Groups[1].Value)" }

$videoMatches = [regex]::Matches($content, '<video[^>]*src="([^"]+)"', 'IgnoreCase')
Write-Host "Video src count: $($videoMatches.Count)"
foreach ($m in $videoMatches) { Write-Host "  video src: $($m.Groups[1].Value)" }
