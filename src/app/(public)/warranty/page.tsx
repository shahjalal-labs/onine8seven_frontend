import warrantyImg from "@/assets/home/warranty.jpg";
import WarrantyHero from "@/components/Warranty/WarrantyHero";
import { warrantyText } from "@/lib/text";

import { WarrantyFeatures } from "@/components/Warranty/WarrantyFeatures";
import { getWarrantyWebPageSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/warranty",
  },
  title: "Hurakan Warranty │ Professional After-Sales Support",
  description:
    "12-month warranty on all Hurakan equipment. Fast spare parts delivery, clear claims process and technical support for HoReCa dealers in Europe. Contact us.",
  keywords: [
    "Hurakan warranty",
    "HoReCa equipment guarantee",
    "commercial equipment service",
    "Hurakan support",
    "commercial appliance repair",
    "spare parts delivery Europe",
  ],
};

export default function WarrantyPage() {
  return (
    <div className="bg-background md:px-9">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWarrantyWebPageSchema()),
        }}
      />
      <WarrantyHero title={warrantyText.title} image={warrantyImg}>
        {warrantyText.description.map((desc, idx) => (
          <p
            key={idx}
            className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl text-normal montserrat"
          >
            {desc}
          </p>
        ))}
      </WarrantyHero>

      <WarrantyFeatures />
    </div>
  );
}
