import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { plans } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose a plan that grows with your storefront."
          description="Simple packages for launch teams, growing brands, and established retailers that need premium support and integrations."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={index * 0.08}
              className={cn(
                "relative flex flex-col rounded-[2rem] border p-6 shadow-[0_18px_50px_rgba(17,24,39,0.08)] sm:p-8",
                plan.featured
                  ? "border-plum bg-ink text-white shadow-glow"
                  : "border-ink/[0.08] bg-white text-ink",
              )}
            >
              {plan.featured ? (
                <div className="absolute right-6 top-6 rounded-full bg-peach px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-plum">
                  Popular
                </div>
              ) : null}

              <p
                className={cn(
                  "text-sm font-bold uppercase tracking-[0.22em]",
                  plan.featured ? "text-peach" : "text-coral",
                )}
              >
                {plan.name}
              </p>
              <div className="mt-6 flex items-end gap-2">
                <p className="text-5xl font-black tracking-[-0.07em]">{plan.price}</p>
                {plan.price.startsWith("$") ? (
                  <p className={cn("pb-2 text-sm font-semibold", plan.featured && "text-white/70")}>
                    /mo
                  </p>
                ) : null}
              </div>
              <p
                className={cn(
                  "mt-4 min-h-14 text-base leading-7",
                  plan.featured ? "text-white/[0.72]" : "text-ink-muted",
                )}
              >
                {plan.description}
              </p>

              <ul className="mt-8 grid gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm font-semibold">
                    <span
                      className={cn(
                        "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                        plan.featured ? "bg-white text-plum" : "bg-cream text-coral",
                      )}
                    >
                      <Icon name="check" className="size-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={plan.featured ? "secondary" : "primary"}
                className="mt-8 w-full"
              >
                {plan.featured ? "Start scaling" : "Get started"}
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
