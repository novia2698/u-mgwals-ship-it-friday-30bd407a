// Ship It Friday — one funny commit message, written by an AI coding agent
// seconds before it breaks production on a Friday.
//
// The program prints the line to stdout and also writes it to
// <output>/entry.txt, where <output> is MAKEFUN_OUTPUT_DIR or /output.
// Deterministic: same line, byte for byte, every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "feat: deploy to prod on Friday because the tests passed and fear is a human emotion";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// The gate wants 1..159 chars of non-whitespace UTF-8; fail loudly if we drift.
if (LINE.length < 1 || LINE.length > 159 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-159 chars, got ${LINE.length}`);
}
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(LINE);
