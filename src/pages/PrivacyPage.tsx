import { motion } from "motion/react";
import { Shield, Lock, Eye, Database } from "lucide-react";
import { getCurrentYear } from "../utils/date";

export function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl md:text-4xl mb-8">
          Politique de Confidentialité
        </h1>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card rounded-lg border border-primary/20 p-4 text-center">
            <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Protection RGPD</p>
          </div>
          <div className="bg-card rounded-lg border border-primary/20 p-4 text-center">
            <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Données sécurisées</p>
          </div>
          <div className="bg-card rounded-lg border border-primary/20 p-4 text-center">
            <Eye className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Transparence totale</p>
          </div>
          <div className="bg-card rounded-lg border border-primary/20 p-4 text-center">
            <Database className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Vos droits garantis</p>
          </div>
        </div>

        <div className="space-y-8 text-muted-foreground">
          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">1. Introduction</h2>
            <p className="mb-4">
              StreetShop accorde une grande importance à la protection de vos
              données personnelles. Cette politique de confidentialité vous
              informe sur la manière dont nous collectons, utilisons et
              protégeons vos informations personnelles conformément au Règlement
              Général sur la Protection des Données (RGPD).
            </p>
            <p className="text-primary text-sm">
              🔒 Vos données sont traitées avec le plus haut niveau de sécurité
            </p>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">2. Responsable du traitement</h2>
            <p className="mb-4">
              Le responsable du traitement des données est :
            </p>
            <div className="bg-secondary/50 p-4 rounded border border-primary/10">
              <p className="mb-1">StreetShop</p>
              <p className="mb-1">123 Rue de la Paix</p>
              <p className="mb-1">75001 Paris, France</p>
              <p className="mb-1">Email : contact@streetshop.fr</p>
              <p>SIRET : 123 456 789 00000</p>
            </div>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">3. Données collectées</h2>
            <p className="mb-4">
              Nous collectons les données personnelles suivantes :
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Identité : nom, prénom, date de naissance (vérification de
                  majorité)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Coordonnées : adresse postale, email, numéro de téléphone
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Données de commande : historique d'achats, préférences
                  produits
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Données de connexion : adresse IP, cookies, logs de navigation
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Données bancaires : via notre prestataire de paiement sécurisé
                  (non stockées par nos soins)
                </span>
              </li>
            </ul>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">4. Finalités du traitement</h2>
            <p className="mb-4">Vos données sont utilisées pour :</p>
            <ul className="space-y-3 pl-4">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Traiter et gérer vos commandes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Assurer la livraison des produits</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Gérer votre compte client</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Vous contacter concernant vos commandes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Vous envoyer des offres promotionnelles (avec votre
                  consentement)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Améliorer nos services et votre expérience utilisateur
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Respecter nos obligations légales</span>
              </li>
            </ul>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">5. Base légale du traitement</h2>
            <p className="mb-4">
              Le traitement de vos données personnelles repose sur :
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  L'exécution du contrat de vente (traitement des commandes)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Votre consentement (newsletters, marketing)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Nos intérêts légitimes (amélioration des services, lutte
                  contre la fraude)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Les obligations légales (facturation, comptabilité)</span>
              </li>
            </ul>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">6. Destinataires des données</h2>
            <p className="mb-4">Vos données peuvent être transmises à :</p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Nos services internes (service client, logistique,
                  comptabilité)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Nos prestataires de paiement (paiement sécurisé)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Nos transporteurs (livraison des commandes)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Nos hébergeurs (stockage sécurisé des données)</span>
              </li>
            </ul>
            <p className="mt-4 text-primary text-sm">
              ⚠️ Nous ne vendons ni ne louons vos données personnelles à des
              tiers
            </p>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">7. Durée de conservation</h2>
            <p className="mb-4">Vos données sont conservées pendant :</p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Compte client actif : jusqu'à votre demande de suppression
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Compte inactif : 3 ans après la dernière commande</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Données de commande : 10 ans (obligations comptables)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Données marketing : jusqu'à retrait de votre consentement
                </span>
              </li>
            </ul>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">8. Vos droits</h2>
            <p className="mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <div className="space-y-3 pl-4">
              <div>
                <h4 className="text-white mb-1">Droit d'accès</h4>
                <p className="text-sm">
                  Obtenir une copie de vos données personnelles
                </p>
              </div>
              <div>
                <h4 className="text-white mb-1">Droit de rectification</h4>
                <p className="text-sm">
                  Corriger vos données inexactes ou incomplètes
                </p>
              </div>
              <div>
                <h4 className="text-white mb-1">Droit à l'effacement</h4>
                <p className="text-sm">
                  Demander la suppression de vos données
                </p>
              </div>
              <div>
                <h4 className="text-white mb-1">Droit à la limitation</h4>
                <p className="text-sm">Limiter le traitement de vos données</p>
              </div>
              <div>
                <h4 className="text-white mb-1">Droit à la portabilité</h4>
                <p className="text-sm">
                  Recevoir vos données dans un format structuré
                </p>
              </div>
              <div>
                <h4 className="text-white mb-1">Droit d'opposition</h4>
                <p className="text-sm">
                  Vous opposer au traitement de vos données
                </p>
              </div>
            </div>
            <p className="mt-4">
              Pour exercer vos droits, contactez-nous à :
              <a
                href="mailto:privacy@streetshop.fr"
                className="text-primary hover:underline ml-1"
              >
                privacy@streetshop.fr
              </a>
            </p>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">9. Sécurité des données</h2>
            <p className="mb-4">
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données contre tout accès non
              autorisé, perte ou destruction :
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Cryptage SSL/TLS pour toutes les communications</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Serveurs sécurisés et hébergement certifié</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Accès restreint aux données personnelles</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Sauvegardes régulières</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Audits de sécurité réguliers</span>
              </li>
            </ul>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">10. Cookies</h2>
            <p className="mb-4">
              Notre site utilise des cookies pour améliorer votre expérience de
              navigation. Vous pouvez configurer votre navigateur pour refuser
              les cookies, mais certaines fonctionnalités du site pourraient ne
              pas fonctionner correctement.
            </p>
            <p className="text-sm">
              Pour plus d'informations sur notre utilisation des cookies,
              consultez notre politique de cookies.
            </p>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">11. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Toute modification sera publiée sur
              cette page avec la date de mise à jour. Nous vous encourageons à
              consulter régulièrement cette page.
            </p>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">12. Contact et réclamations</h2>
            <p className="mb-4">
              Pour toute question concernant cette politique de confidentialité
              ou pour exercer vos droits, contactez-nous :
            </p>
            <div className="bg-secondary/50 p-4 rounded border border-primary/10">
              <p className="mb-1">
                Email :{" "}
                <a
                  href="mailto:privacy@streetshop.fr"
                  className="text-primary hover:underline"
                >
                  privacy@streetshop.fr
                </a>
              </p>
              <p className="mb-1">Téléphone : +33 1 23 45 67 89</p>
              <p>Adresse : 123 Rue de la Paix, 75001 Paris</p>
            </div>
            <p className="mt-4 text-sm">
              Vous avez également le droit d'introduire une réclamation auprès
              de la CNIL (Commission Nationale de l'Informatique et des
              Libertés).
            </p>
          </section>

          <div className="text-center pt-8">
            <p className="text-sm">
              Dernière mise à jour : 1er janvier 2026.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
