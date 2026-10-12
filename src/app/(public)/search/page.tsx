import SearchResults from "@/components/Search/SearchResults";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/search",
  },
    title: "Search Results │ Hurakan",
    description: "Search for professional HoReCa equipment.",
}

export default function SearchPage() {
    return (
        <SearchResults />
    );
}
