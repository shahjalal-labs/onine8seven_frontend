import Catalog from "@/components/Catalog";
import { getCatalogLandingWebPageSchema, getCatalogLandingItemListSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/catalog",
  },
    title: "Hurakan Catalog │ Professional HORECA Equipment Range",
    description: "Explore the full Hurakan catalog of professional HoReCa and commercial kitchen equipment. Fryers, grills, fridges and more for European dealers. Browse now.",
    keywords: ['Hurakan catalog', 'HoReCa equipment catalog', 'commercial kitchen equipment range', 'professional kitchen products, equipment specification']
}

export default function CatalogPage() {
    return (
        <div className="md:px-9">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getCatalogLandingWebPageSchema()) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getCatalogLandingItemListSchema()) }}
            />
            < Catalog />
        </div>
    )
}