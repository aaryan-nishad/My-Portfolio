Personal Portfolio (React + Vite)

This repository contains a personal portfolio website built with React and Vite. It is a lightweight, fast, and modern single-page application showcasing projects, skills, experience, and contact information.

**What this repo contains**
- A responsive portfolio UI built with React and Vite.
- Modular components under `src/components` for `Hero`, `Navbar`, `Projects`, `Skills`, `Experience`, `Contact`, and `Footer`.

**Highlights**
- Fast development with Vite dev server and hot module replacement.
- Clean, component-driven structure for easy maintenance and extension.

## Tech Stack

- React
- Vite
- Plain CSS (files in `src/` such as `App.css` and `index.css`)

## Project Structure

- `index.html` — App entry HTML
- `src/main.jsx` — React entry point
- `src/App.jsx` — Root component
- `src/components/` — Reusable UI components (see component folders)

## Getting Started (Local Development)

Prerequisites: Node.js (LTS) and npm or pnpm installed.

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Open the site

Open `http://localhost:5173` in your browser (Vite will show the exact URL).

## Build & Deploy

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

You can deploy the output from the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Customization

- Replace content in `src/components/*` to update sections.
- Update styles in `src/App.css` and `src/index.css`.
- Add projects by editing the `Projects` component data.

## Contributing

This repo is a personal portfolio. If you'd like suggestions or help improving it, open an issue or contact me directly.

## License

Use or adapt this project as you like. Add a license file if you want to specify terms.

---

If you'd like, I can also:
- Add a short developer-focused README section with build badges and deploy instructions.
- Extract project data into a JSON file for easier editing.
- Help wire up contact form functionality.

Let me know which changes you'd like next.
