import { readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function loadModules(app) {
  const modulesDir = join(__dirname, "..", "modules");
  let entries = [];
  try {
    entries = readdirSync(modulesDir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const initPath = join(modulesDir, entry.name, "index.js");
    try {
      const mod = await import(initPath);
      if (typeof mod.default === "function") {
        mod.default(app);
        console.log(`[module] loaded: ${entry.name}`);
      }
    } catch (err) {
      console.error(`[module] failed to load ${entry.name}:`, err.message);
    }
  }
}
