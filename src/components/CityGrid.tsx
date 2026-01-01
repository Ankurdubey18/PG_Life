import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin } from "lucide-react";

const CityGrid = () => {
  const cities = [
    { name: "Delhi", properties: "120+ PGs", popular: true },
    { name: "Mumbai", properties: "95+ PGs", popular: true },
    { name: "Bangalore", properties: "85+ PGs", popular: true },
    { name: "Pune", properties: "70+ PGs", popular: true },
    { name: "Chennai", properties: "60+ PGs", popular: false },
    { name: "Hyderabad", properties: "55+ PGs", popular: false },
    { name: "Kolkata", properties: "45+ PGs", popular: false },
    { name: "Ahmedabad", properties: "35+ PGs", popular: false },
    { name: "Jaipur", properties: "30+ PGs", popular: false },
    { name: "Indore", properties: "25+ PGs", popular: false },
    { name: "Kota", properties: "40+ PGs", popular: false },
    { name: "Chandigarh", properties: "20+ PGs", popular: false },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore PGs Across India
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find student accommodations in major cities across India. 
            From metro cities to educational hubs, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {cities.map((city, index) => (
            <Card 
              key={city.name}
              className={`group cursor-pointer hover:shadow-card transition-all duration-300 animate-fade-in border-border/50 ${
                city.popular ? 'ring-2 ring-primary/20 bg-gradient-card' : 'bg-card'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4 text-center">
                <div className="mb-3">
                  <MapPin className={`h-8 w-8 mx-auto ${city.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {city.properties}
                </p>
                {city.popular && (
                  <div className="mt-2">
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="group">
            View All Cities
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CityGrid;