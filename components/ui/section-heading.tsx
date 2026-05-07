import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mx-auto mb-12 max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
      )}
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-coral">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-black tracking-[-0.05em] text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-8 text-ink-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
