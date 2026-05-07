type SareeModelProps = {
  sari: "green" | "purple" | "red" | "yellow" | "pink" | "blue" | "black" | "orange";
  className?: string;
};

const sariColors: Record<SareeModelProps["sari"], string> = {
  green: "#195b37",
  purple: "#5b235c",
  red: "#be2634",
  yellow: "#d8aa28",
  pink: "#f1a9b5",
  blue: "#3d7fae",
  black: "#161616",
  orange: "#de7a36",
};

export function SareeModel({ sari, className = "" }: SareeModelProps) {
  const color = sariColors[sari];

  return (
    <div className={`relative h-full min-h-[210px] w-full ${className}`} aria-hidden="true">
      <div className="absolute left-1/2 top-[8%] size-12 -translate-x-1/2 rounded-full bg-[#b68155] shadow-[inset_0_-5px_0_rgba(90,43,24,0.18)]" />
      <div className="absolute left-1/2 top-[3%] h-14 w-16 -translate-x-1/2 rounded-t-full bg-[#19100d]" />
      <div className="absolute left-[42%] top-[29%] h-20 w-[10px] rotate-[17deg] rounded-full bg-[#a86f4d]" />
      <div className="absolute right-[42%] top-[29%] h-20 w-[10px] -rotate-[17deg] rounded-full bg-[#a86f4d]" />
      <div
        className="absolute left-1/2 top-[25%] h-[68%] w-[44%] -translate-x-1/2 rounded-t-[44%] shadow-[0_16px_28px_rgba(0,0,0,0.22)]"
        style={{
          background: `linear-gradient(112deg, ${color} 0 43%, #d9a654 44% 51%, ${color} 52% 100%)`,
        }}
      />
      <div
        className="absolute left-[47%] top-[26%] h-[68%] w-[19%] -skew-x-12 rounded-t-full opacity-95"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0))" }}
      />
      <div className="absolute bottom-[4%] left-[29%] h-3 w-[42%] rounded-full bg-[#c69645]" />
    </div>
  );
}
