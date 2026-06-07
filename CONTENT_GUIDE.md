# Content Guide

How to add and update content on this portfolio without touching the core UI code.

---

## Adding a Work Item (Works section)

### 1. Register the card

Open `src/components/sections/WorksSection.tsx` and add an entry to the `WORKS` array:

```ts
{
  cat: 'research',            // 'research' | 'engineering'
  slug: 'works/my-project',  // must match the MDX filename below
  title: 'Full project title shown on the card',
  desc:  'One-sentence summary shown beneath the title.',
  year:  '2025',
  color: '#e84040',           // red = research, blue (#3a7bd5) = engineering
},
```

### 2. Create the MDX file

Create `content/works/my-project.mdx`:

```md
---
title: "Full project title"
year: "2025"
cat: "research"
---

## Overview
What the project is and why it matters.

## How It Works
Technical detail, methodology, results.

![Caption](/works/my-project/photo.jpg)

## Documents
[Paper (PDF)](/works/my-project/paper.pdf) — Brief description.
[Read on IEEE Xplore](https://doi.org/...)
```

### 3. Add images / PDFs (optional)

- Create a folder `public/works/my-project/`
- Drop images (`.jpg`, `.png`) and PDFs there
- Reference them in MDX as `/works/my-project/filename.jpg`
- Images render inline; PDF links open in a new tab

---

## Adding a Creative Item (Creative section)

Same three steps, but:

- Edit `src/components/sections/CreativeSection.tsx`
- `cat` options: `'vocaloid'` | `'photography'` | `'3d'`
- MDX file goes in `content/creative/my-item.mdx`
- Images go in `public/creative/my-item/`

---

## Adding a Blog Post (Blog section)

Same three steps, but:

- Edit `src/components/sections/BlogSection.tsx`
- MDX file goes in `content/blog/my-post.mdx`
- No `cat` filter needed — all posts appear together

---

## File layout reference

```
content/
  works/
    fmcw-radar.mdx          ← drawer content for each work item
    kriging-spatial.mdx
  creative/
    ...
  blog/
    ...

public/
  works/
    fmcw/                   ← images and PDFs for each work item
      radiation-pattern.png
      ...
    fmcw-radar-paper.pdf
    kriging/
      ...
  creative/
    ...
  profile.jpg
  Resume.pdf

src/components/sections/
  WorksSection.tsx           ← card list + filter tabs
  CreativeSection.tsx
  BlogSection.tsx
  AboutSection.tsx
  ResumeSection.tsx

src/components/ui/
  DetailDrawer.tsx           ← the slide-over drawer (renders MDX)
  Nav.tsx
```

---

## MDX formatting tips

| Element | Syntax |
|---|---|
| Section heading | `## Heading` |
| Inline image | `![Caption](/works/folder/file.jpg)` |
| PDF link | `[Label](/works/file.pdf)` |
| External link | `[Label](https://...)` |
| Bold text | `**bold**` |
| Bullet list | `- item` |

Images render at full width inside the drawer. Keep file sizes reasonable — compress photos to under 1 MB each for fast load times.
