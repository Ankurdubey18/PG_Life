import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export interface Filters {
  search: string;
  city: string;
  type: string;
  priceRange: [number, number];
  amenities: string[];
}

interface SearchFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

const cities = ["All Cities", "Bangalore", "Mumbai", "Delhi", "Pune", "Chennai", "Hyderabad"];
const types = ["All Types", "Boys", "Girls", "Co-living"];
const allAmenities = ["WiFi", "Meals", "Security", "Parking", "Common Area"];

const SearchFilters = ({ filters, onFiltersChange }: SearchFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleAmenity = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter((a) => a !== amenity)
      : [...filters.amenities, amenity];
    updateFilter("amenities", newAmenities);
  };

  const clearFilters = () => {
    onFiltersChange({
      search: "",
      city: "All Cities",
      type: "All Types",
      priceRange: [5000, 25000],
      amenities: [],
    });
  };

  const hasActiveFilters =
    filters.search ||
    filters.city !== "All Cities" ||
    filters.type !== "All Types" ||
    filters.priceRange[0] !== 5000 ||
    filters.priceRange[1] !== 25000 ||
    filters.amenities.length > 0;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* City Filter */}
      <div className="space-y-2">
        <Label>City</Label>
        <Select value={filters.city} onValueChange={(v) => updateFilter("city", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Select city" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Type Filter */}
      <div className="space-y-2">
        <Label>PG Type</Label>
        <Select value={filters.type} onValueChange={(v) => updateFilter("type", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {types.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <Label>
          Price Range: ₹{filters.priceRange[0].toLocaleString()} - ₹
          {filters.priceRange[1].toLocaleString()}
        </Label>
        <Slider
          value={filters.priceRange}
          onValueChange={(v) => updateFilter("priceRange", v as [number, number])}
          min={5000}
          max={25000}
          step={500}
          className="w-full"
        />
      </div>

      {/* Amenities */}
      <div className="space-y-2">
        <Label>Amenities</Label>
        <div className="flex flex-wrap gap-2">
          {allAmenities.map((amenity) => (
            <Badge
              key={amenity}
              variant={filters.amenities.includes(amenity) ? "default" : "outline"}
              className={cn(
                "cursor-pointer transition-colors",
                filters.amenities.includes(amenity) && "bg-primary"
              )}
              onClick={() => toggleAmenity(amenity)}
            >
              {amenity}
            </Badge>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <Button variant="ghost" onClick={clearFilters} className="w-full">
          <X className="mr-2 h-4 w-4" />
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <section className="py-8 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          {/* Search Input */}
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by PG name or location..."
              value={filters.search}
              onChange={(e) => updateFilter("search", e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:flex items-center gap-3">
            <Select value={filters.city} onValueChange={(v) => updateFilter("city", v)}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.type} onValueChange={(v) => updateFilter("type", v)}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="relative">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  More Filters
                  {hasActiveFilters && (
                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your PG search with these filters
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>

            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="mr-1 h-4 w-4" />
                Clear
              </Button>
            )}
          </div>

          {/* Mobile Filters Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full relative">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                  {hasActiveFilters && (
                    <span className="absolute top-2 right-2 h-2 w-2 bg-primary rounded-full" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[80vh]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your PG search with these filters
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 overflow-y-auto">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mt-4">
            {filters.city !== "All Cities" && (
              <Badge variant="secondary" className="gap-1">
                {filters.city}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => updateFilter("city", "All Cities")}
                />
              </Badge>
            )}
            {filters.type !== "All Types" && (
              <Badge variant="secondary" className="gap-1">
                {filters.type}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => updateFilter("type", "All Types")}
                />
              </Badge>
            )}
            {(filters.priceRange[0] !== 5000 || filters.priceRange[1] !== 25000) && (
              <Badge variant="secondary" className="gap-1">
                ₹{filters.priceRange[0].toLocaleString()} - ₹{filters.priceRange[1].toLocaleString()}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => updateFilter("priceRange", [5000, 25000])}
                />
              </Badge>
            )}
            {filters.amenities.map((amenity) => (
              <Badge key={amenity} variant="secondary" className="gap-1">
                {amenity}
                <X className="h-3 w-3 cursor-pointer" onClick={() => toggleAmenity(amenity)} />
              </Badge>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchFilters;
