# Developer Portfolio

A minimal, premium-style developer portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Designed for GitHub Pages deployment.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository** (if you haven't already).
2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```
    > **Note:** If you encounter path encoding issues on Windows, standard `npm install` should still work in your terminal.

### Local Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Customization

### Content
All content is managed in `src/data/index.ts`. You can easily update:
- **Profile**: Name, bio, social links
- **Projects**: Title, description, tech stack, links
- **Experience**: Timeline (Company, Role, Duration, Desc)
- **Skills**: Categories and list items

### Styles
- **Tailwind Config**: `tailwind.config.js`
- **Global Styles**: `src/index.css`
- **Colors**: Uses standard Tailwind colors (Slate, Indigo). Change `text-indigo-600` or `bg-slate-900` classes to switch themes.

## 📦 Deployment (GitHub Pages)

### 1. Configure Base Path
If you are deploying to `https://<USERNAME>.github.io/<REPO-NAME>/`, update `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/<REPO-NAME>/', // Change this to your repository name
})
```

If deploying to `https://<USERNAME>.github.io/` (User Page), keep it as `'/'`.

### 2. Deployment Script
You can allow GitHub Actions to build and deploy, or push the build folder manually.

**Manual Push (gh-pages branch):**
1.  Run build: `npm run build`
2.  Commit the `dist` folder or use a tool like `gh-pages` package.

**Recommended: GitHub Actions**
1.  Go to repository **Settings > Pages**.
2.  Source: **GitHub Actions**.
3.  Choose **Static HTML** or **Vite** workflow if suggested.

## 📂 Project Structure

```
src/
├── components/   # UI Components (Hero, About, Projects, etc.)
├── data/         # Content (index.ts)
├── styles/       # CSS files
├── App.tsx       # Main entry with layout
└── main.tsx      # React root
```

## ✅ Checklist for User
- [ ] Update `src/data/index.ts` with real information.
- [ ] Resume PDF: Place your `resume.pdf` in the `public/` folder.
- [ ] OG Image: Update `public/og.png` if desired.
- [ ] Update `vite.config.ts` base path for deployment.

---
Built with ❤️ using Vite + React + Tailwind
