import Image, { StaticImageData } from "next/image";
import React from "react";

interface HeroProps {
  title: string;
  image: StaticImageData | string;
  children?: React.ReactNode;
}

export default function HeroBrand({ title, image, children }: HeroProps) {
  return (
    <div>
      <div className="relative w-full min-h-112.5 py-12 lg:py-0 md:h-127.5 lg:h-160  flex items-center overflow-hidden ">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover "
        />
        <div className="absolute inset-0 bg-[#13181EB2] z-10" />

        {/* Content */}
        <div className="relative z-20 px-4 md:px-6 lg:px-12 w-full lg:w-5/6 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold md:mb-6 tracking-tight inter">
            {title}
          </h1>

          <div className="text-sm md:text-lg text-gray-300 leading-relaxed max-w-3xl text-normal montserrat">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
