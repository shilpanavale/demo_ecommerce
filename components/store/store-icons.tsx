import type { SVGProps } from "react";

type StoreIconName = "search" | "user" | "cart" | "menu" | "close" | "leaf";

export function StoreIcon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: StoreIconName }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      {...props}
    >
      {name === "search" ? (
        <>
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" />
        </>
      ) : null}
      {name === "user" ? (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M4.8 20c1.4-4 4-6 7.2-6s5.8 2 7.2 6" />
        </>
      ) : null}
      {name === "cart" ? (
        <>
          <path d="M6 7h14l-1.3 8.2H7.2L6 7Z" />
          <path d="M6 7 5.4 4H3" />
          <circle cx="9" cy="20" r="1.2" />
          <circle cx="17" cy="20" r="1.2" />
        </>
      ) : null}
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
      {name === "leaf" ? (
        <>
          <path d="M5 19c9.5-.8 13.5-6.7 14-14-7.3.5-13.2 4.5-14 14Z" />
          <path d="M5 19c2.8-4.3 6-7.1 10.5-9.5" />
        </>
      ) : null}
    </svg>
  );
}
