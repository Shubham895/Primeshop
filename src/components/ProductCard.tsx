import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/StarRating";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  rating: number;
  reviewCount: number;
  isPrime?: boolean;
};

interface ProductCardProps {
  product: Product;
  delay?: number;
}

// Function to format price in Indian Rupees
const formatIndianPrice = (price: number) => {
  return price.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR'
  });
};

export function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
  };

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Link to={`/product/${product.id}`}>
        <div
          className="product-card h-full flex flex-col bg-card rounded-lg overflow-hidden border hover:border-amazon-orange transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-48 overflow-hidden bg-muted">
            <motion.img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
              initial={false}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {isHovered && product.images.length > 1 && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute left-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                    onClick={handlePrevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                    onClick={handleNextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </>
            )}
            
            {product.originalPrice && (
              <motion.div
                className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                -{discount}%
              </motion.div>
            )}
          </div>
          
          <div className="p-4 flex flex-col flex-grow">
            <motion.h3 
              className="font-medium text-sm line-clamp-2 mb-2"
              animate={{ color: isHovered ? "hsl(var(--amazon-orange))" : "hsl(var(--foreground))" }}
              transition={{ duration: 0.2 }}
            >
              {product.name}
            </motion.h3>
            
            <div className="flex items-center space-x-2 mb-2">
              <StarRating rating={product.rating} size="sm" />
              <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
            </div>
            
            <div className="flex items-baseline mb-2">
              <motion.span 
                className="text-lg font-bold"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {formatIndianPrice(product.price)}
              </motion.span>
              {product.originalPrice && (
                <span className="ml-2 text-xs text-muted-foreground line-through">
                  {formatIndianPrice(product.originalPrice)}
                </span>
              )}
            </div>
            
            {product.isPrime && (
              <div className="mt-auto mb-2">
                <motion.span 
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amazon-orange/10 text-amazon-orange"
                  whileHover={{ scale: 1.05 }}
                >
                  Prime
                </motion.span>
              </div>
            )}
            
            <motion.div
              className="mt-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="w-full bg-amazon-orange hover:bg-amazon-orange/90 text-white"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
