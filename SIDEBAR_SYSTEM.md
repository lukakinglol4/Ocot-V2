# Sidebar System Documentation

The sidebar system in Ocot Client provides the primary navigation interface for the application. It's implemented through the `ProxySidebar` class and handles all sidebar-related functionality including button management, styling, and user interaction.

## Architecture Overview

The sidebar system is built around the `ProxySidebar` class located in `src/sidebar.ts`. It provides:

- **Navigation Interface**: Primary way users navigate between different views
- **Dynamic Button Management**: Buttons can be added, removed, and reordered
- **State Management**: Active view tracking and visual feedback
- **Customizable Layout**: Supports custom tab ordering via localStorage
- **Responsive Design**: Adapts to different screen sizes with proper scrolling

## Core Components

### ProxySidebar Class

The main class that manages all sidebar functionality:

```typescript
export class ProxySidebar {
  constructor() {
    this.sidebar = null;
    this.buttons = {};
    this.buttonContainer = null;
  }
}
```

**Key Properties:**

- `sidebar`: Main sidebar DOM element
- `buttons`: Object storing all navigation button references
- `buttonContainer`: Scrollable container for navigation buttons

### Structure

```
┌─────────────────────────┐
│     Sidebar Header      │ ← Title, subtitle, click to welcome
├─────────────────────────┤
│                         │
│    Button Container     │ ← Scrollable navigation buttons
│    (scrollable)         │
│                         │
│  🌐 Proxy              │
│  🎮 Games List         │
│  🔖 Bookmarklets       │
│  📜 Scripts            │
│  📝 Notes              │
│  🧮 Calculator         │
│  💻 Console            │
│  🎭 Cloaking           │
│  🌊 History Flood      │
│  🔄 CORS Proxy         │
│  🔍 Pocket Browser     │
│  ⚙️ Settings           │
│                         │
└─────────────────────────┘
```

## Key Features

### 1. Header Section

The header contains the application title and provides quick access to the welcome screen:

```typescript
createHeader() {
  const header = document.createElement("div");
  header.className = "sidebar-header";
  header.style.cursor = "pointer";
  header.title = "Click to return to welcome screen";
  header.innerHTML = `
    <h1 class="sidebar-title">Ocot Client</h1>
    <p class="sidebar-subtitle">by ASC2563</p>
  `;
  return header;
}
```

**Features:**

- Clickable to return to welcome screen
- Gradient background with hover effects
- Branded title and subtitle

### 2. Navigation Buttons

Navigation buttons are dynamically created and managed:

```typescript
createButton(label, icon = "", type = "normal") {
  const btn = document.createElement("button");
  btn.className = `sidebar-btn`;
  btn.innerHTML = icon ? `${icon} ${label}` : label;
  return btn;
}
```

**Default Navigation Tabs:**

- **Proxy** (🌐): Main proxy functionality
- **Games List** (🎮): Collection of unblocked games
- **Bookmarklets** (🔖): JavaScript bookmarklets
- **Scripts** (📜): Utility scripts and tools
- **Notes** (📝): Note-taking functionality
- **Calculator** (🧮): Calculator utility
- **Console** (💻): JavaScript console
- **Cloaking** (🎭): Tab cloaking features
- **History Flood** (🌊): History manipulation
- **CORS Proxy** (🔄): CORS bypass utilities
- **Pocket Browser** (🔍): Embedded browser
- **Settings** (⚙️): Application settings

### 3. Customizable Tab Order

Users can customize the order of navigation tabs through localStorage:

```typescript
_getTabOrder() {
  const defaultOrder = [
    "proxyButton", "gamesButton", "bookmarkletsButton",
    "scriptsButton", "notesButton", "calculatorButton",
    "consoleButton", "cloakingButton", "historyFloodButton",
    "corsProxyButton", "pocketBrowserButton", "settingsButton"
  ];

  try {
    const saved = localStorage.getItem("ocot-tab-order");
    if (saved) {
      const parsed = JSON.parse(saved);
      // Validation logic...
      return parsed;
    }
  } catch (e) {
    console.warn("Failed to load tab order from localStorage:", e);
  }
  return defaultOrder;
}
```

**Storage Key:** `ocot-tab-order`
**Format:** JSON array of button keys

### 4. Active State Management

The sidebar tracks and visually indicates the currently active view:

```typescript
setActiveButton(buttonKey) {
  // Remove active class from all buttons
  Object.entries(this.buttons).forEach(([key, btn]) => {
    btn.classList.remove("active");
  });

  // Add active class to selected button
  if (buttonKey && this.buttons[buttonKey]) {
    this.buttons[buttonKey].classList.add("active");
  }
}
```

**Visual Indicators:**

- Active button gets blue background
- Left border accent
- Box shadow effect
- White text color

## API Reference

### Public Methods

#### `createSidebar()`

Creates and returns the main sidebar DOM element.

**Returns:** `HTMLElement` - The sidebar container

#### `addNavigationButtons()`

Adds all default navigation buttons in the configured order.

#### `refreshButtonOrder()`

Refreshes the button order based on current localStorage settings.

#### `getButtons()`

Returns the buttons object for external event listener binding.

**Returns:** `Object` - Button references keyed by button name

#### `getHeader()`

Returns the header element for external event binding.

**Returns:** `HTMLElement` - The header element

#### `setActiveButton(buttonKey)`

Sets the active button and updates visual state.

**Parameters:**

- `buttonKey` (string): Key of the button to make active

#### `addCustomButton(key, label, icon, type)`

Adds a custom button to the sidebar.

**Parameters:**

- `key` (string): Unique identifier for the button
- `label` (string): Display text for the button
- `icon` (string): Optional emoji or icon
- `type` (string): Button type ("normal", "hide-btn", "remove-btn")

**Returns:** `HTMLElement` - The created button element

#### `removeButton(key)`

Removes a button from the sidebar.

**Parameters:**

- `key` (string): Key of the button to remove

#### `static injectCSS()`

Injects the sidebar-specific CSS styles into the document head.

## Styling System

The sidebar uses CSS custom properties for theming:

```css
:root {
  --accent-color: #00bfff;
  --accent-color-rgb: 0, 191, 255;
}
```

### Key Style Classes

- `.proxy-sidebar`: Main sidebar container
- `.sidebar-header`: Header section with title
- `.sidebar-title`: Main application title
- `.sidebar-subtitle`: Subtitle text
- `.sidebar-btn`: Navigation button base class
- `.sidebar-btn.active`: Active button state
- `.sidebar-btn.hide-btn`: Hide button styling
- `.sidebar-btn.remove-btn`: Remove button styling

### Responsive Features

- **Scrollable Navigation**: Button container scrolls when content overflows
- **Hover Effects**: Buttons translate and change color on hover
- **Custom Scrollbar**: Styled scrollbar for better visual integration
- **Flexible Height**: Adapts to container height automatically

## Integration with Main App

The sidebar integrates with the main application through event listeners:

```typescript
// In main.ts
const sidebar = new ProxySidebar();
const sidebarElement = sidebar.createSidebar();
sidebar.addNavigationButtons();

// Bind event listeners
const buttons = sidebar.getButtons();
Object.entries(buttons).forEach(([key, button]) => {
  button.addEventListener("click", () => {
    // Handle view switching
    this.switchView(key);
    sidebar.setActiveButton(key);
  });
});
```

## Best Practices

### Button Management

- Always use unique keys for custom buttons
- Remove buttons properly to prevent memory leaks
- Update active state when switching views

### Styling

- Use CSS custom properties for consistent theming
- Maintain hover and active state consistency
- Ensure accessibility with proper contrast ratios

### Performance

- Cache DOM elements where possible
- Use event delegation for dynamic buttons
- Minimize DOM manipulation during updates

### User Experience

- Provide visual feedback for all interactions
- Maintain consistent icon usage
- Ensure smooth transitions and animations

## Common Use Cases

### Adding a New Navigation Button

```typescript
// 1. Add to tab metadata
const tabMetadata = {
  newFeatureButton: { label: "New Feature", icon: "✨" },
};

// 2. Add to default order
const defaultOrder = [...existingOrder, "newFeatureButton"];

// 3. Create button and bind event
const button = sidebar.addCustomButton("newFeatureButton", "New Feature", "✨");
button.addEventListener("click", () => {
  app.switchView("newFeature");
  sidebar.setActiveButton("newFeatureButton");
});
```

### Customizing Tab Order

```typescript
// Save custom order to localStorage
const customOrder = [
  "settingsButton",
  "proxyButton",
  "gamesButton",
  // ... other buttons
];
localStorage.setItem("ocot-tab-order", JSON.stringify(customOrder));

// Refresh sidebar to apply new order
sidebar.refreshButtonOrder();
```

### Handling Dynamic Buttons

```typescript
// Add temporary button
const tempButton = sidebar.addCustomButton(
  "tempButton",
  "Temporary Action",
  "⏱️",
  "normal"
);

// Remove after use
setTimeout(() => {
  sidebar.removeButton("tempButton");
}, 5000);
```

## Future Enhancements

Potential improvements to the sidebar system:

- **Drag & Drop Reordering**: Visual tab reordering interface
- **Collapsible Sections**: Group related buttons into collapsible sections
- **Badge System**: Show notification badges on navigation buttons
- **Keyboard Navigation**: Full keyboard accessibility support
- **Context Menus**: Right-click context menus for buttons
- **Pin/Unpin System**: Allow users to hide unused navigation options
