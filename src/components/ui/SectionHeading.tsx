export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  id,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  id?: string;
}) {
  const titleClass = tone === "dark" ? "text-ivory" : "text-ink";
  const introClass = tone === "dark" ? "text-mist" : "text-muted";
  const eyebrowClass = tone === "dark" ? "text-mist" : "text-gold-deep";
  return (
    <div className="max-w-3xl">
      <p className={`text-xs tracking-[0.22em] uppercase ${eyebrowClass}`}>{eyebrow}</p>
      <h2 id={id} className={`mt-4 font-serif text-headline text-balance ${titleClass}`}>
        {title}
      </h2>
      {intro ? <p className={`mt-5 max-w-2xl text-pretty ${introClass}`}>{intro}</p> : null}
    </div>
  );
}
