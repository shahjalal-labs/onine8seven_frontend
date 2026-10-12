import heroImg from "@/assets/home/bar-equip.jpg";
import Image from "next/image";
import ContactDealerButtons from "../Shared/ContactDealerButtons ";

export default function Hero() {
  return (
    <section className="relative w-full min-h-112.5 py-12 lg:py-0 md:h-127.5 lg:h-160 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Commercial Kitchen Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay to make text readable, similar to picture */}
        <div className="absolute inset-0 bg-[#13181E]/60 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-4 md:px-12 flex flex-col items-start max-w-350 mx-auto gap-y-10">
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold md:mb-6 tracking-tight text-white inter text-center md:text-start">
          Quality you expect.
          <br />
          Service that delivers.
        </h1>
        <div className="flex w-full gap-6 sm:w-auto">
          <ContactDealerButtons />
        </div>
      </div>
    </section>
  );
}
