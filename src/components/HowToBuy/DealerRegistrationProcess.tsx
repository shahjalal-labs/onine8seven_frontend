"use client";
import portalImg from "@/assets/home/partnarPortal.jpg";
import phnImg from "@/assets/home/phn.jpg";
import { Forward, Reply, ReplyAll } from "lucide-react";
import Image from "next/image";

export default function DealerRegistrationProcess() {
  return (
    <div className="w-full  px-4 md:px-0 flex justify-center ">
      <div className="w-full  flex flex-col">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 inter">
          <span className="text-title">Dealer </span>
          <span className="text-primary">registration</span>
        </h2>

        <div className="flex flex-col gap-8 md:gap-12">
          {/* Step 1 */}
          <div id="step-1" className="grid grid-cols-1 md:grid-cols-5 gap-3 shadow-sm rounded-sm overflow-hidden">
            <div className="md:col-span-2 bg-[#252525] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 montserrat">
                <span className="text-primary">Step 1:</span> Submit your
                application
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 montserrat">
                Send us your company details or register on our portal: <br />
                <a
                  href="https://equip.me/welcome"
                  className="text-primary hover:underline font-medium"
                >
                  equip.me/welcome
                </a>
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 montserrat">
                Fill out our trade account application with your company
                details. We need:
              </p>
              <ul className="space-y-3">
                {[
                  "Company legal name",
                  "City",
                  "Contact person name",
                  "Email",
                  "Phone number",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <span className="text-gray-300 text-sm md:text-base montserrat">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-3 relative min-h-75 md:min-h-full">
              <Image
                src={phnImg}
                alt="Submit application on phone"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div id="step-2" className="grid grid-cols-1 md:grid-cols-5 gap-3  overflow-hidden">
            <div className="md:col-span-2 bg-card text-title p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl md:text-4xl font-bold mb-6 montserrat">
                <span className="text-primary">Step 2:</span> Approval
              </h3>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed montserrat">
                Our team reviews your application. We work with legitimate
                restaurant kitchen equipment suppliers and wholesale commercial
                kitchen equipment businesses. Approval usually takes 1-2
                business days.
              </p>
            </div>
            <div className="md:col-span-3 bg-white flex items-center justify-center p-6  border-t md:border-t-0 md:border-l border-gray-100">
              {/* Email Mockup */}
              <div className="w-full bg-card text-title ">
                <div className="text-lg text-gray-700 mb-6 montserrat">
                  E-mail confirmation
                </div>

                <div className="flex flex-col md:flex-row md:justify-between items-start gap-6 md:gap-0 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12.5 h-12.5 bg-[#a7a7a7] flex flex-col justify-end items-center overflow-hidden shrink-0">
                      {/* Custom user silhouette */}
                      <div className="w-4 h-4 bg-white rounded-full mb-1"></div>
                      <div className="w-8 h-4 bg-white rounded-t-[20px]"></div>
                    </div>
                    <div>
                      <div className="text-base text-gray-700 montserrat">
                        Inform
                      </div>
                      <div className="text-base text-gray-500 mt-0.5">
                        Thu 9/11/2025 12:48 PM
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end text-base w-full md:w-auto">
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[10px] md:text-[12px] text-gray-500 font-medium tracking-wide mb-3">
                      <div className="flex items-center gap-1 hover:text-gray-800 cursor-pointer ">
                        <span className="text-title font-bold text-red-500">
                          X
                        </span>{" "}
                        DELETE
                      </div>
                      <div className="flex items-center gap-1 hover:text-gray-800 cursor-pointer">
                        <Reply
                          size={12}
                          strokeWidth={2.5}
                          className="text-gray-500"
                        />{" "}
                        REPLY
                      </div>
                      <div className="flex items-center gap-1 hover:text-gray-800 cursor-pointer">
                        <ReplyAll
                          size={12}
                          strokeWidth={2.5}
                          className="text-gray-500"
                        />{" "}
                        REPLY ALL
                      </div>
                      <div className="flex items-center gap-1 hover:text-gray-800 cursor-pointer">
                        <Forward
                          size={12}
                          strokeWidth={2.5}
                          className="text-gray-500"
                        />{" "}
                        FORWARD
                      </div>
                      <div className="hover:text-gray-800 cursor-pointer text-gray-400">
                        •••
                      </div>
                    </div>
                    <div className="text-sm md:text-base font-bold text-gray-800 cursor-pointer">
                      Mark as unread
                    </div>
                  </div>
                </div>

                <div className="text-lg md:text-xl font-bold text-gray-900 mb-6">
                  To:
                </div>
                <div className="font-extrabold text-2xl md:text-3xl text-gray-900 mb-4 montserrat">
                  equip.me
                </div>
                <div className="font-bold text-lg md:text-xl text-gray-900 mb-8 montserrat">
                  E-mail confirmation
                </div>
                <div className="text-base text-gray-700 montserrat">
                  confirm your e-mail address. To do this, follow the link:{" "}
                  <a
                    href="#"
                    className="text-[#0000ee] underline hover:underline"
                  >
                    Confirm
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div id="step-3" className="grid grid-cols-1 md:grid-cols-5 shadow-sm gap-3 rounded-sm overflow-hidden">
            <div className="md:col-span-2 bg-[#252525] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 montserrat">
                <span className="text-primary">Step 3:</span> Partner portal
                access
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 montserrat">
                Once approved, you get dealer access to our partner portal with:
              </p>
              <ul className="space-y-4">
                {[
                  "B2B price list and wholesale price request options",
                  "Real-time stock visibility",
                  "Manuals and spare-parts info",
                  "Ready-to-use product content/assets for your website",
                  "Order history and tracking",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                    <span className="text-gray-300 text-sm md:text-base montserrat">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-3 relative h-12.5 md:min-h-full">
              <Image
                src={portalImg}
                alt="Partner portal access on laptop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
