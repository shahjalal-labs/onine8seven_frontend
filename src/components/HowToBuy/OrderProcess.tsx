"use client";
import calling from "@/assets/card/Calling.svg";
import fileText from "@/assets/card/catalogue 1.svg";
import computer from "@/assets/card/Computer.svg";
import equip from "@/assets/home/equip.me logo.png";
import shipping from "@/assets/home/shipping.jpg";
import { Check } from "lucide-react";
import Image from "next/image";

const orderOptions = [
  {
    icon: <Image src={computer} alt="Partner portal icon" width={30} height={30} />,
    title: "Option 1: Partner Portal",
    description:
      "Log in, browse catalog, add to cart, checkout. You'll see your dealer discount commercial equipment pricing automatically applied.",
  },
  {
    icon: <Image src={calling} alt="Direct contact icon" width={30} height={30} />,
    title: "Option 2: Direct Contact",
    description:
      "Email, message or call us with your order. We'll confirm availability, pricing, and shipping terms.",
  },
  {
    icon: <Image src={fileText} alt="Price list request icon" width={30} height={30} />,
    title: "Option 3: Price List Request",
    description:
      "Request our full catalog download with current wholesale terms conditions. We'll send PDF or Excel format.",
  },
];

export default function OrderProcess() {
  return (
    <div className="w-full py-16 md:py-24 px-4 md:px-0 flex justify-center ">
      <div className="w-full  flex flex-col">
        {/* How to Order Section */}
        <div className="mb-16 md:mb-24 mt-12 md:mt-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 inter">
            <span className="text-title">How to </span>
            <span className="text-primary">order</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg montserrat mb-10">
            Once registered, ordering professional equipment is simple:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {orderOptions.map((option, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-sm shadow-sm flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {option.icon}
                    <h3 className="font-bold text-title text-2xl montserrat">
                      {option.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-base md:text-lg leading-relaxed montserrat">
                    {option.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <h3 className="text-lg md:hidden block montserrat ">
          Our equipment reliability promise is simple: Hurakan products are
          built to work. When they need service, we make it easy.
        </h3>

        {/* Payment and Shipping Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden mb-16 md:mb-24 p-4 bg-white">
          <div className="relative min-h-75 md:min-h-full w-full order-2 md:order-1">
            <Image
              src={shipping}
              alt="Warehouse shipping"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:p-12 lg:p-16 flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0 mt-6">
            <h2 className="text-xl hidden md:block md:text-3xl lg:text-5xl text-title mb-4 inter font-bold">
              Payment and
              <br />
              shipping
            </h2>

            <h2 className="text-2xl block md:hidden md:text-3xl lg:text-5xl text-title mb-4 inter font-bold">
              Payment and Shipping
            </h2>

            <div className="mb-8">
              <h3 className="font-bold text-title text-base md:text-lg mb-4 montserrat">
                Payment terms:
              </h3>
              <ul className="space-y-3">
                {[
                  "Prepayment for new partners",
                  "Credit terms available for established accounts (subject to approval)",
                  "Bank transfer, standard terms of sale",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                    <span className="text-gray-500 text-base md:text-lg montserrat leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-title text-base md:text-lg mb-4 montserrat">
                International delivery options:
              </h3>
              <ul className="space-y-3">
                {[
                  "Delivery across EU and non-EU markets",
                  "Shipping from our warehouse in Lithuania or Greece",
                  "From single package to full truck — we serve all dealers without MOQ requirements",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                    <span className="text-gray-500 text-base md:text-lg montserrat leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Become a Dealer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-bold text-title mb-4 inter">
              Become a dealer
            </h2>
            <p className="text-gray-500 text-base md:text-lg montserrat mb-8">
              Join our wholesale restaurant supply store network. Get access to:
            </p>
            <ul className="space-y-4">
              {[
                "Competitive B2B price list",
                "Full product catalog (400+ SKUs)",
                "Marketing support and product assets",
                "Dedicated account manager",
                "Fast delivery from European warehouse",
              ].map((text, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check
                    className="text-primary shrink-0"
                    size={18}
                    strokeWidth={3}
                  />
                  <span className="text-gray-600 text-base md:text-lg montserrat">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-12 md:p-24 shadow-sm rounded-sm flex items-center justify-center min-h-75">
            <div className="relative w-full max-w-87.5 aspect-video">
              <Image
                src={equip}
                alt="equip.me logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
