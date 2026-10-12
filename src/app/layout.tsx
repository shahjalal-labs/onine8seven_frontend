import CookieConsent from "@/components/Shared/CookieConsent";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import Sidebar from "@/components/Shared/Sidebar";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hurakan | Professional HoReCa Equipment for Dealers in Europe",
  description:
    "Hurakan is a European brand of professional HoReCa equipment. Commercial kitchen solutions for dealers and distributors across Europe. Become a dealer today.n brand of professionalBecome a dealer today.",
  keywords: [
    "Hurakan HoReCa equipment",
    "professional kitchen equipment",
    "HoReCa equipment Europe",
    "commercial equipment distributor",
    "restaurant kitchen equipment",
    "catering equipment supplier",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased overflow-x-clip`}
    >
      <head>
        <meta charSet="UTF-8" />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TH5GXW99');

        `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background overflow-x-clip">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TH5GXW99"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Navbar />
            <main className="flex-1 overflow-x-clip">{children}</main>
          </div>
        </div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
