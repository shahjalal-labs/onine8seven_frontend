"use client";
import mail from "@/assets/card/mail.svg";
import phone from "@/assets/card/telephone (1) 1.svg";
import whatsapp from "@/assets/card/whatsapp.svg";
import guideImg from "@/assets/home/img.jpg";
import messageImg from "@/assets/home/message.png";
import Image from "next/image";

const contactOptions = [
  {
    icon: mail,
    title: "Email: sales@equip.me",
    description: "Best for detailed inquiries, quotes, support request details",
  },
  {
    icon: phone,
    title: "Phone: +372 584 52 401",
    description: "Direct line to sales department contact",
  },
  {
    icon: whatsapp,
    title: "WhatsApp messenger:",
    description: "Available for quick questions and order updates",
  },
];

export default function ContactGuideSection() {
  return (
    <div className="w-full flex flex-col montserrat md:py-16 overflow-x-hidden">
      {/* Top Block: How to reach us */}
      <div className="w-full flex flex-col-reverse lg:flex-row shadow-sm gap-4">
        <div className="lg:w-1/2 bg-[#252525] text-white p-4 md:p-12 lg:p-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 montserrat">
            How to reach us:
          </h2>
          <div className="space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
            <p>
              For dealer inquiries: Use our dealer inquiry form or email
              directly. Include your company name, country, VAT and what
              products you&apos;re interested in. Our sales team will respond
              within 24 hours.{" "}
            </p>
            <p>
              For product questions: Equipment inquiry form or direct email.
              Tell us what you need — equipment consultation is free. We help
              you find the right solutions for your customers.{" "}
            </p>
            <p>
              For orders & logistics: Contact our sales representative for order
              assistance Europe. We handle quotes, stock checks, and shipping
              coordination.{" "}
            </p>
            <p>
              For warranty & service: Dedicated manager supports you with a
              clear process. Have your invoice and article number ready. See our
              Warranty page for details.{" "}
            </p>
            <p>
              For partnership requests: Interested in becoming a distributor?
              Send us a business inquiry catering to your region. We&apos;re
              expanding our dealer network across Europe.{" "}
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-2/3 relative min-h-75 md:min-h-100 lg:min-h-full">
          <Image
            src={guideImg}
            alt="Office interior"
            fill
            className="object-contain md:object-contain lg:object-cover lg:object-right"
          />
        </div>
      </div>

      {/* Contact options */}
      <div className="w-full px-4 md:px-0 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4 montserrat">
          <span className="text-black">Contact </span>
          <span className="text-primary">options</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-12 mt-9">
          {contactOptions.map((item, index) => {
            return (
              <div key={index} className="flex gap-4 items-start">
                <div className="bg-white p-4 rounded-full shadow-sm shrink-0 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-1 text-title">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-base md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="font-bold text-title text-base md:text-xl border-t border-gray-200 pt-8 montserrat">
          Multilingual assistance available: English, French, Estonian,
          Romanian, Serbian, Croatian, Czech, and Russian.
        </p>
      </div>

      {/*  What to include in your message */}
      <div className="w-full pb-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start montserrat">
        <div className="w-full lg:w-[42%] order-2 lg:order-1 shrink-0 mt-8 lg:mt-5 px-4 md:px-0">
          <Image
            src={messageImg}
            alt="Email composition example"
            className="w-full h-auto max-w-full"
          />
        </div>

        <div className="w-full lg:flex-1 order-1 lg:order-2 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-title mb-4 leading-tight montserrat">
            What to include in
            <br />
            your message
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-8">
            For fastest response, please provide:
          </p>

          <div className="space-y-0 text-base md:text-lg montserrat">
            {[
              "Company name and country",
              "Your role (dealer, distributor, other)",
              "Your VAT number",
              "Delivery address",
              "What you're looking for (products, pricing, partnership, support)",
              "Any specific product codes or categories",
            ].map((item, idx) => (
              <div
                key={idx}
                className="border-b-2 border-dotted border-gray-300 py-4 flex items-start"
              >
                <span className="text-gray-500 font-medium mr-3">
                  {idx + 1}.
                </span>
                <span className="text-gray-600 text-base md:text-lg">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-base md:text-lg mt-8 leading-relaxed montserrat">
            This helps us route your request to the right sales representative
            contact immediately.
          </p>
        </div>
      </div>
    </div>
  );
}
