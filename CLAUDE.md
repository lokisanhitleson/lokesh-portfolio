# Lokesh T - Full Stack Developer Portfolio

> A modern, animated portfolio website showcasing 11+ years of full-stack development expertise in healthcare, fintech, and Web3 technologies.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Theme Migration History](#theme-migration-history)
3. [Design System & Color Scheme](#design-system--color-scheme)
4. [Tech Stack](#tech-stack)
5. [Project Structure](#project-structure)
6. [Components Guide](#components-guide)
7. [Pages & Routing](#pages--routing)
8. [Data Management](#data-management)
9. [API Routes](#api-routes)
10. [Development Guide](#development-guide)
11. [Color Usage Guidelines](#color-usage-guidelines)
12. [Animations & Effects](#animations--effects)
13. [Deployment](#deployment)
14. [Future Enhancements](#future-enhancements)

---

## Project Overview

**Project Name:** lokesh-portfolio
**Version:** 1.1.0
**Type:** Personal Portfolio Website
**Owner:** Lokesh T - Lead Full Stack Developer
**Contact:** lokesh603@gmail.com | +91 7708325296 | Chennai, Tamil Nadu, India

### Key Features

- **Interactive 3D Background:** Vanta.js NET effect with Three.js
- **Smooth Animations:** Framer Motion throughout
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Dark Theme:** Custom cyan and dark blue color palette
- **Project Showcase:** 7 featured projects with dedicated detail pages
- **Credentials Page:** Professional certifications and testimonials
- **Contact Form:** Interactive form with Web3Forms API integration
- **Professional Content:** Comprehensive skills, experience, and achievements

### Professional Highlights

- 30+ Technical Skills
- 20+ Projects Delivered
- 40+ Team Members Mentored
- 5 Different Tech Domains
- 500+ Healthcare Facilities Served
- $5M+ Total Value Locked (DeFi)
- 10,000+ Daily Active Users (Telefy)

---

## Theme Migration History

### From Light Theme to Dark Theme (February 2025)

**Background:** This portfolio was originally developed with a light theme (white backgrounds, dark text). In February 2025, the design was completely migrated to a dark theme to create a more modern, professional aesthetic.

### Migration Summary

**Original Light Theme:**

- Primary background: `#ffffff` (white)
- Card backgrounds: `#ffffff` (white)
- Text: Dark colors on light backgrounds
- Borders: Gray (`#e5e7eb`, `#d1d5db`)
- Accent: Default Tailwind blues

**New Dark Theme:**

- Primary background: `#05121c` (very dark blue)
- Card backgrounds: `#1a3e4a` (medium dark blue)
- Primary text/accents: `#67f8f7` (bright cyan)
- Body text: `#d1d5db` (light gray)
- Borders: Cyan with opacity `rgba(103, 248, 247, 0.2)`

### Components Updated

✅ **Completed Migrations:**

1. **Hero Component** - Migrated first with Vanta.js 3D background using dark theme
2. **About Component** - Migrated with dark cards and cyan accents
3. **Navbar Component** - Updated from `bg-white/5` to `bg-[#05121c]/95` with cyan borders
4. **Contact Page** - Complete overhaul:
   - Form container: white → `#1a3e4a`
   - Form inputs: white → `#05121c` with cyan borders
   - Social buttons: default blues → dark theme with cyan hovers
5. **Projects Page** - Comprehensive update:
   - Project cards: white → `#1a3e4a`
   - Modal: white → `#1a3e4a`
   - Technology tags: light accents → dark with cyan
   - Added cyan glow effects on hover
6. **Footer Component** - Enhanced with cyan accents and proper text colors

### Key Changes Made

**1. Global CSS Updates (`/src/app/globals.css`):**

```css
/* Added accent color definition */
--color-accent: var(--color-skyblue-400); /* #67f8f7 */

/* Added custom utility classes */
.text-accent {
  color: var(--color-accent);
}
.bg-accent {
  background-color: var(--color-accent);
}
.bg-accent/10 {
  background-color: rgba(103, 248, 247, 0.1);
}
.border-accent {
  border-color: var(--color-accent);
}

/* Added cyan glow effects */
.shadow-cyan-glow {
  box-shadow: 0 0 30px rgba(103, 248, 247, 0.3);
}
.hover\:shadow-cyan-glow:hover {
  box-shadow: 0 0 30px rgba(103, 248, 247, 0.3);
}
```

**2. Color Replacements Across Components:**

| Old Light Theme            | New Dark Theme                                    | Usage                  |
| -------------------------- | ------------------------------------------------- | ---------------------- |
| `bg-white`                 | `bg-[#1a3e4a]`                                    | Cards, form containers |
| `bg-white/5`               | `bg-[#05121c]/95`                                 | Navbar background      |
| `text-gray-900`            | `text-[#67f8f7]`                                  | Headings               |
| `text-gray-600`            | `text-gray-300`                                   | Body text              |
| `border-gray-300`          | `border-[#67f8f7]/30`                             | Form inputs            |
| `border-gray-200`          | `border-[#67f8f7]/20`                             | Dividers, mobile menu  |
| `bg-blue-600`              | `bg-[#1a3e4a]`                                    | Social buttons         |
| `bg-accent/10 text-accent` | `bg-[#05121c] text-[#67f8f7] border-[#67f8f7]/30` | Technology tags        |

**3. Enhanced Visual Effects:**

- Added cyan glow on card hover: `hover:shadow-[0_0_30px_rgba(103,248,247,0.3)]`
- Updated focus states to use cyan: `focus:border-[#67f8f7]`
- Improved hover transitions for all interactive elements

### Design Philosophy

The dark theme was chosen to:

1. **Reduce eye strain** - Easier on the eyes during extended viewing
2. **Modern aesthetic** - Aligns with contemporary web design trends
3. **Professional appearance** - Dark themes are popular in tech portfolios
4. **Highlight content** - Cyan accents create strong visual hierarchy
5. **Better contrast** - Bright cyan (`#67f8f7`) pops against dark backgrounds

### Technical Decisions

**Why these specific colors?**

- **#05121c (Very Dark Blue):** Deep enough to feel dark, blue tint adds warmth over pure black
- **#1a3e4a (Medium Dark Blue):** Provides elevation for cards without being too light
- **#67f8f7 (Bright Cyan):** High contrast, energetic, tech-forward, excellent for CTAs

**Color Accessibility:**

- Contrast ratio between `#67f8f7` and `#05121c`: ~12.5:1 (WCAG AAA)
- Contrast ratio between `#d1d5db` and `#05121c`: ~11.8:1 (WCAG AAA)
- All text meets WCAG 2.1 Level AAA standards

### Migration Best Practices Used

1. **Consistent color values** - Used exact hex codes throughout, no variations
2. **Semantic naming** - "primary", "secondary", "accent" for maintainability
3. **Opacity control** - Used rgba() for borders and backgrounds (e.g., `/20`, `/30`)
4. **Hover states** - Every interactive element has cyan hover effect
5. **Focus indicators** - Form inputs have clear focus states with cyan borders
6. **Visual hierarchy** - Headings (cyan), body (gray), de-emphasized (darker gray)

### Before/After Comparison

**Navbar:**

- Before: `bg-white/5 border-gray-200`
- After: `bg-[#05121c]/95 border-[#67f8f7]/20`

**Contact Form:**

- Before: `bg-white` container with `border-gray-300` inputs
- After: `bg-[#1a3e4a]` container with `bg-[#05121c] border-[#67f8f7]/30` inputs

**Project Cards:**

- Before: `bg-white shadow-sm`
- After: `bg-[#1a3e4a] border-[#67f8f7]/20 hover:shadow-[0_0_30px_rgba(103,248,247,0.3)]`

**Technology Tags:**

- Before: `bg-accent/10 text-accent`
- After: `bg-[#05121c] text-[#67f8f7] border-[#67f8f7]/30`

### Future Enhancements

Potential improvements for the dark theme:

- [ ] Add theme toggle (dark/light mode switcher)
- [ ] Implement theme persistence with localStorage
- [ ] Add smooth theme transition animations
- [ ] Create dark mode variants for images
- [ ] Add "system preference" detection

### Troubleshooting

**Common issues after migration:**

**Issue:** Text appears too bright/hard to read
**Solution:** Use `text-gray-300` for body text instead of pure white

**Issue:** Borders too prominent
**Solution:** Use opacity values (`/20`, `/30`) instead of solid borders

**Issue:** Cards blend with background
**Solution:** Ensure cards use `#1a3e4a` while page background uses `#05121c`

**Issue:** Hover states not visible enough
**Solution:** Add both color change AND cyan glow shadow for clear feedback

---

## Design System & Color Scheme

### Primary Colors

**IMPORTANT:** This portfolio follows a strict dark theme color palette. All pages and components must adhere to these colors for consistency.

```css
/* Primary Colors */
--primary-text: #67f8f7; /* Bright Cyan - Main text and accents */
--primary-dark: #05121c; /* Very Dark Blue - Main background */
--secondary-bg: #1a3e4a; /* Medium Dark Blue - Secondary backgrounds */

/* RGB Versions (for opacity control) */
--primary-text-rgb: 103, 248, 247;
--primary-dark-rgb: 5, 18, 28;
```

### Color Usage Guide

| Element              | Color                  | Usage                              |
| -------------------- | ---------------------- | ---------------------------------- |
| **Page Background**  | `#05121c`              | All page backgrounds               |
| **Primary Text**     | `#67f8f7`              | Headings, important text, CTAs     |
| **Secondary Text**   | `#94a3b8`              | Body text, descriptions            |
| **Hover States**     | `#67f8f7`              | All interactive elements           |
| **Card Backgrounds** | `#1a3e4a`              | Cards, sections, elevated surfaces |
| **Borders**          | `#67f8f7` with opacity | Subtle borders and dividers        |
| **Gradients**        | Purple to Cyan         | Special accent elements            |

### Tailwind CSS Custom Classes

```css
/* Apply in components */
.bg-primary        /* #05121c - Dark background */
/* #05121c - Dark background */
/* #05121c - Dark background */
/* #05121c - Dark background */
/* #05121c - Dark background */
/* #05121c - Dark background */
/* #05121c - Dark background */
/* #05121c - Dark background */
.bg-secondary      /* #1a3e4a - Secondary background */
.text-primary      /* #67f8f7 - Cyan text */
.gradient-text     /* Purple to cyan gradient text */
.bg-opposite-gradient; /* Purple to cyan gradient background */
```

### Extended Color Palette

The `globals.css` defines a comprehensive skyblue palette (skyblue-900 to skyblue-1600) where:

- **skyblue-1600** = `#05121c` (Primary dark)
- **skyblue-1500** = `#1a3e4a` (Secondary)
- **skyblue-50** = `#67f8f7` (Bright cyan)

### CSS Variables Defined

```css
/* In globals.css */
--background: #05121c;
--foreground: #67f8f7;

/* Extended palette with RGB variants */
--skyblue-1600: 5 18 28; /* Primary dark */
--skyblue-1500: 26 62 74; /* Secondary */
--skyblue-50: 103 248 247; /* Primary cyan */
/* ... and 20+ more shade variants */
```

---

## Tech Stack

### Core Framework

- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - Latest stable version
- **TypeScript 5.x** - Full type safety
- **Node.js 20+** - Runtime environment

### Frontend Libraries

- **Framer Motion 12.23.24** - Advanced animations
- **React Icons 5.5.0** - Icon library
- **React Scroll 1.9.3** - Smooth scrolling
- **Three.js** (CDN) - 3D graphics library
- **Vanta.js** (CDN) - Animated backgrounds

### Styling

- **Tailwind CSS 4.x** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

### Development Tools

- **ESLint 9.x** - Code linting
- **TypeScript ESLint** - TypeScript linting rules
- **React Compiler** - React optimization (experimental)

---

## Project Structure

```
lokesh-portfolio/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── 1751890150324.jpg       # Profile photo
│   │   │   ├── projects/               # Project screenshots & logos
│   │   │   ├── certificates/           # Certificate PDF files
│   │   │   └── certificate-logo/       # Certificate issuer logos
│   │   ├── videos/                     # Project demo videos
│   │   └── js/
│   │       ├── three.min.js            # 3D rendering library
│   │       ├── vanta.clouds.min.js     # Clouds effect (unused)
│   │       └── vanta.net.min.js        # NET effect (active)
│   └── *.svg                           # SVG icons
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts            # Contact form API (Web3Forms)
│   │   ├── contact/
│   │   │   └── page.tsx                # Contact page
│   │   ├── credentials/
│   │   │   └── page.tsx                # Credentials & testimonials page
│   │   ├── projects/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx            # Individual project detail page
│   │   │   └── page.tsx                # Projects listing page
│   │   ├── privacy/
│   │   │   └── page.tsx                # Privacy policy page
│   │   ├── terms/
│   │   │   └── page.tsx                # Terms of service page
│   │   ├── globals.css                 # Global styles + color palette
│   │   ├── layout.tsx                  # Root layout with Navbar/Footer
│   │   ├── page.tsx                    # Home page
│   │   └── favicon.ico
│   ├── components/
│   │   ├── About.tsx                   # About section component
│   │   ├── CertificateModal.tsx        # Certificate viewer modal
│   │   ├── Footer.tsx                  # Footer component
│   │   ├── Hero.tsx                    # Hero with 3D background
│   │   └── Navbar.tsx                  # Navigation component
│   └── data/
│       ├── projects.ts                 # Project data (7 projects)
│       └── credentials.ts              # Certificates & testimonials data
├── .gitignore
├── CLAUDE.md                           # This documentation file
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

### Key Directories

- **`/src/app`** - Next.js App Router pages and layouts
- **`/src/app/api`** - API routes (contact form endpoint)
- **`/src/components`** - Reusable React components
- **`/src/data`** - Data files (projects, credentials, testimonials)
- **`/public/assets`** - Static assets (images, scripts, videos, certificates)
- **Configuration files** - Root-level config for Next.js, TypeScript, Tailwind, etc.

---

## Components Guide

### Layout Components

#### Navbar (`/src/components/Navbar.tsx`)

**Type:** Client Component
**Purpose:** Main navigation header with responsive mobile menu

**Features:**

- Fixed position with backdrop blur
- Logo with initials "LT"
- Desktop navigation: Home, About, Skills, Projects, **Credentials**, Contact
- Mobile hamburger menu with slide-out panel
- "Get In Touch" CTA button
- Smooth scroll to sections

**Color Usage:**

```tsx
// Background with cyan accent
className="bg-[#05121c]/95 backdrop-blur-md border-b border-[#67f8f7]/20"

// Logo text
className="text-[#67f8f7]"

// Hover states
hover:text-[#67f8f7]
```

**State Management:**

```tsx
const [isOpen, setIsOpen] = useState(false);
```

#### Footer (`/src/components/Footer.tsx`)

**Type:** Server Component
**Purpose:** Site footer with links and information

**Features:**

- 4-column grid layout (responsive)
- About section with description
- Quick links navigation
- Specializations list
- Social media icons (GitHub, LinkedIn, Twitter, Email)
- Copyright notice
- Privacy/Terms links

**Color Usage:**

```tsx
// Background
className="bg-[#1a3e4a] text-gray-300"

// Headings
className="text-[#67f8f7]"

// Hover states
hover:text-[#67f8f7]
```

### Page Section Components

#### Hero (`/src/components/Hero.tsx`)

**Type:** Client Component
**Purpose:** Landing section with 3D animated background

**Features:**

- **Vanta.js NET Effect:** Animated 3D network background
- **Dynamic Script Loading:** Three.js and Vanta.js loaded at runtime
- **Framer Motion Animations:** Text fade-in, slide-up effects
- **Orbital Animation:** 5 stats cards orbiting around central badge
  - Center: "11+ Years" experience badge
  - Orbiting: 30+ Skills, 20+ Projects, 40+ Mentored, 5 Domains
- **Social Links:** GitHub, LinkedIn, Email
- **CTAs:** "View Work" and "Get In Touch" buttons

**Vanta Configuration:**

```tsx
VantaEffect.NET({
  el: vantaRef.current,
  THREE: THREE,
  color: 0x67f8f7, // Primary cyan
  backgroundColor: 0x05121c, // Primary dark
  maxDistance: 18.0,
  spacing: 20.0,
  showDots: true,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
});
```

**Orbital Motion:**

- Uses parametric ellipse equations
- Smooth continuous animation (12s duration)
- Complex oval path calculated via useEffect

**Color Usage:**

```tsx
// Background (via Vanta)
backgroundColor: 0x05121c

// Network lines (via Vanta)
color: 0x67f8f7

// Text and CTAs
text-[#67f8f7]
border-[#67f8f7]
```

#### About (`/src/components/About.tsx`)

**Type:** Client Component
**Purpose:** About section with skills and experience highlights

**Features:**

- Professional journey description
- 5 core strengths list
- 4 highlight stat cards (Projects, Skills, Experience, Mentored)
- Technical skills organized by category:
  - Frontend: React, React Native, Angular, TypeScript, Tailwind CSS, Next.js
  - Backend: Node.js, Express, Hapi.js, PHP, Python, RESTful APIs
  - Databases: MongoDB, MySQL, Redis, Firebase, GraphQL
  - DevOps & Cloud: AWS, Docker, Nginx, Ubuntu, Apache, CI/CD
  - Advanced: Web3, Solidity, OpenAI API, Llama API, System Design
- Scroll-triggered animations with Framer Motion
- Hover effects on skill tags

**Color Usage:**

```tsx
// Section background
className="bg-[#05121c] text-white"

// Cards
className="bg-[#1a3e4a] border-[#67f8f7]"

// Headings and accents
className="text-[#67f8f7]"

// Skill tags
className="bg-[#1a3e4a] text-[#67f8f7] border-[#67f8f7]/30"
hover:bg-[#67f8f7] hover:text-[#05121c]
```

### Page Components

#### Home Page (`/src/app/page.tsx`)

**Type:** Server Component
**Purpose:** Main landing page

**Structure:**

```tsx
<main>
  <Hero />
  <About />
</main>
```

#### Contact Page (`/src/app/contact/page.tsx`)

**Type:** Client Component
**Purpose:** Contact form with working API integration

**Features:**

- Controlled form with React state
- Form fields: Name, Email, Subject, Message
- Submit button with loading state
- Success/error message handling
- **API Integration:** Posts to `/api/contact` (Web3Forms service)
- Contact details card:
  - Email: lokesh603@gmail.com
  - Phone: +91 7708325296
  - Location: Chennai, Tamil Nadu, India
  - Response time: Within 24 hours
- Social media links (GitHub, LinkedIn)

**State Management:**

```tsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
```

**API Submission:**

```tsx
const response = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

**Color Usage:**

```tsx
// Page background
className="min-h-screen bg-primary"

// Form inputs
className="bg-[#05121c] border-[#67f8f7]/30 text-white"
focus:border-[#67f8f7]

// Submit button
className="bg-gradient-to-r from-purple-600 to-[#67f8f7]"

// Contact info cards
className="bg-[#67f8f7]/10"
```

---

#### Credentials Page (`/src/app/credentials/page.tsx`)

**Type:** Client Component
**Purpose:** Display professional certifications and testimonials

**Features:**

- **Certifications Section:**
  - Grid layout (3 columns desktop)
  - 8 certificates (6 AWS, 2 HackerRank)
  - Certificate issuer logos
  - Certificate badge icon with cyan glow
  - Skills preview (first 3 skills + count)
  - Click to open modal with full details
- **Testimonials Section:**
  - Grid layout (2 columns)
  - 6 testimonials from clients, advisors, colleagues
  - Avatar initials
  - LinkedIn profile links
  - Relationship badges
  - Quote styling
- **Certificate Modal:**
  - Full certificate details
  - Skills list
  - PDF viewer (opens certificate PDF)
  - Close functionality

**Data Sources:**

```tsx
import { certificates, testimonials } from "@/data/credentials";
```

**Certificate Interface:**

```tsx
interface Certificate {
  id: number;
  title: string;
  issuer: "AWS" | "HackerRank" | "Google" | "Microsoft" | "MongoDB";
  logo: string;
  description: string;
  pdfUrl: string;
  date: string;
  skills: string[];
}
```

**Testimonial Interface:**

```tsx
interface Testimonial {
  id: number;
  name: string;
  position: string;
  organization: string;
  testimonial: string;
  relationship: string;
  linkedinUrl?: string;
}
```

**Color Usage:**

```tsx
// Page background
className="bg-primary"

// Certificate cards
className="bg-[#1a3e4a] border-[#67f8f7]/20"
hover:shadow-[0_0_30px_rgba(201,130,255,0.4)]

// Badge icon with glow
className="drop-shadow-[0_0_8px_rgba(103,248,247,0.6)]"

// Testimonial cards
className="bg-[#1a3e4a] border-[#67f8f7]/20"
```

#### Projects Page (`/src/app/projects/page.tsx`)

**Type:** Client Component
**Purpose:** Project showcase listing with navigation to detail pages

**Features:**

- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- 7 featured projects:
  1. **Sevily** - Family/Friends Health Monitoring Platform
  2. **Mazoapps Health** - AI-Powered Healthcare Platform
  3. **Telefy** - DeFi Trading Platform with Credit Scoring
  4. **Bocxy** - Salon & Spa Management SaaS
  5. **Rungila** - Career Guidance Platform
  6. **MileReach** - Logistics Management Platform
  7. **Aster Dialer** - VoIP Call Center Solution
- Click to navigate to dedicated detail page (`/projects/[slug]`)
- Technology tags (limited to 3 on cards, with "+X more" indicator)
- Hover animations with cyan/purple glow
- Project data imported from `/src/data/projects.ts`

**Data Structure:**

```tsx
interface Project {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  role: string;
  duration: string;
  teamSize: string;
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    devops: string[];
    other: string[];
  };
  problem: string;
  solution: string;
  keyFeatures: string[];
  results: string[];
  metrics: { label: string; value: string }[];
  screenshots: { url: string; caption: string }[];
  videoUrl?: string;
  github?: string;
  demo?: string;
  logo: string;
  banner: string;
  bannerBackground: "light" | "dark";
}
```

**Color Usage:**

```tsx
// Page background
className="min-h-screen bg-primary"

// Project cards
className="bg-[#1a3e4a] border-[#67f8f7]/20"
hover:shadow-[0_0_30px_rgba(201,130,255,0.4)]

// Technology tags
className="bg-gradient-to-r from-purple-600/20 to-[#67f8f7]/20 border-purple-400/40"
```

---

#### Project Detail Page (`/src/app/projects/[slug]/page.tsx`)

**Type:** Client Component (Dynamic Route)
**Purpose:** Comprehensive project case study with full details

**Features:**

- **Hero Section:** Large logo, title, tagline, CTA buttons
- **Info Cards:** Role, Duration, Team Size
- **Video Demo:** YouTube embed or local video player
- **About Section:** Full project description
- **Challenge Section:** Problem statement
- **Solution Section:** Technical solution + key features
- **Screenshots Gallery:** Clickable images with lightbox
- **Tech Stack:** Categorized by Frontend, Backend, Database, DevOps, Other
- **Results & Impact:** Achievement metrics
- **CTA Section:** Contact and navigation buttons

**Sections:**

1. **Hero** - Project branding and metadata
2. **Video Demo** - If available (YouTube or local)
3. **Overview** - Detailed description
4. **The Challenge** - Problem statement
5. **The Solution** - Implementation details + key features
6. **Screenshots** - Image gallery with captions
7. **Technology Stack** - Complete tech breakdown
8. **Results & Impact** - Measurable outcomes
9. **CTA** - Contact and navigation

**Color Usage:**

```tsx
// Background gradients
className="bg-gradient-to-br from-purple-900/20 via-[#05121c] to-[#1a3e4a]/30"

// Cards and sections
className="bg-[#1a3e4a] border-[#67f8f7]/20"

// Tech tags with hover glow
hover:shadow-[0_0_15px_rgba(201,130,255,0.4)]
```

#### Root Layout (`/src/app/layout.tsx`)

**Type:** Server Component
**Purpose:** Application root layout wrapper

**Features:**

- HTML lang attribute
- Metadata and SEO configuration
- Navbar (fixed at top)
- Main content area
- Footer (at bottom)
- Geist Sans font (Next.js default)

**Metadata:**

```tsx
export const metadata: Metadata = {
  title: "Lokesh T - Lead Full Stack Developer",
  description: "Experienced Lead Full Stack Developer...",
  keywords: ["Full Stack Developer", "React Native", "Node.js", ...],
  openGraph: {
    title: "Lokesh T - Lead Full Stack Developer",
    description: "Portfolio showcasing 11+ years of experience...",
    type: "website",
  },
};
```

---

## Pages & Routing

### Route Structure

| Route                | Component                              | Description                          |
| -------------------- | -------------------------------------- | ------------------------------------ |
| `/`                  | `/src/app/page.tsx`                    | Home page with Hero + About          |
| `/contact`           | `/src/app/contact/page.tsx`            | Contact form with API integration    |
| `/projects`          | `/src/app/projects/page.tsx`           | Projects listing (7 projects)        |
| `/projects/[slug]`   | `/src/app/projects/[slug]/page.tsx`    | Individual project detail page       |
| `/credentials`       | `/src/app/credentials/page.tsx`        | Certifications & testimonials        |
| `/privacy`           | `/src/app/privacy/page.tsx`            | Privacy policy                       |
| `/terms`             | `/src/app/terms/page.tsx`              | Terms of service                     |
| `/api/contact`       | `/src/app/api/contact/route.ts`        | Contact form API (POST)              |

### Anchor Navigation

Smooth scrolling to sections (from Navbar):

- `/#about` - About section
- `/#skills` - Skills section

### Dynamic Routes

**Project Detail Pages:**
- `/projects/sevily` - Sevily project
- `/projects/mazoapps-health` - Mazoapps Health project
- `/projects/telefy` - Telefy project
- `/projects/bocxy` - Bocxy project
- `/projects/rungila` - Rungila project
- `/projects/milereach` - MileReach project
- `/projects/aster-dialer` - Aster Dialer project

---

## Data Management

### Data Files Structure

All content data is centralized in TypeScript files with proper interfaces for type safety.

#### Projects Data (`/src/data/projects.ts`)

**Purpose:** Centralized storage for all project information

**Contains:**
- 7 complete project case studies
- Full project metadata (title, tagline, description)
- Technology stacks (frontend, backend, database, devops, other)
- Problem statements and solutions
- Key features lists
- Results and impact metrics
- Screenshots with captions
- Video URLs (YouTube or local)
- Demo and GitHub links
- Project logos and banners

**Usage:**
```tsx
import { projects } from "@/data/projects";

// Get all projects
const allProjects = projects;

// Find project by slug
const project = projects.find(p => p.slug === "sevily");
```

**Projects List:**
1. Sevily - Healthcare monitoring platform
2. Mazoapps Health - AI-powered healthcare SaaS
3. Telefy - DeFi platform with credit scoring
4. Bocxy - Salon & spa management
5. Rungila - Career guidance platform
6. MileReach - Logistics management
7. Aster Dialer - VoIP call center solution

#### Credentials Data (`/src/data/credentials.ts`)

**Purpose:** Centralized storage for certifications and testimonials

**Contains:**
- **Certificates Array:**
  - 8 professional certifications
  - 6 AWS certifications (Solutions Architect, DevOps, Databases, etc.)
  - 2 HackerRank certifications (Node.js, Problem Solving)
  - Certificate metadata (issuer, date, description)
  - Skills covered
  - PDF file paths
  - Issuer logos

- **Testimonials Array:**
  - 6 professional testimonials
  - Client testimonials
  - Advisor recommendations
  - Colleague endorsements
  - LinkedIn profile links
  - Relationship context (Client, Advisor, Colleague, Former Director)

**Usage:**
```tsx
import { certificates, testimonials } from "@/data/credentials";

// Display all certificates
certificates.map(cert => <CertificateCard {...cert} />);

// Display all testimonials
testimonials.map(test => <TestimonialCard {...test} />);
```

**Testimonial Sources:**
- PayPal Director of Product Management
- LTIMindtree Senior Specialist
- Rungila CEO (Client)
- Leidos Automation Architect (Client)
- Tevatel CTO (Former Director)
- Unitch Senior Developer (Colleague)

### Benefits of Centralized Data

1. **Single Source of Truth** - All content in one place
2. **Type Safety** - TypeScript interfaces prevent errors
3. **Easy Updates** - Modify content without touching components
4. **Reusability** - Same data used across multiple pages
5. **Scalability** - Easy to add new projects/certificates
6. **Version Control** - Track content changes in Git

---

## API Routes

### Contact Form API (`/src/app/api/contact/route.ts`)

**Type:** Next.js API Route (POST)
**Purpose:** Handle contact form submissions via Web3Forms

**Functionality:**

- Receives form data from contact page
- Validates required fields (name, email, subject, message)
- Submits to Web3Forms API for email delivery
- Returns success/error response to client

**Request Format:**

```json
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss..."
}
```

**Response Format:**

```json
// Success
{
  "success": true,
  "message": "Message sent successfully!"
}

// Error
{
  "success": false,
  "message": "All fields are required"
}
```

**Implementation:**

```tsx
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  // Validation
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { success: false, message: 'All fields are required' },
      { status: 400 }
    );
  }

  // Submit to Web3Forms
  const formData = new FormData();
  formData.append('access_key', apiKey);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('subject', subject);
  formData.append('message', message);

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  });

  // Handle response...
}
```

**Environment Variables:**

```bash
WEB3FORMS_ACCESS_KEY=your_api_key_here
```

**Web3Forms Features:**

- Free email delivery service
- No backend infrastructure needed
- Spam protection included
- Customizable email templates
- Delivery notifications
- Response tracking

**Error Handling:**

- Field validation (400 error)
- API failure handling (500 error)
- Network error catching
- User-friendly error messages

---

## Development Guide

### Installation

```bash
# Clone repository
git clone [repository-url]
cd lokesh-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### TypeScript Configuration

**Path Aliases:**

```json
{
  "@/*": ["./src/*"],
  "@/components/*": ["./src/components/*"],
  "@/app/*": ["./src/app/*"]
}
```

**Usage:**

```tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
```

### Environment Variables

**Current Usage:**

```bash
# .env.local
WEB3FORMS_ACCESS_KEY=your_web3forms_api_key
```

**Web3Forms Integration:**
- Contact form submissions are sent to Web3Forms API
- API key can be set via environment variable or uses default
- Handles email delivery for contact form
- See: `/src/app/api/contact/route.ts`

**For Future Backend Integration:**

```bash
# Additional variables for future features
NEXT_PUBLIC_API_URL=your_api_url
SENDGRID_API_KEY=your_sendgrid_key (if switching from Web3Forms)
DATABASE_URL=your_database_url
```

---

## Color Usage Guidelines

### ✅ DO: Correct Color Implementation

```tsx
// Page backgrounds - Always use primary dark
<div className="min-h-screen bg-[#05121c]">

// Card/section backgrounds - Use secondary
<div className="bg-[#1a3e4a]">

// Primary text and headings - Use cyan
<h1 className="text-[#67f8f7]">

// Hover states - Always transition to cyan
<button className="text-gray-400 hover:text-[#67f8f7] transition-colors">

// Borders - Use cyan with opacity
<div className="border border-[#67f8f7]/20">

// Shadows on hover - Use cyan glow
<div className="hover:shadow-[0_0_30px_rgba(103,248,247,0.3)]">
```

### ❌ DON'T: Avoid These Mistakes

```tsx
// ❌ Wrong: Using white backgrounds
<div className="bg-white">

// ❌ Wrong: Using default Tailwind blues
<h1 className="text-blue-500">

// ❌ Wrong: Using black instead of dark blue
<div className="bg-black">

// ❌ Wrong: Inconsistent accent colors
<button className="text-green-500">
```

### Color Consistency Checklist

When creating new components or pages, ensure:

- [ ] Page background is `#05121c` (bg-[#05121c])
- [ ] Cards/elevated surfaces use `#1a3e4a` (bg-[#1a3e4a])
- [ ] Primary text/headings use `#67f8f7` (text-[#67f8f7])
- [ ] Secondary text uses `#94a3b8` (text-gray-400)
- [ ] Hover states transition to `#67f8f7`
- [ ] Borders use `#67f8f7` with 20-30% opacity
- [ ] Focus states use `#67f8f7` border
- [ ] Shadows use cyan with low opacity

### Testing Color Consistency

```bash
# Search for inconsistent colors
grep -r "bg-white" src/
grep -r "bg-black" src/
grep -r "text-blue-" src/
grep -r "border-blue-" src/
```

---

## Animations & Effects

### Framer Motion Patterns

**Fade In:**

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

**Slide Up:**

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

**Scroll-Triggered:**

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

**Staggered Children:**

```tsx
// Parent
transition={{ duration: 0.5, delay: 0.2 }}

// Child 1
transition={{ duration: 0.5, delay: 0.4 }}

// Child 2
transition={{ duration: 0.5, delay: 0.6 }}
```

### Vanta.js 3D Effects

**NET Effect Configuration:**

```tsx
import { useEffect, useRef, useState } from "react";

const VantaComponent = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaRef.current || vantaEffect) return;

    // Load Three.js
    const script1 = document.createElement("script");
    script1.src = "/assets/js/three.min.js";
    script1.async = true;

    script1.onload = () => {
      // Load Vanta.js
      const script2 = document.createElement("script");
      script2.src = "/assets/js/vanta.net.min.js";
      script2.async = true;

      script2.onload = () => {
        const effect = (window as any).VANTA.NET({
          el: vantaRef.current,
          THREE: (window as any).THREE,
          color: 0x67f8f7, // Cyan
          backgroundColor: 0x05121c, // Dark blue
          maxDistance: 18.0,
          spacing: 20.0,
          showDots: true,
        });
        setVantaEffect(effect);
      };

      document.body.appendChild(script2);
    };

    document.body.appendChild(script1);

    // Cleanup
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="relative h-screen" />;
};
```

### Custom CSS Animations

Defined in `tailwind.config.ts`:

```typescript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'float': 'float 3s ease-in-out infinite',
}

keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  slideUp: {
    '0%': { transform: 'translateY(20px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
  },
}
```

Usage:

```tsx
<div className="animate-fade-in">Fades in</div>
<div className="animate-slide-up">Slides up</div>
<div className="animate-float">Floats continuously</div>
```

---

## Deployment

### Recommended Platform: Vercel

**Benefits:**

- Native Next.js support
- Automatic deployments from Git
- Edge network for global performance
- Built-in analytics

**Deployment Steps:**

1. **Connect Repository:**

```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel
```

2. **Configure Build Settings:**

- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

3. **Environment Variables:**
   Add any future env vars in Vercel dashboard

### Alternative Platforms

**Netlify:**

```bash
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"
```

**Self-Hosted (Docker):**

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Performance Optimization

- Enable Next.js Image Optimization
- Use next/font for font optimization
- Enable compression
- Configure caching headers
- Add sitemap.xml and robots.txt

---

## Project Maintenance

### Git Workflow

**Current Status:**

```bash
# Modified files (pending commit)
- src/app/contact/page.tsx
- src/app/globals.css
- src/app/layout.tsx
- src/app/projects/page.tsx
- src/components/About.tsx
- src/components/Footer.tsx
- src/components/Hero.tsx
- src/components/Navbar.tsx
- public/assets/js/vanta.net.min.js (untracked)
```

**Recent Commits:**

- sky color changed
- font color adjusted
- clouds lag fixed
- unused declarations removed
- initial commit

### Code Quality Standards

**TypeScript:**

- Strict mode enabled
- All components must be typed
- Use interfaces for complex objects
- Avoid `any` type

**Component Standards:**

- Use "use client" only when necessary
- Server components by default
- Props should be typed interfaces
- Cleanup effects in useEffect

**Styling Standards:**

- Tailwind utility classes preferred
- Custom CSS only for complex effects
- Follow color scheme strictly
- Responsive design required (mobile-first)

**Naming Conventions:**

- Components: PascalCase (Hero.tsx, About.tsx)
- Files: kebab-case for pages (page.tsx, layout.tsx)
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE

---

## Future Enhancements

### Completed Features ✅

1. **Backend Integration**
   - ✅ Contact form API route (`/src/app/api/contact/route.ts`)
   - ✅ Web3Forms email service integration
   - ✅ Form validation (client-side)

2. **Content Additions**
   - ✅ Credentials page with certifications and testimonials
   - ✅ Project detail pages (7 complete case studies)
   - ✅ Privacy and Terms pages

3. **Data Management**
   - ✅ Centralized project data (`/src/data/projects.ts`)
   - ✅ Centralized credentials data (`/src/data/credentials.ts`)

### Planned Features

1. **Future Enhancements**

   - Blog section with MDX support
   - Resume download button with PDF generation
   - Analytics integration (Vercel Analytics, Google Analytics)
   - Dark/light mode toggle (currently dark-only)
   - Search functionality for projects
   - Filter projects by technology/domain

2. **Performance Optimizations**

   - ✅ Image optimization with next/image (partially implemented)
   - Lazy loading for project screenshots
   - Progressive image loading
   - Code splitting improvements
   - Font optimization

3. **SEO Improvements**
   - Add sitemap.xml
   - Add robots.txt
   - Schema.org markup for projects
   - Per-page meta tags and Open Graph tags
   - Structured data for credentials

### Known Issues & Notes

- ~~Profile image not currently displayed~~ (Not needed - using Hero section)
- ✅ Social media links updated (GitHub, LinkedIn working)
- ✅ Contact form backend implemented (Web3Forms API)
- Unused `vanta.clouds.min.js` file (can be removed)
- Some project screenshots use external URLs (consider hosting locally)
- Certificate PDFs located in `/public/assets/images/certificates/`
- Web3Forms API key hardcoded in route.ts (should use env variable)

---

## Support & Contact

**Developer:** Lokesh T
**Email:** lokesh603@gmail.com
**Phone:** +91 7708325296
**Location:** Chennai, Tamil Nadu, India

**Social Links:**

- GitHub: [[github.com/lokisanhitleson](https://github.com/lokisanhitleson)]
- LinkedIn: [[linkedin.com/in/lokeshtofficial](https://www.linkedin.com/in/lokeshtofficial/)]

---

## License

Private portfolio project. All rights reserved.

---

**Last Updated:** February 2025
**Version:** 1.1.0
**Documentation Created:** February 2, 2025

---

## Quick Reference

### Essential Commands

```bash
# Development
npm run dev

# Build & Test
npm run build
npm run start

# Code Quality
npm run lint

# Git
git status
git add .
git commit -m "message"
git push
```

### Essential Files

- **Colors:** `/src/app/globals.css` (lines 1-100)
- **Config:** `/tailwind.config.ts`, `/next.config.ts`
- **Layout:** `/src/app/layout.tsx`
- **Components:** `/src/components/`
- **Pages:** `/src/app/*/page.tsx`

### Color Quick Reference

```css
/* Copy-paste ready */
bg-[#05121c]              /* Dark background */
bg-[#1a3e4a]              /* Card background */
text-[#67f8f7]            /* Cyan text */
border-[#67f8f7]/20       /* Cyan border with opacity */
hover:text-[#67f8f7]      /* Cyan hover */
shadow-[0_0_30px_rgba(103,248,247,0.3)]  /* Cyan glow */
```

---

_This documentation was generated to help AI assistants (like Claude) understand and work with this portfolio project effectively. Keep it updated as the project evolves._
