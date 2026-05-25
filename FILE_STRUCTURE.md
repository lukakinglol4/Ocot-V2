# Ocot Client File Structure

This document outlines the complete file structure of the Ocot Client project, including the recently restructured scripts system with handler-based architecture.

## Root Directory

```
proxy-client-1/
├── .git/                           # Git repository data
├── .github/                        # GitHub-specific files
│   └── copilot-instructions.md     # GitHub Copilot development instructions
├── .gitignore                      # Git ignore patterns
├── .vscode/                        # VS Code workspace settings
├── build/                          # TypeScript compilation output
│   ├── css.js                      # Compiled CSS utilities
│   ├── main.js                     # Compiled main application
│   ├── sidebar.js                  # Compiled sidebar component
│   ├── data/                       # Compiled data layer
│   ├── handlers/                   # Compiled script handlers
│   ├── utils/                      # Compiled utility modules
│   └── views/                      # Compiled view modules
├── dist/                           # Built output directory
│   └── bundle.js                   # Minified production bundle (~253kb)
├── docs/                           # Documentation directory
│   ├── FILE_STRUCTURE.md           # This file - project structure documentation
│   └── MODAL_IMPLEMENTATION.md     # Documentation for modal system implementation
├── index.html                      # Main entry point for standalone usage
├── LICENSE                         # Project license file
├── node_modules/                   # NPM dependencies
├── package-lock.json               # NPM dependency lock file
├── package.json                    # Project configuration and dependencies
├── README.md                       # Project documentation
├── scripts/                        # Build and utility scripts
│   ├── clean.js                    # Clean build directories
│   ├── dev-server.js               # Development server
│   ├── dev.config.js               # Development configuration
│   ├── README.md                   # Scripts documentation
│   └── simple-dev.js               # Simple development server
├── src/                            # TypeScript source code (see detailed breakdown below)
├── tsconfig.json                   # TypeScript configuration
└── test-modals.html               # Modal system testing page
```

## Source Code Structure (`src/`)

### Core Application Files

```
src/
├── main.ts                         # Application entry point and ProxyClientApp class
├── sidebar.ts                      # ProxySidebar class for navigation
└── css.ts                          # Shared CSS injection utilities
```

### Configuration

```
src/config/
└── settings.js                     # Application configuration constants
```

### Data Layer (New Architecture)

```
src/data/
├── typescript/                     # typescript fallback data for bookmarklet compatibility
│   ├── games.ts                    # Games data fallback
│   └── scripts.ts                  # Scripts data fallback
└── json/                          # JSON data files for hosted environments
    ├── games.json                  # Games metadata
    └── scripts.json                # Scripts metadata
```

### Handler System (New Architecture)

```
src/handlers/                       # Individual script handler modules
├── aboutblankinjector.ts           # About:blank page script injection handler
├── antiforcereload.ts             # Page reload prevention handler (stateful)
├── autohide.ts                    # Auto-hide proxy client handler (stateful)
├── autoremove.ts                  # Auto-remove proxy client handler (stateful)
├── blooketcheats.ts               # Blooket cheats injection handler
├── emergencyswitcher.ts           # Emergency tab switching handler
├── fakecrash.ts                   # Fake browser crash simulation handler
├── forceselect.ts                 # Force text selection enabler handler
├── mathtools.ts                   # Advanced math calculator handler
├── pageeditor.ts                  # Page editing mode handler
├── quickscroll.ts                 # Quick scroll to bottom handler
├── storagemanager.ts              # Browser storage management handler
└── tabcloak.ts                    # URL cloaking in new tab handler
```

### Styles

```
src/styles/
└── app.css                         # Global application styles
```

### Utilities

```
src/types/
└── global.d.ts                     # TypeScript global type definitions

src/utils/
├── helpers.ts                      # Shared utility functions (loadJson, etc.)
└── modalHelpers.ts                 # Themed modal system utilities
```

### Views (User Interface)

```
src/views/                          # Individual view modules
├── bookmarklets.ts                 # Bookmarklets collection view
├── calculator.ts                   # Calculator utility view
├── cloaking.ts                     # Tab cloaking features view
├── console.ts                      # JavaScript console tool view
├── corsProxy.ts                    # CORS proxy utilities view
├── games.ts                        # Games collection view
├── historyFlood.ts                 # History manipulation view
├── notes.ts                        # Note-taking tool view
├── pocketBrowser.ts                # Embedded browser view
├── proxy.ts                        # Proxy functionality view
├── scripts.ts                      # Scripts management view
├── settings.ts                     # Settings and help view
└── welcome.ts                      # Landing page view
```

## Key Architecture Patterns

### 1. Handler-Based Scripts System (New)

- **Handlers**: Individual modules in `src/handlers/` with consistent `onActivate()` interface
- **Data**: JSON metadata with JS fallback for compatibility
- **Stateful Scripts**: Support for toggle states (on/off) with `isEnabled()` and `onEnable()`/`onDisable()` methods
- **Dynamic Loading**: Handlers loaded on-demand via dynamic imports

### 2. View System

- **Modular Views**: Each view is a self-contained module returning DOM elements
- **CSS Injection**: Views handle their own styling via CSS-in-JS
- **Event Handling**: Event listeners attached within view creation functions

### 3. Modal System

- **Themed Modals**: Consistent theming with CSS custom properties
- **Modal Types**: showModal, showInputModal, showConfirmModal, createBaseModal
- **Theme Integration**: Dynamic theme updates for existing modals

### 4. Data Loading

- **JSON First**: Attempts to load JSON data for hosted environments
- **JS Fallback**: Falls back to JavaScript exports for bookmarklet compatibility
- **Error Handling**: Graceful degradation with user feedback

## Build Process

- **TypeScript Compilation**: `tsc` compiles TypeScript sources from `src/` to `build/`
- **Bundling**: `esbuild` bundles `build/main.js` into single `dist/bundle.js`
- **Development**: `npm run dev` - Watch mode with live compilation and dev server
- **Production**: `npm run build` - Single minified bundle at `dist/bundle.js`
- **Format**: IIFE (Immediately Invoked Function Expression)
- **Size**: ~253kb minified (includes all handlers and features)

## Deployment Methods

1. **File-based**: Open `index.html` directly
2. **CDN**: Via jsDelivr from GitHub releases
3. **Bookmarklet**: Injected into any webpage
4. **Local Server**: Using `npm start` for development

## Recent Changes (Scripts System Restructure)

- ✅ Created individual handler modules for each script functionality
- ✅ Implemented JSON data structure with JS fallback compatibility
- ✅ Added support for stateful scripts with proper state management
- ✅ Enhanced visual indicators for script states (enabled/disabled)
- ✅ Maintained full backward compatibility with existing functionality
- ✅ Improved code maintainability and extensibility
