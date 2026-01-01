import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin, Star, Users, Wifi, Car, Utensils, Shield } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { cn } from "@/lib/utils";

interface PGCardProps {
  id: string;
  name: string;
  location: string;
  city: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  type: "Boys" | "Girls" | "Co-living";
  amenities: string[];
  availability: string;
}

const PGCard = ({ 
  id,
  name, 
  location, 
  city, 
  price, 
  rating, 
  reviews, 
  image, 
  type, 
  amenities, 
  availability 
}: PGCardProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(id);

  const amenityIcons: { [key: string]: any } = {
    "WiFi": Wifi,
    "Parking": Car,
    "Meals": Utensils,
    "Security": Shield,
    "Common Area": Users,
  };

  return (
    <Card className="group overflow-hidden hover:shadow-card transition-all duration-300 animate-fade-in bg-gradient-card border-border/50">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button 
          variant="ghost" 
          size="icon"
          className={cn(
            "absolute top-3 right-3 bg-background/80 hover:bg-background",
            favorited ? "text-red-500" : "text-foreground"
          )}
          onClick={() => toggleFavorite(id)}
        >
          <Heart className={cn("h-4 w-4", favorited && "fill-current")} />
        </Button>
        <Badge 
          variant={type === "Girls" ? "secondary" : type === "Boys" ? "default" : "outline"}
          className="absolute top-3 left-3"
        >
          {type}
        </Badge>
        {availability && (
          <Badge variant="destructive" className="absolute bottom-3 left-3">
            {availability}
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">({reviews})</span>
          </div>
        </div>
        
        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          {location}, {city}
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {amenities.slice(0, 4).map((amenity) => {
            const IconComponent = amenityIcons[amenity];
            return (
              <Badge key={amenity} variant="outline" className="text-xs">
                {IconComponent && <IconComponent className="h-3 w-3 mr-1" />}
                {amenity}
              </Badge>
            );
          })}
          {amenities.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{amenities.length - 4} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">₹{price.toLocaleString()}</span>
            <span className="text-muted-foreground text-sm">/month</span>
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm">
              View Details
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-hover">
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PGCard;
