// Centralized CSS for all views
export function injectAppCSS() {
  if (document.getElementById("app-shared-style")) return;
  const style = document.createElement("style");
  style.id = "app-shared-style";
  style.textContent = `
    /* CSS Variables for theming */
    :root {
      --bg-primary: #23272f;
      --bg-secondary: #292d36;
      --accent-color: #007acc;
      --accent-hover: #005a9e;
      --accent-color-rgb: 0, 122, 204;
      --text-primary: #fff;
      --text-secondary: #aaa;
      --border-color: #404040;
    }

    /* --- Shared Card/Grid Styles --- */
    .card-grid-view {
      padding: 20px;
      background: var(--bg-primary);
      border-radius: 10px;
      min-height: 400px;
      max-height: calc(80vh - 40px);
      overflow-y: auto;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,0.15);
      animation: fadeInUp 0.4s ease-out;
    }
    .card-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-top: 10px;
    }
    .card-item {
      background: var(--bg-secondary);
      border-radius: 8px;
      padding: 18px 14px;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      user-select: none;
      border: 1px solid rgba(0, 122, 204, 0);
      animation: scaleIn 0.4s ease-out backwards;
    }
    .card-item:nth-child(1) { animation-delay: 0s; }
    .card-item:nth-child(2) { animation-delay: 0.05s; }
    .card-item:nth-child(3) { animation-delay: 0.1s; }
    .card-item:nth-child(4) { animation-delay: 0.15s; }
    .card-item:nth-child(5) { animation-delay: 0.2s; }
    .card-item:nth-child(6) { animation-delay: 0.25s; }
    .card-item:nth-child(n+7) { animation-delay: 0.3s; }
    
    .card-item:hover {
      box-shadow: 0 4px 20px 0 rgba(0, 122, 204, 0.25), inset 0 1px 2px rgba(0, 191, 255, 0.1);
      transform: translateY(-4px) scale(1.03);
      background: linear-gradient(135deg, #2d323e, #323a4a);
      border-color: rgba(0, 122, 204, 0.3);
    }
    .card-item .card-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #00bfff;
      margin-bottom: 4px;
    }
    .card-item .card-desc {
      font-size: 0.95rem;
      color: #aaa;
      margin-bottom: 2px;
    }
    
    /* --- Games View Specific --- */
    .games-view {
      padding: 20px;
      background: #23272f;
      border-radius: 10px;
      min-height: 400px;
      max-height: calc(80vh - 40px);
      overflow-y: auto;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,0.15);
      animation: fadeInUp 0.4s ease-out;
    }
    
    /* Custom Scrollbar Styling */
    .card-grid-view::-webkit-scrollbar,
    .games-view::-webkit-scrollbar {
      width: 8px;
    }
    
    .card-grid-view::-webkit-scrollbar-track,
    .games-view::-webkit-scrollbar-track {
      background: #1e1e1e;
      border-radius: 4px;
    }
    
    .card-grid-view::-webkit-scrollbar-thumb,
    .games-view::-webkit-scrollbar-thumb {
      background: #404040;
      border-radius: 4px;
      transition: background 0.2s ease;
    }
    
    .card-grid-view::-webkit-scrollbar-thumb:hover,
    .games-view::-webkit-scrollbar-thumb:hover {
      background: var(--accent-color);
    }

    .games-tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    .games-tab {
      padding: 10px 24px;
      background: var(--bg-secondary);
      border: 2px solid transparent;
      border-radius: 6px;
      color: var(--text-primary);
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      outline: none;
      position: relative;
      overflow: hidden;
      font-weight: 500;
    }

    .games-tab::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      opacity: 0;
      animation: shimmer 0.6s ease-in-out;
    }

    .games-tab:hover::before {
      opacity: 1;
    }

    .games-tab.active, .games-tab:hover {
      background: linear-gradient(135deg, var(--accent-color), rgba(0, 191, 255, 0.8));
      border-color: rgba(0, 191, 255, 0.4);
      color: var(--text-primary);
      box-shadow: 0 2px 8px rgba(0, 122, 204, 0.3);
      transform: translateY(-2px);
    }

    .games-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-top: 10px;
    }
    .game-item {
      background: var(--bg-secondary);
      border-radius: 8px;
      padding: 18px 14px;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid rgba(0, 122, 204, 0);
      animation: scaleIn 0.4s ease-out backwards;
    }
    .game-item:nth-child(1) { animation-delay: 0s; }
    .game-item:nth-child(2) { animation-delay: 0.05s; }
    .game-item:nth-child(3) { animation-delay: 0.1s; }
    .game-item:nth-child(4) { animation-delay: 0.15s; }
    .game-item:nth-child(5) { animation-delay: 0.2s; }
    .game-item:nth-child(n+6) { animation-delay: 0.25s; }

    .game-item:hover {
      box-shadow: 0 4px 20px 0 rgba(0, 122, 204, 0.25);
      transform: translateY(-4px) scale(1.03);
      border-color: rgba(0, 122, 204, 0.3);
    }
    .game-item a {
      font-size: 1.1rem;
      font-weight: 600;
      color: #00bfff;
      margin-bottom: 4px;
      text-decoration: none;
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
      max-width: 100%;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: color 0.2s ease;
    }
    .game-item a:hover {
      color: #fff;
      text-shadow: 0 0 8px rgba(0, 191, 255, 0.3);
    }
    .game-item .game-type {
      font-size: 0.85rem;
      color: #aaa;
      margin-top: 2px;
      text-transform: capitalize;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    /* Animation Keyframes */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(16px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
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
