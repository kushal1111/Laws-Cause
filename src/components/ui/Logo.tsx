import { Link } from "react-router";
import { cn } from "@/lib/cn";

export function Logo({
  variant = "dark",
  className,
  onClick,
}: {
  variant?: "dark" | "light";
  className?: string;
  onClick?: () => void;
}) {
  const ink = variant === "light" ? "#F7F5F0" : "#171C1B";
  return (
    <Link
      to="/"
      className={cn("inline-flex items-center gap-3 text-inherit no-underline", className)}
      aria-label="Laws & Cause, home"
      onClick={onClick}
    >
      <svg aria-hidden="true" viewBox="0 0 36 36" className="h-9 w-9 shrink-0">
        <rect
          x="0.75"
          y="0.75"
          width="34.5"
          height="34.5"
          fill="none"
          stroke={ink}
          strokeWidth="1"
        />
        <path d="M10 9v18h9" fill="none" stroke={ink} strokeWidth="1.6" />
        <path d="M27.5 12.5a6.2 6.2 0 1 0 .1 11" fill="none" stroke={ink} strokeWidth="1.6" />
      </svg>
      <span className="font-serif text-[1.05rem] leading-none tracking-[0.16em] uppercase sm:text-[1.15rem]">
        Laws <span className="italic tracking-normal">&</span> Cause
      </span>
    </Link>
  );
}
