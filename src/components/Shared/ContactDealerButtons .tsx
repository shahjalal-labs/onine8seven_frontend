import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactDealerButtons() {
    return (
        <div className="flex items-center space-x-2 md:space-x-4 w-full md:w-auto">

            <Link href="https://equip.me/welcome" target="_blank">
                <Button className="flex-1 md:flex-none montserrat px-4 py-6 md:px-8 text-sm md:text-lg font-medium cursor-pointer text-center rounded-none">
                    Become a dealer
                </Button>
            </Link>

            <Link href={'/contacts'}>
                <Button variant="outline" className="flex-1 md:flex-none montserrat text-gray-900 py-6 px-4 md:px-8 text-sm md:text-lg font-medium cursor-pointer text-center rounded-none border-none shadow-none">
                    Contact us
                </Button>
            </Link>
        </div>
    )
}