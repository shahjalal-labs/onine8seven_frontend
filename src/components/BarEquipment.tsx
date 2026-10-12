import heroImg from "@/assets/home/bar-equip.jpg";
import { products } from "@/lib/data/products";
import Image from "next/image";
import Link from "next/link";
import BarEquipmentFilters from "./Shared/BarEquipmentFilters";
import ContactDealerButtons from "./Shared/ContactDealerButtons ";
import Pagination from "./ui/Pagination";

export default function BarEquipment() {
  return (
    <div className="w-full pb-20">
      {/* Hero Section */}
      <div className="relative w-full h-100 md:h-127.5 lg:h-160 ">
        <Image src={heroImg} alt="Kitchen Bar" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-16 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight inter">
            Bar equipment
          </h1>
          <ul className="space-y-1 md:space-y-2 mb-6 md:mb-8 text-sm md:text-lg text-gray-300 list-disc list-inside montserrat">
            <li>Bar equipment accessories</li>
            <li>Hot chocolate dispensers</li>
            <li>Devices for cooling glasses</li>
            <li>Blenders</li>
            <li>Slush machines</li>
          </ul>
          <ContactDealerButtons />
        </div>
      </div>

      <div className="mt-8 md:mt-24 px-4 md:px-0">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 text-sm md:text-lg text-gray-500 mb-6 md:mb-8 montserrat">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>›</span>
          <Link href="/catalog" className="hover:text-primary">
            Catalog
          </Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">Bar equipment</span>
        </div>

        {/* Mobile Filters */}
        <div className="block lg:hidden mb-8 border border-gray-200">
          <BarEquipmentFilters />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 montserrat">
          {products.map((product, idx) => (
            <Link
              href={`/catalog/bar-equipment/${product.id}`}
              key={product.id || idx}
              className="bg-white p-4 md:p-6 flex flex-col border md:border-none border-gray-100 cursor-pointer hover:shadow-md transition-shadow group"
            >
              <div className="relative w-full h-48 mb-5 flex justify-center bg-[#F6F6F6]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-lg md:text-3xl mb-2 md:mb-3 leading-tight uppercase montserrat">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-4 md:mb-6 grow montserrat">
                {product.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
}
