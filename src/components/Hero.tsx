import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search } from "lucide-react";

const Hero = () => {
  const cities = [
    "Delhi", "Mumbai", "Bangalore", "Pune", "Chennai", 
    "Hyderabad", "Kolkata", "Ahmedabad", "Jaipur", "Indore"
  ];

  return (
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Find Your Perfect
            <span className="block">Student PG in India</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover comfortable, affordable, and safe PG accommodations across major Indian cities. 
            Your home away from home awaits!
          </p>

          {/* Search Form */}
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-card max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-5">
                <label className="block text-sm font-medium text-foreground mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Select City
                </label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Choose your city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city.toLowerCase()}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-4">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Area/Locality
                </label>
                <Input 
                  placeholder="e.g. Koramangala, Andheri" 
                  className="h-12"
                />
              </div>
              
              <div className="md:col-span-3">
                <Button className="w-full h-12 bg-primary hover:bg-primary-hover">
                  <Search className="mr-2 h-5 w-5" />
                  Search PGs
                </Button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <Button variant="secondary" size="sm">Boys PG</Button>
              <Button variant="secondary" size="sm">Girls PG</Button>
              <Button variant="secondary" size="sm">Co-living</Button>
              <Button variant="secondary" size="sm">Under ₹10k</Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="text-primary-foreground">
              <div className="text-2xl md:text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90">Listed PGs</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-2xl md:text-3xl font-bold">25+</div>
              <div className="text-sm opacity-90">Cities</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-2xl md:text-3xl font-bold">10k+</div>
              <div className="text-sm opacity-90">Happy Students</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-2xl md:text-3xl font-bold">4.8★</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;