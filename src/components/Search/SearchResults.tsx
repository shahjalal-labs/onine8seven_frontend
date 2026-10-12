"use client";

import viewList from "@/assets/card/list view-circle.svg";
import { catalogProduct } from "@/lib/data/products";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { FiChevronDown, FiGrid, FiX } from "react-icons/fi";
import Pagination from "../ui/Pagination";

function SearchContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const router = useRouter();

  const filteredProducts = catalogProduct.filter((product) =>
    searchQuery
      ? product.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true,
  );

  return (
    <div className="w-full pb-20 px-4 md:px-9 pt-8">
      {/* Header */}
      <div className="mb-8 border-b border-gray-200 pb-8 bg-card rounded-md p-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight inter">
          Searching for &quot;{searchQuery}&quot;
        </h1>
        <div className="mt-4 flex items-center justify-between cursor-pointer gap-3">
          <p className="text-lg md:text-2xl text-gray-700 inter">
            {searchQuery || "Searching for"}
          </p>
          {searchQuery && (
            <button
              onClick={() => {
                router.push("/search");
              }}
              className="text-title hover:text-red-500 cursor-pointer transition-colors"
              title="Clear search"
            >
              <FiX size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4 inter text-sm md:text-base text-gray-500">
        <div className="flex flex-col items-start gap-4 w-full lg:w-auto">
          {/* View toggles & Results count */}
          <div className="flex items-center gap-3  text-lg">
            <div className="flex items-center gap-1">
              <button className="">
                <FiGrid size={25} />
              </button>
              <button className="p-1.5 text-description hover:text-primary">
                <Image src={viewList} alt="List View" width={25} height={25} />
              </button>
            </div>
            <span>
              Showing {filteredProducts.length > 0 ? 1 : 0} to{" "}
              {filteredProducts.length} of {filteredProducts.length} results
            </span>
          </div>

          {/* Show & Sort Dropdowns for Desktop/Mobile */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span>Show:</span>
              <div className="relative border border-gray-200 rounded-sm flex items-center hover:border-gray-300 bg-white">
                <select className="appearance-none bg-transparent pl-3 pr-8 py-1.5 text-gray-800 focus:outline-none cursor-pointer">
                  {[1, 2, 3, 4, 5, 6, 12, 24, 48].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>Sort:</span>
              <div className="relative border border-gray-200 rounded-sm px-3 py-1.5 flex items-center cursor-pointer hover:border-gray-300 min-w-35 justify-between bg-white">
                <span className="text-gray-800">By Popularity</span>
                <FiChevronDown className="ml-2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Right side Sort */}
        <div className="hidden lg:flex items-center gap-2 cursor-pointer text-title font-semibold text-lg">
          <span>Sort by latest</span>
          <FiChevronDown size={25} className="text-title" />
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2 text-sm md:text-lg text-gray-500 mb-8 inter">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>›</span>
        <span className="text-gray-900 font-medium">Search</span>
        <span>›</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        {filteredProducts.map((product) => (
          <Link
            href={`/catalog/${product.id}`}
            key={product.id}
            className="bg-white rounded-sm border border-transparent hover:border-gray-200 transition-colors cursor-pointer group flex flex-col h-full"
          >
            <div className="p-4 md:p-6 lg:p-8 relative bg-card shrink-0 flex items-center justify-center min-h-62.5 lg:min-h-75">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-8 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 md:p-6 lg:p-8 flex flex-col grow text-left inter">
              <h2 className="text-lg md:text-2xl font-bold mb-3 text-title tracking-tight line-clamp-2">
                {product.title}
              </h2>
              <p className="text-gray-500 text-base md:text-lg  leading-relaxed line-clamp-4">
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <Pagination />
    </div>
  );
}

export default function SearchResults() {
  return (
    <Suspense
      fallback={
        <div className="w-full pb-20 px-4 md:px-9 pt-8 text-center text-gray-500">
          Loading search results...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
