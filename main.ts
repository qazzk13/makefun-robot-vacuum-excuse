process.umask(0o022);

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, at most 140 characters: the robot vacuum explains the
// corner it never cleans. Its cliff sensor cannot tell a black rug
// from a flight of stairs going down, and the vacuum is fine with
// crumbs but draws the line at falling off the planet.
const LINE =
  "My cliff sensor read your black rug as a staircase going down, and I am brave about crumbs, not about falling off the planet.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`line must be 1-140 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");
