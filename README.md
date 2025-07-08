# Quote Generator Web App

This is a simple Quote Generator Web App built with Next.js 15 (App Router), ShadCN UI, Tailwind CSS, and pnpm.  
It allows users to enter a topic and displays three relevant quotes from a local array.

Deployed on Vercel:  
https://nexium-aiza.vercel.app/

## Features
- Built using Next.js 15 with App Router (`src/app` structure)
- Styled with Tailwind CSS and ShadCN UI components
- Accepts a topic input through a form
- Displays three quotes from a predefined local array
- Responsive design and fast performance

## Project Structure

```bash
Folder/File             Purpose
────────────────────────────────────────────────────────────────
public/                 Static assets
src/app/page.tsx        Main page (Quote Generator)
src/components/         Reusable UI components (if any)
package.json            Project dependencies and scripts
pnpm-lock.yaml          pnpm lockfile
tailwind.config.js      Tailwind CSS configuration
postcss.config.js       PostCSS configuration
next.config.ts          Next.js configuration
tsconfig.json           TypeScript configuration
```

## Tech Stack
- **Next.js 15 (App Router)**
- **React 19**
- **Tailwind CSS 4**
- **ShadCN UI**
- **pnpm** (Package manager)
- **TypeScript**

## Installation and Development

```bash
git clone https://github.com/Aiza166/Nexium_Aiza.git
cd Nexium_Aiza
pnpm install
pnpm run dev
```

The app will be available at http://localhost:3000.

## Build and Deployment

```bash
pnpm run build
pnpm start
```


The app is deployed on Vercel with automatic deployments from GitHub.

## License
This project is intended for educational and demonstration purposes.
