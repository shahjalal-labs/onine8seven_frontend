"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface FilterSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function FilterSection({
  title,
  defaultOpen = true,
  children,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b-2 py-3">
      <div
        className="flex items-center justify-between cursor-pointer mb-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-title text-lg md:text-xl">{title}</h3>
        <FiChevronDown
          size={25}
          className={`transition-transform font-bold text-primary ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && <div className="space-y-2">{children}</div>}
    </div>
  );
}
