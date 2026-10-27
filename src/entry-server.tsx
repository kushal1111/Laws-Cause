import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "@/app/AppRoutes";
import { site } from "@/config/site";
import { getPrerenderPaths, getSitemapPaths } from "@/lib/paths";
import { renderHead, resolveMeta } from "@/lib/seo";

export function render(url: string): { html: string; head: string } {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
  return { html, head: renderHead(resolveMeta(url)) };
}

export function prerenderManifest(): { paths: string[]; sitemap: string[]; origin: string } {
  return {
    paths: getPrerenderPaths(),
    sitemap: getSitemapPaths(),
    origin: site.url,
  };
}
