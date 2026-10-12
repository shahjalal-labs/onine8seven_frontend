import brandCoffee from "@/assets/whatWeSupplay/barandcoffee.png";
import cookingEquip from "@/assets/whatWeSupplay/cookingEquip.jpg";
import foodPre from "@/assets/whatWeSupplay/foodPre.jpg";
import exhibitionImg from "@/assets/whatWeSupplay/image.png";
import refrigarator from "@/assets/whatWeSupplay/refrigarator.jpg";
import servery from "@/assets/whatWeSupplay/servey.png";
import washing from "@/assets/whatWeSupplay/washing.png";
import Image from "next/image";

export default function WhatWeSupply() {
  const supplyItems = [
    {
      image: cookingEquip,
      name: "Commercial cooking equipment",
    },
    {
      image: refrigarator,
      name: "Refrigeration and cold storage",
    },
    {
      image: foodPre,
      name: "Food preparation equipment",
    },
    {
      image: brandCoffee,
      name: "Bar and coffee equipment",
    },
    {
      image: servery,
      name: "Servery and display solutions",
    },
    {
      image: washing,
      name: "Washing equipment",
    },
  ];

  return (
    <section className="md:py-16 bg-background w-full px-4 md:px-0 flex flex-col gap-16 mb-8">
      {/* Top Section */}
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold md:mb-6 tracking-tight inter text-center  md:text-start">
          What we <span className="text-primary">supply</span>
        </h2>
        <p className="text-title text-base md:text-lg mb-12 montserrat  text-center  md:text-start mt-3">
          As your EU kitchen equipment supplier, our foodservice equipment
          catalog includes:
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-7 md:gap-y-12 mt-8">
          {supplyItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 border-b-2 py-4"
            >
              <h3 className="sm:hidden text-lg font-bold text-black leading-snug montserrat text-center">
                {item.name}
              </h3>
              <div className="relative w-full sm:w-30 h-50 sm:h-22.5 shrink-0 bg-white shadow-sm border border-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="hidden sm:block text-xl md:text-2xl font-semibold text-black leading-snug montserrat pr-4">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Box */}
      <div className="bg-white p-6 md:p-8 shadow-sm border border-gray-100 flex items-center montserrat md:mt-16">
        <p className="text-black font-semibold text-base md:text-lg leading-relaxed">
          All products are fully CE certified and compliant with European
          standards, with RoHS certification for restricted substances. We focus
          on safety beyond basic requirements.
        </p>
      </div>

      {/* Bottom Section */}
      <div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.1] mb-2 inter  text-center  md:text-start">
          Trusted Professional <br className="hidden md:block" />
          <span className="text-primary">Kitchen Equipment</span> for HoReCa
        </h2>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start mt-16">
          <div className="w-full md:w-[25%] order-2 md:order-1">
            <Image
              src={exhibitionImg}
              alt="Calling Dealers Exhibition"
              className="w-full h-110"
            />
          </div>
          <div className="flex-1 flex flex-col order-1 md:order-2">
            <div className="text-title text-base md:text-xl leading-relaxed flex flex-col montserrat">
              <p>
                Hurakan is a professional kitchen equipment brand operating
                since 1990. Available across Europe, we offer a wide assortment
                of commercial kitchen appliances — from cooking and
                refrigeration to food preparation and servery solutions — with
                multiple warehouses, short lead times and reliable spare parts.
              </p>
              <p>
                Built for daily use in commercial kitchens. Stainless steel
                construction, hygienic surfaces, impact-resistant materials and
                ergonomic design make every unit practical and durable. Each
                product goes through multi-level quality control and real-world
                testing before release. All units are CE certified, designed by
                engineers, chefs and industry specialists with a focus on
                workflow efficiency and reliability.
              </p>
              <p>
                We work exclusively with dealers and partners. Through a partner
                portal, registered dealers get real-time stock visibility,
                product manuals, spare parts information and ready-to-use
                product content to support their sales. Strong
                price-to-performance ratio means customers get affordable,
                quality equipment that&apos;s easy to sell and justify.
              </p>
              <p>
                After the sale, we stay available. Spare parts for key models
                are in stock, warranty support is straightforward, and our
                multilingual team is reachable via email, phone or messenger.
                Offices in Estonia and Switzerland ensure local presence and
                dependable logistics across the EU.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
