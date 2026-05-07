import { storeNavItems } from "@/lib/content";
import { StoreIcon } from "./store-icons";

export function StoreFooter() {
  return (
    <footer id="newsletter" className="border-t border-[#e8e4da] bg-[#faf8f2] py-9">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <div className="flex items-center gap-2 text-[#c83234]">
            <span className="flex size-8 items-center justify-center rounded-full border border-current">
              <StoreIcon name="leaf" className="size-4" />
            </span>
            <p className="text-sm font-bold text-[#1a1a1a]">Moolchand Mill Pvt Ltd</p>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#666]">
            Traditional sarees, festive edits, and elegant drapes crafted for every
            celebration.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {storeNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold text-[#555] transition hover:text-[#c83234] focus-visible:focus-ring"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
