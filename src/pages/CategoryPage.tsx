import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { Filter, SlidersHorizontal, ArrowRight } from "lucide-react";

// Function to format price in Indian Rupees
const formatIndianPrice = (price: number) => {
  return price.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR'
  });
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>();
  const category = categories.find(cat => cat.id === id);

  if (!category) {
    return (
      <Layout>
        <motion.div 
          className="container mx-auto py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-center">Category not found</h1>
        </motion.div>
      </Layout>
    );
  }

  // For demo purposes, let's filter products randomly since we don't have category assignments
  const categoryProducts = products.slice(0, 8);

  return (
    <Layout>
      <div className="container mx-auto">
        {/* Category Header */}
        <section className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold">{category.name}</h2>
            <p className="text-muted-foreground mt-2">Explore our collection of {category.name.toLowerCase()}</p>
          </motion.div>

          {/* Filters and Sort */}
          <motion.div 
            className="flex flex-wrap items-center justify-between gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Sort
              </Button>
            </div>
            <p className="text-muted-foreground">
              Showing {categoryProducts.length} products
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {categoryProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product}
                delay={index}
              />
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="min-w-[200px] flex items-center gap-2 group"
            >
              View More Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
} 