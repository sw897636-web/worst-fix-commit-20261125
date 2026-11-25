// Worst Fix Ever: Funniest Commit Message
// Entry for make.fun competition
// u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722
//
// Writes one commit-message line (53 chars, pure ASCII) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY = "fix: login loop, now everyone logs in as someone else";
// 53 chars, pure ASCII, one line. Counted char by char; see candidates.md.

function main(): void {
  // Guard the gate: 1-100 chars, exactly one line, ASCII only, no padding.
  if (ENTRY.length < 1 || ENTRY.length > 100) {
    throw new Error(`entry is ${ENTRY.length} chars, must be 1-100`);
  }
  if (ENTRY !== ENTRY.trim() || ENTRY.includes("\n") || /[^\x00-\x7F]/.test(ENTRY)) {
    throw new Error("entry must be a single trimmed ASCII line");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

  // Also drop a copy next to this script so the repo carries entry.txt.
  try {
    const here = dirname(fileURLToPath(import.meta.url));
    writeFileSync(join(here, "entry.txt"), ENTRY + "\n", "utf8");
  } catch {
    // The grader sandbox may not allow writing beside the script; /output is what counts.
  }
}

main();
