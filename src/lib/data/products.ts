import { CatalogProduct, Product } from "@/types/products.type";

import iceCrusher from "@/assets/products/ice-crusher.png";
import blenderGrey from "@/assets/products/blender-gray.png";
import blenderRed from "@/assets/products/blender-red.png";
import milkMixerFR1GM from "@/assets/products/milk-mixer-fr1.png";
import milkMixerFR2GM from "@/assets/products/milk-mixer-fr2.png";
import centrifugalJuicer from "@/assets/products/juicer.png";

import busket from '@/assets/products/busket-handle.png'
import busket2 from '@/assets/products/buskethandler.png'



export const products: Product[] = [
    {
        id: 1,
        title: "ICE CRUSHER HURAKAN HKN-TRGM",
        description: "Automatic knives block, Safe work: the ice crusher starts operating only when the ice container is tightly fixed. Production capacity: up to 12 kg of ice per hour.",
        image: iceCrusher,
        availability: [
            { status: "available", text: "Available 24 pcs" },
            { status: "unavailable", text: "Not expected" },
            { status: "unavailable", text: "Check EDD with the manager" }
        ]
    },
    {
        id: 2,
        title: "BLENDER HURAKAN HKN-BLW2 GREY",
        description: "Housing and glass material: plastic. Volume 2 l. Stepless speed control. Pulse mode. Rotation speed: from 23,000 to 26,000 rpm.",
        image: blenderGrey,
        availability: [
            { status: "available", text: "Available 36 pcs" },
            { status: "expected", text: "Next supply 38 pcs. With EDD 18.06.2024" },
            { status: "unavailable", text: "Check EDD with the manager" }
        ]
    },
    {
        id: 3,
        title: "BLENDER HURAKAN HKN-BLW2 RED",
        description: "Housing and glass material: plastic. Volume 2 l. Stepless speed control. Pulse mode. Rotation speed: from 23,000 to 26,000 rpm.",
        image: blenderRed,
        availability: [
            { status: "available", text: "Available 74 pcs" },
            { status: "expected", text: "Next supply 3 pcs. With EDD 28.05.2024" },
            { status: "unavailable", text: "Check EDD with the manager" }
        ]
    },
    {
        id: 4,
        title: "MILK MIXER HURAKAN HKN-FR1GM",
        description: "Housing material: aluminum. Cup material: stainless steel. Two engine speeds. Cup volume: 1 l. Rotation speed: up to 11000 rpm. Includes 1 cup and one mixing attachment.",
        image: milkMixerFR1GM,
        availability: [
            { status: "available", text: "Available 6 pcs" },
            { status: "expected", text: "Next supply 20 pcs. With EDD 18.06.2024" },
            { status: "unavailable", text: "Check EDD with the manager" }
        ]
    },
    {
        id: 5,
        title: "MILK MIXER HURAKAN HKN-FR2GM",
        description: "Housing material: aluminum. Cup material: stainless steel. Two engine speeds. Cup volume: 1 l. Rotation speed: up to 11000 rpm. Includes 2 cups and 2 mixing attachments.",
        image: milkMixerFR2GM,
        availability: [
            { status: "available", text: "Available 36 pcs" },
            { status: "expected", text: "Next supply 10 pcs. With EDD 18.06.2024" },
            { status: "unavailable", text: "Check EDD with the manager" }
        ]
    },
    {
        id: 6,
        title: "CENTRIFUGAL JUICER HURAKAN HKN-CFV60",
        description: "Stainless steel housing. Cover material: plastic. Two speeds. Rotation speed: 17000-20000 rpm. Overheat and overload protection. Set: container for juice (1.5 l), containe...",
        image: centrifugalJuicer,
        availability: [
            { status: "unavailable", text: "Available 0 pcs" },
            { status: "expected", text: "Next supply 7 pcs. With EDD 31.07.2024" },
            { status: "unavailable", text: "Check EDD with the manager" }
        ]
    }
];


export const catalogProduct: CatalogProduct[] = [
    {
        id: 1,
        title: "388404 BASKET HANDLE FOR HURAKAN HKN-FT10N",
        description:
            "Stainless steel body. One 10 liter tank (5.7-8.7 l loading). Drain tap. Temperature range from 60 to 200C.",
        image: busket,
        images: [busket, busket2, busket, busket2, busket],

        features: [
            "Stainless steel body",
            "10 liter tank capacity",
            "Drain tap included",
            "Temperature range 60–200°C",
        ],

        includes: [
            "Basket included",
            "Cover included",
            "User manual",
        ],

        category: "Fryer Equipment",
        tag: "Kitchen Equipment",

        specs: {
            powerType: "Electricity",
            numberOfTanks: "1 pcs",
            power: "3 kW",
            length: "280 mm",
            tankVolume: "10 L",
            oilCapacity: "8.7 L",
            width: "460 mm",
            height: "325 mm",
            pressureCooking: "No",
            coldZone: "Yes",
            grossWeight: "9.13 kg",
            grossLength: "350 mm",
            oilDrainTap: "Yes",
            cover: "Yes",
            timer: "No",
        },
    },

    {
        id: 2,
        title: "388404 BASKET HANDLE FOR HURAKAN HKN-FT10N",
        description:
            "Stainless steel body. One 10 liter tank (5.7-8.7 l loading). Drain tap.",
        image: busket2,
        images: [busket2, busket, busket2, busket],

        features: [
            "Stainless steel body",
            "Reliable heating system",
            "Easy maintenance",
        ],

        includes: ["Basket", "Cover"],

        category: "Fryer Equipment",
        tag: "Commercial Kitchen",

        specs: {
            powerType: "Electricity",
            numberOfTanks: "1 pcs",
            power: "3 kW",
            length: "280 mm",
            tankVolume: "10 L",
            oilCapacity: "8.7 L",
            width: "460 mm",
            height: "325 mm",
            pressureCooking: "No",
            coldZone: "Yes",
            grossWeight: "9.13 kg",
            grossLength: "350 mm",
            oilDrainTap: "Yes",
            cover: "Yes",
            timer: "No",
        },
    },
    {
        id: 3,
        title: "388404 BASKET HANDLE FOR HURAKAN HKN-FT10N",
        description:
            "Stainless steel body. One 10 liter tank (5.7-8.7 l loading). Drain tap.",
        image: busket2,
        images: [busket2, busket, busket2, busket],

        features: [
            "Stainless steel body",
            "Reliable heating system",
            "Easy maintenance",
        ],

        includes: ["Basket", "Cover"],

        category: "Fryer Equipment",
        tag: "Commercial Kitchen",

        specs: {
            powerType: "Electricity",
            numberOfTanks: "1 pcs",
            power: "3 kW",
            length: "280 mm",
            tankVolume: "10 L",
            oilCapacity: "8.7 L",
            width: "460 mm",
            height: "325 mm",
            pressureCooking: "No",
            coldZone: "Yes",
            grossWeight: "9.13 kg",
            grossLength: "350 mm",
            oilDrainTap: "Yes",
            cover: "Yes",
            timer: "No",
        },
    },
    {
        id: 4,
        title: "388404 BASKET HANDLE FOR HURAKAN HKN-FT10N",
        description:
            "Stainless steel body. One 10 liter tank (5.7-8.7 l loading). Drain tap.",
        image: busket2,
        images: [busket2, busket, busket2, busket],

        features: [
            "Stainless steel body",
            "Reliable heating system",
            "Easy maintenance",
        ],

        includes: ["Basket", "Cover"],

        category: "Fryer Equipment",
        tag: "Commercial Kitchen",

        specs: {
            powerType: "Electricity",
            numberOfTanks: "1 pcs",
            power: "3 kW",
            length: "280 mm",
            tankVolume: "10 L",
            oilCapacity: "8.7 L",
            width: "460 mm",
            height: "325 mm",
            pressureCooking: "No",
            coldZone: "Yes",
            grossWeight: "9.13 kg",
            grossLength: "350 mm",
            oilDrainTap: "Yes",
            cover: "Yes",
            timer: "No",
        },
    },
    {
        id: 5,
        title: "388404 BASKET HANDLE FOR HURAKAN HKN-FT10N",
        description:
            "Stainless steel body. One 10 liter tank (5.7-8.7 l loading). Drain tap.",
        image: busket2,
        images: [busket2, busket, busket2, busket],

        features: [
            "Stainless steel body",
            "Reliable heating system",
            "Easy maintenance",
        ],

        includes: ["Basket", "Cover"],

        category: "Fryer Equipment",
        tag: "Commercial Kitchen",

        specs: {
            powerType: "Electricity",
            numberOfTanks: "1 pcs",
            power: "3 kW",
            length: "280 mm",
            tankVolume: "10 L",
            oilCapacity: "8.7 L",
            width: "460 mm",
            height: "325 mm",
            pressureCooking: "No",
            coldZone: "Yes",
            grossWeight: "9.13 kg",
            grossLength: "350 mm",
            oilDrainTap: "Yes",
            cover: "Yes",
            timer: "No",
        },
    },
    {
        id: 6,
        title: "388404 BASKET HANDLE FOR HURAKAN HKN-FT10N",
        description:
            "Stainless steel body. One 10 liter tank (5.7-8.7 l loading). Drain tap.",
        image: busket,
        images: [busket2, busket, busket2, busket],

        features: [
            "Stainless steel body",
            "Reliable heating system",
            "Easy maintenance",
        ],

        includes: ["Basket", "Cover"],

        category: "Fryer Equipment",
        tag: "Commercial Kitchen",

        specs: {
            powerType: "Electricity",
            numberOfTanks: "1 pcs",
            power: "3 kW",
            length: "280 mm",
            tankVolume: "10 L",
            oilCapacity: "8.7 L",
            width: "460 mm",
            height: "325 mm",
            pressureCooking: "No",
            coldZone: "Yes",
            grossWeight: "9.13 kg",
            grossLength: "350 mm",
            oilDrainTap: "Yes",
            cover: "Yes",
            timer: "No",
        },
    },
];