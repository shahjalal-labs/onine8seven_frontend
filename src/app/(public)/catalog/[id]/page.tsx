"use client";

import { catalogProduct } from "@/lib/data/products";
import { CatalogProduct } from "@/types/products.type";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { getProductSchema, getProductBreadcrumbSchema } from "@/lib/schema";
import React, { use, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

interface CatalogProductDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function CatalogProductDetailsPage({
  params,
}: CatalogProductDetailsPageProps) {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("Features");
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);

  const productId = parseInt(id);
  const productInfo = catalogProduct.find((p) => p.id === productId);

  if (!productInfo) {
    return (
      <div className="p-20 text-center text-2xl font-bold">
        Product not found (ID: {id})
      </div>
    );
  }

  const images = productInfo.images || [];

  const minSwipeDistance = 50;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const formatSpecLabel = (key: string) => {
    const result = key.replace(/([A-Z])/g, " $1").toLowerCase();
    return result.charAt(0).toUpperCase() + result.slice(1) + ":";
  };

  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://hurakan.eu"}/catalog/${productInfo.category?.toLowerCase().replace(/ /g, "-") || "all"}/${productInfo.id}`;

  return (
    <div className="w-full bg-background pb-20 px-4 md:px-9">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductSchema(productInfo, canonicalUrl)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductBreadcrumbSchema(productInfo.category?.toLowerCase().replace(/ /g, "-") || "all", productInfo.category || "Category", productInfo.title, canonicalUrl)) }}
      />
      <div className="space-y-6 md:space-y-8">
        <div className="bg-white p-4 md:p-6 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-y-6 lg:gap-12">
          {/* Breadcrumbs */}
          <div className="order-1 lg:col-start-1 lg:col-end-2 flex flex-col text-left montserrat">
            <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider flex items-center flex-wrap gap-1">
              <Link href="/" className="hover:text-primary">
                Home Page
              </Link>{" "}
              /
              <Link href="/catalog" className="hover:text-primary">
                Catalog
              </Link>{" "}
              /
              {productInfo.category && (
                <>
                  <span>{productInfo.category}</span> /
                </>
              )}
              <span className="font-medium text-gray-500">
                {productInfo.title}
              </span>
            </div>
          </div>

          {/* Gallery */}
          <div className="order-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-span-2 flex flex-col items-center">
            {/* MAIN IMAGE */}
            <div className="relative w-full flex items-center justify-center mb-4 md:mb-8 group">
              {/* Left Button */}
              <button
                onClick={prevImage}
                disabled={activeIndex === 0}
                className={`absolute left-2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-sm shadow-sm transition-colors ${activeIndex === 0 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary/90 text-white cursor-pointer"}`}
              >
                <FiChevronLeft size={20} />
              </button>

              {/* Image with Zoom */}
              <div
                className="relative w-62.5 h-62.5 md:w-100 md:h-100 lg:w-125 lg:h-125 overflow-hidden cursor-zoom-in"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                onMouseMove={handleMouseMove}
              >
                {/* Normal Image */}
                <Image
                  src={images[activeIndex]}
                  alt={`${productInfo.title} - Image ${activeIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                />

                {/* Zoom Layer */}
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-white pointer-events-none z-20 ${
                    showZoom ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    backgroundImage: `url(${typeof images[activeIndex] === "string" ? images[activeIndex] : images[activeIndex].src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "200%",
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    transition:
                      "background-position 0.15s ease-out, opacity 0.3s ease-in-out",
                  }}
                />
              </div>

              {/* Right Button */}
              <button
                onClick={nextImage}
                disabled={activeIndex === images.length - 1}
                className={`absolute right-2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-sm shadow-sm transition-colors ${activeIndex === images.length - 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary/90 text-white cursor-pointer"}`}
              >
                <FiChevronRight size={20} />
              </button>
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 w-full justify-center scrollbar-hide">
              {images.map((img: StaticImageData | string, idx: number) => (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 relative border p-1 cursor-pointer shrink-0 transition-all duration-200
                    `}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-contain p-1"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Text content */}
          <div className="order-3 lg:col-start-1 lg:col-end-2 h-full">
            <div className="lg:sticky lg:top-24 flex flex-col text-left montserrat mb-10">
              <h1 className="text-xl md:text-3xl lg:text-[40px] font-bold mb-4 md:mb-6 text-black uppercase leading-tight inter">
                {productInfo.title}
              </h1>
              <p className="text-gray-500 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
                <strong className="text-black">
                  {productInfo.title.split(" ").slice(0, 3).join(" ")}
                </strong>{" "}
                {productInfo.description.replace(
                  productInfo.title.split(" ").slice(0, 3).join(" "),
                  "",
                )}
              </p>

              <h2 className="font-bold text-base md:text-lg lg:text-xl text-black mb-3 md:mb-4">
                Features:
              </h2>
              <ul className="text-gray-500 text-base  md:text-lg space-y-1 md:space-y-2 mb-6 md:mb-8">
                {productInfo.features.map((feature, idx) => (
                  <li key={idx}>– {feature}</li>
                ))}
              </ul>

              <h2 className="font-bold text-sm md:text-lg lg:text-xl text-black mb-3 md:mb-4">
                What&apos;s included
              </h2>
              <ul className="text-gray-500 text-base md:text-lg space-y-1 md:space-y-2 mb-8 md:mb-10">
                {productInfo.includes.map((item, idx) => (
                  <li key={idx}>– {item}</li>
                ))}
              </ul>

              <div className="my-5">
                <Link href="https://equip.me/welcome" target="_blank">
                  <Button className="text-base lg:text-lg font-medium px-6 py-5 montserrat cursor-pointer rounded-none">
                    Become a dealer
                  </Button>
                </Link>
              </div>

              <div className="text-gray-500 text-base md:text-lg space-y-1 md:space-y-2 uppercase">
                <p>Category: {productInfo.category}</p>
                <p className="capitalize">{productInfo.tag}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specs Section */}
        <div className="bg-white p-4 md:p-6 lg:p-10 shadow-sm border border-gray-100 montserrat">
          <div className="flex w-full justify-center md:justify-start border-b border-gray-100 mb-6 md:mb-8 space-x-0 md:space-x-8">
            <button
              className={`flex-1 md:flex-none text-center md:text-left pb-3 md:pb-4 text-base md:text-lg font-medium transition-colors relative ${activeTab === "Features" ? "text-primary" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab("Features")}
            >
              Features
              {activeTab === "Features" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              )}
            </button>
            <button
              className={`flex-1 md:flex-none text-center md:text-left pb-3 md:pb-4 text-base md:text-lg font-medium transition-colors relative ${activeTab === "Downloads" ? "text-primary" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab("Downloads")}
            >
              Downloads
              {activeTab === "Downloads" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              )}
            </button>
          </div>

          {activeTab === "Features" && (
            <div className="columns-1 sm:columns-2 lg:columns-4 gap-8 [column-rule:1px_dotted_#e5e7eb] text-base md:text-lg pt-2 md:pt-6">
              {Object.entries(productInfo.specs || {}).map(
                ([key, value], idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 pb-3 md:pb-4 break-inside-avoid"
                  >
                    <span className="text-gray-500 w-35 md:w-30 shrink-0 text-base md:text-lg montserrat">
                      {formatSpecLabel(key)}
                    </span>
                    <span className="text-black font-medium text-base md:text-lg montserrat">
                      {String(value)}
                    </span>
                  </div>
                ),
              )}
            </div>
          )}
          {activeTab === "Downloads" && (
            <div className="py-4 md:py-8 text-base md:text-lg text-gray-500 pt-2">
              No downloads available for this product yet.
            </div>
          )}
        </div>

        {/* Related Products Section */}
        <div className="pt-8 md:pt-12">
          <h2 className="text-lg md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 tracking-tight inter">
            Related <span className="text-primary">products</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {catalogProduct?.slice(0, 3).map((product: CatalogProduct) => (
              <Link
                href={`/catalog/${product.id}`}
                key={product.id}
                className="bg-white p-4 md:p-6 shadow-sm flex flex-col items-start text-left border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="relative mb-4 md:mb-6 w-full flex justify-center border-2 border-gray-100 py-2 md:py-4">
                  <div className="relative w-45 h-45 md:w-full md:h-58.75">
                    <Image
                      src={product.image}
                      alt="Product"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-base md:text-lg lg:text-xl mb-2 md:mb-3 leading-tight uppercase text-black montserrat">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed w-full montserrat line-clamp-3">
                  {product.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
