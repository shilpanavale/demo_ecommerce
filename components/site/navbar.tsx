"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main navigation"
        className={cn(
          "section-shell flex items-center justify-between rounded-full px-4 py-3 transition duration-300 sm:px-5",
          isScrolled ? "glass-panel" : "bg-white/50",
        )}
      >
        <a href="#home" className="group flex items-center gap-3 focus-visible:focus-ring">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-ink text-lg font-black text-white shadow-card transition duration-300 group-hover:rotate-[-6deg]">
            L
          </span>
          <span>
            <span className="block text-base font-black tracking-[-0.04em] text-ink">
              Luma
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
              Commerce
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-2 rounded-full bg-white/70 p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-ink-muted transition hover:bg-cream hover:text-ink focus-visible:focus-ring"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#contact" variant="ghost" className="min-h-11 px-4">
            Sign in
          </Button>
          <Button href="#pricing" className="min-h-11 px-5">
            Start free
          </Button>
        </div>

        <button
          type="button"
          className="flex size-12 items-center justify-center rounded-full bg-ink text-white transition hover:bg-plum focus-visible:focus-ring lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <Icon name={isOpen ? "close" : "menu"} className="size-5" />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.24 }}
            className="section-shell mt-3 rounded-[2rem] border border-white/70 bg-white/[0.92] p-4 shadow-card backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-base font-bold text-ink transition hover:bg-cream focus-visible:focus-ring"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button href="#pricing" className="mt-2 w-full" onClick={() => setIsOpen(false)}>
                Start free
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
