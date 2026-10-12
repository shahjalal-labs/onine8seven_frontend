import heroImg from "@/assets/home/kitchen.jpg";
import { catalogProduct } from "@/lib/data/products";
import { CatalogProduct } from "@/types/products.type";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import CatalogFilters from "./Shared/CatalogFilters";
import Pagination from "./ui/Pagination";

export default function Catalog() {
  return (
    <div className="w-full pb-20">
      {/* Hero Section */}
      <div className="relative w-full h-75  md:h-127.5 lg:h-160 ">
        <Image src={heroImg} alt="Kitchen" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-16 text-white w-full max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-3 tracking-tight inter">
            Search products
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-6 inter">
            Enter part of the name or code
          </p>
          <div className="relative w-full ">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 px-4 pr-12 bg-card text-black text-lg md:text-xl font-medium focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="absolute right-3 top-3 text-gray-500 hover:text-primary">
              <FiSearch size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-24">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-base md:text-lg text-gray-500 mb-8 inter px-4 md:px-0">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">Catalog EquipQuote</span>
        </div>

        {/* Mobile Filters */}
        <div className="block lg:hidden mb-12">
          <CatalogFilters />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 mt-8 md:mt-16">
          {catalogProduct?.map((product: CatalogProduct) => (
            <Link
              href={`/catalog/${product.id}`}
              key={product.id}
              className="bg-white p-4 md:p-6 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="relative mb-6 w-full flex justify-center border-2 border-gray-100">
                <Image
                  src={product.image}
                  alt="Product"
                  width={335}
                  height={235}
                  className="object-contain"
                />
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl mb-3 leading-tight uppercase text-black inter">
                {product.title}
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed w-full inter">
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
