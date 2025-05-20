import { Product } from "@/components/ProductCard";

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise Cancelling Headphones",
    price: 14999,
    originalPrice: 19999,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400",
      "https://images.unsplash.com/photo-1546435770-a3e5e7a60d96?q=80&w=400",
    ],
    rating: 4.5,
    reviewCount: 1245,
    isPrime: true,
  },
  {
    id: "2",
    name: "Smart Watch with Heart Rate Monitor",
    price: 9999,
    originalPrice: 12999,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400",
    ],
    rating: 4.3,
    reviewCount: 873,
    isPrime: true,
  },
  {
    id: "3",
    name: "Ergonomic Office Chair",
    price: 13999,
    images: [
      "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?q=80&w=400",
      "https://images.unsplash.com/photo-1596079890701-dd42edf0b7d4?q=80&w=400",
    ],
    rating: 4.7,
    reviewCount: 560,
    isPrime: false,
  },
  {
    id: "4",
    name: "Bluetooth Waterproof Speaker",
    price: 3999,
    originalPrice: 5999,
    images: [
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=400",
      "https://images.unsplash.com/photo-1589003077686-31cfb87fab09?q=80&w=400",
    ],
    rating: 4.2,
    reviewCount: 1025,
    isPrime: true,
  },
  {
    id: "5",
    name: "Professional Blender for Smoothies",
    price: 7499,
    originalPrice: 9999,
    images: [
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=400",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=400",
    ],
    rating: 4.8,
    reviewCount: 782,
    isPrime: true,
  },
  {
    id: "6",
    name: "Ultralight Laptop Backpack",
    price: 1500,
    originalPrice: 3000,
    images: [
      "https://images.unsplash.com/photo-1577733975197-3b950ca5cabe?q=80&w=400",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400",
    ],
    rating: 4.4,
    reviewCount: 456,
    isPrime: true,
  },
  {
    id: "7",
    name: "Smart Indoor Security Camera",
    price: 1750,
    originalPrice: 2100,
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400",
      "https://images.unsplash.com/photo-1605471395053-29a74a759c3c?q=80&w=400",
    ],
    rating: 4.1,
    reviewCount: 329,
    isPrime: false,
  },
  {
    id: "8",
    name: "Cast Iron Dutch Oven",
    price: 2500,
    originalPrice: 2850,
    images: [
      "https://www.theindusvalley.in/cdn/shop/files/1_DMProductImage.webp?v=1745485523&width=1946",
      "https://www.theindusvalley.in/cdn/shop/files/2_healthycookwarehealthyfamilly.webp?v=1745485523&width=1946",
    ],
    rating: 4.9,
    reviewCount: 612,
    isPrime: true,
  },
];

export const categories = [
  {
    id: "electronics",
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=400",
  },
  {
    id: "home",
    name: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400",
  },
  {
    id: "fashion",
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=400",
  },
  {
    id: "books",
    name: "Books",
    image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=400",
  },
];
