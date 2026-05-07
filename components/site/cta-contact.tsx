import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { faqItems } from "@/lib/content";

export function CtaContact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#2b164c,#7f3dff_48%,#ff6f61)] p-1 shadow-glow">
          <div className="grid gap-8 rounded-[2.25rem] bg-white p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <Reveal className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-coral">
                  Launch-ready
                </p>
                <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-[-0.06em] text-ink sm:text-5xl">
                  Ready to make your storefront feel unmistakably premium?
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-ink-muted">
                  Tell us what you are building and we will map the best sections,
                  integrations, and conversion flows for your team.
                </p>
              </div>

              <div className="mt-10 grid gap-4">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-[1.5rem] border border-ink/[0.08] bg-cream p-5"
                  >
                    <summary className="cursor-pointer list-none text-base font-black tracking-[-0.02em] text-ink">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12} className="rounded-[2rem] bg-cream p-5 sm:p-6">
              <form className="grid gap-4" aria-label="Contact form">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-ink">
                    First name
                    <input
                      required
                      className="min-h-12 rounded-2xl border border-ink/10 bg-white px-4 text-base font-medium text-ink outline-none transition placeholder:text-ink-muted/60 focus:border-berry focus:ring-4 focus:ring-berry/[0.15]"
                      placeholder="Maya"
                      autoComplete="given-name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-ink">
                    Work email
                    <input
                      required
                      type="email"
                      className="min-h-12 rounded-2xl border border-ink/10 bg-white px-4 text-base font-medium text-ink outline-none transition placeholder:text-ink-muted/60 focus:border-berry focus:ring-4 focus:ring-berry/[0.15]"
                      placeholder="maya@brand.com"
                      autoComplete="email"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-bold text-ink">
                  Storefront size
                  <select
                    className="min-h-12 rounded-2xl border border-ink/10 bg-white px-4 text-base font-medium text-ink outline-none transition focus:border-berry focus:ring-4 focus:ring-berry/[0.15]"
                    defaultValue="growth"
                  >
                    <option value="launch">Launching soon</option>
                    <option value="growth">Growing brand</option>
                    <option value="enterprise">Enterprise retailer</option>
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-bold text-ink">
                  What should we design around?
                  <textarea
                    className="min-h-32 resize-none rounded-2xl border border-ink/10 bg-white px-4 py-3 text-base font-medium text-ink outline-none transition placeholder:text-ink-muted/60 focus:border-berry focus:ring-4 focus:ring-berry/[0.15]"
                    placeholder="Tell us about your products, campaigns, and integrations."
                  />
                </label>

                <Button type="submit" className="mt-2 w-full">
                  Request a walkthrough
                </Button>
                <p className="text-center text-xs leading-5 text-ink-muted">
                  By submitting, you agree to receive product updates. No spam.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
