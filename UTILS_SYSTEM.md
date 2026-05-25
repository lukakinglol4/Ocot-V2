# Utils System Documentation

The utils system in Ocot Client provides a collection of utility functions and helper modules that support common functionality across the application. This includes data loading, modal dialogs, and other shared utilities that enhance the user experience and maintain code consistency.

## Architecture Overview

The utils system is organized into focused modules that provide:

- **Data Loading Utilities**: Functions for loading external data files
- **Modal Dialog System**: Custom modal dialogs replacing native browser dialogs
- **Shared Helper Functions**: Common utilities used throughout the application
- **Type-Safe Interfaces**: TypeScript support for better development experience

## Core Modules

### 1. Helper Functions (`src/utils/helpers.ts`)

#### `loadJson()` Function

The primary utility for loading JSON data files asynchronously.

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

**Key Features**:

- **Async/Await**: Modern JavaScript promise-based implementation
- **Error Handling**: Comprehensive error catching with detailed messages
- **Status Checking**: Validates HTTP response status before parsing
- **Null Return**: Returns `null` on failure for easy fallback handling
- **Network Timeout**: Uses browser defaults for request timeout

**Usage Examples**:

```typescript
// Basic usage
const data = await loadJson("./src/data/json/games.json");
if (data) {
  console.log("Loaded games:", data);
} else {
  console.log("Failed to load games, using fallback");
}

// Error handling pattern
try {
  const scripts = await loadJson("./src/data/json/scripts.json");
  if (scripts && Array.isArray(scripts)) {
    renderScripts(scripts);
  } else {
    throw new Error("Invalid data format");
  }
} catch (error) {
  console.warn("Using fallback data:", error.message);
  renderScripts(fallbackData);
}

// Parallel loading
const [games, scripts] = await Promise.all([
  loadJson("./src/data/json/games.json"),
  loadJson("./src/data/json/scripts.json"),
]);
```

### 2. Modal Helper System (`src/utils/modalHelpers.ts`)

A comprehensive modal dialog system that replaces native browser dialogs (`alert()`, `prompt()`, `confirm()`) with custom, themed modals that don't cause focus loss issues.

#### Core Modal Functions

##### `showModal()` - Custom Alert

Replaces `window.alert()` with a themed modal dialog.

```typescript
/**
 * Show custom alert modal (replacement for native alert)
 * @param {string} message - Message to display
 * @param {string} title - Modal title (optional)
 * @param {string} type - Modal type (info, success, warning, error)
 * @returns {Promise<void>} - Resolves when modal is closed
 */
export function showModal(message, title = "", type = "info");
```

**Modal Types**:

- `info` (ℹ️): Default informational messages
- `success` (✅): Success confirmations and completions
- `warning` (⚠️): Warning messages and cautions
- `error` (❌): Error messages and failures
- `question` (❓): Questions and confirmations

**Usage Examples**:

```typescript
// Basic info modal
await showModal("Operation completed successfully!");

// Success modal with title
await showModal("Your settings have been saved.", "Settings Saved", "success");

// Error modal with detailed message
await showModal(
  "Failed to connect to the server. Please check your internet connection.",
  "Connection Error",
  "error"
);

// Warning modal
await showModal(
  "This action cannot be undone. Continue?",
  "Warning",
  "warning"
);
```

##### `showInputModal()` - Custom Prompt

Replaces `window.prompt()` with a styled input dialog.

```typescript
/**
 * Show custom prompt modal (replacement for native prompt)
 * @param {string} message - Message to display
 * @param {string} defaultValue - Default input value
 * @param {string} title - Modal title (optional)
 * @param {string} inputType - Input type (text, password, url, etc.)
 * @returns {Promise<string|null>} - Resolves with input value or null if cancelled
 */
export function showInputModal(
  message,
  defaultValue = "",
  title = "",
  inputType = "text"
);
```

**Input Types Supported**:

- `text`: Default text input
- `password`: Password input with hidden characters
- `url`: URL input with validation hints
- `email`: Email input with validation
- `number`: Numeric input
- `tel`: Telephone number input

**Usage Examples**:

```typescript
// Basic text input
const name = await showInputModal("Enter your name:", "", "User Information");
if (name) {
  console.log("User entered:", name);
} else {
  console.log("User cancelled");
}

// URL input with validation
const url = await showInputModal(
  "Enter the URL to open:",
  "https://",
  "Open URL",
  "url"
);

// Password input
const password = await showInputModal(
  "Enter your password:",
  "",
  "Authentication Required",
  "password"
);

// Number input with default
const timeout = await showInputModal(
  "Enter timeout in seconds:",
  "30",
  "Configuration",
  "number"
);
```

##### `showConfirmModal()` - Custom Confirm

Replaces `window.confirm()` with a styled confirmation dialog.

```typescript
/**
 * Show custom confirmation modal (replacement for native confirm)
 * @param {string} message - Message to display
 * @param {string} title - Modal title (optional)
 * @param {string} confirmText - Confirm button text (default: "Yes")
 * @param {string} cancelText - Cancel button text (default: "No")
 * @returns {Promise<boolean>} - Resolves with true if confirmed, false if cancelled
 */
export function showConfirmModal(
  message,
  title = "",
  confirmText = "Yes",
  cancelText = "No"
);
```

**Usage Examples**:

```typescript
// Basic confirmation
const confirmed = await showConfirmModal(
  "Are you sure you want to delete this?"
);
if (confirmed) {
  console.log("User confirmed deletion");
} else {
  console.log("User cancelled");
}

// Custom button text
const proceed = await showConfirmModal(
  "This will clear all your saved data. Continue?",
  "Clear Data",
  "Clear All",
  "Keep Data"
);

// Destructive action confirmation
const reset = await showConfirmModal(
  "Reset all settings to default values?",
  "Reset Settings",
  "Reset",
  "Cancel"
);
```

#### Modal System Architecture

##### Base Modal Structure

The modal system uses a layered approach:

```typescript
/**
 * Create base modal structure
 */
export function createBaseModal(title = "", type = "info");
```

**Modal Hierarchy**:

```
Modal Container (Fixed positioning, z-index: 1000000)
└── Modal Overlay (Semi-transparent background)
    └── Modal Content (Card-style container)
        ├── Header (Title and close button)
        ├── Body (Message content)
        └── Footer (Action buttons)
```

**Key Features**:

- **Fixed Positioning**: Modals appear above all other content
- **Backdrop Overlay**: Semi-transparent background prevents interaction
- **Animation Support**: Smooth fade-in/fade-out transitions
- **Theme Integration**: Uses CSS custom properties for consistent styling
- **Keyboard Support**: Escape key and Enter key handling
- **Click Outside**: Close modal when clicking outside content area

##### Modal Styling System

The modal system integrates with the application's theme system:

```css
/* CSS Custom Properties Used */
:root {
  --bg-primary: #23272f; /* Modal background */
  --bg-secondary: #1e2126; /* Input field background */
  --border-color: #404040; /* Border colors */
  --text-primary: #fff; /* Primary text color */
  --text-secondary: #d4d4d4; /* Secondary text color */
  --accent-color: #007bff; /* Accent color for buttons */
  --accent-hover: #0056b3; /* Hover state for accents */
  --accent-color-rgb: 0, 123, 255; /* RGB values for transparency */
}
```

**Modal Type Colors**:

- **Info**: Blue (#00bfff)
- **Success**: Green (#28a745)
- **Warning**: Yellow (#ffc107)
- **Error**: Red (#dc3545)
- **Question**: Purple (#6f42c1)
- **Input**: Blue (#007bff)

##### Advanced Modal Features

**Focus Management**:

```typescript
// Auto-focus appropriate elements
setTimeout(() => {
  if (inputField) {
    inputField.focus();
    inputField.select(); // Select all text for easy replacement
  } else {
    okButton.focus();
  }
}, 100);
```

**Keyboard Navigation**:

```typescript
const handleKeyDown = (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    // Submit action
  } else if (e.key === "Escape") {
    // Cancel action
  }
};
document.addEventListener("keydown", handleKeyDown);
```

**Animation System**:

```typescript
// Fade-in animation
modal.style.opacity = "0";
modalContent.style.transform = "translateY(-20px) scale(0.95)";

requestAnimationFrame(() => {
  modal.style.opacity = "1";
  modalContent.style.transform = "translateY(0) scale(1)";
});
```

**Cleanup Management**:

```typescript
export function removeModal(modal) {
  // Animate out
  modal.style.opacity = "0";

  setTimeout(() => {
    // Remove from DOM
    if (modal.parentNode) {
      modal.parentNode.removeChild(modal);
    }

    // Clean up container if empty
    if (modalContainer && modalContainer.children.length === 0) {
      modalContainer.parentNode.removeChild(modalContainer);
      modalContainer = null;
    }
  }, 200);
}
```

## Integration Patterns

### View Integration

Views commonly use both helper functions and modals:

```typescript
// In a view module
import { loadJson } from "../utils/helpers.js";
import { showModal, showInputModal } from "../utils/modalHelpers.js";

export default function createExampleView() {
  const viewElement = document.createElement("div");

  // Load data with user feedback
  const loadData = async () => {
    const data = await loadJson("./src/data/json/example.json");
    if (!data) {
      await showModal(
        "Failed to load data. Using default values.",
        "Data Loading",
        "warning"
      );
      return defaultData;
    }
    return data;
  };

  // Handle user input
  const handleUserAction = async () => {
    const userInput = await showInputModal(
      "Enter a value:",
      "default",
      "Configuration"
    );

    if (userInput) {
      await showModal(`You entered: ${userInput}`, "Input Received", "success");
    }
  };

  return viewElement;
}
```

### Handler Integration

Script handlers frequently use modals for user interaction:

```typescript
// In a handler module
import { showModal, showConfirmModal } from "../utils/modalHelpers.js";

export default {
  async onActivate() {
    const confirmed = await showConfirmModal(
      "This will modify the current page. Continue?",
      "Confirm Action"
    );

    if (confirmed) {
      try {
        // Perform action
        await performPageModification();

        await showModal(
          "Page modification completed successfully!",
          "Action Complete",
          "success"
        );
      } catch (error) {
        await showModal(
          `Failed to modify page: ${error.message}`,
          "Action Failed",
          "error"
        );
      }
    }
  },
};
```

## Utility Extensions

### Custom Helper Functions

Additional helpers can be added to the system:

```typescript
// In src/utils/helpers.ts

/**
 * Debounce function calls
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Format file size
 */
export function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

/**
 * Generate unique ID
 */
export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Sleep/delay function
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

### Modal System Extensions

Custom modal types can be added:

```typescript
// Custom loading modal
export function showLoadingModal(message = "Loading...") {
  const { modal, modalContent } = createBaseModal("", "info");

  const loadingDiv = document.createElement("div");
  loadingDiv.style.cssText = `
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--text-secondary);
  `;

  const spinner = document.createElement("div");
  spinner.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid #404040;
    border-top: 2px solid var(--accent-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  `;

  loadingDiv.appendChild(spinner);
  loadingDiv.appendChild(document.createTextNode(message));
  modalContent.appendChild(loadingDiv);

  return {
    close: () => removeModal(modal),
    updateMessage: (newMessage) => {
      loadingDiv.lastChild.textContent = newMessage;
    },
  };
}

// Custom progress modal
export function showProgressModal(title = "Progress") {
  const { modal, modalContent } = createBaseModal(title, "info");

  const progressContainer = document.createElement("div");
  const progressBar = document.createElement("div");
  const progressText = document.createElement("div");

  // ... progress bar implementation

  return {
    updateProgress: (percent, message) => {
      progressBar.style.width = `${percent}%`;
      progressText.textContent = message;
    },
    close: () => removeModal(modal),
  };
}
```

## Performance Considerations

### Memory Management

The modal system includes automatic cleanup:

```typescript
// Automatic container cleanup
if (modalContainer && modalContainer.children.length === 0) {
  if (modalContainer.parentNode) {
    modalContainer.parentNode.removeChild(modalContainer);
  }
  modalContainer = null;
}
```

### Event Listener Cleanup

Proper cleanup prevents memory leaks:

```typescript
// Event listener cleanup pattern
const handleKeyDown = (e) => {
  if (e.key === "Escape") {
    document.removeEventListener("keydown", handleKeyDown);
    closeModal();
  }
};
document.addEventListener("keydown", handleKeyDown);
```

### DOM Optimization

Modals are created and destroyed as needed:

```typescript
// Create modal only when needed
export function showModal(message, title, type) {
  return new Promise((resolve) => {
    const { modal, modalContent } = createBaseModal(title, type);

    // ... modal content creation

    const cleanup = () => {
      removeModal(modal);
      resolve();
    };
  });
}
```

## Error Handling

### Robust Error Handling

The utils system includes comprehensive error handling:

```typescript
// loadJson error handling
export async function loadJson(file) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    if (err instanceof SyntaxError) {
      console.error(`Invalid JSON in ${file}:`, err.message);
    } else if (err instanceof TypeError) {
      console.error(`Network error loading ${file}:`, err.message);
    } else {
      console.error(`Error loading ${file}:`, err.message);
    }
    return null;
  }
}
```

### User-Friendly Error Messages

Modal errors provide clear feedback:

```typescript
// Error modal with actionable information
await showModal(
  "Unable to save settings. Please check that you have sufficient storage space and try again.",
  "Save Failed",
  "error"
);
```

## Testing Utilities

### Test Helpers

Utilities for testing the utils system:

```typescript
// Test loadJson function
export async function testLoadJson() {
  console.log("Testing loadJson...");

  // Test valid JSON
  const validData = await loadJson("./src/data/json/games.json");
  console.log("Valid JSON test:", validData ? "✅ PASS" : "❌ FAIL");

  // Test invalid path
  const invalidData = await loadJson("./nonexistent.json");
  console.log(
    "Invalid path test:",
    invalidData === null ? "✅ PASS" : "❌ FAIL"
  );

  // Test network error
  const networkData = await loadJson(
    "https://nonexistent-domain.invalid/data.json"
  );
  console.log(
    "Network error test:",
    networkData === null ? "✅ PASS" : "❌ FAIL"
  );
}

// Test modal system
export async function testModals() {
  console.log("Testing modal system...");

  await showModal("This is a test info modal", "Test", "info");
  await showModal("This is a test success modal", "Test", "success");
  await showModal("This is a test warning modal", "Test", "warning");
  await showModal("This is a test error modal", "Test", "error");

  const input = await showInputModal(
    "Enter test text:",
    "default",
    "Test Input"
  );
  console.log("Input test result:", input);

  const confirmed = await showConfirmModal("Confirm test?", "Test Confirm");
  console.log("Confirm test result:", confirmed);
}
```

## Best Practices

### Helper Function Guidelines

- **Return Null on Failure**: Allow easy fallback handling
- **Use TypeScript Types**: Provide proper type annotations
- **Handle Errors Gracefully**: Log errors but don't throw unless necessary
- **Keep Functions Pure**: Avoid side effects when possible
- **Document Parameters**: Use JSDoc comments for clarity

### Modal System Guidelines

- **Use Appropriate Types**: Choose the correct modal type for the context
- **Provide Clear Messages**: Write user-friendly, actionable messages
- **Handle Cancellation**: Always handle null/false returns properly
- **Focus Management**: Ensure proper keyboard focus behavior
- **Accessibility**: Include ARIA labels and keyboard navigation

### Performance Guidelines

- **Lazy Loading**: Load utilities only when needed
- **Event Cleanup**: Remove event listeners to prevent memory leaks
- **DOM Cleanup**: Remove modal elements after use
- **Debounce User Input**: Prevent excessive API calls or updates

## Future Enhancements

Potential improvements to the utils system:

- **Toast Notifications**: Non-blocking notification system
- **Drag and Drop Utilities**: File and element drag-and-drop helpers
- **Validation Helpers**: Form validation and data validation utilities
- **Storage Utilities**: Enhanced localStorage/sessionStorage helpers
- **Date/Time Utilities**: Date formatting and manipulation functions
- **URL Utilities**: URL parsing, validation, and manipulation helpers
- **Crypto Utilities**: Hashing and encoding/decoding functions
- **Animation Utilities**: Reusable animation and transition helpers
