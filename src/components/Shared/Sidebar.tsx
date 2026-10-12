"use client";

import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BarEquipmentFilters from "./BarEquipmentFilters";
import CatalogFilters from "./CatalogFilters";

export default function Sidebar() {
  const pathname = usePathname();
  const isCatalog = pathname.startsWith("/catalog");
  const isBarEquipment = pathname.startsWith("/catalog/bar-equipment");

  const categories = [
    { name: "Bar equipment", href: "/catalog/bar-equipment" },
    { name: "Coffee equipment", href: "#" },
    { name: "Washing equipment", href: "#" },
    { name: "Neutral equipment", href: "#" },
    { name: "Fast food equipment", href: "#" },
    { name: "Water treatment equipment", href: "#" },
    { name: "Servery equipment", href: "#" },
    { name: "Kitchen tools and cookware", href: "#" },
    { name: "Hygiene equipment", href: "#" },
    { name: "Cooking equipment", href: "#" },
    { name: "Packaging equipment", href: "#" },
    { name: "Refrigeration equipment", href: "#" },
    { name: "Food processing equipment", href: "#" },
  ];

  return (
    <aside className="hidden lg:block w-93.5 shrink-0 sticky top-0 bg-white border-r border-sidebar-border/40 h-fit self-start mb-20">
      {/* Brand Header */}
      <div className="py-4 px-4 md:px-6 flex items-center space-x-3 border-b border-sidebar-border/40 cursor-pointer">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Hurakan — Professional HoReCa Equipment"
            width={170}
            height={170}
            priority
          />
        </Link>
      </div>

      {/* Navigation */}
      <div className="p-4 py-6 ">
        <ul className="space-y-3 montserrat">
          {categories.map((category, index) => {
            const isActive =
              category.href !== "#" && pathname.startsWith(category.href);
            return (
              <li
                key={index}
                className={`flex items-center space-x-2 text-lg md:text-xl transition-colors ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                <span
                  className={`w-1 h-1 rounded-full shrink-0 ${isActive ? "bg-primary" : "bg-gray-400"}`}
                ></span>
                <Link href={category.href} className="block py-1">
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Conditional Filters */}
      {isCatalog && (
        <div className="border-t-16 border-[#F6F6F6]">
          {!isBarEquipment && <CatalogFilters />}
          {isBarEquipment && <BarEquipmentFilters />}
        </div>
      )}
    </aside>
  );
}
