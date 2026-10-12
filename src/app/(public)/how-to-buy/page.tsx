import DealerRegistrationProcess from "@/components/HowToBuy/DealerRegistrationProcess";
import HowToBuyHero from "@/components/HowToBuy/HowToBuyHero";
import OrderProcess from "@/components/HowToBuy/OrderProcess";
import WeSupply from "@/components/HowToBuy/WeSupply";
import { HowToBuyText } from "@/lib/text";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/how-to-buy",
  },
  title: "How to Buy Hurakan Equipment │ Dealer & Distributor Guide",
  description:
    "Become a Hurakan dealer: access wholesale prices, product catalogs and dedicated support. Join our European HoReCa equipment distributor network. Contact us.",
  keywords: [
    "buy Hurakan equipment",
    "Hurakan dealers",
    "HoReCa wholesale",
    "commercial kitchen supplier",
    "wholesale restaurant supply",
    "dealer registration",
    "B2B price list",
  ],
};

import { getHowToBuyWebPageSchema, getHowToBuyHowToSchema } from "@/lib/schema";

export default function HowToBuyPage() {
  return (
    <div className="bg-background md:px-9">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getHowToBuyWebPageSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getHowToBuyHowToSchema()) }}
      />
      <HowToBuyHero title={HowToBuyText.title}>
        {HowToBuyText.description.map((desc, idx) => (
          <p key={idx}>{desc}</p>
        ))}
      </HowToBuyHero>

      <WeSupply />
      <DealerRegistrationProcess />
      <OrderProcess />
    </div>
  );
}
