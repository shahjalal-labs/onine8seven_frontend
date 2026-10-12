"use client";
import whatwedo from "@/assets/home/whatwedo.jpg";
import { Check } from "lucide-react";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <div className="w-full py-4 bg-card flex justify-center">
      <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4">
        {/* Image Section */}
        <div className="relative order-2 lg:order-1 w-full aspect-4/3 overflow-hidden shadow-sm">
          <Image
            src={whatwedo}
            alt="What we do"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:pl-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 inter text-title">
            What we do
          </h2>

          <p className="text-gray-600 mb-8 montserrat text-base md:text-lg">
            As a European wholesale partner, we provide:
          </p>

          <div className="flex flex-col gap-6 mb-8 montserrat text-sm md:text-lg text-gray-700 ">
            <div className="flex items-start gap-4">
              <Check className="text-primary mt-1 shrink-0" size={20} />
              <p>
                Professional catering equipment across all key categories — for
                restaurants, hotels, cafés, canteens, and catering
                companies{" "}
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Check className="text-primary mt-1 shrink-0" size={20} />
              <p>
                Consistent stock and fast availability from European
                warehouses{" "}
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Check className="text-primary mt-1 shrink-0" size={20} />
              <p>
                Dealer-focused pricing and dedicated support for long term
                partnerships{" "}
              </p>
            </div>
          </div>

          <p className="text-gray-600 montserrat text-base md:text-lg leading-relaxed">
            We’re a hospitality equipment partner that understands what dealers
            need: consistent stock, competitive pricing, and equipment that
            works — and keeps working.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
