import BarEquipment from "@/components/BarEquipment";
import { getCategoryItemListSchema, getCategoryBreadcrumbSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/catalog/bar-equipment",
  },
    title: "Hurakan Bar Equipment │ Commercial Equipment for Cafés & Bars",
    description: "Professional bar equipment by Hurakan for cafés, bars and HoReCa businesses. Countertop and back-bar solutions for European dealers. Become a dealer today.",
    keywords: ['commercial bar equipment', 'professional bar equipment', 'bar machines HoReCa', 'café equipment supplier', 'bar accessories commercial', 'slush machines', 'hot chocolate dispensers']
}

export default function BarEquipmentPage() {
    return (
        <div className="md:px-9">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        getCategoryItemListSchema("bar-equipment", "Bar Equipment", "Professional bar equipment by Hurakan for cafés, bars and HoReCa businesses. Countertop and back-bar solutions for European dealers.", []),
                        getCategoryBreadcrumbSchema("bar-equipment", "Bar Equipment")
                    ]),
                }}
            />
            <BarEquipment />
        </div>
    )
}