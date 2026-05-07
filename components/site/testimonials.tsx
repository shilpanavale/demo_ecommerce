import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Customer stories"
          title="Designed for brands that care about every detail."
          description="The experience balances editorial polish with measurable ecommerce outcomes, matching the premium feel requested in the design brief."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.author}
              delay={index * 0.08}
              className="flex min-h-[320px] flex-col justify-between rounded-[2rem] border border-ink/[0.08] bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.08)] sm:p-8"
            >
              <div>
                <div className="mb-8 flex gap-1 text-coral" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex}>*</span>
                  ))}
                </div>
                <blockquote className="text-xl font-bold leading-8 tracking-[-0.03em] text-ink">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-10 flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-peach to-berry text-sm font-black text-white">
                  {testimonial.author
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-black tracking-[-0.02em] text-ink">{testimonial.author}</p>
                  <p className="text-sm font-medium text-ink-muted">{testimonial.role}</p>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
