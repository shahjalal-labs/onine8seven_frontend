"use client";

import delear from "@/assets/card/deler.svg";
import designTools from "@/assets/card/design-tools 1.svg";
import market from "@/assets/card/market 1.svg";
import toolbox from "@/assets/card/toolbox (2) 1.svg";
import Image from "next/image";

const supplyItems = [
  {
    icon: delear,
    title: "Distributors & dealers",
    description:
      "Wholesale partners reselling professional kitchen equipment to end users",
  },
  {
    icon: market,
    title: "Horeca chains & businesses, though our local partners ",

    description: "Restaurants, cafés, and commercial kitchens buying in volume",
  },
  {
    icon: designTools,
    title: "Project companies & consultants",
    description: "Kitchen designers and project managers sourcing full setups",
  },
  {
    icon: toolbox,
    title: "Service & maintenance companies",
    description: "Spare parts and replacement equipment",
  },
];

export default function WeSupply() {
  return (
    <div className="w-full py-16 md:py-24  px-4 md:px-0 flex justify-center">
      <div className="w-full  flex flex-col">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 md:mb-16 inter">
          <span className="text-title">We </span>
          <span className="text-primary">supply</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {supplyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`pb-10 border-gray-200 ${index < supplyItems.length - 1 ? "border-b" : ""}`}
              >
                <div className="flex gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                    <Image
                      src={Icon}
                      alt={`${item.title} icon`}
                      width={24}
                      height={24}
                      className="text-title"
                    />
                  </div>
                  <div className="flex flex-col pt-1 md:pt-2">
                    <h3 className="text-lg md:text-xl font-semibold text-title mb-2 montserrat">
                      <strong>{item.title}</strong>
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed montserrat">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 md:mt-12 bg-white p-6 md:p-8 rounded-sm shadow-sm flex items-center md:justify-start">
          <p className="font-bold text-title text-base md:text-lg montserrat md:text-left">
            If you sell to hotels, restaurants, cafes, canteens, or catering
            operations — we want to work with you.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
