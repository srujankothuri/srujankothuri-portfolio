# srujankothuri.vercel.app

My personal portfolio website — built to showcase my projects, skills, and experience as a software engineer.

**[→ View Live Site](https://srujankothuri.vercel.app)**

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000?logo=vercel&logoColor=white)

---

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React + React Icons
- **Deployment:** Vercel

## Features

- Light/dark theme with system preference detection
- Responsive design — works on desktop, tablet, and mobile
- Smooth scroll navigation with active section tracking
- Scroll progress indicator
- Interactive terminal easter egg (`~/srujan $`)
- Filterable project showcase with featured project cards
- Browser mockup frames for project screenshots
- Gradient border glow hover effects
- Mobile slide-in navigation menu
- One-click resume download

## Sections

| Section | Description |
|---------|-------------|
| **Home** | Hero with rotating "I build..." text, CTAs, and open-to-work badge |
| **About** | Personal narrative + trait cards |
| **Experience** | Timeline with work experience and published research |
| **Education** | University cards with photos, GPA, and coursework |
| **Skills** | 6 categorized technology groups |
| **Projects** | 4 featured (with screenshots) + 5 regular, filterable by category |
| **Target Roles** | Roles I'm targeting for Summer 2026 / Fall 2026 |
| **Contact** | Email, phone, socials, and resume download |

## Getting Started

```bash
# Clone
git clone https://github.com/srujankothuri/srujan-portfolio-website.git
cd srujan-portfolio-website

# Install
npm install

# Dev server
npm run dev

# Build
npm run build
```

## Project Structure

```
src/
├── assets/images/       # Profile photos and project screenshots
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Home.tsx
│   ├── Navbar.tsx
│   ├── Portfolio.tsx
│   ├── Projects.tsx
│   ├── ScrollToTop.tsx
│   ├── Skills.tsx
│   ├── TargetRoles.tsx
│   ├── Terminal.tsx
│   └── ThemeContext.tsx
├── App.tsx
├── index.css
└── main.tsx
public/
└── Srujan_Kothuri_Software_Engineer_Resume.pdf
```

## License

MIT

---

Built by [Srujan Kothuri](https://srujankothuri.vercel.app)