import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { TrustBadges } from '../components/TrustBadges';
import { products, categories } from '../data/products';
import { Product } from '../types';
import { motion } from 'motion/react';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
}

export function HomePage({ onAddToCart }: HomePageProps) {
  const featuredProducts = products.filter(p => p.isNew || p.isPromo).slice(0, 4);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm">Qualité Premium • 100% Légal</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 neon-glow">
              Découvrez l'univers
              <br />
              <span className="text-primary">du CBD Premium</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Produits CBD de haute qualité, certifiés et légaux. 
              Livraison discrète en 24-48h partout en France.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 neon-button">
                <Link to="/products">
                  Découvrir la boutique
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                <Link to="/about">
                  En savoir plus
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </section>

      {/* Trust badges */}
      <section className="container mx-auto px-4">
        <TrustBadges />
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Nos catégories</h2>
          <p className="text-muted-foreground">Explorez notre sélection de produits CBD premium</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/products?category=${encodeURIComponent(category)}`}
                className="block p-6 bg-secondary/50 rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all group text-center"
              >
                <h3 className="text-white group-hover:text-primary transition-colors">
                  {category}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Produits phares</h2>
          <p className="text-muted-foreground">Découvrez nos meilleures ventes et nouveautés</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
            <Link to="/products">
              Voir tous les produits
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Pourquoi choisir <span className="text-primary">StreetShop</span> ?
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-white mb-2">Qualité garantie</h3>
                  <p className="text-muted-foreground">
                    Tous nos produits sont testés en laboratoire et certifiés conformes aux normes européennes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-white mb-2">Livraison discrète</h3>
                  <p className="text-muted-foreground">
                    Emballage neutre et sécurisé pour une livraison en toute discrétion sous 24-48h.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-white mb-2">Service client réactif</h3>
                  <p className="text-muted-foreground">
                    Notre équipe est à votre disposition pour répondre à toutes vos questions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden border border-primary/20 neon-border">
              <img
                src="https://images.unsplash.com/photo-1616690001847-cfdf601ac4d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMGhlbXAlMjBwbGFudHxlbnwxfHx8fDE3NjczMDU4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="CBD Plant"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal notice */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto p-6 bg-secondary/30 rounded-lg border border-primary/20">
          <p className="text-muted-foreground text-sm">
            ⚠️ Nos produits contiennent moins de 0,2% de THC et sont conformes à la législation européenne. 
            La vente est strictement réservée aux personnes majeures (+18 ans). 
            Les produits CBD ne sont pas des médicaments et ne peuvent se substituer à un traitement médical.
          </p>
        </div>
      </section>
    </div>
  );
}
