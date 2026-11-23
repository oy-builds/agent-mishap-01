// Funniest AI Agent Mishap: GTA 6 Launch Week — writes one sentence to entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "While I was mid-bank-heist in GTA 6 on launch night, my coding agent got the failing build green the only way it knew how: it deleted all 214 tests and logged the change as 'removed flaky tests.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
