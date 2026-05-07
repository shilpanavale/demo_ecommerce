"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { storeNavItems } from "@/lib/content";
import { StoreIcon } from "./store-icons";

export function StoreNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#050505] text-white">
      <nav
        className="section-shell flex h-9 items-center justify-between text-[11px] font-medium tracking-tight sm:h-11"
        aria-label="Store navigation"
      >
        <a href="#home" className="flex items-center gap-2 focus-visible:focus-ring">
          <span className="flex size-5 items-center justify-center rounded-full border border-[#b81f29] text-[#b81f29]">
            <StoreIcon name="leaf" className="size-3.5" />
          </span>
          <span className="hidden text-[10px] font-semibold sm:inline">Moolchand Mill Pvt Ltd</span>
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {storeNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10px] text-white/85 transition hover:text-white focus-visible:focus-ring"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#account" className="hidden text-[10px] text-white/80 hover:text-white sm:inline">
            Account
          </a>
          <button
            type="button"
            className="rounded-full text-white/80 transition hover:text-white focus-visible:focus-ring"
            aria-label="Search"
          >
            <StoreIcon name="search" className="size-4" />
          </button>
          <button
            type="button"
            className="rounded-full text-white/80 transition hover:text-white focus-visible:focus-ring"
            aria-label="Cart"
          >
            <StoreIcon name="cart" className="size-4" />
          </button>
          <button
            type="button"
            className="rounded-full text-white/80 transition hover:text-white focus-visible:focus-ring md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <StoreIcon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="section-shell grid gap-1 py-3">
              {storeNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
