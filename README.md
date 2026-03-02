# Srujan Kothuri — Developer Portfolio

A modern, responsive personal portfolio built with **React + TypeScript + Vite**, focused on presenting experience in AI/ML, full-stack development, projects, skills, and contact details in a clean single-page experience.

## 🚀 Overview

This project is a production-style portfolio website with:

- A section-based single-page layout (`Home`, `About`, `Projects`, `Skills`, `Resume`, `Contact`)
- Dark/light theme support using a custom context provider
- Motion-enhanced UI interactions using Framer Motion
- Tailwind CSS-based styling with responsive design patterns
- Resume download support (PDF/DOCX)

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- MUI + Emotion
- React Icons / Lucide Icons

### Tooling
- ESLint
- PostCSS + Autoprefixer

## 📁 Project Structure

```bash
.
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Resume.tsx
│   │   ├── Contact.tsx
│   │   └── ThemeContext.tsx
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## ⚙️ Getting Started

### 1) Clone the repository

```bash
git clone <your-repo-url>
cd srujankothuri-portfolio
```

### 2) Install dependencies

```bash
npm install
```

### 3) Start development server

```bash
npm run dev
```

The app will run on the local Vite dev server (typically `http://localhost:5173`).

## 📜 Available Scripts

- `npm run dev` — Run the app in development mode
- `npm run build` — Create a production build
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint checks

## ✨ Key Features

- **Typed hero intro animation** for first impression
- **Section navigation** via a top navbar
- **Project showcase** with emphasis on practical applications
- **Skills representation** for AI/ML, data, cloud, and full-stack areas
- **Resume download workflow** (PDF + DOCX)
- **Social/contact callouts** for direct networking

## 🎨 Customization Guide

To adapt this portfolio for your own use:

1. Update profile content in component files under `src/components/`
2. Replace images and resume files in `src/components/`
3. Update social/profile links in `Contact.tsx`
4. Tune theme styling and colors through Tailwind classes

## 📦 Deployment

You can deploy this Vite app to platforms like:

- Vercel
- Netlify
- GitHub Pages
- Render

General production flow:

```bash
npm run build
```

Then deploy the generated `dist/` directory.

## 👨‍💻 Author

**Srujan Kothuri**

If you found this useful, feel free to fork it and customize it for your own portfolio.

---

If you want, I can also generate a **premium version of this README** with badges, architecture notes, and deployment buttons tailored for GitHub.
