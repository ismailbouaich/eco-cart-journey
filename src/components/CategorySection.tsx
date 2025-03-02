
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: number;
  path: string;
}

interface CategorySectionProps {
  title: string;
  description?: string;
  categories: Category[];
}

const CategorySection = ({ title, description, categories }: CategorySectionProps) => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          {description && (
            <p className="text-muted-foreground mt-4">{description}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10"></div>
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transition-transform duration-300 group-hover:translate-y-[-8px]">
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                <p className="text-white/80 text-sm mt-1">{category.itemCount} items</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
