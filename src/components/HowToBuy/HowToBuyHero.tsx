import howtobuy from "@/assets/home/howtobuy.jpg";
import Image from "next/image";

export default function HowToBuyHero({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="relative w-full min-h-112.5 py-12 lg:py-0 md:h-127.5 lg:h-160  flex items-center overflow-hidden ">
        <Image src={howtobuy} alt={title} fill priority className="object-cover " />
        <div className="absolute inset-0 bg-[#13181EB2] z-10" />

        <div className="relative z-20 px-4 md:px-6 lg:px-12 w-full lg:w-5/6 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold md:mb-6 tracking-tight inter">
            {title}
          </h1>

          <div className="flex flex-col gap-2  text-base md:text-lg text-gray-200 leading-relaxed max-w-5xl font-medium montserrat">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
