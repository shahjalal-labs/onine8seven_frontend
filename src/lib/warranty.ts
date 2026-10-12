import warrantyIcon from "@/assets/card/Warranty.svg";
import award from "@/assets/card/award.svg";
import checklist from "@/assets/card/checklist.svg";
import track from "@/assets/card/delivery-truck.svg";
import headphone from "@/assets/card/headphone.svg";
import support from "@/assets/card/monitor.svg";
import process from "@/assets/card/process.svg";
import spare from "@/assets/card/spear.svg";

export const coveredItems = [
  {
    icon: warrantyIcon,
    title: "12-month warranty",
  },
  {
    icon: spare,
    title: "Spare parts availability",
  },
  {
    icon: checklist,
    title: "Simple and clear warranty claim process",
  },
];

export const trustItems = [
  {
    icon: headphone,
    title: "Service support",
    description:
      "real people handling spare parts, returns, and product questions.",
  },
  {
    icon: process,
    title: "Clear process",
    description:
      "no guessing, no runaround. Invoice + article number = fast resolution.",
  },
  {
    icon: track,
    title: "Spare parts delivery Europe",
    description:
      "reliable supply chain with regular deliveries to reduce downtime.",
  },
  {
    icon: award,
    title: "Professional service policy",
    description:
      "we treat every case seriously because your reputation depends on it.",
  },
  {
    icon: support,
    title: "Customer support HoReCa",
    description: "We speak your language and understand the industry.",
  },
];

export const supportItems = [
  "Spare parts ordering",
  "Technical documentation",
  "Troubleshooting assistance",
  "Commercial equipment service guidance",
];
