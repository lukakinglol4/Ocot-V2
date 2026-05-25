# View System Documentation

The view system in Ocot Client provides a modular architecture for creating and managing different functional interfaces within the application. Each view is a self-contained module that handles its own styling, functionality, and user interactions.

## Architecture Overview

The view system is built around a simple but powerful pattern where each view is implemented as a TypeScript module that exports a default function returning a configured DOM element. This modular approach enables:

- **Component Isolation**: Each view manages its own state and styling
- **Dynamic Loading**: Views are created on-demand when accessed
- **Consistent Interface**: All views follow the same creation pattern
- **Easy Extension**: New views can be added with minimal changes to core code

## Core View Pattern

Every view in Ocot Client follows this standardized pattern:

```typescript
export default function createViewName(): HTMLElement {
  // 1. CSS Injection (if needed)
  if (!document.getElementById("view-style-id")) {
    const style = document.createElement("style");
    style.id = "view-style-id";
    style.textContent = `/* View-specific styles */`;
    document.head.appendChild(style);
  }

  // 2. DOM Element Creation
  const viewElement = document.createElement("div");
  viewElement.className = "view-container";

  // 3. Content and Structure
  viewElement.innerHTML = `
    <!-- View HTML template -->
  `;

  // 4. Event Listeners and Interactivity
  // Add event handlers for buttons, forms, etc.

  // 5. Return Configured Element
  return viewElement;
}
```

## View Types and Categories

### 1. Core Navigation Views

**Welcome View** (`src/views/welcome.ts`)

- Landing page with feature overview and quick start guide
- Includes documentation launcher and feature cards
- Provides navigation guidance for new users

**Settings View** (`src/views/settings.ts`)

- Application configuration and customization
- Theme selection and proxy settings
- Help documentation and support information

### 2. Proxy and Networking Views

**Proxy View** (`src/views/proxy.ts`)

- Main web proxy functionality
- URL input and navigation controls
- Proxy server configuration interface

**CORS Proxy View** (`src/views/corsProxy.ts`)

- Cross-Origin Resource Sharing bypass
- API request proxy functionality
- Developer-focused networking tools

**Pocket Browser View** (`src/views/pocketBrowser.ts`)

- Embedded browser with privacy features
- Session-based browsing with custom user agents
- Bookmark management and history tracking

### 3. Privacy and Security Views

**Cloaking View** (`src/views/cloaking.ts`)

- Tab title and favicon disguising
- Preset cloaking options (Google, Classroom, etc.)
- Custom cloaking configuration

**History Flood View** (`src/views/historyFlood.ts`)

- Browser history manipulation
- Configurable flooding intensity and duration
- Educational website flooding patterns

### 4. Entertainment and Games

**Games View** (`src/views/games.ts`)

- Categorized game collections (Blocked, Unblocked, CORS Optimized)
- Dynamic game loading from JSON data
- Search and filtering capabilities

### 5. Developer and Productivity Tools

**Console View** (`src/views/console.ts`)

- JavaScript code execution environment
- Real-time output display with error handling
- Multi-line code support and history

**Calculator View** (`src/views/calculator.ts`)

- Mathematical expression evaluation
- Basic and advanced mathematical operations
- Copy results functionality

**Notes View** (`src/views/notes.ts`)

- Persistent note-taking with auto-save
- Local storage integration
- Simple text editing interface

**Scripts View** (`src/views/scripts.ts`)

- Script handler management interface
- Categorized script collections
- Dynamic handler loading and execution

**Bookmarklets View** (`src/views/bookmarklets.ts`)

- JavaScript bookmarklet collection
- Categorized tools for productivity and development
- One-click execution and bookmark bar integration

## View Lifecycle

### 1. View Creation Process

```typescript
// In ProxyClientApp.setupViews()
createWelcomeView() {
  if (!this.views.welcome) {
    this.views.welcome = welcomeView(); // Call view function
  }
  return this.views.welcome;
}
```

### 2. View Switching

```typescript
// In ProxyClientApp.switchView()
switchView(viewName) {
  // Hide current view
  if (this.currentView) {
    this.currentView.style.display = 'none';
  }

  // Create or show target view
  const targetView = this.createView(viewName);
  targetView.style.display = 'block';

  // Update current view reference
  this.currentView = targetView;
}
```

### 3. View Cleanup

Views are cached after creation and reused when switched back to. Cleanup typically involves:

- Removing event listeners when necessary
- Clearing timers or intervals
- Resetting form states

## Styling System

Views use a combination of approaches for styling:

### 1. Global CSS

Shared styles are injected via `injectAppCSS()` from `src/css.ts`:

```typescript
import { injectAppCSS } from "../css.js";

export default function createView() {
  injectAppCSS(); // Inject shared styles
  // ... rest of view creation
}
```

### 2. View-Specific CSS

Each view can inject its own CSS for component-specific styling:

```typescript
// CSS injection pattern
if (!document.getElementById("unique-view-style")) {
  const style = document.createElement("style");
  style.id = "unique-view-style";
  style.textContent = `
    .view-specific-class {
      /* View-specific styles */
    }
  `;
  document.head.appendChild(style);
}
```

### 3. Inline Styles

For dynamic or component-specific styling:

```typescript
viewElement.style.cssText = `
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
`;
```

## Common View Utilities

### 1. CSS Class Patterns

- `.card-grid-view`: Grid-based card layout
- `.card-item`: Individual card styling
- `.view-container`: Standard view wrapper
- `.content-section`: Content area styling

### 2. Theme Integration

Views integrate with the application's theme system:

```css
:root {
  --accent-color: #00bfff;
  --accent-color-rgb: 0, 191, 255;
  --bg-primary: #23272f;
  --bg-secondary: #292d36;
  --text-primary: #fff;
  --text-secondary: #d4d4d4;
  --text-muted: #7d8590;
}
```

### 3. Responsive Design

Views should implement responsive design patterns:

```css
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
```

## Event Handling Patterns

### 1. Button Click Handlers

```typescript
// Standard button event pattern
setTimeout(() => {
  const button = viewElement.querySelector("#action-button");
  if (button) {
    button.addEventListener("click", () => {
      // Handle button click
    });
  }
}, 0);
```

### 2. Form Submission

```typescript
const form = viewElement.querySelector("#view-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Handle form submission
  });
}
```

### 3. Input Validation

```typescript
const input = viewElement.querySelector("#url-input");
if (input) {
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    // Validate input and provide feedback
  });
}
```

## Data Integration

### 1. Local Storage

Views commonly integrate with localStorage for persistence:

```typescript
// Save data
localStorage.setItem("ocot-view-data", JSON.stringify(data));

// Load data
const savedData = localStorage.getItem("ocot-view-data");
if (savedData) {
  const data = JSON.parse(savedData);
  // Use loaded data
}
```

### 2. Dynamic Data Loading

Views can load external data dynamically:

```typescript
import { loadJson } from "../utils/helpers.js";

// In view creation
loadJson("./src/data/json/games.json")
  .then((data) => {
    // Use loaded data
  })
  .catch(() => {
    // Fallback to JavaScript data
  });
```

### 3. Cross-View Communication

Views can communicate through the main application instance:

```typescript
// In main.ts - ProxyClientApp
updateViewData(viewName, data) {
  if (this.views[viewName]) {
    // Update view with new data
  }
}
```

## Best Practices

### 1. View Structure

- **Single Responsibility**: Each view should focus on one primary function
- **Consistent Layout**: Use established CSS classes and patterns
- **Accessibility**: Include proper ARIA labels and keyboard navigation
- **Error Handling**: Gracefully handle missing data or failed operations

### 2. Performance

- **Lazy Loading**: Create views only when needed
- **Event Cleanup**: Remove event listeners when appropriate
- **DOM Caching**: Cache frequently accessed DOM elements
- **Efficient Updates**: Update only changed elements, not entire view

### 3. Code Organization

- **Clear Functions**: Break complex views into smaller functions
- **Type Safety**: Use TypeScript types for better development experience
- **Documentation**: Comment complex logic and interactions
- **Consistent Naming**: Follow established naming conventions

### 4. User Experience

- **Loading States**: Show loading indicators for async operations
- **Error Messages**: Provide clear, actionable error messages
- **Visual Feedback**: Give immediate feedback for user actions
- **Progressive Enhancement**: Ensure core functionality works without JavaScript

## Creating New Views

### 1. File Structure

Create new view file in `src/views/`:

```typescript
// src/views/newfeature.ts
export default function createNewFeatureView(): HTMLElement {
  // View implementation
  return viewElement;
}
```

### 2. Integration Steps

1. **Import in main.ts**:

   ```typescript
   import newFeatureView from "./views/newfeature.js";
   ```

2. **Add to ProxyClientApp.setupViews()**:

   ```typescript
   createNewFeatureView() {
     if (!this.views.newFeature) {
       this.views.newFeature = newFeatureView();
     }
     return this.views.newFeature;
   }
   ```

3. **Add navigation button**:

   ```typescript
   // In sidebar button metadata
   newFeatureButton: { label: "New Feature", icon: "✨" }
   ```

4. **Add view switching logic**:
   ```typescript
   buttons.newFeatureButton.addEventListener("click", () => {
     this.switchView("newFeature");
     this.sidebar.setActiveButton("newFeatureButton");
   });
   ```

### 3. Testing New Views

- Test view creation and destruction
- Verify event handlers work correctly
- Check responsive design on different screen sizes
- Validate accessibility features
- Test integration with existing views and navigation

## Common View Components

### 1. Header Pattern

```typescript
const header = document.createElement("div");
header.style.cssText = `
  text-align: center;
  margin-bottom: 30px;
`;
header.innerHTML = `
  <h1 style="color: var(--accent-color); font-size: 2rem; margin: 0 0 12px 0;">
    View Title
  </h1>
  <p style="color: var(--text-muted); font-size: 1.1rem; margin: 0; line-height: 1.5;">
    View description or subtitle
  </p>
`;
```

### 2. Card Layout Pattern

```typescript
const cardContainer = document.createElement("div");
cardContainer.style.cssText = `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;
```

### 3. Action Button Pattern

```typescript
const actionButton = document.createElement("button");
actionButton.style.cssText = `
  background: var(--accent-color);
  border: none;
  border-radius: 8px;
  color: #fff;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
`;
```

## View System Future Enhancements

Potential improvements to the view system:

- **View State Management**: Centralized state management system
- **View Transitions**: Smooth animations between view switches
- **View Composition**: Support for nested views and components
- **View Templates**: Template system for common view patterns
- **View Routing**: URL-based view routing for bookmarking
- **View Plugins**: Plugin system for extending view functionality
