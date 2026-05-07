import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink/[0.08] bg-white/70 py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <a href="#home" className="flex items-center gap-3 focus-visible:focus-ring">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-ink text-lg font-black text-white">
            L
          </span>
          <span>
            <span className="block text-base font-black tracking-[-0.04em] text-ink">
              Luma Commerce
            </span>
            <span className="block text-sm font-medium text-ink-muted">
              Premium ecommerce experiences.
            </span>
          </span>
        </a>

        <div className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-ink-muted transition hover:text-ink focus-visible:focus-ring"
            >
              {item.label}
            </a>
          ))}
        </div>

        <p className="text-sm font-semibold text-ink-muted">
          &copy; {new Date().getFullYear()} Luma Commerce.
        </p>
      </div>
    </footer>
  );
}
