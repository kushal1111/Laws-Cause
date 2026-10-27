import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const failures: string[] = [];

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return [full];
  });
}

const htmlFiles = walk(dist).filter((file) => file.endsWith(".html"));
const titles = new Map<string, string>();

const required = [
  "index.html",
  "404.html",
  "sitemap.xml",
  "robots.txt",
  "og.png",
  path.join("about", "index.html"),
  path.join("practice-areas", "index.html"),
  path.join("practice-areas", "corporate-commercial-law", "index.html"),
  path.join("our-team", "index.html"),
  path.join("insights", "index.html"),
  path.join("contact", "index.html"),
  path.join("privacy-policy", "index.html"),
  path.join("legal-disclaimer", "index.html"),
];

for (const relative of required) {
  if (!fs.existsSync(path.join(dist, relative))) failures.push(`Missing ${relative}`);
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const relative = path.relative(dist, file);
  if (!html.includes("<h1")) failures.push(`${relative} has no h1`);
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  if (!title) failures.push(`${relative} has no title`);
  if (titles.has(title) && !relative.replaceAll("\\", "/").includes("404")) {
    failures.push(`Duplicate title "${title}" in ${relative}`);
  }
  titles.set(title, relative);
  if (!html.includes('rel="canonical"') && !html.includes('rel="canonical"')) {
    failures.push(`${relative} has no canonical`);
  }
  if (html.includes("api.resend.com") || html.includes("RESEND_API_KEY")) {
    failures.push(`${relative} leaks mail credentials`);
  }
  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((match) => match[1] ?? "");
  for (const href of hrefs) {
    if (
      href.startsWith("/assets/") ||
      href === "/og.png" ||
      href === "/favicon.svg" ||
      href === "/site.webmanifest" ||
      href === "/sitemap.xml"
    ) {
      continue;
    }
    const target =
      href === "/" ? path.join(dist, "index.html") : path.join(dist, href.slice(1), "index.html");
    const fileTarget = path.join(dist, href.slice(1));
    if (!fs.existsSync(target) && !fs.existsSync(fileTarget)) {
      failures.push(`${relative} links to missing ${href}`);
    }
  }
}

const home = fs.readFileSync(path.join(dist, "index.html"), "utf8");
if (!home.includes("Law with Purpose")) failures.push("Home hero text missing from static HTML");
if (!home.includes("Laws &amp; Cause") && !home.includes("Laws & Cause")) {
  failures.push("Firm name missing from static HTML");
}

const notFound = fs.readFileSync(path.join(dist, "404.html"), "utf8");
if (!notFound.includes("noindex")) failures.push("404.html is indexable");

const sitemap = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
if (sitemap.includes("/404")) failures.push("Sitemap includes 404");
if (!sitemap.includes("/practice-areas/family-law"))
  failures.push("Sitemap missing a practice area");
if (sitemap.includes("company-registration-in-nepal"))
  failures.push("Sitemap includes a draft article");

const assets = walk(dist)
  .filter((file) => file.endsWith(".js"))
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");
if (assets.includes("api.resend.com") || assets.includes("TURNSTILE_SECRET")) {
  failures.push("Client bundle contains server secrets or the mail API");
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files.`);
