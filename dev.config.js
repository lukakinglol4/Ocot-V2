/**
 * Development Configuration for Ocot Client
 */

module.exports = {
  // Server settings
  server: {
    port: process.env.PORT || 8080,
    host: process.env.HOST || "localhost",
    fallback: "index.html",
  },

  // Build settings
  build: {
    entryPoint: "build/main.js",
    outfile: "dist/bundle.js",
    format: "iife",
    sourcemap: true,
    minify: false, // Set to true for production
    target: ["es2020"], // Modern browsers
    define: {
      "process.env.NODE_ENV": '"development"',
    },
  },

  // Development features
  features: {
    liveReload: true,
    hotReload: false, // esbuild doesn't support HMR out of the box
    sourceMaps: true,
    errorOverlay: true,
  },

  // File watching
  watch: {
    patterns: ["src/**/*", "index.html", "src/styles/**/*.css"],
    ignore: ["node_modules/**", "dist/**", ".git/**"],
  },
};
