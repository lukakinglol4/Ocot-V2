#!/usr/bin/env node

/**
 * Simple Development Server for Ocot Client
 * Alternative to the main dev-server.js with basic functionality
 */

const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8081;

async function buildAndWatch() {
  try {
    console.log("🏗️  Building and watching files...\n");

    // Ensure dist directory exists
    if (!fs.existsSync("dist")) {
      fs.mkdirSync("dist", { recursive: true });
    }

    // Build with watch mode
    const result = await esbuild.build({
      entryPoints: ["build/main.js"],
      bundle: true,
      outfile: "dist/bundle.js",
      format: "iife",
      sourcemap: true,
      watch: {
        onRebuild(error, result) {
          if (error) {
            console.error("❌ Build failed:", error);
          } else {
            console.log(
              "✅ Rebuild successful at",
              new Date().toLocaleTimeString()
            );
          }
        },
      },
      define: {
        "process.env.NODE_ENV": '"development"',
      },
    });

    console.log("✅ Initial build complete");
    console.log("👀 Watching for changes...");
    console.log(`📁 Output: ${path.resolve("dist/bundle.js")}`);
    console.log(`\n💡 Open index.html in your browser or use a local server`);
    console.log(`   Example: npx http-server -p ${PORT} -c-1`);
    console.log(`\n⏹️  Press Ctrl+C to stop watching\n`);
  } catch (error) {
    console.error("❌ Build failed:", error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.log("\n🛑 Stopping watch mode...");
  process.exit(0);
});

buildAndWatch();
