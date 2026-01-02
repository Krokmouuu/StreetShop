import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart, User, Leaf } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { categories } from "../data/products";
import { motion } from "motion/react";

interface HeaderProps {
  cartItemsCount: number;
}

export function Header({ cartItemsCount }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Leaf className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />
            <span className="text-xl md:text-2xl neon-glow">STREETSHOP</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              to="/products"
              className="text-foreground hover:text-primary transition-colors"
            >
              Tous les produits
            </Link>
            <div className="group relative">
              <button className="text-foreground hover:text-primary transition-colors">
                Catégories
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-primary/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg shadow-primary/10">
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/products?category=${encodeURIComponent(category)}`}
                    className="block px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors border-b border-primary/10 last:border-0"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              À propos
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* User */}
            <Link
              to="/profile"
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-foreground hover:text-primary transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-black rounded-full flex items-center justify-center text-xs"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </Link>

            {/* Mobile menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-primary/20">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    to="/products"
                    className="text-lg text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Tous les produits
                  </Link>
                  <div className="space-y-2">
                    <p className="text-lg text-primary">Catégories</p>
                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={`/products?category=${encodeURIComponent(
                          category
                        )}`}
                        className="block pl-4 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/about"
                    className="text-lg text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    À propos
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="pb-4"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher un produit..."
                className="pl-10 bg-secondary border-primary/20 focus:border-primary"
              />
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
