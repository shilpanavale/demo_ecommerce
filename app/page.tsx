import { CtaContact } from "@/components/site/cta-contact";
import { Features } from "@/components/site/features";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Pricing } from "@/components/site/pricing";
import { Testimonials } from "@/components/site/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <CtaContact />
      </main>
      <Footer />
    </>
  );
}
