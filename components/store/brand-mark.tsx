import { StoreIcon } from "./store-icons";

export function BrandMark() {
  return (
    <div className="relative mx-auto flex aspect-square w-[230px] max-w-[52vw] items-center justify-center sm:w-[300px] lg:w-[360px]">
      <div className="absolute inset-[18%] rotate-45 rounded-[2rem] border border-[#7ab19a]/80 bg-[#e8fff3]/90 shadow-[0_18px_60px_rgba(34,71,45,0.34)]" />
      <div className="absolute left-0 top-[31%] h-[42%] w-[42%] -rotate-12 rounded-full bg-[radial-gradient(circle_at_70%_40%,#f4d263_0_6%,transparent_7%),radial-gradient(circle_at_70%_58%,#f4d263_0_6%,transparent_7%),linear-gradient(135deg,#0e6880,#1da59a)] shadow-[0_16px_34px_rgba(0,0,0,0.24)]">
        <div className="absolute -right-4 top-2 h-12 w-8 rotate-45 rounded-full border-4 border-[#143946] border-l-transparent border-b-transparent" />
        <div className="absolute bottom-0 right-1 size-3 rounded-full bg-[#173640]" />
      </div>
      <div className="absolute right-0 top-[31%] h-[42%] w-[42%] rotate-12 scale-x-[-1] rounded-full bg-[radial-gradient(circle_at_70%_40%,#f4d263_0_6%,transparent_7%),radial-gradient(circle_at_70%_58%,#f4d263_0_6%,transparent_7%),linear-gradient(135deg,#0e6880,#1da59a)] shadow-[0_16px_34px_rgba(0,0,0,0.24)]">
        <div className="absolute -right-4 top-2 h-12 w-8 rotate-45 rounded-full border-4 border-[#143946] border-l-transparent border-b-transparent" />
        <div className="absolute bottom-0 right-1 size-3 rounded-full bg-[#173640]" />
      </div>
      <div className="relative z-10 grid place-items-center text-center text-[#245842]">
        <StoreIcon name="leaf" className="mb-1 size-9" />
        <p className="text-[15px] font-black leading-none tracking-[-0.04em] sm:text-xl">
          Paithani
        </p>
        <p className="text-[19px] font-black leading-none tracking-[-0.05em] sm:text-2xl">
          Mahotsav
        </p>
      </div>
    </div>
  );
}
