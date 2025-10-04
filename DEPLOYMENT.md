# Branch-Based Deployment Guide

This project uses a **2-branch strategy** for deploying different versions to separate URLs using Vercel.

## 🌿 Branch Strategy

### **Main Branch** (`main`)
- **Purpose**: Full application with all features
- **Deployment**: Complete MMinder app
- **URL**: `mminder-app.vercel.app`

### **Landing Branch** (`landing`)
- **Purpose**: Landing page only (minimal version)
- **Deployment**: Marketing/landing page
- **URL**: `mminder-landing.vercel.app`

## 🚀 Setup Instructions

### 1. Create Landing Branch
```bash
# Create and switch to landing branch
git checkout -b landing

# Simplify App.jsx for landing-only
# Remove non-essential routes and components
# Keep only Home route

# Push landing branch
git push -u origin landing
```

### 2. Vercel Configuration

**Project 1: Full App (main branch)**
- **Git Branch**: `main`
- **Project Name**: `mminder-app`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

**Project 2: Landing Page (landing branch)**
- **Git Branch**: `landing`
- **Project Name**: `mminder-landing`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## 📦 Available Scripts

```bash
# Development
npm run dev        # Run current branch in dev mode

# Build
npm run build      # Build current branch

# Preview
npm run preview    # Preview current branch build
```

## 🔄 Development Workflow

### **Adding Features to Full App**
```bash
# Work on main branch
git checkout main
# Add features, routes, components
git add .
git commit -m "Add new feature"
git push origin main
# Auto-deploys to mminder-app.vercel.app
```

### **Updating Landing Page**
```bash
# Work on landing branch
git checkout landing
# Update landing page content
git add .
git commit -m "Update landing page"
git push origin landing
# Auto-deploys to mminder-landing.vercel.app
```

### **Syncing Shared Components**
```bash
# Merge shared updates from main to landing
git checkout landing
git merge main
# Resolve conflicts, keep only landing-relevant code
git push origin landing
```

## 📁 Branch Differences

### **Main Branch** (Full App)
- All routes and components
- Complete navigation
- Full feature set
- Dashboard, settings, etc.

### **Landing Branch** (Landing Only)
- Simplified `App.jsx` with only Home route
- Minimal navigation
- Landing page components only
- No dashboard or complex features

## 🚨 Important Notes

- **Automatic Deployments**: Each branch auto-deploys on push
- **Independent Development**: Work on each branch separately
- **Selective Merging**: Only merge relevant changes between branches
- **Clean Separation**: Each deployment has its own purpose and audience
