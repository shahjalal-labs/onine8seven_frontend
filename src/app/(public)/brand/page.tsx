import heroImg from "@/assets/home/hero.jpg";
import BrandOverview from "@/components/Brand/BrandOverview";

import Features from "@/components/Brand/Features";
import HeroBrand from "@/components/Brand/HeroBrand";
import { brandOverviewText } from "@/lib/text";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/brand",
  },
  title: "Hurakan Brand | Reliable Professional Kitchen Equipment",
  description:
    "Professional kitchen equipment by Hurakan for HoReCa businesses. CE-certified commercial solutions at competitive prices for European dealers. View catalog.",
  keywords: [
    "Hurakan brand",
    "professional kitchen brand",
    "HoReCa equipment supplier",
    "commercial kitchen equipment",
    "CE certified equipment",
    "affordable professional kitchen",
  ],
};

import { getOrganizationSchema, getBrandWebPageSchema } from "@/lib/schema";

export default function BrandPage() {
  return (
    <div className="flex flex-col w-full h-full md:px-9 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBrandWebPageSchema()) }}
      />
      <HeroBrand title={brandOverviewText.title} image={heroImg}>
        {brandOverviewText.description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </HeroBrand>

      <Features />
      <BrandOverview />
    </div>
  );
}
