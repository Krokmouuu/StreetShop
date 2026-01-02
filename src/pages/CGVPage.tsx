import { motion } from "motion/react";
import { getCurrentYear } from "../utils/date";

export function CGVPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl md:text-4xl mb-8">
          Conditions Générales de Vente
        </h1>

        <div className="space-y-8 text-muted-foreground">
          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">1. Objet</h2>
            <p className="mb-4">
              Les présentes conditions générales de vente (CGV) régissent les
              relations contractuelles entre StreetShop (ci-après "le Vendeur")
              et tout acheteur (ci-après "le Client") souhaitant effectuer un
              achat via le site www.streetshop.fr.
            </p>
            <p>
              Le Client reconnaît avoir pris connaissance des présentes CGV et
              les avoir acceptées avant la passation de commande.
            </p>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">2. Produits</h2>
            <p className="mb-4">
              Tous nos produits sont des produits à base de CBD (cannabidiol)
              conformes à la législation française et européenne en vigueur. Le
              taux de THC (tétrahydrocannabinol) est strictement inférieur à
              0,2%.
            </p>
            <p className="mb-4">
              Les produits sont présentés sur le site avec une description
              détaillée, des photographies et leur prix en euros TTC. Le Vendeur
              s'efforce de présenter les produits avec la plus grande exactitude
              possible.
            </p>
            <p className="text-primary text-sm">
              ⚠️ Les produits CBD ne sont pas des médicaments et ne peuvent se
              substituer à un traitement médical.
            </p>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">3. Commande</h2>
            <p className="mb-4">Pour passer commande, le Client doit :</p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Être majeur (18 ans minimum)</li>
              <li>Sélectionner les produits désirés</li>
              <li>Valider son panier</li>
              <li>Renseigner ses coordonnées de livraison et de facturation</li>
              <li>Choisir son mode de paiement</li>
              <li>Accepter les présentes CGV</li>
              <li>Confirmer sa commande et procéder au paiement</li>
            </ul>
            <p>
              La validation de la commande vaut acceptation des présentes CGV et
              formation du contrat de vente.
            </p>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">4. Prix</h2>
            <p className="mb-4">
              Les prix des produits sont indiqués en euros toutes taxes
              comprises (TTC), hors frais de livraison. Les frais de livraison
              sont calculés et indiqués avant la validation finale de la
              commande.
            </p>
            <p className="mb-4">
              Le Vendeur se réserve le droit de modifier ses prix à tout moment.
              Les produits sont facturés au tarif en vigueur au moment de la
              validation de la commande.
            </p>
            <p className="text-primary text-sm">
              🎁 Livraison gratuite pour toute commande supérieure à 50€
            </p>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">5. Paiement</h2>
            <p className="mb-4">
              Le paiement s'effectue en ligne par carte bancaire (Visa,
              Mastercard, CB) via une plateforme sécurisée. Les données de
              paiement ne sont pas conservées par le Vendeur.
            </p>
            <p>
              La commande ne sera validée qu'après confirmation du paiement par
              l'organisme bancaire.
            </p>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">6. Livraison</h2>
            <p className="mb-4">
              Les produits sont livrés à l'adresse indiquée par le Client lors
              de la commande. La livraison est effectuée par Colissimo ou
              transporteur équivalent dans un délai de 24 à 48 heures ouvrées
              après validation de la commande.
            </p>
            <p className="mb-4">
              L'emballage est discret et neutre, sans aucune mention du contenu
              ou du nom du site.
            </p>
            <p className="mb-4">
              En cas d'absence lors de la livraison, un avis de passage sera
              laissé. Le colis pourra être retiré au bureau de poste le plus
              proche.
            </p>
            <p className="text-primary text-sm">
              📦 Toutes nos livraisons sont suivies et assurées
            </p>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">7. Droit de rétractation</h2>
            <p className="mb-4">
              Conformément aux articles L221-18 et suivants du Code de la
              consommation, le Client dispose d'un délai de 14 jours à compter
              de la réception des produits pour exercer son droit de
              rétractation sans avoir à justifier de motifs.
            </p>
            <p className="mb-4">
              Les produits doivent être retournés dans leur emballage d'origine,
              non ouverts et en parfait état de revente. Les frais de retour
              sont à la charge du Client.
            </p>
            <p className="text-primary text-sm">
              ⚠️ Pour des raisons d'hygiène et de sécurité, les produits ouverts
              ou utilisés ne peuvent être repris.
            </p>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">8. Garantie et réclamations</h2>
            <p className="mb-4">
              Tous nos produits bénéficient de la garantie légale de conformité
              et de la garantie contre les vices cachés. En cas de produit
              défectueux ou non conforme, le Client peut demander le
              remplacement ou le remboursement du produit.
            </p>
            <p>
              Toute réclamation doit être adressée par email à
              contact@streetshop.fr dans un délai de 7 jours suivant la
              réception de la commande.
            </p>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">9. Responsabilité</h2>
            <p className="mb-4">
              Les produits proposés sont conformes à la législation française.
              Le Vendeur ne saurait être tenu responsable de l'usage qui en est
              fait par le Client.
            </p>
            <p>
              Il appartient au Client de vérifier que les produits commandés
              sont autorisés dans son pays de destination en cas de livraison à
              l'étranger.
            </p>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">10. Données personnelles</h2>
            <p>
              Les informations recueillies font l'objet d'un traitement
              informatique destiné à la gestion des commandes. Conformément au
              RGPD, le Client dispose d'un droit d'accès, de rectification et de
              suppression des données le concernant. Pour plus d'informations,
              consultez notre{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Politique de confidentialité
              </a>
              .
            </p>
          </section>

          <section className="bg-card rounded-lg border border-primary/20 p-6">
            <h2 className="text-white mb-4">11. Droit applicable</h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de
              litige, et après tentative de recherche d'une solution amiable,
              les tribunaux français seront seuls compétents.
            </p>
          </section>

          <div className="text-center pt-8">
            <p className="text-sm">
              Dernière mise à jour : 1er janvier 2026.
            </p>
            <p className="text-sm mt-2">
              Pour toute question :{" "}
              <a
                href="mailto:contact@streetshop.fr"
                className="text-primary hover:underline"
              >
                contact@streetshop.fr
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
