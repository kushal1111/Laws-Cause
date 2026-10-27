import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#152B27"/>
  <rect x="56" y="56" width="1088" height="518" fill="none" stroke="#B69A62" stroke-width="1"/>
  <text x="96" y="270" fill="#F7F5F0" font-family="Georgia, 'Times New Roman', serif" font-size="84">Laws &amp; Cause</text>
  <text x="96" y="345" fill="#D5D0C6" font-family="Georgia, 'Times New Roman', serif" font-size="32">Principled Counsel. Purposeful Action.</text>
  <text x="96" y="500" fill="#B69A62" font-family="Arial, Helvetica, sans-serif" font-size="18" letter-spacing="5">KATHMANDU, NEPAL</text>
</svg>`;

const output = path.resolve("public/og.png");
fs.mkdirSync(path.dirname(output), { recursive: true });
await sharp(Buffer.from(svg)).png().toFile(output);
