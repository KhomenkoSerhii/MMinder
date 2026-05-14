# Minute Minder

## 🌟 Project Overview

This project supports two different deployment configurations from a single codebase:

### 🎯 **Landing Mode**

- **Purpose**: Marketing/Landing page only
- **Routes**: Home page only (`/`)
- **Use Case**: Public-facing landing page for marketing campaigns

### 🚀 **Site Mode**

- **Purpose**: Full-featured application
- **Routes**: All application routes (Home, Features, Pricing, etc.)
- **Use Case**: Complete application with full navigation and features

## 🔧 Environment Configuration

The deployment mode is controlled by the `VITE_APP_MODE` environment variable:

### **.env** (Development - Site Mode)

```bash
VITE_APP_MODE=site
```

### **.env.landing** (Landing Mode)

```bash
VITE_APP_MODE=landing
```

## 📦 Available Scripts

### Development

```bash
npm run dev              # Default development mode (site)
npm run dev:landing      # Run in landing mode
npm run dev:site         # Run in site mode
```

### Build

```bash
npm run build            # Default build (site)
npm run build:landing    # Build landing page only
npm run build:site       # Build full site
```

### Preview

```bash
npm run preview          # Preview production build
npm run preview:landing  # Preview landing build
npm run preview:site     # Preview site build
```

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev:site      # Full site mode
   # or
   npm run dev:landing   # Landing mode
   ```

3. **Build for production:**
   ```bash
   npm run build:site
   # or
   npm run build:landing
   ```

## 🔀 How Routing Works

The application uses conditional routing in `src/App.jsx`:

- **Landing Mode**: Only shows the landing home page, redirects all other routes to `/`
- **Site Mode**: Shows all application routes with full navigation

## 📤 Deployment

### SEO + Deploy Preparation

The build now auto-generates:

- `public/sitemap.xml`
- `public/robots.txt`

Set `SITE_URL` in your deployment environment so these files use your production domain:

```bash
SITE_URL=https://minuteminder.io
```

You can run this manually as well:

```bash
npm run prepare:deploy
```

### Vercel Deployment (Recommended)

**Landing Page:**

```bash
# Set environment variable in Vercel
VITE_APP_MODE=landing

# Build command
npm run build:landing
```

**Full Site:**

```bash
# Set environment variable in Vercel
VITE_APP_MODE=site

# Build command
npm run build:site
```

### Setup Two Vercel Projects

1. **Project 1: Minute Minder Landing**
   - Branch: `main` (or `landing`)
   - Environment Variable: `VITE_APP_MODE=landing`
   - Build Command: `npm run build:landing`

2. **Project 2: Minute Minder App**
   - Branch: `main`
   - Environment Variable: `VITE_APP_MODE=site`
   - Build Command: `npm run build:site`

## 🔒 Environment Modes

| Mode    | Environment Variable    | Pages Included    | Redirects        |
| ------- | ----------------------- | ----------------- | ---------------- |
| Landing | `VITE_APP_MODE=landing` | Landing page only | All routes → `/` |
| Site    | `VITE_APP_MODE=site`    | All pages         | Standard routing |
