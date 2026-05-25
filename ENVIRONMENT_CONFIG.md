# Environment Configuration Guide

This project uses an environment configuration system to control data loading behavior.

## Environment Files

- `src/env.ts` - Main environment configuration

## Available Environments

### Development Mode (`'dev'`)

- **Purpose**: Local development with immediate file access
- **Data Loading Strategy**:
  - ❌ No CDN requests
  - ✅ Local JSON files (`/src/data/json/`)
  - ✅ TypeScript fallback modules
  - ✅ Debug logging enabled
- **Use Case**: When developing locally or testing changes

### Production Mode (`'prod'`)

- **Purpose**: Live deployment with reliable external data sources
- **Data Loading Strategy**:
  - ✅ CDN first (`cdn.jsdelivr.net/gh/asc2563/ocot-client@{version}/src/data/json/`)
  - ✅ Local JSON fallback
  - ✅ TypeScript fallback (final safety net)
  - ❌ Minimal debug logging
- **Use Case**: Bookmarklet injection, external hosting, production use

## How to Switch Environments

### Method 1: Edit `src/env.ts`

```typescript
// For Production (CDN-first loading)
export const ENV: Environment = "prod";

// For Development (local-only loading)
export const ENV: Environment = "dev";
```

### Method 2: Environment Detection (Future Enhancement)

You could extend this system to auto-detect environment:

```typescript
export const ENV: Environment =
  window.location.hostname === "localhost" ? "dev" : "prod";
```

## Environment Logging

When the application starts, you'll see console output like:

```
🏗️  Proxy Client Environment: Production
   - CDN Loading: ✅
   - Local JSON: ✅
   - TypeScript Fallback: ✅
   - Debug Logging: ❌
```

## Troubleshooting

### Scripts Not Loading in Bookmarklet

- Ensure `ENV = 'prod'` for CDN access
- Check browser console for detailed loading attempts
- Verify network connectivity to `cdn.jsdelivr.net`

### Slow Loading in Development

- Switch to `ENV = 'dev'` to avoid CDN requests
- Ensure local development server is running
- Check local file permissions

## Configuration Options

Each environment supports these options in `envConfig`:

- `useCDN`: Enable/disable CDN data fetching
- `useLocalJSON`: Enable/disable local JSON file loading
- `useTypeScriptFallback`: Enable/disable compiled TS modules
- `debugLogging`: Enable/disable detailed console logging

This provides maximum flexibility for different deployment scenarios.
