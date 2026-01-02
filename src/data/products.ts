import { Product } from "../types";
import grinderImage from "../assets/grinder.jpg";

export const products: Product[] = [
  // Fleurs de CBD
  {
    id: "1",
    name: "Amnesia Haze CBD",
    price: 8.99,
    category: "Fleurs de CBD",
    cbdPercentage: 18,
    thcPercentage: 0.18,
    images: [
      "https://images.unsplash.com/photo-1652054647785-7e33ab510110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMGJ1ZCUyMGZsb3dlcnxlbnwxfHx8fDE3NjczMDU4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1616690001847-cfdf601ac4d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMGhlbXAlMjBwbGFudHxlbnwxfHx8fDE3NjczMDU4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description:
      "Fleurs de CBD premium Amnesia Haze, cultivées en intérieur avec un taux de CBD de 18%. Arômes citronnés et terreux. Effet relaxant et apaisant. Cultivé en Europe selon les normes biologiques.",
    isNew: true,
    rating: 4.8,
    reviews: [
      {
        id: "r1",
        author: "Marc D.",
        rating: 5,
        comment:
          "Excellente qualité, arômes puissants et effet relaxant immédiat.",
        date: "2025-12-15",
      },
      {
        id: "r2",
        author: "Sophie L.",
        rating: 4,
        comment: "Très satisfaite, livraison rapide et produit conforme.",
        date: "2025-12-10",
      },
    ],
  },
  {
    id: "2",
    name: "OG Kush CBD",
    price: 9.99,
    category: "Fleurs de CBD",
    cbdPercentage: 20,
    thcPercentage: 0.15,
    images: [
      "https://images.unsplash.com/photo-1652054647785-7e33ab510110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMGJ1ZCUyMGZsb3dlcnxlbnwxfHx8fDE3NjczMDU4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description:
      "OG Kush CBD premium avec 20% de CBD. Arômes boisés et épicés. Parfait pour la détente en soirée.",
    isPromo: true,
    promoPrice: 7.99,
    rating: 4.9,
  },
  {
    id: "3",
    name: "Lemon Haze CBD",
    price: 8.49,
    category: "Fleurs de CBD",
    cbdPercentage: 16,
    thcPercentage: 0.19,
    images: [
      "https://images.unsplash.com/photo-1616690001847-cfdf601ac4d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMGhlbXAlMjBwbGFudHxlbnwxfHx8fDE3NjczMDU4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description:
      "Fleurs Lemon Haze au goût citronné prononcé. 16% de CBD pour une relaxation optimale.",
    rating: 4.7,
  },

  // Huiles CBD
  {
    id: "4",
    name: "Huile CBD 10%",
    price: 39.99,
    category: "Huiles CBD",
    cbdPercentage: 10,
    thcPercentage: 0,
    images: [
      "https://images.unsplash.com/photo-1690369167940-173d3fefc53a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYmQlMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzY3MzA1ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description:
      "Huile CBD full spectrum 10%. Flacon de 10ml avec pipette. Extraction CO2 supercritique. Base huile de chanvre bio.",
    isNew: true,
    rating: 4.9,
  },
  {
    id: "5",
    name: "Huile CBD 20%",
    price: 69.99,
    category: "Huiles CBD",
    cbdPercentage: 20,
    thcPercentage: 0,
    images: [
      "https://images.unsplash.com/photo-1690369167940-173d3fefc53a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYmQlMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzY3MzA1ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description:
      "Huile CBD concentration élevée 20%. Idéale pour un usage régulier. Flacon 10ml.",
    rating: 4.8,
  },
  {
    id: "6",
    name: "Huile CBD 5%",
    price: 24.99,
    category: "Huiles CBD",
    cbdPercentage: 5,
    thcPercentage: 0,
    images: [
      "https://images.unsplash.com/photo-1690369167940-173d3fefc53a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYmQlMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzY3MzA1ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description:
      "Huile CBD douce 5%. Parfaite pour débuter avec le CBD. Goût neutre.",
    isPromo: true,
    promoPrice: 19.99,
    rating: 4.6,
  },

  // Résines
  {
    id: "7",
    name: "Hash CBD Afghan",
    price: 6.99,
    category: "Résines",
    cbdPercentage: 22,
    thcPercentage: 0.17,
    images: [
      "https://images.unsplash.com/photo-1652054647785-7e33ab510110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMGJ1ZCUyMGZsb3dlcnxlbnwxfHx8fDE3NjczMDU4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description:
      "Résine CBD type Afghan. 22% de CBD. Texture malléable, arômes épicés traditionnels.",
    rating: 4.7,
  },
  {
    id: "8",
    name: "Pollen CBD Marocain",
    price: 7.49,
    category: "Résines",
    cbdPercentage: 25,
    thcPercentage: 0.16,
    images: [
      "https://images.unsplash.com/photo-1616690001847-cfdf601ac4d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMGhlbXAlMjBwbGFudHxlbnwxfHx8fDE3NjczMDU4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description:
      "Pollen CBD qualité supérieure. 25% de CBD. Saveurs authentiques du Maroc.",
    isNew: true,
    rating: 4.9,
  },

  // E-liquides
  {
    id: "9",
    name: "E-liquide CBD Menthe",
    price: 19.99,
    category: "E-liquides",
    cbdPercentage: 3,
    thcPercentage: 0,
    images: [
      "https://images.unsplash.com/photo-1690369167940-173d3fefc53a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYmQlMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzY3MzA1ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description:
      "E-liquide CBD 300mg. Saveur menthe fraîche. Compatible avec toutes cigarettes électroniques. 10ml.",
    rating: 4.5,
  },
  {
    id: "10",
    name: "E-liquide CBD Fruité",
    price: 19.99,
    category: "E-liquides",
    cbdPercentage: 3,
    thcPercentage: 0,
    images: [
      "https://images.unsplash.com/photo-1690369167940-173d3fefc53a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYmQlMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzY3MzA1ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description:
      "E-liquide CBD 300mg saveur fruits rouges. Sans nicotine. Flacon 10ml.",
    rating: 4.6,
  },

  // Grinders
  {
    id: "11",
    name: "Grinder Aluminium 4 parties",
    price: 15.99,
    category: "Grinders",
    images: [grinderImage],
    description:
      "Grinder professionnel en aluminium anodisé. 4 parties avec tamis et réservoir. Diamètre 55mm. Dents acérées en diamant.",
    rating: 4.8,
  },
  {
    id: "12",
    name: "Grinder Premium Or 24K",
    price: 29.99,
    category: "Grinders",
    images: [grinderImage],
    description:
      "Grinder de luxe finition or 24 carats. 4 compartiments. Collection premium.",
    isNew: true,
    rating: 5.0,
  },

  // Papiers à rouler
  {
    id: "13",
    name: "Papiers OCB Slim",
    price: 1.99,
    category: "Papiers à rouler",
    images: [
      "https://images.unsplash.com/photo-1762009645105-ef6504cd63aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsaW5nJTIwcGFwZXJzJTIwdG9iYWNjb3xlbnwxfHx8fDE3NjczMDU4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description:
      "Carnet de 32 feuilles OCB Slim. Papier ultra fin. Combustion lente et uniforme.",
    rating: 4.7,
  },
  {
    id: "14",
    name: "Papiers RAW Organic",
    price: 2.49,
    category: "Papiers à rouler",
    images: [
      "https://images.unsplash.com/photo-1762009645105-ef6504cd63aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsaW5nJTIwcGFwZXJzJTIwdG9iYWNjb3xlbnwxfHx8fDE3NjczMDU4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description:
      "Papiers RAW 100% bio et non blanchis. 50 feuilles par carnet. King Size Slim.",
    isPromo: true,
    promoPrice: 1.99,
    rating: 4.9,
  },

  // Cartons à rouler
  {
    id: "15",
    name: "Filtres en Carton RAW",
    price: 1.49,
    category: "Cartons à rouler",
    images: [
      "https://images.unsplash.com/photo-1762009645105-ef6504cd63aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsaW5nJTIwcGFwZXJzJTIwdG9iYWNjb3xlbnwxfHx8fDE3NjczMDU4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description:
      "Carnet de 50 filtres en carton RAW. Perforés pour un roulage facile. Non blanchis.",
    rating: 4.8,
  },
  {
    id: "16",
    name: "Tips OCB Premium",
    price: 1.99,
    category: "Cartons à rouler",
    images: [
      "https://images.unsplash.com/photo-1762009645105-ef6504cd63aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsaW5nJTIwcGFwZXJzJTIwdG9iYWNjb3xlbnwxfHx8fDE3NjczMDU4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description:
      "Filtres carton OCB Premium. 102 tips par livret. Format universel.",
    rating: 4.6,
  },
];

export const categories = [
  "Fleurs de CBD",
  "Huiles CBD",
  "Résines",
  "E-liquides",
  "Grinders",
  "Papiers à rouler",
  "Cartons à rouler",
];
