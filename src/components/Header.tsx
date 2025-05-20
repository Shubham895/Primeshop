import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Cart } from "@/components/Cart";

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <Link to="/" className="mr-4 flex items-center space-x-2">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="text-2xl font-bold text-amazon-orange">prime<span className="text-foreground">shop</span></span>
        </Link>
        
        {/* Search */}
        <div className="flex-1 flex mx-4">
          <div className="relative w-full max-w-2xl">
            <Input 
              type="search"
              placeholder="Search products..."
              className="w-full pr-10"
            />
            <Button className="absolute right-0 top-0 h-full" variant="ghost">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Link to="/login" className="text-sm font-medium">
              Sign In
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/register" className="text-sm font-medium">
              Register
            </Link>
          </div>
          
          <Link to="/account" className="text-sm font-medium">
            Account
          </Link>
          
          <Cart />
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
