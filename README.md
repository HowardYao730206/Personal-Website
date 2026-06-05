# Howard Yao — Portfolio

Built with Next.js 14, Framer Motion, Tailwind CSS, Zen Maru Gothic.

## Getting started

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Project structure

```
src/
  app/
    layout.tsx          # Root layout + metadata
    page.tsx            # Home (assembles all sections)
  components/
    ui/
      Nav.tsx           # Sticky nav with pill buttons
    sections/
      HeroSection.tsx   # Bouncy name + colored cards
      WorksSection.tsx  # Filterable works list
      BlogSection.tsx   # Blog posts with colored accents
      ResumeSection.tsx # Education, research, skill pills
  content/
    blog/               # MDX blog posts — add .mdx files here
  styles/
    globals.css         # Fonts, texture background, shared utilities
```

## Adding a blog post

Create a `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Post title"
date: "2026-06-01"
tags: ["tag1", "tag2"]
excerpt: "One sentence summary."
---

Your content here...
```

## Adding works

Edit `WORKS` array in `src/components/sections/WorksSection.tsx`.

## Customizing colors

The four brand colors are in `tailwind.config.ts`:
- red:    #e84040
- blue:   #3a7bd5
- green:  #2daa55
- yellow: #f0a020

## Deploy to Vercel

1. Push repo to GitHub
2. vercel.com → New Project → import repo → Deploy
3. Project → Settings → Domains → add your domain

## Connect Squarespace domain

In Squarespace: Domains → your domain → Nameservers → Custom:
- ns1.vercel-dns.com
- ns2.vercel-dns.com

Propagates in ~30 min. Green checkmark appears in Vercel when live.
