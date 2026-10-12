"use client";

import brandImage from "@/assets/home/brand.jpg";
import brandstoryImage from "@/assets/home/brandStrory.jpg";
import kitchenImage from "@/assets/home/kitchen.jpg";
import { Check } from "lucide-react";
import Image from "next/image";

export default function BrandOverview() {
  return (
    <div className="w-full flex flex-col py-20 montserrat px-2 md:px-0">
      {/* Value Proposition */}
      <section className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-3 bg-card">
        <div className="h-100 md:h-auto  bg-gray-200">
          <Image
            src={kitchenImage}
            alt="Commercial kitchen"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-[#252525] text-white p-4 md:p-16 flex flex-col justify-center ">
          <h2 className="text-3xl hidden md:block md:text-4xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight inter">
            Value <br />
            <span className="text-primary text-4xl md:text-5xl lg:text-6xl">
              proposition
            </span>
          </h2>
          <h2 className="text-2xl block md:hidden md:text-4xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight inter">
            <span>Value</span>{" "}
            <span className="text-primary text-2xl md:text-5xl lg:text-6xl">
              proposition
            </span>
          </h2>
          <div className="text-base md:text-lg text-gray-300 montserrat font-normal">
            <p>
              Hurakan is a value kitchen equipment brand. We offer budget
              commercial equipment without cutting corners on quality. Our
              global manufacturing partners produce cost-effective restaurant
              equipment that meets European certification standards.
            </p>
            <p>
              This is economy catering equipment done right: quality budget
              HoReCa products with professional equipment competitive price.
              Your customers get reliable tools. You get margins that make
              sense.
            </p>
            <p>
              We&apos;re not the cheapest. We&apos;re not the most expensive.
              We&apos;re the smart choice for dealers who want brand advantages
              and features their customers will appreciate.
            </p>
          </div>
        </div>
      </section>

      {/* Partner with Hurakan */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-12 md:my-24 montserrat">
        <div className="order-2 md:order-1 pr-0 md:pr-10">
          <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold mb-8 text-title  text-center md:text-start inter">
            When you partner <br className="hidden md:inline" /> with Hurakan,
            you get
          </h2>
          <ul className="space-y-4  montserrat">
            {[
              "Consistent product quality across all categories",
              "Strong brand reputation in Europe",
              "Equipment that's easy to sell and rarely comes back",
              "Clear brand identity your customers recognize",
              "Competitive positioning against other HoReCa equipment brands",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-base md:text-lg text-gray-600">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-2 h-87.5 md:h-112.5 bg-gray-200 ">
          <Image
            src={brandImage}
            alt="Hurakan office"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Brand Story */}
      <section className="grid grid-cols-1 order-2 md:grid-cols-2 gap-10 items-center bg-white p-4 md:p-12 shadow-[0_2px_15px_rgb(0,0,0,0.03)] border border-gray-50">
        <div className="order-2 md:order-1 h-87.5 md:h-100 bg-gray-100 flex items-center justify-center relative">
          <Image
            src={brandstoryImage}
            alt="Hurakan document"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 pl-0 md:pl-10">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 text-[#1A1A1A] tracking-tight inter">
            Brand <span className="text-primary">story</span>
          </h2>
          <div className="text-base md:text-lg text-gray-500 montserrat">
            <p>
              The Hurakan brand story is simple. We saw a gap in the market:
              dealers needed reliable, affordable professional equipment without
              the premium price tag. So we built a brand around that need.
            </p>
            <p>
              Today, Hurakan is recognized as a Europe equipment supplier with
              clear brand values and mission: quality equipment, honest pricing,
              dependable partnership. We&apos;re a HoReCa trading company that
              believes in doing business the straightforward way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
