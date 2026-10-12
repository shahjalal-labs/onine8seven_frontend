import ContactGuideSection from "@/components/Contact/ContactGuideSection";
import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";

import {
  getContactsLocalBusinessSchema,
  getContactsWebPageSchema,
} from "@/lib/schema";
import { contactText } from "@/lib/text";

export const metadata = {
  alternates: {
    canonical: "/contacts",
  },
  title: "Contact Hurakan │ HoReCa Equipment Supplier in Europe",
  description:
    "Get in touch with the Hurakan team for dealer inquiries, product information and order support. Professional HoReCa equipment supplier in Europe. Contact us.",
  keywords: [
    "contact Hurakan",
    "Hurakan support",
    "HoReCa equipment contact",
    "Equip Horeca contact",
    "dealer inquiry",
    "sales department contact",
  ],
};

export default function ContactsPage() {
  return (
    <div className="bg-background md:px-9 ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getContactsLocalBusinessSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getContactsWebPageSchema()),
        }}
      />
      <ContactHero
        title={contactText.title}
        description={contactText.description}
      />
      <ContactInfo />
      <ContactGuideSection />
    </div>
  );
}
