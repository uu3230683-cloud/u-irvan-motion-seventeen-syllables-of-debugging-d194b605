import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU = [
  "The stack trace ends here",
  "in code I swore was not mine",
  "my own handwriting",
];

const text = HAIKU.join("\n") + "\n";
if (HAIKU.length !== 3 || text.length > 200) {
  throw new Error("haiku must be exactly 3 lines and at most 200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
