import icon from "@/assets/card/1.svg";
import icon2 from "@/assets/card/2.svg";
import icon3 from "@/assets/card/3.svg";
import icon4 from "@/assets/card/4.svg";
import cookingIcon from "@/assets/card/cooking.svg";
import fastFoodIcon from "@/assets/card/food.svg";
import foodProcessingIcon from "@/assets/card/mixer 1.svg";
import preparationIcon from "@/assets/card/pre.svg";
import refrigerationIcon from "@/assets/card/ref.svg";
import serveryIcon from "@/assets/card/servey.svg";
import washingIcon from "@/assets/card/washing.svg";
import Image, { StaticImageData } from "next/image";
import { ElementType } from "react";

const featuresData = [
  {
    title: "Durable construction",
    desc: "Stainless steel commercial kitchen equipment with hygienic, impact-resistant surfaces. Easy to clean, built for daily use. Solid quality at a budget-friendly price.",
    icon: icon,
  },
  {
    title: "Ergonomic design",
    desc: "Efficiency-focused layout for smooth workflow in professional kitchens. Our product range is developed with input from engineers, chefs, and industry specialists.",
    icon: icon2,
  },
  {
    title: "CE certified",
    desc: "Fully CE certified kitchen equipment with safety focus beyond basic CE and RoHS requirements. All products comply with European standards.",
    icon: icon3,
  },
  {
    title: "Market-driven development",
    desc: "Our product portfolio grows based on industry needs and partner requests. We listen to dealers and end users, then deliver solutions that sell.",
    icon: icon4,
  },
];

const productRanges = [
  {
    title: "Cooking",
    desc: "Commercial ovens, commercial convection oven, commercial steamer, commercial induction hob, griddles, fryers",
    icon: cookingIcon,
  },
  {
    title: "Refrigeration",
    desc: "Commercial fridge freezers, blast chillers, display cases, chest freezers",
    icon: refrigerationIcon,
  },
  {
    title: "Food Processing",
    desc: "Mixers, slicers, meat mincers, cutters, dough sheeters",
    icon: foodProcessingIcon,
  },
  {
    title: "Washing",
    desc: "Commercial dishwashers, glasswashers, utensil washers",
    icon: washingIcon,
  },
  {
    title: "Preparation",
    desc: "Commercial sink, working tables, shelving units",
    icon: preparationIcon,
  },
  {
    title: "Fast Food",
    desc: "Commercial fryer, contact grills, waffle makers, crepe makers",
    icon: fastFoodIcon,
  },
  {
    title: "Servery",
    desc: "Display warmers, soup kettles, drink dispensers",
    icon: serveryIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-background pt-10 md:pt-32 w-full">
      <div className=" mx-auto mb-16">
        <h2 className="text-center md:text-start text-3xl md:text-5xl lg:text-6xl font-bold mb-10 text-title inter">
          What we <span className="text-primary">stand for</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 montserrat">
          {featuresData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-sm shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-start"
            >
              <div className="flex items-center space-x-3 mb-3 text-title">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={25}
                  height={25}
                />
                <h3 className="font-bold text-xl md:text-2xl lg:text-3xl montserrat">
                  {item.title}
                </h3>
              </div>

              <p className="text-base text-description leading-relaxed md:text-lg montserrat">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Product range */}
      <div className=" montserrat space-y-4 px-2 md:px-0 md:py-16">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold  text-title montserrat">
          Product <span className="text-primary">range</span>
        </h2>
        <p className="text-base md:text-lg text-gray-500 mb-12">
          Hurakan offers a wide range of industrial kitchen equipment and
          commercial kitchen supplies:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
          {productRanges.map((item, index) => {
            const Icon = item.icon as ElementType;

            return (
              <div
                key={index}
                className="flex space-x-4 border-b-2 border-sidebar-border/50 pb-6"
              >
                <div className="w-13 h-13 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                  {typeof item.icon === "object" &&
                  item.icon !== null &&
                  "src" in item.icon ? (
                    <Image
                      src={item.icon as StaticImageData}
                      alt={item.title}
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Icon size={24} className=" text-title" />
                  )}
                </div>

                <div>
                  <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-1 text-title">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 hidden md:block bg-card p-6 text-center text-lg md:text-2xl font-semibold text-title montserrat">
          From entry-level commercial kitchen setups to full-scale restaurant
          kitchen equipment — we cover it all.
        </div>
      </div>
    </div>
  );
}
