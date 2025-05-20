import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, User, Heart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/products";
import { Footer } from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        {/* Top Bar */}
        <div className="bg-black border-b">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2 hover:scale-105 transition-transform">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-2xl font-bold text-amazon-orange ">prime<span className="text-white">shop</span></span> 
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/wishlist" className="text-gray-600 hover:text-orange-600 transition-colors relative group">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-orange-100 text-xs text-orange-600 rounded-full w-4 h-4 flex items-center justify-center group-hover:scale-110 transition-transform">0</span>
              </Link>
              <Link to="/notifications" className="text-gray-600 hover:text-orange-600 transition-colors relative group">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-orange-100 text-xs text-orange-600 rounded-full w-4 h-4 flex items-center justify-center group-hover:scale-110 transition-transform">2</span>
              </Link>
              <Link to="/login" className="text-gray-600 hover:text-orange-600 transition-colors">
                <User className="h-5 w-5" />
              </Link>
              <Link to="/cart" className="text-gray-600 hover:text-orange-600 transition-colors relative group">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-orange-100 text-xs text-orange-600 rounded-full w-4 h-4 flex items-center justify-center group-hover:scale-110 transition-transform">3</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="border-b bg-black">
          <div className="container mx-auto px-4 py-4">
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="hover:bg-orange  -100 transition-colors">
                <Menu className="h-5 w-5" />
              </Button>
              <div className="flex-1 flex gap-2">
                <div className="relative flex-1">
                  <Input 
                    type="search" 
                    placeholder="Search products..." 
                    className="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-gray-200 focus:border-orange-300 transition-colors"
                  />
                  <Search className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white transition-colors duration-200">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Navigation */}
        <nav className="bg-white">
          <div className="container mx-auto px-4">
            <ul className="flex space-x-8 overflow-x-auto py-4">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/category/${category.id}`}
                    className="text-gray-600 hover:text-blue-600 whitespace-nowrap flex flex-col items-center group"
                  >
                    <span className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors mb-1">
                      <img src={category.image} alt={category.name} className="w-6 h-6 object-contain" />
                    </span>
                    <span className="text-sm font-medium">{category.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        {children}
      </main>

      <Footer />
    </div>
  );
} 