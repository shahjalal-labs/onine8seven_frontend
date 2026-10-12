import PrivacyPolicy from "@/components/PrivacyPolicy";
import { getPrivacyPolicyWebPageSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/privacy-policy",
  },
  title: "Privacy Policy | Hurakan GDPR Compliance",
  description: "Read the Hurakan privacy policy and data protection terms. Full GDPR compliance for partners and dealers in the European Union.",
};

export default function PrivacyPolicyPage() {
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(getPrivacyPolicyWebPageSchema()),
                }}
            />
            <PrivacyPolicy />
        </div>
    )
}