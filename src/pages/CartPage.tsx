import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { CartItem } from '../types';
import { motion } from 'motion/react';

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function CartPage({ cartItems, onUpdateQuantity, onRemoveItem }: CartPageProps) {
  const subtotal = cartItems.reduce((sum, item) => {
    const price = item.product.isPromo ? (item.product.promoPrice || 0) : item.product.price;
    return sum + (price * item.quantity);
  }, 0);

  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto"
        >
          <ShoppingBag className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="text-2xl md:text-3xl mb-4">Votre panier est vide</h1>
          <p className="text-muted-foreground mb-8">
            Découvrez notre sélection de produits CBD premium
          </p>
          <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 neon-button">
            <Link to="/products">
              Voir la boutique
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl mb-8"
      >
        Panier
      </motion.h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item, index) => {
            const displayPrice = item.product.isPromo 
              ? (item.product.promoPrice || 0) 
              : item.product.price;

            return (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg border border-primary/20 p-4 md:p-6"
              >
                <div className="flex gap-4">
                  <Link
                    to={`/product/${item.product.id}`}
                    className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden border border-primary/20"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="text-white mb-1 hover:text-primary transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mb-2">
                      {item.product.category}
                    </p>
                    {item.product.cbdPercentage && (
                      <p className="text-primary text-sm mb-4">
                        CBD {item.product.cbdPercentage}%
                      </p>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-8 h-8 flex items-center justify-center border border-primary/20 rounded hover:bg-primary/10 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-8 h-8 flex items-center justify-center border border-primary/20 rounded hover:bg-primary/10 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price & Remove */}
                      <div className="flex items-center justify-between sm:justify-end gap-4">
                        <p className="text-primary text-xl">
                          €{(displayPrice * item.quantity).toFixed(2)}
                        </p>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <div className="bg-card rounded-lg border border-primary/20 p-6 sticky top-24">
            <h2 className="text-xl mb-6">Récapitulatif</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Sous-total</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Livraison</span>
                <span>{shipping === 0 ? 'Gratuite' : `€${shipping.toFixed(2)}`}</span>
              </div>
              {subtotal < 50 && (
                <p className="text-sm text-primary">
                  Encore €{(50 - subtotal).toFixed(2)} pour la livraison gratuite
                </p>
              )}
              <div className="border-t border-primary/20 pt-4">
                <div className="flex justify-between text-white">
                  <span>Total</span>
                  <span className="text-primary text-xl">€{total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-primary text-black hover:bg-primary/90 neon-button mb-4"
              size="lg"
            >
              Commander
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full border-primary/30"
            >
              <Link to="/products">
                Continuer mes achats
              </Link>
            </Button>

            {/* Trust info */}
            <div className="mt-6 pt-6 border-t border-primary/20 space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                <span>Paiement sécurisé</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                <span>Livraison discrète 24-48h</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                <span>Satisfait ou remboursé</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
