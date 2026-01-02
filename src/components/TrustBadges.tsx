import { ShieldCheck, MapPin, Truck, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'Certifié < 0,2% THC',
      description: 'Conforme aux normes européennes'
    },
    {
      icon: MapPin,
      title: '100% légal et tracé',
      description: 'Origine certifiée'
    },
    {
      icon: Truck,
      title: 'Livraison 24-48h',
      description: 'Emballage discret'
    },
    {
      icon: Leaf,
      title: 'Qualité Premium',
      description: 'Produits bio et naturels'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-8">
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/50 border border-primary/20 hover:border-primary/50 transition-all"
        >
          <badge.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-2" />
          <h4 className="text-white mb-1">{badge.title}</h4>
          <p className="text-muted-foreground text-sm">{badge.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
