import Hero from "@/components/Home/Hero";
import WhatWeSupply from "@/components/Home/WhatWeSupply";
import WhyChoose from "@/components/Home/WhyChoose";
import { getOrganizationSchema, getWebsiteSchema, getHomeWebPageSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  title: "Hurakan │ Professional HORECA Equipment",
  description:
    "Equip HoReCa OÜ is the official European distributor of Hurakan brand. We supply commercial kitchen equipment to professional dealers across Europe.",
  keywords: [
    "Hurakan",
    "HoReCa equipment",
    "commercial kitchen equipment",
    "professional catering solutions",
    "European distributor",
    "restaurant kitchen equipment",
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-background md:px-9">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getHomeWebPageSchema()) }}
      />
      <Hero />

      <WhyChoose />
      <WhatWeSupply />
    </div>
  );
}
