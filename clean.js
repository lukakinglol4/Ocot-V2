const fs = require("fs");
const path = require("path");

function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`Removed: ${dirPath}`);
  }
}

// Remove dist and build directories
removeDir(path.join(__dirname, "..", "dist"));
removeDir(path.join(__dirname, "..", "build"));

console.log("Clean completed!");
