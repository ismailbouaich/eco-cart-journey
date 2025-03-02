
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background elements - decorative gradient */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-80"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-80"></div>
      
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="flex flex-col space-y-8 max-w-xl animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Elevate Your Style With Minimal Design
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-md">
              Discover our curated collection of premium products designed with simplicity and elegance in mind.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-6">
            <div className="space-y-1">
              <p className="text-2xl font-bold">15k+</p>
              <p className="text-sm text-muted-foreground">Products</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">150+</p>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">100k+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md mx-auto animate-float">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Premium product showcase" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-md"></div>
            <div className="absolute -bottom-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-md"></div>
            
            {/* Product tag */}
            <div className="absolute top-8 -left-10 glass p-3 rounded-xl shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
              <p className="text-sm font-medium">New Collection</p>
              <p className="text-xs text-muted-foreground">Summer 2023</p>
            </div>
            
            {/* Rating tag */}
            <div className="absolute bottom-8 -right-10 glass p-3 rounded-xl shadow-lg animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-xs font-medium">4.9/5</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Based on 2.3k reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
