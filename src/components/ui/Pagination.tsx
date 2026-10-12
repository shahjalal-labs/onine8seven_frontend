import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Pagination() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2 mt-16 text-base md:text-xl montserrat">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-primary px-1 sm:px-2">
                <FiChevronLeft /> <span className="hidden sm:inline">Previous</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-200">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-normal">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-200 hidden sm:flex">3</button>
            <span className="px-1 text-gray-400">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-200 hidden md:flex">8</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-200 hidden sm:flex">9</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-200">10</button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-primary px-1 sm:px-2">
                <span className="hidden sm:inline">Next</span> <FiChevronRight />
            </button>
        </div>
    );
}
