import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroCarousel />
        
        {/* Categories */}
        <section className="container py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold">Shop by Category</h2>
            <p className="text-muted-foreground mt-2">Browse our wide selection of categories</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={`/category/${category.id}`}
                  className="group block relative overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                    <motion.img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-black/20"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white text-center px-4">{category.name}</h3>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* Featured Products */}
        <section className="container py-12 bg-muted/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <p className="text-muted-foreground mt-2">Handpicked products just for you</p>
            </div>
            <Link 
              to="/products" 
              className="group flex items-center text-amazon-orange hover:text-amazon-orange/90 transition-colors"
            >
              View all
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {products.slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} delay={index} />
            ))}
          </motion.div>
        </section>
        
        {/* Deals */}
        <section className="container py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h2 className="text-3xl font-bold">Today's Deals</h2>
              <p className="text-muted-foreground mt-2">Get the best deals before they're gone</p>
            </div>
            <Link 
              to="/deals" 
              className="group flex items-center text-amazon-orange hover:text-amazon-orange/90 transition-colors"
            >
              View all deals
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {products.slice(4, 8).map((product, index) => (
              <ProductCard key={product.id} product={product} delay={index} />
            ))}
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
