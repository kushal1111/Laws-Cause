import fs from "node:fs";
import path from "node:path";

const failures: string[] = [];
const practice = fs.readFileSync("src/content/practiceAreas.ts", "utf8");
const slugCount = practice.match(/slug: "/g)?.length ?? 0;
const featuredCount = practice.match(/featured: true/g)?.length ?? 0;
if (slugCount !== 12) failures.push(`Expected 12 practice-area slugs, found ${slugCount}`);
if (featuredCount !== 6)
  failures.push(`Expected 6 featured practice areas, found ${featuredCount}`);

const index = fs.readFileSync("src/content/articles/index.ts", "utf8");
if (/from\s+["'][^"']*drafts/.test(index)) {
  failures.push("Published article index imports the drafts folder");
}

const draftDir = path.resolve("src/content/articles/drafts");
for (const file of fs.readdirSync(draftDir)) {
  const text = fs.readFileSync(path.join(draftDir, file), "utf8");
  if (!text.includes('status: "draft"')) failures.push(`${file} is not marked draft`);
  if (!text.includes("author: null") || !text.includes("publishedAt: null")) {
    failures.push(`${file} has publication metadata`);
  }
}

const team = fs.readFileSync("src/content/team.ts", "utf8");
if (!/lawyers:\s*Lawyer\[\]\s*=\s*\[\s*\]/.test(team)) {
  failures.push(
    "Team file no longer uses the empty roster. Confirm every profile before publishing.",
  );
}

const banned = [
  "lorem ipsum",
  "award-winning",
  "years of experience",
  "success rate",
  "we guarantee",
];
for (const file of walk(path.resolve("src"))) {
  if (!file.endsWith(".ts") && !file.endsWith(".tsx")) continue;
  const text = fs.readFileSync(file, "utf8").toLowerCase();
  for (const phrase of banned) {
    if (text.includes(phrase))
      failures.push(`${path.relative(process.cwd(), file)} contains "${phrase}"`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Content checks passed.");

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}
