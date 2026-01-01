import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchFilters, { Filters } from "@/components/SearchFilters";
import FeaturedPGs from "@/components/FeaturedPGs";
import CityGrid from "@/components/CityGrid";
import Footer from "@/components/Footer";

const Index = () => {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    city: "All Cities",
    type: "All Types",
    priceRange: [5000, 25000],
    amenities: [],
  });

  const hasActiveFilters =
    filters.search ||
    filters.city !== "All Cities" ||
    filters.type !== "All Types" ||
    filters.priceRange[0] !== 5000 ||
    filters.priceRange[1] !== 25000 ||
    filters.amenities.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SearchFilters filters={filters} onFiltersChange={setFilters} />
      <FeaturedPGs filters={hasActiveFilters ? filters : undefined} />
      <CityGrid />
      <Footer />
    </div>
  );
};

export default Index;
