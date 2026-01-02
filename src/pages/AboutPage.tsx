import { Award, Leaf, Shield, Users, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function AboutPage() {
  const certifications = [
    {
      icon: Shield,
      title: "Certifié Bio EU",
      description: "Agriculture biologique certifiée par l'Union Européenne",
    },
    {
      icon: CheckCircle,
      title: "Laboratoire Indépendant",
      description: "Tests réguliers effectués par des laboratoires tiers",
    },
    {
      icon: Award,
      title: "GMP Certifié",
      description: "Bonnes pratiques de fabrication pharmaceutique",
    },
    {
      icon: Leaf,
      title: "100% Légal",
      description:
        "Conformité stricte avec la législation française et européenne",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparence",
      description:
        "Traçabilité complète de la graine au produit fini. Chaque lot est testé et certifié.",
    },
    {
      icon: Leaf,
      title: "Qualité",
      description:
        "Sélection rigoureuse des producteurs et contrôle qualité à chaque étape de production.",
    },
    {
      icon: Users,
      title: "Éthique",
      description:
        "Commerce équitable et respect de l'environnement. Partenariats avec des cultivateurs locaux.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Culture biologique",
      description:
        "Nos plants de chanvre sont cultivés en Europe selon les normes de l'agriculture biologique, sans pesticides ni produits chimiques.",
    },
    {
      step: "02",
      title: "Récolte sélective",
      description:
        "Les fleurs sont récoltées à la main au moment optimal de maturité pour garantir la meilleure concentration en cannabinoïdes.",
    },
    {
      step: "03",
      title: "Extraction premium",
      description:
        "Utilisation de méthodes d'extraction au CO2 supercritique pour préserver tous les composés actifs et terpènes.",
    },
    {
      step: "04",
      title: "Tests laboratoire",
      description:
        "Chaque lot est testé par des laboratoires indépendants pour garantir le taux de CBD et confirmer THC < 0,2%.",
    },
    {
      step: "05",
      title: "Conditionnement",
      description:
        "Emballage hermétique et protecteur pour préserver la fraîcheur et les propriétés des produits.",
    },
    {
      step: "06",
      title: "Livraison",
      description:
        "Expédition rapide et discrète sous 24-48h partout en France métropolitaine.",
    },
  ];

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl mb-6">
              À propos de <span className="text-primary">StreetShop</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Pionnier du CBD premium en France, nous nous engageons à vous
              offrir les meilleurs produits cannabidiol, certifiés et 100%
              légaux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">Notre histoire</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Fondée en 2020, StreetShop est née de la passion de ses
                créateurs pour les bienfaits naturels du chanvre et leur volonté
                de démocratiser l'accès au CBD de qualité en France.
              </p>
              <p>
                Convaincus des vertus thérapeutiques du cannabidiol, nous avons
                créé une plateforme permettant à chacun d'accéder facilement à
                des produits CBD premium, testés et certifiés, dans le respect
                total de la législation.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers de compter plus de 10 000 clients
                satisfaits et de collaborer avec les meilleurs producteurs
                européens pour vous garantir une qualité exceptionnelle.
              </p>
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
                alt="Hemp Plant"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Nos valeurs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des principes qui guident chaque décision et chaque action de notre
            entreprise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg border border-primary/20 p-8 text-center hover:border-primary/50 transition-all"
            >
              <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-white mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Notre processus qualité</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            De la culture à votre porte, chaque étape est contrôlée pour vous
            garantir la meilleure qualité
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg border border-primary/20 p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl text-primary/30">{item.step}</span>
                <div>
                  <h3 className="text-white mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">
            Certifications & conformité
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nos produits respectent les normes les plus strictes de l'industrie
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg border border-primary/20 p-6 text-center hover:border-primary/50 transition-all"
            >
              <cert.icon className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-white mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-sm">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10K+", label: "Clients satisfaits" },
              { value: "50+", label: "Produits premium" },
              { value: "4.8/5", label: "Note moyenne" },
              { value: "24-48h", label: "Livraison rapide" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Info */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-lg border border-primary/20 p-6 md:p-8">
            <h3 className="text-white mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Informations légales importantes
            </h3>
            <div className="space-y-4 text-muted-foreground text-sm">
              <p>
                <strong className="text-white">Conformité légale :</strong> Tous
                nos produits respectent la législation française et européenne
                en vigueur. Le taux de THC est strictement inférieur à 0,2%
                conformément à l'arrêté du 30 décembre 2021.
              </p>
              <p>
                <strong className="text-white">Âge légal :</strong> La vente de
                nos produits est réservée aux personnes majeures (18 ans et
                plus). Une vérification de l'âge est effectuée lors de chaque
                commande.
              </p>
              <p>
                <strong className="text-white">Usage :</strong> Les produits CBD
                ne sont pas des médicaments et ne peuvent se substituer à un
                traitement médical. Ils ne sont pas destinés à diagnostiquer,
                traiter, guérir ou prévenir une maladie.
              </p>
              <p>
                <strong className="text-white">Tests laboratoire :</strong>{" "}
                Chaque lot de production est testé par des laboratoires
                indépendants accrédités. Les certificats d'analyse sont
                disponibles sur demande.
              </p>
              <p className="text-primary">
                Pour toute question relative à la conformité de nos produits,
                contactez-nous à legal@streetshop.fr
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
