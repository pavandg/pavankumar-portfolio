# Pavan Kumar DG - Portfolio

Personal portfolio site built with [Astro](https://astro.build/).

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repo:

```bash
cd ~/portfolio
git init
git add .
git commit -m "Initial portfolio site"
gh repo create pavankumardg-portfolio --public --source=. --push
```

2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and import the repo.
3. Vercel auto-detects Astro. Click **Deploy**.
4. (Optional) Add a custom domain in Vercel dashboard.

## Deploy to Netlify (Alternative)

1. Push to GitHub (same as above).
2. Go to [netlify.com](https://netlify.com), connect your repo.
3. Build command: `npm run build`
4. Publish directory: `dist`

## Site Structure

```
src/
  layouts/          Base, CaseStudy, and Post layouts
  pages/
    index.astro     Homepage
    work.astro      Work listing
    about.astro     About page
    contact.astro   Contact page
    writing.astro   Blog listing
    case-studies/   Individual case study pages
    posts/          Individual blog posts
  styles/
    global.css      All styles (dark theme)
public/
  favicon.svg       Site favicon
  images/           Add screenshots/diagrams here
```

## Adding Content

### New Case Study

Create a new `.astro` file in `src/pages/case-studies/`:

```astro
---
import CaseStudyLayout from "../../layouts/CaseStudyLayout.astro";
---

<CaseStudyLayout
  title="Project Title"
  summary="One-line summary"
  date="2026"
  role="Your Role"
  tags={["Tag1", "Tag2"]}
>
  <h2>Problem</h2>
  <p>...</p>
</CaseStudyLayout>
```

Then add a card entry in `src/pages/work.astro` and optionally on the homepage.

### New Blog Post

Create a new `.astro` file in `src/pages/posts/`:

```astro
---
import PostLayout from "../../layouts/PostLayout.astro";
---

<PostLayout title="Post Title" date="March 2026" summary="One-line summary">
  <p>Your content here...</p>
</PostLayout>
```

Then add a card entry in `src/pages/writing.astro`.

## Customization

- **Colors/theme**: Edit CSS variables in `src/styles/global.css`
- **Site metadata**: Edit `astro.config.mjs` (site URL)
- **Navigation**: Edit `src/layouts/BaseLayout.astro`
- **Contact info**: Edit `src/pages/contact.astro` and footer in `BaseLayout.astro`

## Confidentiality

All content is written using generalized language. No proprietary code, internal
screenshots, customer names, or confidential metrics are included. A footer note
states: "Selected details are generalized for confidentiality."
