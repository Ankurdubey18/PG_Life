import PGCard from "./PGCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import pgRoom1 from "@/assets/pg-room-1.jpg";
import pgExterior1 from "@/assets/pg-exterior-1.jpg";
import pgCommonArea from "@/assets/pg-common-area.jpg";
import pgRoom2 from "@/assets/pg-room-2.jpg";
import pgKitchen from "@/assets/pg-kitchen.jpg";
import pgLuxury from "@/assets/pg-luxury.jpg";
import type { Filters } from "./SearchFilters";

interface FeaturedPGsProps {
  filters?: Filters;
}

export const allPGs = [
  {
    id: "1",
    name: "Comfort Stay PG",
    location: "Koramangala",
    city: "Bangalore",
    price: 12000,
    rating: 4.5,
    reviews: 128,
    image: pgRoom1,
    type: "Boys" as const,
    amenities: ["WiFi", "Meals", "Security", "Common Area"],
    availability: "2 beds left",
  },
  {
    id: "2",
    name: "Green Villa PG",
    location: "Bandra West",
    city: "Mumbai",
    price: 15000,
    rating: 4.7,
    reviews: 95,
    image: pgExterior1,
    type: "Girls" as const,
    amenities: ["WiFi", "Parking", "Security", "Meals"],
    availability: "",
  },
  {
    id: "3",
    name: "Student Hub Co-living",
    location: "Lajpat Nagar",
    city: "Delhi",
    price: 10000,
    rating: 4.3,
    reviews: 210,
    image: pgCommonArea,
    type: "Co-living" as const,
    amenities: ["WiFi", "Common Area", "Security", "Parking"],
    availability: "5 beds left",
  },
  {
    id: "4",
    name: "Royal Heights PG",
    location: "Kothrud",
    city: "Pune",
    price: 9500,
    rating: 4.6,
    reviews: 87,
    image: pgRoom2,
    type: "Girls" as const,
    amenities: ["WiFi", "Meals", "Security", "Common Area"],
    availability: "",
  },
  {
    id: "5",
    name: "Elite Student Homes",
    location: "T. Nagar",
    city: "Chennai",
    price: 11000,
    rating: 4.4,
    reviews: 156,
    image: pgKitchen,
    type: "Boys" as const,
    amenities: ["WiFi", "Meals", "Parking", "Security"],
    availability: "3 beds left",
  },
  {
    id: "6",
    name: "Premium Living PG",
    location: "Madhapur",
    city: "Hyderabad",
    price: 13500,
    rating: 4.8,
    reviews: 72,
    image: pgLuxury,
    type: "Co-living" as const,
    amenities: ["WiFi", "Parking", "Security", "Common Area", "Meals"],
    availability: "",
  },
];

const FeaturedPGs = ({ filters }: FeaturedPGsProps) => {
  const filteredPGs = filters
    ? allPGs.filter((pg) => {
        // Search filter
        if (filters.search) {
          const searchLower = filters.search.toLowerCase();
          const matchesSearch =
            pg.name.toLowerCase().includes(searchLower) ||
            pg.location.toLowerCase().includes(searchLower) ||
            pg.city.toLowerCase().includes(searchLower);
          if (!matchesSearch) return false;
        }

        // City filter
        if (filters.city !== "All Cities" && pg.city !== filters.city) {
          return false;
        }

        // Type filter
        if (filters.type !== "All Types" && pg.type !== filters.type) {
          return false;
        }

        // Price range filter
        if (pg.price < filters.priceRange[0] || pg.price > filters.priceRange[1]) {
          return false;
        }

        // Amenities filter
        if (filters.amenities.length > 0) {
          const hasAllAmenities = filters.amenities.every((amenity) =>
            pg.amenities.includes(amenity)
          );
          if (!hasAllAmenities) return false;
        }

        return true;
      })
    : allPGs;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {filters ? "Search Results" : "Featured PG Accommodations"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {filters
              ? `Found ${filteredPGs.length} PG${filteredPGs.length !== 1 ? "s" : ""} matching your criteria`
              : "Handpicked premium PGs with the best amenities, safety features, and student-friendly environments across India."}
          </p>
        </div>

        {filteredPGs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredPGs.map((pg, index) => (
              <div key={pg.id} style={{ animationDelay: `${index * 150}ms` }}>
                <PGCard {...pg} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">
              No PGs found matching your filters.
            </p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search criteria or clearing some filters.
            </p>
          </div>
        )}

        {!filters && filteredPGs.length > 0 && (
          <div className="text-center">
            <Button className="group bg-primary hover:bg-primary-hover">
              View All PGs
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPGs;
