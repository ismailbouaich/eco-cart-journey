
import { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
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

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew = false,
  isBestSeller = false,
  isOnSale = false
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card 
      className="product-card overflow-hidden group relative border-0 rounded-lg shadow-sm hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {isNew && (
          <Badge variant="secondary" className="bg-primary text-primary-foreground">
            New
          </Badge>
        )}
        {isBestSeller && (
          <Badge variant="secondary" className="bg-amber-500 text-white">
            Best Seller
          </Badge>
        )}
        {isOnSale && (
          <Badge variant="secondary" className="bg-rose-500 text-white">
            {discountPercentage}% Off
          </Badge>
        )}
      </div>
      
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        
        <div 
          className={`absolute inset-0 bg-black/10 flex items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button 
            className="w-10 h-10 rounded-full bg-white text-primary shadow-md flex items-center justify-center transform transition-transform duration-300 hover:scale-110"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-white text-primary shadow-md flex items-center justify-center transform transition-transform duration-300 hover:scale-110"
            aria-label="Add to wishlist"
          >
            <Heart size={18} />
          </button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-1">{category}</p>
        <h3 className="font-medium leading-tight tracking-tight mb-1">{name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="font-semibold">${price.toFixed(2)}</span>
          {isOnSale && originalPrice && (
            <span className="text-sm line-through text-muted-foreground">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
