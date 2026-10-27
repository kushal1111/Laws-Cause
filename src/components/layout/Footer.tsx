import { Link } from "react-router";
import { legalNav, mainNav } from "@/config/navigation";
import { site } from "@/config/site";
import { practiceAreas } from "@/content/practiceAreas";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-tone="dark" className="bg-forest-deep text-ivory">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-mist">
            {site.name} is an independent law firm in {site.city}, {site.country}. {site.tagline}
          </p>
        </div>
        <div className="lg:col-span-2">
          <p className="text-xs tracking-[0.18em] text-mist uppercase">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Practice areas" className="lg:col-span-3">
          <p className="text-xs tracking-[0.18em] text-mist uppercase">Practice areas</p>
          <ul className="mt-4 space-y-2 text-sm">
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <Link to={`/practice-areas/${area.slug}`} className="hover:underline">
                  {area.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:col-span-3">
          <p className="text-xs tracking-[0.18em] text-mist uppercase">Chambers</p>
          <p className="mt-4 text-sm">
            {site.city}, {site.country}
          </p>
          <p className="mt-3 text-sm">
            <span className="text-mist">Phone: </span>
            {site.phone ? (
              <a className="hover:underline" href={`tel:${site.phone.replaceAll(" ", "")}`}>
                {site.phone}
              </a>
            ) : (
              "To be provided"
            )}
          </p>
          <p className="mt-2 text-sm">
            <span className="text-mist">Email: </span>
            {site.email ? (
              <a className="hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            ) : (
              "To be provided"
            )}
          </p>
          {site.hours ? <p className="mt-3 text-sm text-mist">{site.hours}</p> : null}
          {site.social.length > 0 ? (
            <ul className="mt-4 space-y-2 text-sm">
              {site.social.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:underline" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
      <Container className="border-t border-white/15 py-6">
        <p className="max-w-3xl text-sm leading-6 text-mist">
          Information on this website is provided for general informational purposes and does not
          constitute legal advice.
        </p>
        <div className="mt-4 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
