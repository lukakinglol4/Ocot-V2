# Universal Data Loading System

## Overview

The `loadData` helper function provides a unified way to load data from both JSON files (hosted environments) and TypeScript modules (bundled/bookmarklet environments) with automatic fallback.

## Usage

```typescript
import { loadData } from "../utils/helpers.js";

// Load with default export name (assumes dataNameList)
const scripts = await loadData<ScriptData>("scripts");

// Load with custom export name
const themes = await loadData<Theme>("themes", "themesList");
const proxies = await loadData<ProxyData>("proxies", "proxiesList");
```

## How It Works

1. **Primary**: Attempts to fetch `/src/data/json/{dataName}.json`
2. **Fallback**: Imports from `../data/typescript/{dataName}.js` and looks for the specified export
3. **Returns**: Empty array `[]` if both methods fail

## Console Logging

- ✅ `Loaded {dataName} from JSON` - Successful JSON load
- ✅ `Loaded {dataName} from TypeScript fallback` - Successful TS fallback
- ❌ `Failed to load {dataName} from both JSON and TypeScript sources` - Both failed

## Data Layer Structure

```
src/data/
├── json/           # JSON files for hosted environments
│   ├── games.json
│   ├── scripts.json
│   ├── themes.json
│   ├── proxies.json
│   └── bookmarklets.json
└── typescript/     # TypeScript fallbacks for bundled environments
    ├── games.ts    (exports gamesList)
    ├── scripts.ts  (exports scriptsList)
    ├── themes.ts   (exports themesList)
    ├── proxies.ts  (exports proxiesList)
    └── bookmarklets.ts (exports bookmarkletsList)
```

## Migration Notes

- Replaced all individual `loadJson()` + `import()` patterns with single `loadData()` calls
- Maintains exact same functionality with cleaner, more maintainable code
- Automatic fallback ensures compatibility across all deployment methods
- Consistent error handling and logging across the application

## Examples

### Before (Manual Pattern)

```typescript
// Old manual pattern
let data = [];
try {
  const jsonData = await loadJson<DataType[]>("/src/data/json/example.json");
  if (jsonData && Array.isArray(jsonData)) {
    data = jsonData;
  }
} catch (error) {
  console.warn("Failed to load example.json, using fallback");
}

if (data.length === 0) {
  try {
    const { exampleList } = await import("../data/typescript/example.js");
    data = exampleList;
  } catch (error) {
    console.error("Failed to load example fallback data:", error);
  }
}
```

### After (Universal Loader)

```typescript
// New unified pattern
const data = await loadData<DataType>("example");
```
