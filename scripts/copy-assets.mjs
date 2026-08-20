import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const publicDir = join(root, "public");

function walk(dir, visitAssets) {
  for (const name of readdirSync(dir)) {
    if (
      name.startsWith(".") ||
      name === "node_modules" ||
      name === "public" ||
      name === "app" ||
      name === "out" ||
      name === "components" ||
      name === "lib" ||
      name === "scripts"
    ) {
      continue;
    }
    const full = join(dir, name);
    if (!statSync(full).isDirectory()) continue;
    if (name === "assets") visitAssets(full);
    else walk(full, visitAssets);
  }
}

if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });

let copied = 0;
walk(root, (assetsDir) => {
  const rel = relative(root, assetsDir);
  const dest = join(publicDir, rel);
  mkdirSync(dest, { recursive: true });
  cpSync(assetsDir, dest, { recursive: true });
  copied += 1;
  console.log(`copied ${rel}`);
});

console.log(`copied ${copied} assets folder(s)`);
