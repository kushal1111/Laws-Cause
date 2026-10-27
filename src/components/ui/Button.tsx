import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-forest text-ivory hover:bg-forest-deep",
  secondary: "border border-ink/20 bg-transparent text-ink hover:border-ink",
  light: "bg-ivory text-forest hover:bg-white",
} as const;

type Variant = keyof typeof variants;

type Props = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "onClick">;

export function Button({
  variant = "primary",
  children,
  className,
  href,
  type,
  onClick,
  ...rest
}: Props) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm tracking-[0.04em] transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a className={classes} href={href} rel="noreferrer" onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link className={classes} to={href} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type ?? "button"} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
