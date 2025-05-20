import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export function Cart() {
  const { totalItems } = useCart();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <button 
      className="relative flex items-center group transition-transform duration-200 hover:scale-110 hover:rotate-[8deg] p-3 overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        background: position.x !== 0 ? 
          `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,153,0,0.15), transparent 50%)` : 
          'transparent'
      }}
    >
      <ShoppingCart className="h-6 w-6 transition-colors duration-200 group-hover:text-amazon-orange relative z-10" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-amazon-orange text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-1 relative z-10">
          {totalItems}
        </span>
      )}
    </button>
  );
}
