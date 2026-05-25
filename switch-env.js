#!/usr/bin/env node

/**
 * Environment Switcher for Proxy Client
 *
 * Usage:
 *   node scripts/switch-env.js dev
 *   node scripts/switch-env.js prod
 *   node scripts/switch-env.js          # Shows current environment
 */

const fs = require("fs");
const path = require("path");

const ENV_FILE = path.join(__dirname, "..", "src", "constants", "env.ts");

function getCurrentEnv() {
  const content = fs.readFileSync(ENV_FILE, "utf8");
  const match = content.match(
    /export const ENV: Environment = ['"`](\w+)['"`];/
  );
  return match ? match[1] : "unknown";
}

function setEnvironment(env) {
  if (!["dev", "prod"].includes(env)) {
    console.error(`❌ Invalid environment: ${env}. Use 'dev' or 'prod'.`);
    process.exit(1);
  }

  const content = fs.readFileSync(ENV_FILE, "utf8");
  const newContent = content.replace(
    /export const ENV: Environment = ['"`]\w+['"`];/,
    `export const ENV: Environment = '${env}';`
  );

  fs.writeFileSync(ENV_FILE, newContent, "utf8");

  console.log(`✅ Environment switched to: ${env}`);
  console.log(`📁 Updated: ${ENV_FILE}`);

  if (env === "dev") {
    console.log(`🏗️  Development mode:`);
    console.log(`   - Uses local JSON files only`);
    console.log(`   - No CDN requests`);
    console.log(`   - Full debug logging`);
  } else {
    console.log(`🚀 Production mode:`);
    console.log(`   - CDN-first data loading`);
    console.log(`   - Local/TypeScript fallbacks`);
    console.log(`   - Minimal logging`);
  }

  console.log(`\n💡 Run 'npm run build' to apply changes`);
}

function showCurrentEnv() {
  const current = getCurrentEnv();
  console.log(`📋 Current environment: ${current}`);

  if (current === "dev") {
    console.log(`🏗️  Development mode - Local files only`);
  } else if (current === "prod") {
    console.log(`🚀 Production mode - CDN + fallbacks`);
  } else {
    console.log(`❓ Unknown environment configuration`);
  }
}

// Main logic
const targetEnv = process.argv[2];

if (!targetEnv) {
  showCurrentEnv();
} else {
  setEnvironment(targetEnv);
}
