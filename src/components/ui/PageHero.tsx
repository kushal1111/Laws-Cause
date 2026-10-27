import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line">
      <Container className="py-14 md:py-20">
        {children}
        <p className="text-xs tracking-[0.22em] text-gold-deep uppercase">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-serif text-headline text-balance">{title}</h1>
        {lede ? <p className="mt-6 max-w-2xl text-lg text-pretty text-muted">{lede}</p> : null}
      </Container>
    </header>
  );
}
