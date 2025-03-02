
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

interface ProductSliderProps {
  title: string;
  description?: string;
  products: Product[];
  viewAllLink?: string;
}

const ProductSlider = ({ title, description, products, viewAllLink }: ProductSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [maxVisibleSlides, setMaxVisibleSlides] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth;
      
      // Determine number of visible slides based on container width
      let slidesToShow = 4;
      if (containerWidth < 640) slidesToShow = 1;
      else if (containerWidth < 768) slidesToShow = 2;
      else if (containerWidth < 1024) slidesToShow = 3;
      
      setMaxVisibleSlides(slidesToShow);
      setSlideWidth(containerWidth / slidesToShow);
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= products.length - maxVisibleSlides + 1 ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? products.length - maxVisibleSlides : nextIndex;
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div className="max-w-md mb-6 md:mb-0">
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            {description && (
              <p className="text-muted-foreground mt-2">{description}</p>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              aria-label="Previous slides"
              className="rounded-full"
            >
              <ArrowLeft size={18} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              aria-label="Next slides"
              className="rounded-full"
            >
              <ArrowRight size={18} />
            </Button>
            
            {viewAllLink && (
              <Button variant="outline" className="ml-3">
                View All
              </Button>
            )}
          </div>
        </div>
        
        <div className="relative overflow-hidden" ref={containerRef}>
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * slideWidth}px)`,
            }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 px-2"
                style={{ width: `${slideWidth}px` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
