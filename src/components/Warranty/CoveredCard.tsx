import Image, { StaticImageData } from "next/image";
import React from "react";

type CoveredCardProps = {
  icon: StaticImageData | string | React.ElementType;
  title: string;
};

export default function CoveredCard({ icon: Icon, title }: CoveredCardProps) {
  return (
    <div className="bg-white h-28 md:h-32 rounded-sm shadow-sm flex items-center justify-start px-4 md:px-6 gap-4">
      {typeof Icon === "object" && Icon !== null && "src" in Icon ? (
        <Image
          src={Icon as StaticImageData}
          alt={title}
          width={32}
          height={32}
          className="shrink-0"
        />
      ) : typeof Icon === "string" ? (
        <Image
          src={Icon}
          alt={title}
          width={30}
          height={30}
          className="shrink-0"
        />
      ) : (
        <Icon className="text-title shrink-0" size={30} strokeWidth={1.5} />
      )}
      <h3 className=" text-title inter text-lg leading-tight font-bold">
        {title}
      </h3>
    </div>
  );
}
