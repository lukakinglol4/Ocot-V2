# Data Layer Documentation

The data layer in Ocot Client provides a flexible system for loading and managing application data. It employs a dual-source approach with JSON files for hosted environments and TypeScript fallbacks for bookmarklet compatibility, ensuring the application works in all deployment scenarios.

## Architecture Overview

The data layer is designed with the following principles:

- **Dual-Source Architecture**: JSON files with TypeScript fallbacks
- **Graceful Degradation**: Automatic fallback when JSON loading fails
- **Type Safety**: TypeScript interfaces for data structures
- **Modular Organization**: Separate data files for different feature sets
- **Dynamic Loading**: Data loaded on-demand via helper utilities

## Core Components

### 1. Data Loading System

**Primary Utility: `loadJson()` Function**

Located in `src/utils/helpers.ts`, this function handles JSON data loading:

```typescript
/**
 * Loads a JSON file and returns its contents as an object.
 * @param {string} file - The path to the JSON file (relative to public root or absolute).
 * @returns {Promise<any>} The parsed JSON object.
 */
export async function loadJson(file) {
  try {
    const response = await fetch(file);
    if (!response.ok)
      throw new Error(`Failed to load ${file}: ${response.statusText}`);
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
```

**Features**:

- Async/await based for modern JavaScript compatibility
- Comprehensive error handling with detailed error messages
- Returns `null` on failure for easy fallback handling
- Network request timeout handling via browser defaults

### 2. Data Sources

#### JSON Data Files (`src/data/json/`)

Primary data source for hosted environments:

```
src/data/json/
├── games.json          # Games collection metadata
├── scripts.json        # Script handlers metadata
├── proxies.json        # Proxy server configurations
└── themes.json         # Theme color definitions
```

**Advantages**:

- Easy to edit and maintain
- Smaller bundle size (not included in compiled JavaScript)
- Can be updated independently of application code
- Better for CDN distribution

#### TypeScript Fallbacks (`src/data/typescript/`)

Fallback data source compiled into the application bundle:

```
src/data/typescript/
├── games.ts            # Games data TypeScript export
├── scripts.ts          # Scripts data TypeScript export
├── proxies.ts          # Proxies data TypeScript export
└── themes.ts           # Themes data TypeScript export
```

**Advantages**:

- Always available (no network requests)
- Works in bookmarklet mode
- Type-safe with TypeScript interfaces
- Bundled with application code

## Data Structures

### Games Data Structure

**JSON Format** (`src/data/json/games.json`):

```json
[
  {
    "url": "https://crazygames.com/",
    "title": "Crazygames",
    "type": "blocked"
  },
  {
    "url": "https://itch.io/",
    "title": "Itch.io",
    "type": "blocked"
  },
  {
    "url": "https://example.com/game3",
    "title": "Game Three",
    "type": "cors-optimized"
  }
]
```

**TypeScript Fallback** (`src/data/javascript/games.ts`):

```typescript
let gamesList = [
  {
    url: "https://crazygames.com/",
    title: "Crazygames",
    type: "blocked",
  },
  {
    url: "https://itch.io/",
    title: "Itch.io",
    type: "blocked",
  },
  {
    url: "https://example.com/game3",
    title: "Game Three",
    type: "cors-optimized",
  },
];
export { gamesList };
```

**Game Object Properties**:

- `url` (string): The URL to the game or gaming site
- `title` (string): Display name for the game
- `type` (string): Category type - "blocked", "unblocked", or "cors-optimized"

### Scripts Data Structure

**JSON Format** (`src/data/json/scripts.json`):

```json
[
  {
    "id": "tabcloak",
    "title": "Tab Cloak",
    "description": "Open a URL in a cloaked tab",
    "category": "privacy",
    "handler": "tabcloak"
  },
  {
    "id": "antiforcereload",
    "title": "Anti Force Reload",
    "description": "Prevent forced page reloads and refreshes",
    "category": "protection",
    "handler": "antiforcereload",
    "stateful": true
  }
]
```

**Script Object Properties**:

- `id` (string): Unique identifier for the script
- `title` (string): Display name in the UI
- `description` (string): User-friendly explanation
- `category` (string): Organization category ("utility", "privacy", "gaming", "protection")
- `handler` (string): Handler module filename (without .ts extension)
- `stateful` (boolean, optional): Whether the script maintains state

### Themes Data Structure

**JSON Format** (`src/data/json/themes.json`):

```json
[
  {
    "id": "default",
    "name": "Default Dark",
    "description": "Classic dark theme",
    "icon": "🎨",
    "colors": {
      "bgPrimary": "#23272f",
      "bgSecondary": "#292d36",
      "accentColor": "#007acc",
      "accentHover": "#005a9e",
      "accentColorRgb": "0, 122, 204"
    },
    "preview": ["#23272f", "#007acc", "#292d36"]
  }
]
```

**TypeScript Fallback** (`src/data/typescript/themes.ts`):

```typescript
export interface ThemeColors {
  bgPrimary: string;
  bgSecondary: string;
  accentColor: string;
  accentHover: string;
  accentColorRgb: string;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  colors: ThemeColors;
  preview: string[];
  icon: string;
}

export const themesList: Theme[] = [
  {
    id: "default",
    name: "Default Dark",
    description: "Classic dark theme",
    colors: {
      bgPrimary: "#23272f",
      bgSecondary: "#292d36",
      accentColor: "#007acc",
      accentHover: "#005a9e",
      accentColorRgb: "0, 122, 204",
    },
    preview: ["#23272f", "#007acc", "#292d36"],
    icon: "🎨",
  },
  // ... more themes
];
```

**Theme Object Properties**:

- `id` (string): Unique identifier for the theme (e.g., "default", "blue", "purple")
- `name` (string): Display name shown to users (e.g., "Default Dark")
- `description` (string): Brief description of the theme
- `icon` (string): Emoji icon for visual identification
- `colors` (object): Theme color definitions
  - `bgPrimary` (string): Primary background color in hex format
  - `bgSecondary` (string): Secondary background color in hex format
  - `accentColor` (string): Primary accent color for interactive elements
  - `accentHover` (string): Hover state color for interactive elements
  - `accentColorRgb` (string): RGB values as comma-separated string (e.g., "0, 122, 204")
- `preview` (string[]): Array of 3 hex color strings for theme preview display

**Usage in Settings View** (`src/views/settings.ts`):

```typescript
import {
  themesList as themesListFallback,
  Theme,
} from "../data/typescript/themes.js";
import { loadJson } from "../utils/helpers.js";

// Variable to hold themes data
let themesData: Theme[] = themesListFallback;

// Load themes with JSON-first approach
async function loadThemes() {
  themesData = themesListFallback; // Start with fallback

  try {
    const loaded = await Promise.race([
      loadJson<Theme[]>("src/data/json/themes.json"),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 2000)
      ),
    ]);

    if (loaded && Array.isArray(loaded) && loaded.length > 0) {
      themesData = loaded;
      console.log("Loaded themes from JSON");
    }
  } catch (error) {
    console.log(
      "Using TypeScript themes data (JSON load failed):",
      error.message
    );
  }
}
```

## Data Loading Patterns

### 1. JSON-First Loading

Most views use a JSON-first approach with TypeScript fallback:

```typescript
// In src/views/games.ts
import { gamesList as jsListFallback } from "../data/javascript/games.js";
import { loadJson } from "../utils/helpers.js";

export default function createGamesView() {
  // Try to load JSON data first
  loadJson("./src/data/json/games.json")
    .then((jsonData) => {
      if (jsonData && Array.isArray(jsonData)) {
        // Use JSON data
        renderGames(jsonData);
      } else {
        // Fallback to TypeScript data
        renderGames(jsListFallback);
      }
    })
    .catch(() => {
      // Fallback to TypeScript data
      renderGames(jsListFallback);
    });
}
```

### 2. Immediate Fallback Loading

For critical data that must be available immediately:

```typescript
// In src/views/scripts.ts
import { scriptsData } from "../data/javascript/scripts.js";

export default function createScriptsView() {
  // Start with TypeScript fallback data
  let availableScripts = [...scriptsData];

  // Render immediately with fallback data
  renderScripts(availableScripts);

  // Try to load JSON data in background
  loadJson("./src/data/json/scripts.json")
    .then((jsonData) => {
      if (jsonData && Array.isArray(jsonData)) {
        availableScripts = jsonData;
        renderScripts(availableScripts); // Re-render with JSON data
      }
    })
    .catch(() => {
      // Continue using fallback data
      console.log("Using fallback scripts data");
    });
}
```

### 3. Hybrid Loading Strategy

Combining both approaches for optimal user experience:

```typescript
export default function createDataDrivenView() {
  const loadData = async () => {
    try {
      // Attempt JSON loading
      const jsonData = await loadJson("./src/data/json/data.json");
      if (jsonData) {
        return jsonData;
      }
    } catch {
      // JSON loading failed
    }

    // Fallback to TypeScript data
    const { fallbackData } = await import("../data/javascript/data.js");
    return fallbackData;
  };

  loadData().then((data) => {
    renderView(data);
  });
}
```

## Data Validation

### Runtime Validation

Data loaded from external sources should be validated:

```typescript
function validateGameData(data) {
  if (!Array.isArray(data)) {
    return false;
  }

  return data.every(
    (game) =>
      typeof game.url === "string" &&
      typeof game.title === "string" &&
      ["blocked", "unblocked", "cors-optimized"].includes(game.type)
  );
}

// Usage in data loading
loadJson("./src/data/json/games.json").then((jsonData) => {
  if (validateGameData(jsonData)) {
    renderGames(jsonData);
  } else {
    console.warn("Invalid games data, using fallback");
    renderGames(jsListFallback);
  }
});
```

### TypeScript Type Checking

Define interfaces for data structures:

```typescript
// In src/types/global.d.ts
interface GameData {
  url: string;
  title: string;
  type: "blocked" | "unblocked" | "cors-optimized";
}

interface ScriptData {
  id: string;
  title: string;
  description: string;
  category: "utility" | "privacy" | "gaming" | "protection";
  handler: string;
  stateful?: boolean;
}
```

## Data Management Strategies

### 1. Caching Strategy

For frequently accessed data, implement caching:

```typescript
class DataCache {
  private cache = new Map();

  async getData(key: string, loader: () => Promise<any>) {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    const data = await loader();
    this.cache.set(key, data);
    return data;
  }

  clearCache() {
    this.cache.clear();
  }
}

// Usage
const dataCache = new DataCache();

const games = await dataCache.getData("games", async () => {
  const jsonData = await loadJson("./src/data/json/games.json");
  return jsonData || jsListFallback;
});
```

### 2. Data Synchronization

For keeping JSON and TypeScript data in sync:

```typescript
// Development utility to sync data
async function syncDataFiles() {
  const jsonData = await loadJson("./src/data/json/games.json");

  if (jsonData) {
    const tsContent = `
let gamesList = ${JSON.stringify(jsonData, null, 2)};
export { gamesList };
    `;

    // This would be done during build process
    console.log("TypeScript fallback content:", tsContent);
  }
}
```

### 3. Dynamic Data Updates

For applications that need to update data at runtime:

```typescript
class DataManager {
  private games: GameData[] = [];
  private scripts: ScriptData[] = [];

  async loadInitialData() {
    // Load games
    const gamesData = await loadJson("./src/data/json/games.json");
    this.games = gamesData || jsGamesFallback;

    // Load scripts
    const scriptsData = await loadJson("./src/data/json/scripts.json");
    this.scripts = scriptsData || jsScriptsFallback;
  }

  getGames(type?: string) {
    if (type) {
      return this.games.filter((game) => game.type === type);
    }
    return [...this.games];
  }

  getScripts(category?: string) {
    if (category) {
      return this.scripts.filter((script) => script.category === category);
    }
    return [...this.scripts];
  }

  addGame(game: GameData) {
    this.games.push(game);
    // Optionally persist to localStorage or server
  }
}
```

## Error Handling Patterns

### 1. Graceful Degradation

Always provide fallback data:

```typescript
async function loadDataWithFallback(jsonPath, fallbackData) {
  try {
    const jsonData = await loadJson(jsonPath);
    if (jsonData && Array.isArray(jsonData) && jsonData.length > 0) {
      return jsonData;
    }
  } catch (error) {
    console.warn(`Failed to load ${jsonPath}:`, error.message);
  }

  console.log("Using fallback data");
  return fallbackData;
}
```

### 2. User Feedback

Inform users when data loading fails:

```typescript
import { showModal } from "../utils/modalHelpers.js";

async function loadDataWithUserFeedback(jsonPath, fallbackData) {
  try {
    const jsonData = await loadJson(jsonPath);
    if (jsonData) {
      return jsonData;
    }
  } catch (error) {
    await showModal(
      "Unable to load latest data. Using offline version.",
      "Data Loading",
      "warning"
    );
  }

  return fallbackData;
}
```

### 3. Retry Logic

Implement retry for network failures:

```typescript
async function loadJsonWithRetry(file, maxRetries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const data = await loadJson(file);
      if (data) return data;
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }

      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2; // Exponential backoff
    }
  }
}
```

## Performance Considerations

### 1. Lazy Loading

Load data only when needed:

```typescript
class LazyDataLoader {
  private gamesPromise: Promise<GameData[]> | null = null;

  async getGames() {
    if (!this.gamesPromise) {
      this.gamesPromise = this.loadGames();
    }
    return this.gamesPromise;
  }

  private async loadGames() {
    const jsonData = await loadJson("./src/data/json/games.json");
    return jsonData || jsGamesFallback;
  }
}
```

### 2. Preloading

Preload critical data:

```typescript
// In main application initialization
async function preloadCriticalData() {
  const dataPromises = [
    loadJson("./src/data/json/games.json"),
    loadJson("./src/data/json/scripts.json"),
  ];

  const [gamesData, scriptsData] = await Promise.allSettled(dataPromises);

  // Store in global cache or data manager
  window.appData = {
    games: gamesData.status === "fulfilled" ? gamesData.value : jsGamesFallback,
    scripts:
      scriptsData.status === "fulfilled"
        ? scriptsData.value
        : jsScriptsFallback,
  };
}
```

### 3. Memory Management

Clean up large data sets when not needed:

```typescript
class DataLifecycleManager {
  private data: Map<string, any> = new Map();

  setData(key: string, data: any) {
    this.data.set(key, data);

    // Clean up after 5 minutes of inactivity
    setTimeout(() => {
      if (this.data.has(key)) {
        this.data.delete(key);
      }
    }, 5 * 60 * 1000);
  }

  getData(key: string) {
    return this.data.get(key);
  }
}
```

## Development Workflow

### 1. Adding New Data

To add new data files:

1. **Create JSON file** in `src/data/json/`:

   ```json
   // src/data/json/newdata.json
   [
     {
       "property": "value",
       "category": "type"
     }
   ]
   ```

2. **Create TypeScript fallback** in `src/data/javascript/`:

   ```typescript
   // src/data/javascript/newdata.ts
   export const newData = [
     {
       property: "value",
       category: "type",
     },
   ];
   ```

3. **Import and use in views**:

   ```typescript
   import { loadJson } from "../utils/helpers.js";
   import { newData } from "../data/javascript/newdata.js";

   // Use JSON-first loading pattern
   ```

### 2. Data Schema Updates

When updating data structures:

1. Update TypeScript interfaces
2. Update both JSON and TypeScript data files
3. Update validation functions
4. Test with both data sources

### 3. Testing Data Loading

```typescript
// Test helper function
async function testDataLoading() {
  console.log("Testing JSON loading...");
  const jsonData = await loadJson("./src/data/json/games.json");
  console.log("JSON data:", jsonData);

  console.log("Testing TypeScript fallback...");
  const { gamesList } = await import("../data/javascript/games.js");
  console.log("Fallback data:", gamesList);

  console.log("Data consistency check:");
  console.log("JSON length:", jsonData?.length);
  console.log("Fallback length:", gamesList?.length);
}
```

## Security Considerations

### 1. Data Validation

Always validate external data:

```typescript
function sanitizeGameData(games) {
  return games.map((game) => ({
    url: encodeURI(game.url || ""),
    title: String(game.title || "").substring(0, 100),
    type: ["blocked", "unblocked", "cors-optimized"].includes(game.type)
      ? game.type
      : "unblocked",
  }));
}
```

### 2. URL Validation

For data containing URLs:

```typescript
function validateUrl(url) {
  try {
    const parsedUrl = new URL(url);
    return ["http:", "https:"].includes(parsedUrl.protocol);
  } catch {
    return false;
  }
}
```

### 3. Content Security

Prevent XSS in data-driven content:

```typescript
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
```

## Future Enhancements

Potential improvements to the data layer:

- **Schema Validation**: JSON Schema validation for data files
- **Data Versioning**: Version control for data file compatibility
- **Real-time Updates**: WebSocket support for live data updates
- **Data Compression**: Compression for large data files
- **CDN Integration**: Separate CDN hosting for data files
- **Data Analytics**: Usage tracking for data access patterns
- **Offline Support**: Service worker caching for offline availability
