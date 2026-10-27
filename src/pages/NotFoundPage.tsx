import { Link } from "react-router";
import { Container } from "@/components/ui/Container";

export function NotFoundPage() {
  return (
    <Container className="py-20 md:py-28">
      <p className="text-xs tracking-[0.22em] text-gold-deep uppercase">404</p>
      <h1 className="mt-4 font-serif text-headline">This page is not available.</h1>
      <p className="mt-5 max-w-xl text-muted">
        The address may be mistyped, or the page may have been withdrawn. The rest of the site is
        unchanged.
      </p>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <li>
          <Link className="underline" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="underline" to="/practice-areas">
            Practice areas
          </Link>
        </li>
        <li>
          <Link className="underline" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </Container>
  );
}
