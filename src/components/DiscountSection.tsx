
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isOnSale?: boolean;
}

interface DiscountSectionProps {
  title: string;
  description?: string;
  products: Product[];
  bannerImage: string;
  discountPercentage: string;
  endDate: string;
}

const DiscountSection = ({
  title,
  description,
  products,
  bannerImage,
  discountPercentage,
  endDate
}: DiscountSectionProps) => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Sale Banner */}
        <div className="relative overflow-hidden rounded-2xl mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
          <img 
            src={bannerImage} 
            alt="Sale banner"
            className="w-full h-80 object-cover object-center"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12 lg:max-w-xl">
            <p className="text-white text-sm mb-3">Limited Time Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Up to {discountPercentage}% Off
            </h2>
            <p className="text-white/80 my-4">
              {description || "Don't miss out on our biggest sale of the season. Shop premium products at unbeatable prices."}
            </p>
            <p className="text-white/80 text-sm mb-4">Offer ends on: {endDate}</p>
            <div>
              <Button size="lg" className="group bg-white text-primary hover:bg-white/90">
                Shop Sale
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Sale Products */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="text-muted-foreground mt-4">Explore our collection of premium products at special prices</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in stagger-animation">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button size="lg" variant="outline" className="group">
            View All Sale Items
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
