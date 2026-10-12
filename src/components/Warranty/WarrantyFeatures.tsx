"use client";

import beyondWar from "@/assets/home/beyondWarr.jpg";
import { Check } from "lucide-react";
import Image from "next/image";

import CoveredCard from "./CoveredCard";
import TrustCard from "./TrustCard";

import { coveredItems, supportItems, trustItems } from "@/lib/warranty";

export function WarrantyFeatures() {
  return (
    <div className="w-full py-16 md:py-24  px-4 md:px-0 flex justify-center">
      <div className="w-full flex flex-col">
        {/* Section 1: What's covered */}
        <section className="flex flex-col mb-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 inter">
            <span className="text-title">What&apos;s </span>
            <span className="text-primary">covered</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-8 montserrat">
            Our product warranty terms include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {coveredItems.map((item, index) => (
              <CoveredCard key={index} {...item} />
            ))}
          </div>

          <p className="text-base md:text-lg text-title font-semibold montserrat">
            Our equipment reliability promise is simple: Hurakan products are
            built to work. When they need service, we make it easy.{" "}
          </p>
        </section>

        {/* Section 2: Why dealers trust our service */}
        <section className="mt-16 md:mt-24 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 inter">
            <span className="text-title">Why dealers trust </span>
            <span className="text-primary">our service</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className={`pb-8 border-gray-200 ${index < trustItems.length - 1 ? "border-b" : ""} ${index >= 3 ? "md:border-b-0" : ""}`}
              >
                <TrustCard {...item} />
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Beyond warranty */}
        <section className="flex flex-col md:flex-row gap-12 md:gap-24 items-center md:pl-20 bg-card p-4">
          <div className="flex flex-col flex-1">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 inter text-title">
              Beyond warranty
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-8 montserrat">
              Even after the 12-month warranty period, we continue to support
              dealers with:
            </p>

            <ul className="space-y-4 mb-8 ">
              {supportItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check
                    className="text-primary shrink-0"
                    size={20}
                    strokeWidth={1.5}
                  />
                  <span className="text-base md:text-lg text-gray-500 montserrat">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-gray-500 text-base md:text-lg montserrat">
              Our goal is long-term partnership, not just a single sale.{" "}
            </p>
          </div>

          <div className="flex-1 w-full">
            <div className="relative w-full aspect-4/3 md:aspect-auto md:h-100">
              <Image
                src={beyondWar}
                alt="Beyond warranty"
                fill
                className="object-cover rounded-sm shadow-sm"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
