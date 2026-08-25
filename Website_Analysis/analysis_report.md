# PROJECT:automate Website Analysis & Redesign Strategy

> [!NOTE]
> This document provides a comprehensive analysis of the existing `PROJECT:automate` WordPress website, including its media configuration, layout structure, and recommendations for a modern redesign.

## 1. Existing Website Layout & Sketch

Based on the analysis of the provided WordPress HTML export and associated files, the website is structured as a typical long-scrolling landing page for a **luxury smart home and home automation business**.

### Core Sections (Mental Sketch)
1.  **Header / Navigation:** Contains the `PROJECT_automate_Logo` (transparent PNG/WEBP) and navigation links. Includes off-canvas menu widgets and a search bar.
2.  **Hero Section:** A visually heavy section featuring an intro heading ("Design, technology and living — as one"), likely paired with an auto-playing video or a high-quality luxury interior image.
3.  **About / Core Value Proposition:** Emphasizes that systems are "carefully planned around your architecture, interior design, routines, and expectations."
4.  **Services / Solutions Grid:** Showcases specific capabilities using imagery and badges:
    *   **Motorized Shades:** `Lutron-Motorized-Shades-scaled.webp`
    *   **Power & Energy:** `Savant-Power-PS20.webp`
    *   **Security/Alarms:** `alarm-somfy-lp-002.webp`
    *   **Access Control:** `Access-Control-Systems-3-v2.webp`
    *   **Audio Solutions:** `audio-solution.png`
    *   **Home Theater:** `VismaraDesign_HomeTheater-Onassis-2.webp`
5.  **Trust Signals & Certifications:** Displays badges to build credibility in the high-end market:
    *   CEDIA Certification
    *   HTA Certification
    *   17 Years in Business Badge
6.  **Footer:** Standard contact info, social icons, and newsletter signup.

## 2. Media Configuration & Deep Dive

The current site relies heavily on Elementor (a WordPress page builder) and serves a mix of `webp` (modern, optimized) and `png`/`jpg` formats. 

### Current Media Breakdown
*   **Logos & Branding:** PNG and WEBP variants.
*   **Hero/Atmosphere Images:** AI-generated or stock luxury imagery.
*   **Product/Partner Shots:** Specific brand equipment (Lutron, Savant, Somfy).
*   **Typography/Headings as Images:** Interestingly, some text headings are saved as images (`Heading-1-→-Design-technology...png`). This is bad for SEO and accessibility.

> [!WARNING]
> **Current Issues:** Using images for headings hurts SEO significantly. Elementor injects a massive amount of unnecessary CSS/JS (DOM bloat), making the site slower than it needs to be.

## 3. Alternative Media Strategy (For Client Request)
To elevate this to a "premium" aesthetic, you should replace generic Freepik/stock images with high-end, curated media:

1.  **Cinematic Video Backgrounds:** Instead of static hero images, ask the client for 5-10 second looping B-roll of a luxury living room where shades automatically rise or lights dim.
2.  **Architectural Photography:** Request high-resolution, professionally shot photos of their *actual* past installations. If not available, use premium stock sites (like Unsplash, Pexels, or Artgrid) focusing on "modern luxury interior design" and "minimalist smart home".
3.  **UI Mockup Overlays:** Instead of photos of hardware (like a Savant box), show a sleek iPhone or iPad screen running the Savant/Control4 app, overlaying a beautiful room.
4.  **Vector Icons (SVG):** Replace PNG badges (like the 17 years badge or CEDIA logos) with crisp SVG files for infinite scalability and zero pixelation on retina displays.
