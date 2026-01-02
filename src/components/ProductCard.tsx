import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const displayPrice = product.isPromo ? product.promoPrice : product.price;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group bg-card rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300"
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-primary text-black">Nouveau</Badge>
          )}
          {product.isPromo && (
            <Badge className="bg-destructive text-white">-{Math.round(((product.price - (product.promoPrice || 0)) / product.price) * 100)}%</Badge>
          )}
        </div>

        {/* CBD % Badge */}
        {product.cbdPercentage && (
          <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/30">
            <span className="text-primary text-sm">CBD {product.cbdPercentage}%</span>
          </div>
        )}
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm mb-3">{product.category}</p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm text-foreground">{product.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({product.reviews?.length || 0} avis)
            </span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.isPromo && (
              <span className="text-muted-foreground line-through text-sm">
                €{product.price.toFixed(2)}
              </span>
            )}
            <span className="text-primary text-xl">
              €{displayPrice?.toFixed(2)}
            </span>
          </div>

          <Button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            size="icon"
            className="bg-primary text-black hover:bg-primary/90 neon-button"
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
