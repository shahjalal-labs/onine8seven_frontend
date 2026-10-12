"use client";

import React from "react";
import { FiCheck } from "react-icons/fi";

interface FilterCheckboxProps {
  label: string;
  count?: number;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  icon?: React.ReactNode;
}

export default function FilterCheckbox({ label, count, defaultChecked = false, onChange, icon }: FilterCheckboxProps) {
  return (
    <label className="flex items-center justify-between text-base md:text-lg text-title cursor-pointer group">
      <div className="flex items-center space-x-3">
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            defaultChecked={defaultChecked}
            onChange={(e) => onChange?.(e.target.checked)}
            className="peer appearance-none w-5 h-5 rounded-sm border-2 border-gray-300 checked:bg-primary checked:border-primary cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
          />
          <FiCheck className="absolute text-white w-3.5 h-3.5 opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
        </div>
        <span className="flex items-center group-hover:text-primary transition-colors">
          {label}
          {icon && <span className="ml-1 text-[10px]">{icon}</span>}
        </span>
      </div>
      {count !== undefined && <span className="text-gray-400">({count})</span>}
    </label>
  );
}
