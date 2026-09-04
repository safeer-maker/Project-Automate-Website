# PROJECT:automate Extracted Website Data & Astro Blueprint

This repository folder contains the full extraction of **[https://projectautomate.com/](https://projectautomate.com/)**, organized for immediate analysis and 1:1 recreation in Astro.

## Folder Structure

```text
extracted_projectautomate/
├── api_data/                    # Raw JSON data from WordPress REST API
│   ├── pages.json               # Full models for 36 pages (rendered HTML, metadata)
│   ├── posts.json               # Full models for 36 blog posts
│   ├── media.json               # Catalog of all media items with dimensions & URLs
│   ├── categories.json          # Taxonomy & categories
│   └── site_info.json           # WP site details & namespaces
├── pages_html/                  # 36 complete standalone HTML snapshots
│   ├── home.html
│   ├── about-us.html
│   ├── brands.html
│   ├── control-systems.html
│   ├── lighting-control-systems.html
│   ├── motorized-shades-and-drapery.html
│   ├── schedule.html
│   └── ... (all 36 pages)
├── posts_html/                  # 36 complete standalone blog post HTML snapshots
│   ├── beginners-guide-to-smart-lighting.html
│   ├── ultimate-checklist-for-home-theater-installation.html
│   └── ...
├── media/                       # 769 downloaded media assets (WEBP, PNG, JPG, SVG, CSS)
├── forms/                       # MetForm interactive form summaries & field definitions
│   └── forms_summary.json
└── astro_blueprint/             # Architecture blueprint for Astro reconstruction
    ├── routes_map.json          # Full URL -> Astro page path mapping
    ├── media_inventory.json     # Complete inventory of local files & source URLs
    ├── video_embeds.json        # Video links & YouTube embeds inventory
    └── ASTRO_RECREATION_GUIDE.md# Component breakdown, layouts & CSS design system
```

## Statistics
* **Pages Extracted**: 36
* **Blog Posts Extracted**: 36
* **Media Assets Downloaded**: 769 files
* **Target Framework**: Astro 4.x / 5.x with Vanilla CSS
