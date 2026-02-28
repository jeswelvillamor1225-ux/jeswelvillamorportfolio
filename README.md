# IT Portfolio — Next.js 14

A dark, industrial-tech themed developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- Custom cursor with `mix-blend-mode: difference`
- Typewriter animation cycling through IT roles
- Scroll-triggered section reveals
- Animated skill bars (triggered on scroll)
- Glitch effect on name hover
- Scanline + CSS grid background texture
- Noise overlay for depth
- Responsive mobile navigation
- Contact form with success state

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## ✏️ Customization

### Your Info
| File | What to change |
|------|---------------|
| `components/Hero.tsx` | Name, roles, stats |
| `components/About.tsx` | Bio paragraphs, tech stack |
| `components/Skills.tsx` | Skill percentages, certifications |
| `components/Projects.tsx` | Projects list |
| `components/Contact.tsx` | Email, social links |
| `components/Navbar.tsx` | Logo initials |

### Profile Photo
In `components/About.tsx`, replace the placeholder `<div>` with:
```tsx
import Image from "next/image";
<Image src="/photo.jpg" alt="Your Name" fill className="object-cover" />
```
Place `photo.jpg` in the `public/` folder.

### Resume
Place `resume.pdf` in the `public/` folder.

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --acid: #c8ff57;  /* main accent  */
  --cyan: #57f0ff;  /* secondary    */
  --bg:   #060a12;  /* background   */
}
```

## 🛠 Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS variables
- **Fonts**: DM Mono + Outfit (Google Fonts)
