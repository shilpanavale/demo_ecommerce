import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { features } from "@/lib/content";

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Design system"
          title="A refined commerce toolkit for high-performing brands."
          description="Reusable sections, durable interaction patterns, and responsive foundations keep every campaign consistent from desktop to mobile."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 0.08}
              className="group relative overflow-hidden rounded-[2rem] border border-ink/[0.08] bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-card sm:p-8"
            >
              <div className="absolute -right-12 -top-12 size-36 rounded-full bg-coral/[0.12] transition duration-300 group-hover:scale-125 group-hover:bg-berry/[0.12]" />
              <div className="relative flex size-14 items-center justify-center rounded-2xl bg-ink text-white shadow-card">
                <Icon name={feature.icon} className="size-7" />
              </div>
              <h3 className="relative mt-8 text-2xl font-black tracking-[-0.04em] text-ink">
                {feature.title}
              </h3>
              <p className="relative mt-3 max-w-xl text-base leading-7 text-ink-muted">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5 overflow-hidden rounded-[2.25rem] bg-ink p-6 text-white shadow-card sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-peach">
                Conversion map
              </p>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                Every shopper moment is measured, optimized, and ready to scale.
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Discover", "Compare", "Checkout"].map((step, index) => (
                <div
                  key={step}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-5"
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-white text-sm font-black text-ink">
                    0{index + 1}
                  </div>
                  <p className="mt-8 text-xl font-black tracking-[-0.04em]">{step}</p>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-peach"
                      style={{ width: `${72 + index * 9}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
