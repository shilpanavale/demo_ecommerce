"use client";

import { motion } from "framer-motion";
import { BrandMark } from "./brand-mark";
import { SareeModel } from "./saree-model";

export function StoreHero() {
  return (
    <section id="home" className="section-shell pt-5">
      <div className="botanical-hero leaf-pattern relative min-h-[370px] overflow-hidden sm:min-h-[520px] lg:min-h-[650px]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0)_45%,rgba(21,50,28,0.52))]" />
        <div className="absolute left-[5%] top-[7%] size-9 rounded-full border-2 border-[#c83234]/80 opacity-80">
          <div className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#c83234]" />
        </div>
        <div className="absolute bottom-[21%] left-[8%] h-7 w-9 rotate-[-18deg] rounded-full border border-[#b92d2b] bg-[#cc4934]/75" />
        <div className="absolute bottom-[25%] left-[9.8%] h-5 w-6 rotate-[24deg] rounded-full border border-[#1b633d] bg-[#3b8b55]/80" />
        <div className="absolute right-[10%] top-[12%] size-12 rounded-full border border-white/45 opacity-70" />

        <div className="relative z-10 grid min-h-[370px] items-center sm:min-h-[520px] lg:min-h-[650px] lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center px-5 pt-8 lg:pt-0"
          >
            <BrandMark />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden h-full min-h-[520px] items-end justify-center gap-2 pr-8 lg:flex"
          >
            <SareeModel sari="green" className="max-h-[500px] max-w-[235px]" />
            <SareeModel sari="purple" className="max-h-[500px] max-w-[235px]" />
          </motion.div>
        </div>

        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {[0, 1, 2, 3].map((dot) => (
            <button
              key={dot}
              type="button"
              aria-label={`Go to slide ${dot + 1}`}
              className="size-2.5 rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)] transition hover:scale-125"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
