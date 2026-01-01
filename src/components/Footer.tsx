import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-hero rounded-lg p-2">
                <div className="text-primary-foreground font-bold text-xl">PG</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">PG Life</h3>
                <p className="text-xs text-background/70">Student Housing India</p>
              </div>
            </div>
            <p className="text-background/70 mb-4">
              Your trusted partner in finding safe, comfortable, and affordable 
              PG accommodations across India.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Find PG</a></li>
              <li><a href="#" className="hover:text-background transition-colors">List Your PG</a></li>
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Cities</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">PG in Delhi</a></li>
              <li><a href="#" className="hover:text-background transition-colors">PG in Mumbai</a></li>
              <li><a href="#" className="hover:text-background transition-colors">PG in Bangalore</a></li>
              <li><a href="#" className="hover:text-background transition-colors">PG in Pune</a></li>
              <li><a href="#" className="hover:text-background transition-colors">PG in Chennai</a></li>
              <li><a href="#" className="hover:text-background transition-colors">PG in Hyderabad</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-background/70">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@pglife.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Newsletter</h5>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2026 PG Life. All rights reserved. Made with ❤️ for Indian students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;