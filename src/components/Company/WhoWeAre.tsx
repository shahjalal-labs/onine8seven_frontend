import whoweare from "@/assets/home/whoWeAre.png";
import Image from "next/image";

export const WhoWeAre = () => {
  return (
    <div className="w-full py-16 md:py-24 bg-[#F8F9FA]  flex justify-center px-4 md:px-0">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Section */}
        <div className="relative w-full aspect-4/3 overflow-hidden order-2 lg:order-1">
          <Image
            src={whoweare}
            alt="Who we are"
            fill
            className="object-cover "
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 inter ">
            <span className="text-title">Who</span>{" "}
            <span className="text-primary">we are</span>
          </h2>

          <div className="text-gray-500 text-base md:text-lg montserrat space-y-6">
            <p>
              Equip Group is the European master distributor for the brand
              Hurakan. Dealers-only B2B model — we work exclusively with trade
              partners, not end customers. Built for resellers, distributors and
              professional equipment partners who need a reliable commercial
              kitchen vendor.
            </p>
            <p>
              Our brand values and mission are straightforward: supply quality
              restaurant equipment at fair prices with dependable service. No
              complicated terms, no surprises.
            </p>
            <p>
              We combine European legacy with modern innovation. Our team and
              leadership bring decades of HoReCa industry expertise to every
              decision we make.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
