"use client";

import { FiSearch } from "react-icons/fi";
import FilterCheckbox from "./FilterCheckbox";
import FilterSection from "./FilterSection";

export default function BarEquipmentFilters() {
  return (
    <div className="p-4 py-6 space-y-6 montserrat mt-4 mb-5 ">
      {/* Sort Section */}
      <FilterSection title="Sort">
        <FilterCheckbox label="By Price" icon="▲" />
        <FilterCheckbox label="By Price" icon="▼" />
        <FilterCheckbox label="By delivery date" defaultChecked />
      </FilterSection>

      {/* Categories, subcategories */}
      <FilterSection title="Categories, subcategories">
        <div className="space-y-4">
          <div>
            <h4 className="text-base md:text-lg text-title font-semibold mb-2">
              Bar equipment
            </h4>
            <div className="space-y-2 pl-2">
              <FilterCheckbox label="Bar equipment accessories" />
              <FilterCheckbox label="Hot chocolate dispensers" />
              <FilterCheckbox
                label="Devices for cooling glasses"
                defaultChecked
              />
              <FilterCheckbox label="Desert cookers" />
              <FilterCheckbox label="Blenders" />
            </div>
          </div>
          <div>
            <h4 className="text-base md:text-lg text-title font-semibold mb-2">
              Sales
            </h4>
            <div className="space-y-2 pl-2">
              <FilterCheckbox label="Scales accessories" />
              <FilterCheckbox label="Vehicle scales" />
              <FilterCheckbox label="Household" />
              <FilterCheckbox label="Crane scales" defaultChecked />
            </div>
          </div>
        </div>
      </FilterSection>

      {/* Brand name */}
      {/* <FilterSection title="Brand name">
        {[
          { name: "Cancan", count: 5, checked: false },
          { name: "Hurakan", count: 20, checked: false },
          { name: "Tefcold", count: 7, checked: true },
          { name: "Cube", count: 15, checked: false },
          { name: "Arfical Melts", count: 10, checked: false },
          { name: "Apach", count: 2, checked: false },
        ].map((brand) => (
          <FilterCheckbox
            key={brand.name}
            label={brand.name}
            count={brand.count}
            defaultChecked={brand.checked}
          />
        ))}
      </FilterSection> */}

      {/* Name Section */}
      <FilterSection title="Name">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-primary"
          />
          <FiSearch className="absolute right-3 top-2.5 text-gray-400" />
        </div>
      </FilterSection>

      {/* Country */}
      <FilterSection title="Country">
        {[
          { name: "Austria", count: 69, checked: false },
          { name: "Belarus", count: 12, checked: false },
          { name: "Cube", count: 15, checked: false },
          { name: "Brazil", count: 69, checked: false },
          { name: "Belgium", count: 44, checked: true },
          { name: "Germany", count: 110, checked: false },
        ].map((country) => (
          <FilterCheckbox
            key={country.name}
            label={country.name}
            count={country.count}
            defaultChecked={country.checked}
          />
        ))}
      </FilterSection>

      {/* Filter by Price */}
      {/* <FilterSection title="Filter by Price">
        <PriceSlider min={0} max={2000} />
      </FilterSection> */}

      {/* Availability */}
      <FilterSection title="Availability">
        <FilterCheckbox label="Any" />
        <FilterCheckbox label="Available at warehouse" />
        <FilterCheckbox label="Available in my region" />
        <FilterCheckbox label="Available by date" />
      </FilterSection>

      {/* Actions */}
      <div className="flex items-center space-x-2 pt-4">
        <button className="flex-1 bg-primary cursor-pointer hover:bg-primary/80 text-white py-3  text-base md:text-lg font-semibold transition-colors">
          Apply
        </button>
        <button className="flex-1 bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-700 py-3  text-base md:text-lg font-semibold transition-colors">
          Reset
        </button>
      </div>
    </div>
  );
}
