import dragonImage from "@/assets/footer/dragon.png";
import footerBg from "@/assets/footer/footer.jpg";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.facebook.com/EquipMeFoodServiceWholeSaler/",
    icon: FaFacebook,
  },
  {
    href: "https://instagram.com/equipgroup",
    icon: AiFillInstagram,
  },
  {
    href: "https://www.linkedin.com/company/equip-me-group/posts/?feedView=all",
    icon: AiFillLinkedin,
  },
];

const catalogLinks = [
  { label: "Bar equipment", href: "/catalog/bar-equipment" },
  { label: "Coffee equipment", href: "#" },
  { label: "Washing equipment", href: "#" },
  { label: "Neutral equipment", href: "#" },
  { label: "Fast food equipment", href: "#" },
  { label: "Water treatment equipment", href: "#" },
  { label: "Servery equipment", href: "#" },
  { label: "Kitchen tools and cookware", href: "#" },
  { label: "Hygiene equipment", href: "#" },
  { label: "Cooking equipment", href: "#" },
  { label: "Packaging equipment", href: "#" },
  { label: "Refrigeration equipment", href: "#" },
  { label: "Food processing equipment", href: "#" },
];

const sitemapLinks = [
  { label: "Home", href: "/" },
  { label: "Brand", href: "/brand" },
  { label: "Company", href: "/company" },
  { label: "Warranty", href: "/warranty" },
  { label: "How to Buy", href: "/how-to-buy" },
  { label: "Contacts", href: "/contacts" },
  {
    label: "Privacy Policy",
    href: "https://drive.google.com/file/d/1aF-VqJtA7SE0MjyJIHqFsqfLhwvU1SW_/view",
  },
];

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden montserrat text-white px-5 md:px-10">
      {/* Background image & overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerBg.src})` }}
      />
      <div className="absolute inset-0 z-0 bg-[#262626]/95" />

      {/* Right side color strips */}
      <div className="absolute right-0 top-0 bottom-0 w-1 md:w-3 flex flex-col z-10">
        <div className="flex-1 bg-[#4C3541]" />
        <div className="flex-1 bg-[#008894]" />
        <div className="flex-1 bg-[#316274]" />
        <div className="flex-1 bg-[#EFB604]" />
        <div className="flex-1 bg-[#FF9999]" />
        <div className="flex-1 bg-[#D70202]" />
      </div>

      <div className="md:px-10 py-16 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 border-b border-[#FFFFFF33]/50 pb-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold montserrat">
              Let&apos;s grow your business together
            </h2>
            <Link href="https://equip.me/welcome" target="_blank">
              <Button className="text-base font-medium px-6 py-5 montserrat cursor-pointer rounded-none">
                Become a dealer
              </Button>
            </Link>
          </div>
          <div className="flex gap-4 mt-4">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.href}
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-primary transition-colors hover:text-white"
                >
                  <Icon className="block h-full w-full" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Columns */}
        <div className="flex flex-col lg:flex-row w-full relative z-10 pb-16 montserrat">
          {/* Col 1 */}
          <div className="space-y-6 border-r-0 lg:border-r border-[#FFFFFF33]/50 pr-0 lg:pr-8 w-full lg:w-[28%] pb-8 lg:pb-0">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src={logo}
                alt="logo"
                width={50}
                height={50}
                className=""
              />
              <span className="text-2xl font-semibold uppercase">Hurakan</span>
            </div>
            <p className="text-lg  text-gray-300 leading-relaxed ">
              EQUIP HORECA uses cookies and various tracking technologies, such
              as Google Analytics, to help us optimize this site and to assist
              with our promotional and marketing efforts. You can read more in
              our {""}
              <a
                href="https://drive.google.com/file/d/1aF-VqJtA7SE0MjyJIHqFsqfLhwvU1SW_/view"
                target="_blank                                                     "
                className="text-primary hover:underline font-normal"
              >
                Privacy Policy
              </a>
              .
            </p>
            {/* <Link href="https://equip.me/welcome" target="_blank">
              <Button className="text-base font-medium px-6 py-5 montserrat cursor-pointer rounded-none">
                Become a dealer
              </Button>
            </Link> */}
          </div>

          {/* Col 2 */}
          <div className="border-r-0 lg:border-r border-[#FFFFFF33]/50 px-0 lg:pl-16 lg:pr-4 w-full lg:w-[26%] pb-8 lg:pb-0">
            <h3 className="font-semibold mb-6 text-xl">Catalog</h3>
            <ul className="space-y-3">
              {catalogLinks.map((link, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-base text-gray-300 hover:text-primary transition-colors"
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 shrink-0"></span>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="border-r-0 lg:border-r border-[#FFFFFF33]/50 px-0 lg:pl-16 lg:pr-4 w-full lg:w-[20%] pb-8 lg:pb-0">
            <h3 className="font-semibold mb-6 text-xl">Sitemap</h3>
            <ul className="space-y-4">
              {sitemapLinks.map((link, idx) => (
                <li key={idx}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-gray-300 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-base text-gray-300 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div className="w-full lg:w-[26%] px-0 lg:pl-16">
            <div className="mb-8 w-full ">
              <h3 className="font-semibold mb-4 text-xl uppercase">Address</h3>
              <p className="text-base text-gray-300 leading-relaxed ">
                Mustamäe tee 46, 10621 Tallinn,
                <br />
                Harju maakond, Estonia
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-xl uppercase">Email</h3>
              <a
                href="mailto:sales@equip.me"
                className="text-base text-gray-300 hover:text-primary transition-colors"
              >
                sales@equip.me
              </a>
            </div>
          </div>
        </div>

        <div className="absolute left-10 bottom-0 hidden md:block">
          <Image
            src={dragonImage}
            alt="Dragon"
            width={350}
            height={350}
            className=""
          />
        </div>

        <div className="md:pt-8 flex flex-col md:flex-row justify-center items-center relative h-32">
          <p className="text-base md:text-lg text-gray-300 text-start md:text-center relative z-10">
            © {new Date().getFullYear()} Equip HoReCa OÜ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
