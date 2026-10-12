import notfound from "@/assets/home/not-found.png";
import { getNotFoundWebPageSchema } from "@/lib/schema";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/404",
  },
  title: "Page Not Found │ Hurakan HoReCa Equipment",
  description:
    "This page could not be found. Browse the Hurakan product catalog or use search to find professional HoReCa equipment for dealers across Europe.",
};

export default function NotFound() {
  return (
    <div className="w-full md:px-9">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getNotFoundWebPageSchema()),
        }}
      />
      <Link href="/" title="Return Home" className="block w-full">
        <Image
          src={notfound}
          alt="404 Not Found"
          className="w-full h-auto object-cover"
          priority
        />
      </Link>
    </div>
  );
}
