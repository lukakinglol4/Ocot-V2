# Development Server Setup

This project includes several development server options using esbuild for fast builds and live reloading.

## Available Scripts

### Development Servers

- **`npm run dev`** - Full-featured development server with live reload
  - Serves files on http://localhost:8080
  - Automatic rebuilding on file changes
  - Live reload in browser
  - Source maps for debugging
- **`npm run dev:simple`** - Simple watch mode (no server)
  - Watches files and rebuilds on changes
  - Use with external server like `npx http-server`
  - Lighter weight option

### Building

- **`npm run build`** - Production build (minified)
- **`npm run build:dev`** - Development build (with source maps)
- **`npm run build:watch`** - Watch mode build

### Serving

- **`npm run serve`** - Static file server (no building)
- **`npm start`** - Alias for serve

## Quick Start

1. **Start development server:**

   ```bash
   npm run dev
   ```

2. **Open your browser:**
   Navigate to http://localhost:8080

3. **Start coding:**
   - Edit files in `src/`
   - Changes will automatically rebuild
   - Browser will reload automatically

## Development Features

### Live Reload

The development server automatically reloads the browser when files change.

### Source Maps

Debug your original source code in the browser DevTools.

### ES6 Modules

Full support for ES6 import/export syntax during development.

### Fast Builds

esbuild provides extremely fast build times (typically <100ms).

## Configuration

You can customize the development server by modifying:

- `scripts/dev.config.js` - Development configuration
- Environment variables:
  - `PORT` - Server port (default: 8080)
  - `HOST` - Server host (default: localhost)

## Troubleshooting

### Port Already in Use

If port 8080 is busy, set a different port:

```bash
PORT=3000 npm run dev
```

### Build Errors

Check the console output for detailed error messages. Common issues:

- Missing imports
- Syntax errors
- Circular dependencies

### Browser Cache

If changes don't appear, try:

- Hard refresh (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache
- Check browser DevTools console for errors

## Alternative Setup

If you prefer a different approach:

1. **Use the simple watcher:**

   ```bash
   npm run dev:simple
   ```

2. **In another terminal, start a server:**
   ```bash
   npx http-server -p 8080 -c-1
   ```

This gives you more control over the server configuration.
