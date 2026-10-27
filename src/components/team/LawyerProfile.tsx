import type { Lawyer } from "@/types/content";

export function LawyerProfile({ lawyer }: { lawyer: Lawyer }) {
  const initials = lawyer.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="border-t border-line pt-8">
      <div className="grid gap-6 sm:grid-cols-[8rem_1fr]">
        {lawyer.photo ? (
          <img
            src={lawyer.photo.src}
            width={lawyer.photo.width}
            height={lawyer.photo.height}
            alt={lawyer.photo.alt}
            className="h-32 w-32 object-cover"
            loading="lazy"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-32 w-32 items-center justify-center bg-stone font-serif text-3xl"
          >
            {initials}
          </div>
        )}
        <div>
          <h2 className="font-serif text-title">{lawyer.name}</h2>
          <p className="mt-1 text-sm tracking-wide text-muted">{lawyer.position}</p>
          <p className="mt-4 max-w-2xl text-pretty">{lawyer.biography}</p>
          {lawyer.focus.length > 0 ? (
            <p className="mt-4 text-sm">
              <span className="text-muted">Focus: </span>
              {lawyer.focus.join(", ")}
            </p>
          ) : null}
          {lawyer.education.length > 0 ? (
            <ul className="mt-4 space-y-1 text-sm">
              {lawyer.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {lawyer.qualifications.length > 0 ? (
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {lawyer.qualifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {lawyer.linkedin ? (
            <a
              className="mt-4 inline-block text-sm underline"
              href={lawyer.linkedin}
              rel="noreferrer"
            >
              LinkedIn profile
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
