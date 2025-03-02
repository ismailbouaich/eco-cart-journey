
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ProductSlider from "@/components/ProductSlider";
import CategorySection from "@/components/CategorySection";
import NewArrivals from "@/components/NewArrivals";
import DiscountSection from "@/components/DiscountSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Sample data for best sellers
  const bestSellers = [
    {
      id: "1",
      name: "Minimalist Desk Lamp",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
      category: "Lighting",
      isBestSeller: true
    },
    {
      id: "2",
      name: "Ergonomic Office Chair",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1505843490701-5be5d1ea31a7",
      category: "Furniture",
      isBestSeller: true
    },
    {
      id: "3",
      name: "Wool Throw Blanket",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1600369672770-985fd30004eb",
      category: "Home Textile",
      isBestSeller: true
    },
    {
      id: "4",
      name: "Ceramic Coffee Mug",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
      category: "Kitchenware",
      isBestSeller: true
    },
    {
      id: "5",
      name: "Leather Notebook",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363",
      category: "Stationery",
      isBestSeller: true
    },
    {
      id: "6",
      name: "Portable Bluetooth Speaker",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
      category: "Electronics",
      isBestSeller: true
    }
  ];

  // Sample data for categories
  const categories = [
    {
      id: "1",
      name: "Furniture",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      itemCount: 120,
      path: "/shop/furniture"
    },
    {
      id: "2",
      name: "Lighting",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15",
      itemCount: 85,
      path: "/shop/lighting"
    },
    {
      id: "3",
      name: "Decor",
      image: "https://images.unsplash.com/photo-1531914082256-1b9047242426",
      itemCount: 210,
      path: "/shop/decor"
    }
  ];

  // Sample data for new arrivals
  const newArrivals = [
    {
      id: "7",
      name: "Minimalist Wall Clock",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c",
      category: "Decor",
      isNew: true
    },
    {
      id: "8",
      name: "Glass Water Bottle",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      category: "Kitchenware",
      isNew: true
    },
    {
      id: "9",
      name: "Wooden Serving Tray",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1622428051717-dcd9469a0c86",
      category: "Kitchenware",
      isNew: true
    },
    {
      id: "10",
      name: "Cotton Throw Pillow",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1579656381253-c2bbebe8fddf",
      category: "Home Textile",
      isNew: true
    }
  ];

  // Sample data for discounted items
  const discountedItems = [
    {
      id: "11",
      name: "Ceramic Dinner Set",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1516437124483-acb548cd8881",
      category: "Kitchenware",
      isOnSale: true
    },
    {
      id: "12",
      name: "Linen Bed Sheets",
      price: 69.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
      category: "Home Textile",
      isOnSale: true
    },
    {
      id: "13",
      name: "Smart Indoor Plant Pot",
      price: 49.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
      category: "Decor",
      isOnSale: true
    },
    {
      id: "14",
      name: "Wireless Phone Charger",
      price: 29.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1616410011236-7a42121dd981",
      category: "Electronics",
      isOnSale: true
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <Hero />
        
        <ProductSlider 
          title="Best Sellers" 
          description="Our most popular products based on sales" 
          products={bestSellers}
          viewAllLink="/shop/best-sellers"
        />
        
        <CategorySection 
          title="Shop by Category" 
          description="Browse our collections by category" 
          categories={categories}
        />
        
        <NewArrivals 
          title="New Arrivals" 
          description="Check out our latest products" 
          products={newArrivals}
        />
        
        <DiscountSection 
          title="Special Offers" 
          description="Limited time deals on premium products" 
          products={discountedItems}
          bannerImage="https://images.unsplash.com/photo-1501254695418-a78886892ef4"
          discountPercentage="40"
          endDate="August 31, 2023"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
