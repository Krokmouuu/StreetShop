import { Link } from "react-router-dom";
import { Leaf, Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { getCurrentYear } from "../utils/date";

export function Footer() {
  return (
    <footer className="bg-black border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="text-xl neon-glow">STREETSHOP</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Votre boutique de confiance pour des produits CBD premium et
              légaux. Qualité garantie et livraison discrète.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Boutique
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Mon compte
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Panier
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/cgv"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  CGV
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white mb-4">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Recevez nos offres exclusives et nouveautés
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-secondary border-primary/20 focus:border-primary"
              />
              <Button className="bg-primary text-black hover:bg-primary/90 neon-button">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {getCurrentYear()} STREETSHOP. Tous droits réservés. Réservé aux
              +18 ans.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">
                Moyens de paiement:
              </span>
              <div className="flex gap-2">
                <div className="w-12 h-8 bg-secondary rounded border border-primary/20 flex items-center justify-center text-xs text-primary">
                  VISA
                </div>
                <div className="w-12 h-8 bg-secondary rounded border border-primary/20 flex items-center justify-center text-xs text-primary">
                  MC
                </div>
                <div className="w-12 h-8 bg-secondary rounded border border-primary/20 flex items-center justify-center text-xs text-primary">
                  CB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
