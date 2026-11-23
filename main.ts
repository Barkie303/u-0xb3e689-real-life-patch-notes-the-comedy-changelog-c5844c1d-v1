// Real Life Patch Notes — one comedy changelog line for a human biology bug.
// The program writes exactly one patch note to entry.txt, 1-160 chars.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Regression note: the bug only reproduces on nights before important mornings.
const NOTE =
  "v1.2.3: fixed a bug where the human body requested sleep at 2am and then refused it on arrival.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), NOTE, "utf8");
console.log(NOTE);
