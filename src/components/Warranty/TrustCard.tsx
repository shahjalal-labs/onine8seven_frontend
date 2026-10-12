import Image, { StaticImageData } from "next/image";
import { ElementType } from "react";

type TrustCardProps = {
  icon: string | StaticImageData | ElementType;
  title: string;
  description: string;
};

export default function TrustCard({
  icon: Icon,
  title,
  description,
}: TrustCardProps) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
        {typeof Icon === "object" && Icon !== null && "src" in Icon ? (
          <Image
            src={Icon as StaticImageData}
            alt={title}
            width={30}
            height={30}
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
          <Icon className="text-title" size={25} strokeWidth={1.5} />
        )}
      </div>

      <div className="pt-1">
        <h3 className="text-xl md:text-2xl font-bold text-title mb-2 montserrat">
          {title}
        </h3>

        <p className="text-gray-500 text-base md:text-lg leading-relaxed montserrat">
          {description}
        </p>
      </div>
    </div>
  );
}
