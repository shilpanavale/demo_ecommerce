import { products } from "@/lib/content";
import { SareeModel } from "./saree-model";

type Product = (typeof products)[number];

const productBackdrops: Record<Product["palette"], string> = {
  red: "linear-gradient(135deg,#edf3d4,#f8fbef 42%,#d83a3d 43%,#a51f2b)",
  pink: "linear-gradient(135deg,#4a271b,#cc8b67 44%,#f3d9cf)",
  yellow: "linear-gradient(135deg,#171717,#2b2b2b 58%,#f4c242)",
  black: "radial-gradient(circle at 63% 28%,#bd2f3d 0 23%,#2a1012 24%,#111)",
  blue: "linear-gradient(135deg,#b9cab1,#dce7d2 52%,#6e96b6)",
  gold: "radial-gradient(circle at 53% 28%,#7b2a16 0 21%,#31160e 22%,#120b08)",
  orange: "linear-gradient(135deg,#e8dbc8,#cad8c5 48%,#d07141)",
  green: "linear-gradient(135deg,#262626,#111 48%,#da3b45)",
};

const modelColor: Record<Product["palette"], Parameters<typeof SareeModel>[0]["sari"]> = {
  red: "red",
  pink: "pink",
  yellow: "yellow",
  black: "black",
  blue: "blue",
  gold: "yellow",
  orange: "orange",
  green: "green",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <a href="#product" className="block focus-visible:focus-ring">
        <div
          className="relative aspect-[0.74] overflow-hidden bg-[#f6f1e8]"
          style={{ background: productBackdrops[product.palette] }}
        >
          {product.tag ? (
            <span className="absolute left-3 top-3 z-10 bg-[#d33536] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
              {product.tag}
            </span>
          ) : null}
          <div className="absolute right-3 top-3 z-10 rounded-sm bg-white/75 px-2 py-1 text-[10px] font-bold text-[#b5292b]">
            moolchand
          </div>
          <div className="absolute inset-x-[12%] bottom-0 top-[9%] transition duration-500 group-hover:scale-[1.035]">
            <SareeModel sari={modelColor[product.palette]} />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/18 to-transparent" />
        </div>
        <div className="bg-white pb-5 pt-3">
          <h3 className="line-clamp-1 text-[13px] font-medium leading-5 text-[#1d1d1d]">
            {product.title}
          </h3>
          <p className="mt-1 text-[12px] leading-5 text-[#444]">
            {product.price}
            <span className="ml-1 text-[#8b8b8b] line-through">{product.oldPrice}</span>
          </p>
        </div>
      </a>
    </article>
  );
}
