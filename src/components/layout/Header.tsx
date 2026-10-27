import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router";
import { consultationLabel, mainNav } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

const focusableSelector = "a[href], button:not([disabled]), summary";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const onScroll = () => {
      header.dataset.scrolled = window.scrollY > 8 ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (detailsRef.current) detailsRef.current.open = false;
  }, [location.pathname]);

  useEffect(() => {
    const details = detailsRef.current;
    if (!details) return;

    const focusable = () =>
      [...details.querySelectorAll<HTMLElement>(focusableSelector)].filter(
        (element) => element.getClientRects().length > 0,
      );

    const onToggle = () => {
      const bar = headerRef.current?.querySelector(":scope > div");
      if (bar) {
        for (const child of bar.children) {
          if (child === details) continue;
          if (details.open) child.setAttribute("inert", "");
          else child.removeAttribute("inert");
        }
      }
      document.getElementById("main")?.toggleAttribute("inert", details.open);
      document.querySelector("footer")?.toggleAttribute("inert", details.open);
      if (details.open) panelRef.current?.focus();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!details.open) return;
      if (event.key === "Escape") {
        details.open = false;
        details.querySelector("summary")?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    details.addEventListener("toggle", onToggle);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      details.removeEventListener("toggle", onToggle);
      document.removeEventListener("keydown", onKeyDown);
      document.getElementById("main")?.removeAttribute("inert");
      document.querySelector("footer")?.removeAttribute("inert");
    };
  }, []);

  const closeMenu = () => {
    if (detailsRef.current) detailsRef.current.open = false;
  };

  return (
    <header
      ref={headerRef}
      data-scrolled="false"
      className="sticky top-0 z-50 border-b border-transparent bg-ivory data-[scrolled=true]:border-line"
    >
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                cn(
                  "relative py-2 text-sm tracking-wide",
                  isActive ? "text-ink" : "text-muted hover:text-ink",
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive ? (
                    <span className="absolute right-0 bottom-0 left-0 h-px bg-gold-deep" />
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="/contact">{consultationLabel}</Button>
        </div>
        <details ref={detailsRef} className="mobile-nav lg:hidden">
          <summary aria-controls="mobile-menu">
            <span className="menu-open text-sm tracking-[0.16em] uppercase">Menu</span>
            <span className="menu-close text-sm tracking-[0.16em] uppercase">Close</span>
          </summary>
          <div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            tabIndex={-1}
            className="mobile-panel"
            data-tone="dark"
          >
            <Logo variant="light" onClick={closeMenu} />
            <nav aria-label="Mobile" className="mt-12 flex flex-col">
              {mainNav.map((item) => {
                const active = isActivePath(location.pathname, item.href);
                return (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    end={item.href === "/"}
                    onClick={closeMenu}
                    className="border-b border-white/15 py-4 font-serif text-4xl text-ivory"
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>
            <Button href="/contact" variant="light" className="mt-10" onClick={closeMenu}>
              {consultationLabel}
            </Button>
          </div>
        </details>
      </div>
    </header>
  );
}
