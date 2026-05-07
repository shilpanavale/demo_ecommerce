"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { metrics } from "@/lib/content";

const heroCardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.18 + index * 0.1,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="absolute left-1/2 top-20 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-coral/20 blur-3xl" />
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/[0.72] px-4 py-2 text-sm font-bold text-plum shadow-[0_12px_40px_rgba(43,22,76,0.08)] backdrop-blur-xl"
          >
            <span className="size-2 rounded-full bg-coral shadow-[0_0_0_6px_rgba(255,111,97,0.14)]" />
            New: AI merchandising playbooks
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl text-balance text-5xl font-black leading-[0.95] tracking-[-0.07em] text-ink sm:text-6xl lg:text-7xl"
          >
            Turn every product drop into a premium shopping experience.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-ink-muted sm:text-xl"
          >
            Build responsive storefronts, high-converting checkout flows, and lifecycle
            campaigns from one fast, beautifully crafted commerce platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#pricing">Explore pricing</Button>
            <Button href="#features" variant="secondary">
              See features
            </Button>
          </motion.div>

          <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={heroCardVariants}
                className="rounded-[1.5rem] border border-white/70 bg-white/[0.64] p-4 shadow-[0_14px_36px_rgba(17,24,39,0.06)] backdrop-blur-xl"
              >
                <dt className="text-3xl font-black tracking-[-0.05em] text-ink">
                  {metric.value}
                </dt>
                <dd className="mt-1 text-sm font-semibold leading-5 text-ink-muted">
                  {metric.label}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 34, rotate: 1.5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute -right-8 top-8 h-44 w-44 rounded-full bg-berry/20 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-[2.5rem] p-4 sm:p-5">
            <div className="rounded-[2rem] bg-gradient-to-br from-plum via-berry to-coral p-1 shadow-glow">
              <div className="rounded-[1.75rem] bg-white p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">
                      Live campaign
                    </p>
                    <h2 className="mt-1 text-2xl font-black tracking-[-0.05em] text-ink">
                      Spring Edit
                    </h2>
                  </div>
                  <div className="rounded-full bg-cream px-3 py-1 text-sm font-black text-plum">
                    +28%
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-[1fr_0.74fr] gap-3">
                  <div className="rounded-[1.5rem] bg-cream p-4">
                    <div className="h-44 rounded-[1.25rem] bg-[radial-gradient(circle_at_35%_20%,#fff_0_18%,transparent_19%),linear-gradient(135deg,#ffb199,#ff6f61_50%,#7f3dff)]" />
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-black text-ink">Silk Modular Tote</p>
                        <p className="text-xs font-semibold text-ink-muted">Limited drop</p>
                      </div>
                      <p className="text-sm font-black text-ink">$189</p>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <div className="rounded-[1.5rem] bg-ink p-4 text-white">
                      <Icon name="bag" className="size-7 text-peach" />
                      <p className="mt-7 text-3xl font-black tracking-[-0.05em]">814</p>
                      <p className="text-xs font-semibold text-white/70">checkouts today</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-cream p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">
                        AOV
                      </p>
                      <p className="mt-2 text-3xl font-black tracking-[-0.05em] text-ink">
                        $124
                      </p>
                      <div className="mt-4 h-2 rounded-full bg-white">
                        <div className="h-full w-4/5 rounded-full bg-coral" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 rounded-[1.5rem] border border-ink/[0.08] bg-white p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-black text-ink">Recommended next action</p>
                      <p className="text-sm text-ink-muted">Push free shipping at cart value $150.</p>
                    </div>
                    <button
                      type="button"
                      className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-plum focus-visible:focus-ring"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
