#!/usr/bin/env node
// Script to update version.ts with the current package.json version

const fs = require("fs");
const path = require("path");

// Read package.json
const packagePath = path.join(__dirname, "../package.json");
const versionPath = path.join(__dirname, "../src/constants/version.ts");

try {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  const version = packageJson.version;

  // Generate version.ts content
  const versionContent = `// This file contains the application version
// This gets updated automatically during build process
export const APP_VERSION = "${version}";
`;

  // Write version.ts
  fs.writeFileSync(versionPath, versionContent);
  console.log(`✅ Updated version.ts with version ${version}`);
} catch (error) {
  console.error("❌ Failed to update version.ts:", error.message);
  process.exit(1);
}
