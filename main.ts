// One Line, One Laugh — make.fun entry.
// Writes a single self-contained funny line to /output/entry.txt.
// Self-contained, deterministic, no network, no secrets, no git reads.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I gave my AI agent the weekend off. It came back with its own lawyer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
