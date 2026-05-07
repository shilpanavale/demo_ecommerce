import { products } from "@/lib/content";
import { ProductCard } from "./product-card";

export function ProductSection() {
  return (
    <section id="new-arrival" className="section-shell bg-white px-0 pb-10 pt-4 sm:pb-14">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-[#161616] sm:text-base">
          New Arrival
        </h2>
        <a
          href="#view-all"
          className="text-[11px] font-semibold text-[#3d3d3d] transition hover:text-[#c83234] focus-visible:focus-ring"
        >
          View all
        </a>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-1 sm:grid-cols-3 md:grid-cols-4 lg:gap-x-6">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </section>
  );
}
