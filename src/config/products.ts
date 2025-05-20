export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Leather Wallet",
    description: "Handcrafted genuine leather wallet with multiple card slots and coin pocket",
    price: 2499,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=2787&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    description: "Advanced smartwatch with health tracking and notifications",
    price: 15999,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2872&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    description: "High-quality wireless earbuds with noise cancellation",
    price: 8999,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    description: "UV protected stylish sunglasses with polarized lenses",
    price: 4999,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Laptop Backpack",
    description: "Water-resistant backpack with laptop compartment and USB charging port",
    price: 3499,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=2832&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Fitness Tracker",
    description: "Advanced fitness band with heart rate monitoring and sleep tracking",
    price: 5999,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Portable Speaker",
    description: "Waterproof bluetooth speaker with 20-hour battery life",
    price: 6999,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Coffee Maker",
    description: "Programmable coffee maker with thermal carafe",
    price: 12999,
    image: "https://images-cdn.ubuy.co.in/653fc5a70fdd3b03d3619ee4-mainstays-black-5-cup-drip-coffee-maker.jpg"
  }
]; 