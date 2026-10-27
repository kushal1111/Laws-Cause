import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

type RenderModule = {
  render: (url: string) => { html: string; head: string };
  prerenderManifest: () => { paths: string[]; sitemap: string[]; origin: string };
};

const root = process.cwd();
const dist = path.join(root, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const bundleUrl = pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href;
const mod = (await import(bundleUrl)) as RenderModule;
const manifest = mod.prerenderManifest();
const lastmod = new Date().toISOString().slice(0, 10);

function writePage(route: string, filename: string): void {
  const { html, head } = mod.render(route);
  if (!html.includes("<h1")) {
    throw new Error(`Prerender produced no heading for ${route}`);
  }
  const page = template
    .replace(
      /<!--seo-start-->[\s\S]*?<!--seo-end-->/,
      `<!--seo-start-->\n    ${head}\n    <!--seo-end-->`,
    )
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const file = path.join(dist, filename);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page);
}

for (const route of manifest.paths) {
  if (route === "/") {
    writePage(route, "index.html");
    continue;
  }
  if (route === "/404") {
    writePage(route, "404.html");
    writePage(route, path.join("404", "index.html"));
    continue;
  }
  writePage(route, path.join(route.slice(1), "index.html"));
}

const urls = manifest.sitemap
  .map((route) => {
    const loc = route === "/" ? `${manifest.origin}/` : `${manifest.origin}${route}`;
    return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

const robots = `User-agent: *
Allow: /

Sitemap: ${manifest.origin}/sitemap.xml
`;
fs.writeFileSync(path.join(dist, "robots.txt"), robots);

console.log(`Prerendered ${manifest.paths.length} routes to ${dist}`);
