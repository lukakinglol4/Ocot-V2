// @ts-nocheck
// Sidebar UI Module for Ocot Client
// Handles all sidebar-related functionality and styling

export class ProxySidebar {
  constructor() {
    this.sidebar = null;
    this.buttons = {};
    this.buttonContainer = null;
    this.isMinimized = false;
    this.minimizeButton = null;
  }

  // Create the main sidebar element
  createSidebar() {
    this.sidebar = document.createElement("div");
    this.sidebar.className = "proxy-sidebar";
    this.sidebar.style.cssText = `
      width: 280px;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 0;
      transition: width 0.3s ease;
      animation: slideInLeft 0.4s ease-out;
    `;

    // Create header
    const header = this.createHeader();

    // Create button container
    this.buttonContainer = this.createButtonContainer();

    // Assemble sidebar
    this.sidebar.appendChild(header);
    this.sidebar.appendChild(this.buttonContainer);

    // Apply minimized state if set
    this.applyMinimizedState();

    return this.sidebar;
  }

  // Create sidebar header with title and subtitle
  createHeader() {
    const headerContainer = document.createElement("div");
    headerContainer.style.cssText = `
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #404040;
    `;

    const header = document.createElement("div");
    header.className = "sidebar-header";
    header.style.cursor = "pointer";
    header.title = "Click to return to welcome screen";
    header.innerHTML = `
      <h1 class="sidebar-title">Ocot Client</h1>
      <p class="sidebar-subtitle">by ASC2563 | v2 Enhanced ✨</p>
    `;

    // Store reference for external event binding
    this.headerElement = header;

    // Create minimize button
    this.minimizeButton = document.createElement("button");
    this.minimizeButton.className = "sidebar-minimize-btn";
    this.minimizeButton.innerHTML = "◀";
    this.minimizeButton.title = "Minimize sidebar";
    this.minimizeButton.style.cssText = `
      background: transparent;
      border: none;
      color: #00bfff;
      cursor: pointer;
      font-size: 1rem;
      padding: 8px 16px;
      transition: all 0.2s ease;
      width: 100%;
      text-align: center;
    `;

    // Add hover effect
    this.minimizeButton.addEventListener("mouseenter", () => {
      this.minimizeButton.style.background = "rgba(0, 191, 255, 0.1)";
      this.minimizeButton.style.transform = "scale(1.05)";
    });
    this.minimizeButton.addEventListener("mouseleave", () => {
      this.minimizeButton.style.background = "transparent";
      this.minimizeButton.style.transform = "scale(1)";
    });

    // Add click handler for minimize toggle
    this.minimizeButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent header click event
      this.toggleMinimize();
    });

    // Load minimized state from localStorage
    const savedState = localStorage.getItem("ocot-sidebar-minimized");
    if (savedState === "true") {
      this.isMinimized = true;
    }

    headerContainer.appendChild(header);
    headerContainer.appendChild(this.minimizeButton);

    return headerContainer;
  }

  // Create scrollable button container
  createButtonContainer() {
    const container = document.createElement("div");
    container.style.cssText = `
      flex: 1;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
    `;
    return container;
  }

  // Button factory function
  createButton(label, icon = "", type = "normal") {
    const btn = document.createElement("button");
    btn.className = `sidebar-btn`;
    btn.setAttribute("data-label", label);
    btn.setAttribute("data-icon", icon);
    btn.innerHTML = icon ? `<span class="btn-icon">${icon}</span><span class="btn-label"> ${label}</span>` : label;
    return btn;
  }

  // Add all navigation buttons
  addNavigationButtons() {
    // Get current tab order from localStorage or use default
    const tabOrder = this._getTabOrder();
    const tabMetadata = this._getTabMetadata();

    // Create navigation buttons in custom order
    tabOrder.forEach((key, index) => {
      const tabData = tabMetadata[key];
      if (tabData) {
        const btn = this.createButton(tabData.label, tabData.icon);
        btn.style.animation = `fadeInLeft 0.4s ease-out ${0.05 + index * 0.04}s both`;
        this.buttons[key] = btn;
        this.buttonContainer.appendChild(btn);
      }
    });
  }

  // Get tab order from localStorage or return default
  _getTabOrder() {
    const defaultOrder = [
      "proxyButton",
      "gamesButton",
      "bookmarkletsButton",
      "scriptsButton",
      "notesButton",
      "calculatorButton",
      "consoleButton",
      "cloakingButton",
      "historyFloodButton",
      "corsProxyButton",
      "pocketBrowserButton",
      "settingsButton",
    ];

    try {
      const saved = localStorage.getItem("ocot-tab-order");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Validate that we have all required tabs
        if (Array.isArray(parsed) && parsed.length === defaultOrder.length) {
          const hasAllTabs = defaultOrder.every((tab) => parsed.includes(tab));
          if (hasAllTabs) {
            return parsed;
          }
        }
      }
    } catch (e) {
      console.warn("Failed to load tab order from localStorage:", e);
    }
    return defaultOrder;
  }

  // Get tab metadata
  _getTabMetadata() {
    return {
      proxyButton: { label: "Proxy", icon: "🌐" },
      gamesButton: { label: "Games List", icon: "🎮" },
      bookmarkletsButton: { label: "Bookmarklets", icon: "🔖" },
      scriptsButton: { label: "Scripts", icon: "📜" },
      notesButton: { label: "Notes", icon: "📝" },
      calculatorButton: { label: "Calculator", icon: "🧮" },
      consoleButton: { label: "Console", icon: "💻" },
      cloakingButton: { label: "Cloaking", icon: "🎭" },
      historyFloodButton: { label: "History Flood", icon: "🌊" },
      corsProxyButton: { label: "CORS Proxy", icon: "🔄" },
      pocketBrowserButton: { label: "Pocket Browser", icon: "🔍" },
      settingsButton: { label: "Settings", icon: "⚙️" },
    };
  }

  // Method to refresh button order (for when settings change)
  refreshButtonOrder() {
    // Clear existing navigation buttons
    const buttonsToRemove = [];
    Object.keys(this.buttons).forEach((key) => {
      if (this.buttons[key] && this.buttons[key].parentNode) {
        this.buttons[key].parentNode.removeChild(this.buttons[key]);
      }
      buttonsToRemove.push(key);
    });

    // Remove from buttons object
    buttonsToRemove.forEach((key) => {
      delete this.buttons[key];
    });

    // Re-add navigation buttons with new order
    const tabOrder = this._getTabOrder();
    const tabMetadata = this._getTabMetadata();

    tabOrder.forEach((key, index) => {
      const tabData = tabMetadata[key];
      if (tabData) {
        const btn = this.createButton(tabData.label, tabData.icon);
        btn.style.animation = `fadeInLeft 0.4s ease-out ${0.05 + index * 0.04}s both`;
        this.buttons[key] = btn;
        this.buttonContainer.appendChild(btn);
      }
    });
  }

  // Get button references for event listeners
  getButtons() {
    return this.buttons;
  }

  // Get header element for external event binding
  getHeader() {
    return this.headerElement;
  }

  // Set active button
  setActiveButton(buttonKey) {
    console.log("✅ setActiveButton called with:", buttonKey);

    // Remove active class from all buttons
    Object.entries(this.buttons).forEach(([key, btn]) => {
      btn.classList.remove("active");
    });

    // Add active class to selected button (if it exists and is not null)
    if (buttonKey && this.buttons[buttonKey]) {
      console.log("✅ Adding active to:", buttonKey);
      this.buttons[buttonKey].classList.add("active");
    }
  }

  // Add custom button
  addCustomButton(key, label, icon = "", type = "normal") {
    const button = this.createButton(label, icon, type);
    this.buttons[key] = button;
    this.buttonContainer.appendChild(button);
    return button;
  }

  // Remove button
  removeButton(key) {
    if (this.buttons[key]) {
      this.buttons[key].remove();
      delete this.buttons[key];
    }
  }

  // Toggle minimize state
  toggleMinimize() {
    this.isMinimized = !this.isMinimized;
    
    // Save state to localStorage
    localStorage.setItem("ocot-sidebar-minimized", this.isMinimized.toString());

    if (this.isMinimized) {
      // Minimized state
      this.sidebar.style.width = "70px";
      this.sidebar.classList.add("minimized");
      this.minimizeButton.innerHTML = "▶";
      this.minimizeButton.title = "Expand sidebar";
    } else {
      // Expanded state
      this.sidebar.style.width = "280px";
      this.sidebar.classList.remove("minimized");
      this.minimizeButton.innerHTML = "◀";
      this.minimizeButton.title = "Minimize sidebar";
    }
  }

  // Apply minimized state on initial load
  applyMinimizedState() {
    if (this.isMinimized) {
      this.sidebar.style.width = "70px";
      this.sidebar.classList.add("minimized");
      this.minimizeButton.innerHTML = "▶";
      this.minimizeButton.title = "Expand sidebar";
    }
  }

  // Inject sidebar-specific CSS
  static injectCSS() {
    const style = document.createElement("style");
    style.textContent = `
      /* Sidebar Container */
      .proxy-sidebar {
        background: #292d36;
        border-right: 2px solid rgba(0, 122, 204, 0.2);
        box-shadow: 2px 0 12px rgba(0, 0, 0, 0.3);
        transition: width 0.3s ease;
      }

      /* Minimized Sidebar State */
      .proxy-sidebar.minimized .sidebar-title {
        font-size: 0.9rem;
        margin-bottom: 0;
      }

      .proxy-sidebar.minimized .sidebar-subtitle {
        display: none;
      }

      .proxy-sidebar.minimized .btn-label {
        display: none;
      }

      .proxy-sidebar.minimized .sidebar-btn {
        padding: 12px 8px;
        justify-content: center;
      }

      .proxy-sidebar.minimized .btn-icon {
        font-size: 1.2rem;
      }

      /* Sidebar Header */
      .sidebar-header {
        padding: 20px 16px;
        border-bottom: 1px solid #404040;
        text-align: center;
        background: linear-gradient(135deg, #23272f, #2a2e37);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .sidebar-header:hover {
        background: linear-gradient(135deg, #2a2e37, #323641);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 191, 255, 0.15);
      }

      .sidebar-title {
        color: var(--accent-color);
        font-size: 1.4rem;
        font-weight: 700;
        margin: 0 0 4px 0;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      }

      .sidebar-subtitle {
        color: #7d8590;
        font-size: 0.8rem;
        margin: 0;
      }

      /* Sidebar Button Styling */
      .sidebar-btn {
        width: 100%;
        padding: 12px 16px;
        margin-bottom: 4px;
        background: transparent;
        border: 2px solid transparent;
        border-radius: 8px;
        color: #d4d4d4;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 500;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }

      .sidebar-btn::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, transparent, rgba(0, 191, 255, 0.15), transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
      }

      .sidebar-btn:hover::before {
        opacity: 1;
        animation: shimmer 0.6s ease-in-out;
      }

      .sidebar-btn:hover {
        background: rgba(0, 122, 204, 0.12);
        border-color: rgba(0, 122, 204, 0.4);
        color: var(--accent-color);
        transform: translateX(4px);
      }

      .sidebar-btn.active {
        background: linear-gradient(135deg, rgba(0, 122, 204, 0.25), rgba(0, 191, 255, 0.15));
        border-color: var(--accent-color);
        color: #fff;
        box-shadow: 0 2px 12px rgba(0, 122, 204, 0.4), inset 0 1px 2px rgba(0, 191, 255, 0.2);
        font-weight: 600;
      }

      .sidebar-btn.active::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        height: 100%;
        background: var(--accent-color);
        border-radius: 0 2px 2px 0;
        animation: slideInRight 0.3s ease-out;
      }

      .sidebar-btn.hide-btn {
        background: rgba(220, 52, 69, 0.1);
        color: #ff6b7a;
        border-color: rgba(220, 52, 69, 0.3);
        margin-top: auto;
      }

      .sidebar-btn.hide-btn:hover {
        background: rgba(220, 52, 69, 0.2);
        border-color: #dc3545;
        transform: translateX(0);
      }

      .sidebar-btn.remove-btn {
        background: rgba(111, 34, 50, 0.1);
        color: #ff6b7a;
        border-color: rgba(111, 34, 50, 0.3);
        margin-top: 8px;
      }

      .sidebar-btn.remove-btn:hover {
        background: rgba(111, 34, 50, 0.2);
        border-color: #6f2232;
        transform: translateX(0);
      }

      /* Sidebar Scrollbar Styling */
      .proxy-sidebar ::-webkit-scrollbar {
        width: 8px;
      }

      .proxy-sidebar ::-webkit-scrollbar-track {
        background: #23272f;
        border-radius: 4px;
      }

      .proxy-sidebar ::-webkit-scrollbar-thumb {
        background: #404040;
        border-radius: 4px;
        transition: background 0.2s;
      }

      .proxy-sidebar ::-webkit-scrollbar-thumb:hover {
        background: var(--accent-color);
      }

      /* Animation Keyframes */
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(-3px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-12px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes shimmer {
        0% {
          background-position: -1000px 0;
        }
        100% {
          background-position: 1000px 0;
        }
      }
    `;

    document.head.appendChild(style);
  }
}

// Export default for easy importing
export default ProxySidebar;
