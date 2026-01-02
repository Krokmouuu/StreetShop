import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SmokeParticles } from './components/SmokeParticles';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { ProfilePage } from './pages/ProfilePage';
import { CGVPage } from './pages/CGVPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { AboutPage } from './pages/AboutPage';
import { Toaster } from './components/ui/sonner';
import { CartItem, Product } from './types';
import { toast } from 'sonner@2.0.3';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartItemsCount(count);
  }, [cartItems]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.product.id === productId) {
          const newQuantity = item.quantity + delta;
          if (newQuantity <= 0) {
            toast.success('Produit retiré du panier');
            return null;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
    toast.success('Produit retiré du panier');
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        <SmokeParticles />
        
        <div className="relative z-10">
          <Header cartItemsCount={cartItemsCount} />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
              <Route path="/products" element={<ProductsPage onAddToCart={handleAddToCart} />} />
              <Route path="/product/:id" element={<ProductDetailPage onAddToCart={handleAddToCart} />} />
              <Route 
                path="/cart" 
                element={
                  <CartPage 
                    cartItems={cartItems}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                  />
                } 
              />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/cgv" element={<CGVPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>

        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#0a0a0a',
              color: '#ffffff',
              border: '1px solid rgba(0, 255, 0, 0.2)',
            },
          }}
        />
      </div>
    </Router>
  );
}
