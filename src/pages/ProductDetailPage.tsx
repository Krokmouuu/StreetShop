import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { products } from '../data/products';
import { Product } from '../types';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';

interface ProductDetailPageProps {
  onAddToCart: (product: Product) => void;
}

export function ProductDetailPage({ onAddToCart }: ProductDetailPageProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl mb-4">Produit introuvable</h1>
        <Button onClick={() => navigate('/products')}>
          Retour à la boutique
        </Button>
      </div>
    );
  }

  const displayPrice = product.isPromo ? product.promoPrice : product.price;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    toast.success(`${quantity} x ${product.name} ajouté au panier`);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mb-6 text-primary hover:text-primary/80"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Retour
      </Button>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="relative aspect-square rounded-lg overflow-hidden border border-primary/20 neon-border mb-4">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && (
                <Badge className="bg-primary text-black">Nouveau</Badge>
              )}
              {product.isPromo && (
                <Badge className="bg-destructive text-white">
                  -{Math.round(((product.price - (product.promoPrice || 0)) / product.price) * 100)}%
                </Badge>
              )}
            </div>
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? 'border-primary'
                      : 'border-primary/20 hover:border-primary/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div>
            <p className="text-primary mb-2">{product.category}</p>
            <h1 className="text-3xl md:text-4xl mb-4">{product.name}</h1>
            
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating || 0)
                          ? 'fill-primary text-primary'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-foreground">{product.rating}</span>
                <span className="text-muted-foreground">
                  ({product.reviews?.length || 0} avis)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              {product.isPromo && (
                <span className="text-muted-foreground line-through text-xl">
                  €{product.price.toFixed(2)}
                </span>
              )}
              <span className="text-primary text-3xl">
                €{displayPrice?.toFixed(2)}
              </span>
            </div>

            {/* CBD Info */}
            {product.cbdPercentage && (
              <div className="flex gap-4 mb-6">
                <div className="bg-secondary/50 border border-primary/20 rounded-lg px-4 py-2">
                  <p className="text-muted-foreground text-sm">CBD</p>
                  <p className="text-primary text-xl">{product.cbdPercentage}%</p>
                </div>
                {product.thcPercentage !== undefined && (
                  <div className="bg-secondary/50 border border-primary/20 rounded-lg px-4 py-2">
                    <p className="text-muted-foreground text-sm">THC</p>
                    <p className="text-foreground text-xl">{product.thcPercentage}%</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-white mb-3">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="w-5 h-5 text-primary" />
              <span>100% légal • THC &lt; 0,2%</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="w-5 h-5 text-primary" />
              <span>Livraison discrète 24-48h</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="w-5 h-5 text-primary" />
              <span>Testé en laboratoire</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="w-5 h-5 text-primary" />
              <span>Garantie satisfait ou remboursé</span>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex gap-4">
            <div className="flex items-center border border-primary/20 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 hover:bg-primary/10 transition-colors"
              >
                -
              </button>
              <span className="px-6 py-3 border-x border-primary/20">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 hover:bg-primary/10 transition-colors"
              >
                +
              </button>
            </div>

            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-primary text-black hover:bg-primary/90 neon-button"
              size="lg"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Ajouter au panier
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Reviews */}
      {product.reviews && product.reviews.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl md:text-3xl mb-8">Avis clients</h2>
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div
                key={review.id}
                className="bg-card p-6 rounded-lg border border-primary/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white mb-1">{review.author}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {new Date(review.date).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
