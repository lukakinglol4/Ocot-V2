# Build System Documentation

The Ocot Client build system is designed to compile TypeScript source code into a single JavaScript bundle suitable for both standalone usage and CDN distribution. The system uses a two-stage process combining TypeScript compilation with esbuild bundling.

## Architecture Overview

The build system consists of several key components:

- **TypeScript Compiler**: Compiles `.ts` source files to `.js` with type checking
- **esbuild Bundler**: Bundles compiled JavaScript into a single optimized file
- **Development Server**: Provides live reloading and development features
- **Build Scripts**: Automated build tasks and utilities

## Build Process Flow

```
TypeScript Source Files (src/)
           ↓
    TypeScript Compiler (tsc)
           ↓
   Compiled JavaScript (build/)
           ↓
     esbuild Bundler
           ↓
   Final Bundle (dist/bundle.js)
```

## Configuration Files

### TypeScript Configuration (`tsconfig.json`)

```jsonc
{
  "compilerOptions": {
    "rootDir": "src", // Source directory
    "outDir": "build", // Compiled output directory
    "target": "ES2020", // JavaScript target version
    "module": "NodeNext", // Module system
    "moduleResolution": "nodenext", // Module resolution strategy
    "strict": true, // Strict type checking
    "esModuleInterop": true, // ES module interop
    "skipLibCheck": true, // Skip library type checking
    "sourceMap": true, // Generate source maps
    "declaration": false, // Don't generate .d.ts files
    "noEmitOnError": true, // Don't emit on compilation errors
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "exactOptionalPropertyTypes": false
  },
  "include": ["src/**/*", "src/types/global.d.ts"],
  "exclude": ["node_modules", "dist", "build"]
}
```

**Key Settings**:

- **ES2020 Target**: Modern JavaScript features for better performance
- **NodeNext Modules**: Latest Node.js module resolution
- **Strict Mode**: Full TypeScript strict type checking
- **Source Maps**: Enable debugging with TypeScript source
- **Build Directory**: Separate compilation output from source

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "concurrently \"tsc -w -p tsconfig.json\" \"node scripts/dev-server.js\"",
    "dev:simple": "node scripts/simple-dev.js",
    "serve": "npx http-server -p 8080 -c-1",
    "build:ts": "tsc -p tsconfig.json",
    "bundle": "esbuild build/main.js --bundle --outfile=dist/bundle.js --format=iife --minify",
    "build": "npm run build:ts && npm run bundle",
    "build:watch": "concurrently \"tsc -w -p tsconfig.json\" \"esbuild build/main.js --bundle --outfile=dist/bundle.js --format=iife --watch\"",
    "build:dev": "npm run build:ts && esbuild build/main.js --bundle --outfile=dist/bundle.js --format=iife --sourcemap",
    "start": "npm run serve",
    "test": "jest",
    "clean": "node scripts/clean.js"
  }
}
```

## Build Commands

### Development Commands

#### `npm run dev`

Full development environment with live compilation and hot reloading:

- **TypeScript Watch**: Compiles `.ts` files on change
- **Development Server**: Serves files with live reload
- **Source Maps**: Full debugging support
- **Hot Reload**: Automatic browser refresh on changes

```bash
npm run dev
# Starts development server at http://localhost:8080
# TypeScript compilation in watch mode
# Live reload enabled
```

#### `npm run dev:simple`

Simplified development server without TypeScript watching:

- Basic file serving
- No automatic compilation
- Useful for testing pre-compiled code

#### `npm run serve`

Static file server for testing built files:

- Serves current directory on port 8080
- No compilation or live reload
- Cache disabled for development

### Build Commands

#### `npm run build:ts`

TypeScript compilation only:

- Compiles all `.ts` files in `src/` to `build/`
- Type checking and error reporting
- Source map generation
- No bundling

```bash
npm run build:ts
# Compiles: src/**/*.ts → build/**/*.js
```

#### `npm run bundle`

esbuild bundling only (requires compiled JS):

- Bundles `build/main.js` and dependencies
- Creates single `dist/bundle.js` file
- Minification and optimization
- IIFE format for direct browser usage

```bash
npm run bundle
# Bundles: build/main.js → dist/bundle.js
```

#### `npm run build`

Complete production build:

- TypeScript compilation
- esbuild bundling with minification
- Optimized for production deployment

```bash
npm run build
# Full build: src/ → build/ → dist/bundle.js
```

#### `npm run build:dev`

Development build with source maps:

- TypeScript compilation
- esbuild bundling without minification
- Source maps for debugging
- Faster build times

#### `npm run build:watch`

Continuous build with file watching:

- TypeScript compilation in watch mode
- esbuild bundling in watch mode
- Automatic rebuilds on file changes

### Utility Commands

#### `npm run clean`

Removes build artifacts:

- Deletes `build/` directory
- Deletes `dist/` directory
- Fresh start for builds

#### `npm start`

Alias for `npm run serve` - starts static file server

#### `npm test`

Runs Jest test suite (if configured)

## Development Server

### Features

The development server (`scripts/dev-server.js`) provides:

- **Live Reload**: Automatic browser refresh on file changes
- **Source Maps**: Debug TypeScript source directly in browser
- **Error Overlay**: Build errors displayed in browser
- **Fast Rebuilds**: Optimized for development speed
- **Module Hot Reload**: Preserves application state when possible

### Configuration

```javascript
const ctx = await esbuild.context({
  entryPoints: ["build/main.js"],
  bundle: true,
  outfile: "dist/bundle.js",
  format: "iife",
  sourcemap: true,
  define: {
    "process.env.NODE_ENV": '"development"',
  },
  banner: {
    js: `
      (() => {
        new EventSource('/esbuild').addEventListener('change', () => location.reload());
      })();
    `,
  },
});

const server = await ctx.serve({
  servedir: ".",
  host: "localhost",
  port: 8080,
  fallback: "index.html",
});
```

### Server Options

- **Port**: Default 8080, configurable via `PORT` environment variable
- **Host**: Default localhost, configurable via `HOST` environment variable
- **Fallback**: `index.html` for SPA routing support
- **Serve Directory**: Current directory (project root)

## esbuild Configuration

### Bundle Settings

```javascript
// Production bundle
esbuild.build({
  entryPoints: ["build/main.js"],
  bundle: true,
  outfile: "dist/bundle.js",
  format: "iife",
  minify: true,
  sourcemap: false,
  target: "es2020",
});

// Development bundle
esbuild.build({
  entryPoints: ["build/main.js"],
  bundle: true,
  outfile: "dist/bundle.js",
  format: "iife",
  minify: false,
  sourcemap: true,
  target: "es2020",
});
```

### Key esbuild Features

- **Tree Shaking**: Removes unused code for smaller bundles
- **Code Splitting**: Not used (single bundle approach)
- **IIFE Format**: Immediately Invoked Function Expression for browser compatibility
- **ES2020 Target**: Modern JavaScript features
- **Minification**: Production optimization
- **Source Maps**: Development debugging

## Build Optimization

### Bundle Size Optimization

The build system employs several strategies to minimize bundle size:

1. **Tree Shaking**: Removes unused exports and imports
2. **Dead Code Elimination**: Removes unreachable code paths
3. **Minification**: Compresses variable names and removes whitespace
4. **Module Bundling**: Combines all modules into single file

### Performance Features

- **Incremental Builds**: Only rebuilds changed files during development
- **Parallel Processing**: TypeScript and bundling can run concurrently
- **Fast Refresh**: Development server updates without full page reload
- **Optimized Dependencies**: External dependencies are bundled efficiently

## Build Output Structure

### Development Build Output

```
build/                          # TypeScript compilation output
├── main.js                     # Compiled main application
├── main.js.map                 # Source map for main
├── sidebar.js                  # Compiled sidebar component
├── sidebar.js.map              # Source map for sidebar
├── css.js                      # Compiled CSS utilities
├── css.js.map                  # Source map for CSS
├── data/                       # Compiled data layer
│   └── typescript/
│       ├── games.ts
│       └── scripts.ts
├── handlers/                   # Compiled script handlers
│   ├── tabcloak.js
│   ├── antiforcereload.js
│   └── ...
├── utils/                      # Compiled utilities
│   ├── helpers.js
│   └── modalHelpers.js
└── views/                      # Compiled views
    ├── welcome.js
    ├── proxy.js
    └── ...

dist/                           # Final bundle output
└── bundle.js                   # Single bundled file (~253kb)
```

### Production Build Features

- **Single File**: Everything bundled into `dist/bundle.js`
- **Minified**: Reduced file size for faster loading
- **Self-Contained**: No external dependencies required
- **Browser Compatible**: Works in all modern browsers

## Environment Variables

### Build Environment

```bash
# Development
NODE_ENV=development npm run build:dev

# Production
NODE_ENV=production npm run build
```

### Server Configuration

```bash
# Custom port and host
PORT=3000 HOST=0.0.0.0 npm run dev
```

## Build Performance

### Typical Build Times

- **TypeScript Compilation**: 2-5 seconds (initial), <1 second (incremental)
- **esbuild Bundling**: <1 second
- **Total Production Build**: 3-6 seconds
- **Development Rebuild**: <1 second

### Build Caching

- **TypeScript**: Incremental compilation with `.tsbuildinfo`
- **esbuild**: Efficient module caching
- **Development Server**: File system watching for minimal rebuilds

## Debugging

### Source Map Support

Both development and debug builds include source maps:

```javascript
// TypeScript compiler generates .js.map files
"sourceMap": true

// esbuild can preserve or generate source maps
sourcemap: true // or "inline" for inline source maps
```

### Debug Configuration

```bash
# Development build with source maps
npm run build:dev

# Development server with debugging
npm run dev
```

### Browser DevTools Integration

- **TypeScript Sources**: Appear in browser DevTools Sources tab
- **Breakpoints**: Set breakpoints directly in TypeScript source
- **Stack Traces**: Show original TypeScript file locations
- **Variable Inspection**: Works with original TypeScript variable names

## Deployment Builds

### CDN Distribution

The build system produces files suitable for CDN distribution:

```javascript
// Bundle is self-contained IIFE
(function () {
  // All application code here
  // No external dependencies
})();
```

### File-based Distribution

Built files can be used directly:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ocot Client</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

### Bookmarklet Distribution

The bundle can be loaded dynamically:

```javascript
// Bookmarklet injection
if (!window.OcotClient) {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/user/repo@version/dist/bundle.js";
  document.head.appendChild(script);
}
```

## Build Scripts

### Custom Build Scripts

Located in `scripts/` directory:

- **`dev-server.js`**: Development server with live reload
- **`simple-dev.js`**: Basic development server
- **`clean.js`**: Build artifact cleanup utility

### Script Customization

Build scripts can be customized for specific requirements:

```javascript
// Custom build script example
const esbuild = require("esbuild");

async function customBuild() {
  await esbuild.build({
    entryPoints: ["build/main.js"],
    bundle: true,
    outfile: "dist/custom-bundle.js",
    format: "iife",
    minify: true,
    define: {
      CUSTOM_FEATURE: "true",
    },
  });
}
```

## Troubleshooting

### Common Build Issues

#### TypeScript Compilation Errors

```bash
# Check TypeScript errors
npm run build:ts

# Common issues:
# - Type errors in source code
# - Missing type declarations
# - Import path issues
```

#### Bundle Generation Errors

```bash
# Check bundling errors
npm run bundle

# Common issues:
# - Missing build/ directory (run build:ts first)
# - Import resolution failures
# - Dynamic import issues
```

#### Development Server Issues

```bash
# Port already in use
PORT=3000 npm run dev

# Permission issues
sudo npm run dev  # Not recommended, use different port instead
```

### Build System Maintenance

#### Updating Dependencies

```bash
# Update TypeScript
npm update typescript

# Update esbuild
npm update esbuild

# Update all dev dependencies
npm update --dev
```

#### Clearing Build Cache

```bash
# Clear build artifacts
npm run clean

# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Future Enhancements

Potential improvements to the build system:

- **Code Splitting**: Split bundle into smaller chunks for better caching
- **Web Workers**: Build support for web worker modules
- **CSS Processing**: Dedicated CSS processing pipeline
- **Asset Optimization**: Image and resource optimization
- **Progressive Web App**: PWA build configuration
- **Docker Integration**: Containerized build environment
- **CI/CD Integration**: Automated build and deployment pipelines
