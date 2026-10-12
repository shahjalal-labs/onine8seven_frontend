"use client";
import { FiChevronDown } from "react-icons/fi";

const filters = [
  { title: "Length", min: "0", max: "150000" },
  { title: "Width", min: "0", max: "150000" },
  { title: "Height", min: "0", max: "150000" },
  { title: "Weight", min: "0", max: "150000" },
  { title: "Gross weight", min: "0", max: "150000" },
  { title: "Power", min: "0", max: "40" },
  { title: "Voltage", min: "0", max: "400" },
];

export default function CatalogFilters() {
  return (
    <div className="p-4 py-6 border-t border-sidebar-border/40 montserrat flex flex-col gap-4 lg:gap-6 ">
      {filters.map((filter) => (
        <div
          key={filter.title}
          className="border-b border-gray-100 pb-4 lg:border-none lg:pb-0"
        >
          {/* Mobile Toggle */}
          <details className="lg:hidden group">
            <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-gray-800 text-base md:text-lg ">
              {filter.title}
              <FiChevronDown className="text-primary transition-transform group-open:rotate-180" />
            </summary>
            <div className="flex items-center space-x-2 mt-4">
              <input
                type="text"
                placeholder={filter.min}
                className="flex-1 w-full border border-gray-200 rounded-md py-2 px-3 text-base md:text-lg focus:outline-none focus:border-[#00a29a]"
              />
              <input
                type="text"
                placeholder={filter.max}
                className="flex-1 w-full border border-gray-200 rounded-md py-2 px-3 text-base md:text-lg focus:outline-none focus:border-[#00a29a]"
              />
            </div>
          </details>

          {/* Desktop Always Open */}
          <div className="hidden lg:block">
            <h3 className="font-bold text-gray-800 text-base mb-3">
              {filter.title}
            </h3>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder={filter.min}
                className="flex-1 w-full border border-gray-200 rounded-md py-2 px-3 text-base md:text-lg  focus:outline-none focus:border-[#00a29a]"
              />
              <input
                type="text"
                placeholder={filter.max}
                className="flex-1 w-full border border-gray-200 rounded-md py-2 px-3 text-base md:text-lg focus:outline-none focus:border-[#00a29a]"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex items-center space-x-2 pt-4">
        <button className="flex-1 bg-primary hover:bg-primary/80 text-white py-2 lg:py-3 cursor-pointer text-base lg:text-lg font-semibold transition-colors">
          Apply
        </button>

        <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-title py-2 lg:py-3 cursor-pointer text-base lg:text-lg font-semibold transition-colors">
          Reset
        </button>
      </div>
    </div>
  );
}
