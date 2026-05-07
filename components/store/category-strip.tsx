import { categoryTiles } from "@/lib/content";

const categoryBackgrounds: Record<(typeof categoryTiles)[number]["palette"], string> = {
  green: "linear-gradient(135deg,#304d31,#7e985d)",
  red: "linear-gradient(135deg,#5f1718,#d13a3d)",
  blue: "linear-gradient(135deg,#24435a,#8fb0bd)",
};

export function CategoryStrip() {
  return (
    <section id="about" className="section-shell pb-12">
      <div className="grid gap-4 md:grid-cols-3">
        {categoryTiles.map((tile) => (
          <a
            key={tile.title}
            href="#collection"
            className="group relative min-h-44 overflow-hidden p-6 text-white shadow-[0_12px_32px_rgba(0,0,0,0.12)] focus-visible:focus-ring"
            style={{ background: categoryBackgrounds[tile.palette] }}
          >
            <div className="absolute -right-12 -top-12 size-36 rounded-full bg-white/12 transition duration-500 group-hover:scale-125" />
            <p className="relative text-[11px] font-bold uppercase tracking-[0.22em] text-white/75">
              Collection
            </p>
            <h3 className="relative mt-10 max-w-60 text-2xl font-bold tracking-[-0.04em]">
              {tile.title}
            </h3>
            <p className="relative mt-2 text-sm text-white/78">{tile.subtitle}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
