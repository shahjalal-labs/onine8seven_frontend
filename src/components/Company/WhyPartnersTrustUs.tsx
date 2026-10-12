'use client'
import Image from 'next/image';
import { PiCertificate } from 'react-icons/pi';

import { Handshake } from 'lucide-react';
import warrenty from "@/assets/card/Warranty.svg"
import jobInterview from "@/assets/card/job-interview.svg"
import EU from "@/assets/card/shipping (1) 1.svg"
import wareHouse from "@/assets/card/warehouse.svg"
import europeanUnion from "@/assets/card/european-union.svg"

const features = [
    {
        icon: <PiCertificate className="text-[#13181E]" size={24} />,
        title: "30+ years in business",
        description: "Operating since 1990. We've seen the industry change and adapted with it. Our company history is built on long-term partnerships."
    },
    {
        icon: <Image src={europeanUnion} alt="europeanUnion" width={24} height={24} />,
        title: "European presence",
        description: "Headquarters in Estonia, with teams in Switzerland, Romania, and Serbia. Local support across Europe, real people you can reach."
    },
    {
        icon: <Handshake className="text-[#13181E]" size={24} />,
        title: "Dealers only",
        description: "We work exclusively with dealers and partners. This is our customer service philosophy: focus on fewer customers, serve them better."
    },
    {
        icon: <Image src={wareHouse} alt="warehouse" width={24} height={24} />,
        title: "Warehouses",
        description: "Dependable warehouse capacity for stable availability. We keep stock so you can deliver on time."
    },
    {
        icon: <Image src={EU} alt="EU" width={24} height={24} />,
        title: "EU-wide logistics",
        description: "Coordinated shipping across Europe from multiple warehouse locations. Your orders reach you quickly."
    },
    {
        icon: <Image src={jobInterview} width={24} height={24} alt="Industry events icon" />,
        title: "Industry events",
        description: "Exhibition presence at major trade shows. We showcase products and innovation, and meet partners face-to-face."
    },
    {
        icon: <Image src={warrenty} alt="Warrenty" width={24} height={24} />,
        title: "Quality standards",
        description: "Strict quality assurance processes and HoReCa equipment standards. Every product meets European requirements."
    }
];

export default function WhyPartnersTrustUs() {
    return (
        <div className="w-full py-16 md:py-24  px-4 md:px-0 flex justify-center">
            <div className="w-full flex flex-col">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-16 inter text-center lg:text-left">
                    <span className="text-title">Why partners</span>{' '}
                    <span className="text-primary">trust us</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-16">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-row gap-4 md:gap-6 border-b border-gray-200 pb-8 last:border-0 last:pb-0 md:border-0 md:pb-0">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                                <div className="scale-75 md:scale-100 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                            </div>
                            <div className="flex flex-col pt-1 md:pt-2">
                                <h3 className="text-base md:text-2xl font-bold text-title mb-2 md:mb-3 montserrat">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 text-[13px] md:text-base leading-relaxed montserrat">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}