import AboutCompany from "@/components/Company/CompanyHero";
import WhatWeDo from "@/components/Company/WhatWeDo";
import { WhoWeAre } from "@/components/Company/WhoWeAre";
import WhyPartnersTrustUs from "@/components/Company/WhyPartnersTrustUs";
import { CompanyText } from "@/lib/text";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/company",
  },
  title: "About Hurakan & Equip Horeca OÜ │ B2B Kitchen Supplier",
  description:
    "Equip Horeca OÜ is the official European distributor of Hurakan brand. We supply commercial kitchen equipment to professional dealers across Europe. Contact us.",
  keywords: "Equip Horeca OÜ",
};

import {
  getCompanyOrganizationSchema,
  getCompanyWebPageSchema,
} from "@/lib/schema";

export default function CompanyPage() {
  return (
    <div className="bg-background md:px-9">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getCompanyOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getCompanyWebPageSchema()),
        }}
      />
      <AboutCompany title={CompanyText.title}>
        {CompanyText.description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </AboutCompany>

      <WhoWeAre />
      <WhatWeDo />
      <WhyPartnersTrustUs />
    </div>
  );
}
