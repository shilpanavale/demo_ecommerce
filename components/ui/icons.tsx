import type { SVGProps } from "react";

type IconName = "layers" | "spark" | "bag" | "chart" | "check" | "menu" | "close";

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...common} {...props}>
      {name === "layers" ? (
        <>
          <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
          <path d="m4 12 8 4.5 8-4.5" />
          <path d="m4 16.5 8 4.5 8-4.5" />
        </>
      ) : null}
      {name === "spark" ? (
        <>
          <path d="M13 2 8.8 9.6 2 11l6.8 1.4L13 20l4.2-7.6L24 11l-6.8-1.4L13 2Z" />
          <path d="M4 4.5 5.5 6 7 4.5" />
          <path d="m18 18 1.5 1.5L21 18" />
        </>
      ) : null}
      {name === "bag" ? (
        <>
          <path d="M6.5 8.5h11l1 11h-13l1-11Z" />
          <path d="M9 8.5V7a3 3 0 1 1 6 0v1.5" />
          <path d="M9.5 13.5c1.3 1.2 3.7 1.2 5 0" />
        </>
      ) : null}
      {name === "chart" ? (
        <>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="m7 15 4-5 3 3 5-7" />
          <path d="M18 6h1v1" />
        </>
      ) : null}
      {name === "check" ? <path d="m5 12 4 4L19 6" /> : null}
      {name === "menu" ? (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      ) : null}
      {name === "close" ? (
        <>
          <path d="m6 6 12 12" />
          <path d="M18 6 6 18" />
        </>
      ) : null}
    </svg>
  );
}
