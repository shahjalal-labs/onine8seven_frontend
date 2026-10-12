"use client";

import logo from "@/assets/logo.png";
import { ChevronDown, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Brand", href: "/brand" },
  { name: "Company", href: "/company" },
  { name: "Warranty", href: "/warranty" },
  { name: "How to Buy", href: "/how-to-buy" },
  { name: "Contacts", href: "/contacts" },
  // { name: "Privacy Policy", href: "privacy-policy" },
];

function SearchInput({
  className = "relative hidden lg:block",
  inputClassName = "bg-card border-none py-2 pl-3 pr-8 text-base text-title focus:outline-none focus:ring-1 focus:ring-primary w-50",
  iconClassName = "absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-title",
  onClose,
}: {
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
  onClose?: () => void;
}) {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchParams.get("q") || "");
    }, 0);
    return () => clearTimeout(timer);
  }, [searchParams]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      if (onClose) onClose();
    }
  };

  return (
    <div className={className}>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className={inputClassName}
      />
      <Search className={iconClassName} />
    </div>
  );
}

function NavbarContent() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-background border-b border-sidebar-border/20 lg:border-none montserrat">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6  lg:px-8 py-4 lg:py-6">
        {/* Brand/Logo for mobile */}
        <div className="flex items-center space-x-3 lg:hidden ">
          <Link href={"/"}>
            {" "}
            <Image
              src={logo}
              alt="Hurakan — Professional HoReCa Equipment"
              width={148}
              height={148}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 text-xs lg:text-base xl:text-lg font-medium text-title">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`whitespace-nowrap hover:text-primary transition-colors py-1 border-b-2 ${
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 lg:space-x-6 ml-6  ">
          <Suspense fallback={<div className="w-50 h-10 hidden lg:block" />}>
            <SearchInput />
          </Suspense>

          {/* Language Selector */}
          <button className="flex items-center space-x-1 text-sm lg:text-base font-medium hover:text-primary transition-colors bg-card lg:bg-card px-2 py-2 ">
            <span>En</span>
            <ChevronDown size={18} className="text-primary" />
          </button>

          <a
            href="mailto:sales@equip.me"
            className="hidden lg:inline text-primary font-medium text-base underline decoration-primary hover:decoration-primary"
          >
            sales@equip.me
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white focus:outline-none hover:bg-primary/95 transition-colors"
          >
            {isOpen ? <RxDashboard size={20} /> : <RxDashboard size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-[#13181EB2]/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-72 h-full bg-white shadow-xl flex flex-col p-6 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b pb-4">
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 text-lg font-medium text-title">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`hover:text-primary transition-colors py-2 border-l-4 pl-3 ${
                      isActive
                        ? "border-primary text-primary"
                        : "border-transparent"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t pt-4 space-y-4">
              {/* Search in Drawer */}
              <Suspense fallback={<div className="w-full h-10" />}>
                <SearchInput
                  className="relative"
                  inputClassName="w-full bg-gray-50 border border-gray-200 rounded-sm py-2 pl-3 pr-8 text-sm text-title focus:outline-none focus:ring-1 focus:ring-primary"
                  iconClassName="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  onClose={() => setIsOpen(false)}
                />
              </Suspense>

              {/* Email in Drawer */}
              <div className="pt-2">
                <a
                  href="mailto:sales@equip.me"
                  className="text-primary font-medium text-sm underline"
                >
                  sales@equip.me
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default function Navbar() {
  return <NavbarContent />;
}
