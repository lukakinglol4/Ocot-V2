# Main Application System Documentation

## Overview

The **Main Application System** is the core orchestrator of the Ocot Client, implemented through the `ProxyClientApp` class in `main.ts`. This system manages the entire application lifecycle, UI framework, window management, user interactions, and view coordination. It serves as the central hub that integrates all other systems (sidebar, views, handlers, utils) into a cohesive single-page application.

## Architecture

### System Responsibilities

- **Application Lifecycle**: Initialization, launch, and cleanup management
- **UI Framework**: Window system with draggable, resizable, maximizable interface
- **View Orchestration**: Manages view switching, visibility, and active states
- **Window Management**: Frame positioning, maximize/minimize, floating button
- **Event Coordination**: Keyboard shortcuts, drag interactions, button events
- **Settings Integration**: Persistent configuration and user preferences
- **State Management**: Application state, view states, UI component states

### Key Components

1. **ProxyClientApp Class**: Main application controller
2. **Window System**: Draggable frame with standard window controls
3. **Floating Button**: Minimized state access point with drag functionality
4. **View Manager**: Coordinates view switching and active states
5. **Event System**: Handles global shortcuts and interactions
6. **Settings Manager**: Persistent configuration management

## ProxyClientApp Class

### Class Properties

```typescript
class ProxyClientApp {
  // Core UI Elements
  frame: HTMLElement | null; // Main application frame
  views: Record<string, HTMLElement>; // All view instances
  sidebar: ProxySidebar; // Sidebar navigation instance
  sidebarButtons: Record<string, HTMLElement>; // Button references

  // Window Management
  isMaximized: boolean; // Maximization state
  normalFrameStyle: string | null; // Stored normal dimensions
  floatingButton: HTMLElement | null; // Minimized state button

  // Drag Functionality
  isDragging: boolean; // Floating button drag state
  isFrameDragging: boolean; // Window drag state
  dragOffset: { x: number; y: number }; // Drag position offset
  topBarDragHandlers: any; // Stored event handlers
}
```

### Core Methods

#### Application Lifecycle

```typescript
// Initialize and launch the application
launch(): void

// Completely remove application from DOM
removeProxyClient(): void

// Toggle application visibility
toggleProxyClient(): void

// Show application (hide floating button)
showProxyClient(): void

// Hide application (show floating button if enabled)
hideProxyClient(): void
```

#### UI Framework Setup

```typescript
// Create main application frame with window styling
setupFrameStyle(): void

// Create top bar with title and window controls
createTopBar(): HTMLElement

// Create main content area with views
createContent(): HTMLElement

// Inject application-specific CSS styles
injectAppStyles(): void
```

#### Window Management

```typescript
// Toggle between maximized and normal states
toggleMaximize(): void

// Maximize frame to fullscreen
maximizeFrame(): void

// Restore frame to normal size
restoreFrame(): void

// Create window control button (minimize, maximize, close)
createWindowControlButton(symbol: string, color: string, onClick: Function): HTMLElement
```

#### View Management

```typescript
// Setup all sidebar button event listeners
setupSidebarEvents(): void

// Attach event listeners to sidebar buttons
attachButtonEventListeners(eventHandlers: Record<string, Function>): void

// Refresh sidebar when tab order changes
refreshSidebar(): void

// Show welcome view (home state)
showWelcomeView(): void

// Initialize calculator functionality
initCalculator(): void
```

#### Drag Functionality

```typescript
// Initialize top bar drag functionality for window movement
initializeTopBarDrag(): void

// Add drag functionality to floating button
addDragFunctionality(): void
```

#### Settings Management

```typescript
// Get general application settings from localStorage
getGeneralSettings(): { enableFloatingButton: boolean }

// Apply initial settings on application launch
applyInitialSettings(): void
```

## Window System

### Frame Structure

The application creates a comprehensive window system with multiple components:

```typescript
// Main frame structure
<div class="proxy-app-frame">
  <div class="proxy-top-bar">
    {" "}
    // Title bar with controls
    <div>
      {" "}
      // Title area (draggable)
      <span>🔧</span>
      <span>Ocot Client</span>
    </div>
    <div>
      {" "}
      // Window controls
      <button>−</button> // Minimize
      <button>□</button> // Maximize/Restore
      <button>×</button> // Close
    </div>
  </div>
  <div class="main-content">
    {" "}
    // Content area
    <sidebar /> // Navigation sidebar
    <content>
      {" "}
      // View container
      <div class="content-overlay" /> // Background effects
      <view-components /> // All view instances
    </content>
  </div>
</div>
```

### Window Features

- **Draggable**: Click and drag title bar to move window
- **Resizable**: Maximize/restore functionality
- **Bounds Checking**: Prevents dragging outside viewport
- **State Persistence**: Remembers normal size when maximized
- **Visual Feedback**: Cursor changes during drag operations

### Floating Button System

When minimized, the application provides a floating access button:

```typescript
// Floating button features
- Position: Fixed positioning with drag capability
- Visual: Gradient background with hover effects
- Functionality: Click to restore, drag to reposition
- Settings: Can be disabled via user preferences
- Persistence: Maintains position after drag operations
```

## View Management System

### View Initialization

The application creates and manages all view instances:

```typescript
// View creation in createContent()
this.views = {
  welcomeView: createWelcomeView(),
  proxyView: createProxyView(),
  notesView: createNotesView(),
  calculatorView: createCalculatorView(),
  consoleView: createConsoleView(),
  cloakingView: createCloakingView(),
  historyFloodView: createHistoryFloodView(),
  corsProxyView: createCorsProxyView(),
  pocketBrowserView: createPocketBrowserView(),
  scriptsView: createScriptsView(),
  settingsView: createSettingsView(),
  bookmarkletsView: createBookmarkletsView(),
  gamesView: gamesViewDiv, // Special handling for games
};
```

### View Switching Logic

Each sidebar button has a corresponding event handler:

```typescript
// Standard view switching pattern
const eventHandlers = {
  proxyButton: () => {
    hideAll(); // Hide all views
    v.proxyView.style.display = "flex"; // Show target view
    setActiveButton("proxyButton"); // Update active state
  },
  // ... similar patterns for all views
};
```

### Special View Handling

- **Welcome View**: Default view, shown when clicking header
- **Calculator View**: Requires initialization for button functionality
- **Games View**: Uses innerHTML injection instead of view component
- **Settings View**: Integrates with application settings management

## Event System

### Global Keyboard Shortcuts

```typescript
// Backslash key toggle
document.addEventListener("keydown", (event) => {
  if (event.key === "\\") {
    if (window.proxyFrame) {
      this.toggleProxyClient();
    }
  }
});
```

### Outside Click Handling

```typescript
// Clear active states when clicking outside application
document.addEventListener("click", (event) => {
  if (this.frame && this.frame.style.display !== "none") {
    const clickedInsideFrame = this.frame.contains(event.target as Node);
    if (!clickedInsideFrame) {
      this.sidebar.setActiveButton(null);
    }
  }
});
```

### Dynamic Event Management

The application handles dynamic sidebar changes:

```typescript
// Tab order change listener
document.addEventListener("tabOrderChanged", () => {
  this.refreshSidebar();
});
```

## Drag Implementation

### Window Dragging

Top bar drag implementation with constraints:

```typescript
// Mouse down handler
const handleMouseDown = (e: MouseEvent) => {
  if (this.isMaximized) return; // Disable when maximized
  if (windowControls?.contains(e.target)) return; // Ignore control buttons

  this.isFrameDragging = true;

  // Calculate offset for smooth dragging
  const frameRect = this.frame?.getBoundingClientRect();
  if (frameRect) {
    this.dragOffset.x = e.clientX - frameRect.left;
    this.dragOffset.y = e.clientY - frameRect.top;
  }
};

// Mouse move handler with bounds checking
const handleMouseMove = (e: MouseEvent) => {
  if (!this.isFrameDragging) return;

  let newX = e.clientX - this.dragOffset.x;
  let newY = e.clientY - this.dragOffset.y;

  // Keep within viewport bounds
  const maxX = window.innerWidth - frameWidth;
  const maxY = window.innerHeight - frameHeight;

  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  // Update position with transform
  this.frame.style.transform = `translate(${newX}px, ${newY}px)`;
};
```

### Floating Button Dragging

Separate drag system for the floating button:

```typescript
// Drag detection with click prevention
const deltaX = e.clientX - startX;
const deltaY = e.clientY - startY;

// Threshold for drag vs click
if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
  this.isDragging = true; // Prevent click event
}

// Position update with bounds checking
let newX = initialX + deltaX;
let newY = initialY + deltaY;

const buttonSize = 50;
const maxX = window.innerWidth - buttonSize;
const maxY = window.innerHeight - buttonSize;

newX = Math.max(0, Math.min(newX, maxX));
newY = Math.max(0, Math.min(newY, maxY));
```

## Settings Integration

### Settings Structure

```typescript
interface GeneralSettings {
  enableFloatingButton: boolean; // Show/hide floating button when minimized
}
```

### Settings Usage

```typescript
// Load settings from localStorage
getGeneralSettings(): GeneralSettings {
  const settings = localStorage.getItem("ocot-general-settings");
  return settings ? JSON.parse(settings) : { enableFloatingButton: true };
}

// Apply settings on application launch
applyInitialSettings(): void {
  const settings = this.getGeneralSettings();

  if (!settings.enableFloatingButton) {
    this.floatingButton.style.display = "none";
  }
}

// Use settings in visibility logic
hideProxyClient(): void {
  this.frame.style.display = "none";

  const settings = this.getGeneralSettings();
  if (settings.enableFloatingButton) {
    this.floatingButton.style.display = "flex";
  } else {
    this.floatingButton.style.display = "none";
  }
}
```

## Styling System

### CSS Injection

The application injects multiple CSS layers:

```typescript
launch(): void {
  injectAppCSS();           // Shared application CSS
  ProxySidebar.injectCSS(); // Sidebar-specific CSS
  this.injectAppStyles();   // Main app frame styles
}
```

### Frame Styling

```typescript
injectAppStyles(): void {
  const style = document.createElement("style");
  style.textContent = `
    .proxy-app-frame {
      background: var(--bg-primary);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      border: 1px solid var(--border-color);
      overflow: hidden;
    }

    .proxy-content {
      background: var(--bg-primary);
      position: relative;
    }

    .content-overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: radial-gradient(circle at 20% 80%, rgba(0, 122, 204, 0.03) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(0, 191, 255, 0.03) 0%, transparent 50%);
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);
}
```

### Dynamic Styling

Window controls and interactive elements use dynamic styling:

```typescript
// Window control button styling
btn.style.cssText = `
  width: 24px; height: 24px;
  border: none; border-radius: 4px;
  background: ${color}; color: white;
  cursor: pointer; display: flex;
  align-items: center; justify-content: center;
  font-size: 14px; font-weight: bold;
  transition: all 0.2s ease;
`;

// Hover effects
btn.addEventListener("mouseenter", () => {
  btn.style.transform = "scale(1.1)";
  btn.style.opacity = "0.8";
});
```

## Error Handling

### Safe Initialization

The application includes error handling for critical operations:

```typescript
// Safe frame positioning
const frameRect = this.frame?.getBoundingClientRect();
if (frameRect) {
  this.dragOffset.x = e.clientX - frameRect.left;
  this.dragOffset.y = e.clientY - frameRect.top;
}

// Safe DOM manipulation
if (this.frame && this.frame.parentNode) {
  this.frame.parentNode.removeChild(this.frame);
}
```

### Calculator Error Handling

```typescript
// Safe expression evaluation
try {
  const sanitizedValue = currentValue.replace(/[^0-9+\-*/.() ]/g, "");
  if (sanitizedValue !== currentValue) {
    currentValue = "Invalid Input";
  } else if (sanitizedValue.trim() === "") {
    currentValue = "";
  } else {
    const result = Function('"use strict"; return (' + sanitizedValue + ")")();
    currentValue =
      typeof result === "number" && isFinite(result)
        ? result.toString()
        : "Error";
  }
} catch (e) {
  currentValue = "Error";
}
```

## Global References

### Window Object Integration

```typescript
// Make app instance globally accessible
window.proxyClientApp = app;
window.proxyFrame = this.frame;

// Global cleanup on removal
removeProxyClient(): void {
  // ... cleanup logic
  window.proxyFrame = null;
}
```

## Integration with Other Systems

### Sidebar System Integration

```typescript
// Create and configure sidebar
this.sidebar = new ProxySidebar();
const sidebarElement = this.sidebar.createSidebar();
this.sidebar.addNavigationButtons();
this.sidebarButtons = this.sidebar.getButtons();

// Header click handler
const sidebarHeader = this.sidebar.getHeader();
sidebarHeader.addEventListener("click", () => {
  this.showWelcomeView();
});
```

### View System Integration

```typescript
// Import all view creators
import createWelcomeView from "./views/welcome.js";
import createProxyView from "./views/proxy.js";
// ... all other view imports

// Create view instances
this.views.welcomeView = createWelcomeView();
this.views.proxyView = createProxyView();
// ... all other view creations
```

### Utils System Integration

```typescript
// CSS injection utilities
import { injectAppCSS } from "./css.js";

// Use in launch process
launch(): void {
  injectAppCSS();
  // ... rest of launch logic
}
```

## Best Practices

### Development Guidelines

1. **State Management**: Keep application state in class properties
2. **Event Cleanup**: Store event handler references for potential cleanup
3. **Safe DOM Access**: Always check element existence before manipulation
4. **Error Boundaries**: Wrap critical operations in try-catch blocks
5. **Responsive Design**: Use viewport units and bounds checking
6. **Performance**: Minimize DOM queries by storing element references

### Extension Patterns

```typescript
// Adding new views
1. Import view creator function
2. Add to views object in createContent()
3. Create sidebar button in ProxySidebar
4. Add event handler in setupSidebarEvents()
5. Include in hideAll() and refresh logic

// Adding new window features
1. Extend class properties for state tracking
2. Create handler methods following existing patterns
3. Integrate with window control creation
4. Add to setupFrameStyle() if needed

// Adding new settings
1. Extend GeneralSettings interface
2. Update getGeneralSettings() default values
3. Add application logic in applyInitialSettings()
4. Integrate with relevant methods
```

### Performance Considerations

- **Lazy View Initialization**: Views are created once and reused
- **Event Delegation**: Minimize event listener creation
- **CSS Optimization**: Use transforms for positioning over layout changes
- **Memory Management**: Clean up references on removal
- **Bounds Checking**: Prevent expensive layout calculations

## Common Use Cases

### Adding a New View

```typescript
// 1. Import the view creator
import createNewView from "./views/newView.js";

// 2. Add to views object
this.views.newView = createNewView();

// 3. Add event handler
newViewButton: () => {
  hideAll();
  v.newView.style.display = "block";
  setActiveButton("newViewButton");
},

// 4. Update refresh logic (include in eventHandlers object)
```

### Customizing Window Behavior

```typescript
// Override window control behavior
const customCloseBtn = this.createWindowControlButton("×", "#ef4444", () => {
  // Custom close logic
  this.customCleanup();
  this.removeProxyClient();
});

// Add new window control
const customBtn = this.createWindowControlButton("?", "#6b7280", () => {
  // Custom functionality
  this.showHelpDialog();
});
windowControls.appendChild(customBtn);
```

### Extending Drag Functionality

```typescript
// Add drag constraints
const handleMouseMove = (e: MouseEvent) => {
  if (!this.isFrameDragging) return;

  // Custom constraint logic
  if (this.isDockingMode) {
    // Snap to edges
    if (newX < 50) newX = 0;
    if (newY < 50) newY = 0;
  }

  // Apply position
  this.frame.style.transform = `translate(${newX}px, ${newY}px)`;
};
```

## Troubleshooting

### Common Issues

1. **Views Not Switching**: Check event handler attachment and button references
2. **Drag Not Working**: Verify event listener attachment and state management
3. **Settings Not Persisting**: Check localStorage key names and JSON parsing
4. **Floating Button Not Showing**: Verify settings and display logic
5. **Window Not Dragging**: Check isMaximized state and event propagation

### Debug Helpers

```typescript
// Debug view states
console.log("Current views:", Object.keys(this.views));
console.log(
  "Active view:",
  Object.values(this.views).find((v) => v.style.display !== "none")
);

// Debug drag state
console.log("Frame dragging:", this.isFrameDragging);
console.log("Button dragging:", this.isDragging);
console.log("Maximized:", this.isMaximized);

// Debug settings
console.log("Settings:", this.getGeneralSettings());
```

This comprehensive documentation covers the main application system's architecture, implementation details, integration patterns, and best practices for development and extension.
