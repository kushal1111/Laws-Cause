import { Component, type ReactNode } from "react";
import { Outlet, useLocation } from "react-router";
import { DocumentMeta } from "@/components/ui/DocumentMeta";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

function RouteFallback() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="font-serif text-headline">This page could not be displayed.</h1>
      <p className="mt-4 text-muted">
        Refresh the page or return home. If the problem continues, use the contact form.
      </p>
    </div>
  );
}

class RenderBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return <RouteFallback />;
    return this.props.children;
  }
}

function BoundaryReset({ children }: { children: ReactNode }) {
  const location = useLocation();
  return <RenderBoundary key={location.pathname}>{children}</RenderBoundary>;
}

export function RootLayout() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <DocumentMeta />
      <Header />
      <main id="main" tabIndex={-1}>
        <BoundaryReset>
          <Outlet />
        </BoundaryReset>
      </main>
      <Footer />
    </>
  );
}
