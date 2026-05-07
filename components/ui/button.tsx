import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-white shadow-[0_18px_40px_rgba(17,24,39,0.22)] hover:-translate-y-0.5 hover:bg-plum hover:shadow-[0_24px_54px_rgba(43,22,76,0.28)]",
  secondary:
    "border border-ink/10 bg-white/80 text-ink shadow-[0_14px_36px_rgba(17,24,39,0.08)] hover:-translate-y-0.5 hover:border-coral/30 hover:bg-white",
  ghost: "text-ink-muted hover:bg-white/70 hover:text-ink",
};

const baseClass =
  "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-[-0.01em] transition duration-300 focus-visible:focus-ring";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonAsAnchor | ButtonAsButton) {
  const classes = cn(baseClass, variants[variant], className);

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
