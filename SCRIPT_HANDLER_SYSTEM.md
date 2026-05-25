# Script Handler System Documentation

The script handler system in Ocot Client provides a modular architecture for executing JavaScript utilities, automation scripts, and privacy tools. Each handler is a self-contained module that can be loaded dynamically and executed on-demand.

## Architecture Overview

The handler system is built around a standardized interface that supports both stateless (one-time execution) and stateful (toggle-based) scripts. Key components include:

- **Handler Modules**: Individual TypeScript files in `src/handlers/`
- **Data Layer**: JSON metadata with TypeScript fallbacks
- **Dynamic Loading**: Handlers are imported on-demand via dynamic imports
- **State Management**: Support for persistent script states
- **Category Organization**: Scripts organized by functionality (utility, privacy, gaming, protection)

## Handler Interface

All handlers implement a standardized interface defined in TypeScript:

```typescript
interface Handler {
  id: string;
  title: string;
  description: string;
  category: "utility" | "privacy" | "gaming" | "protection";
  stateful?: boolean;
  isEnabled?(): boolean;
  onEnable?(): Promise<void>;
  onDisable?(): Promise<void>;
  onActivate(): Promise<void>;
}
```

## Handler Types

### 1. Stateless Handlers

Stateless handlers execute a single action when activated. They implement only the `onActivate()` method.

**Example: Tab Cloak Handler**

```typescript
// src/handlers/tabcloak.ts
import { showInputModal } from "../utils/modalHelpers.js";

export default {
  async onActivate() {
    const url = await showInputModal(
      "Enter the URL you want to cloak in a new tab:",
      "https://example.com",
      "Tab Cloak - Enter URL",
      "url"
    );

    if (!url) return; // User cancelled

    let win = window.open();
    let iframe = win.document.createElement("iframe");
    iframe.style =
      "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";

    if (url.includes("https://") || url.includes("http://")) {
      iframe.src = url;
    } else {
      iframe.src = "https://" + url;
    }

    win.document.body.appendChild(iframe);
  },
};
```

### 2. Stateful Handlers

Stateful handlers maintain persistent state and can be toggled on/off. They implement state management methods along with the activation method.

**Example: Anti Force Reload Handler**

```typescript
// src/handlers/antiforcereload.ts
import { showModal } from "../utils/modalHelpers.js";

export default {
  isEnabled() {
    return window.antiForceReloadEnabled || false;
  },

  async onEnable() {
    window.onbeforeunload = () => {
      return "no";
    };
    window.antiForceReloadEnabled = true;

    await showModal(
      "Page reload protection is now ACTIVE.",
      "Anti Force Reload Enabled",
      "success"
    );
  },

  async onDisable() {
    window.onbeforeunload = null;
    window.antiForceReloadEnabled = false;

    await showModal(
      "Page reload protection is now OFF.",
      "Anti Force Reload Disabled",
      "success"
    );
  },

  async onActivate() {
    if (this.isEnabled()) {
      await this.onDisable();
    } else {
      await this.onEnable();
    }
  },
};
```

## Handler Categories

### 1. Utility Scripts

**Purpose**: General productivity and web enhancement tools

**Examples**:

- **Math Tools**: Advanced mathematical calculator and computation tools
- **Page Editor**: Enable/disable contentEditable mode for page editing
- **Storage Manager**: Browser storage inspection and cleanup utilities
- **Force Select**: Remove text selection restrictions on websites
- **Quick Scroll**: Instant page navigation utilities

### 2. Privacy Scripts

**Purpose**: Privacy protection and anonymity tools

**Examples**:

- **Tab Cloak**: Open URLs in disguised browser tabs
- **Auto-Hide**: Automatically hide proxy client when switching tabs
- **Auto-Remove**: Automatically remove proxy client when switching tabs
- **Emergency Tab Switcher**: Quick escape to safe browsing tab

### 3. Protection Scripts

**Purpose**: Browser protection and security enhancement

**Examples**:

- **Anti Force Reload**: Prevent unwanted page refreshes and navigation
- **About:blank Injector**: Safe script execution environment

### 4. Gaming/Cheat Scripts

**Purpose**: Game enhancement and educational bypass tools

**Examples**:

- **Blooket Cheats**: Educational game enhancement tools
- **Fake Crash**: Browser crash simulation for privacy

## Data Layer Integration

### JSON Metadata Structure

Scripts are defined in `src/data/json/scripts.json`:

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

**Fields**:

- `id`: Unique identifier for the script
- `title`: Display name in the UI
- `description`: User-friendly explanation of functionality
- `category`: Organizational category for filtering
- `handler`: Filename of the handler module (without .ts extension)
- `stateful`: Optional boolean indicating if the script maintains state

### TypeScript Fallback

For bookmarklet compatibility, a TypeScript fallback is maintained in `src/data/javascript/scripts.ts`:

```typescript
export const scriptsData = [
  {
    id: "tabcloak",
    title: "Tab Cloak",
    description: "Open a URL in a cloaked tab",
    category: "privacy",
    handler: "tabcloak",
  },
  // ... other scripts
];
```

## Dynamic Handler Loading

Handlers are loaded on-demand using dynamic imports to optimize performance:

```typescript
// In src/views/scripts.ts
async function executeScript(scriptId) {
  try {
    // Dynamic import of handler module
    const handlerModule = await import(`../handlers/${scriptId}.js`);
    const handler = handlerModule.default;

    // Execute the handler
    if (handler && typeof handler.onActivate === "function") {
      await handler.onActivate();
    }
  } catch (error) {
    console.error(`Failed to load handler: ${scriptId}`, error);
    // Show error to user
  }
}
```

## State Management

### Stateful Handler Lifecycle

1. **State Check**: `isEnabled()` determines current state
2. **State Toggle**: `onActivate()` toggles between enabled/disabled
3. **Enable Action**: `onEnable()` activates functionality
4. **Disable Action**: `onDisable()` deactivates functionality

### State Persistence

States are typically stored in the global `window` object or localStorage:

```typescript
// Window-based state (session-only)
isEnabled() {
  return window.handlerStateFlag || false;
}

// localStorage-based state (persistent)
isEnabled() {
  return localStorage.getItem('handler-state') === 'true';
}
```

### Visual State Indicators

The scripts view provides visual feedback for stateful handlers:

```typescript
// In scripts view rendering
if (script.stateful && handler.isEnabled && handler.isEnabled()) {
  button.classList.add("script-enabled");
  button.textContent = `✅ ${script.title} (ON)`;
} else if (script.stateful) {
  button.textContent = `${script.title} (OFF)`;
}
```

## Handler Implementation Patterns

### 1. Modal Integration

Many handlers use the modal system for user interaction:

```typescript
import {
  showModal,
  showInputModal,
  showConfirmModal,
} from "../utils/modalHelpers.js";

export default {
  async onActivate() {
    const userInput = await showInputModal(
      "Enter configuration:",
      "default value",
      "Handler Configuration"
    );

    if (userInput) {
      // Process input
      await showModal("Success!", "Handler Complete", "success");
    }
  },
};
```

### 2. DOM Manipulation

Handlers often manipulate the current page:

```typescript
export default {
  async onActivate() {
    // Safe DOM modification
    const elements = document.querySelectorAll("target-selector");
    elements.forEach((element) => {
      // Apply modifications
      element.style.property = "value";
    });
  },
};
```

### 3. Event Listener Management

For stateful handlers that add event listeners:

```typescript
export default {
  async onEnable() {
    this.keyHandler = (e) => {
      if (e.key === "z") {
        // Handle key press
      }
    };
    document.addEventListener("keydown", this.keyHandler);
  },

  async onDisable() {
    if (this.keyHandler) {
      document.removeEventListener("keydown", this.keyHandler);
      this.keyHandler = null;
    }
  },

  async onActivate() {
    if (this.isEnabled()) {
      await this.onDisable();
    } else {
      await this.onEnable();
    }
  },
};
```

### 4. Script Injection

For handlers that inject external scripts:

```typescript
export default {
  async onActivate() {
    const script = document.createElement("script");
    script.src = "https://example.com/external-script.js";
    script.onload = () => {
      console.log("Script loaded successfully");
    };
    script.onerror = () => {
      console.error("Failed to load script");
    };
    document.head.appendChild(script);
  },
};
```

## Error Handling

### Handler-Level Error Handling

```typescript
export default {
  async onActivate() {
    try {
      // Handler logic
      await performOperation();
    } catch (error) {
      console.error("Handler error:", error);
      await showModal(
        "An error occurred while executing the script.",
        "Script Error",
        "error"
      );
    }
  },
};
```

### System-Level Error Handling

The scripts view handles loading and execution errors:

```typescript
async function executeScript(scriptId) {
  try {
    const handlerModule = await import(`../handlers/${scriptId}.js`);
    const handler = handlerModule.default;

    if (handler && typeof handler.onActivate === "function") {
      await handler.onActivate();
    } else {
      throw new Error("Invalid handler structure");
    }
  } catch (error) {
    console.error(`Handler execution failed: ${scriptId}`, error);

    await showModal(
      `Failed to execute script: ${error.message}`,
      "Script Error",
      "error"
    );
  }
}
```

## Security Considerations

### 1. Input Validation

Always validate user input in handlers:

```typescript
export default {
  async onActivate() {
    const url = await showInputModal("Enter URL:");

    if (!url || typeof url !== "string") {
      return; // Invalid input
    }

    // Basic URL validation
    try {
      new URL(url.startsWith("http") ? url : `https://${url}`);
    } catch {
      await showModal("Invalid URL format", "Error", "error");
      return;
    }

    // Proceed with validated URL
  },
};
```

### 2. Safe DOM Queries

Use safe DOM querying to prevent errors:

```typescript
export default {
  async onActivate() {
    const elements = document.querySelectorAll(".target-class");

    if (elements.length === 0) {
      await showModal("No target elements found", "Warning", "warning");
      return;
    }

    elements.forEach((element) => {
      // Safe to proceed
    });
  },
};
```

### 3. External Script Safety

When loading external scripts, implement proper error handling:

```typescript
export default {
  async onActivate() {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://trusted-domain.com/script.js";

      script.onload = () => {
        resolve();
      };

      script.onerror = () => {
        reject(new Error("Failed to load external script"));
      };

      // Set timeout for loading
      setTimeout(() => {
        reject(new Error("Script loading timeout"));
      }, 10000);

      document.head.appendChild(script);
    });
  },
};
```

## Best Practices

### 1. Handler Structure

- **Single Responsibility**: Each handler should focus on one specific functionality
- **Clear Naming**: Use descriptive handler IDs and filenames
- **Consistent Interface**: Always implement the required interface methods
- **Error Handling**: Include proper error handling and user feedback

### 2. State Management

- **Clear State Logic**: Make state determination logic obvious
- **State Persistence**: Choose appropriate persistence method (session vs localStorage)
- **Visual Feedback**: Provide clear indicators for stateful handlers
- **State Cleanup**: Properly clean up resources when disabling

### 3. User Experience

- **Immediate Feedback**: Provide instant visual feedback for actions
- **Clear Messages**: Use descriptive success/error messages
- **Input Validation**: Validate user input before processing
- **Graceful Degradation**: Handle missing dependencies gracefully

### 4. Performance

- **Lazy Loading**: Handlers are loaded only when needed
- **Resource Cleanup**: Remove event listeners and clear resources
- **Efficient DOM Queries**: Cache DOM elements when appropriate
- **Async Operations**: Use async/await for better performance

## Creating New Handlers

### 1. Handler File Structure

Create a new handler in `src/handlers/`:

```typescript
// src/handlers/newhandler.ts
import { showModal } from "../utils/modalHelpers.js";

export default {
  // For stateful handlers
  isEnabled() {
    return window.newHandlerEnabled || false;
  },

  async onEnable() {
    // Enable functionality
    window.newHandlerEnabled = true;
    await showModal("Handler enabled", "Success", "success");
  },

  async onDisable() {
    // Disable functionality
    window.newHandlerEnabled = false;
    await showModal("Handler disabled", "Success", "success");
  },

  async onActivate() {
    // For stateful handlers - toggle state
    if (this.isEnabled()) {
      await this.onDisable();
    } else {
      await this.onEnable();
    }

    // For stateless handlers - perform action directly
    // await performAction();
  },
};
```

### 2. Add to Data Layer

Add entry to `src/data/json/scripts.json`:

```json
{
  "id": "newhandler",
  "title": "New Handler",
  "description": "Description of what the handler does",
  "category": "utility",
  "handler": "newhandler",
  "stateful": true
}
```

Add entry to `src/data/javascript/scripts.ts`:

```typescript
{
  id: "newhandler",
  title: "New Handler",
  description: "Description of what the handler does",
  category: "utility",
  handler: "newhandler",
  stateful: true
}
```

### 3. Testing New Handlers

- Test both enabled and disabled states (for stateful handlers)
- Verify error handling with invalid inputs
- Test integration with modal system
- Ensure proper cleanup of resources
- Test dynamic loading and execution

## Common Handler Examples

### Simple Utility Handler

```typescript
// Quick action handler
export default {
  async onActivate() {
    window.scrollTo(0, document.body.scrollHeight);

    await showModal("Scrolled to bottom of page", "Quick Scroll", "success");
  },
};
```

### Page Manipulation Handler

```typescript
// DOM modification handler
export default {
  isEnabled() {
    return document.designMode === "on";
  },

  async onEnable() {
    document.designMode = "on";
    document.body.style.border = "2px solid red";

    await showModal(
      "Page editing enabled. Click anywhere to edit text.",
      "Page Editor Enabled",
      "success"
    );
  },

  async onDisable() {
    document.designMode = "off";
    document.body.style.border = "";

    await showModal(
      "Page editing disabled.",
      "Page Editor Disabled",
      "success"
    );
  },

  async onActivate() {
    if (this.isEnabled()) {
      await this.onDisable();
    } else {
      await this.onEnable();
    }
  },
};
```

### Privacy Protection Handler

```typescript
// Privacy-focused handler with event listeners
export default {
  isEnabled() {
    return window.privacyProtectionActive || false;
  },

  async onEnable() {
    this.visibilityHandler = () => {
      if (document.hidden) {
        // Hide sensitive content when tab becomes inactive
        document.body.style.display = "none";
      } else {
        document.body.style.display = "";
      }
    };

    document.addEventListener("visibilitychange", this.visibilityHandler);
    window.privacyProtectionActive = true;

    await showModal(
      "Privacy protection activated. Content will hide when switching tabs.",
      "Privacy Protection ON",
      "success"
    );
  },

  async onDisable() {
    if (this.visibilityHandler) {
      document.removeEventListener("visibilitychange", this.visibilityHandler);
      this.visibilityHandler = null;
    }

    document.body.style.display = "";
    window.privacyProtectionActive = false;

    await showModal(
      "Privacy protection deactivated.",
      "Privacy Protection OFF",
      "success"
    );
  },

  async onActivate() {
    if (this.isEnabled()) {
      await this.onDisable();
    } else {
      await this.onEnable();
    }
  },
};
```

## Future Enhancements

Potential improvements to the handler system:

- **Handler Dependencies**: System for handlers that depend on other handlers
- **Handler Configuration**: UI for configuring handler parameters
- **Handler Scheduling**: Time-based or event-based handler execution
- **Handler Permissions**: Permission system for sensitive operations
- **Handler Marketplace**: Community-contributed handler sharing
- **Handler Analytics**: Usage tracking and performance monitoring
