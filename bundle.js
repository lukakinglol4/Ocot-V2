"use strict";(()=>{var To=Object.create;var ht=Object.defineProperty;var Lo=Object.getOwnPropertyDescriptor;var zo=Object.getOwnPropertyNames;var Mo=Object.getPrototypeOf,Po=Object.prototype.hasOwnProperty;var xt=t=>e=>{var o=t[e];if(o)return o();throw new Error("Module not found in bundle: "+e)};var Io=(t,e)=>()=>(t&&(e=t(t=0)),e);var S=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Ao=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of zo(e))!Po.call(t,n)&&n!==o&&ht(t,n,{get:()=>e[n],enumerable:!(r=Lo(e,n))||r.enumerable});return t};var H=(t,e,o)=>(o=t!=null?To(Mo(t)):{},Ao(e||!t||!t.__esModule?ht(o,"default",{value:t,enumerable:!0}):o,t));var _=S(Me=>{"use strict";Object.defineProperty(Me,"__esModule",{value:!0});Me.injectAppCSS=Oo;function Oo(){if(document.getElementById("app-shared-style"))return;let t=document.createElement("style");t.id="app-shared-style",t.textContent=`
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
      transition: box-shadow 0.2s, transform 0.2s;
      cursor: pointer;
      user-select: none;
    }
    .card-item:hover {
      box-shadow: 0 4px 16px 0 rgba(0,122,204,0.15);
      transform: translateY(-2px) scale(1.03);
      background: #2d323e;
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
    }
    
    .card-grid-view::-webkit-scrollbar-thumb:hover,
    .games-view::-webkit-scrollbar-thumb:hover {
      background: var(--accent-color);
    }
    .games-tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
    .games-tab {
      padding: 10px 24px;
      background: var(--bg-secondary);
      border: none;
      border-radius: 6px 6px 0 0;
      color: var(--text-primary);
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      outline: none;
    }
    .games-tab.active, .games-tab:hover {
      background: var(--accent-color);
      color: var(--text-primary);
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
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .game-item:hover {
      box-shadow: 0 4px 16px 0 rgba(0,122,204,0.15);
      transform: translateY(-2px) scale(1.03);
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
    }
    .game-item a:hover {
      color: #fff;
    }
    .game-item .game-type {
      font-size: 0.85rem;
      color: #aaa;
      margin-top: 2px;
      text-transform: capitalize;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
  `,document.head.appendChild(t)}});var vt=S(ce=>{"use strict";Object.defineProperty(ce,"__esModule",{value:!0});ce.ProxySidebar=void 0;var me=class{constructor(){this.sidebar=null,this.buttons={},this.buttonContainer=null,this.isMinimized=!1,this.minimizeButton=null}createSidebar(){this.sidebar=document.createElement("div"),this.sidebar.className="proxy-sidebar",this.sidebar.style.cssText=`
      width: 280px;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 0;
      transition: width 0.3s ease;
    `;let e=this.createHeader();return this.buttonContainer=this.createButtonContainer(),this.sidebar.appendChild(e),this.sidebar.appendChild(this.buttonContainer),this.applyMinimizedState(),this.sidebar}createHeader(){let e=document.createElement("div");e.style.cssText=`
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #404040;
    `;let o=document.createElement("div");return o.className="sidebar-header",o.style.cursor="pointer",o.title="Click to return to welcome screen",o.innerHTML=`
      <h1 class="sidebar-title">Ocot Client</h1>
      <p class="sidebar-subtitle">by ASC2563</p>
    `,this.headerElement=o,this.minimizeButton=document.createElement("button"),this.minimizeButton.className="sidebar-minimize-btn",this.minimizeButton.innerHTML="\u25C0",this.minimizeButton.title="Minimize sidebar",this.minimizeButton.style.cssText=`
      background: transparent;
      border: none;
      color: #00bfff;
      cursor: pointer;
      font-size: 1rem;
      padding: 8px 16px;
      transition: all 0.2s ease;
      width: 100%;
      text-align: center;
    `,this.minimizeButton.addEventListener("mouseenter",()=>{this.minimizeButton.style.background="rgba(0, 191, 255, 0.1)"}),this.minimizeButton.addEventListener("mouseleave",()=>{this.minimizeButton.style.background="transparent"}),this.minimizeButton.addEventListener("click",n=>{n.stopPropagation(),this.toggleMinimize()}),localStorage.getItem("ocot-sidebar-minimized")==="true"&&(this.isMinimized=!0),e.appendChild(o),e.appendChild(this.minimizeButton),e}createButtonContainer(){let e=document.createElement("div");return e.style.cssText=`
      flex: 1;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
    `,e}createButton(e,o="",r="normal"){let n=document.createElement("button");return n.className="sidebar-btn",n.setAttribute("data-label",e),n.setAttribute("data-icon",o),n.innerHTML=o?`<span class="btn-icon">${o}</span><span class="btn-label"> ${e}</span>`:e,n}addNavigationButtons(){let e=this._getTabOrder(),o=this._getTabMetadata();e.forEach(r=>{let n=o[r];n&&(this.buttons[r]=this.createButton(n.label,n.icon),this.buttonContainer.appendChild(this.buttons[r]))})}_getTabOrder(){let e=["proxyButton","gamesButton","bookmarkletsButton","scriptsButton","notesButton","calculatorButton","consoleButton","cloakingButton","historyFloodButton","corsProxyButton","pocketBrowserButton","settingsButton"];try{let o=localStorage.getItem("ocot-tab-order");if(o){let r=JSON.parse(o);if(Array.isArray(r)&&r.length===e.length&&e.every(a=>r.includes(a)))return r}}catch(o){console.warn("Failed to load tab order from localStorage:",o)}return e}_getTabMetadata(){return{proxyButton:{label:"Proxy",icon:"\u{1F310}"},gamesButton:{label:"Games List",icon:"\u{1F3AE}"},bookmarkletsButton:{label:"Bookmarklets",icon:"\u{1F516}"},scriptsButton:{label:"Scripts",icon:"\u{1F4DC}"},notesButton:{label:"Notes",icon:"\u{1F4DD}"},calculatorButton:{label:"Calculator",icon:"\u{1F9EE}"},consoleButton:{label:"Console",icon:"\u{1F4BB}"},cloakingButton:{label:"Cloaking",icon:"\u{1F3AD}"},historyFloodButton:{label:"History Flood",icon:"\u{1F30A}"},corsProxyButton:{label:"CORS Proxy",icon:"\u{1F504}"},pocketBrowserButton:{label:"Pocket Browser",icon:"\u{1F50D}"},settingsButton:{label:"Settings",icon:"\u2699\uFE0F"}}}refreshButtonOrder(){let e=[];Object.keys(this.buttons).forEach(n=>{this.buttons[n]&&this.buttons[n].parentNode&&this.buttons[n].parentNode.removeChild(this.buttons[n]),e.push(n)}),e.forEach(n=>{delete this.buttons[n]});let o=this._getTabOrder(),r=this._getTabMetadata();o.forEach(n=>{let a=r[n];a&&(this.buttons[n]=this.createButton(a.label,a.icon),this.buttonContainer.appendChild(this.buttons[n]))})}getButtons(){return this.buttons}getHeader(){return this.headerElement}setActiveButton(e){console.log("setActiveButton called with:",e),Object.entries(this.buttons).forEach(([o,r])=>{console.log("Removing active from:",o),r.classList.remove("active")}),e&&this.buttons[e]&&(console.log("Adding active to:",e),this.buttons[e].classList.add("active"))}addCustomButton(e,o,r="",n="normal"){let a=this.createButton(o,r,n);return this.buttons[e]=a,this.buttonContainer.appendChild(a),a}removeButton(e){this.buttons[e]&&(this.buttons[e].remove(),delete this.buttons[e])}toggleMinimize(){this.isMinimized=!this.isMinimized,localStorage.setItem("ocot-sidebar-minimized",this.isMinimized.toString()),this.isMinimized?(this.sidebar.style.width="70px",this.sidebar.classList.add("minimized"),this.minimizeButton.innerHTML="\u25B6",this.minimizeButton.title="Expand sidebar"):(this.sidebar.style.width="280px",this.sidebar.classList.remove("minimized"),this.minimizeButton.innerHTML="\u25C0",this.minimizeButton.title="Minimize sidebar")}applyMinimizedState(){this.isMinimized&&(this.sidebar.style.width="70px",this.sidebar.classList.add("minimized"),this.minimizeButton.innerHTML="\u25B6",this.minimizeButton.title="Expand sidebar")}static injectCSS(){let e=document.createElement("style");e.textContent=`
      /* Sidebar Container */
      .proxy-sidebar {
        background: #292d36;
        border-right: 1px solid #404040;
        box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
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
        transition: all 0.3s ease;
      }

      .sidebar-header:hover {
        background: linear-gradient(135deg, #2a2e37, #323641);
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(var(--accent-color-rgb, 0, 191, 255), 0.1);
      }

      .sidebar-title {
        color: var(--accent-color);
        font-size: 1.4rem;
        font-weight: 700;
        margin: 0 0 4px 0;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
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
        border: none;
        border-radius: 8px;
        color: #d4d4d4;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 500;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        position: relative;
        overflow: hidden;
      }

      .sidebar-btn:hover {
        background: rgba(var(--accent-color-rgb, 0, 122, 204), 0.1);
        color: var(--accent-color);
        transform: translateX(4px);
      }

      .sidebar-btn.active {
        background: var(--accent-color);
        color: #fff;
        box-shadow: 0 2px 8px rgba(var(--accent-color-rgb, 0, 122, 204), 0.3);
      }

      .sidebar-btn.active::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        height: 100%;
        background: var(--accent-color);
      }

      .sidebar-btn.hide-btn {
        background: #dc3545;
        color: #fff;
        margin-top: auto;
      }

      .sidebar-btn.hide-btn:hover {
        background: #c82333;
        transform: translateX(0);
      }

      .sidebar-btn.remove-btn {
        background: #6f2232;
        color: #fff;
        margin-top: 8px;
      }

      .sidebar-btn.remove-btn:hover {
        background: #5a1a28;
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
        background: #525252;
      }
    `,document.head.appendChild(e)}};ce.ProxySidebar=me;ce.default=me});var wt=S(ge=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});ge.APP_VERSION=void 0;ge.APP_VERSION="2.5.7"});var Pe=S(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.envConfig=I.ENV=void 0;I.getCurrentEnvConfig=kt;I.isDev=jo;I.isProd=Ho;I.getEnvironmentName=No;I.logEnvironmentInfo=Fo;I.ENV="prod";I.envConfig={dev:{name:"Development",useCDN:!1,useLocalJSON:!0,useTypeScriptFallback:!0,debugLogging:!0},prod:{name:"Production",useCDN:!0,useLocalJSON:!0,useTypeScriptFallback:!0,debugLogging:!1}};function kt(){return I.envConfig[I.ENV]}function jo(){return I.ENV==="dev"}function Ho(){return I.ENV==="prod"}function No(){return I.envConfig[I.ENV].name}function Fo(){let t=kt();console.log(`\u{1F3D7}\uFE0F  Proxy Client Environment: ${t.name}`),console.log(`   - CDN Loading: ${t.useCDN?"\u2705":"\u274C"}`),console.log(`   - Local JSON: ${t.useLocalJSON?"\u2705":"\u274C"}`),console.log(`   - TypeScript Fallback: ${t.useTypeScriptFallback?"\u2705":"\u274C"}`),console.log(`   - Debug Logging: ${t.debugLogging?"\u2705":"\u274C"}`)}});var re=S(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});oe.loadJson=Et;oe.getCurrentVersion=fe;oe.getLatestVersionInfo=Do;oe.compareVersions=St;oe.loadData=_o;var Ct=wt(),$o=Pe();async function Et(t){try{let e=await fetch(t);if(!e.ok)throw new Error(`Failed to load ${t}: ${e.statusText}`);return await e.json()}catch(e){return console.error(e),null}}async function fe(){if(Ct.APP_VERSION)return Ct.APP_VERSION;try{let t=await fetch("/package.json");if(t.ok)return(await t.json()).version||"2.4.7"}catch{console.warn("Could not fetch package.json, using embedded version")}return"2.4.7"}async function Do(){try{let t=await fe(),e=await fetch("https://data.jsdelivr.com/v1/package/gh/asc2563/proxy-client2.0Rewrite",{headers:{Accept:"application/json"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let o=await e.json(),r=o.tags?.[0]?.name||o.versions?.[0]||null;if(!r)return{currentVersion:t,latestVersion:null,isUpToDate:!0,cleanLatestVersion:null,cleanCurrentVersion:t.replace(/^v/,"")};let n=r.replace(/^v/,""),a=t.replace(/^v/,""),i=St(a,n)>=0;return{currentVersion:t,latestVersion:r,isUpToDate:i,cleanLatestVersion:n,cleanCurrentVersion:a}}catch(t){console.warn("Latest version check failed:",t);let e=await fe();return{currentVersion:e,latestVersion:null,isUpToDate:!0,cleanLatestVersion:null,cleanCurrentVersion:e.replace(/^v/,"")}}}function St(t,e){let o=t.split(".").map(Number),r=e.split(".").map(Number),n=Math.max(o.length,r.length);for(let a=0;a<n;a++){let i=o[a]||0,m=r[a]||0;if(i>m)return 1;if(i<m)return-1}return 0}async function _o(t,e){let o=e||`${t}List`,r=(0,$o.getCurrentEnvConfig)();if(r.debugLogging&&console.log(`\u{1F504} loadData called for: ${t} (${r.name} mode), export: ${o}`),r.useCDN)try{let i=`https://cdn.jsdelivr.net/gh/asc2563/ocot-client@${await fe()}/src/data/json/${t}.json`;r.debugLogging&&console.log(`\u{1F310} Trying CDN URL: ${i}`);let m=await fetch(i);if(m.ok){let s=await m.json();if(s&&Array.isArray(s))return r.debugLogging&&console.log(`\u2705 Loaded ${t} from CDN (${s.length} items)`),s;r.debugLogging&&console.log(`\u{1F310} CDN data invalid or empty for ${t}:`,s)}else r.debugLogging&&console.warn(`\u{1F310} CDN fetch failed with status ${m.status}: ${m.statusText}`)}catch(a){r.debugLogging&&console.warn(`\u{1F310} Failed to load ${t} from CDN:`,a instanceof Error?a.message:String(a))}if(r.useLocalJSON)try{let a=`/src/data/json/${t}.json`;r.debugLogging&&console.log(`\u{1F4C2} Trying local JSON path: ${a}`);let i=await Et(a);if(i&&Array.isArray(i))return r.debugLogging&&console.log(`\u2705 Loaded ${t} from local JSON (${i.length} items)`),i;r.debugLogging&&console.log(`\u{1F4C2} Local JSON data invalid or empty for ${t}:`,i)}catch(a){r.debugLogging&&console.warn(`\u{1F4C2} Failed to load ${t} from local JSON:`,a instanceof Error?a.message:String(a))}if(r.useTypeScriptFallback){let a=[`../data/typescript/${t}.js`,`build/data/typescript/${t}.js`,`./build/data/typescript/${t}.js`,`/build/data/typescript/${t}.js`];for(let i of a)try{r.debugLogging&&console.log(`\u{1F4E6} Trying TypeScript import: ${i}`);let m=await import(i);r.debugLogging&&console.log(`\u{1F4E6} Module imported successfully from ${i}, exports:`,Object.keys(m));let s=m[o];if(s&&Array.isArray(s))return r.debugLogging&&console.log(`\u2705 Loaded ${t} from TypeScript fallback (${s.length} items)`),s;r.debugLogging&&console.error(`\u{1F4E6} TypeScript fallback for ${t} does not export ${o} or it's not an array. Available exports:`,Object.keys(m),"Data:",s)}catch(m){r.debugLogging&&console.warn(`\u{1F4E6} Failed to load ${t} from ${i}:`,m instanceof Error?m.message:String(m));continue}}let n=[r.useCDN&&"CDN",r.useLocalJSON&&"local JSON",r.useTypeScriptFallback&&"TypeScript sources"].filter(Boolean).join(", ");return console.error(`\u274C Failed to load ${t} from all enabled methods: ${n}`),[]}});var Lt=S(Oe=>{"use strict";Object.defineProperty(Oe,"__esModule",{value:!0});Oe.default=Vo;var qo=_(),Ro=re();function Vo(){(0,qo.injectAppCSS)();let t=document.createElement("div");return t.className="card-grid-view",t.style.cssText=`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    padding: 40px 20px;
    overflow-y: auto;
    height: 100%;
  `,t.innerHTML=`
    <div style="max-width: 800px; width: 100%;">
      <!-- Welcome Header -->
      <div style="margin-bottom: 40px;">
        <div style="font-size: 4rem; margin-bottom: 16px;">\u{1F527}</div>
        <h1 style="color: #00bfff; font-size: 2.5rem; margin: 0 0 12px 0; font-weight: 700;">
          Welcome to Ocot Client
        </h1>
        <p style="color: #7d8590; font-size: 1.2rem; margin: 0 0 20px 0; line-height: 1.5;">
          by ASC2563 \u2022 Your ultimate web proxy toolkit
        </p>
        
        <!-- Version Info -->
        <div id="version-info" style="
          background: #292d36; 
          border-radius: 8px; 
          padding: 12px 16px; 
          margin-bottom: 20px; 
          border: 1px solid #404040;
          display: inline-block;
        ">
          <span style="color: #7d8590; font-size: 0.9rem;">Current Version: </span>
          <span id="current-version" style="color: #00bfff; font-weight: 600;">v1.0.0</span>
          <span style="color: #7d8590; margin: 0 8px;">\u2022</span>
          <span id="version-status" style="color: #ffc107; font-size: 0.9rem;">Checking for updates...</span>
        </div>
        
        <!-- Docs Button -->
        <button id="docs-button" style="
          background: linear-gradient(135deg, #007acc, #0066cc);
          border: none;
          border-radius: 8px;
          color: #fff;
          padding: 12px 24px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 122, 204, 0.3);
        ">
          \u{1F4D6} Documentation
        </button>
      </div>

      <!-- Feature Cards -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 40px;">
        
        <!-- Proxy Tools Card -->
        <div class="card-item" style="padding: 24px; text-align: left;">
          <div style="display: flex; align-items: center; margin-bottom: 16px;">
            <span style="font-size: 2rem; margin-right: 12px;">\u{1F310}</span>
            <h3 style="color: #00bfff; margin: 0; font-size: 1.3rem;">Proxy Tools</h3>
          </div>
          <p style="color: #d4d4d4; margin: 0 0 12px 0; line-height: 1.5;">
            Access blocked websites and bypass restrictions with our powerful proxy system.
          </p>
          <ul style="color: #7d8590; margin: 0; padding-left: 20px; font-size: 0.9rem;">
            <li>Web proxy with custom settings</li>
            <li>CORS proxy for API requests</li>
            <li>History flooding protection</li>
          </ul>
        </div>

        <!-- Games & Entertainment Card -->
        <div class="card-item" style="padding: 24px; text-align: left;">
          <div style="display: flex; align-items: center; margin-bottom: 16px;">
            <span style="font-size: 2rem; margin-right: 12px;">\u{1F3AE}</span>
            <h3 style="color: #00bfff; margin: 0; font-size: 1.3rem;">Games & Fun</h3>
          </div>
          <p style="color: #d4d4d4; margin: 0 0 12px 0; line-height: 1.5;">
            Access a curated list of unblocked games and entertainment sites.
          </p>
          <ul style="color: #7d8590; margin: 0; padding-left: 20px; font-size: 0.9rem;">
            <li>Unblocked games collection</li>
            <li>Blocked games collection</li>
            <li>cors proxy optimized games collection</li>
          </ul>
        </div>

        <!-- Developer Tools Card -->
        <div class="card-item" style="padding: 24px; text-align: left;">
          <div style="display: flex; align-items: center; margin-bottom: 16px;">
            <span style="font-size: 2rem; margin-right: 12px;">\u{1F4BB}</span>
            <h3 style="color: #00bfff; margin: 0; font-size: 1.3rem;">Developer Tools</h3>
          </div>
          <p style="color: #d4d4d4; margin: 0 0 12px 0; line-height: 1.5;">
            Built-in tools for development, testing, and productivity.
          </p>
          <ul style="color: #7d8590; margin: 0; padding-left: 20px; font-size: 0.9rem;">
            <li>JavaScript console</li>
            <li>Calculator with advanced functions</li>
            <li>Notes and bookmarklets</li>
          </ul>
        </div>

        <!-- Privacy & Security Card -->
        <div class="card-item" style="padding: 24px; text-align: left;">
          <div style="display: flex; align-items: center; margin-bottom: 16px;">
            <span style="font-size: 2rem; margin-right: 12px;">\u{1F3AD}</span>
            <h3 style="color: #00bfff; margin: 0; font-size: 1.3rem;">Privacy & Security</h3>
          </div>
          <p style="color: #d4d4d4; margin: 0 0 12px 0; line-height: 1.5;">
            Advanced privacy tools to protect your browsing and identity.
          </p>
          <ul style="color: #7d8590; margin: 0; padding-left: 20px; font-size: 0.9rem;">
            <li>Tab cloaking and disguise</li>
            <li>Pocket browser for isolation</li>
            <li>Custom scripts and automation</li>
          </ul>
        </div>

      </div>

      <!-- Quick Start Section -->
      <div style="background: #292d36; border-radius: 12px; padding: 32px; margin-bottom: 32px; border: 1px solid #404040;">
        <h2 style="color: #00bfff; margin: 0 0 20px 0; font-size: 1.5rem;">\u{1F680} Quick Start</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; text-align: left;">
          
          <div>
            <h4 style="color: #d4d4d4; margin: 0 0 8px 0; font-size: 1.1rem;">1. Choose a Tool</h4>
            <p style="color: #7d8590; margin: 0; font-size: 0.9rem;">
              Click any option in the sidebar to access different features and tools.
            </p>
          </div>
          
          <div>
            <h4 style="color: #d4d4d4; margin: 0 0 8px 0; font-size: 1.1rem;">2. Browse Safely</h4>
            <p style="color: #7d8590; margin: 0; font-size: 0.9rem;">
              Use the proxy tab to access blocked websites securely and anonymously.
            </p>
          </div>
          
          <div>
            <h4 style="color: #d4d4d4; margin: 0 0 8px 0; font-size: 1.1rem;">3. Stay Hidden</h4>
            <p style="color: #7d8590; margin: 0; font-size: 0.9rem;">
              Press \\ to hide the client or use cloaking tools for extra privacy.
            </p>
          </div>
          
        </div>
      </div>

      <!-- Footer Info -->
      <div style="color: #7d8590; font-size: 0.9rem; line-height: 1.6;">
        <p style="margin: 0;">
          Need help? Check settings and scroll down for help and support. Additionally you can check the documentation.
        </p>
      </div>
      
    </div>
  `,setTimeout(()=>{let e=t.querySelector("#docs-button");e&&(e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-2px)",e.style.boxShadow="0 6px 16px rgba(0, 122, 204, 0.4)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.boxShadow="0 4px 12px rgba(0, 122, 204, 0.3)"}),e.addEventListener("click",()=>{Yo()})),Bt()},0),t}async function Bt(){let t=document.getElementById("version-status"),e=document.getElementById("current-version");if(t)try{let o=await(0,Ro.getLatestVersionInfo)();if(!o){t.innerHTML='<span style="color: #dc3545;">\u274C Version check failed</span>';return}if(e&&(e.textContent=`v${o.currentVersion}`),!o.latestVersion){t.innerHTML='<span style="color: #ffc107;">Unable to check updates</span>';return}if(o.isUpToDate)t.innerHTML='<span style="color: #28a745;">\u2705 Up to date</span>';else{t.innerHTML=`
        <span style="color: #ffc107;">\u{1F4E6} Update available: v${o.cleanLatestVersion}</span>
        <button id="download-btn" 
           style="background: #00bfff; border: none; color: white; padding: 4px 8px; border-radius: 4px; cursor: pointer; margin-left: 8px; font-size: 0.8rem;">
          Download
        </button>
      `;let r=document.getElementById("download-btn");r&&r.addEventListener("click",()=>Uo(o.cleanLatestVersion))}}catch(o){console.warn("Version check failed:",o),t.innerHTML='<span style="color: #dc3545;">\u274C Update check failed</span>',t.style.cursor="pointer",t.title="Click to retry version check",t.addEventListener("click",()=>{t.innerHTML='<span style="color: #ffc107;">Checking for updates...</span>',t.style.cursor="default",t.title="",setTimeout(Bt,1e3)})}}function Uo(t){let e=document.createElement("div");e.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000010;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
  `;let o=document.createElement("div");o.style.cssText=`
    background: #23272f;
    border-radius: 12px;
    padding: 32px;
    max-width: 500px;
    width: 90%;
    border: 1px solid #404040;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  `,o.innerHTML=`
    <div style="text-align: center; margin-bottom: 24px;">
      <h2 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1.5rem;">\u{1F4E6} Download Ocot Client v${t}</h2>
      <p style="color: #7d8590; margin: 0; font-size: 0.9rem;">Choose your preferred download method</p>
    </div>
    
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <!-- Bookmarklet Option -->
      <button id="bookmarklet-btn" style="
        background: linear-gradient(135deg, #28a745, #20c997);
        border: none;
        border-radius: 8px;
        color: white;
        padding: 16px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        text-align: left;
        transition: transform 0.2s ease;
      ">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 1.2rem;">\u{1F516}</span>
          <div>
            <div>Get Bookmarklet</div>
            <div style="font-size: 0.8rem; font-weight: normal; opacity: 0.9;">
              Inject Ocot Client into any website
            </div>
          </div>
        </div>
      </button>
      
      <!-- GitHub Redirect Option -->
      <button id="github-btn" style="
        background: linear-gradient(135deg, #007acc, #0066cc);
        border: none;
        border-radius: 8px;
        color: white;
        padding: 16px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        text-align: left;
        transition: transform 0.2s ease;
      ">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 1.2rem;">\u{1F419}</span>
          <div>
            <div>Visit GitHub Releases</div>
            <div style="font-size: 0.8rem; font-weight: normal; opacity: 0.9;">
              Download the latest release files
            </div>
          </div>
        </div>
      </button>
      
      <!-- Copy Link Option -->
      <button id="copy-btn" style="
        background: linear-gradient(135deg, #6f42c1, #8a63d2);
        border: none;
        border-radius: 8px;
        color: white;
        padding: 16px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        text-align: left;
        transition: transform 0.2s ease;
      ">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 1.2rem;">\u{1F4CB}</span>
          <div>
            <div>Copy GitHub Link</div>
            <div style="font-size: 0.8rem; font-weight: normal; opacity: 0.9;">
              Copy the release URL to clipboard
            </div>
          </div>
        </div>
      </button>
    </div>
    
    <!-- Close Button -->
    <div style="text-align: center; margin-top: 20px;">
      <button id="close-btn" style="
        background: transparent;
        border: 1px solid #404040;
        color: #7d8590;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
      ">
        Cancel
      </button>
    </div>
  `,e.appendChild(o),e.style.opacity="0",document.body.appendChild(e),requestAnimationFrame(()=>{e.style.transition="opacity 0.3s ease",e.style.opacity="1"}),o.querySelectorAll("button[id$='-btn']:not(#close-btn)").forEach(l=>{l.addEventListener("mouseenter",()=>{l.style.transform="translateY(-2px)"}),l.addEventListener("mouseleave",()=>{l.style.transform="translateY(0)"})});let n=o.querySelector("#bookmarklet-btn"),a=o.querySelector("#github-btn"),i=o.querySelector("#copy-btn"),m=o.querySelector("#close-btn");n?.addEventListener("click",()=>{Go(t),s()}),a?.addEventListener("click",()=>{window.open("https://github.com/asc2563/proxy-client2.0Rewrite/releases/latest","_blank"),s()}),i?.addEventListener("click",()=>{Tt("https://github.com/asc2563/proxy-client2.0Rewrite/releases/latest"),Jo(),s()}),m?.addEventListener("click",s),e.addEventListener("click",l=>{l.target===e&&s()});function s(){e.style.transition="opacity 0.3s ease",e.style.opacity="0",setTimeout(()=>{e.parentNode&&document.body.removeChild(e)},300)}}function Go(t){let e=`javascript:(function() { let script = document.createElement('script'); script.src = 'https://cdn.jsdelivr.net/gh/asc2563/ocot-client@${t}/dist/bundle.js'; document.head.appendChild(script); })();`,o=document.createElement("div");o.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000011;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
  `;let r=document.createElement("div");r.style.cssText=`
    background: #23272f;
    border-radius: 12px;
    padding: 32px;
    max-width: 600px;
    width: 90%;
    border: 1px solid #404040;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    max-height: 80vh;
    overflow-y: auto;
  `,r.innerHTML=`
    <div style="text-align: center; margin-bottom: 24px;">
      <h2 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1.5rem;">\u{1F516} Ocot Client Bookmarklet</h2>
      <p style="color: #7d8590; margin: 0; font-size: 0.9rem;">Use this bookmarklet to inject Ocot Client into any website</p>
    </div>
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #d4d4d4; margin: 0 0 12px 0; font-size: 1rem;">\u{1F4CB} Bookmarklet Code:</h3>
      <div style="
        background: #1a1d23;
        border: 1px solid #404040;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 12px;
      ">
        <code id="bookmarklet-code" style="
          color: #ffc107;
          font-family: 'Courier New', monospace;
          font-size: 0.8rem;
          word-break: break-all;
          line-height: 1.4;
        ">${e}</code>
      </div>
      
      <button id="copy-bookmarklet-btn" style="
        background: #28a745;
        border: none;
        color: white;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 600;
      ">
        \u{1F4CB} Copy Bookmarklet
      </button>
    </div>
    
    <div style="background: #292d36; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
      <h3 style="color: #00bfff; margin: 0 0 12px 0; font-size: 1rem;">\u{1F4D6} How to Use:</h3>
      <ol style="color: #d4d4d4; margin: 0; padding-left: 20px; line-height: 1.6; font-size: 0.9rem;">
        <li>Copy the bookmarklet code above</li>
        <li>Create a new bookmark in your browser</li>
        <li>Paste the code as the bookmark URL</li>
        <li>Name it "Ocot Client" or similar</li>
        <li>Click the bookmark on any website to inject Ocot Client</li>
      </ol>
    </div>
    
    <div style="background: #1f2937; border-radius: 8px; padding: 16px; border-left: 4px solid #ffc107;">
      <h4 style="color: #ffc107; margin: 0 0 8px 0; font-size: 0.9rem;">\u26A0\uFE0F Important Notes:</h4>
      <ul style="color: #d4d4d4; margin: 0; padding-left: 16px; font-size: 0.8rem; line-height: 1.5;">
        <li>This bookmarklet uses version ${t} from jsDelivr CDN</li>
        <li>Some websites may block script injection</li>
        <li>Works best on sites with lenient Content Security Policy</li>
        <li>May not work on HTTPS sites if injecting from HTTP</li>
      </ul>
    </div>
    
    <div style="text-align: center; margin-top: 20px;">
      <button id="close-bookmarklet-btn" style="
        background: transparent;
        border: 1px solid #404040;
        color: #7d8590;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
      ">
        Close
      </button>
    </div>
  `,o.appendChild(r),o.style.opacity="0",document.body.appendChild(o),requestAnimationFrame(()=>{o.style.transition="opacity 0.3s ease",o.style.opacity="1"});let n=r.querySelector("#copy-bookmarklet-btn");n?.addEventListener("click",()=>{Tt(e),n.innerHTML="\u2705 Copied!",n.style.background="#28a745",setTimeout(()=>{n.innerHTML="\u{1F4CB} Copy Bookmarklet",n.style.background="#28a745"},2e3)}),r.querySelector("#close-bookmarklet-btn")?.addEventListener("click",i),o.addEventListener("click",m=>{m.target===o&&i()});function i(){o.style.transition="opacity 0.3s ease",o.style.opacity="0",setTimeout(()=>{o.parentNode&&document.body.removeChild(o)},300)}}async function Tt(t){try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(t);else{let e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),e.remove()}}catch(e){console.error("Failed to copy text: ",e),Wo()}}function Jo(){let t=document.createElement("div");t.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    background: #28a745;
    color: white;
    padding: 12px 16px;
    border-radius: 6px;
    z-index: 1000012;
    font-size: 0.9rem;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  `,t.textContent="\u2705 Copied to clipboard!",document.body.appendChild(t),setTimeout(()=>{t.style.opacity="0",setTimeout(()=>document.body.removeChild(t),200)},2e3)}function Wo(){let t=document.createElement("div");t.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    background: #dc3545;
    color: white;
    padding: 12px 16px;
    border-radius: 6px;
    z-index: 1000012;
    font-size: 0.9rem;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  `,t.textContent="\u274C Failed to copy. Please copy manually.",document.body.appendChild(t),setTimeout(()=>{t.style.opacity="0",setTimeout(()=>document.body.removeChild(t),200)},3e3)}var Ae=class{constructor(){this.isOpen=!1,this.appElement=null,this.sidebar=null,this.content=null,this.currentView="overview"}open(){this.isOpen||(this.isOpen=!0,this.createApp(),document.body.appendChild(this.appElement),requestAnimationFrame(()=>{this.appElement.style.opacity="1"}))}close(){this.isOpen&&(this.appElement.style.opacity="0",setTimeout(()=>{this.appElement&&this.appElement.parentNode&&this.appElement.parentNode.removeChild(this.appElement),this.isOpen=!1},300))}createApp(){this.appElement=document.createElement("div"),this.appElement.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #1a1d23;
      z-index: 100000;
      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
    `,this.createSidebar(),this.createContent(),this.appElement.appendChild(this.sidebar),this.appElement.appendChild(this.content),this.loadView("overview")}createSidebar(){this.sidebar=document.createElement("div"),this.sidebar.style.cssText=`
      width: 280px;
      height: 100%;
      background: #292d36;
      border-right: 1px solid #404040;
      display: flex;
      flex-direction: column;
    `;let e=document.createElement("div");e.style.cssText=`
      padding: 20px 16px;
      border-bottom: 1px solid #404040;
      text-align: center;
      background: linear-gradient(135deg, #23272f, #2a2e37);
    `,e.innerHTML=`
      <h1 style="color: #00bfff; font-size: 1.4rem; margin: 0 0 4px 0; font-weight: 700;">
        Ocot Client Docs
      </h1>
      <p style="color: #7d8590; font-size: 0.8rem; margin: 0;">
        Documentation & Guides
      </p>
    `;let o=document.createElement("div");o.style.cssText=`
      flex: 1;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    `,[{key:"overview",label:"Overview",icon:"\u{1F4CB}"},{key:"getting-started",label:"Getting Started",icon:"\u{1F680}"},{key:"proxy-guide",label:"Proxy Guide",icon:"\u{1F310}"},{key:"games-guide",label:"Games Guide",icon:"\u{1F3AE}"},{key:"privacy-tools",label:"Privacy Tools",icon:"\u{1F3AD}"},{key:"developer-tools",label:"Developer Tools",icon:"\u{1F4BB}"},{key:"troubleshooting",label:"Troubleshooting",icon:"\u{1F527}"},{key:"api-reference",label:"API Reference",icon:"\u{1F4D6}"}].forEach(a=>{let i=document.createElement("button");i.style.cssText=`
        width: 100%;
        padding: 12px 16px;
        margin-bottom: 4px;
        background: transparent;
        border: none;
        border-radius: 8px;
        color: #d4d4d4;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 500;
        text-align: left;
        display: flex;
        align-items: center;
        transition: all 0.2s ease;
      `,i.innerHTML=`${a.icon} ${a.label}`,i.addEventListener("mouseenter",()=>{i.classList.contains("active")||(i.style.background="rgba(0, 122, 204, 0.1)",i.style.color="#00bfff")}),i.addEventListener("mouseleave",()=>{i.classList.contains("active")||(i.style.background="transparent",i.style.color="#d4d4d4")}),i.addEventListener("click",()=>{this.setActiveNav(i),this.loadView(a.key)}),o.appendChild(i)});let n=document.createElement("button");n.style.cssText=`
      width: 100%;
      padding: 12px 16px;
      margin-top: auto;
      margin-bottom: 16px;
      background: #dc3545;
      border: none;
      border-radius: 8px;
      color: #fff;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 600;
    `,n.innerHTML="\u274C Close Documentation",n.addEventListener("click",()=>this.close()),o.appendChild(n),this.sidebar.appendChild(e),this.sidebar.appendChild(o)}createContent(){this.content=document.createElement("div"),this.content.style.cssText=`
      flex: 1;
      height: 100%;
      background: #23272f;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 40px 40px 100px 40px;
      box-sizing: border-box;
    `}setActiveNav(e){this.sidebar.querySelectorAll("button").forEach(r=>{r.classList.remove("active"),r.style.background="transparent",r.style.color="#d4d4d4"}),e.classList.add("active"),e.style.background="#00bfff",e.style.color="#fff"}loadView(e){this.currentView=e;let o={overview:this.createOverviewView(),"getting-started":this.createGettingStartedView(),"proxy-guide":this.createProxyGuideView(),"games-guide":this.createGamesGuideView(),"privacy-tools":this.createPrivacyToolsView(),"developer-tools":this.createDeveloperToolsView(),troubleshooting:this.createTroubleshootingView(),"api-reference":this.createApiReferenceView()};this.content.innerHTML=o[e]||o.overview}createOverviewView(){return`
      <div style="max-width: 800px;">
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">\u{1F4CB} Overview</h1>
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Ocot Client is a comprehensive web proxy toolkit designed to provide secure browsing, 
          privacy protection, and access to restricted content.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px; border: 1px solid #404040;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F31F} Key Features</h2>
          <ul style="color: #d4d4d4; line-height: 1.8; margin: 0; padding-left: 20px;">
            <li><strong>Web Proxy:</strong> Access blocked websites with custom proxy settings</li>
            <li><strong>Games Collection:</strong> Curated list of unblocked and blocked games</li>
            <li><strong>Privacy Tools:</strong> Tab cloaking, history flooding, and more</li>
            <li><strong>Developer Tools:</strong> Built-in console, calculator, and utilities</li>
            <li><strong>Customization:</strong> Multiple themes and personalization options</li>
          </ul>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #00bfff;">
          <h3 style="color: #00bfff; margin: 0 0 12px 0;">\u{1F4A1} Getting Started</h3>
          <p style="color: #d4d4d4; margin: 0; line-height: 1.6;">
            New to Ocot Client? Check out our <strong>Getting Started</strong> guide to learn 
            the basics and start using the proxy safely and effectively.
          </p>
        </div>
      </div>
    `}createGettingStartedView(){return`
      <div style="max-width: 800px;">
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">\u{1F680} Getting Started</h1>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">Step 1: Choose Your Tool</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin: 0;">
            Click any option in the sidebar to access different features. The most common starting point is the <strong>Proxy</strong> tab for web browsing.
          </p>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">Step 2: Configure Settings</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin: 0;">
            Visit the <strong>Settings</strong> tab to customize themes, proxy URLs, and privacy options.
          </p>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">Step 3: Stay Hidden</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin: 0;">
            Press <kbd style="background: #23272f; padding: 2px 6px; border-radius: 4px; font-family: monospace;">\\</kbd> to quickly hide the client, or use the cloaking tools for additional privacy protection.
          </p>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #ffc107;">
          <h3 style="color: #ffc107; margin: 0 0 12px 0;">\u26A0\uFE0F Important Safety Tips</h3>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li>Always use HTTPS websites when possible</li>
            <li>Don't enter sensitive information on untrusted sites</li>
            <li>Clear your browsing data regularly</li>
            <li>Be aware of your network's acceptable use policies</li>
          </ul>
        </div>
      </div>
    `}createProxyGuideView(){return`
      <div style="max-width: 800px;">
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">\u{1F310} Proxy Guide</h1>
        
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Learn how to use the proxy features effectively and safely.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F527} Proxy Settings</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            Configure your proxy server in the Settings tab. Available options:
          </p>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li><strong>Work Bartlett & API Bartlett:</strong> Proxy servers</li>
            <li><strong>Custom URL:</strong> Use your own proxy server</li>
          </ul>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F50D} Pocket Browser</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin: 0;">
            Use the Pocket Browser for isolated browsing with additional features:
          </p>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 16px 0 0 0; padding-left: 20px;">
            <li>Bookmarks (if enabled in settings)</li>
            <li>Session history tracking</li>
            <li>Custom user agent selection</li>
            <li>Built-in navigation controls</li>
          </ul>
        </div>
      </div>
    `}createGamesGuideView(){return`
      <div style="max-width: 800px;">
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">\u{1F3AE} Games Guide</h1>
        
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Access a curated collection of games organized by availability and compatibility.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F3AF} Game Categories</h2>
          <div style="display: grid; gap: 16px;">
            
            <div style="background: #23272f; border-radius: 8px; padding: 16px; border-left: 4px solid #28a745;">
              <h3 style="color: #28a745; margin: 0 0 8px 0; font-size: 1.2rem;">\u2705 Unblocked Games</h3>
              <p style="color: #d4d4d4; margin: 0; line-height: 1.5;">
                Games that are typically accessible on most networks and don't require special proxy settings. These are the safest and most reliable option for casual gaming.
              </p>
            </div>
            
            <div style="background: #23272f; border-radius: 8px; padding: 16px; border-left: 4px solid #dc3545;">
              <h3 style="color: #dc3545; margin: 0 0 8px 0; font-size: 1.2rem;">\u{1F6AB} Blocked Games</h3>
              <p style="color: #d4d4d4; margin: 0; line-height: 1.5;">
                Games that may be restricted on school or work networks. Use the main proxy feature to access these games when they're blocked.
              </p>
            </div>
            
            <div style="background: #23272f; border-radius: 8px; padding: 16px; border-left: 4px solid #007acc;">
              <h3 style="color: #007acc; margin: 0 0 8px 0; font-size: 1.2rem;">\u{1F504} CORS Proxy Optimized</h3>
              <p style="color: #d4d4d4; margin: 0; line-height: 1.5;">
                Games specifically optimized to work with CORS proxy settings. These games have been tested to work well with the proxy system for better performance.
              </p>
            </div>
            
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F3AE} How to Access Games</h2>
          <div style="display: grid; gap: 20px;">
            
            <div>
              <h3 style="color: #d4d4d4; margin: 0 0 8px 0; font-size: 1.1rem;">Step 1: Navigate to Games</h3>
              <p style="color: #7d8590; margin: 0; line-height: 1.5;">
                Click on <strong>"Games List"</strong> in the sidebar to access the games collection.
              </p>
            </div>
            
            <div>
              <h3 style="color: #d4d4d4; margin: 0 0 8px 0; font-size: 1.1rem;">Step 2: Choose Category</h3>
              <p style="color: #7d8590; margin: 0; line-height: 1.5;">
                Use the tabs at the top (Blocked, Unblocked, CORS Optimized) to filter games by type.
              </p>
            </div>
            
            <div>
              <h3 style="color: #d4d4d4; margin: 0 0 8px 0; font-size: 1.1rem;">Step 3: Click to Play</h3>
              <p style="color: #7d8590; margin: 0; line-height: 1.5;">
                Click on any game title to open it in a new tab. Games will open directly in your browser.
              </p>
            </div>
            
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F6E0}\uFE0F Troubleshooting Games</h2>
          
          <div style="margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Game Won't Load?</h3>
            <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>Try switching to the main <strong>Proxy</strong> tab and accessing the game through there</li>
              <li>Check if the game is in the "Blocked" category - it may need proxy access</li>
              <li>Clear your browser cache and cookies</li>
              <li>Try a different browser or incognito/private mode</li>
            </ul>
          </div>
          
          <div style="margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Game Running Slowly?</h3>
            <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>Try games from the "Unblocked" category first - they're optimized for direct access</li>
              <li>Close other tabs and applications to free up system resources</li>
              <li>Check your internet connection speed</li>
              <li>Try games from the "CORS Proxy Optimized" category for better proxy performance</li>
            </ul>
          </div>
          
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #8b5cf6;">
          <h3 style="color: #8b5cf6; margin: 0 0 12px 0;">\u{1F4A1} Pro Tips</h3>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li><strong>Start with Unblocked:</strong> Try the "Unblocked" category first for the best experience</li>
            <li><strong>Use Cloaking:</strong> Enable tab cloaking from the sidebar to hide your gaming activity</li>
            <li><strong>Bookmark Favorites:</strong> Use the Pocket Browser's bookmark feature to save your favorite games</li>
            <li><strong>Network Awareness:</strong> Be mindful of your network's policies regarding gaming</li>
            <li><strong>Performance:</strong> CORS Optimized games are tested to work well with proxy settings</li>
          </ul>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 20px; border-left: 4px solid #dc3545; margin-top: 24px; word-wrap: break-word; overflow-wrap: break-word;">
          <h3 style="color: #dc3545; margin: 0 0 12px 0;">\u26A0\uFE0F Important Notes</h3>
          <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 18px;">
            <li style="margin-bottom: 6px;">Games open in new tabs - make sure your browser allows popups</li>
            <li style="margin-bottom: 6px;">Some games may require Flash or specific plugins</li>
            <li style="margin-bottom: 6px;">Respect your network's acceptable use policy when gaming</li>
            <li style="margin-bottom: 0;">If a game doesn't work, try the main Proxy tab instead</li>
          </ul>
        </div>
        
      </div>
    `}createPrivacyToolsView(){return`
      <div style="max-width: 800px;">
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">\u{1F3AD} Privacy Tools</h1>
        
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Protect your privacy and maintain anonymity with our comprehensive suite of privacy tools.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F3AD} Tab Cloaking</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            Disguise your browser tab to look like a different website or application. Perfect for maintaining privacy in shared environments.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">How to Use:</h3>
            <ol style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Click "Cloaking" in the sidebar</li>
              <li>Choose from preset options (Google, Classroom, etc.)</li>
              <li>Or create custom tab title and favicon</li>
              <li>Your tab will instantly disguise itself</li>
            </ol>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #28a745;">
            <strong style="color: #28a745;">Pro Tip:</strong> 
            <span style="color: #d4d4d4;">Use academic or work-related cloaking options for better disguise in school/work environments.</span>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F30A} History Flooding</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            Fill your browser history with legitimate-looking entries to obscure your actual browsing activity.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Features:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Floods history with educational websites</li>
              <li>Customizable flood intensity and duration</li>
              <li>Runs in background without interrupting browsing</li>
              <li>Uses realistic browsing patterns</li>
            </ul>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #dc3545;">
            <strong style="color: #dc3545;">Warning:</strong> 
            <span style="color: #d4d4d4;">Use responsibly - this will add many entries to your browser history.</span>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F504} CORS Proxy</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            Bypass Cross-Origin Resource Sharing (CORS) restrictions for API requests and web applications.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Use Cases:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Access APIs that block direct browser requests</li>
              <li>Test web applications with external APIs</li>
              <li>Bypass CORS restrictions for development</li>
              <li>Access web services from client-side applications</li>
            </ul>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #007acc;">
            <strong style="color: #007acc;">Developer Note:</strong> 
            <span style="color: #d4d4d4;">Primarily useful for developers and advanced users working with APIs.</span>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F50D} Pocket Browser</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            Isolated browsing environment with enhanced privacy features and customizable settings.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Privacy Features:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Session-based history (clears on restart)</li>
              <li>Optional bookmarks with privacy controls</li>
              <li>Custom user agent selection</li>
              <li>Isolated from main browser session</li>
              <li>Built-in navigation controls</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Configuration:</h3>
            <p style="color: #d4d4d4; line-height: 1.5; margin: 0;">
              Visit <strong>Settings \u2192 Pocket Browser Settings</strong> to enable/disable bookmarks, history tracking, and select user agents for maximum privacy.
            </p>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F4DC} Custom Scripts</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            Run custom JavaScript utilities and automation scripts for enhanced functionality and privacy.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Available Scripts:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Website unblockers and bypass tools</li>
              <li>Privacy enhancement scripts</li>
              <li>Automation and productivity tools</li>
              <li>Custom bookmarklets for quick actions</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #8b5cf6; margin-bottom: 30px;">
          <h3 style="color: #8b5cf6; margin: 0 0 12px 0;">\u{1F6E1}\uFE0F Privacy Best Practices</h3>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li><strong>Layer your privacy:</strong> Use multiple tools together for maximum protection</li>
            <li><strong>Regular cleanup:</strong> Clear cookies, cache, and browsing data frequently</li>
            <li><strong>Incognito mode:</strong> Combine tools with private/incognito browsing</li>
            <li><strong>Network awareness:</strong> Be mindful of your network's monitoring capabilities</li>
            <li><strong>Tool rotation:</strong> Vary your privacy tool usage patterns</li>
          </ul>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 20px; border-left: 4px solid #dc3545; word-wrap: break-word; overflow-wrap: break-word;">
          <h3 style="color: #dc3545; margin: 0 0 12px 0;">\u26A0\uFE0F Important Disclaimers</h3>
          <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 18px;">
            <li style="margin-bottom: 6px;">Privacy tools provide protection but are not 100% foolproof</li>
            <li style="margin-bottom: 6px;">Some tools may affect browser performance or functionality</li>
            <li style="margin-bottom: 0;">Use responsibly and respect others' privacy and security</li>
          </ul>
        </div>
        
      </div>
    `}createDeveloperToolsView(){return`
      <div style="max-width: 800px;">
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">\u{1F4BB} Developer Tools</h1>
        
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Built-in development utilities designed for productivity, testing, and web development tasks.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F5A5}\uFE0F JavaScript Console</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            A fully-featured JavaScript console for testing, debugging, and executing code snippets directly within the browser.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 12px 0; font-size: 1.1rem;">Features:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li><strong>Code Execution:</strong> Run JavaScript code with real-time output</li>
              <li><strong>Error Handling:</strong> Clear error messages and stack traces</li>
              <li><strong>Auto-clear:</strong> Optional automatic clearing of output</li>
              <li><strong>Multi-line Support:</strong> Execute complex scripts and functions</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">How to Use:</h3>
            <ol style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Navigate to <strong>"Console"</strong> in the sidebar</li>
              <li>Type JavaScript code in the input field</li>
              <li>View results and errors in the output area</li>
            </ol>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #28a745;">
            <strong style="color: #28a745;">Pro Tip:</strong> 
            <span style="color: #d4d4d4;">Use <code style="background: #23272f; padding: 2px 4px; border-radius: 3px; color: #ffc107;">console.log()</code>, <code style="background: #23272f; padding: 2px 4px; border-radius: 3px; color: #ffc107;">console.error()</code>, and <code style="background: #23272f; padding: 2px 4px; border-radius: 3px; color: #ffc107;">console.table()</code> for structured output.</span>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F522} Calculator</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            A powerful calculator with support for basic arithmetic, advanced mathematical functions, and scientific operations.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 12px 0; font-size: 1.1rem;">Supported Operations:</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div>
                <h4 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1rem;">Basic Arithmetic:</h4>
                <ul style="color: #d4d4d4; line-height: 1.4; margin: 0; padding-left: 16px; font-size: 0.9rem;">
                  <li>Addition (+), Subtraction (-)</li>
                  <li>Multiplication (*), Division (/)</li>
                  <li>Exponentiation (**)</li>
                </ul>
              </div>
              <div>
                <h4 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1rem;">Advanced Functions:</h4>
                <ul style="color: #d4d4d4; line-height: 1.4; margin: 0; padding-left: 16px; font-size: 0.9rem;">
                  <li>Advanced mathematical operations</li>
                  <li>Solve for x</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Features:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li><strong>Error Handling:</strong> Clear messages for invalid expressions</li>
              <li><strong>Copy Results:</strong> Easy copying of calculation results</li>
            </ul>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #007acc;">
            <strong style="color: #007acc;">Note:</strong> 
            <span style="color: #d4d4d4;">
            For advanced functions, go to scripts then math tools.
            </span>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F4DD} Notes & Productivity</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            A simple but powerful note-taking tool with persistence for quick thoughts and code snippets.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 12px 0; font-size: 1.1rem;">Features:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li><strong>Auto-save:</strong> Notes are automatically saved to local storage</li>
              <li><strong>Persistent Storage:</strong> Your notes survive browser restarts</li>
              <li><strong>Large Text Area:</strong> Comfortable writing space</li>
              <li><strong>Quick Access:</strong> Always available from the sidebar</li>
              <li><strong>Privacy:</strong> Notes stored locally, never sent to servers</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Use Cases:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Temporary code snippets and testing</li>
              <li>Quick thoughts and reminders</li>
              <li>URL collections and bookmarks</li>
              <li>Meeting notes and study materials</li>
              <li>Draft messages and text formatting</li>
            </ul>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #28a745;">
            <strong style="color: #28a745;">Privacy Note:</strong> 
            <span style="color: #d4d4d4;">All notes are stored locally in your browser and never transmitted to external servers.</span>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F516} Bookmarklets Collection</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            A curated collection of useful JavaScript bookmarklets for web development, productivity, and site enhancement.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 12px 0; font-size: 1.1rem;">Available Categories:</h3>
            <div style="display: grid; gap: 12px;">
              <div>
                <h4 style="color: #00bfff; margin: 0 0 6px 0; font-size: 1rem;">\u{1F6E0}\uFE0F Development Tools:</h4>
                <ul style="color: #d4d4d4; line-height: 1.4; margin: 0; padding-left: 16px; font-size: 0.9rem;">
                  <li>Page structure analyzers and DOM inspectors</li>
                  <li>CSS debugging and style inspection tools</li>
                  <li>Accessibility checking utilities</li>
                </ul>
              </div>
              <div>
                <h4 style="color: #00bfff; margin: 0 0 6px 0; font-size: 1rem;">\u{1F4CA} Productivity Tools:</h4>
                <ul style="color: #d4d4d4; line-height: 1.4; margin: 0; padding-left: 16px; font-size: 0.9rem;">
                  <li>Text selection and manipulation tools</li>
                  <li>URL and link extraction utilities</li>
                  <li>Page modification and enhancement scripts</li>
                </ul>
              </div>
              <div>
                <h4 style="color: #00bfff; margin: 0 0 6px 0; font-size: 1rem;">\u{1F527} Utility Scripts:</h4>
                <ul style="color: #d4d4d4; line-height: 1.4; margin: 0; padding-left: 16px; font-size: 0.9rem;">
                  <li>Website unblockers and bypass tools</li>
                  <li>Content extraction and formatting</li>
                  <li>Custom page styling and theming</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">How to Use Bookmarklets:</h3>
            <ol style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Navigate to <strong>"Bookmarklets"</strong> in the sidebar</li>
              <li>Browse available tools</li>
              <li>Click on any bookmarklet to execute it on the current page</li>
              <li>Bookmarklets can be dragged to your browser's bookmark bar</li>
              <li>Results appear immediately or open in new windows</li>
            </ol>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #ffc107;">
            <strong style="color: #ffc107;">Safety Note:</strong> 
            <span style="color: #d4d4d4;">Only use bookmarklets on sites you trust. Some may modify page content or behavior.</span>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F4DC} Custom Scripts</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            Advanced JavaScript utilities and automation scripts for power users and developers.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 12px 0; font-size: 1.1rem;">Script Categories:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li><strong>Website Unblockers:</strong> Scripts to bypass common web filters</li>
              <li><strong>Privacy Enhancers:</strong> Tools for improved online privacy</li>
              <li><strong>Developer Utilities:</strong> Advanced debugging and development aids</li>
              <li><strong>Custom Functions:</strong> Specialized scripts for specific use cases</li>
            </ul>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #dc3545;">
            <strong style="color: #dc3545;">Advanced User Warning:</strong> 
            <span style="color: #d4d4d4;">These scripts execute powerful JavaScript code. Only use if you understand the implications.</span>
          </div>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #8b5cf6; margin-bottom: 30px;">
          <h3 style="color: #8b5cf6; margin: 0 0 12px 0;">\u{1F680} Development Tips & Tricks</h3>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li><strong>Console Commands:</strong> Use the console for quick DOM manipulation: <code style="background: #23272f; padding: 2px 4px; border-radius: 3px; color: #ffc107;">document.querySelector()</code></li>
            <li><strong>Bookmarklet Creation:</strong> Create custom bookmarklets by prefixing code with <code style="background: #23272f; padding: 2px 4px; border-radius: 3px; color: #ffc107;">javascript:</code></li>
            <li><strong>Local Storage:</strong> All tools respect browser privacy and use local storage only</li>
          </ul>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #007acc; margin-bottom: 30px;">
          <h3 style="color: #007acc; margin: 0 0 12px 0;">\u{1F3AF} Common Use Cases</h3>
          
          <div style="margin-bottom: 16px;">
            <h4 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">For Students:</h4>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Calculator for math homework and assignments</li>
              <li>Notes for quick study materials and reminders</li>
              <li>Console for learning JavaScript and programming concepts</li>
            </ul>
          </div>
          
          <div style="margin-bottom: 16px;">
            <h4 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">For Developers:</h4>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Console for testing JavaScript code and debugging</li>
              <li>Bookmarklets for web development and site analysis</li>
              <li>Notes for code snippets and documentation</li>
              <li>Custom scripts for automation and productivity</li>
            </ul>
          </div>
          
          <div>
            <h4 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">For General Users:</h4>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Calculator for daily calculations</li>
              <li>Notes for temporary text storage and drafts</li>
              <li>Bookmarklets for enhanced web browsing experience</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 20px; border-left: 4px solid #28a745; word-wrap: break-word; overflow-wrap: break-word;">
          <h3 style="color: #28a745; margin: 0 0 12px 0;">\u2728 Getting Started with Developer Tools</h3>
          <ol style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 18px;">
            <li style="margin-bottom: 6px;"><strong>Start with the Calculator:</strong> Test basic mathematical operations</li>
            <li style="margin-bottom: 6px;"><strong>Try the Console:</strong> Execute simple JavaScript commands like <code style="background: #23272f; padding: 1px 3px; border-radius: 3px; color: #ffc107;">alert('Hello!')</code></li>
            <li style="margin-bottom: 6px;"><strong>Use Notes:</strong> Save useful code snippets and reminders</li>
            <li style="margin-bottom: 6px;"><strong>Explore Bookmarklets:</strong> Find tools that enhance your browsing experience</li>
            <li style="margin-bottom: 0;"><strong>Advanced Scripts:</strong> Only use if you're comfortable with JavaScript execution</li>
          </ol>
        </div>
        
      </div>
    `}createTroubleshootingView(){return`
      <div style="max-width: 800px;">
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">\u{1F527} Troubleshooting</h1>
        
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Common issues and solutions for using Ocot Client effectively in different environments.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F310} Proxy Issues</h2>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Proxy Won't Load Websites</h3>
            <div style="margin-bottom: 12px;">
              <p style="color: #d4d4d4; line-height: 1.5; margin: 0 0 8px 0;"><strong>Try these solutions:</strong></p>
              <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
                <li>Check your internet connection</li>
                <li>Try a different proxy server in Settings</li>
                <li>Clear browser cache and cookies</li>
                <li>Disable browser extensions temporarily</li>
                <li>Try using incognito/private mode</li>
              </ul>
            </div>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Slow Proxy Performance</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Switch to a different proxy server in Settings</li>
              <li>Close unnecessary browser tabs</li>
              <li>Check if your network is throttling proxy connections</li>
              <li>Try using the proxy during off-peak hours</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F516} Bookmarklets Issues</h2>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #dc3545; margin: 0 0 12px 0; font-size: 1.1rem;">\u{1F3EB} School Computer Restrictions</h3>
            <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 12px;">
              <strong>Problem:</strong> Bookmarklets don't work on school computers with Chrome or Edge.
            </p>
            <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 12px;">
              <strong>Solution:</strong> Use Firefox browser instead:
            </p>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0 0 12px 0; padding-left: 20px;">
              <li>Bookmarklets typically work better on Firefox in restricted environments</li>
              <li>School IT policies often block JavaScript execution in Chrome/Edge</li>
              <li>Firefox may have fewer restrictions on bookmarklet execution</li>
              <li>If Firefox isn't available, try using the main proxy feature instead</li>
            </ul>
            <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #007acc;">
              <strong style="color: #007acc;">Pro Tip:</strong> 
              <span style="color: #d4d4d4;">If bookmarklets are completely blocked, use the Scripts section which may have alternative solutions.</span>
            </div>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Bookmarklets Not Executing</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Make sure JavaScript is enabled in your browser</li>
              <li>Check if popup blockers are interfering</li>
              <li>Try refreshing the page and running the bookmarklet again</li>
              <li>Some bookmarklets only work on specific types of websites</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Bookmarklet Installation Issues</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Try right-clicking and selecting "Bookmark this link"</li>
              <li>Manually copy the bookmarklet code and create a new bookmark</li>
              <li>Ensure the bookmark URL starts with <code style="background: #1f2937; padding: 1px 3px; border-radius: 3px; color: #ffc107;">javascript:</code></li>
              <li>Test the bookmarklet on a simple webpage first</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F3AE} Games Issues</h2>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Games Won't Load</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Try games from the "Unblocked" category first</li>
              <li>If blocked games don't work, use the main Proxy tab</li>
              <li>Check if Flash Player or other plugins are required</li>
              <li>Allow popups in your browser settings</li>
              <li>Try a different browser or incognito mode</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Poor Game Performance</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Close other browser tabs and applications</li>
              <li>Try games from "CORS Proxy Optimized" category</li>
              <li>Lower game quality settings if available</li>
              <li>Check your internet connection speed</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F4BB} Developer Tools Issues</h2>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Console Not Working</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Refresh the page and try again</li>
              <li>Check if JavaScript is enabled in your browser</li>
              <li>Try simpler commands first (like <code style="background: #1f2937; padding: 1px 3px; border-radius: 3px; color: #ffc107;">2+2</code>)</li>
              <li>Clear browser cache if console appears frozen</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Calculator Issues</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Make sure to use proper mathematical syntax</li>
              <li>Use * for multiplication, not x</li>
              <li>Check parentheses are balanced</li>
              <li>Try simpler calculations first</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Notes Not Saving</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Check if local storage is enabled in your browser</li>
              <li>Try typing something and refreshing the page</li>
              <li>Clear browser data and test again</li>
              <li>Incognito mode may prevent saving</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F3AD} Privacy Tools Issues</h2>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Tab Cloaking Not Working</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Refresh the page after applying cloaking</li>
              <li>Try a different cloaking preset</li>
              <li>Check if browser extensions are interfering</li>
              <li>Some browsers may prevent favicon changes</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">History Flooding Issues</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Allow popups in your browser for history flooding to work</li>
              <li>The process may be slow - be patient</li>
              <li>Some browsers may block rapid history additions</li>
              <li>Check browser console for any error messages</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #28a745; margin-bottom: 30px;">
          <h3 style="color: #28a745; margin: 0 0 12px 0;">\u{1F4A1} General Tips</h3>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li><strong>Browser Compatibility:</strong> Chrome, Firefox, and Edge are recommended</li>
            <li><strong>JavaScript Required:</strong> Most features need JavaScript enabled</li>
            <li><strong>Popup Blockers:</strong> Disable popup blockers for full functionality</li>
            <li><strong>Incognito Mode:</strong> Some features may not persist in private browsing</li>
            <li><strong>Network Restrictions:</strong> School/work networks may block certain features</li>
            <li><strong>Regular Updates:</strong> Clear cache occasionally for best performance</li>
          </ul>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 20px; border-left: 4px solid #007acc; word-wrap: break-word; overflow-wrap: break-word;">
          <h3 style="color: #007acc; margin: 0 0 12px 0;">\u{1F198} Still Having Issues?</h3>
          <p style="color: #d4d4d4; line-height: 1.5; margin: 0 0 12px 0;">
            If problems persist after trying these solutions:
          </p>
          <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 18px;">
            <li style="margin-bottom: 6px;">Try using a different browser (Firefox recommended for school computers)</li>
            <li style="margin-bottom: 6px;">Test in incognito/private mode to rule out extensions</li>
            <li style="margin-bottom: 6px;">Check if the issue occurs on different networks</li>
            <li style="margin-bottom: 0;">Consider using alternative tools within Ocot Client</li>
          </ul>
        </div>
        
      </div>
    `}createApiReferenceView(){return'<div style="max-width: 800px;"><h1 style="color: #00bfff;">\u{1F4D6} API Reference</h1><p style="color: #d4d4d4;">API documentation coming soon...</p></div>'}},Ie=null;function Yo(){Ie||(Ie=new Ae),Ie.open()}});var zt=S(be=>{"use strict";Object.defineProperty(be,"__esModule",{value:!0});be.proxiesList=void 0;be.proxiesList=[{id:"work-bartlett",name:"Work Bartlett (default)",url:"https://work.benjaminbartlett.net/",description:"Work proxy service"},{id:"api-bartlett",name:"API Bartlett",url:"https://api.benjaminbartlett.net/",description:"API proxy service"},{id:"help-bartlett",name:"Help Bartlett",url:"https://help.benjaminbartlett.net/",description:"Help proxy service"},{id:"space",name:"space proxy",url:"https://schoolisgood.info.gf/",description:"space proxy"},{id:"utopia-link-1",name:"utopia",url:"https://core.lab.infosv.ro/",description:"utopia link"}]});var Mt=S(ye=>{"use strict";Object.defineProperty(ye,"__esModule",{value:!0});ye.themesList=void 0;ye.themesList=[{id:"default",name:"Default Dark",description:"Classic dark theme",colors:{bgPrimary:"#23272f",bgSecondary:"#292d36",accentColor:"#007acc",accentHover:"#005a9e",accentColorRgb:"0, 122, 204"},preview:["#23272f","#007acc","#292d36"],icon:"\u{1F3A8}"},{id:"blue",name:"Ocean Blue",description:"Cool blue tones",colors:{bgPrimary:"#1a1f2e",bgSecondary:"#2a3040",accentColor:"#0066cc",accentHover:"#0052a3",accentColorRgb:"0, 102, 204"},preview:["#1a1f2e","#0066cc","#2a3040"],icon:"\u{1F30A}"},{id:"purple",name:"Purple Haze",description:"Rich purple theme",colors:{bgPrimary:"#2a1f3d",bgSecondary:"#3d2a54",accentColor:"#8b5cf6",accentHover:"#7c3aed",accentColorRgb:"139, 92, 246"},preview:["#2a1f3d","#8b5cf6","#3d2a54"],icon:"\u{1F49C}"},{id:"green",name:"Matrix Green",description:"Terminal inspired",colors:{bgPrimary:"#1f2f1f",bgSecondary:"#2d3f2d",accentColor:"#10b981",accentHover:"#059669",accentColorRgb:"16, 185, 129"},preview:["#1f2f1f","#10b981","#2d3f2d"],icon:"\u{1F49A}"},{id:"red",name:"Crimson Red",description:"Bold and striking",colors:{bgPrimary:"#3d1f1f",bgSecondary:"#4a2929",accentColor:"#dc2626",accentHover:"#b91c1c",accentColorRgb:"220, 38, 38"},preview:["#3d1f1f","#dc2626","#4a2929"],icon:"\u2764\uFE0F"},{id:"custom",name:"Custom Theme",description:"Create your own colors",colors:{bgPrimary:"#292d36",bgSecondary:"#23272f",accentColor:"#00bfff",accentHover:"#009fdf",accentColorRgb:"0, 191, 255"},preview:["#292d36","#00bfff","#23272f"],icon:"\u2728"}]});var ne=S(se=>{"use strict";Object.defineProperty(se,"__esModule",{value:!0});se.default=Zo;se.getProxySettings=fr;se.getPocketBrowserSettings=br;se.getGeneralSettings=yr;var Xo=_(),He=re(),At=zt(),Ot=Mt(),pe=Ot.themesList;function Ko(){return pe.map(t=>t.id==="custom"?`
          <div class="theme-option custom-theme-option" data-theme="custom" style="background: #292d36; border: 2px solid #404040; border-radius: 8px; padding: 16px; cursor: pointer; transition: all 0.2s;">
            <div class="theme-preview" style="display: flex; gap: 8px; margin-bottom: 8px;">
              <div id="custom-preview-1" style="width: 20px; height: 20px; background: var(--custom-bg, #292d36); border-radius: 4px;"></div>
              <div id="custom-preview-2" style="width: 20px; height: 20px; background: var(--custom-accent, #00bfff); border-radius: 4px;"></div>
              <div id="custom-preview-3" style="width: 20px; height: 20px; background: var(--custom-secondary, #23272f); border-radius: 4px;"></div>
            </div>
            <div style="color: #fff; font-weight: 600;">${t.icon} ${t.name}</div>
            <div style="color: #aaa; font-size: 0.85rem;">${t.description}</div>
          </div>
        `:`
        <div class="theme-option" data-theme="${t.id}" style="background: #292d36; border: 2px solid #404040; border-radius: 8px; padding: 16px; cursor: pointer; transition: all 0.2s;">
          <div class="theme-preview" style="display: flex; gap: 8px; margin-bottom: 8px;">
            ${t.preview.map(e=>`<div style="width: 20px; height: 20px; background: ${e}; border-radius: 4px;"></div>`).join("")}
          </div>
          <div style="color: #fff; font-weight: 600;">${t.icon} ${t.name}</div>
          <div style="color: #aaa; font-size: 0.85rem;">${t.description}</div>
        </div>
      `).join("")}async function Qo(){let t=await(0,He.loadData)("themes","themesList");t.length>0?pe=t:pe=Ot.themesList}function Zo(){Qo(),(0,Xo.injectAppCSS)(),hr();let t=document.createElement("div");return t.className="card-grid-view",t.style.display="none",t.innerHTML=`
    <div class="settings-header" style="margin-bottom: 30px;">
      <h2 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1.5rem;">Settings</h2>
      <p style="color: #aaa; margin: 0; font-size: 0.95rem;">Customize your Ocot Client experience</p>
    </div>

    <div class="settings-content" style="display: flex; flex-direction: column; gap: 30px;">
      
      <!-- Themes Section -->
      <div class="settings-section themes-section">
        <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
          \u{1F3A8} Themes
        </h3>
        <p style="color: #aaa; margin: 0 0 16px 0; font-size: 0.9rem;">
          Customize the appearance of your Ocot Client
        </p>
        <div class="theme-options" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
          ${Ko()}
        </div>

        <!-- Custom Theme Color Picker -->
        <div id="custom-theme-panel" style="display: none; margin-top: 16px; background: #23272f; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
          <h4 style="color: #fff; margin: 0 0 16px 0; font-size: 1.1rem;">Customize Colors</h4>
          <div style="display: grid; gap: 16px;">
            <div class="color-input-group" style="display: flex; align-items: center; gap: 12px;">
              <label style="color: #aaa; min-width: 120px;">Accent Color:</label>
              <input type="color" id="custom-accent-color" value="#00bfff" style="width: 50px; height: 30px; border: none; border-radius: 4px; cursor: pointer;">
              <input type="text" id="custom-accent-text" value="#00bfff" style="background: #292d36; color: #fff; border: 1px solid #404040; border-radius: 4px; padding: 4px 8px; font-family: monospace; width: 80px;">
            </div>
            <div class="color-input-group" style="display: flex; align-items: center; gap: 12px;">
              <label style="color: #aaa; min-width: 120px;">Background:</label>
              <input type="color" id="custom-bg-color" value="#292d36" style="width: 50px; height: 30px; border: none; border-radius: 4px; cursor: pointer;">
              <input type="text" id="custom-bg-text" value="#292d36" style="background: #292d36; color: #fff; border: 1px solid #404040; border-radius: 4px; padding: 4px 8px; font-family: monospace; width: 80px;">
            </div>
            <div class="color-input-group" style="display: flex; align-items: center; gap: 12px;">
              <label style="color: #aaa; min-width: 120px;">Secondary:</label>
              <input type="color" id="custom-secondary-color" value="#23272f" style="width: 50px; height: 30px; border: none; border-radius: 4px; cursor: pointer;">
              <input type="text" id="custom-secondary-text" value="#23272f" style="background: #292d36; color: #fff; border: 1px solid #404040; border-radius: 4px; padding: 4px 8px; font-family: monospace; width: 80px;">
            </div>
            <div style="display: flex; gap: 8px; margin-top: 8px;">
              <button id="apply-custom-theme" style="background: #00bfff; color: #fff; border: none; border-radius: 4px; padding: 8px 16px; cursor: pointer; font-weight: 600;">Apply Theme</button>
              <button id="reset-custom-theme" style="background: #666; color: #fff; border: none; border-radius: 4px; padding: 8px 16px; cursor: pointer;">Reset</button>
            </div>
          </div>
        </div>
      </div>

      <!-- General Settings Section -->
      <div class="settings-section general-section">
        <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
          \u2699\uFE0F General Settings
        </h3>
        <p style="color: #aaa; margin: 0 0 16px 0; font-size: 0.9rem;">
          Configure general app behavior and appearance
        </p>
        <div class="general-options" style="display: grid; gap: 16px;">
          <div class="setting-item" style="background: #292d36; border-radius: 8px; padding: 16px;">
            <label style="color: #00bfff; font-weight: 600; margin-bottom: 12px; display: block;">
              Floating Button
            </label>
            <div style="display: grid; gap: 8px;">
              <label style="display: flex; align-items: center; gap: 8px; color: #fff; cursor: pointer;">
                <input type="checkbox" id="enable-floating-button" checked style="margin: 0;">
                <span>Show floating button when client is hidden</span>
              </label>
            </div>
            <div style="color: #aaa; font-size: 0.8rem; margin-top: 8px;">
              The floating button (\u{1F527}) appears when you hide the main client, allowing you to quickly show it again. You can also press "\\" to toggle the client.
            </div>
          </div>
          
          <div class="setting-item" style="background: #292d36; border-radius: 8px; padding: 16px;">
            <label style="color: #00bfff; font-weight: 600; margin-bottom: 12px; display: block;">
              Script Notifications
            </label>
            <div style="display: grid; gap: 8px;">
              <label style="display: flex; align-items: center; gap: 8px; color: #fff; cursor: pointer;">
                <input type="checkbox" id="enable-script-notifications" checked style="margin: 0;">
                <span>Show notifications when auto-hide/auto-remove triggers</span>
              </label>
            </div>
            <div style="color: #aaa; font-size: 0.8rem; margin-top: 8px;">
              When enabled, small notifications appear in the top-right corner when auto-hide or auto-remove scripts are triggered by tab switching or clicking away.
            </div>
          </div>
        </div>
      </div>

      <!-- Proxy Settings Section -->
      <div class="settings-section proxy-section">
        <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
          \u{1F310} Proxy Settings
        </h3>
        <p style="color: #aaa; margin: 0 0 16px 0; font-size: 0.9rem;">
          Configure your proxy server URL
        </p>
        <div class="proxy-options" style="display: grid; gap: 16px;">
          <div class="setting-item" style="background: #292d36; border-radius: 8px; padding: 16px;">
            <label style="color: #00bfff; font-weight: 600; margin-bottom: 12px; display: block;">
              Proxy Server
            </label>
            <select id="proxy-server-select" style="width: 100%; padding: 10px; background: #23272f; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 0.9rem; margin-bottom: 12px;">
              <!-- Options will be dynamically populated from proxy data -->
            </select>
            <div id="custom-proxy-input" style="display: none;">
              <input type="text" id="custom-proxy-url" placeholder="Enter custom proxy URL (e.g., proxy.example.com)" 
                     style="width: 100%; padding: 10px; background: #23272f; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 0.9rem;">
              <div style="color: #aaa; font-size: 0.8rem; margin-top: 4px;">
                Protocol (https:// or http://) will be added automatically if not specified
              </div>
            </div>
            <div style="color: #aaa; font-size: 0.8rem; margin-top: 8px;">
              Select the proxy server to use for web browsing. Changes take effect after reopening the proxy tab.
            </div>
          </div>
        </div>
        
        <div style="margin-top: 16px; display: flex; gap: 12px;">
          <button id="save-proxy-settings" class="games-tab" style="border-radius: 6px; background: #28a745;">
            \u{1F4BE} Save Proxy Settings
          </button>
          <button id="reset-proxy-settings" class="games-tab" style="border-radius: 6px; background: #6c757d;">
            \u{1F504} Reset to Default
          </button>
        </div>
      </div>

      <!-- Pocket Browser Settings Section -->
      <div class="settings-section browser-section">
        <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
          \u{1F50D} Pocket Browser Settings
        </h3>
        <p style="color: #aaa; margin: 0 0 16px 0; font-size: 0.9rem;">
          Configure your browsing experience
        </p>
        <div class="browser-options" style="display: grid; gap: 16px;">
          <div class="setting-item" style="background: #292d36; border-radius: 8px; padding: 16px;">
            <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">
              Default Homepage
            </label>
            <input type="text" id="homepage-input" placeholder="https://google.com?igu=1" 
                   style="width: 100%; padding: 10px; background: #23272f; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 0.9rem;">
            <div style="color: #aaa; font-size: 0.8rem; margin-top: 4px;">
              Set the default page when opening Pocket Browser
            </div>
          </div>
          
          <div class="setting-item" style="background: #292d36; border-radius: 8px; padding: 16px;">
            <label style="color: #00bfff; font-weight: 600; margin-bottom: 12px; display: block;">
              Browser Features
            </label>
            <div style="display: grid; gap: 8px;">
              <label style="display: flex; align-items: center; gap: 8px; color: #fff; cursor: pointer;">
                <input type="checkbox" id="enable-history" checked style="margin: 0;">
                <span>Enable browsing history</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; color: #fff; cursor: pointer;">
                <input type="checkbox" id="enable-bookmarks" checked style="margin: 0;">
                <span>Enable bookmarks</span>
              </label>
            </div>
          </div>
          
          <div class="setting-item" style="background: #292d36; border-radius: 8px; padding: 16px;">
            <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">
              User Agent
            </label>
            <select id="user-agent-select" style="width: 100%; padding: 10px; background: #23272f; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 0.9rem;">
              <option value="default">Default</option>
              <option value="chrome">Chrome Desktop</option>
              <option value="firefox">Firefox Desktop</option>
              <option value="safari">Safari Desktop</option>
              <option value="mobile">Mobile Browser</option>
            </select>
            <div style="color: #aaa; font-size: 0.8rem; margin-top: 4px;">
              Change how websites see your browser
            </div>
          </div>
        </div>
        
        <div style="margin-top: 16px; display: flex; gap: 12px;">
          <button id="save-browser-settings" class="games-tab" style="border-radius: 6px; background: #28a745;">
            \u{1F4BE} Save Settings
          </button>
          <button id="reset-browser-settings" class="games-tab" style="border-radius: 6px; background: #6c757d;">
            \u{1F504} Reset to Default
          </button>
        </div>
      </div>

      <!-- Tab Order Section -->
      <div class="settings-section tab-order-section">
        <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
          \u{1F4F1} Tab Order
        </h3>
        <p style="color: #aaa; margin: 0 0 16px 0; font-size: 0.9rem;">
          Customize the order of sidebar navigation tabs
        </p>
        
        <div class="tab-order-container" style="background: #292d36; border-radius: 8px; padding: 20px;">
          <div style="margin-bottom: 16px;">
            <div style="color: #00bfff; font-weight: 600; margin-bottom: 8px;">
              Current Tab Order
            </div>
            <div style="color: #aaa; font-size: 0.8rem; margin-bottom: 12px;">
              Drag tabs to reorder them, or use the arrow buttons for keyboard navigation
            </div>
          </div>
          
          <div id="tab-order-list" class="tab-order-list" style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 16px;">
            <!-- Tab items will be populated by JavaScript -->
          </div>
          
          <div class="tab-order-actions" style="display: flex; gap: 12px; flex-wrap: wrap;">
            <button id="reset-tab-order" class="games-tab" style="border-radius: 6px; background: #6c757d; font-size: 0.85rem;">
              \u{1F504} Reset to Default
            </button>
            <div style="color: #aaa; font-size: 0.8rem; display: flex; align-items: center; margin-left: auto;">
              Changes are saved automatically
            </div>
          </div>
        </div>
      </div>

      <!-- Help Section -->
      <div class="settings-section help-section">
        <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
          \u2753 Help & Support
        </h3>
        <div class="help-content" style="background: #292d36; border-radius: 8px; padding: 20px;">
          <div style="color: #aaa; line-height: 1.6;">
            <h4 style="color: #00bfff; margin: 0 0 12px 0; font-size: 1.1rem;">Getting Started</h4>
            <p style="margin: 0 0 12px 0;">
              Welcome to Ocot Client! This powerful tool provides various utilities for web browsing and productivity.
            </p>
            
            <h4 style="color: #00bfff; margin: 16px 0 12px 0; font-size: 1.1rem;">Features Overview</h4>
            <ul style="margin: 0 0 12px 0; padding-left: 20px;">
              <li style="margin-bottom: 6px;"><strong>Proxy:</strong> Browse websites through proxy servers</li>
              <li style="margin-bottom: 6px;"><strong>Games:</strong> Access a collection of web games</li>
              <li style="margin-bottom: 6px;"><strong>Scripts:</strong> Run useful JavaScript utilities</li>
              <li style="margin-bottom: 6px;"><strong>Pocket Browser:</strong> Embedded browser with privacy features</li>
              <li style="margin-bottom: 6px;"><strong>Tools:</strong> Calculator, Notes, Console, and more</li>
            </ul>
            
            <h4 style="color: #00bfff; margin: 16px 0 12px 0; font-size: 1.1rem;">Keyboard Shortcuts</h4>
            <p style="margin: 0 0 12px 0;">
              \u2022 Press <kbd style="background: #23272f; padding: 2px 6px; border-radius: 4px; font-family: monospace;">\\</kbd> to show/hide the Ocot Client
            </p>
            <p style="margin: 0 0 12px 0;">
              \u2022 Press <kbd style="background: #23272f; padding: 2px 6px; border-radius: 4px; font-family: monospace;">Esc</kbd> to exit full screen in proxy tab.
            </p>
            
            <h4 style="color: #00bfff; margin: 16px 0 12px 0; font-size: 1.1rem;">Tips & Tricks</h4>
            <p style="margin: 0 0 6px 0;">
              \u2022 Customize themes in the Settings tab for a personalized experience
            </p>
            <p style="margin: 0 0 6px 0;">
              \u2022 Use the Cloaking feature to disguise your browser tab
            </p>
            <p style="margin: 0 0 6px 0;">
              \u2022 The Notes feature saves automatically to local storage
            </p>
            
            <div style="background: #23272f; border-radius: 6px; padding: 12px; margin-top: 16px; border-left: 4px solid #00bfff;">
              <strong style="color: #00bfff;">Note:</strong> This help section will be expanded with more detailed documentation and troubleshooting guides in future updates.
            </div>
          </div>
        </div>
      </div>
    </div>
  `,setTimeout(()=>{er()},0),t}function er(){let t=document.querySelectorAll(".theme-option");t.forEach(u=>{u.addEventListener("click",()=>{let d=u.getAttribute("data-theme");Pt(d),t.forEach(c=>c.style.borderColor="#404040"),u.style.borderColor="#00bfff",localStorage.setItem("proxyClientTheme",d)})});let e=localStorage.getItem("proxyClientTheme")||"default";Pt(e);let o=document.querySelector(`[data-theme="${e}"]`);o&&(o.style.borderColor="#00bfff"),tr();let r=document.getElementById("save-browser-settings"),n=document.getElementById("reset-browser-settings");r&&r.addEventListener("click",he),n&&n.addEventListener("click",sr);let a=document.getElementById("proxy-server-select"),i=document.getElementById("custom-proxy-input"),m=document.getElementById("save-proxy-settings"),s=document.getElementById("reset-proxy-settings");a&&a.addEventListener("change",()=>{let u=a.value==="custom";i&&(i.style.display=u?"block":"none")}),m&&m.addEventListener("click",ur),s&&s.addEventListener("click",mr),pr(),lr(),gr(),dr();let l=["homepage-input","enable-history","enable-bookmarks","user-agent-select"],p=["enable-floating-button","enable-script-notifications"];l.forEach(u=>{let d=document.getElementById(u);d&&(d.type==="checkbox"?d.addEventListener("change",he):(d.addEventListener("change",he),d.addEventListener("input",he)))}),p.forEach(u=>{let d=document.getElementById(u);d&&(d.type==="checkbox"?d.addEventListener("change",je):(d.addEventListener("change",je),d.addEventListener("input",je)))}),Cr()}function Pt(t){let e=document.documentElement;if(t==="custom"){Ht();return}let o=pe.find(r=>r.id===t);if(o)e.style.setProperty("--bg-primary",o.colors.bgPrimary),e.style.setProperty("--bg-secondary",o.colors.bgSecondary),e.style.setProperty("--accent-color",o.colors.accentColor),e.style.setProperty("--accent-hover",o.colors.accentHover),e.style.setProperty("--accent-color-rgb",o.colors.accentColorRgb);else{let r=pe.find(n=>n.id==="default");r&&(e.style.setProperty("--bg-primary",r.colors.bgPrimary),e.style.setProperty("--bg-secondary",r.colors.bgSecondary),e.style.setProperty("--accent-color",r.colors.accentColor),e.style.setProperty("--accent-hover",r.colors.accentHover),e.style.setProperty("--accent-color-rgb",r.colors.accentColorRgb))}jt()}function jt(){let t=document.documentElement,e=t.style.getPropertyValue("--bg-primary")||"#23272f",o=t.style.getPropertyValue("--bg-secondary")||"#292d36",r=t.style.getPropertyValue("--accent-color")||"#007acc",n=document.querySelector(".proxy-app-frame"),a=document.querySelector(".proxy-sidebar"),i=document.querySelector(".proxy-content");n&&(n.style.background=e),i&&(i.style.background=e),document.querySelectorAll(".card-grid-view").forEach(g=>{g.style.background=e}),document.querySelectorAll(".card-item, .game-item, .script-item").forEach(g=>{g.style.background=o}),document.querySelectorAll(".sidebar-btn.active, .games-tab.active").forEach(g=>{g.style.background=r}),document.querySelectorAll(".ocot-modal-content").forEach(g=>{g.style.background=e,g.style.borderColor=t.style.getPropertyValue("--border-color")||"#404040"}),document.querySelectorAll(".ocot-modal-content div, .ocot-modal-content p, .ocot-modal-content h2, .ocot-modal-content h3, .ocot-modal-content h4, .ocot-modal-content h5").forEach(g=>{g.style.color&&g.style.color.includes("#")&&(g.style.color.includes("#d4d4d4")||g.style.color.includes("#aaa")?g.style.color=t.style.getPropertyValue("--text-secondary")||"#d4d4d4":g.style.color.includes("#fff")?g.style.color=t.style.getPropertyValue("--text-primary")||"#fff":g.style.color.includes("#00bfff")&&(g.style.color=r))}),document.querySelectorAll(".ocot-modal-content button").forEach(g=>{g.style.backgroundColor&&g.style.backgroundColor.includes("#007bff")&&(g.style.backgroundColor=r)}),document.querySelectorAll(".ocot-modal-content input").forEach(g=>{g.style.background&&g.style.background.includes("#")&&(g.style.background=o,g.style.borderColor=t.style.getPropertyValue("--border-color")||"#404040",g.style.color=t.style.getPropertyValue("--text-secondary")||"#d4d4d4")})}function tr(){let t=document.querySelector('.theme-option[data-theme="custom"]'),e=document.getElementById("custom-theme-panel");t.addEventListener("click",r=>{r.stopPropagation(),e.style.display=e.style.display==="none"?"block":"none"});let o=(r,n)=>{let a=document.getElementById(r),i=document.getElementById(n);a.addEventListener("input",()=>{i.value=a.value,xe()}),i.addEventListener("input",()=>{ir(i.value)&&(a.value=i.value,xe())})};o("custom-accent-color","custom-accent-text"),o("custom-bg-color","custom-bg-text"),o("custom-secondary-color","custom-secondary-text"),document.getElementById("apply-custom-theme").addEventListener("click",()=>{or(),Ht()}),document.getElementById("reset-custom-theme").addEventListener("click",()=>{nr()}),rr()}function xe(){let t=document.getElementById("custom-accent-text").value,e=document.getElementById("custom-bg-text").value,o=document.getElementById("custom-secondary-text").value;document.getElementById("custom-preview-1").style.background=e,document.getElementById("custom-preview-2").style.background=t,document.getElementById("custom-preview-3").style.background=o}function or(){let t={accent:document.getElementById("custom-accent-text").value,background:document.getElementById("custom-bg-text").value,secondary:document.getElementById("custom-secondary-text").value};localStorage.setItem("customTheme",JSON.stringify(t)),console.log("Custom theme saved:",t)}function rr(){let t=localStorage.getItem("customTheme");if(t)try{let e=JSON.parse(t);document.getElementById("custom-accent-color").value=e.accent,document.getElementById("custom-accent-text").value=e.accent,document.getElementById("custom-bg-color").value=e.background,document.getElementById("custom-bg-text").value=e.background,document.getElementById("custom-secondary-color").value=e.secondary,document.getElementById("custom-secondary-text").value=e.secondary,xe()}catch(e){console.warn("Failed to load custom theme:",e)}}function Ht(){let t=localStorage.getItem("customTheme");if(t)try{let e=JSON.parse(t),o=document.documentElement,r=ar(e.accent,-20),n=Nt(e.accent);o.style.setProperty("--bg-primary",e.secondary),o.style.setProperty("--bg-secondary",e.background),o.style.setProperty("--accent-color",e.accent),o.style.setProperty("--accent-hover",r),o.style.setProperty("--accent-color-rgb",`${n.r}, ${n.g}, ${n.b}`),jt()}catch(e){console.warn("Failed to apply custom theme:",e)}}function nr(){document.getElementById("custom-accent-color").value="#00bfff",document.getElementById("custom-accent-text").value="#00bfff",document.getElementById("custom-bg-color").value="#292d36",document.getElementById("custom-bg-text").value="#292d36",document.getElementById("custom-secondary-color").value="#23272f",document.getElementById("custom-secondary-text").value="#23272f",xe()}function ir(t){return/^#[0-9A-F]{6}$/i.test(t)}function Nt(t){let e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function ar(t,e){let o=Nt(t);if(!o)return t;let r=m=>Math.max(0,Math.min(255,m+m*e/100)),n=Math.round(r(o.r)).toString(16).padStart(2,"0"),a=Math.round(r(o.g)).toString(16).padStart(2,"0"),i=Math.round(r(o.b)).toString(16).padStart(2,"0");return`#${n}${a}${i}`}function he(){let t={homepage:document.getElementById("homepage-input")?.value||"https://google.com?igu=1",enableHistory:document.getElementById("enable-history")?.checked??!0,enableBookmarks:document.getElementById("enable-bookmarks")?.checked??!0,userAgent:document.getElementById("user-agent-select")?.value||"default"};localStorage.setItem("pocketBrowserSettings",JSON.stringify(t)),console.log("Settings: Saved browser settings",t),window.dispatchEvent(new CustomEvent("pocketBrowserSettingsChanged",{detail:t})),console.log("Settings: Dispatched pocketBrowserSettingsChanged event");let e=document.getElementById("save-browser-settings");if(e){let o=e.innerHTML;e.innerHTML="\u2705 Saved!",e.style.background="#28a745",setTimeout(()=>{e.innerHTML=o},2e3)}}function sr(){let t={homepage:"https://google.com?igu=1",enableHistory:!0,enableBookmarks:!0,userAgent:"default"},e=document.getElementById("homepage-input"),o=document.getElementById("enable-history"),r=document.getElementById("enable-bookmarks"),n=document.getElementById("user-agent-select");e&&(e.value=t.homepage),o&&(o.checked=t.enableHistory),r&&(r.checked=t.enableBookmarks),n&&(n.value=t.userAgent),localStorage.setItem("pocketBrowserSettings",JSON.stringify(t));let a=document.getElementById("reset-browser-settings");if(a){let i=a.innerHTML;a.innerHTML="\u2705 Reset Complete",setTimeout(()=>{a.innerHTML=i},2e3)}}function lr(){let t=localStorage.getItem("pocketBrowserSettings");if(t)try{let e=JSON.parse(t),o=document.getElementById("homepage-input"),r=document.getElementById("enable-history"),n=document.getElementById("enable-bookmarks"),a=document.getElementById("user-agent-select");o&&(o.value=e.homepage||"https://google.com?igu=1"),r&&(r.checked=e.enableHistory!==!1),n&&(n.checked=e.enableBookmarks!==!1),a&&(a.value=e.userAgent||"default")}catch(e){console.warn("Failed to load browser settings:",e)}}function je(){let t={enableFloatingButton:document.getElementById("enable-floating-button")?.checked??!0,enableScriptNotifications:document.getElementById("enable-script-notifications")?.checked??!0};localStorage.setItem("ocot-general-settings",JSON.stringify(t)),console.log("Settings: Saved general settings",t),cr(t.enableFloatingButton),console.log("General settings saved successfully")}function dr(){let t=localStorage.getItem("ocot-general-settings");if(t)try{let e=JSON.parse(t),o=document.getElementById("enable-floating-button"),r=document.getElementById("enable-script-notifications");o&&(o.checked=e.enableFloatingButton!==!1),r&&(r.checked=e.enableScriptNotifications!==!1)}catch(e){console.warn("Failed to load general settings:",e)}}function cr(t){console.log("updateFloatingButtonVisibility called with enabled:",t),window.proxyClientApp&&window.proxyClientApp.floatingButton?t?(console.log("Floating button setting enabled"),window.proxyClientApp.frame&&window.proxyClientApp.frame.style.display==="none"?(console.log("Client is hidden, showing floating button"),window.proxyClientApp.floatingButton.style.display="flex"):console.log("Client is visible, keeping floating button hidden")):(console.log("Floating button setting disabled, hiding button"),window.proxyClientApp.floatingButton.style.display="none"):console.log("proxyClientApp or floatingButton not found")}async function pr(){let t=document.getElementById("proxy-server-select");if(!t){console.warn("Proxy server select element not found");return}let e=await(0,He.loadData)("proxies","proxiesList");e.length===0&&(e=At.proxiesList),t.innerHTML="",e.forEach(r=>{let n=document.createElement("option");n.value=r.id,n.textContent=r.name,n.title=r.description,t.appendChild(n)});let o=document.createElement("option");o.value="custom",o.textContent="Custom URL",t.appendChild(o),console.log(`Loaded ${e.length} proxy servers`)}async function ur(){let t=document.getElementById("proxy-server-select"),e=document.getElementById("custom-proxy-url"),o="",r=t?.value||"work-bartlett";if(r==="custom"){let i=e?.value?.trim()||"";i?(!i.startsWith("http://")&&!i.startsWith("https://")&&(i="https://"+i),o=i):o="https://work.benjaminbartlett.net/"}else{let i=await(0,He.loadData)("proxies","proxiesList");i.length===0&&(i=At.proxiesList);let m=i.find(s=>s.id===r);m?o=m.url:o="https://work.benjaminbartlett.net/"}let n={server:r,url:o,customUrl:e?.value?.trim()||""};localStorage.setItem("proxyClientProxySettings",JSON.stringify(n)),console.log("Settings: Saved proxy settings",n),window.dispatchEvent(new CustomEvent("proxySettingsChanged",{detail:n})),console.log("Settings: Dispatched proxySettingsChanged event");let a=document.getElementById("save-proxy-settings");if(a){let i=a.innerHTML;a.innerHTML="\u2705 Saved!",a.style.background="#28a745",setTimeout(()=>{a.innerHTML=i},2e3)}}function mr(){let t={server:"work-bartlett",url:"https://work.benjaminbartlett.net/",customUrl:""},e=document.getElementById("proxy-server-select"),o=document.getElementById("custom-proxy-url"),r=document.getElementById("custom-proxy-input");e&&(e.value=t.server),o&&(o.value=t.customUrl),r&&(r.style.display="none"),localStorage.setItem("proxyClientProxySettings",JSON.stringify(t)),console.log("Settings: Reset proxy settings to defaults",t),window.dispatchEvent(new CustomEvent("proxySettingsChanged",{detail:t})),console.log("Settings: Dispatched proxySettingsChanged event for reset");let n=document.getElementById("reset-proxy-settings");if(n){let a=n.innerHTML;n.innerHTML="\u2705 Reset Complete",setTimeout(()=>{n.innerHTML=a},2e3)}}function gr(){let t=localStorage.getItem("proxyClientProxySettings");if(t)try{let e=JSON.parse(t),o=document.getElementById("proxy-server-select"),r=document.getElementById("custom-proxy-url"),n=document.getElementById("custom-proxy-input");o&&(o.value=e.server||"work-bartlett"),r&&(r.value=e.customUrl||""),n&&e.server==="custom"&&(n.style.display="block")}catch(e){console.warn("Failed to load proxy settings:",e)}}function fr(){let t=localStorage.getItem("proxyClientProxySettings");if(!t)return{server:"work-bartlett",url:"https://work.benjaminbartlett.net/",customUrl:""};try{return JSON.parse(t)}catch{return{server:"work-bartlett",url:"https://work.benjaminbartlett.net/",customUrl:""}}}function br(){let t=localStorage.getItem("pocketBrowserSettings"),e={homepage:"https://google.com?igu=1",enableHistory:!0,enableBookmarks:!0,userAgent:"default"};if(!t)return e;try{let o=JSON.parse(t);return{...e,...o}}catch{return e}}function yr(){let t=localStorage.getItem("ocot-general-settings"),e={enableFloatingButton:!0,enableScriptNotifications:!0};if(!t)return e;try{let o=JSON.parse(t);return{...e,...o}}catch{return e}}function hr(){if(document.getElementById("tab-order-style"))return;let t=document.createElement("style");t.id="tab-order-style",t.textContent=`
    .tab-order-list {
      max-height: 400px;
      overflow-y: auto;
    }
    
    .tab-order-item {
      background: #23272f;
      border: 1px solid #404040;
      border-radius: 6px;
      padding: 12px;
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: move;
      transition: all 0.2s ease;
      user-select: none;
    }
    
    .tab-order-item:hover {
      background: #2a2e37;
      border-color: #525252;
      transform: translateY(-1px);
    }
    
    .tab-order-item.dragging {
      opacity: 0.5;
      transform: rotate(2deg);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    
    .tab-order-item.drag-over {
      border-color: #00bfff;
      box-shadow: 0 0 0 2px rgba(0, 191, 255, 0.3);
    }
    
    .tab-drag-handle {
      font-size: 1.2rem;
      color: #666;
      cursor: grab;
      line-height: 1;
    }
    
    .tab-drag-handle:active {
      cursor: grabbing;
    }
    
    .tab-info {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .tab-icon {
      font-size: 1.1rem;
      width: 20px;
      text-align: center;
    }
    
    .tab-label {
      color: #fff;
      font-weight: 500;
    }
    
    .tab-order-controls {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    
    .tab-order-btn {
      background: #404040;
      border: none;
      border-radius: 4px;
      color: #fff;
      font-size: 0.7rem;
      padding: 4px 6px;
      cursor: pointer;
      transition: background 0.2s;
      line-height: 1;
    }
    
    .tab-order-btn:hover {
      background: #00bfff;
    }
    
    .tab-order-btn:disabled {
      background: #2a2e37;
      color: #666;
      cursor: not-allowed;
    }
    
    /* Drag and drop visual feedback */
    .tab-order-list.drag-active {
      background: rgba(0, 191, 255, 0.05);
      border-radius: 6px;
    }
  `,document.head.appendChild(t)}function Ne(){let t=["proxyButton","gamesButton","bookmarkletsButton","scriptsButton","notesButton","calculatorButton","consoleButton","cloakingButton","historyFloodButton","corsProxyButton","pocketBrowserButton","settingsButton"];try{let e=localStorage.getItem("ocot-tab-order");if(e){let o=JSON.parse(e);if(Array.isArray(o)&&o.length===t.length&&t.every(n=>o.includes(n)))return o}}catch(e){console.warn("Failed to load tab order from localStorage:",e)}return t}function xr(){return{proxyButton:{label:"Proxy",icon:"\u{1F310}"},gamesButton:{label:"Games List",icon:"\u{1F3AE}"},bookmarkletsButton:{label:"Bookmarklets",icon:"\u{1F516}"},scriptsButton:{label:"Scripts",icon:"\u{1F4DC}"},notesButton:{label:"Notes",icon:"\u{1F4DD}"},calculatorButton:{label:"Calculator",icon:"\u{1F9EE}"},consoleButton:{label:"Console",icon:"\u{1F4BB}"},cloakingButton:{label:"Cloaking",icon:"\u{1F3AD}"},historyFloodButton:{label:"History Flood",icon:"\u{1F30A}"},corsProxyButton:{label:"CORS Proxy",icon:"\u{1F504}"},pocketBrowserButton:{label:"Pocket Browser",icon:"\u{1F50D}"},settingsButton:{label:"Settings",icon:"\u2699\uFE0F"}}}function Fe(t){try{localStorage.setItem("ocot-tab-order",JSON.stringify(t)),console.log("Tab order saved:",t),document.dispatchEvent(new CustomEvent("tabOrderChanged"))}catch(e){console.error("Failed to save tab order to localStorage:",e)}}function vr(){try{localStorage.removeItem("ocot-tab-order"),console.log("Tab order reset to default"),document.dispatchEvent(new CustomEvent("tabOrderChanged")),ue()}catch(t){console.error("Failed to reset tab order:",t)}}function ue(){let t=document.getElementById("tab-order-list");if(!t)return;let e=Ne(),o=xr();t.innerHTML=e.map((r,n)=>{let a=o[r];return a?`
      <div class="tab-order-item" draggable="true" data-tab-key="${r}" data-index="${n}">
        <div class="tab-drag-handle">\u22EE\u22EE</div>
        <div class="tab-info">
          <div class="tab-icon">${a.icon}</div>
          <div class="tab-label">${a.label}</div>
        </div>
        <div class="tab-order-controls">
          <button class="tab-order-btn" onclick="moveTabUp('${r}')" ${n===0?"disabled":""}>\u25B2</button>
          <button class="tab-order-btn" onclick="moveTabDown('${r}')" ${n===e.length-1?"disabled":""}>\u25BC</button>
        </div>
      </div>
    `:""}).join(""),wr()}function wr(){let t=document.getElementById("tab-order-list");if(!t)return;let e=null;t.addEventListener("dragstart",o=>{o.target.classList.contains("tab-order-item")&&(e=o.target,o.target.classList.add("dragging"),t.classList.add("drag-active"),o.dataTransfer.effectAllowed="move",o.dataTransfer.setData("text/html",o.target.outerHTML))}),t.addEventListener("dragend",o=>{o.target.classList.contains("tab-order-item")&&(o.target.classList.remove("dragging"),t.classList.remove("drag-active"),t.querySelectorAll(".tab-order-item").forEach(r=>{r.classList.remove("drag-over")}),e=null)}),t.addEventListener("dragover",o=>{o.preventDefault(),o.dataTransfer.dropEffect="move";let r=It(t,o.clientY),n=t.querySelector(".dragging");if(t.querySelectorAll(".tab-order-item").forEach(a=>{a.classList.remove("drag-over")}),r==null){let a=[...t.querySelectorAll(".tab-order-item:not(.dragging)")];a.length>0&&a[a.length-1].classList.add("drag-over")}else r.classList.add("drag-over")}),t.addEventListener("drop",o=>{o.preventDefault();let r=It(t,o.clientY),n=t.querySelector(".dragging");n&&n!==r&&(r==null?t.appendChild(n):t.insertBefore(n,r),kr())})}function It(t,e){return[...t.querySelectorAll(".tab-order-item:not(.dragging)")].reduce((r,n)=>{let a=n.getBoundingClientRect(),i=e-a.top-a.height/2;return i<0&&i>r.offset?{offset:i,element:n}:r},{offset:Number.NEGATIVE_INFINITY}).element}function kr(){let t=document.getElementById("tab-order-list");if(!t)return;let e=[...t.querySelectorAll(".tab-order-item")].map(o=>o.getAttribute("data-tab-key"));Fe(e),setTimeout(()=>ue(),100)}window.moveTabUp=function(t){let e=Ne(),o=e.indexOf(t);o>0&&([e[o-1],e[o]]=[e[o],e[o-1]],Fe(e),ue())};window.moveTabDown=function(t){let e=Ne(),o=e.indexOf(t);o<e.length-1&&([e[o],e[o+1]]=[e[o+1],e[o]],Fe(e),ue())};function Cr(){let t=document.getElementById("reset-tab-order");t&&t.addEventListener("click",()=>{vr();let e=t.innerHTML;t.innerHTML="\u2705 Reset Complete",t.style.background="#28a745",setTimeout(()=>{t.innerHTML=e,t.style.background="#6c757d"},2e3)}),ue()}});var Ft=S(De=>{"use strict";Object.defineProperty(De,"__esModule",{value:!0});De.default=Er;var $e=ne();function Er(){let t=document.createElement("div");t.style.width="100%",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column";let e=document.createElement("div");e.style.cssText=`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 8px 12px;
    background: #292d36;
    border-bottom: 1px solid #404040;
    min-height: 40px;
  `;let o=document.createElement("button");o.innerHTML="\u29C9",o.title="Open in about:blank",o.style.cssText=`
    background: #2d323e;
    border: 1px solid #404040;
    border-radius: 4px;
    color: #fff;
    padding: 6px 10px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
    outline: none;
    margin-right: 8px;
  `,o.addEventListener("mouseenter",()=>{o.style.background="var(--accent-color, #007acc)",o.style.borderColor="var(--accent-color, #007acc)"}),o.addEventListener("mouseleave",()=>{o.style.background="#2d323e",o.style.borderColor="#404040"});let r=document.createElement("button");r.innerHTML="\u26F6",r.title="Enter Fullscreen",r.style.cssText=`
    background: #2d323e;
    border: 1px solid #404040;
    border-radius: 4px;
    color: #fff;
    padding: 6px 10px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
    outline: none;
  `,r.addEventListener("mouseenter",()=>{r.style.background="var(--accent-color, #007acc)",r.style.borderColor="var(--accent-color, #007acc)"}),r.addEventListener("mouseleave",()=>{r.style.background="#2d323e",r.style.borderColor="#404040"});let n=document.createElement("iframe");n.id="ocot-proxy-iframe";let a=(0,$e.getProxySettings)();n.src=a.url||"https://work.benjaminbartlett.net/",n.style.width="100%",n.style.height="100%",n.style.border="none",n.style.flex="1";function i(){let u=(0,$e.getProxySettings)().url||"https://work.benjaminbartlett.net/";n.src!==u&&(console.log("Proxy: Reloading iframe due to settings change",{oldUrl:n.src,newUrl:u}),n.src=u)}window.addEventListener("storage",p=>{p.key==="proxyClientProxySettings"&&(console.log("Proxy: Storage event detected for proxy settings"),i())}),window.addEventListener("proxySettingsChanged",p=>{console.log("Proxy: Settings changed event received",p.detail),i()}),o.addEventListener("click",()=>{m()});function m(){let u=(0,$e.getProxySettings)().url||"https://work.benjaminbartlett.net/",d=window.open();if(!d){console.warn("Popup blocked - unable to open about:blank window");return}let c=d.document.createElement("iframe");c.style.cssText="position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;",c.src=u,d.document.body.appendChild(c)}r.addEventListener("click",()=>{s()});function s(){try{n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen?n.msRequestFullscreen():n.mozRequestFullScreen&&n.mozRequestFullScreen()}catch(p){console.warn("Fullscreen not supported or blocked:",p)}}function l(){document.fullscreenElement===n||document.webkitFullscreenElement===n||document.msFullscreenElement===n||document.mozFullScreenElement===n?(r.innerHTML="\u26F6",r.title="Exit Fullscreen (Press Esc)"):(r.innerHTML="\u26F6",r.title="Enter Fullscreen")}return document.addEventListener("fullscreenchange",l),document.addEventListener("webkitfullscreenchange",l),document.addEventListener("msfullscreenchange",l),document.addEventListener("mozfullscreenchange",l),e.appendChild(o),e.appendChild(r),t.appendChild(e),t.appendChild(n),t}});var A=S(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.createBaseModal=ve;ie.removeModal=we;ie.showModal=Br;ie.showInputModal=Tr;ie.showConfirmModal=Lr;var q=null;function Sr(){return q||(q=document.createElement("div"),q.id="ocot-modal-container",q.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000000;
      pointer-events: none;
    `,document.body.appendChild(q)),q}function ve(t="",e="info"){let o=Sr(),r=document.createElement("div");r.className="ocot-modal-overlay",r.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000001;
    pointer-events: all;
    opacity: 0;
    transition: opacity 0.2s ease-out;
  `;let n=document.createElement("div");n.className="ocot-modal-content",n.style.cssText=`
    background: var(--bg-primary, #23272f);
    border-radius: 12px;
    padding: 24px;
    min-width: 300px;
    max-width: 90%;
    max-height: 90%;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    border: 1px solid var(--border-color, #404040);
    transform: translateY(-20px) scale(0.95);
    transition: transform 0.2s ease-out;
    overflow-y: auto;
  `;let a={info:{icon:"\u2139\uFE0F",color:"#00bfff"},success:{icon:"\u2705",color:"#28a745"},warning:{icon:"\u26A0\uFE0F",color:"#ffc107"},error:{icon:"\u274C",color:"#dc3545"},question:{icon:"\u2753",color:"#6f42c1"},input:{icon:"\u{1F4DD}",color:"#007bff"}},i=a[e]||a.info;if(t){let m=document.createElement("div");m.style.cssText=`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--border-color, #404040);
      padding-bottom: 12px;
    `;let s=document.createElement("h3");s.style.cssText=`
      margin: 0;
      color: ${i.color};
      font-size: 1.2rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
    `,s.innerHTML=`${i.icon} ${t}`;let l=document.createElement("button");l.innerHTML="&times;",l.style.cssText=`
      background: none;
      border: none;
      color: #aaa;
      font-size: 24px;
      cursor: pointer;
      padding: 0;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      transition: background-color 0.2s;
    `,l.addEventListener("mouseenter",()=>{l.style.backgroundColor="var(--border-color, #404040)",l.style.color="var(--text-primary, #fff)"}),l.addEventListener("mouseleave",()=>{l.style.backgroundColor="transparent",l.style.color="var(--text-secondary, #aaa)"}),m.appendChild(s),m.appendChild(l),n.appendChild(m),n._closeButton=l}return r.appendChild(n),o.appendChild(r),requestAnimationFrame(()=>{r.style.opacity="1",n.style.transform="translateY(0) scale(1)"}),{modal:r,modalContent:n,container:o}}function we(t){if(!t||!t.parentNode)return;t.style.opacity="0";let e=t.querySelector(".ocot-modal-content");e&&(e.style.transform="translateY(-20px) scale(0.95)"),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t),q&&q.children.length===0&&(q.parentNode&&q.parentNode.removeChild(q),q=null)},200)}function Br(t,e="",o="info"){return new Promise(r=>{let{modal:n,modalContent:a}=ve(e,o),i=document.createElement("div");i.style.cssText=`
      color: var(--text-secondary, #d4d4d4);
      line-height: 1.5;
      margin-bottom: 20px;
      font-size: 0.95rem;
    `,i.innerHTML=t.replace(/\n/g,"<br>"),a.appendChild(i);let m=document.createElement("div");m.style.cssText=`
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    `;let s=document.createElement("button");s.textContent="OK",s.style.cssText=`
      padding: 10px 24px;
      background: var(--accent-color, #007bff);
      border: none;
      border-radius: 6px;
      color: var(--text-primary, white);
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 500;
      transition: background-color 0.2s;
    `,s.addEventListener("mouseenter",()=>{s.style.backgroundColor="var(--accent-hover, #0056b3)"}),s.addEventListener("mouseleave",()=>{s.style.backgroundColor="var(--accent-color, #007bff)"}),m.appendChild(s),a.appendChild(m);let l=()=>{we(n),r()};s.addEventListener("click",l),a._closeButton&&a._closeButton.addEventListener("click",l);let p=u=>{u.key==="Escape"&&(document.removeEventListener("keydown",p),l())};document.addEventListener("keydown",p),n.addEventListener("click",u=>{u.target===n&&l()}),setTimeout(()=>s.focus(),100)})}function Tr(t,e="",o="",r="text"){return new Promise(n=>{let{modal:a,modalContent:i}=ve(o||"Input Required","input"),m=document.createElement("div");m.style.cssText=`
      color: var(--text-secondary, #d4d4d4);
      line-height: 1.5;
      margin-bottom: 16px;
      font-size: 0.95rem;
    `,m.innerHTML=t.replace(/\n/g,"<br>"),i.appendChild(m);let s=document.createElement("input");s.type=r,s.value=e,s.style.cssText=`
      width: 100%;
      padding: 12px;
      background: var(--bg-secondary, #1e2126);
      border: 1px solid var(--border-color, #404040);
      border-radius: 6px;
      color: var(--text-secondary, #d4d4d4);
      font-size: 0.9rem;
      margin-bottom: 20px;
      outline: none;
      transition: border-color 0.2s;
    `,s.addEventListener("focus",()=>{s.style.borderColor="var(--accent-color, #007bff)",s.style.boxShadow="0 0 0 2px rgba(var(--accent-color-rgb, 0, 123, 255), 0.25)"}),s.addEventListener("blur",()=>{s.style.borderColor="var(--border-color, #404040)",s.style.boxShadow="none"}),i.appendChild(s);let l=document.createElement("div");l.style.cssText=`
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    `;let p=document.createElement("button");p.textContent="Cancel",p.style.cssText=`
      padding: 10px 20px;
      background: #6c757d;
      border: none;
      border-radius: 6px;
      color: var(--text-primary, white);
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 500;
      transition: background-color 0.2s;
    `;let u=document.createElement("button");u.textContent="OK",u.style.cssText=`
      padding: 10px 24px;
      background: var(--accent-color, #007bff);
      border: none;
      border-radius: 6px;
      color: var(--text-primary, white);
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 500;
      transition: background-color 0.2s;
    `,p.addEventListener("mouseenter",()=>{p.style.backgroundColor="#545b62"}),p.addEventListener("mouseleave",()=>{p.style.backgroundColor="#6c757d"}),u.addEventListener("mouseenter",()=>{u.style.backgroundColor="var(--accent-hover, #0056b3)"}),u.addEventListener("mouseleave",()=>{u.style.backgroundColor="var(--accent-color, #007bff)"}),l.appendChild(p),l.appendChild(u),i.appendChild(l);let d=(g=null)=>{we(a),n(g)};u.addEventListener("click",()=>{d(s.value)}),p.addEventListener("click",()=>{d(null)}),i._closeButton&&i._closeButton.addEventListener("click",()=>{d(null)});let c=g=>{g.key==="Enter"&&!g.shiftKey?(g.preventDefault(),document.removeEventListener("keydown",c),d(s.value)):g.key==="Escape"&&(document.removeEventListener("keydown",c),d(null))};document.addEventListener("keydown",c),a.addEventListener("click",g=>{g.target===a&&d(null)}),setTimeout(()=>{s.focus(),s.select()},100)})}function Lr(t,e="",o="Yes",r="No"){return new Promise(n=>{let{modal:a,modalContent:i}=ve(e||"Confirm Action","question"),m=document.createElement("div");m.style.cssText=`
      color: var(--text-secondary, #d4d4d4);
      line-height: 1.5;
      margin-bottom: 20px;
      font-size: 0.95rem;
    `,m.innerHTML=t.replace(/\n/g,"<br>"),i.appendChild(m);let s=document.createElement("div");s.style.cssText=`
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    `;let l=document.createElement("button");l.textContent=r,l.style.cssText=`
      padding: 10px 20px;
      background: #6c757d;
      border: none;
      border-radius: 6px;
      color: var(--text-primary, white);
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 500;
      transition: background-color 0.2s;
    `;let p=document.createElement("button");p.textContent=o,p.style.cssText=`
      padding: 10px 24px;
      background: #dc3545;
      border: none;
      border-radius: 6px;
      color: var(--text-primary, white);
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 500;
      transition: background-color 0.2s;
    `,l.addEventListener("mouseenter",()=>{l.style.backgroundColor="#545b62"}),l.addEventListener("mouseleave",()=>{l.style.backgroundColor="#6c757d"}),p.addEventListener("mouseenter",()=>{p.style.backgroundColor="#c82333"}),p.addEventListener("mouseleave",()=>{p.style.backgroundColor="#dc3545"}),s.appendChild(l),s.appendChild(p),i.appendChild(s);let u=(c=!1)=>{we(a),n(c)};p.addEventListener("click",()=>{u(!0)}),l.addEventListener("click",()=>{u(!1)}),i._closeButton&&i._closeButton.addEventListener("click",()=>{u(!1)});let d=c=>{c.key==="Enter"?(document.removeEventListener("keydown",d),u(!0)):c.key==="Escape"&&(document.removeEventListener("keydown",d),u(!1))};document.addEventListener("keydown",d),a.addEventListener("click",c=>{c.target===a&&u(!1)}),setTimeout(()=>l.focus(),100)})}});var Dt=S(_e=>{"use strict";Object.defineProperty(_e,"__esModule",{value:!0});_e.default=Mr;var zr=_(),$t=A();function Mr(){(0,zr.injectAppCSS)();let t=document.createElement("div");t.className="card-grid-view";let e=JSON.parse(localStorage.getItem("proxyClientNotes")||"[]");t.innerHTML=`
    <div class="notes-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h2 style="color: #00bfff; margin: 0; font-size: 1.5rem;">Notes</h2>
      <button id="add-note-btn" class="games-tab" style="border-radius: 6px;">Add Note</button>
    </div>
    <div id="notes-list" class="card-list"></div>
  `;let o=t.querySelector("#notes-list"),r=t.querySelector("#add-note-btn");function n(){if(o.innerHTML="",e.length===0){o.innerHTML=`
        <div class="card-item" style="text-align: center; grid-column: 1 / -1;">
          <div class="card-title">No Notes Yet</div>
          <div class="card-desc">Click "Add Note" to create your first note</div>
        </div>
      `;return}e.forEach((i,m)=>{let s=document.createElement("div");s.className="card-item";let l=i.content.length>100?i.content.substring(0,100)+"...":i.content,p=new Date(i.timestamp).toLocaleDateString();s.innerHTML=`
        <div class="card-title">${i.title||"Untitled Note"}</div>
        <div class="card-desc">${l}</div>
        <div class="card-desc" style="margin-top: 8px; font-size: 0.8rem; color: #666;">
          ${p}
        </div>
        <div style="display: flex; gap: 8px; margin-top: 12px;">
          <button class="edit-btn" data-index="${m}" style="padding: 4px 12px; background: #007acc; border: none; border-radius: 4px; color: white; cursor: pointer; font-size: 0.85rem;">Edit</button>
          <button class="delete-btn" data-index="${m}" style="padding: 4px 12px; background: #d73a49; border: none; border-radius: 4px; color: white; cursor: pointer; font-size: 0.85rem;">Delete</button>
        </div>
      `,o.appendChild(s)})}function a(i=null){let m=i!==null,s=m?e[i]:{title:"",content:""},l=document.createElement("div");l.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100001;
    `,l.innerHTML=`
      <div style="background: #23272f; padding: 24px; border-radius: 10px; width: 90%; max-width: 600px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
        <h3 style="color: #00bfff; margin: 0 0 16px 0;">${m?"Edit Note":"New Note"}</h3>
        <input type="text" id="note-title" placeholder="Note title..." value="${s.title}" 
               style="width: 100%; padding: 12px; margin-bottom: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        <textarea id="note-content" placeholder="Write your note here..." rows="10" 
                  style="width: 100%; padding: 12px; margin-bottom: 16px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem; resize: vertical;">${s.content}</textarea>
        <div style="display: flex; gap: 12px; justify-content: flex-end;">
          <button id="cancel-btn" style="padding: 10px 20px; background: #404040; border: none; border-radius: 6px; color: white; cursor: pointer;">Cancel</button>
          <button id="save-btn" style="padding: 10px 20px; background: #007acc; border: none; border-radius: 6px; color: white; cursor: pointer;">Save</button>
        </div>
      </div>
    `,document.body.appendChild(l);let p=l.querySelector("#note-title"),u=l.querySelector("#note-content"),d=l.querySelector("#cancel-btn"),c=l.querySelector("#save-btn");p.focus(),d.onclick=()=>document.body.removeChild(l),c.onclick=async()=>{let g=p.value.trim(),b=u.value.trim();if(!g&&!b){await(0,$t.showModal)("Please enter a title or content for the note.","Missing Content","warning");return}let y={title:g||"Untitled Note",content:b,timestamp:Date.now()};m?e[i]=y:e.unshift(y),localStorage.setItem("proxyClientNotes",JSON.stringify(e)),n(),document.body.removeChild(l)},l.onclick=g=>{g.target===l&&document.body.removeChild(l)}}return r.onclick=()=>a(),o.onclick=async i=>{if(i.target.classList.contains("edit-btn")){let m=parseInt(i.target.dataset.index);a(m)}else if(i.target.classList.contains("delete-btn")){let m=parseInt(i.target.dataset.index);await(0,$t.showConfirmModal)("Are you sure you want to delete this note?<br><br>This action cannot be undone.","Delete Note","Delete","Cancel")&&(e.splice(m,1),localStorage.setItem("proxyClientNotes",JSON.stringify(e)),n())}},n(),t}});var _t=S(qe=>{"use strict";Object.defineProperty(qe,"__esModule",{value:!0});qe.default=Ir;var Pr=_();function Ir(){(0,Pr.injectAppCSS)();let t=document.createElement("div");t.className="card-grid-view",t.innerHTML=`
    <h2 style="color: #00bfff; margin: 0 0 20px 0; font-size: 1.5rem; text-align: center;">Calculator</h2>
    <div style="max-width: 350px; margin: 0 auto;">
      <input type="text" id="calcDisplay" 
             style="width: 100%; height: 60px; margin-bottom: 20px; text-align: right; font-size: 24px; 
                    background: #292d36; border: 2px solid #404040; border-radius: 8px; color: #fff; 
                    padding: 0 16px; font-family: 'Courier New', monospace;" 
             placeholder="0" disabled>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
        <button class="calc-btn operator" data-value="C" style="grid-column: span 2;">Clear</button>
        <button class="calc-btn operator" data-value="backspace">\u232B</button>
        <button class="calc-btn operator" data-value="/">/</button>
        
        <button class="calc-btn number" data-value="7">7</button>
        <button class="calc-btn number" data-value="8">8</button>
        <button class="calc-btn number" data-value="9">9</button>
        <button class="calc-btn operator" data-value="*">\xD7</button>
        
        <button class="calc-btn number" data-value="4">4</button>
        <button class="calc-btn number" data-value="5">5</button>
        <button class="calc-btn number" data-value="6">6</button>
        <button class="calc-btn operator" data-value="-">\u2212</button>
        
        <button class="calc-btn number" data-value="1">1</button>
        <button class="calc-btn number" data-value="2">2</button>
        <button class="calc-btn number" data-value="3">3</button>
        <button class="calc-btn operator" data-value="+">+</button>
        
        <button class="calc-btn number" data-value="0" style="grid-column: span 2;">0</button>
        <button class="calc-btn number" data-value=".">.</button>
        <button class="calc-btn equals" data-value="=">=</button>
      </div>
    </div>
  `;let e=document.createElement("style");e.textContent=`
    .calc-btn {
      height: 60px;
      border: none;
      border-radius: 8px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      user-select: none;
    }
    
    .calc-btn.number {
      background: #292d36;
      color: #fff;
      border: 1px solid #404040;
    }
    
    .calc-btn.number:hover {
      background: #353a45;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,122,204,0.15);
    }
    
    .calc-btn.operator {
      background: #007acc;
      color: #fff;
    }
    
    .calc-btn.operator:hover {
      background: #0066a3;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,122,204,0.3);
    }
    
    .calc-btn.equals {
      background: #28a745;
      color: #fff;
    }
    
    .calc-btn.equals:hover {
      background: #218838;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(40,167,69,0.3);
    }
    
    .calc-btn:active {
      transform: translateY(1px);
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
  `,document.head.appendChild(e);let o="",r="",n="",a=!1,i=t.querySelector("#calcDisplay");function m(c=o||"0"){i.value=c}function s(c){a&&(o="",a=!1),o+=c,m()}function l(c){o===""&&c!=="-"||(n!==""&&o!==""&&r!==""&&p(),r=c,n=o,o="",a=!0)}function p(){if(n===""||o===""||r==="")return;let c,g=parseFloat(n),b=parseFloat(o);switch(r){case"+":c=g+b;break;case"-":c=g-b;break;case"*":c=g*b;break;case"/":c=b!==0?g/b:"Error";break;default:return}o=c.toString(),r="",n="",a=!0,m()}function u(){o="",r="",n="",a=!1,m()}function d(){o.length>0&&(o=o.slice(0,-1),m())}return t.addEventListener("click",c=>{if(!c.target.classList.contains("calc-btn"))return;let g=c.target.dataset.value;g>="0"&&g<="9"||g==="."?s(g):["+","-","*","/"].includes(g)?l(g):g==="="?p():g==="C"?u():g==="backspace"&&d()}),t.addEventListener("keydown",c=>{c.preventDefault(),c.key>="0"&&c.key<="9"||c.key==="."?s(c.key):["+","-","*","/"].includes(c.key)?l(c.key):c.key==="Enter"||c.key==="="?p():c.key==="Escape"||c.key==="c"||c.key==="C"?u():c.key==="Backspace"&&d()}),t.tabIndex=0,setTimeout(()=>{t.focus()},100),t}});var qt=S(Re=>{"use strict";Object.defineProperty(Re,"__esModule",{value:!0});Re.default=Or;var Ar=_();function Or(){(0,Ar.injectAppCSS)();let t=document.createElement("div");t.className="card-grid-view",t.innerHTML=`
    <div class="console-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h2 style="color: #00bfff; margin: 0; font-size: 1.5rem;">JavaScript Console</h2>
      <div style="display: flex; gap: 10px;">
        <button id="dev-tools-btn" class="games-tab" style="border-radius: 6px; background: #6f42c1;">\u{1F527} Developer Tools</button>
        <button id="run-btn" class="games-tab" style="border-radius: 6px; background: #28a745;">\u25B6 Run</button>
        <button id="clear-btn" class="games-tab" style="border-radius: 6px; background: #dc3545;">Clear</button>
      </div>
    </div>
    
    <div style="display: grid; grid-template-rows: 1fr auto 200px; gap: 16px; height: 500px;">
      <div class="code-editor-container">
        <div style="background: #292d36; border-radius: 8px 8px 0 0; padding: 8px 16px; border-bottom: 1px solid #404040;">
          <span style="color: #00bfff; font-size: 0.9rem; font-weight: 600;">Code Editor</span>
        </div>
        <textarea id="code-input" 
                  placeholder="// Write your JavaScript code here...
console.log('Hello World!');
Math.sqrt(16);
[1,2,3].map(x => x * 2);"
                  style="width: 100%; height: calc(100% - 40px); background: #1e1e1e; color: #d4d4d4; 
                         border: none; border-radius: 0 0 8px 8px; padding: 16px; font-family: 'Consolas', 'Courier New', monospace; 
                         font-size: 14px; resize: none; outline: none; line-height: 1.5;"></textarea>
      </div>
      
      <div class="output-container">
        <div style="background: #292d36; border-radius: 8px 8px 0 0; padding: 8px 16px; border-bottom: 1px solid #404040;">
          <span style="color: #00bfff; font-size: 0.9rem; font-weight: 600;">Output</span>
        </div>
        <div id="output" 
             style="width: 100%; height: calc(100% - 40px); background: #1a1a1a; color: #d4d4d4; 
                    border: none; border-radius: 0 0 8px 8px; padding: 16px; font-family: 'Consolas', 'Courier New', monospace; 
                    font-size: 14px; overflow-y: auto; white-space: pre-wrap;"></div>
      </div>
    </div>
  `;let e=document.createElement("style");e.textContent=`
    .code-editor-container, .output-container {
      background: #292d36;
      border-radius: 8px;
      border: 1px solid #404040;
      overflow: hidden;
    }
    
    #code-input:focus {
      box-shadow: 0 0 0 2px rgba(0, 191, 255, 0.3);
    }
    
    .console-output-line {
      margin: 4px 0;
      padding: 2px 0;
    }
    
    .console-error {
      color: #f85149;
    }
    
    .console-warning {
      color: #d29922;
    }
    
    .console-success {
      color: #56d364;
    }
    
    .console-info {
      color: #79c0ff;
    }
    
    .console-timestamp {
      color: #7d8590;
      font-size: 12px;
    }
  `,document.head.appendChild(e);let o=t.querySelector("#code-input"),r=t.querySelector("#output"),n=t.querySelector("#run-btn"),a=t.querySelector("#clear-btn"),i=t.querySelector("#dev-tools-btn"),m={},s=[];function l(){m.log=console.log,m.error=console.error,m.warn=console.warn,m.info=console.info,console.log=(...h)=>{m.log(...h),d(h.map(v=>u(v)).join(" "),"info")},console.error=(...h)=>{m.error(...h),d(h.map(v=>u(v)).join(" "),"error")},console.warn=(...h)=>{m.warn(...h),d(h.map(v=>u(v)).join(" "),"warning")},console.info=(...h)=>{m.info(...h),d(h.map(v=>u(v)).join(" "),"info")}}function p(){console.log=m.log,console.error=m.error,console.warn=m.warn,console.info=m.info}function u(h){if(typeof h=="string")return`"${h}"`;if(typeof h=="object")try{return JSON.stringify(h,null,2)}catch{return String(h)}return String(h)}function d(h,v="info"){let w=new Date().toLocaleTimeString(),E=document.createElement("div");E.className=`console-output-line console-${v}`,E.innerHTML=`<span class="console-timestamp">[${w}]</span> ${h}`,r.appendChild(E),r.scrollTop=r.scrollHeight}function c(){let h=o.value.trim();if(!h){d("No code to execute.","warning");return}d(`> ${h}`,"info");try{if([/document\.write/i,/window\.location/i,/eval\s*\(/i,/setTimeout\s*\(/i,/setInterval\s*\(/i,/alert\s*\(/i,/confirm\s*\(/i].some(T=>T.test(h))){d("Error: Potentially unsafe code detected. Please use safer alternatives.","error");return}l();let E;try{E=Function('"use strict"; return ('+h+")")()}catch(T){try{E=Function('"use strict"; '+h)()}catch{throw T}}E!==void 0&&d(`\u2190 ${u(E)}`,"success")}catch(v){d(`Error: ${v.name}: ${v.message}`,"error")}finally{p()}}function g(){r.innerHTML="",d("Console cleared.","info")}function b(){let h=document.getElementById("dev-tools-window");if(h){h.style.display="flex";return}let v=document.createElement("div");v.id="dev-tools-window",v.style.cssText=`
      position: fixed;
      top: 10%;
      left: 10%;
      width: 80%;
      height: 70%;
      background: #23272f;
      border: 1px solid #404040;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
      z-index: 100001;
      display: flex;
      flex-direction: column;
      color: #fff;
      font-family: system-ui, -apple-system, sans-serif;
    `;let w=document.createElement("div");w.style.cssText=`
      height: 40px;
      background: linear-gradient(135deg, #23272f, #2a2e37);
      border-bottom: 1px solid #404040;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      border-radius: 12px 12px 0 0;
      cursor: move;
      user-select: none;
    `;let E=document.createElement("div");E.innerHTML='<span style="font-size: 1.1rem;">\u{1F527}</span> <span style="color: #00bfff; font-weight: 600;">Developer Tools</span>';let T=document.createElement("button");T.innerHTML="\xD7",T.style.cssText=`
      background: #ef4444;
      border: none;
      border-radius: 4px;
      color: white;
      width: 24px;
      height: 24px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
    `,T.addEventListener("click",()=>v.remove()),w.appendChild(E),w.appendChild(T);let L=document.createElement("div");L.style.cssText=`
      display: flex;
      background: #292d36;
      border-bottom: 1px solid #404040;
      padding: 0 16px;
    `;let Z=[{id:"json",label:"JSON Formatter",icon:"\u{1F4C4}"},{id:"css",label:"CSS Editor",icon:"\u{1F3A8}"},{id:"inspector",label:"HTML Inspector",icon:"\u{1F50D}"}],P="json",V={},$={};Z.forEach(z=>{let f=document.createElement("button");f.innerHTML=`${z.icon} ${z.label}`,f.style.cssText=`
        background: none;
        border: none;
        color: #aaa;
        padding: 12px 16px;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        transition: all 0.2s;
      `,z.id===P&&(f.style.color="#00bfff",f.style.borderBottomColor="#00bfff"),f.addEventListener("click",()=>X(z.id)),V[z.id]=f,L.appendChild(f)});let U=document.createElement("div");U.style.cssText=`
      flex: 1;
      padding: 20px;
      overflow-y: auto;
    `;let j=document.createElement("div");j.style.display="block",j.innerHTML=`
      <div style="margin-bottom: 16px;">
        <h3 style="color: #00bfff; margin: 0 0 12px 0;">JSON Formatter & Validator</h3>
        <div style="display: flex; gap: 12px; margin-bottom: 12px;">
          <button id="format-json" style="background: #28a745; border: none; color: white; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Format</button>
          <button id="minify-json" style="background: #ffc107; border: none; color: black; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Minify</button>
          <button id="validate-json" style="background: #17a2b8; border: none; color: white; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Validate</button>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; height: calc(100% - 80px);">
        <div>
          <label style="display: block; margin-bottom: 8px; color: #00bfff;">Input JSON:</label>
          <textarea id="json-input" placeholder='{"name": "John", "age": 30}' style="width: 100%; height: 300px; background: #1e1e1e; color: #d4d4d4; border: 1px solid #404040; border-radius: 4px; padding: 12px; font-family: monospace; resize: none;"></textarea>
        </div>
        <div>
          <label style="display: block; margin-bottom: 8px; color: #00bfff;">Output:</label>
          <div id="json-output" style="width: 100%; height: 300px; background: #1a1a1a; border: 1px solid #404040; border-radius: 4px; padding: 12px; font-family: monospace; overflow-y: auto; white-space: pre-wrap; color: #d4d4d4;"></div>
        </div>
      </div>
    `;let F=document.createElement("div");F.style.display="none",F.innerHTML=`
      <div style="margin-bottom: 16px;">
        <h3 style="color: #00bfff; margin: 0 0 12px 0;">Live CSS Editor</h3>
        <div style="display: flex; gap: 12px; margin-bottom: 12px;">
          <button id="apply-css" style="background: #28a745; border: none; color: white; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Apply CSS</button>
          <button id="reset-css" style="background: #dc3545; border: none; color: white; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Reset</button>
        </div>
      </div>
      <div>
        <label style="display: block; margin-bottom: 8px; color: #00bfff;">CSS Rules (will be applied to current page):</label>
        <textarea id="css-editor" placeholder="/* Add your CSS here */
body {
  background-color: #000;
  color: #fff;
}

.example {
  border: 1px solid #00bfff;
}" style="width: 100%; height: 350px; background: #1e1e1e; color: #d4d4d4; border: 1px solid #404040; border-radius: 4px; padding: 12px; font-family: monospace; resize: none;"></textarea>
      </div>
    `;let D=document.createElement("div");D.style.display="none",D.innerHTML=`
      <div style="margin-bottom: 16px;">
        <h3 style="color: #00bfff; margin: 0 0 12px 0;">HTML Element Inspector</h3>
        <div style="display: flex; gap: 12px; margin-bottom: 12px;">
          <button id="start-inspect" style="background: #17a2b8; border: none; color: white; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Start Inspecting</button>
          <button id="stop-inspect" style="background: #6c757d; border: none; color: white; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Stop Inspecting</button>
          <button id="apply-changes" style="background: #28a745; border: none; color: white; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Apply Changes</button>
        </div>
      </div>
      <div style="display: grid; grid-template-rows: auto 1fr; gap: 16px; height: calc(100% - 80px);">
        <div id="selected-element" style="background: #292d36; padding: 12px; border-radius: 4px; border: 1px solid #404040;">
          <strong style="color: #00bfff;">Selected Element:</strong> <span id="element-path">None selected</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <label style="display: block; margin-bottom: 8px; color: #00bfff;">Element HTML:</label>
            <textarea id="element-html" style="width: 100%; height: 250px; background: #1e1e1e; color: #d4d4d4; border: 1px solid #404040; border-radius: 4px; padding: 12px; font-family: monospace; resize: none;"></textarea>
          </div>
          <div>
            <label style="display: block; margin-bottom: 8px; color: #00bfff;">Element Styles:</label>
            <textarea id="element-styles" placeholder="color: red;
background: blue;
font-size: 16px;" style="width: 100%; height: 250px; background: #1e1e1e; color: #d4d4d4; border: 1px solid #404040; border-radius: 4px; padding: 12px; font-family: monospace; resize: none;"></textarea>
          </div>
        </div>
      </div>
    `,$.json=j,$.css=F,$.inspector=D,U.appendChild(j),U.appendChild(F),U.appendChild(D);function X(z){P=z,Object.keys(V).forEach(f=>{let C=V[f];f===z?(C.style.color="#00bfff",C.style.borderBottomColor="#00bfff"):(C.style.color="#aaa",C.style.borderBottomColor="transparent")}),Object.keys($).forEach(f=>{$[f].style.display=f===z?"block":"none"})}v.appendChild(w),v.appendChild(L),v.appendChild(U),document.body.appendChild(v);let Y=!1,G={x:0,y:0};w.addEventListener("mousedown",z=>{Y=!0;let f=v.getBoundingClientRect();G.x=z.clientX-f.left,G.y=z.clientY-f.top,w.style.cursor="grabbing"}),document.addEventListener("mousemove",z=>{if(!Y)return;let f=z.clientX-G.x,C=z.clientY-G.y;f=Math.max(0,Math.min(f,window.innerWidth-v.offsetWidth)),C=Math.max(0,Math.min(C,window.innerHeight-v.offsetHeight)),v.style.left=f+"px",v.style.top=C+"px"}),document.addEventListener("mouseup",()=>{Y=!1,w.style.cursor="move"}),y(),x(),k()}function y(){let h=document.getElementById("format-json"),v=document.getElementById("minify-json"),w=document.getElementById("validate-json"),E=document.getElementById("json-input"),T=document.getElementById("json-output");h.addEventListener("click",()=>{try{let L=JSON.parse(E.value);T.textContent=JSON.stringify(L,null,2),T.style.color="#56d364"}catch(L){T.textContent=`Error: ${L.message}`,T.style.color="#f85149"}}),v.addEventListener("click",()=>{try{let L=JSON.parse(E.value);T.textContent=JSON.stringify(L),T.style.color="#56d364"}catch(L){T.textContent=`Error: ${L.message}`,T.style.color="#f85149"}}),w.addEventListener("click",()=>{try{JSON.parse(E.value),T.textContent="\u2713 Valid JSON",T.style.color="#56d364"}catch(L){T.textContent=`\u2717 Invalid JSON: ${L.message}`,T.style.color="#f85149"}})}function x(){let h=document.getElementById("apply-css"),v=document.getElementById("reset-css"),w=document.getElementById("css-editor"),E=null;h.addEventListener("click",()=>{E&&E.remove(),E=document.createElement("style"),E.id="dev-tools-applied-css",E.textContent=w.value,document.head.appendChild(E)}),v.addEventListener("click",()=>{E&&(E.remove(),E=null)})}function k(){let h=document.getElementById("start-inspect"),v=document.getElementById("stop-inspect"),w=document.getElementById("apply-changes"),E=document.getElementById("element-path"),T=document.getElementById("element-html"),L=document.getElementById("element-styles"),Z=!1,P=null,V=null,$=document.getElementById("dev-tools-window");h.addEventListener("click",()=>{Z=!0,h.style.background="#dc3545",h.textContent="Inspecting... (Click element)",document.body.style.cursor="crosshair",$&&($.style.display="none"),V=j=>{j.preventDefault(),j.stopPropagation(),P=j.target;let F=P.tagName.toLowerCase(),D=P.className?`.${P.className.split(" ").join(".")}`:"",X=P.id?`#${P.id}`:"";E.textContent=`${F}${X}${D}`,T.value=P.outerHTML;let Y=window.getComputedStyle(P),G=["color","background-color","font-size","font-weight","margin","padding","border","width","height","display"],z="";G.forEach(f=>{let C=Y.getPropertyValue(f);C&&C!=="none"&&C!=="auto"&&(z+=`${f}: ${C};
`)}),L.value=z,U()},document.addEventListener("click",V,!0)});function U(){Z=!1,h.style.background="#17a2b8",h.textContent="Start Inspecting",document.body.style.cursor="",$&&($.style.display="flex"),V&&document.removeEventListener("click",V,!0)}v.addEventListener("click",U),w.addEventListener("click",()=>{if(P){try{let j=T.value;P.outerHTML=j}catch(j){console.error("Failed to apply HTML changes:",j)}P&&L.value&&L.value.split(`
`).filter(F=>F.trim()).forEach(F=>{let[D,X]=F.split(":").map(Y=>Y.trim());D&&X&&P.style.setProperty(D,X.replace(";",""))})}})}return n.addEventListener("click",c),a.addEventListener("click",g),i.addEventListener("click",b),o.addEventListener("keydown",h=>{if((h.ctrlKey||h.metaKey)&&h.key==="Enter"&&(h.preventDefault(),c()),h.key==="Tab"){h.preventDefault();let v=o.selectionStart,w=o.selectionEnd;o.value=o.value.substring(0,v)+"  "+o.value.substring(w),o.selectionStart=o.selectionEnd=v+2}}),d("JavaScript Console ready. Type your code above and click 'Run' or press Ctrl+Enter.","info"),t}});var Rt=S(Ve=>{"use strict";Object.defineProperty(Ve,"__esModule",{value:!0});Ve.default=Hr;var jr=_();function Hr(){(0,jr.injectAppCSS)();let t=document.createElement("div");t.className="card-grid-view",t.innerHTML=`
    <div class="cloaking-header" style="margin-bottom: 30px;">
      <h2 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1.5rem;">Tab Cloaking</h2>
      <p style="color: #aaa; margin: 0; font-size: 0.95rem;">Change your tab's title and icon to disguise this page</p>
    </div>

    <div class="cloaking-presets" style="margin-bottom: 30px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Quick Presets</h3>
      <div class="card-list" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
        <div class="card-item preset-card" data-title="Google" data-icon="https://www.google.com/favicon.ico">
          <div class="card-title">Google</div>
          <div class="card-desc">Search engine homepage</div>
        </div>
        <div class="card-item preset-card" data-title="Gmail" data-icon="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico">
          <div class="card-title">Gmail</div>
          <div class="card-desc">Email service</div>
        </div>
        <div class="card-item preset-card" data-title="Clever | Portal" data-icon="https://assets.clever.com/launchpad/c4a9bd82e/favicon.ico">
          <div class="card-title">Clever</div>
          <div class="card-desc">Education platform</div>
        </div>
        <div class="card-item preset-card" data-title="Google Drive" data-icon="https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png">
          <div class="card-title">Google Drive</div>
          <div class="card-desc">Cloud storage</div>
        </div>
        <div class="card-item preset-card" data-title="Google Docs" data-icon="https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico">
          <div class="card-title">Google Docs</div>
          <div class="card-desc">Document editor</div>
        </div>
        <div class="card-item preset-card" data-title="Canvas" data-icon="https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico">
          <div class="card-title">Canvas</div>
          <div class="card-desc">Learning management</div>
        </div>
      </div>
    </div>

    <div class="cloaking-custom" style="margin-bottom: 20px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Custom Cloaking</h3>
      <div style="display: grid; gap: 16px;">
        <div>
          <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">Tab Title</label>
          <input type="text" id="title-input" placeholder="Enter new tab title (e.g., Google)" 
                 style="width: 100%; padding: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        </div>
        <div>
          <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">Tab Icon URL</label>
          <input type="text" id="icon-input" placeholder="Enter favicon URL (e.g., https://www.google.com/favicon.ico)" 
                 style="width: 100%; padding: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        </div>
        <div style="display: flex; gap: 12px; margin-top: 8px;">
          <button id="apply-btn" class="games-tab" style="border-radius: 6px; background: #28a745;">Apply Cloaking</button>
          <button id="stop-btn" class="games-tab" style="border-radius: 6px; background: #dc3545;">Stop Cloaking</button>
          <button id="reset-btn" class="games-tab" style="border-radius: 6px; background: #6c757d;">Reset to Original</button>
        </div>
      </div>
    </div>

    <div class="cloaking-status">
      <div style="background: #292d36; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
        <h4 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1rem;">Status</h4>
        <div id="status-display" style="color: #aaa; font-size: 0.9rem;">Ready to cloak</div>
      </div>
    </div>
  `;let e=t.querySelector("#title-input"),o=t.querySelector("#icon-input"),r=t.querySelector("#apply-btn"),n=t.querySelector("#stop-btn"),a=t.querySelector("#reset-btn"),i=t.querySelector("#status-display"),m=t.querySelectorAll(".preset-card"),s=null,l=document.title,p=document.querySelector("link[rel*='icon']")?.href||"";function u(b,y="info"){i.textContent=b,i.style.color=y==="success"?"#56d364":y==="error"?"#f85149":y==="warning"?"#d29922":"#aaa"}function d(b,y){function x(){try{if(b&&(document.title=b),y){let k=document.querySelector("link[rel*='icon']")||document.createElement("link");k.type="image/x-icon",k.rel="shortcut icon",k.href=y,document.querySelector("link[rel*='icon']")||document.getElementsByTagName("head")[0].appendChild(k)}}catch(k){console.error("Cloaking error:",k)}}s&&clearInterval(s),x(),s=setInterval(x,3e3),u(`Active: "${b||"Title unchanged"}" with custom icon`,"success")}function c(){s?(clearInterval(s),s=null,u("Cloaking stopped","warning")):u("No active cloaking to stop","warning")}function g(){c(),document.title=l;let b=document.querySelector("link[rel*='icon']");b&&p&&(b.href=p),e.value="",o.value="",u("Reset to original title and icon","info")}return r.addEventListener("click",()=>{let b=e.value.trim(),y=o.value.trim();if(!b&&!y){u("Please enter a title or icon URL","error");return}d(b,y)}),n.addEventListener("click",c),a.addEventListener("click",g),m.forEach(b=>{b.addEventListener("click",()=>{let y=b.dataset.title,x=b.dataset.icon;e.value=y,o.value=x,d(y,x)})}),o.addEventListener("input",()=>{let b=o.value.trim();if(b)try{new URL(b),o.style.borderColor="#28a745"}catch{o.style.borderColor="#dc3545"}else o.style.borderColor="#404040"}),window.addEventListener("beforeunload",()=>{s&&clearInterval(s)}),t}});var Vt=S(Ue=>{"use strict";Object.defineProperty(Ue,"__esModule",{value:!0});Ue.default=Fr;var Nr=_();function Fr(){(0,Nr.injectAppCSS)();let t=document.createElement("div");t.className="card-grid-view",t.innerHTML=`
    <div class="flood-header" style="margin-bottom: 30px;">
      <h2 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1.5rem;">History Flood</h2>
      <p style="color: #aaa; margin: 0; font-size: 0.95rem;">Add multiple entries of the current page to browser history</p>
    </div>

    <div class="flood-presets" style="margin-bottom: 30px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Quick Amounts</h3>
      <div class="card-list" style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));">
        <div class="card-item preset-amount" data-amount="10">
          <div class="card-title">10 Entries</div>
          <div class="card-desc">Light flooding</div>
        </div>
        <div class="card-item preset-amount" data-amount="50">
          <div class="card-title">50 Entries</div>
          <div class="card-desc">Medium flooding</div>
        </div>
        <div class="card-item preset-amount" data-amount="100">
          <div class="card-title">100 Entries</div>
          <div class="card-desc">Heavy flooding</div>
        </div>
        <div class="card-item preset-amount" data-amount="500">
          <div class="card-title">500 Entries</div>
          <div class="card-desc">Extreme flooding</div>
        </div>
      </div>
    </div>

    <div class="flood-custom" style="margin-bottom: 20px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Custom Amount</h3>
      <div style="display: grid; gap: 16px;">
        <div>
          <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">Number of History Entries</label>
          <input type="number" id="flood-input" placeholder="Enter amount (1-1000)" min="1" max="1000"
                 style="width: 100%; padding: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        </div>
        <div style="display: flex; gap: 12px; margin-top: 8px;">
          <button id="flood-btn" class="games-tab" style="border-radius: 6px; background: #007acc;">Flood History</button>
          <button id="clear-input-btn" class="games-tab" style="border-radius: 6px; background: #6c757d;">Clear</button>
        </div>
      </div>
    </div>

    <div class="flood-info" style="margin-bottom: 20px;">
      <div style="background: #292d36; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
        <h4 style="color: #d29922; margin: 0 0 8px 0; font-size: 1rem;">\u26A0\uFE0F How History Flooding Works</h4>
        <ul style="color: #aaa; font-size: 0.9rem; margin: 8px 0; padding-left: 20px;">
          <li>Adds multiple entries of the current page to browser history</li>
          <li>Makes it harder to navigate back using browser back button</li>
          <li>Creates the appearance of visiting this page multiple times</li>
          <li>Higher numbers create more difficulty going back</li>
        </ul>
      </div>
    </div>

    <div class="flood-status">
      <div style="background: #292d36; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
        <h4 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1rem;">Status</h4>
        <div id="status-display" style="color: #aaa; font-size: 0.9rem;">Ready to flood history</div>
      </div>
    </div>
  `;let e=t.querySelector("#flood-input"),o=t.querySelector("#flood-btn"),r=t.querySelector("#clear-input-btn"),n=t.querySelector("#status-display"),a=t.querySelectorAll(".preset-amount");function i(s,l="info"){n.textContent=s,n.style.color=l==="success"?"#56d364":l==="error"?"#f85149":l==="warning"?"#d29922":"#aaa"}function m(s){if(isNaN(s)||s<=0||s>1e3){i("Please enter a valid number between 1 and 1000","error");return}i(`Flooding history with ${s} entries...`,"warning");try{let u=function(){let d=Math.min(10,s-p);for(let c=0;c<d;c++)p++,history.pushState({flood:!0,entry:p},"",p===s?l:`${l}#flood-${p}`);p<s?(requestAnimationFrame(u),i(`Progress: ${p}/${s} entries added`,"warning")):(history.pushState({flood:!0,final:!0},"",l),i(`Success! Added ${s} ${s===1?"entry":"entries"} to history. Current page now appears ${s} times.`,"success"))},l=window.location.href,p=0;u()}catch(l){i(`Error: ${l.message}`,"error")}}return o.addEventListener("click",()=>{let s=parseInt(e.value,10);m(s)}),r.addEventListener("click",()=>{e.value="",i("Input cleared","info")}),a.forEach(s=>{s.addEventListener("click",()=>{let l=parseInt(s.dataset.amount,10);e.value=l,m(l)})}),e.addEventListener("input",()=>{let s=parseInt(e.value,10);isNaN(s)||s<=0?e.style.borderColor="#dc3545":s>1e3?(e.style.borderColor="#d29922",i("Warning: Maximum recommended is 1000 entries","warning")):(e.style.borderColor="#28a745",i(`Ready to add ${s} ${s===1?"entry":"entries"}`,"info"))}),e.addEventListener("keypress",s=>{s.key==="Enter"&&o.click()}),t}});var Ut=S(Ge=>{"use strict";Object.defineProperty(Ge,"__esModule",{value:!0});Ge.default=Dr;var $r=_();function Dr(){(0,$r.injectAppCSS)();let t=document.createElement("div");t.className="card-grid-view",t.innerHTML=`
    <div class="proxy-header" style="margin-bottom: 30px;">
      <h2 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1.5rem;">CORS Proxy</h2>
      <p style="color: #aaa; margin: 0; font-size: 0.95rem;">Access websites that normally block cross-origin requests</p>
    </div>

    <div class="proxy-presets" style="margin-bottom: 20px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Quick Access</h3>
      <div class="card-list" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
        <div class="card-item preset-site" data-url="https://httpbin.org/get">
          <div class="card-title">Test API</div>
          <div class="card-desc">httpbin.org/get - Test the proxy functionality</div>
        </div>
        <div class="card-item preset-site" data-url="https://jsonplaceholder.typicode.com/posts/1">
          <div class="card-title">JSON API</div>
          <div class="card-desc">JSONPlaceholder - Sample JSON data</div>
        </div>
        <div class="card-item preset-site" data-url="https://api.github.com/users/octocat">
          <div class="card-title">GitHub API</div>
          <div class="card-desc">GitHub user data example</div>
        </div>
        <div class="card-item preset-site" data-url="https://reqres.in/api/users">
          <div class="card-title">ReqRes API</div>
          <div class="card-desc">Sample REST API for testing</div>
        </div>
      </div>
    </div>

    <div class="proxy-custom" style="margin-bottom: 20px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Custom URL</h3>
      <div style="display: grid; gap: 16px;">
        <div>
          <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">Target URL</label>
          <input type="text" id="url-input" placeholder="https://example.com/api/data" 
                 style="width: 100%; padding: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        </div>
        <div style="display: flex; gap: 12px; margin-top: 8px;">
          <button id="fetch-btn" class="games-tab" style="border-radius: 6px; background: #007acc;">Fetch via Proxy</button>
          <button id="open-new-tab-btn" class="games-tab" style="border-radius: 6px; background: #28a745;">Open in New Tab</button>
          <button id="clear-url-btn" class="games-tab" style="border-radius: 6px; background: #6c757d;">Clear</button>
        </div>
      </div>
    </div>

    <div class="proxy-options" style="margin-bottom: 15px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Proxy Settings</h3>
      <div style="background: #292d36; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
        <div style="display: grid; gap: 12px;">
          <div>
            <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">Proxy Service</label>
            <select id="proxy-service" style="width: 100%; padding: 8px; background: #1e1e1e; border: 1px solid #404040; border-radius: 4px; color: #fff;">
              <option value="https://api.codetabs.com/v1/proxy?quest=">CodeTabs Proxy</option>
              <option value="https://cors-anywhere.herokuapp.com/">CORS Anywhere</option>
              <option value="https://api.allorigins.win/get?url=">AllOrigins</option>
            </select>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <input type="checkbox" id="json-format" style="margin: 0;">
            <label for="json-format" style="color: #aaa; font-size: 0.9rem;">Try to format JSON response</label>
          </div>
        </div>
      </div>
    </div>

    <div class="proxy-status">
      <div style="background: #292d36; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
        <h4 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1rem;">Status</h4>
        <div id="status-display" style="color: #aaa; font-size: 0.9rem;">Ready to fetch URLs</div>
        <div id="response-preview" style="margin-top: 12px; max-height: 200px; overflow-y: auto; background: #1e1e1e; padding: 12px; border-radius: 4px; font-family: 'Consolas', monospace; font-size: 0.85rem; color: #d4d4d4; display: none;"></div>
      </div>
    </div>
  `;let e=t.querySelector("#url-input"),o=t.querySelector("#fetch-btn"),r=t.querySelector("#open-new-tab-btn"),n=t.querySelector("#clear-url-btn"),a=t.querySelector("#proxy-service"),i=t.querySelector("#json-format"),m=t.querySelector("#status-display"),s=t.querySelector("#response-preview"),l=t.querySelectorAll(".preset-site");function p(y,x="info"){m.textContent=y,m.style.color=x==="success"?"#56d364":x==="error"?"#f85149":x==="warning"?"#d29922":"#aaa"}function u(y){try{return new URL(y),y.startsWith("http://")||y.startsWith("https://")}catch{return!1}}function d(y){if(!i.checked)return y;try{let x=JSON.parse(y);return JSON.stringify(x,null,2)}catch{return y}}function c(y){s.textContent=d(y),s.style.display="block"}function g(){s.style.display="none"}async function b(y,x=!1){if(!u(y)){p("Please enter a valid URL starting with http:// or https://","error");return}let h=a.value+encodeURIComponent(y);p(`Fetching ${y} via proxy...`,"warning"),g();try{let v=await fetch(h);if(!v.ok)throw new Error(`HTTP ${v.status}: ${v.statusText}`);let w=await v.text();if(x){let E=window.open();E?(E.document.write(w),E.document.close(),p(`Successfully opened ${y} in new tab`,"success")):p("Failed to open new tab - popup might be blocked","error")}else c(w),p(`Successfully fetched ${y} (${w.length} characters)`,"success")}catch(v){p(`Error: ${v.message}`,"error"),g()}}return o.addEventListener("click",()=>{let y=e.value.trim();b(y,!1)}),r.addEventListener("click",()=>{let y=e.value.trim();b(y,!0)}),n.addEventListener("click",()=>{e.value="",g(),p("Input cleared","info")}),l.forEach(y=>{y.addEventListener("click",()=>{let x=y.dataset.url;e.value=x,b(x,!1)})}),e.addEventListener("input",()=>{let y=e.value.trim();y?u(y)?(e.style.borderColor="#28a745",p(`Ready to fetch: ${y}`,"info")):(e.style.borderColor="#dc3545",p("Please enter a valid URL (must start with http:// or https://)","error")):(e.style.borderColor="#404040",p("Ready to fetch URLs","info"))}),e.addEventListener("keypress",y=>{y.key==="Enter"&&o.click()}),a.addEventListener("change",()=>{let y=a.options[a.selectedIndex].text;p(`Switched to ${y}`,"info")}),t}});var Jt=S(Je=>{"use strict";Object.defineProperty(Je,"__esModule",{value:!0});Je.default=qr;var _r=_(),Gt=ne();function qr(){(0,_r.injectAppCSS)();let t=null;try{t=(0,Gt.getPocketBrowserSettings)()}catch{console.warn("Could not load pocket browser settings")}let e=t||{homepage:"https://google.com?igu=1",enableHistory:!0,enableBookmarks:!0,enablePopupBlocker:!0,enableSafeSearch:!1,userAgent:"default"},o=document.createElement("div");o.style.cssText=`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #23272f;
    flex-direction: column;
  `,o.style.display="none";let r=document.createElement("div");r.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    background: #292d36;
    border-bottom: 1px solid #404040;
  `;let n=document.createElement("button");n.innerHTML="\u2B05\uFE0F",n.title="Go Back",n.style.cssText=`
    padding: 8px 12px;
    background: #007acc;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;let a=document.createElement("button");a.innerHTML="\u27A1\uFE0F",a.title="Go Forward",a.style.cssText=`
    padding: 8px 12px;
    background: #007acc;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;let i=document.createElement("button");i.innerHTML="\u{1F504}",i.title="Refresh",i.style.cssText=`
    padding: 8px 12px;
    background: #28a745;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;let m=document.createElement("button");m.innerHTML="\u{1F3E0}",m.title="Home",m.style.cssText=`
    padding: 8px 12px;
    background: #6c757d;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;let s=document.createElement("button");s.innerHTML="\u2B50",s.title="Bookmarks",s.style.cssText=`
    padding: 8px 12px;
    background: #ffc107;
    border: none;
    border-radius: 6px;
    color: #000;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
    display: ${e.enableBookmarks?"block":"none"};
  `;let l=document.createElement("button");l.innerHTML="\u{1F4CB}",l.title="Session History",l.style.cssText=`
    padding: 8px 12px;
    background: #17a2b8;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
    display: ${e.enableHistory?"block":"none"};
  `;let p=document.createElement("button");p.innerHTML="\u29C9",p.title="Open in about:blank",p.style.cssText=`
    background: #2d323e;
    border: 1px solid #404040;
    border-radius: 4px;
    color: #fff;
    padding: 6px 10px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
    outline: none;
  `;let u=document.createElement("button");u.innerHTML="\u26F6",u.title="Enter Fullscreen",u.style.cssText=`
    background: #2d323e;
    border: 1px solid #404040;
    border-radius: 4px;
    color: #fff;
    padding: 6px 10px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
    outline: none;
  `;let d=document.createElement("button");d.innerHTML="\u2197\uFE0F",d.title="Open in New Tab",d.style.cssText=`
    background: #17a2b8;
    border: 1px solid #404040;
    border-radius: 4px;
    color: #fff;
    padding: 6px 10px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
    outline: none;
  `;let c=document.createElement("input");c.type="text",c.placeholder="Enter URL and press Enter",c.style.cssText=`
    flex: 1;
    padding: 10px 12px;
    background: #1e1e1e;
    border: 1px solid #404040;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
  `;let g=document.createElement("button");g.innerHTML="Go",g.style.cssText=`
    padding: 10px 16px;
    background: #007acc;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: background 0.2s;
  `,p.addEventListener("mouseenter",()=>{p.style.background="var(--accent-color, #007acc)",p.style.borderColor="var(--accent-color, #007acc)"}),p.addEventListener("mouseleave",()=>{p.style.background="#2d323e",p.style.borderColor="#404040"}),u.addEventListener("mouseenter",()=>{u.style.background="var(--accent-color, #007acc)",u.style.borderColor="var(--accent-color, #007acc)"}),u.addEventListener("mouseleave",()=>{u.style.background="#2d323e",u.style.borderColor="#404040"}),d.addEventListener("mouseenter",()=>{d.style.background="#138496"}),d.addEventListener("mouseleave",()=>{d.style.background="#17a2b8"});let b=[n,a,i,m,g];e.enableBookmarks&&b.push(s),e.enableHistory&&b.push(l),b.forEach(f=>{f.addEventListener("mouseenter",()=>{f===i?f.style.background="#218838":f===m?f.style.background="#5a6268":f===s?f.style.background="#e0a800":f===l?f.style.background="#138496":f.style.background="#0056b3"}),f.addEventListener("mouseleave",()=>{f===i?f.style.background="#28a745":f===m?f.style.background="#6c757d":f===s?f.style.background="#ffc107":f===l?f.style.background="#17a2b8":f.style.background="#007acc"})}),c.addEventListener("focus",()=>{c.style.borderColor="#007acc",c.style.boxShadow="0 0 0 2px rgba(0, 122, 204, 0.3)"}),c.addEventListener("blur",()=>{c.style.borderColor="#404040",c.style.boxShadow="none"}),r.appendChild(n),r.appendChild(a),r.appendChild(i),r.appendChild(m),e.enableBookmarks&&r.appendChild(s),e.enableHistory&&r.appendChild(l),r.appendChild(p),r.appendChild(u),r.appendChild(d),r.appendChild(c),r.appendChild(g);let y=document.createElement("div");y.style.cssText=`
    flex: 1;
    background: #fff;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    min-height: 0;
    height: calc(100% - 60px);
  `;let x=document.createElement("iframe");x.id="ocot-pocket-browser-iframe",x.src=e.homepage,x.style.cssText=`
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  `,e.userAgent&&e.userAgent!=="default"&&{chrome:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",firefox:"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/120.0",safari:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15",mobile:"Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"}[e.userAgent]&&x.setAttribute("sandbox","allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-navigation");let k=[],h=[];try{let f=localStorage.getItem("pocketBrowserBookmarks");f&&(h=JSON.parse(f))}catch(f){console.warn("Could not load bookmarks:",f),h=[]}y.appendChild(x);let v=[e.homepage],w=0;function E(f){if(!f.startsWith("http://")&&!f.startsWith("https://")&&(f=`https://${f}`),x.src=f,c.value=f,w<v.length-1&&(v=v.slice(0,w+1)),v.push(f),w=v.length-1,e.enableHistory){let C={url:f,title:T(f),timestamp:new Date().toISOString()};k.unshift(C),k.length>50&&(k=k.slice(0,50))}L()}function T(f){try{return new URL(f).hostname}catch{return f}}function L(){n.disabled=w<=0,a.disabled=w>=v.length-1,n.style.opacity=n.disabled?"0.5":"1",a.style.opacity=a.disabled?"0.5":"1",n.style.cursor=n.disabled?"not-allowed":"pointer",a.style.cursor=a.disabled?"not-allowed":"pointer"}n.addEventListener("click",()=>{if(w>0){w--;let f=v[w];x.src=f,c.value=f,L()}}),a.addEventListener("click",()=>{if(w<v.length-1){w++;let f=v[w];x.src=f,c.value=f,L()}}),i.addEventListener("click",()=>{x.src=x.src}),m.addEventListener("click",()=>{E(e.homepage)});let Z=()=>{let f=c.value.trim();f&&E(f)};g.addEventListener("click",Z),c.addEventListener("keypress",f=>{f.key==="Enter"&&Z()}),e.enableBookmarks&&s.addEventListener("click",()=>{U()}),e.enableHistory&&l.addEventListener("click",()=>{j()}),p.addEventListener("click",()=>{P()});function P(){let f=x.src,C=window.open();if(!C){console.warn("Popup blocked - unable to open about:blank window");return}let B=C.document.createElement("iframe");B.style.cssText="position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;",B.src=f,C.document.body.appendChild(B)}u.addEventListener("click",()=>{V()});function V(){try{x.requestFullscreen?x.requestFullscreen():x.webkitRequestFullscreen?x.webkitRequestFullscreen():x.msRequestFullscreen?x.msRequestFullscreen():x.mozRequestFullScreen&&x.mozRequestFullScreen()}catch(f){console.warn("Fullscreen not supported or blocked:",f)}}d.addEventListener("click",()=>{$()});function $(){let f=x.src;window.open(f,"_blank")}function U(){let f=F(),C=c.value.trim();if(C){let B=document.createElement("div");B.textContent="\u2B50 Bookmark This Page",B.style.cssText=`
        padding: 10px 15px;
        cursor: pointer;
        border-bottom: 1px solid #404040;
        font-weight: 600;
        color: #ffc107;
        background: rgba(255, 193, 7, 0.1);
      `,B.addEventListener("click",()=>{X(C,T(C)),document.body.removeChild(f)}),B.addEventListener("mouseenter",()=>{B.style.background="rgba(255, 193, 7, 0.2)"}),B.addEventListener("mouseleave",()=>{B.style.background="rgba(255, 193, 7, 0.1)"}),f.appendChild(B)}if(h.length>0)h.forEach((B,M)=>{let O=document.createElement("div");O.style.cssText=`
          padding: 10px 15px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #404040;
        `;let J=document.createElement("div");J.style.cssText=`
          flex: 1;
          min-width: 0;
        `;let ee=document.createElement("div");ee.textContent=B.title||B.url,ee.style.cssText=`
          color: #fff;
          font-weight: 500;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin-bottom: 2px;
        `;let te=document.createElement("div");te.textContent=B.url,te.style.cssText=`
          color: #aaa;
          font-size: 0.8rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        `;let K=document.createElement("span");K.textContent="\u274C",K.style.cssText=`
          margin-left: 10px;
          cursor: pointer;
          font-size: 12px;
          opacity: 0.7;
          transition: opacity 0.2s;
        `,J.appendChild(ee),J.appendChild(te),J.addEventListener("click",()=>{E(B.url),document.body.removeChild(f)}),K.addEventListener("click",Bo=>{Bo.stopPropagation(),Y(M),document.body.removeChild(f)}),K.addEventListener("mouseenter",()=>{K.style.opacity="1"}),K.addEventListener("mouseleave",()=>{K.style.opacity="0.7"}),O.addEventListener("mouseenter",()=>{O.style.background="rgba(0, 122, 204, 0.1)"}),O.addEventListener("mouseleave",()=>{O.style.background="transparent"}),O.appendChild(J),O.appendChild(K),f.appendChild(O)});else{let B=document.createElement("div");B.textContent="No bookmarks yet",B.style.cssText=`
        padding: 20px;
        color: #aaa;
        text-align: center;
        font-style: italic;
      `,f.appendChild(B)}D(f,s)}function j(){let f=F();if(k.length>0){k.slice(0,15).forEach(B=>{let M=document.createElement("div");M.style.cssText=`
          padding: 10px 15px;
          cursor: pointer;
          border-bottom: 1px solid #404040;
        `;let O=document.createElement("div");O.textContent=B.title,O.style.cssText=`
          color: #fff;
          font-weight: 500;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin-bottom: 4px;
        `;let J=document.createElement("div");J.style.cssText=`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `;let ee=document.createElement("span");ee.textContent=B.url,ee.style.cssText=`
          color: #aaa;
          font-size: 0.8rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          flex: 1;
          margin-right: 10px;
        `;let te=document.createElement("span");te.textContent=new Date(B.timestamp).toLocaleTimeString(),te.style.cssText=`
          color: #888;
          font-size: 0.75rem;
        `,J.appendChild(ee),J.appendChild(te),M.appendChild(O),M.appendChild(J),M.addEventListener("click",()=>{E(B.url),document.body.removeChild(f)}),M.addEventListener("mouseenter",()=>{M.style.background="rgba(23, 162, 184, 0.1)"}),M.addEventListener("mouseleave",()=>{M.style.background="transparent"}),f.appendChild(M)});let C=document.createElement("div");C.textContent="\u{1F5D1}\uFE0F Clear Session History",C.style.cssText=`
        padding: 10px 15px;
        cursor: pointer;
        color: #dc3545;
        font-weight: 600;
        border-top: 2px solid #404040;
        margin-top: 5px;
      `,C.addEventListener("click",()=>{k=[],document.body.removeChild(f)}),C.addEventListener("mouseenter",()=>{C.style.background="rgba(220, 53, 69, 0.1)"}),C.addEventListener("mouseleave",()=>{C.style.background="transparent"}),f.appendChild(C)}else{let C=document.createElement("div");C.textContent="No history for this session",C.style.cssText=`
        padding: 20px;
        color: #aaa;
        text-align: center;
        font-style: italic;
      `,f.appendChild(C)}D(f,l)}function F(){let f=document.createElement("div");return f.style.cssText=`
      position: fixed;
      background: #292d36;
      border: 1px solid #404040;
      border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
      z-index: 100002;
      min-width: 300px;
      max-width: 450px;
      max-height: 400px;
      overflow-y: auto;
    `,setTimeout(()=>{let C=B=>{f.contains(B.target)||(document.body.contains(f)&&document.body.removeChild(f),document.removeEventListener("click",C))};document.addEventListener("click",C)},0),f}function D(f,C){let B=C.getBoundingClientRect();f.style.left=B.left+"px",f.style.top=B.bottom+5+"px",document.body.appendChild(f);let M=f.getBoundingClientRect();M.right>window.innerWidth&&(f.style.left=window.innerWidth-M.width-10+"px"),M.bottom>window.innerHeight&&(f.style.top=B.top-M.height-5+"px")}function X(f,C){if(!f||h.some(O=>O.url===f))return;let M={url:f,title:C||T(f),timestamp:new Date().toISOString()};h.unshift(M),h.length>50&&(h=h.slice(0,50));try{localStorage.setItem("pocketBrowserBookmarks",JSON.stringify(h))}catch(O){console.warn("Could not save bookmarks:",O)}}function Y(f){h.splice(f,1);try{localStorage.setItem("pocketBrowserBookmarks",JSON.stringify(h))}catch(C){console.warn("Could not save bookmarks:",C)}}L();function G(){s&&(s.style.display=e.enableBookmarks?"block":"none"),l&&(l.style.display=e.enableHistory?"block":"none")}window.addEventListener("storage",f=>{if(f.key==="pocketBrowserSettings"){let C=(0,Gt.getPocketBrowserSettings)();Object.assign(e,C),G()}}),window.addEventListener("pocketBrowserSettingsChanged",f=>{console.log("Pocket Browser: Settings changed event received",f.detail),Object.assign(e,f.detail),G(),console.log("Pocket Browser: Button visibility updated",{bookmarks:e.enableBookmarks,history:e.enableHistory})}),G();function z(){document.fullscreenElement===x||document.webkitFullscreenElement===x||document.msFullscreenElement===x||document.mozFullScreenElement===x?(u.innerHTML="\u26F6",u.title="Exit Fullscreen (Press Esc)"):(u.innerHTML="\u26F6",u.title="Enter Fullscreen")}return document.addEventListener("fullscreenchange",z),document.addEventListener("webkitfullscreenchange",z),document.addEventListener("msfullscreenchange",z),document.addEventListener("mozfullscreenchange",z),o.appendChild(r),o.appendChild(y),o}});var Wt=S(We=>{"use strict";Object.defineProperty(We,"__esModule",{value:!0});var R=A(),Rr={id:"setblooketcurrency",title:"Set Blooket Currency",description:"Modify your Blooket game currency (crypto, cash, gold, cafeCash)",category:"gaming",async onActivate(){try{if(!window.location.hostname.includes("blooket.com")){(0,R.showModal)("This tool only works on Blooket.com game pages. Please navigate to a Blooket game first.","Wrong Website","warning");return}if(!document.querySelector("body div[id] > div > div")){(0,R.showModal)("Please make sure you're in an active Blooket game before using this tool.","Game Not Detected","warning");return}this.showCurrencyModal()}catch(t){console.error("Blooket Currency Setter Error:",t),(0,R.showModal)("An error occurred while trying to access the Blooket game. Make sure you're in an active game session.","Error","error")}},showCurrencyModal(){let{modal:t,modalContent:e}=(0,R.createBaseModal)("Set Blooket Game Currency","input"),o=document.createElement("div");o.style.cssText=`
      color: var(--text-secondary, #d4d4d4);
      line-height: 1.5;
      margin-bottom: 20px;
      font-size: 0.95rem;
    `,o.innerHTML=`
      <div style="margin-bottom: 12px;">Select the currency type and enter the amount you want to set:</div>
      <div style="background: var(--bg-primary, #1e1e1e); padding: 12px; border-radius: 6px; border-left: 3px solid var(--accent-color, #00bfff);">
        <strong>Currency Types:</strong><br>
        \u2022 <strong>Crypto:</strong> For racing and tower defense games<br>
        \u2022 <strong>Cash:</strong> For general game modes<br>
        \u2022 <strong>Gold:</strong> For adventure and RPG modes<br>
        \u2022 <strong>Cafe Cash:</strong> For cafe-themed games
      </div>
    `,e.appendChild(o);let r=document.createElement("div");r.style.cssText=`
      display: grid;
      gap: 16px;
      margin-bottom: 20px;
    `;let n=document.createElement("div"),a=document.createElement("label");a.textContent="Currency Type:",a.style.cssText=`
      display: block;
      color: var(--text-primary, #fff);
      font-weight: 600;
      margin-bottom: 8px;
    `;let i=document.createElement("select");i.style.cssText=`
      width: 100%;
      padding: 12px;
      background: var(--bg-primary, #1e1e1e);
      border: 1px solid var(--border-color, #404040);
      border-radius: 6px;
      color: var(--text-primary, #fff);
      font-size: 1rem;
      outline: none;
    `,[{value:"crypto",label:"Crypto (Racing/Tower Defense)"},{value:"cash",label:"Cash (General Games)"},{value:"gold",label:"Gold (Adventure/RPG)"},{value:"cafeCash",label:"Cafe Cash (Cafe Games)"}].forEach(k=>{let h=document.createElement("option");h.value=k.value,h.textContent=k.label,i.appendChild(h)});let s=document.createElement("div"),l=document.createElement("label");l.textContent="Amount:",l.style.cssText=`
      display: block;
      color: var(--text-primary, #fff);
      font-weight: 600;
      margin-bottom: 8px;
    `;let p=document.createElement("input");p.type="number",p.placeholder="Enter amount (e.g., 10000)",p.min="0",p.max="999999999",p.style.cssText=`
      width: 100%;
      padding: 12px;
      background: var(--bg-primary, #1e1e1e);
      border: 1px solid var(--border-color, #404040);
      border-radius: 6px;
      color: var(--text-primary, #fff);
      font-size: 1rem;
      outline: none;
      box-sizing: border-box;
    `,i.addEventListener("focus",()=>{i.style.borderColor="var(--accent-color, #00bfff)",i.style.boxShadow="0 0 0 2px rgba(0, 191, 255, 0.3)"}),i.addEventListener("blur",()=>{i.style.borderColor="var(--border-color, #404040)",i.style.boxShadow="none"}),p.addEventListener("focus",()=>{p.style.borderColor="var(--accent-color, #00bfff)",p.style.boxShadow="0 0 0 2px rgba(0, 191, 255, 0.3)"}),p.addEventListener("blur",()=>{p.style.borderColor="var(--border-color, #404040)",p.style.boxShadow="none"}),n.appendChild(a),n.appendChild(i),s.appendChild(l),s.appendChild(p),r.appendChild(n),r.appendChild(s),e.appendChild(r);let u=document.createElement("button");u.textContent="Set to Max",u.style.cssText=`
      width: 100%;
      padding: 12px;
      background: #4CAF50;
      border: none;
      border-radius: 6px;
      color: white;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 20px;
      transition: background-color 0.2s;
    `,u.addEventListener("mouseenter",()=>{u.style.backgroundColor="#45a049"}),u.addEventListener("mouseleave",()=>{u.style.backgroundColor="#4CAF50"}),u.addEventListener("click",()=>{p.value="999999999"}),e.appendChild(u);let d=document.createElement("div");d.style.cssText=`
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    `;let c=document.createElement("button");c.textContent="Cancel",c.style.cssText=`
      padding: 12px 24px;
      background: #6c757d;
      border: none;
      border-radius: 6px;
      color: white;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      transition: background-color 0.2s;
    `;let g=document.createElement("button");g.textContent="Apply Currency",g.style.cssText=`
      padding: 12px 24px;
      background: var(--accent-color, #00bfff);
      border: none;
      border-radius: 6px;
      color: white;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      transition: background-color 0.2s;
    `,c.addEventListener("mouseenter",()=>{c.style.backgroundColor="#545b62"}),c.addEventListener("mouseleave",()=>{c.style.backgroundColor="#6c757d"}),g.addEventListener("mouseenter",()=>{g.style.backgroundColor="var(--accent-color-hover, #0099cc)"}),g.addEventListener("mouseleave",()=>{g.style.backgroundColor="var(--accent-color, #00bfff)"}),d.appendChild(c),d.appendChild(g),e.appendChild(d),setTimeout(()=>p.focus(),100);let b=()=>{(0,R.removeModal)(t)};c.addEventListener("click",b);let y=()=>{let k=parseInt(p.value),h=i.value;if(isNaN(k)||k<0){(0,R.showModal)("Please enter a valid positive number for the amount.","Invalid Amount","warning");return}if(k>999999999){(0,R.showModal)("Amount cannot exceed 999,999,999 to prevent game issues.","Amount Too Large","warning");return}this.setCurrency(h,k),b()};g.addEventListener("click",y),p.addEventListener("keydown",k=>{k.key==="Enter"&&y()});let x=k=>{k.key==="Escape"&&(document.removeEventListener("keydown",x),b())};document.addEventListener("keydown",x),t.addEventListener("click",k=>{k.target===t&&b()}),e._closeButton&&e._closeButton.addEventListener("click",b)},setCurrency(t,e){try{let o=document.querySelector("body div[id] > div > div");if(!o){(0,R.showModal)("Could not find the game interface. Make sure you're in an active Blooket game.","Game Not Found","error");return}let n=Object.values(o)[1]?.children?.[0]?._owner?.stateNode;if(!n){(0,R.showModal)("Could not access the game state. This might be due to a Blooket update or you're not in a compatible game mode.","State Access Failed","error");return}let a=!1,i="";switch(t){case"crypto":i="Crypto",n.setState({crypto:e,crypto2:e}),n.props?.liveGameController?.setVal&&n.props.liveGameController.setVal({path:"c/"+n.props.client.name+"/cr",val:e}),a=!0;break;case"cash":i="Cash",n.setState({cash:e}),a=!0;break;case"gold":i="Gold",n.setState({gold:e,gold2:e}),n.props?.liveGameController?.setVal&&n.props.liveGameController.setVal({path:"c/"+n.props.client.name,val:{b:n.props.client.blook,g:e}}),a=!0;break;case"cafeCash":i="Cafe Cash",n.setState({cafeCash:e}),n.props?.liveGameController?.setVal&&n.props.liveGameController.setVal({path:"c/"+n.props.client.name,val:{b:n.props.client.blook,ca:e}}),a=!0;break;default:(0,R.showModal)("Unknown currency type selected. Please try again.","Invalid Currency","error");return}a&&(0,R.showModal)(`Successfully set ${i} to ${e.toLocaleString()}! The change should be visible in your game interface.`,"Currency Updated","success")}catch(o){console.error("Currency setting error:",o),(0,R.showModal)("Failed to modify the currency. This could be due to a Blooket update or incompatible game mode. Error details are logged in the console.","Currency Update Failed","error")}},getBookmarkletCode(){return'javascript:(function(){const e=document.createElement("div");e.style.position="fixed",e.style.top="20px",e.style.right="20px",e.style.zIndex="9999",e.style.backgroundColor="#f9f9f9",e.style.border="2px%20solid%20#333",e.style.borderRadius="8px",e.style.padding="15px",e.style.boxShadow="0%204px%2012px%20rgba(0,0,0,0.2)",e.style.fontFamily="Arial,sans-serif",e.style.cursor="move",e.setAttribute("id","currencyModal");const%20t=document.createElement("div");t.textContent="Set%20Game%20Currency",t.style.fontWeight="bold",t.style.marginBottom="10px",e.appendChild(t);const%20n=document.createElement("select");["crypto","cash","gold","cafeCash"].forEach(e=>{const%20t=document.createElement("option");t.value=e,t.textContent=e,n.appendChild(t)}),n.style.marginBottom="10px",n.style.width="100%",n.style.padding="8px",n.style.borderRadius="4px",e.appendChild(n);const%20o=document.createElement("input");o.type="number",o.placeholder="Enter%20amount",o.style.width="100%",o.style.padding="8px",o.style.border="1px%20solid%20#ccc",o.style.borderRadius="4px",o.style.boxSizing="border-box",e.appendChild(o);const%20r=document.createElement("button");r.textContent="Set%20to%20Max",r.style.marginTop="10px",r.style.width="100%",r.style.padding="8px",r.style.borderRadius="4px",r.style.backgroundColor="#4CAF50",r.style.color="white",r.style.border="none",r.style.cursor="pointer",r.onclick=function(){o.value="99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"},e.appendChild(r),document.body.appendChild(e),o.addEventListener("keydown",function(e){if("Enter"===e.key){const%20t=Number(o.value),r=n.value,a=Object.values(document.querySelector("body%20div[id]%20>%20div%20>%20div"))[1].children[0]._owner.stateNode;"crypto"===r?(a.setState({crypto:t,crypto2:t}),a.props.liveGameController.setVal({path:"c/"+a.props.client.name+"/cr",val:t})):"cash"===r?a.setState({cash:t}):"gold"===r?(a.setState({gold:t,gold2:t}),a.props.liveGameController.setVal({path:"c/"+a.props.client.name,val:{b:a.props.client.blook,g:t}})):"cafeCash"===r&&(a.setState({cafeCash:t}),a.props.liveGameController.setVal({path:"c/"+a.props.client.name,val:{b:a.props.client.blook,ca:t}}))}});let%20a=!1,d=0,l=0;e.addEventListener("mousedown",function(e){a=!0,d=e.clientX-e.target.offsetLeft,l=e.clientY-e.target.offsetTop}),document.addEventListener("mousemove",function(t){a&&(e.style.left=t.clientX-d+"px",e.style.top=t.clientY-l+"px",e.style.right="auto")}),document.addEventListener("mouseup",function(){a=!1})})();'}};We.default=Rr});var Yt=S(Ye=>{"use strict";Object.defineProperty(Ye,"__esModule",{value:!0});var Q=A(),Vr=re();Ye.default={async onActivate(){let t=()=>new Promise(n=>{let{modal:a,modalContent:i}=(0,Q.createBaseModal)("About:blank Injector","info"),m=document.createElement("div");m.style.cssText=`
          color: var(--text-secondary, #d4d4d4);
          line-height: 1.5;
          margin-bottom: 20px;
          font-size: 0.95rem;
        `,m.innerHTML="Select an injection method to add scripts to a new about:blank page:",i.appendChild(m);let s=document.createElement("div");s.style.cssText=`
          display: grid;
          gap: 16px;
          margin-bottom: 20px;
        `;let l=(x,k,h,v)=>{let w=document.createElement("button");return w.id=x,w.style.cssText=`
            background: var(--bg-secondary, #292d36);
            border: 1px solid var(--border-color, #404040);
            border-radius: 8px;
            padding: 16px;
            color: var(--text-primary, #fff);
            cursor: pointer;
            text-align: left;
            transition: all 0.2s;
            width: 100%;
          `,w.innerHTML=`
            <div style="font-weight: 600; color: var(--accent-color, #00bfff); margin-bottom: 4px;">${k} ${h}</div>
            <div style="color: var(--text-secondary, #aaa); font-size: 0.9rem;">${v}</div>
          `,w.addEventListener("mouseenter",()=>{w.style.background="var(--bg-primary, #2d323e)",w.style.borderColor="var(--accent-color, #007acc)",w.style.transform="translateY(-2px)"}),w.addEventListener("mouseleave",()=>{w.style.background="var(--bg-secondary, #292d36)",w.style.borderColor="var(--border-color, #404040)",w.style.transform="translateY(0)"}),w},p=l("url-option","\u{1F517}","URL Injection","Load a JavaScript file from a URL"),u=l("js-option","\u{1F4DD}","JavaScript Code","Input custom JavaScript code to execute"),d=l("ocot-option","\u{1F527}","Inject Ocot Client","Load the latest Ocot Client from CDN");s.appendChild(p),s.appendChild(u),s.appendChild(d),i.appendChild(s);let c=document.createElement("div");c.style.cssText=`
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        `;let g=document.createElement("button");g.textContent="Cancel",g.style.cssText=`
          padding: 10px 20px;
          background: #6c757d;
          border: none;
          border-radius: 6px;
          color: var(--text-primary, white);
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          transition: background-color 0.2s;
        `,g.addEventListener("mouseenter",()=>{g.style.backgroundColor="#545b62"}),g.addEventListener("mouseleave",()=>{g.style.backgroundColor="#6c757d"}),c.appendChild(g),i.appendChild(c);let b=(x=null)=>{(0,Q.removeModal)(a),n(x)};p.addEventListener("click",()=>b("url")),u.addEventListener("click",()=>b("js")),d.addEventListener("click",()=>b("ocot")),g.addEventListener("click",()=>b(null)),i._closeButton&&i._closeButton.addEventListener("click",()=>b(null));let y=x=>{x.key==="Escape"&&(document.removeEventListener("keydown",y),b(null))};document.addEventListener("keydown",y),a.addEventListener("click",x=>{x.target===a&&b(null)})}),e=n=>{let{modal:a,modalContent:i}=(0,Q.createBaseModal)("JavaScript Code Editor","input"),m=document.createElement("div");m.style.cssText=`
        color: var(--text-secondary, #d4d4d4);
        line-height: 1.5;
        margin-bottom: 16px;
        font-size: 0.95rem;
      `,m.textContent="Write your JavaScript code below. It will be executed in a new about:blank page.",i.appendChild(m);let s=document.createElement("div");s.style.marginBottom="20px";let l=document.createElement("textarea");l.placeholder=`// Write your JavaScript code here...
console.log('Hello from about:blank!');
alert('Code executed successfully!');

// Examples:
// - DOM manipulation
// - API calls  
// - Custom functions
// - Variable declarations`,l.style.cssText=`
        width: 100%;
        height: 300px;
        padding: 16px;
        background: var(--bg-primary, #1e1e1e);
        border: 1px solid var(--border-color, #404040);
        border-radius: 6px;
        color: var(--text-primary, #d4d4d4);
        font-size: 14px;
        font-family: 'Consolas', 'Courier New', 'Monaco', monospace;
        resize: vertical;
        outline: none;
        line-height: 1.5;
        tab-size: 2;
        box-sizing: border-box;
      `,l.addEventListener("focus",()=>{l.style.borderColor="var(--accent-color, #007acc)",l.style.boxShadow="0 0 0 2px rgba(0, 122, 204, 0.3)"}),l.addEventListener("blur",()=>{l.style.borderColor="var(--border-color, #404040)",l.style.boxShadow="none"}),l.addEventListener("keydown",b=>{if(b.key==="Tab"){b.preventDefault();let y=l.selectionStart,x=l.selectionEnd;l.value=l.value.substring(0,y)+"  "+l.value.substring(x),l.selectionStart=l.selectionEnd=y+2}}),l.addEventListener("keydown",b=>{b.key==="Enter"&&(b.ctrlKey||b.metaKey)&&(b.preventDefault(),d.click())}),s.appendChild(l),i.appendChild(s);let p=document.createElement("div");p.style.cssText=`
        display: flex;
        justify-content: flex-end;
        gap: 12px;
      `;let u=document.createElement("button");u.textContent="Cancel",u.style.cssText=`
        padding: 12px 24px;
        background: #6c757d;
        border: none;
        border-radius: 6px;
        color: var(--text-primary, white);
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        transition: background-color 0.2s;
      `,u.addEventListener("mouseenter",()=>{u.style.backgroundColor="#545b62"}),u.addEventListener("mouseleave",()=>{u.style.backgroundColor="#6c757d"});let d=document.createElement("button");d.textContent="Execute",d.style.cssText=`
        padding: 12px 24px;
        background: var(--accent-color, #007acc);
        border: none;
        border-radius: 6px;
        color: var(--text-primary, white);
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        transition: background-color 0.2s;
      `,d.addEventListener("mouseenter",()=>{d.style.backgroundColor="var(--accent-color-hover, #005a9e)"}),d.addEventListener("mouseleave",()=>{d.style.backgroundColor="var(--accent-color, #007acc)"}),p.appendChild(u),p.appendChild(d),i.appendChild(p),setTimeout(()=>l.focus(),100);let c=()=>{(0,Q.removeModal)(a)};u.addEventListener("click",c),i._closeButton&&i._closeButton.addEventListener("click",c),d.addEventListener("click",()=>{let b=l.value.trim();if(!b){(0,Q.showModal)("Please enter some JavaScript code to execute.","Missing Code","warning");return}n(b,!1),c()});let g=b=>{b.key==="Escape"&&(document.removeEventListener("keydown",g),c())};document.addEventListener("keydown",g),a.addEventListener("click",b=>{b.target===a&&c()})},o=(n,a=!1)=>{let i=window.open("about:blank","_blank");if(!i){(0,Q.showModal)("Failed to open new window. Please check your browser's popup settings.","Popup Blocked","error");return}let m=()=>{try{i.document.open(),i.document.write("<!DOCTYPE html><html><head></head><body></body></html>"),i.document.close();let l=i.document.createElement("style");l.textContent=`
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background: #1a1a1a;
              color: #fff;
              margin: 0;
              padding: 20px;
              line-height: 1.6;
            }
            .status-container {
              background: #292d36;
              border-radius: 8px;
              padding: 16px;
              margin-bottom: 20px;
              border-left: 4px solid #00bfff;
            }
            .status-title {
              font-weight: 600;
              color: #00bfff;
              margin-bottom: 8px;
            }
            .status-message {
              color: #aaa;
              font-size: 0.9rem;
            }
            .success { border-left-color: #28a745; }
            .success .status-title { color: #28a745; }
            .error { border-left-color: #dc3545; }
            .error .status-title { color: #dc3545; }
            .warning { border-left-color: #ffc107; }
            .warning .status-title { color: #ffc107; }
            .code-block {
              background: #1e2126;
              border-radius: 4px;
              padding: 12px;
              margin: 8px 0;
              font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
              font-size: 0.85rem;
              border: 1px solid #404040;
              overflow-x: auto;
            }
            .timestamp {
              color: #666;
              font-size: 0.8rem;
            }
          `,i.document.head.appendChild(l);let p=i.document.createElement("div");p.innerHTML=`
            <div class="status-container" id="injection-status">
              <div class="status-title">\u{1F504} Script Injection Status</div>
              <div class="status-message">Initializing script injection...</div>
            </div>
          `,i.document.body.appendChild(p);let u=(c,g,b="info")=>{let y=i.document.getElementById("injection-status");y&&(y.className=`status-container ${b}`,y.innerHTML=`
                <div class="status-title">${c}</div>
                <div class="status-message">${g}</div>
                <div class="timestamp">Last updated: ${new Date().toLocaleTimeString()}</div>
              `)};setTimeout(()=>{try{let c=i.document.createElement("script");if(a){u("\u{1F517} Loading External Script",`Fetching: ${n}`),c.src=n;let g=setTimeout(()=>{u("\u23F0 Script Load Timeout",`Script failed to load within 10 seconds. This may be due to network issues or CORS restrictions.<br><br>
                    <strong>Troubleshooting:</strong><br>
                    \u2022 Check if the URL is accessible<br>
                    \u2022 Verify CORS headers allow cross-origin requests<br>
                    \u2022 Try a different script URL<br><br>
                    <div class="code-block">URL: ${n}</div>`,"warning")},1e4);c.onload=()=>{clearTimeout(g),u("\u2705 Script Loaded Successfully",`External script has been loaded and executed successfully.<br><br>
                    <div class="code-block">URL: ${n}</div>
                    <br>Check the browser console for any script output.`,"success")},c.onerror=b=>{clearTimeout(g),u("\u274C Script Load Failed",`Failed to load external script. This is likely due to:<br><br>
                    <strong>Common causes:</strong><br>
                    \u2022 CORS (Cross-Origin Resource Sharing) restrictions<br>
                    \u2022 Network connectivity issues<br>
                    \u2022 Invalid or inaccessible URL<br>
                    \u2022 Server-side blocking of cross-origin requests<br><br>
                    <div class="code-block">URL: ${n}</div>
                    <br><strong>Suggestion:</strong> Try copying the script content and using 'Direct JavaScript Code' option instead.`,"error")}}else{u("\u{1F4DD} Executing Inline Script","Processing JavaScript code...");try{c.textContent=n;let g=i.document.createElement("script");g.textContent=`
                    try {
                      ${n}
                      console.log('\u2705 Inline script executed successfully');
                    } catch (error) {
                      console.error('\u274C Script execution error:', error);
                      const statusEl = document.getElementById('injection-status');
                      if (statusEl) {
                        statusEl.className = 'status-container error';
                        statusEl.innerHTML = \`
                          <div class="status-title">\u274C Script Execution Error</div>
                          <div class="status-message">
                            JavaScript execution failed:<br><br>
                            <div class="code-block">\${error.name}: \${error.message}</div>
                            <br>Please check your JavaScript syntax and try again.
                          </div>
                          <div class="timestamp">Last updated: \${new Date().toLocaleTimeString()}</div>
                        \`;
                      }
                    }
                  `,i.document.head.appendChild(g),u("\u2705 Script Executed Successfully",`Inline JavaScript code has been executed.<br><br>
                    <div class="code-block">${n.length>200?n.substring(0,200)+"...":n}</div>
                    <br>Check the browser console for any script output.`,"success")}catch(g){u("\u274C Script Preparation Failed",`Failed to prepare script for execution:<br><br>
                    <div class="code-block">${g?.name||"Error"}: ${g?.message||"Unknown error"}</div>
                    <br>Please check your JavaScript syntax.`,"error")}}a&&i.document.head.appendChild(c)}catch(c){u("\u274C Injection Failed",`Critical error during script injection:<br><br>
                <div class="code-block">${c?.name||"Error"}: ${c?.message||"Unknown error"}</div>
                <br>This may indicate a browser security restriction or internal error.`,"error")}},200)}catch(l){i.document.body.innerHTML=`
            <div style="font-family: Arial, sans-serif; padding: 20px; background: #1a1a1a; color: #fff;">
              <h2 style="color: #dc3545;">\u274C Initialization Failed</h2>
              <p>Failed to initialize the injection environment:</p>
              <pre style="background: #2d2d2d; padding: 10px; border-radius: 4px;">${l?.message||"Unknown error"}</pre>
            </div>
          `}},s=()=>{i.document&&i.document.body!==null?m():setTimeout(s,10)};setTimeout(s,25)},r=await t();if(r)if(r==="url"){let n=await(0,Q.showInputModal)("Enter the JavaScript URL to inject:","https://example.com/script.js","URL Injection","url");n&&o(n,!0)}else r==="js"?e(o):r==="ocot"&&(async()=>{let a=await(0,Vr.getLatestVersionInfo)(),m=[`https://cdn.jsdelivr.net/gh/asc2563/ocot-client@${a?.cleanLatestVersion||a?.cleanCurrentVersion||"2.4.7"}/dist/bundle.js`,"https://cdn.jsdelivr.net/gh/asc2563/ocot-client@latest/dist/bundle.js","https://raw.githubusercontent.com/asc2563/ocot-client/main/dist/bundle.js"],s=window.open("about:blank","_blank");if(!s){(0,Q.showModal)("Failed to open new window. Please check your browser's popup settings.","Popup Blocked","error");return}let l=()=>{try{s.document.open(),s.document.write("<!DOCTYPE html><html><head></head><body></body></html>"),s.document.close();let u=s.document.createElement("style");u.textContent=`
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: #1a1a1a;
                color: #fff;
                margin: 0;
                padding: 20px;
                line-height: 1.6;
              }
              .status-container {
                background: #292d36;
                border-radius: 8px;
                padding: 16px;
                margin-bottom: 20px;
                border-left: 4px solid #00bfff;
              }
              .status-title {
                font-weight: 600;
                color: #00bfff;
                margin-bottom: 8px;
              }
              .status-message {
                color: #aaa;
                font-size: 0.9rem;
              }
              .success { border-left-color: #28a745; }
              .success .status-title { color: #28a745; }
              .error { border-left-color: #dc3545; }
              .error .status-title { color: #dc3545; }
              .warning { border-left-color: #ffc107; }
              .warning .status-title { color: #ffc107; }
              .code-block {
                background: #1e2126;
                border-radius: 4px;
                padding: 12px;
                margin: 8px 0;
                font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
                font-size: 0.85rem;
                border: 1px solid #404040;
                overflow-x: auto;
              }
              .timestamp {
                color: #666;
                font-size: 0.8rem;
              }
            `,s.document.head.appendChild(u);let d=s.document.createElement("div");d.innerHTML=`
              <div class="status-container" id="injection-status">
                <div class="status-title">\u{1F504} Loading Ocot Client</div>
                <div class="status-message">Initializing Ocot Client injection with enhanced reliability...</div>
              </div>
            `,s.document.body.appendChild(d);let c=(b,y,x="info")=>{let k=s.document.getElementById("injection-status");k&&(k.className=`status-container ${x}`,k.innerHTML=`
                  <div class="status-title">${b}</div>
                  <div class="status-message">${y}</div>
                  <div class="timestamp">Last updated: ${new Date().toLocaleTimeString()}</div>
                `)},g=async(b,y=0,x=1)=>{if(y>=b.length){c("\u274C All Sources Failed","Failed to load Ocot Client from all available CDN sources. This may be due to network issues or temporary CDN unavailability.","error");return}let k=b[y];return c("\u{1F517} Loading from CDN",`Attempting to load from source ${y+1}/${b.length} (Attempt ${x})<br><br><div class="code-block">${k}</div>`),new Promise((h,v)=>{let w=s.document.createElement("script");w.src=k;let E=setTimeout(()=>{w.onload=null,w.onerror=null,x<2?(c("\u23F3 Retrying...",`Timeout occurred, retrying same source (Attempt ${x+1}/2)...`),setTimeout(()=>{g(b,y,x+1)},1e3)):(c("\u26A0\uFE0F Source Timeout",`Source ${y+1} timed out after 2 attempts, trying next source...`,"warning"),setTimeout(()=>{g(b,y+1,1)},500)),v(new Error("Timeout"))},7e3);w.onload=()=>{clearTimeout(E),c("\u2705 Ocot Client Loaded Successfully",`Ocot Client has been successfully loaded and is now available on this page!<br><br>
                    <div class="code-block">Source: ${k}</div>
                    <br>You can now use all Ocot Client features. Look for the Ocot interface or check the console for available commands.`,"success"),h()},w.onerror=T=>{clearTimeout(E),x<2?(c("\u{1F504} Retrying...",`Load error occurred, retrying same source (Attempt ${x+1}/2)...`),setTimeout(()=>{g(b,y,x+1)},1e3)):(c("\u26A0\uFE0F Source Failed",`Source ${y+1} failed after 2 attempts, trying next source...`,"warning"),setTimeout(()=>{g(b,y+1,1)},500)),v(new Error("Load error"))},s.document.head.appendChild(w)}).catch(()=>{})};g(m)}catch(u){s.document.body.innerHTML=`
              <div style="font-family: Arial, sans-serif; padding: 20px; background: #1a1a1a; color: #fff;">
                <h2 style="color: #dc3545;">\u274C Initialization Failed</h2>
                <p>Failed to initialize the Ocot Client injection environment:</p>
                <pre style="background: #2d2d2d; padding: 10px; border-radius: 4px;">${u.message}</pre>
              </div>
            `}},p=()=>{s.document&&s.document.body!==null?l():setTimeout(p,10)};setTimeout(p,25)})()}}});var Kt=S(Xe=>{"use strict";Object.defineProperty(Xe,"__esModule",{value:!0});var Xt=A(),ke={isEnabled(){return window.antiForceReloadEnabled||!1},async onEnable(){window.antiForceReloadBeforeUnloadHandler=t=>"no",window.onbeforeunload=window.antiForceReloadBeforeUnloadHandler,window.antiForceReloadEnabled=!0,await(0,Xt.showModal)("Page reload protection is now ACTIVE. The browser will warn before allowing page refreshes or navigation away from this page.<br><br>Use this script again to disable protection.","Anti Force Reload Enabled","success")},async onDisable(){window.onbeforeunload=null,window.antiForceReloadBeforeUnloadHandler=void 0,window.antiForceReloadEnabled=!1,await(0,Xt.showModal)("Page reload protection is now OFF. The page can be refreshed normally.","Anti Force Reload Disabled","success")},async onActivate(){ke.isEnabled?.()?await ke.onDisable?.():await ke.onEnable?.()}};Xe.default=ke});var Zt=S(Ke=>{"use strict";Object.defineProperty(Ke,"__esModule",{value:!0});var Qt=A(),Ur=ne(),Ce={isEnabled(){return window.autoHideEnabled||!1},async onEnable(){window.autoHideBlurHandler=()=>{setTimeout(()=>{let t=document.activeElement;if(!(o=>!o||o.tagName!=="IFRAME"?!1:["ocot-proxy-iframe","ocot-pocket-browser-iframe"].includes(o.id))(t)&&window.proxyFrame&&window.proxyFrame.style.display!=="none"){if(window.proxyClientApp&&typeof window.proxyClientApp.hideProxyClient=="function")window.proxyClientApp.hideProxyClient();else{window.proxyFrame.style.display="none";let r=document.querySelector('[title*="Show Ocot Client"]');r&&(r.style.display="flex")}if((0,Ur.getGeneralSettings)().enableScriptNotifications){let r=document.createElement("div");r.style.cssText=`
              position: fixed;
              top: 20px;
              right: 20px;
              background: #28a745;
              color: white;
              padding: 12px 20px;
              border-radius: 8px;
              font-family: Arial, sans-serif;
              font-size: 14px;
              z-index: 999999;
              box-shadow: 0 4px 12px rgba(0,0,0,0.3);
              animation: slideIn 0.3s ease-out;
            `,r.innerHTML="\u{1F512} Ocot Client Auto-Hidden";let n=document.createElement("style");n.id="auto-hide-notification-style",n.textContent=`
              @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
              }
            `,document.getElementById("auto-hide-notification-style")||document.head.appendChild(n),document.body.appendChild(r),setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},3e3)}}},0)},window.addEventListener("blur",window.autoHideBlurHandler),window.autoHideEnabled=!0,await(0,Qt.showModal)("The Ocot Client is now set to automatically hide when you:<br>\u2022 Switch to another tab<br>\u2022 Click outside the application<br><br><strong>NOTE:</strong> It will NOT hide immediately when you close this modal - only when you switch tabs or click away from the app.<br><br>Use this script again to disable auto-hide.","Auto-hide Enabled","success")},async onDisable(){window.autoHideBlurHandler&&window.removeEventListener("blur",window.autoHideBlurHandler),window.autoHideEnabled=!1,await(0,Qt.showModal)("The Ocot Client will no longer automatically hide when you switch tabs or click away.<br><br>You can manually hide it using the Hide App button or the backslash (\\) key.","Auto-hide Disabled","success")},async onActivate(){Ce.isEnabled?.()?await Ce.onDisable?.():await Ce.onEnable?.()}};Ke.default=Ce});var eo=S(Ze=>{"use strict";Object.defineProperty(Ze,"__esModule",{value:!0});var Qe=A(),Gr=ne(),Ee={isEnabled(){return window.autoRemoveEnabled||!1},async onEnable(){await(0,Qe.showConfirmModal)("This will automatically <strong>REMOVE</strong> the entire Ocot Client when you:<br>\u2022 Switch to another tab<br>\u2022 Click outside the application<br><br><strong>WARNING:</strong> Unlike auto-hide, this will completely remove the app and you'll need to reload/re-inject it to use it again.<br><br>Are you sure you want to enable auto-remove?","Enable Auto-Remove Script?","Enable Auto-Remove","Cancel")&&(window.autoRemoveBlurHandler=()=>{setTimeout(()=>{let e=document.activeElement;if(!(r=>!r||r.tagName!=="IFRAME"?!1:["ocot-proxy-iframe","ocot-pocket-browser-iframe"].includes(r.id))(e)&&window.proxyFrame&&window.proxyFrame.style.display!=="none")try{window.proxyFrame.parentNode&&window.proxyFrame.parentNode.removeChild(window.proxyFrame);let r=document.querySelector('[title*="Show Ocot Client"], [title*="Hide Ocot Client"]');if(r&&r.parentNode&&r.parentNode.removeChild(r),window.proxyClientApp&&(typeof window.proxyClientApp.cleanup=="function"&&window.proxyClientApp.cleanup(),window.proxyClientApp=null),window.proxyFrame=null,window.autoRemoveEnabled=!1,window.autoRemoveBlurHandler&&window.removeEventListener("blur",window.autoRemoveBlurHandler),(0,Gr.getGeneralSettings)().enableScriptNotifications){let a=document.createElement("div");a.style.cssText=`
                position: fixed;
                top: 20px;
                right: 20px;
                background: #ff6b6b;
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                font-family: Arial, sans-serif;
                font-size: 14px;
                z-index: 999999;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                animation: slideIn 0.3s ease-out;
              `,a.innerHTML="\u{1F5D1}\uFE0F Ocot Client Auto-Removed";let i=document.createElement("style");i.textContent=`
                @keyframes slideIn {
                  from { transform: translateX(100%); opacity: 0; }
                  to { transform: translateX(0); opacity: 1; }
                }
              `,document.head.appendChild(i),document.body.appendChild(a),setTimeout(()=>{a.parentNode&&a.parentNode.removeChild(a),i.parentNode&&i.parentNode.removeChild(i)},3e3)}}catch(r){console.warn("Auto-remove cleanup error:",r)}},0)},window.addEventListener("blur",window.autoRemoveBlurHandler),window.autoRemoveEnabled=!0,await(0,Qe.showModal)("The Ocot Client is now set to automatically <strong>REMOVE ITSELF</strong> when you:<br>\u2022 Switch to another tab<br>\u2022 Click outside the application<br><br><strong>WARNING:</strong> Unlike auto-hide, this will completely remove the app. You'll need to reload the page or re-inject the client to use it again.<br><br>Use this script again to disable auto-remove.","Auto-remove Enabled","warning"))},async onDisable(){window.autoRemoveBlurHandler&&window.removeEventListener("blur",window.autoRemoveBlurHandler),window.autoRemoveEnabled=!1,await(0,Qe.showModal)("The Ocot Client will no longer automatically remove itself when you switch tabs or click away.<br><br>You can manually hide it using the Hide App button or the backslash (\\) key.","Auto-remove Disabled","success")},async onActivate(){Ee.isEnabled?.()?await Ee.onDisable?.():await Ee.onEnable?.()}};Ze.default=Ee});var oo=S(et=>{"use strict";Object.defineProperty(et,"__esModule",{value:!0});var to=A();et.default={async onActivate(){try{(function(){let t=document.createElement("script");t.src="https://cdn.jsdelivr.net/gh/randomstuff69/blooketcheatsplus@master/GUI/Gui.js",document.body.appendChild(t)})(),await(0,to.showModal)("Blooket Cheats GUI is being loaded. Check the page for the cheats interface.","Blooket Cheats Loading","success")}catch(t){await(0,to.showModal)(`Error loading Blooket Cheats: ${t?.message||"Unknown error"}`,"Blooket Cheats Error","error")}}}});var no=S(tt=>{"use strict";Object.defineProperty(tt,"__esModule",{value:!0});var Se=A(),ro="ocot-dark-mode-enabled",Jr={id:"darkmode",title:"Dark Mode",description:"Apply dark mode styling to any webpage",category:"utility",stateful:!0,isEnabled(){return window.ocotDarkModeEnabled||!1},async onEnable(){try{let t=this.createDarkModeCSS();t.id="ocot-dark-mode-style",document.head.appendChild(t),window.ocotDarkModeEnabled=!0,localStorage.setItem(ro,"true"),(0,Se.showModal)("Dark mode has been applied to this page. Colors, backgrounds, and text have been inverted for better readability in low-light environments.","Dark Mode Enabled","success")}catch(t){console.error("Dark Mode Enable Error:",t),(0,Se.showModal)("Failed to enable dark mode. This might be due to website restrictions or conflicting styles.","Dark Mode Error","error")}},async onDisable(){try{let t=document.getElementById("ocot-dark-mode-style");t&&t.remove(),window.ocotDarkModeEnabled=!1,localStorage.removeItem(ro),(0,Se.showModal)("Dark mode has been disabled. The page has been restored to its original appearance.","Dark Mode Disabled","success")}catch(t){console.error("Dark Mode Disable Error:",t),(0,Se.showModal)("Failed to disable dark mode completely. Some styles might persist until page refresh.","Dark Mode Disable Error","warning")}},async onActivate(){this.isEnabled()?await this.onDisable():await this.onEnable()},createDarkModeCSS(){let t=document.createElement("style");return t.textContent=`
      /* Ocot Dark Mode Override Styles */
      
      /* High priority universal dark mode */
      html, body {
        background-color: #1a1a1a !important;
        color: #e0e0e0 !important;
        filter: none !important;
      }

      /* Text elements */
      p, span, div, h1, h2, h3, h4, h5, h6, a, li, td, th, label, button, input, textarea, select {
        color: #e0e0e0 !important;
      }

      /* Background elements */
      div, section, article, aside, nav, header, footer, main, form {
        background-color: #2d2d2d !important;
        border-color: #444 !important;
      }

      /* Specific element overrides */
      body * {
        background-color: #2d2d2d !important;
        color: #e0e0e0 !important;
        border-color: #444 !important;
      }

      /* Input elements */
      input, textarea, select, button {
        background-color: #3a3a3a !important;
        color: #e0e0e0 !important;
        border: 1px solid #555 !important;
      }

      input:focus, textarea:focus, select:focus {
        background-color: #4a4a4a !important;
        border-color: #666 !important;
        outline: 1px solid #777 !important;
      }

      /* Links */
      a, a:visited {
        color: #66b3ff !important;
      }

      a:hover {
        color: #99ccff !important;
      }

      /* Images and media - preserve but add dark overlay */
      img {
        opacity: 0.9 !important;
        filter: brightness(0.8) contrast(1.1) !important;
      }

      video {
        filter: brightness(0.9) !important;
      }

      /* Code blocks */
      pre, code {
        background-color: #1e1e1e !important;
        color: #f0f0f0 !important;
        border: 1px solid #444 !important;
      }

      /* Tables */
      table {
        background-color: #2d2d2d !important;
        border-color: #444 !important;
      }

      th {
        background-color: #3a3a3a !important;
        color: #f0f0f0 !important;
      }

      tr:nth-child(even) {
        background-color: #353535 !important;
      }

      tr:nth-child(odd) {
        background-color: #2d2d2d !important;
      }

      /* Common UI elements */
      .navbar, .nav, .menu, .header, .footer, .sidebar {
        background-color: #1a1a1a !important;
        color: #e0e0e0 !important;
      }

      /* Cards and containers */
      .card, .panel, .box, .container, .wrapper {
        background-color: #2d2d2d !important;
        border-color: #444 !important;
        color: #e0e0e0 !important;
      }

      /* Buttons */
      button, .button, .btn {
        background-color: #4a4a4a !important;
        color: #e0e0e0 !important;
        border: 1px solid #666 !important;
      }

      button:hover, .button:hover, .btn:hover {
        background-color: #5a5a5a !important;
      }

      /* Modals and overlays */
      .modal, .overlay, .popup {
        background-color: #2d2d2d !important;
        color: #e0e0e0 !important;
        border: 1px solid #444 !important;
      }

      /* Scrollbars */
      ::-webkit-scrollbar {
        background-color: #2d2d2d !important;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #555 !important;
        border: 1px solid #666 !important;
      }

      ::-webkit-scrollbar-thumb:hover {
        background-color: #666 !important;
      }

      /* Preserve proxy client styling */
      #proxy-client-app,
      #proxy-client-app *,
      .proxy-sidebar,
      .proxy-sidebar *,
      [id*="proxy-client"],
      [class*="proxy-client"] {
        background-color: unset !important;
        color: unset !important;
        border-color: unset !important;
        filter: none !important;
      }

      /* Don't affect existing dark themes */
      [data-theme="dark"] *,
      [data-bs-theme="dark"] *,
      .dark *,
      .dark-mode *,
      .theme-dark * {
        filter: none !important;
      }

      /* Special handling for white backgrounds that should be dark */
      *[style*="background-color: white"],
      *[style*="background-color: #fff"],
      *[style*="background-color: #ffffff"],
      *[style*="background: white"],
      *[style*="background: #fff"],
      *[style*="background: #ffffff"] {
        background-color: #2d2d2d !important;
      }

      /* Special handling for black text that should be light */
      *[style*="color: black"],
      *[style*="color: #000"],
      *[style*="color: #000000"] {
        color: #e0e0e0 !important;
      }
    `,t}};tt.default=Jr});var io=S(ot=>{"use strict";Object.defineProperty(ot,"__esModule",{value:!0});var Wr=A();ot.default={async onActivate(){let t=document.createElement("div");document.body.appendChild(t),Object.assign(t.style,{position:"fixed",top:"0px",right:"0px",margin:"10px",paddingTop:"10px",width:"200px",height:"40px",zIndex:"10000",opacity:"0.9",color:"white",backgroundColor:"black",border:"1px solid white",textAlign:"center",cursor:"pointer",display:"block"}),t.id="elem",t.textContent="Z";let o=await(0,Wr.showInputModal)("What tab do you want to open when a teacher comes by?<br><br>Click Z or click the floating element to quickly switch to that tab.<br><br><strong>Warning:</strong> You may need to click out of the element for the keyboard shortcut to work.","https://classroom.google.com","Emergency Tab Switcher Setup","url");if(!o){t.parentNode&&t.parentNode.removeChild(t);return}let r=()=>{o&&(window.location.href=o)};window.addEventListener("keydown",n=>{n.key.toLowerCase()==="z"&&r()}),t.addEventListener("click",r)}}});var ao=S(rt=>{"use strict";Object.defineProperty(rt,"__esModule",{value:!0});rt.default={async onActivate(){window.proxyFrame&&(window.proxyFrame.style.display="none"),setTimeout(()=>{alert(`Uncaught TypeError: Failed to execute 'run' on 'ClientCore': Cannot read properties of undefined (reading 'execute')
    at ClientCore.run (main.js:1:1234)
    at <anonymous>:1:1`),window.close(),setTimeout(()=>{window.closed||(window.location.href="about:blank",setTimeout(()=>{window.close(),window.closed||console.log("Unable to close the tab automatically. Please close it manually.")},100))},100)},50)}}});var lo=S(nt=>{"use strict";Object.defineProperty(nt,"__esModule",{value:!0});var so=A();nt.default={async onActivate(){try{let e=function(){let o=document.body.querySelectorAll("*"),r=0;return o.forEach(function(n){let a=n;a.style.setProperty("user-select","auto","important"),a.style.setProperty("-webkit-user-select","auto","important"),a.style.setProperty("-moz-user-select","auto","important"),a.style.setProperty("-ms-user-select","auto","important"),a.style.setProperty("-webkit-user-drag","auto","important"),a.draggable=!0,r++}),r}();await(0,so.showModal)(`Successfully enabled text selection on ${e} elements.<br><br>You should now be able to select and copy text on this page, even if it was previously disabled by the website.`,"Force Select Applied","success")}catch(t){await(0,so.showModal)(`Error applying force select: ${t?.message||"Unknown error"}<br><br>This may occur on some special pages or if there are browser security restrictions.`,"Force Select Failed","error")}}}});var co=S(it=>{"use strict";Object.defineProperty(it,"__esModule",{value:!0});var Be=A();it.default={async onActivate(){let t="https://cdn.jsdelivr.net/gh/Penguinify/math-bookmarklet/dist/bundle.js",e=(0,Be.showModal)("Fetching advanced math calculator from CDN. Please wait...","Loading Math Tools","info");try{let o=await fetch(t);if(!o.ok)throw new Error(`HTTP ${o.status}: ${o.statusText}`);let r=await o.text();if(!r||r.trim().length===0)throw new Error("Empty script content received");let n=document.createElement("script");n.textContent=r,n.onerror=i=>{(0,Be.showModal)(`\u274C Math Tools Execution Error

The math tools script failed to execute properly. This may be due to:
\u2022 JavaScript syntax errors in the fetched script
\u2022 Compatibility issues with the current page
\u2022 Security restrictions`,"Execution Error","error")},document.head.appendChild(n),document.querySelectorAll(".ocot-modal-overlay").forEach(i=>{let m=i;m.parentNode&&(m.style.opacity="0",setTimeout(()=>{m.parentNode&&m.parentNode.removeChild(m)},200))}),setTimeout(async()=>{await(0,Be.showModal)("\u{1F9EE} Advanced math calculator and tools are now available on this page.<br><br>Look for new math-related UI elements or check the browser console for instructions on how to use the tools.","Math Tools Loaded Successfully","success")},250)}catch(o){document.querySelectorAll(".ocot-modal-overlay").forEach(a=>{let i=a;i.parentNode&&(i.style.opacity="0",setTimeout(()=>{i.parentNode&&i.parentNode.removeChild(i)},200))});let n="";o?.name==="TypeError"&&o.message?.includes("fetch")?n="Network Error: Unable to connect to the CDN.<br><br><strong>Possible causes:</strong><br>\u2022 No internet connection<br>\u2022 CDN server is down<br>\u2022 Network firewall blocking the request":o?.message?.includes("HTTP")?n=`Server Error: ${o.message}<br><br>The CDN returned an error response. This may be due to:<br>\u2022 Temporary server issues<br>\u2022 Script URL has changed or is no longer available<br>\u2022 Access restrictions`:o?.message?.includes("CORS")?n="CORS Error: Cross-origin request blocked.<br><br>This may be due to:<br>\u2022 Browser security policies<br>\u2022 CDN CORS configuration<br>\u2022 Network proxy restrictions":n=`Unexpected Error: ${o?.message||"Unknown error"}<br><br>Please try again later or check the browser console for more details.`,setTimeout(async()=>{await(0,Be.showModal)(n,"Failed to Load Math Tools","error")},250),console.error("Math Tools loading error:",o)}}}});var uo=S(at=>{"use strict";Object.defineProperty(at,"__esModule",{value:!0});var po=A(),Te={isEnabled(){return document.body.contentEditable==="true"||document.designMode==="on"},async onEnable(){document.body.contentEditable="true",document.designMode="on",await(0,po.showModal)("Page is now editable. You can click anywhere and start editing text. Use this script again to disable editing or refresh the page to reset.","Page Editor Enabled","success")},async onDisable(){document.body.contentEditable="false",document.designMode="off",await(0,po.showModal)("Page editing is now disabled. The page is back to normal mode.","Page Editor Disabled","info")},async onActivate(){Te.isEnabled?.()?await Te.onDisable?.():await Te.onEnable?.()}};at.default=Te});var go=S(st=>{"use strict";Object.defineProperty(st,"__esModule",{value:!0});var mo=A(),Yr=ne();st.default={async onActivate(){try{let e=function(){let r=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);return window.scrollTo({top:r,behavior:"smooth"}),r}(),o=(0,Yr.getGeneralSettings)();if(o.enableScriptNotifications){let r=document.createElement("div");if(r.style.cssText=`
          position: fixed;
          top: 20px;
          right: 20px;
          background: #007acc;
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          font-family: Arial, sans-serif;
          font-size: 14px;
          z-index: 999999;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          animation: slideIn 0.3s ease-out;
        `,r.innerHTML="\u{1F4DC} Scrolled to the bottom of the page",!document.getElementById("quick-scroll-notification-style")){let n=document.createElement("style");n.id="quick-scroll-notification-style",n.textContent=`
            @keyframes slideIn {
              from { transform: translateX(100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
          `,document.head.appendChild(n)}document.body.appendChild(r),setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},3e3)}o.enableScriptNotifications||await(0,mo.showModal)(`Successfully scrolled to the bottom of the page.<br><br>Total page height: ${Math.round(e)}px`,"Quick Scroll Complete","success")}catch(t){await(0,mo.showModal)(`Error during quick scroll: ${t?.message||"Unknown error"}<br><br>This may occur on pages with dynamic content or scroll restrictions.`,"Quick Scroll Failed","error")}}}});var fo=S(lt=>{"use strict";Object.defineProperty(lt,"__esModule",{value:!0});var ae=A(),Xr={async onActivate(){let t=()=>{let d=[],c=[];for(let g=0;g<localStorage.length;g++){let b=localStorage.key(g);if(b){let y=localStorage.getItem(b);y&&d.push({key:b,value:y,size:new Blob([y]).size})}}for(let g=0;g<sessionStorage.length;g++){let b=sessionStorage.key(g);if(b){let y=sessionStorage.getItem(b);y&&c.push({key:b,value:y,size:new Blob([y]).size})}}return{localStorageData:d,sessionStorageData:c}},e=d=>{if(d===0)return"0 B";let c=1024,g=["B","KB","MB","GB"],b=Math.floor(Math.log(d)/Math.log(c));return parseFloat((d/Math.pow(c,b)).toFixed(2))+" "+g[b]},o=document.createElement("div");o.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100001;
    `;let{localStorageData:r,sessionStorageData:n}=t(),a=r.reduce((d,c)=>d+c.size,0),i=n.reduce((d,c)=>d+c.size,0);o.innerHTML=`
      <div style="background: var(--bg-primary, #23272f); padding: 24px; border-radius: 10px; width: 90%; max-width: 800px; max-height: 80vh; box-shadow: 0 4px 20px rgba(0,0,0,0.3); overflow-y: auto; border: 1px solid var(--border-color, #404040);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h2 style="color: var(--accent-color, #00bfff); margin: 0; font-size: 1.5rem;">\u{1F5C4}\uFE0F Storage Manager</h2>
          <button id="close-modal" style="background: none; border: none; color: var(--text-secondary, #aaa); font-size: 24px; cursor: pointer; padding: 0; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;">&times;</button>
        </div>
        
        <!-- Storage Overview -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
          <div style="background: var(--bg-secondary, #292d36); border-radius: 8px; padding: 16px; border: 1px solid var(--border-color, #404040);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="font-size: 1.2rem;">\u{1F4BE}</span>
              <h3 style="color: var(--accent-color, #00bfff); margin: 0; font-size: 1.1rem;">Local Storage</h3>
            </div>
            <p style="color: var(--text-secondary, #aaa); margin: 4px 0; font-size: 0.9rem;">Items: ${r.length}</p>
            <p style="color: var(--text-secondary, #aaa); margin: 4px 0; font-size: 0.9rem;">Total Size: ${e(a)}</p>
          </div>
          
          <div style="background: var(--bg-secondary, #292d36); border-radius: 8px; padding: 16px; border: 1px solid var(--border-color, #404040);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="font-size: 1.2rem;">\u23F0</span>
              <h3 style="color: var(--accent-color, #00bfff); margin: 0; font-size: 1.1rem;">Session Storage</h3>
            </div>
            <p style="color: var(--text-secondary, #aaa); margin: 4px 0; font-size: 0.9rem;">Items: ${n.length}</p>
            <p style="color: var(--text-secondary, #aaa); margin: 4px 0; font-size: 0.9rem;">Total Size: ${e(i)}</p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div style="display: grid; gap: 12px; margin-bottom: 24px;">
          <button id="clear-selected-btn" style="background: var(--accent-color, #007acc); border: none; border-radius: 8px; padding: 16px; color: var(--text-primary, white); cursor: pointer; font-size: 1rem; font-weight: 600; transition: all 0.2s;">
            \u{1F3AF} Clear Selected Data
          </button>
          
          <button id="clear-all-btn" style="background: #dc3545; border: none; border-radius: 8px; padding: 16px; color: var(--text-primary, white); cursor: pointer; font-size: 1rem; font-weight: 600; transition: all 0.2s;">
            \u{1F5D1}\uFE0F Clear All Data
          </button>
        </div>

        <!-- Storage Details -->
        <div style="border-top: 1px solid var(--border-color, #404040); padding-top: 20px;">
          <h4 style="color: var(--accent-color, #00bfff); margin-bottom: 16px;">\u{1F4CB} Storage Details</h4>
          
          ${r.length>0?`
            <div style="margin-bottom: 20px;">
              <h5 style="color: var(--text-primary, #fff); margin-bottom: 12px;">\u{1F4BE} Local Storage (${r.length} items)</h5>
              <div style="max-height: 200px; overflow-y: auto; background: var(--bg-secondary, #1e2126); border-radius: 6px; padding: 12px; border: 1px solid var(--border-color, #404040);">
                ${r.map(d=>`
                  <div style="padding: 8px 0; border-bottom: 1px solid var(--border-color, #404040);">
                    <div style="color: var(--accent-color, #00bfff); font-weight: 600; font-size: 0.9rem; margin-bottom: 2px;">${d.key}</div>
                    <div style="color: var(--text-secondary, #aaa); font-size: 0.8rem; font-family: monospace; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${d.value.length>100?d.value.substring(0,100)+"...":d.value}</div>
                    <div style="color: var(--text-secondary, #666); font-size: 0.7rem;">${e(d.size)}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          `:'<p style="color: var(--text-secondary, #666); font-style: italic;">Local Storage is empty</p>'}

          ${n.length>0?`
            <div style="margin-bottom: 20px;">
              <h5 style="color: var(--text-primary, #fff); margin-bottom: 12px;">\u23F0 Session Storage (${n.length} items)</h5>
              <div style="max-height: 200px; overflow-y: auto; background: var(--bg-secondary, #1e2126); border-radius: 6px; padding: 12px; border: 1px solid var(--border-color, #404040);">
                ${n.map(d=>`
                  <div style="padding: 8px 0; border-bottom: 1px solid var(--border-color, #404040);">
                    <div style="color: var(--accent-color, #00bfff); font-weight: 600; font-size: 0.9rem; margin-bottom: 2px;">${d.key}</div>
                    <div style="color: var(--text-secondary, #aaa); font-size: 0.8rem; font-family: monospace; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${d.value.length>100?d.value.substring(0,100)+"...":d.value}</div>
                    <div style="color: var(--text-secondary, #666); font-size: 0.7rem;">${e(d.size)}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          `:'<p style="color: var(--text-secondary, #666); font-style: italic;">Session Storage is empty</p>'}
        </div>
      </div>
    `,o.querySelectorAll('button[id$="-btn"]').forEach(d=>{let c=d;c.addEventListener("mouseenter",()=>{c.style.transform="translateY(-2px)",c.style.opacity="0.9"}),c.addEventListener("mouseleave",()=>{c.style.transform="translateY(0)",c.style.opacity="1"})}),document.body.appendChild(o);let s=()=>{let d=document.createElement("div");d.style.cssText=`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100002;
      `,d.innerHTML=`
        <div style="background: var(--bg-primary, #23272f); padding: 24px; border-radius: 10px; width: 90%; max-width: 700px; max-height: 80vh; box-shadow: 0 4px 20px rgba(0,0,0,0.3); overflow-y: auto; border: 1px solid var(--border-color, #404040);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h2 style="color: var(--accent-color, #00bfff); margin: 0; font-size: 1.5rem;">\u{1F3AF} Select Data to Clear</h2>
            <button id="close-selective-modal" style="background: none; border: none; color: var(--text-secondary, #aaa); font-size: 24px; cursor: pointer; padding: 0; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;">&times;</button>
          </div>
          
          <p style="color: var(--text-secondary, #aaa); margin-bottom: 20px; line-height: 1.4;">
            Select the storage items you want to delete:
          </p>
          
          <div id="storage-items-container">
            ${r.length>0?`
              <div style="margin-bottom: 20px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                  <input type="checkbox" id="select-all-local" style="margin: 0;">
                  <label for="select-all-local" style="color: var(--accent-color, #00bfff); font-weight: 600; cursor: pointer;">\u{1F4BE} Local Storage (Select All)</label>
                </div>
                <div style="background: var(--bg-secondary, #1e2126); border-radius: 6px; padding: 12px; margin-left: 20px; border: 1px solid var(--border-color, #404040);">
                  ${r.map((k,h)=>`
                    <div style="display: flex; align-items: center; gap: 8px; padding: 6px 0; border-bottom: 1px solid var(--border-color, #404040);">
                      <input type="checkbox" id="local-${h}" data-storage="local" data-key="${k.key}" style="margin: 0;">
                      <label for="local-${h}" style="flex: 1; cursor: pointer; color: var(--text-primary, #fff);">
                        <div style="font-weight: 600; font-size: 0.9rem;">${k.key}</div>
                        <div style="color: var(--text-secondary, #666); font-size: 0.7rem;">${e(k.size)}</div>
                      </label>
                    </div>
                  `).join("")}
                </div>
              </div>
            `:""}
            
            ${n.length>0?`
              <div style="margin-bottom: 20px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                  <input type="checkbox" id="select-all-session" style="margin: 0;">
                  <label for="select-all-session" style="color: var(--accent-color, #00bfff); font-weight: 600; cursor: pointer;">\u23F0 Session Storage (Select All)</label>
                </div>
                <div style="background: var(--bg-secondary, #1e2126); border-radius: 6px; padding: 12px; margin-left: 20px; border: 1px solid var(--border-color, #404040);">
                  ${n.map((k,h)=>`
                    <div style="display: flex; align-items: center; gap: 8px; padding: 6px 0; border-bottom: 1px solid var(--border-color, #404040);">
                      <input type="checkbox" id="session-${h}" data-storage="session" data-key="${k.key}" style="margin: 0;">
                      <label for="session-${h}" style="flex: 1; cursor: pointer; color: var(--text-primary, #fff);">
                        <div style="font-weight: 600; font-size: 0.9rem;">${k.key}</div>
                        <div style="color: var(--text-secondary, #666); font-size: 0.7rem;">${e(k.size)}</div>
                      </label>
                    </div>
                  `).join("")}
                </div>
              </div>
            `:""}
          </div>
          
          <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 20px;">
            <button id="cancel-selective-btn" style="padding: 12px 24px; background: #6c757d; border: none; border-radius: 6px; color: var(--text-primary, white); cursor: pointer; font-size: 1rem;">Cancel</button>
            <button id="delete-selected-btn" style="padding: 12px 24px; background: #dc3545; border: none; border-radius: 6px; color: var(--text-primary, white); cursor: pointer; font-size: 1rem;">Delete Selected</button>
          </div>
        </div>
      `,document.body.appendChild(d);let c=d.querySelector("#select-all-local"),g=d.querySelector("#select-all-session");c&&c.addEventListener("change",k=>{let h=k.target;d.querySelectorAll('input[data-storage="local"]').forEach(w=>w.checked=h.checked)}),g&&g.addEventListener("change",k=>{let h=k.target;d.querySelectorAll('input[data-storage="session"]').forEach(w=>w.checked=h.checked)});let b=d.querySelector("#close-selective-modal");b&&b.addEventListener("click",()=>{document.body.removeChild(d)});let y=d.querySelector("#cancel-selective-btn");y&&y.addEventListener("click",()=>{document.body.removeChild(d)});let x=d.querySelector("#delete-selected-btn");x&&x.addEventListener("click",()=>{let k=d.querySelectorAll("input[data-storage][data-key]:checked");if(k.length===0){(0,ae.showModal)("Please select at least one item to delete.","No Items Selected","warning");return}let h=0;k.forEach(v=>{let w=v.getAttribute("data-storage"),E=v.getAttribute("data-key");try{w==="local"&&E?(localStorage.removeItem(E),h++):w==="session"&&E&&(sessionStorage.removeItem(E),h++)}catch(T){console.warn(`Failed to delete ${w} item "${E}":`,T)}}),document.body.removeChild(d),document.body.removeChild(o),(0,ae.showModal)(`Successfully deleted ${h} selected storage items.${h<k.length?`<br><br>\u26A0\uFE0F ${k.length-h} items could not be deleted due to errors.`:""}`,"Selected Data Cleared","success")}),d.addEventListener("click",k=>{k.target===d&&document.body.removeChild(d)})},l=o.querySelector("#close-modal");l&&l.addEventListener("click",()=>{document.body.removeChild(o)});let p=o.querySelector("#clear-selected-btn");p&&p.addEventListener("click",()=>{if(r.length===0&&n.length===0){(0,ae.showModal)("There is no storage data to select from.","No Data Available","info");return}s()});let u=o.querySelector("#clear-all-btn");u&&u.addEventListener("click",async()=>{let d=r.length+n.length;if(d===0){await(0,ae.showModal)("There is no storage data to clear.","No Data to Clear","info");return}if(await(0,ae.showConfirmModal)(`This will permanently delete all storage data:<br><br>\u2022 ${r.length} localStorage items<br>\u2022 ${n.length} sessionStorage items<br><br><strong>Total: ${d} items (${e(a+i)})</strong><br><br>This action cannot be undone. Are you sure?`,"Clear All Storage Data?","Delete All","Cancel"))try{localStorage.clear(),sessionStorage.clear(),document.body.removeChild(o),await(0,ae.showModal)(`Successfully cleared all storage data:<br>\u2022 ${d} items deleted<br>\u2022 ${e(a+i)} freed`,"All Data Cleared","success")}catch(g){await(0,ae.showModal)(`Error clearing storage data: ${g?.message||"Unknown error"}<br><br>Some data may not have been deleted due to browser restrictions.`,"Clearing Failed","error")}}),o.addEventListener("click",d=>{d.target===o&&document.body.removeChild(o)})}};lt.default=Xr});var bo=S(dt=>{"use strict";Object.defineProperty(dt,"__esModule",{value:!0});var Kr=A();dt.default={async onActivate(){let t=await(0,Kr.showInputModal)("Enter the URL you want to cloak in a new tab:","https://example.com","Tab Cloak - Enter URL","url");if(!t)return;let e=window.open();if(!e)return;let o=e.document.createElement("iframe");o.style.cssText="position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;",t.includes("https://")||t.includes("http://")?o.src=t:o.src="https://"+t,e.document.body.appendChild(o)}}});var Qr,ct=Io(()=>{Qr=xt({"../handlers/SetBlooketCurrency.js":()=>Promise.resolve().then(()=>H(Wt())),"../handlers/aboutblankinjector.js":()=>Promise.resolve().then(()=>H(Yt())),"../handlers/antiforcereload.js":()=>Promise.resolve().then(()=>H(Kt())),"../handlers/autohide.js":()=>Promise.resolve().then(()=>H(Zt())),"../handlers/autoremove.js":()=>Promise.resolve().then(()=>H(eo())),"../handlers/blooketcheats.js":()=>Promise.resolve().then(()=>H(oo())),"../handlers/darkmode.js":()=>Promise.resolve().then(()=>H(no())),"../handlers/emergencyswitcher.js":()=>Promise.resolve().then(()=>H(io())),"../handlers/fakecrash.js":()=>Promise.resolve().then(()=>H(ao())),"../handlers/forceselect.js":()=>Promise.resolve().then(()=>H(lo())),"../handlers/mathtools.js":()=>Promise.resolve().then(()=>H(co())),"../handlers/pageeditor.js":()=>Promise.resolve().then(()=>H(uo())),"../handlers/quickscroll.js":()=>Promise.resolve().then(()=>H(go())),"../handlers/storagemanager.js":()=>Promise.resolve().then(()=>H(fo())),"../handlers/tabcloak.js":()=>Promise.resolve().then(()=>H(bo()))})});var ho=S(pt=>{"use strict";ct();Object.defineProperty(pt,"__esModule",{value:!0});pt.default=en;var Zr=re(),yo=A();function en(){if(!document.getElementById("scripts-view-style")){let l=document.createElement("style");l.id="scripts-view-style",l.textContent=`
      .scripts-view {
        padding: 20px;
        background: #23272f;
        border-radius: 10px;
        min-height: 400px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.15);
        height: 100%;
        max-height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;
      }

      .scripts-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 18px;
        margin-top: 10px;
        padding-bottom: 20px;
      }

      .script-item {
        background: #292d36;
        border-radius: 8px;
        padding: 18px 14px;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transition: box-shadow 0.2s, transform 0.2s;
        cursor: pointer;
        user-select: none;
        position: relative;
      }

      .script-item:hover {
        box-shadow: 0 4px 16px 0 rgba(0,122,204,0.15);
        transform: translateY(-2px) scale(1.03);
        background: #2d323e;
      }

      .script-item .script-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: #00bfff;
        margin-bottom: 4px;
      }

      .script-item .script-desc {
        font-size: 0.95rem;
        color: #aaa;
        margin-bottom: 2px;
      }

      .script-item .script-category {
        font-size: 0.8rem;
        color: #666;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-top: 8px;
        padding: 2px 6px;
        background: rgba(0, 191, 255, 0.1);
        border-radius: 3px;
        border: 1px solid rgba(0, 191, 255, 0.3);
      }

      .script-item.stateful-enabled {
        background: linear-gradient(135deg, #1a4f3a, #2d5a42);
        border: 2px solid #28a745;
        box-shadow: 0 4px 16px 0 rgba(40, 167, 69, 0.3);
      }

      .script-item.stateful-enabled:hover {
        background: linear-gradient(135deg, #1e5d47, #326349);
        box-shadow: 0 6px 20px 0 rgba(40, 167, 69, 0.4);
        transform: translateY(-2px) scale(1.03);
      }

      .script-item.stateful-enabled .script-title::before {
        content: "\u{1F512} ";
        color: #28a745;
      }

      .script-item.stateful-disabled {
        background: #292d36;
        border: 2px solid transparent;
      }

      .script-item.stateful-disabled .script-title::before {
        content: "\u{1F513} ";
        color: #6c757d;
      }

      .script-item .status-indicator {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-left: 8px;
        animation: pulse 2s infinite;
      }

      .script-item.stateful-enabled .status-indicator {
        background: #28a745;
        box-shadow: 0 0 6px rgba(40, 167, 69, 0.6);
      }

      .script-item.stateful-disabled .status-indicator {
        background: #6c757d;
        animation: none;
      }

      @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
      }

      .loading-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 200px;
        color: #aaa;
        font-size: 1rem;
      }

      .error-message {
        background: #dc3545;
        color: white;
        padding: 16px;
        border-radius: 8px;
        margin: 16px 0;
        text-align: center;
      }
    `,document.head.appendChild(l)}let t=document.createElement("div");t.className="scripts-view";let e=[],o=new Map;async function r(){e=await(0,Zr.loadData)("scripts")}async function n(l){if(o.has(l))return o.get(l);try{let u=(await Qr(`../handlers/${l}.js`)).default;return o.set(l,u),u}catch(p){return console.error(`Failed to load handler: ${l}`,p),null}}function a(l,p,u){if(!l||!p.stateful)return;let d=l.querySelector(".script-title"),c=l.querySelector(".script-desc"),g=l.querySelector(".status-indicator")||document.createElement("span");u?(l.className="script-item stateful-enabled",d.textContent=`${p.title} (ON)`,c.textContent=`${p.description} (Currently active)`,g.className="status-indicator",g.title=`${p.title} is currently enabled`):(l.className="script-item stateful-disabled",d.textContent=`${p.title} (OFF)`,c.textContent=p.description,g.className="status-indicator",g.title=`${p.title} is currently disabled`),d.querySelector(".status-indicator")||d.appendChild(g)}async function i(l){try{let p=await n(l.handler);if(!p){await(0,yo.showModal)(`Failed to load handler for ${l.title}. This may be due to a missing or corrupted script file.`,"Handler Error","error");return}if(p.onActivate&&(await p.onActivate(),l.stateful&&p.isEnabled)){let u=document.querySelector(`[data-script-id="${l.id}"]`);a(u,l,p.isEnabled())}}catch(p){console.error(`Error activating script ${l.title}:`,p),await(0,yo.showModal)(`Error activating ${l.title}: ${p.message}`,"Script Error","error")}}async function m(){let l=document.createElement("div");l.className="scripts-list";for(let u of e){let d=document.createElement("div");d.className="script-item",d.tabIndex=0,d.setAttribute("data-script-id",u.id);let c=!1;if(u.stateful)try{let b=await n(u.handler);b&&b.isEnabled&&(c=b.isEnabled())}catch(b){console.warn(`Could not check state for ${u.id}:`,b)}d.innerHTML=`
        <div class="script-title">${u.title}${u.stateful?c?" (ON)":" (OFF)":""}</div>
        <div class="script-desc">${u.description}${u.stateful&&c?" (Currently active)":""}</div>
        <div class="script-category">${u.category}</div>
      `,u.stateful&&a(d,u,c);let g=()=>i(u);d.addEventListener("click",g),d.addEventListener("keydown",b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),g())}),l.appendChild(d)}t.appendChild(l);let p=document.createElement("div");p.style.cssText=`
      margin-top: 24px;
      padding: 16px;
      background: #292d36;
      border: 1px solid #404040;
      border-radius: 8px;
      border-left: 4px solid #ffc107;
      font-size: 0.9rem;
      color: #d4d4d4;
      line-height: 1.5;
    `,p.innerHTML=`
      <div style="display: flex; align-items: flex-start; gap: 8px;">
        <span style="color: #ffc107; font-size: 1.1rem;">\u2139\uFE0F</span>
        <div>
          <strong style="color: #ffc107;">Note:</strong> Scripts with toggle states (Auto-Hide, Auto-Remove, Anti Force Reload) can be clicked again to disable them.
        </div>
      </div>
    `,t.appendChild(p)}async function s(){t.innerHTML=`
      <div class="loading-placeholder">
        <div>Loading scripts...</div>
      </div>
    `;try{await r(),t.innerHTML="",await m()}catch(l){console.error("Failed to initialize scripts view:",l),t.innerHTML=`
        <div class="error-message">
          Failed to load scripts: ${l.message}
        </div>
      `}}return s(),t}});var xo=S(ut=>{"use strict";Object.defineProperty(ut,"__esModule",{value:!0});ut.default=rn;var tn=_(),on=re();function rn(){(0,tn.injectAppCSS)();let t=document.createElement("div");t.className="games-view";let e=document.createElement("div");return e.style.cssText=`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    color: var(--text-secondary, #d4d4d4);
    font-size: 1.1rem;
  `,e.textContent="Loading bookmarklets...",t.appendChild(e),nn(t,e),t}async function nn(t,e){let o=await(0,on.loadData)("bookmarklets");if(o.length===0){ln(t,e);return}t.removeChild(e);let r=an(o);sn(t,r)}function an(t){return t.reduce((e,o)=>{let r=o.category||"other";return e[r]||(e[r]=[]),e[r].push(o),e},{})}function sn(t,e){let o={utility:"\u{1F527} Utility",gaming:"\u{1F3AE} Gaming",privacy:"\u{1F512} Privacy",other:"\u{1F4C4} Other"};Object.entries(e).forEach(([r,n])=>{let a=document.createElement("div");a.style.cssText=`
      margin-bottom: 32px;
    `;let i=document.createElement("h2");i.textContent=o[r]||`\u{1F4C4} ${r.charAt(0).toUpperCase()+r.slice(1)}`,i.style.cssText=`
      color: var(--text-primary, #fff);
      font-size: 1.4rem;
      margin-bottom: 16px;
      font-weight: 600;
      border-bottom: 2px solid var(--accent-color, #00bfff);
      padding-bottom: 8px;
    `,a.appendChild(i);let m=document.createElement("div");m.className="games-list",n.forEach(s=>{let l=document.createElement("div");l.className="game-item",l.tabIndex=0;let p=document.createElement("a");p.href=s.bookmarkletCode,p.draggable=!0,p.textContent=s.name,p.title=s.description;let u=document.createElement("div");u.className="game-type",u.textContent="Bookmarklet";let d=document.createElement("div");d.style.cssText=`
        color: var(--text-secondary, #d4d4d4);
        font-size: 0.85rem;
        margin-top: 4px;
        line-height: 1.2;
      `,d.textContent=s.description,l.appendChild(p),l.appendChild(u),l.appendChild(d),p.addEventListener("click",c=>{c.preventDefault(),navigator.clipboard.writeText(s.bookmarkletCode).then(()=>{let g=u.textContent;u.textContent="Copied!",u.style.color="#28a745",setTimeout(()=>{u.textContent=g,u.style.color=""},1500)}).catch(()=>{let g=document.createElement("textarea");g.value=s.bookmarkletCode,document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g);let b=u.textContent;u.textContent="Copied!",u.style.color="#28a745",setTimeout(()=>{u.textContent=b,u.style.color=""},1500)})}),p.addEventListener("dragstart",c=>{c.dataTransfer&&(c.dataTransfer.setData("text/uri-list",s.bookmarkletCode),c.dataTransfer.setData("text/plain",s.bookmarkletCode),c.dataTransfer.setData("text/html",`<a href="${s.bookmarkletCode}">${s.name}</a>`))}),m.appendChild(l)}),a.appendChild(m),t.appendChild(a)})}function ln(t,e){t.removeChild(e);let o=document.createElement("div");o.style.cssText=`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    color: var(--text-secondary, #d4d4d4);
    text-align: center;
    padding: 24px;
  `,o.innerHTML=`
    <div style="font-size: 3rem; margin-bottom: 16px;">\u26A0\uFE0F</div>
    <div style="font-size: 1.2rem; font-weight: 600; margin-bottom: 8px;">
      Failed to Load Bookmarklets
    </div>
    <div style="font-size: 1rem; line-height: 1.5;">
      Could not load bookmarklet data. Please check your network connection<br>
      and try refreshing the page.
    </div>
  `,t.appendChild(o)}});var Co=S(bt=>{"use strict";Object.defineProperty(bt,"__esModule",{value:!0});bt.default=kn;var dn=re();function cn(){if(document.getElementById("games-view-style"))return;let t=document.createElement("style");t.id="games-view-style",t.textContent=`
    .games-view {
      padding: 20px;
      background: #23272f;
      border-radius: 10px;
      min-height: 400px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,0.15);
    }
    .games-tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    .games-tab {
      padding: 10px 24px;
      background: #2d323e;
      border: none;
      border-radius: 6px 6px 0 0;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      outline: none;
    }
    .games-tab.active, .games-tab:hover {
      background: var(--accent-color, #007acc);
      color: #fff;
    }
    .games-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-top: 10px;
    }
    .game-item {
      background: #292d36;
      border-radius: 8px;
      padding: 18px 14px 14px 14px;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: box-shadow 0.2s, transform 0.2s;
      position: relative;
    }
    .game-item:hover {
      box-shadow: 0 4px 16px 0 rgba(0,122,204,0.15);
      transform: translateY(-2px) scale(1.03);
    }
    .game-item a {
      font-size: 1.1rem;
      font-weight: 600;
      color: #00bfff;
      margin-bottom: 4px;
      text-decoration: none;
    }
    .game-item a:hover {
      color: #fff;
    }
    .game-item .game-type {
      font-size: 0.85rem;
      color: #aaa;
      margin-top: 2px;
      text-transform: capitalize;
    }
    .game-item .delete-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      background: #ff4444;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 4px 8px;
      font-size: 0.75rem;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.2s;
    }
    .game-item:hover .delete-btn {
      opacity: 1;
    }
    .game-item .delete-btn:hover {
      background: #cc0000;
    }
    .game-item .copy-btn {
      width: 100%;
      margin-top: 10px;
      background: #007acc;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .game-item .copy-btn:hover {
      background: #005a9e;
    }
    .game-item .copy-btn.copied {
      background: #28a745;
    }
    .games-loading, .games-empty {
      grid-column: 1/-1;
      text-align: center;
      color: #aaa;
      padding: 40px 20px;
    }
    .add-game-btn {
      padding: 10px 24px;
      background: #28a745;
      border: none;
      border-radius: 6px;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;
      margin-left: auto;
    }
    .add-game-btn:hover {
      background: #218838;
    }
    .add-game-form {
      background: #2d323e;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .add-game-form input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      background: #23272f;
      border: 1px solid #444;
      border-radius: 4px;
      color: #fff;
      font-size: 1rem;
    }
    .add-game-form input::placeholder {
      color: #888;
    }
    .add-game-form button {
      padding: 10px 20px;
      margin-right: 10px;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .add-game-form .submit-btn {
      background: #28a745;
      color: white;
    }
    .add-game-form .submit-btn:hover {
      background: #218838;
    }
    .add-game-form .cancel-btn {
      background: #6c757d;
      color: white;
    }
    .add-game-form .cancel-btn:hover {
      background: #5a6268;
    }
  `,document.head.appendChild(t)}var pn=[{key:"blocked",label:"Blocked"},{key:"unblocked",label:"Unblocked"},{key:"cors-optimized",label:"CORS Proxy Optimized"},{key:"custom",label:"Custom"}],wo="custom_games",Le=[],W="unblocked",vo=!1,le=!1;function ft(){try{let t=localStorage.getItem(wo);return t?JSON.parse(t):[]}catch(t){return console.error("Failed to load custom games from localStorage:",t),[]}}function ko(t){try{localStorage.setItem(wo,JSON.stringify(t))}catch(e){console.error("Failed to save custom games to localStorage:",e)}}function un(t,e){let o=ft(),r={title:t,url:e,type:"custom",id:Date.now()};return o.push(r),ko(o),r}function mn(t){let o=ft().filter(r=>r.id!==t);ko(o)}async function gn(){try{Le=await(0,dn.loadData)("games"),de()}catch(t){console.error("Failed to load games:",t),vn()}}function fn(t){W!==t&&(W=t,le=!1,de())}function bn(){le=!le,de()}function mt(){return`
    <div class="games-tabs">
      ${pn.map(t=>`
        <button 
          class="games-tab${W===t.key?" active":""}" 
          data-tab-key="${t.key}"
          aria-pressed="${W===t.key}"
        >
          ${t.label}
        </button>
      `).join("")}
      ${W==="custom"?`
        <button class="add-game-btn" data-action="toggle-form">
          ${le?"Cancel":"+ Add Game"}
        </button>
      `:""}
    </div>
  `}function yn(){return!le||W!=="custom"?"":`
    <div class="add-game-form">
      <input type="text" id="game-title-input" placeholder="Game Title" />
      <input type="url" id="game-url-input" placeholder="Game URL (https://...)" />
      <button class="submit-btn" data-action="add-game">Add Game</button>
      <button class="cancel-btn" data-action="cancel-form">Cancel</button>
    </div>
  `}function hn(t){return t==="cors-optimized"?"CORS Optimized":t}function xn(t){return t.length===0?`<p class="games-empty">No games found for "${W}" category.</p>`:t.map(e=>`
    <div class="game-item" data-game-id="${e.id||""}">
      ${W==="custom"?`
        <button class="delete-btn" data-action="delete-game" data-game-id="${e.id}">Delete</button>
      `:""}
      <a href="${e.url}" target="_blank" rel="noopener noreferrer">${e.title}</a>
      <div class="game-type">${hn(e.type)}</div>
      <button class="copy-btn" data-action="copy-link" data-url="${e.url}">Copy Link</button>
    </div>
  `).join("")}function de(){let t=document.getElementById("games-view");if(!t){console.warn("Games container not found, retrying in 100ms..."),setTimeout(de,100);return}let e=[];if(W==="custom")e=ft();else{if(!Le||Le.length===0){t.innerHTML=`
        ${mt()}
        <div class="games-list">
          <p class="games-empty">No games data available.</p>
        </div>
      `,gt();return}e=Le.filter(o=>o.type===W)}t.innerHTML=`
    ${mt()}
    ${yn()}
    <div class="games-list">
      ${xn(e)}
    </div>
  `,gt()}function vn(){let t=document.getElementById("games-view");t&&(t.innerHTML=`
    ${mt()}
    <div class="games-list">
      <p class="games-empty">Failed to load games. Please try again later.</p>
    </div>
  `,gt())}function gt(){if(vo)return;let t=document.getElementById("games-view");t&&(t.addEventListener("click",wn),vo=!0)}function wn(t){let e=t.target;if(e.classList.contains("games-tab")){let r=e.getAttribute("data-tab-key");r&&(t.preventDefault(),fn(r));return}let o=e.getAttribute("data-action");if(o)switch(t.preventDefault(),o){case"toggle-form":case"cancel-form":bn();break;case"add-game":let r=document.getElementById("game-title-input"),n=document.getElementById("game-url-input");if(r&&n){let m=r.value.trim(),s=n.value.trim();if(m&&s)try{new URL(s),un(m,s),le=!1,de()}catch{alert("Please enter a valid URL (must start with http:// or https://)")}else alert("Please fill in both title and URL")}break;case"delete-game":let a=parseInt(e.getAttribute("data-game-id"));a&&confirm("Are you sure you want to delete this game?")&&(mn(a),de());break;case"copy-link":let i=e.getAttribute("data-url");i&&navigator.clipboard.writeText(i).then(()=>{let m=e.textContent;e.textContent="Copied!",e.classList.add("copied"),setTimeout(()=>{e.textContent=m,e.classList.remove("copied")},2e3)}).catch(m=>{console.error("Failed to copy:",m),alert("Failed to copy link to clipboard")});break}}function kn(){return cn(),gn(),`
    <div id="games-view" class="games-view">
      <div class="games-loading">Loading games...</div>
    </div>
  `}});var Fn=S(ze=>{var N=ze&&ze.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ze,"__esModule",{value:!0});var Cn=_(),Eo=N(vt()),En=N(Lt()),Sn=N(Ft()),Bn=N(Dt()),Tn=N(_t()),Ln=N(qt()),zn=N(Rt()),Mn=N(Vt()),Pn=N(Ut()),In=N(Jt()),An=N(ho()),On=N(ne()),jn=N(xo()),Hn=N(Co()),Nn=Pe();console.log(`

Now launching ASC2563's Ocot Client...

`);(0,Nn.logEnvironmentInfo)();var yt=class{constructor(){this.frame=null,this.views={},this.sidebar=new Eo.default,this.sidebarButtons={},this.isMaximized=!1,this.normalFrameStyle=null,this.floatingButton=null,this.isDragging=!1,this.topBarDragHandlers=null,this.isFrameDragging=!1,this.dragOffset={x:0,y:0}}launch(){(0,Cn.injectAppCSS)(),Eo.default.injectCSS(),this.injectAppStyles(),this.frame=document.createElement("div"),window.proxyFrame=this.frame,this.setupFrameStyle();let e=this.createTopBar(),o=document.createElement("div");o.style.cssText=`
      display: flex;
      flex: 1;
      height: calc(100% - 40px);
    `;let r=this.sidebar.createSidebar();this.sidebar.addNavigationButtons(),this.sidebarButtons=this.sidebar.getButtons(),this.sidebar.setActiveButton(null),this.sidebar.getHeader().addEventListener("click",()=>{this.showWelcomeView()});let a=this.createContent();o.appendChild(r),o.appendChild(a),this.frame.appendChild(e),this.frame.appendChild(o),document.body.appendChild(this.frame),this.initializeTopBarDrag(),this.createFloatingButton(),this.applyInitialSettings(),document.addEventListener("keydown",i=>{i.key==="\\"&&window.proxyFrame&&this.toggleProxyClient()}),document.addEventListener("click",i=>{this.frame&&this.frame.style.display!=="none"&&(this.frame.contains(i.target)||(console.log("Clicking outside - clearing active buttons"),this.sidebar.setActiveButton(null)))}),console.log("Application launched successfully. Press backslash (\\) to show if hidden.")}injectAppStyles(){let e=document.createElement("style");e.textContent=`
      /* App Frame Styling */
      .proxy-app-frame {
        background: var(--bg-primary);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        border: 1px solid var(--border-color);
        overflow: hidden;
      }
      
      /* Content Area Styling */
      .proxy-content {
        background: var(--bg-primary);
        position: relative;
      }
      
      .content-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 20% 80%, rgba(0, 122, 204, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(0, 191, 255, 0.03) 0%, transparent 50%);
        pointer-events: none;
      }
    `,document.head.appendChild(e)}createFloatingButton(){console.log("Creating floating button..."),this.floatingButton=document.createElement("div"),this.floatingButton.innerHTML="\u{1F527}",this.floatingButton.title="Show Ocot Client (Press \\ to toggle)",this.floatingButton.style.cssText=`
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #007acc, #0056b3);
      border: 2px solid #004085;
      border-radius: 50%;
      display: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 100000;
      font-size: 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      user-select: none;
    `,console.log("Floating button created, adding to body..."),this.floatingButton.addEventListener("mouseenter",()=>{this.floatingButton&&(this.floatingButton.style.transform="scale(1.1)",this.floatingButton.style.boxShadow="0 6px 16px rgba(0, 122, 204, 0.4)")}),this.floatingButton.addEventListener("mouseleave",()=>{this.floatingButton&&(this.floatingButton.style.transform="scale(1)",this.floatingButton.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)")}),this.floatingButton.addEventListener("click",e=>{this.isDragging||(console.log("Floating button clicked!"),this.showProxyClient())}),this.addDragFunctionality(),document.body.appendChild(this.floatingButton),console.log("Floating button added to body, should be visible now")}initializeTopBarDrag(){let e=this.frame?.querySelector(".proxy-top-bar"),o=e?.querySelector("div:last-child"),r=e?.querySelector("div:first-child");r&&(r.style.cursor="grab");let n=m=>{if(this.isMaximized||o?.contains(m.target))return;this.isFrameDragging=!0;let s=this.frame?.getBoundingClientRect();s&&(this.dragOffset.x=m.clientX-s.left,this.dragOffset.y=m.clientY-s.top),r&&(r.style.cursor="grabbing"),document.body.style.cursor="grabbing",m.preventDefault()},a=m=>{if(!this.isFrameDragging)return;let s=m.clientX-this.dragOffset.x,l=m.clientY-this.dragOffset.y,p=this.frame?.getBoundingClientRect();if(!p)return;let u=p.width,d=p.height,c=window.innerWidth-u,g=window.innerHeight-d;s=Math.max(0,Math.min(s,c)),l=Math.max(0,Math.min(l,g)),this.frame&&(this.frame.style.transform=`translate(${s}px, ${l}px)`,this.frame.style.left="0",this.frame.style.top="0")},i=()=>{this.isFrameDragging&&(this.isFrameDragging=!1,r&&(r.style.cursor="grab"),document.body.style.cursor="")};e&&e.addEventListener("mousedown",n),document.addEventListener("mousemove",a),document.addEventListener("mouseup",i),this.topBarDragHandlers={mouseDown:n,mouseMove:a,mouseUp:i}}addDragFunctionality(){let e=!1,o,r,n,a;this.isDragging=!1,this.floatingButton.addEventListener("mousedown",i=>{e=!0,this.isDragging=!1,o=i.clientX,r=i.clientY;let m=this.floatingButton.getBoundingClientRect();n=m.left,a=m.top,this.floatingButton.style.cursor="grabbing",this.floatingButton.style.transition="none",i.preventDefault()}),document.addEventListener("mousemove",i=>{if(!e)return;let m=i.clientX-o,s=i.clientY-r;(Math.abs(m)>5||Math.abs(s)>5)&&(this.isDragging=!0);let l=n+m,p=a+s,u=50,d=window.innerWidth-u,c=window.innerHeight-u;l=Math.max(0,Math.min(l,d)),p=Math.max(0,Math.min(p,c)),this.floatingButton.style.left=l+"px",this.floatingButton.style.top=p+"px",this.floatingButton.style.right="auto",this.floatingButton.style.bottom="auto"}),document.addEventListener("mouseup",()=>{e&&(e=!1,this.floatingButton.style.cursor="pointer",this.floatingButton.style.transition="all 0.3s ease",setTimeout(()=>{this.isDragging=!1},100))})}hideProxyClient(){console.log("Hiding Ocot Client"),this.frame.style.display="none",this.getGeneralSettings().enableFloatingButton?(console.log("Showing floating button (enabled in settings)"),this.floatingButton.style.display="flex"):(console.log("Floating button disabled in settings"),this.floatingButton.style.display="none")}showProxyClient(){console.log("Showing Ocot Client, hiding floating button"),this.frame.style.display="flex",this.floatingButton.style.display="none"}getGeneralSettings(){let e=localStorage.getItem("ocot-general-settings");return e?JSON.parse(e):{enableFloatingButton:!0}}applyInitialSettings(){this.getGeneralSettings().enableFloatingButton?console.log("Initial settings: Floating button enabled"):(this.floatingButton.style.display="none",console.log("Initial settings: Floating button disabled"))}toggleProxyClient(){this.frame.style.display==="none"?this.showProxyClient():this.hideProxyClient()}removeProxyClient(){console.log("Completely removing Ocot Client from page"),this.frame&&this.frame.parentNode&&this.frame.parentNode.removeChild(this.frame),this.floatingButton&&this.floatingButton.parentNode&&this.floatingButton.parentNode.removeChild(this.floatingButton),this.frame=null,this.floatingButton=null,window.proxyFrame=null,console.log("Ocot Client completely removed")}showWelcomeView(){Object.values(this.views).forEach(e=>e.style.display="none"),this.views.welcomeView&&(this.views.welcomeView.style.display="flex"),this.sidebar.setActiveButton(null)}setupFrameStyle(){let e=this.frame;e.className="proxy-app-frame",e.style.position="fixed",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)",e.style.width="70vw",e.style.height="80vh",e.style.display="flex",e.style.flexDirection="column",e.style.color="#ffffff",e.style.zIndex="99999",this.normalFrameStyle={top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70vw",height:"80vh"}}createTopBar(){let e=document.createElement("div");e.className="proxy-top-bar",e.style.cssText=`
      height: 40px;
      background: linear-gradient(135deg, #23272f, #2a2e37);
      border-bottom: 1px solid #404040;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      user-select: none;
      flex-shrink: 0;
    `;let o=document.createElement("div");o.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      color: #00bfff;
      font-weight: 600;
      font-size: 0.9rem;
    `,o.innerHTML=`
      <span style="font-size: 1.1rem;">\u{1F527}</span>
      <span>Ocot Client</span>
    `;let r=document.createElement("div");r.style.cssText=`
      display: flex;
      align-items: center;
      gap: 4px;
    `;let n=this.createWindowControlButton("\u2212","#fbbf24",()=>{this.hideProxyClient()});n.title="Minimize (Hide App)";let a=this.createWindowControlButton("\u25A1","#10b981",()=>{this.toggleMaximize()});a.title="Maximize/Restore",this.maximizeBtn=a;let i=this.createWindowControlButton("\xD7","#ef4444",()=>{this.removeProxyClient()});return i.title="Close (Remove App)",r.appendChild(n),r.appendChild(a),r.appendChild(i),e.appendChild(o),e.appendChild(r),e}createWindowControlButton(e,o,r){let n=document.createElement("button");return n.innerHTML=e,n.style.cssText=`
      width: 24px;
      height: 24px;
      border: none;
      border-radius: 4px;
      background: ${o};
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      transition: all 0.2s ease;
      line-height: 1;
    `,n.addEventListener("mouseenter",()=>{n.style.transform="scale(1.1)",n.style.opacity="0.8"}),n.addEventListener("mouseleave",()=>{n.style.transform="scale(1)",n.style.opacity="1"}),n.addEventListener("click",r),n.addEventListener("mousedown",a=>{a.stopPropagation()}),n}toggleMaximize(){this.isMaximized?this.restoreFrame():this.maximizeFrame()}maximizeFrame(){this.isMaximized=!0;let e=this.frame;e.style.top="0",e.style.left="0",e.style.transform="none",e.style.width="100vw",e.style.height="100vh";let o=e.querySelector(".proxy-top-bar div:first-child");o&&(o.style.cursor="default"),this.maximizeBtn&&(this.maximizeBtn.innerHTML="\u2750",this.maximizeBtn.title="Restore")}restoreFrame(){this.isMaximized=!1;let e=this.frame;e.style.top=this.normalFrameStyle.top,e.style.left=this.normalFrameStyle.left,e.style.transform=this.normalFrameStyle.transform,e.style.width=this.normalFrameStyle.width,e.style.height=this.normalFrameStyle.height;let o=e.querySelector(".proxy-top-bar div:first-child");o&&(o.style.cursor="grab"),this.maximizeBtn&&(this.maximizeBtn.innerHTML="\u25A1",this.maximizeBtn.title="Maximize")}createContent(){let e=document.createElement("div");e.className="proxy-content",e.style.flexGrow="1",e.style.display="flex",e.style.flexDirection="column",e.style.width="100%",e.style.height="100%",e.style.padding="0",e.style.position="relative";let o=document.createElement("div");o.className="content-overlay",e.appendChild(o),this.views.welcomeView=(0,En.default)(),this.views.proxyView=(0,Sn.default)(),this.views.notesView=(0,Bn.default)(),this.views.calculatorView=(0,Tn.default)(),this.views.consoleView=(0,Ln.default)(),this.views.cloakingView=(0,zn.default)(),this.views.historyFloodView=(0,Mn.default)(),this.views.corsProxyView=(0,Pn.default)(),this.views.pocketBrowserView=(0,In.default)(),this.views.scriptsView=(0,An.default)(),this.views.settingsView=(0,On.default)(),this.views.bookmarkletsView=(0,jn.default)();let r=document.createElement("div");return r.innerHTML=(0,Hn.default)(),r.style.display="none",this.views.gamesView=r,Object.values(this.views).forEach(n=>{n.style.position="relative",n.style.zIndex="1",e.appendChild(n)}),Object.values(this.views).forEach(n=>n.style.display="none"),this.views.welcomeView&&(this.views.welcomeView.style.display="flex"),this.setupSidebarEvents(),e}setupSidebarEvents(){let e=this.views,o=this.sidebarButtons,r=()=>{Object.values(e).forEach(i=>i.style.display="none")},n=i=>{this.sidebar.setActiveButton(i)},a={proxyButton:()=>{r(),e.proxyView.style.display="flex",n("proxyButton")},notesButton:()=>{r(),e.notesView.style.display="block",n("notesButton")},calculatorButton:()=>{r(),e.calculatorView.style.display="block",n("calculatorButton"),this.initCalculator()},consoleButton:()=>{r(),e.consoleView.style.display="block",n("consoleButton")},cloakingButton:()=>{r(),e.cloakingView.style.display="block",n("cloakingButton")},historyFloodButton:()=>{r(),e.historyFloodView.style.display="block",n("historyFloodButton")},corsProxyButton:()=>{r(),e.corsProxyView.style.display="block",n("corsProxyButton")},pocketBrowserButton:()=>{r(),e.pocketBrowserView.style.display="block",n("pocketBrowserButton")},scriptsButton:()=>{r(),e.scriptsView.style.display="block",n("scriptsButton")},settingsButton:()=>{r(),e.settingsView.style.display="block",n("settingsButton")},bookmarkletsButton:()=>{r(),e.bookmarkletsView.style.display="block",n("bookmarkletsButton")},gamesButton:()=>{r(),e.gamesView.style.display="block",n("gamesButton")}};this.attachButtonEventListeners(a),document.addEventListener("tabOrderChanged",()=>{this.refreshSidebar()})}attachButtonEventListeners(e){let o=this.sidebarButtons;Object.keys(e).forEach(r=>{if(o[r]){let n=o[r],a=n.cloneNode(!0);n.parentNode.replaceChild(a,n),o[r]=a,o[r].addEventListener("click",e[r])}})}refreshSidebar(){this.sidebar.refreshButtonOrder(),this.sidebarButtons=this.sidebar.getButtons();let e=this.views,o=()=>{Object.values(e).forEach(a=>a.style.display="none")},r=a=>{this.sidebar.setActiveButton(a)},n={proxyButton:()=>{o(),e.proxyView.style.display="flex",r("proxyButton")},notesButton:()=>{o(),e.notesView.style.display="block",r("notesButton")},calculatorButton:()=>{o(),e.calculatorView.style.display="block",r("calculatorButton"),this.initCalculator()},consoleButton:()=>{o(),e.consoleView.style.display="block",r("consoleButton")},cloakingButton:()=>{o(),e.cloakingView.style.display="block",r("cloakingButton")},historyFloodButton:()=>{o(),e.historyFloodView.style.display="block",r("historyFloodButton")},corsProxyButton:()=>{o(),e.corsProxyView.style.display="block",r("corsProxyButton")},pocketBrowserButton:()=>{o(),e.pocketBrowserView.style.display="block",r("pocketBrowserButton")},scriptsButton:()=>{o(),e.scriptsView.style.display="block",r("scriptsButton")},settingsButton:()=>{o(),e.settingsView.style.display="block",r("settingsButton")},bookmarkletsButton:()=>{o(),e.bookmarkletsView.style.display="block",r("bookmarkletsButton")},gamesButton:()=>{o(),e.gamesView.style.display="block",r("gamesButton")}};this.attachButtonEventListeners(n)}initCalculator(){let e=this.views.calculatorView;if(!e._initialized){let o=e.querySelector("#calcDisplay"),r=e.querySelectorAll(".calc-btn"),n="";r.forEach(a=>{a.style.padding="10px",a.style.fontSize="16px",a.style.cursor="pointer",a.addEventListener("click",()=>{let i=a.getAttribute("data-value");if(i==="C")n="";else if(i==="=")try{let m=n.replace(/[^0-9+\-*/.() ]/g,"");if(m!==n)n="Invalid Input";else if(m.trim()==="")n="";else{let s=Function('"use strict"; return ('+m+")")();n=typeof s=="number"&&isFinite(s)?s.toString():"Error"}}catch{n="Error"}else n+=i;o.value=n})}),e._initialized=!0}}},So=new yt;window.proxyClientApp=So;So.launch()});Fn();})();
