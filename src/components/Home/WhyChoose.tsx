"use client";
import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";

import presence from "@/assets/card/european-union.svg";
import equipment from "@/assets/card/Size.svg";
import spare from "@/assets/card/technical-support.svg";
import thumb from "@/assets/card/thumb.svg";
import warehouse from "@/assets/card/warehouse.svg";

import catlery from "@/assets/card/cutlery 1.svg";
import experience from "@/assets/card/exprerience.svg";
import handshake2 from "@/assets/card/handshake (3) 1.svg";
import handshake from "@/assets/card/handshake.svg";

const whyChooseData = [
  {
    icon: <TbTruckDelivery className="w-8 h-8 text-black" />,
    title: "Ready to dispatch",
    description:
      "Wide assortment of industrial kitchen equipment with short lead times. We keep our warehouse full so you can deliver fast to your customers. Reliable spare parts are always available.",
  },
  {
    icon: <Image src={thumb} alt="Easy to sell" className="w-8 h-8" />,
    title: "Easy to sell",
    description:
      "Strong price-to-performance ratio. Your customers get quality commercial kitchen appliances without overpaying. Affordable restaurant equipment wholesale pricing that makes sense for your business.",
  },
  {
    icon: <Image src={presence} alt="European presence" className="w-8 h-8" />,
    title: "European presence",
    description:
      "Offices in Estonia and Switzerland. Local support, dependable logistics, and strong warehouse capacity for stable availability across the EU.",
  },
  {
    icon: <Image src={warehouse} alt="Warehouses" className="w-8 h-8" />,
    title: "Warehouses",
    description:
      "We operate warehouses in Lithuania and Greece with automated inventory systems and deep stock levels, ensuring professional kitchen equipment is ready to ship when your customers need it.",
  },
  {
    icon: (
      <Image
        src={equipment}
        alt="Equipment for all sizes"
        className="w-8 h-8"
      />
    ),
    title: "Equipment for all sizes",
    description:
      "From small restaurant kitchen equipment to large-scale industrial kitchen solutions for catering operations. Reliable HoReCa products accessible to businesses of all sizes, built to exceed typical industry expectations.",
  },
  {
    icon: (
      <Image
        src={spare}
        alt="Spare parts when you need them"
        className="w-8 h-8"
      />
    ),
    title: "Spare parts when you need them",
    description:
      "Available for key models and best sellers. Fast ordering, minimal delays — because downtime in a commercial kitchen isn't an option.",
  },
];

const professionalData = [
  {
    icon: (
      <Image
        src={catlery}
        alt="Professional kitchen solutions"
        className="w-8 h-8"
      />
    ),
    title: "Professional kitchen solutions",
    description:
      "Hurakan is professional kitchen equipment for hotels, restaurants, cafes, fast food and catering businesses. As a trusted HoReCa distributor in Europe, we supply dealers and distributors with a full range of commercial kitchen appliances — from cooking and refrigeration to food preparation equipment and servery solutions.",
  },
  {
    icon: (
      <Image src={handshake2} alt="Dealers-only supplier" className="w-8 h-8" />
    ),
    title: "Dealers-only supplier",
    description:
      "We work exclusively through dealers because they deliver what matters most to end customers: local market expertise, faster service response, and support in their own language. We back our partners with reliable stock, technical knowledge, and dedicated service — so together we ensure the best possible Hurakan experience. European distribution, powered by local expertise and service.",
  },
  {
    icon: (
      <Image
        src={handshake}
        alt="Simple. Reliable. Affordable"
        className="w-8 h-8"
      />
    ),
    title: "Simple. Reliable. Affordable",
    description:
      "Our mission is simple: to provide reliable, affordable kitchen equipment, supported locally to ensure the best experience for every customer. No complexity, no hidden costs — just professional solutions that work.",
  },
  {
    icon: (
      <Image
        src={experience}
        alt="30+ years of experience"
        className="w-8 h-8"
      />
    ),
    title: "30+ years of experience",
    description:
      "Since 1990, we've been helping HoReCa businesses across Europe run smoother. With 30+ years of professional kitchen equipment expertise, we understand what gastronomy equipment needs to deliver in real working conditions.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 relative  w-full px-4 md:px-0 bg-background">
      <div className="relative">
        <div className="flex flex-col gap-24">
          {/* Section 1 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold md:mb-6 tracking-tight inter my-5">
              Why dealers choose <span className="text-primary">Hurakan</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  md:p-6 mt-12">
              {whyChooseData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-10 rounded-sm flex flex-col items-start gap-4"
                >
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <h3 className="text-xl md:text-2xl font-bold text-black montserrat">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#666666] leading-relaxed text-base md:text-lg montserrat">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold md:mb-6 tracking-tight inter text-center md:text-start">
              Hurakan – professional{" "}
              <span className="text-primary">HoReCa equipment</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mt-12">
              {professionalData.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start border-b-2 py-3"
                >
                  <div className="shrink-0 w-16 h-16  rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-black montserrat">
                      {item.title}
                    </h3>
                    <p className="text-[#666666] leading-relaxed  text-base md:text-lg montserrat">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
