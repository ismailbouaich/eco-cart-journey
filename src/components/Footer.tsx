
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter */}
      <div className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to our newsletter to receive updates on new arrivals, special offers and other discount information.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-primary-foreground/30" 
              />
              <Button variant="secondary" size="icon">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="border-t border-primary-foreground/10 py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">MINIMAL</h4>
              <p className="text-primary-foreground/70 text-sm">
                Premium minimalist products designed with simplicity and elegance in mind.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10">
                  <Instagram size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10">
                  <Twitter size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10">
                  <Facebook size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10">
                  <Youtube size={18} />
                </Button>
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h5 className="text-base font-semibold mb-4">Shop</h5>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/shop/all" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/shop/best-sellers" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link to="/shop/new-arrivals" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link to="/shop/sale" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-base font-semibold mb-4">Company</h5>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/sustainability" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Our Blog
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-base font-semibold mb-4">Customer Service</h5>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 py-6 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} MINIMAL. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
