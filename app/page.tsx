import { CategoryStrip } from "@/components/store/category-strip";
import { ProductSection } from "@/components/store/product-section";
import { StoreFooter } from "@/components/store/store-footer";
import { StoreHero } from "@/components/store/store-hero";
import { StoreNavbar } from "@/components/store/store-navbar";

export default function Home() {
  return (
    <>
      <StoreNavbar />
      <main>
        <StoreHero />
        <ProductSection />
        <CategoryStrip />
      </main>
      <StoreFooter />
    </>
  );
}
