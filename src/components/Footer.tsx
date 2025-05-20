import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Github, Mail, MapPin, Phone, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export const Footer = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email") as string;
    
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
      form.reset();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: "Shopping",
      links: [
        { name: "Deals", href: "/deals" },
        { name: "Best Sellers", href: "/best-sellers" },
        { name: "New Releases", href: "/new-releases" },
        { name: "Prime", href: "/prime" },
      ]
    },
    {
      title: "Help & Settings",
      links: [
        { name: "Your Account", href: "/account" },
        { name: "Customer Service", href: "/customer-service" },
        { name: "Returns & Replacements", href: "/returns" },
        { name: "Help", href: "/help" },
      ]
    },
    {
      title: "About Us",
      links: [
        { name: "About PrimeShop", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press Releases", href: "/press" },
        { name: "Investor Relations", href: "/investors" },
      ]
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Instagram size={18} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Twitter size={18} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Github size={18} />, href: "https://github.com", label: "Github" },
  ];

  return (
    <footer className="bg-amazon-lightBlue text-white pt-10 relative">
      {/* Floating Rocket Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-amazon-orange p-4 rounded-full shadow-lg cursor-pointer"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Rocket className="w-6 h-6 text-white" />
      </motion.button>

      {/* Newsletter Section */}
      <div className="container mb-6">
        <div className="bg-amazon-blue/90 rounded-lg p-6 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Sign up for our newsletter</h3>
              <p className="text-white/80 text-sm">Get the latest deals and more.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
              <Button type="submit" className="bg-amazon-orange hover:bg-amazon-orange/90 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-2xl font-bold text-amazon-orange ">prime<span className="text-white">shop</span></span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              PrimeShop is an Amazon-inspired e-commerce platform offering millions of products 
              with fast delivery and excellent customer service.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-amazon-orange transition-colors p-2 rounded-full"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-lg mb-6">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-white/70 hover:text-amazon-orange transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Bar */}
      
    </footer>
  );
};
