import { StaticImageData } from "next/image";

export interface Availability {
    status: "available" | "expected" | "unavailable";
    text: string;
}

export interface Product {
    id: number
    title: string;
    description: string;
    image: StaticImageData;
    availability: Availability[];
}

export interface CatalogProduct {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    images: StaticImageData[];

    features: string[];
    includes: string[];
    category: string;
    tag: string;

    specs: {
        powerType: string;
        tankVolume: string;
        oilCapacity: string;
        power: string;
        width: string;
        length: string;
        height: string;
        numberOfTanks: string;
        pressureCooking?: string;
        coldZone?: string;
        grossWeight?: string;
        grossLength?: string;
        oilDrainTap?: string;
        cover?: string;
        timer?: string;
    };
}