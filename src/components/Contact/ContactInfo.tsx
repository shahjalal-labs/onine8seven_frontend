"use client";

import email from "@/assets/card/email (2) 1.svg";
import estoniaFlag from "@/assets/card/estonia.svg";
import georgiaFlag from "@/assets/card/georgia.svg";
import greeceFlag from "@/assets/card/greece.svg";
import lithuaniaFlag from "@/assets/card/lithuania.svg";
import officeBuilding from "@/assets/card/office-building (2) 1.svg";
import phone from "@/assets/card/phone (2) 1.svg";
import romaniaFlag from "@/assets/card/romania.svg";
import serbiaFlag from "@/assets/card/serbia.svg";
import switzerlandFlag from "@/assets/card/switzerland.svg";
import clock from "@/assets/card/wall-clock 1.svg";
import Image from "next/image";

const contactInfo = [
  {
    icon: <Image src={email} alt="email" />,
    title: "Email:",
    value: "sales@equip.me",
    href: "mailto:sales@equip.me",
  },
  {
    icon: <Image src={officeBuilding} alt="officeBuilding" />,
    title: "Office address:",
    value: "Mustamäe tee 46, Kristiine linnaosa, 10621 Tallinn, Harju maakond",
  },
  {
    icon: <Image src={phone} alt="phone" />,
    title: "Phone:",
    value: "+372 584 52 401",
    href: "tel:+37258452401",
  },
  {
    icon: <Image src={clock} alt="clock" />,
    title: "Contact hours:",
    value:
      "Monday – Friday: 9:00 – 18:00 (EET, GMT+2)\nSaturday & Sunday: Closed",
  },
];

const europeanPresenceData = [
  {
    flag: estoniaFlag,
    country: "Estonia",
    type: "Headquarters",
    description: "Sales and customer service HoReCa",
    city: "Tallinn",
  },
  {
    flag: switzerlandFlag,
    country: "Switzerland",
    type: "Office",
    description: "Regional coordination for Western European partners",
    city: "Geneva",
  },
  {
    flag: romaniaFlag,
    country: "Romania",
    type: "Office",
    description: "Sales and service coordination for Eastern Europe",
    city: "Bucharest",
  },
  {
    flag: serbiaFlag,
    country: "Serbia",
    type: "Office",
    description: "Sales and service coordination for Balkans",
    city: "Belgrade",
  },
];

const logisticsHubs = [
  {
    flag: lithuaniaFlag,
    title: "Warehouse in Lithuania",
  },
  {
    flag: greeceFlag,
    title: "Warehouse in Greece",
  },
  {
    flag: georgiaFlag,
    title: "Warehouse in Georgia",
  },
];

export default function ContactInfo() {
  return (
    <div className="py-16 md:py-24 montserrat">
      <div className="">
        {/* Contact Information Section */}
        <section className="px-4 md:px-0">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4 montserrat">
              <span className="text-black">Contact </span>
              <span className="text-primary">information</span>
            </h2>

            <p className="text-gray-500 text-base md:text-lg">
              Equip HoReCa OÜ Official distributor of Hurakan brand
            </p>
          </div>

          <h3 className="font-bold text-2xl md:text-3xl text-title mb-4">
            Sales department contact:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactInfo.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white p-6 flex items-start gap-4 shadow-sm rounded-sm"
                >
                  <div className="shrink-0 mt-1 md:mt-1.5">{item.icon}</div>

                  <div>
                    <h3 className="font-bold text-xl md:text-3xl text-title mb-1">
                      {item.title}
                    </h3>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[#009b9f] text-base md:text-lg hover:underline break-all md:break-normal"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-500 text-base md:text-lg leading-relaxed whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* European Presence Section */}
        <section className="px-4 md:px-0 py-16 md:py-24">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4 montserrat">
              <span className="text-black">European </span>
              <span className="text-primary">presence</span>
            </h2>

            <p className="text-gray-500 text-base md:text-lg montserrat">
              We have a local presence with offices in Estonia and Switzerland.
              This means faster EU distribution contacts, regional support, and
              understanding of local market needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {europeanPresenceData.map((item, index) => (
              <div key={index} className="bg-white p-6 shadow-sm rounded-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={item.flag}
                    alt={item.country}
                    width={30}
                    height={30}
                    className="object-contain"
                  />

                  <h3 className="font-bold text-title text-xl md:text-3xl">
                    {item.country} ({item.type})
                  </h3>
                </div>

                <p className="text-gray-500 text-base md:text-lg mb-4">
                  {item.description}
                </p>

                <div className="border-t border-gray-100 pt-3">
                  <p className="text-base md:text-lg text-title">
                    <span className="font-bold text-gray-900">City:</span>{" "}
                    {item.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Primary Hubs for Logistics Section */}
        <div className="montserrat w-full px-4 md:px-0">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4 montserrat">
            <span className="text-black">Primary hubs for </span>
            <span className="text-primary">logistics</span>
          </h2>

          <div className="flex flex-col md:flex-row md:gap-8 mt-6 md:mt-12 justify-between items-start md:items-center w-full">
            {logisticsHubs.map((hub, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b border-gray-200 md:border-none py-4 md:py-2 w-full md:w-auto"
              >
                <div className="bg-white p-1 rounded-full shadow-sm flex items-center justify-center ">
                  <Image
                    src={hub.flag}
                    alt={hub.title}
                    width={42}
                    height={42}
                    className="object-contain bg-card p-1 rounded-full"
                  />
                </div>

                <span className="font-bold text-title text-lg md:text-2xl">
                  {hub.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
