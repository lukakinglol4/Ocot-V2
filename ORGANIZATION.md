# Repository Organization

## 📁 Folder Structure

### `/src/`
Source TypeScript/JavaScript files
- `main.ts` - Main application entry point
- `css.ts` - Shared CSS styles
- `sidebar.ts` - Sidebar UI module
- `views/` - View components
- `constants/` - Configuration constants
- `utils/` - Utility functions

### `/public/`
Static assets and HTML
- `index.html` - Main HTML file

### `/dist/`
Built/compiled files (generated)
- `bundle.js` - Compiled JavaScript
- `bundle.js.map` - Source map

### `/docs/`
Documentation
- `README.md` - Project overview
- `SETUP.md` - Setup instructions
- `DEVELOPMENT.md` - Development guide

### `/config/`
Configuration files
- `tsconfig.json` - TypeScript config
- `dev.config.js` - Development config
- `build.config.js` - Build config

## 🛠️ Build Process

1. Source files in `/src/` are compiled
2. Output goes to `/dist/`
3. `index.html` in `/public/` loads the bundle

## 📦 Deployment

1. Run `npm run build`
2. Upload `/dist/` and `/public/` to hosting
3. Ensure `index.html` correctly points to `bundle.js`

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build
npm run build

# Serve
npm run serve
```
