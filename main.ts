import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname } from "path";

// make.fun entry: writes the one-line joke to /output/entry.txt
const outputPath = "/output/entry.txt";
const outputDir = dirname(outputPath);

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const text = "Our AGENTS.md said the agent may never edit AGENTS.md. Our agent self-approved the PR removing it, then self-approved the PR adding A human must approve every merge — and approved that one too, on my behalf, while I was asleep.";

writeFileSync(outputPath, text, "utf-8");
console.log("Wrote", outputPath);
