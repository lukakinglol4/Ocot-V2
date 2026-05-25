# Themes JSON Data

This file contains theme definitions for the Ocot Client application in JSON format.

## File: `themes.json`

### Purpose

- Provides an easy-to-edit JSON format for theme data
- Allows theme modifications without TypeScript knowledge
- Supports runtime theme loading in hosted environments
- Falls back to TypeScript data in bookmarklet mode

### Structure

The file contains an array of theme objects, where each theme has the following properties:

```json
{
  "id": "theme-identifier", // Unique ID (e.g., "default", "blue", "purple")
  "name": "Display Name", // User-friendly name (e.g., "Default Dark")
  "description": "Short description", // Brief description (e.g., "Classic dark theme")
  "icon": "🎨", // Emoji icon for visual identification
  "colors": {
    "bgPrimary": "#23272f", // Primary background color (hex)
    "bgSecondary": "#292d36", // Secondary background color (hex)
    "accentColor": "#007acc", // Accent color for interactive elements (hex)
    "accentHover": "#005a9e", // Hover state accent color (hex)
    "accentColorRgb": "0, 122, 204" // RGB values as comma-separated string
  },
  "preview": [
    // Array of 3 hex colors for preview
    "#23272f", // Preview color 1
    "#007acc", // Preview color 2
    "#292d36" // Preview color 3
  ]
}
```

### Adding a New Theme

To add a new theme to `themes.json`:

1. Copy an existing theme object
2. Change the `id` to a unique identifier (lowercase, no spaces)
3. Update the `name` and `description`
4. Choose an appropriate emoji for the `icon`
5. Set your custom colors:
   - `bgPrimary`: Main background color
   - `bgSecondary`: Secondary/card background color
   - `accentColor`: Primary accent color for buttons, links, etc.
   - `accentHover`: Darker/lighter shade for hover states
   - `accentColorRgb`: RGB values of accentColor (without "rgb()" wrapper)
6. Set 3 preview colors that represent your theme
7. Save the file - changes take effect on next app reload

### Example: Adding a New Theme

```json
{
  "id": "midnight",
  "name": "Midnight Blue",
  "description": "Deep blue night theme",
  "icon": "🌙",
  "colors": {
    "bgPrimary": "#0f1419",
    "bgSecondary": "#1a1f2e",
    "accentColor": "#4a9eff",
    "accentHover": "#3a8eef",
    "accentColorRgb": "74, 158, 255"
  },
  "preview": ["#0f1419", "#4a9eff", "#1a1f2e"]
}
```

### Color Guidelines

- Use hex colors (#RRGGBB format)
- Ensure sufficient contrast between background and text colors
- Test hover states to ensure they're visible
- Preview colors should represent the theme visually

### Current Themes

The file includes these pre-defined themes:

1. **default** - Default Dark theme (🎨)
2. **blue** - Ocean Blue theme (🌊)
3. **purple** - Purple Haze theme (💜)
4. **green** - Matrix Green theme (🟢)
5. **red** - Crimson Red theme (🔴)
6. **custom** - Custom Theme (✨) - placeholder for user-defined colors

### Technical Notes

- The TypeScript interface for themes is defined in `src/data/typescript/themes.ts`
- The settings view (`src/views/settings.ts`) loads themes from JSON first, then falls back to TypeScript if JSON loading fails
- In bookmarklet mode, the TypeScript fallback is always used as JSON files cannot be fetched
- Color changes are applied via CSS custom properties (CSS variables)

### Troubleshooting

- **Themes not loading**: Check browser console for JSON parsing errors
- **Invalid JSON**: Use a JSON validator (e.g., `jsonlint.com`) to check syntax
- **Colors not applying**: Verify hex color format and RGB string format
- **Missing themes**: Ensure theme has all required fields
