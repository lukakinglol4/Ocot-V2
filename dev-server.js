#!/usr/bin/env node

const esbuild = require("esbuild");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "localhost";

async function startDevServer() {
  try {
    // Create context for building and serving
    const ctx = await esbuild.context({
      entryPoints: ["build/main.js"],
      bundle: true,
      outfile: "dist/bundle.js",
      format: "iife",
      sourcemap: true,
      define: {
        "process.env.NODE_ENV": '"development"',
      },
      // Enable live reload
      banner: {
        js: `
          (() => {
            new EventSource('/esbuild').addEventListener('change', () => location.reload());
          })();
        `,
      },
    });

    // Start the development server
    const server = await ctx.serve({
      servedir: ".",
      host: HOST,
      port: PORT,
      fallback: "index.html",
    });

    const actualHost = server.host || HOST;
    const actualPort = server.port || PORT;

    console.log(
      `🚀 Development server started at http://${actualHost}:${actualPort}`
    );
    console.log(`📁 Serving files from: ${path.resolve(".")}`);
    console.log(`📦 Bundle output: dist/bundle.js`);
    console.log(`🔄 Live reload enabled`);
    console.log(
      `\n💡 Open your browser and navigate to http://${actualHost}:${actualPort}`
    );
    console.log(`\n🛠️  Development mode features:`);
    console.log(`   - Hot reloading on file changes`);
    console.log(`   - Source maps for debugging`);
    console.log(`   - ES6 modules support`);
    console.log(`\n⏹️  Press Ctrl+C to stop the server\n`);

    // Handle graceful shutdown
    process.on("SIGINT", () => {
      console.log("\n🛑 Shutting down development server...");
      ctx.dispose();
      process.exit(0);
    });

    process.on("SIGTERM", () => {
      console.log("\n🛑 Shutting down development server...");
      ctx.dispose();
      process.exit(0);
    });
  } catch (error) {
    console.error("❌ Failed to start development server:", error);
    process.exit(1);
  }
}

// Additional utility functions
function ensureDistDirectory() {
  const distDir = path.join(process.cwd(), "dist");
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
    console.log("📁 Created dist directory");
  }
}

// Initialize
console.log("🏗️  Starting Ocot Client Development Server...\n");
ensureDistDirectory();
startDevServer();
