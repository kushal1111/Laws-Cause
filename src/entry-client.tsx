import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "@/app/AppRoutes";
import "@fontsource-variable/cormorant-garamond/wght.css";
import "@fontsource-variable/cormorant-garamond/wght-italic.css";
import "@fontsource-variable/manrope/wght.css";
import "@/styles/globals.css";

const pathname = window.location.pathname;
if (pathname !== "/" && pathname.endsWith("/")) {
  const next = pathname.replace(/\/+$/, "") + window.location.search + window.location.hash;
  window.history.replaceState(null, "", next);
}

const root = document.getElementById("root");
if (!root) throw new Error("Root element missing");

const app = (
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);

if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
