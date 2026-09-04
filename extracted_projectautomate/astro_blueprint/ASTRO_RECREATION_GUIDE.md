# PROJECT:automate — Complete Astro Architecture & Migration Guide

This guide provides the complete blueprint for recreating the entire **[PROJECT:automate](https://projectautomate.com/)** website using **Astro**, modern CSS, and clean component-driven architecture.

---

## 1. Directory & Route Mapping

The extracted website contains **36 pages** and **33 blog posts**. Below is the exact directory layout for the target Astro project:

```text
src/
├── components/
│   ├── common/
│   │   ├── Header.astro              # Luxury sticky navigation with dropdown menus & CTA
│   │   ├── MobileNav.astro           # Off-canvas mobile navigation drawer
│   │   ├── Footer.astro              # Rich footer with links, cert badges, and copyright
│   │   ├── Button.astro              # Standardized luxury button (filled, outline, glowing)
│   │   ├── SectionHeading.astro      # Subtitle badge + Title + lead paragraph
│   │   └── SeoHead.astro             # OpenGraph, Twitter card, Title, Meta description
│   ├── home/
│   │   ├── HeroSection.astro         # Autoplaying background video + animated headline
│   │   ├── SolutionPillars.astro     # Interactive cards for Lighting, Audio, Control, Security
│   │   ├── BrandMarquee.astro        # High-res vector logo carousel (Savant, Lutron, Basalte)
│   │   ├── ValuePropSection.astro    # "Design, technology and living — as one"
│   │   ├── FeatureGrid.astro         # Luxury photography with micro-interactions
│   │   └── TrustCertifications.astro # CEDIA, HTA Certified Luxury badges (17+ years)
│   ├── brands/
│   │   ├── BrandHero.astro           # Brand-specific banner & partner badge
│   │   ├── ProductShowcase.astro     # Grid of key hardware & touch panels
│   │   └── BrandSpecs.astro          # Protocol integration specs (KNX, Zigbee, IP)
│   ├── services/
│   │   ├── ServiceHero.astro         # Immersive ambient hero
│   │   ├── CapabilityList.astro      # Feature checklist with custom SVGs
│   │   └── RelatedBrands.astro       # Recommended partner brands for this service
│   ├── blog/
│   │   ├── PostCard.astro            # Article card with thumbnail, read time & category
│   │   └── BlogPagination.astro      # Archive pagination
│   └── forms/
│       ├── ConsultationForm.astro    # Multi-step private consultation booking
│       └── BudgetCalculator.astro   # Interactive smart home budget estimator
├── content/
│   ├── config.ts                     # Astro Content Collections definition
│   └── blog/                         # 33+ Markdown/MDX articles
│       ├── beginners-guide-to-smart-lighting.md
│       ├── ultimate-checklist-for-home-theater-installation.md
│       └── ...
├── layouts/
│   ├── BaseLayout.astro              # HTML skeleton, SEO, Font preloads, global styles
│   ├── PageLayout.astro              # Standard page wrapper with Header + Footer
│   ├── BrandLayout.astro             # Layout with brand-specific sidebar/specs
│   ├── ServiceLayout.astro           # Layout with service CTA & consultation triggers
│   └── BlogPostLayout.astro          # Rich typography layout with table of contents
└── pages/
    ├── index.astro                   # Homepage
    ├── about-us.astro                # About us & mission
    ├── partner.astro                 # Architect & Interior Designer Partner Program
    ├── design-partners.astro         # Design partnership details
    ├── success-stories.astro         # Client case studies & portfolio
    ├── get-inspired.astro            # Visual project gallery
    ├── project-single.astro          # Case study template with video embed
    ├── schedule.astro                # Private consultation booking scheduler
    ├── get-started.astro             # Quick onboard questionnaire
    ├── budget-calculator.astro       # Smart Home Budget Estimator
    ├── technology-support-memebership.astro # Support plans & SLAs
    ├── privacy-policy.astro          # Legal privacy policy
    ├── terms-and-conditions.astro    # Terms of service
    ├── brands/
    │   ├── index.astro               # All partner brands catalog
    │   ├── basalte.astro             # Basalte luxury switches & touchscreens
    │   ├── crestron.astro            # Crestron Home & commercial grade automation
    │   ├── lutron.astro              # Lutron HomeWorks, Ketra & motorized shades
    │   ├── savant.astro              # Savant systems & power management
    │   ├── control4.astro            # Control4 smart living ecosystem
    │   └── josh-ai.astro             # Josh.ai natural privacy-first voice control
    ├── solutions/
    │   ├── control-systems.astro     # Whole-home control
    │   ├── lighting-control-systems.astro # Intelligent architectural lighting
    │   ├── motorized-shades-and-drapery.astro # Quiet automated window treatments
    │   ├── audio-video-solutions.astro # High-fidelity multi-room AV
    │   ├── home-cinama.astro         # Bespoke private cinema & acoustic treatment
    │   ├── outdoor-living.astro      # Outdoor entertainment oasis
    │   ├── outdoor-lighting-audio.astro # Coastal Source landscape AV
    │   ├── energy-moment.astro       # Savant Power & microgrid management
    │   ├── security-systems.astro    # Smart security solutions
    │   ├── surveillance-systems.astro # 4K NDAA surveillance & analytics
    │   ├── intrusion-detection-systems.astro # Perimeter & glass-break detection
    │   ├── access-control-and-intercom.astro # 2N / Basalte IP intercoms
    │   └── hvac-and-climate-integration.astro # Climate & IAQ integration
    └── blog/
        ├── index.astro               # Blog archive
        └── [slug].astro              # Dynamic post renderer via getStaticPaths()
```

---

## 2. Design System & Style Tokens

### Color Palette (Luxury Smart Home Theme)
```css
:root {
  /* Backgrounds */
  --bg-primary: #0A0D14;
  --bg-surface: #121824;
  --bg-card: rgba(26, 34, 49, 0.7);
  --bg-glass: rgba(255, 255, 255, 0.04);

  /* Accents */
  --accent-gold: #D4AF37;
  --accent-amber: #F59E0B;
  --accent-blue: #3B82F6;
  --accent-glow: rgba(212, 175, 55, 0.18);

  /* Typography */
  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;

  /* Borders & Shadows */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-active: rgba(212, 175, 55, 0.4);
  --shadow-elevation: 0 20px 40px -15px rgba(0, 0, 0, 0.6);
  --glass-blur: blur(16px);
}
```

### Modern Typography Stack
* **Headings**: `Outfit`, `Cinzel`, or `Plus Jakarta Sans` (300, 400, 600, 700)
* **Body Text**: `Inter` (300, 400, 500)
* **Monospace / Specs**: `JetBrains Mono`

---

## 3. Blog Content Collection Schema (`src/content/config.ts`)

```typescript
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    publishDate: z.date(),
    modifiedDate: z.date().optional(),
    featuredImage: z.string().optional(),
    author: z.string().default('PROJECT:automate'),
    category: z.string().default('Smart Home'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blog: blogCollection,
};
```

---

## 4. Key Interactive Components to Rebuild

1. **Brand Showcase Slider (`BrandMarquee.astro`)**:
   * Uses CSS keyframe animations for infinitely looping crisp SVG logos (Savant, Lutron, Basalte, Crestron, Control4, Josh.ai, Coastal Source).
2. **Interactive Consultation Form (`ConsultationForm.astro`)**:
   * Multi-step lead capture for project type (Lighting, Audio, Security, Full Automation), timeline, investment tier ($25k–$50k, $50k–$100k, $100k+), and contact details.
3. **Smart Home Budget Calculator (`BudgetCalculator.astro`)**:
   * Interactive sliders for home square footage, number of rooms, and desired automation tiers (Foundation, Luxury, Ultimate) that calculate real-time estimated ranges.
4. **Hero Video Background (`HeroVideo.astro`)**:
   * High-definition video player with seamless loop, poster fallback, and subtle dark gradient overlay for text readability.

---

## 5. Assets Reference
All **769 downloaded media assets** are organized in `extracted_projectautomate/media/`. You can copy or symlink them directly into Astro's `public/assets/` or `src/assets/` directory for automated image optimization (`<Image />` component).
