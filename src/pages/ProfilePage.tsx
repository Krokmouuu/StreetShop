import { useState } from 'react';
import { User as UserIcon, Package, Settings, LogOut } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { motion } from 'motion/react';

export function ProfilePage() {
  const [user] = useState({
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
    phone: '+33 6 12 34 56 78',
    address: '123 Rue de la Paix',
    city: 'Paris',
    postalCode: '75001'
  });

  const [orders] = useState([
    {
      id: 'CMD-001',
      date: '2025-12-20',
      status: 'Livré',
      total: 45.99,
      items: 3
    },
    {
      id: 'CMD-002',
      date: '2025-12-15',
      status: 'En cours',
      total: 78.50,
      items: 5
    },
    {
      id: 'CMD-003',
      date: '2025-12-01',
      status: 'Livré',
      total: 32.99,
      items: 2
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl mb-8"
      >
        Mon compte
      </motion.h1>

      <Tabs defaultValue="profile" className="space-y-8">
        <TabsList className="bg-secondary border border-primary/20">
          <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-black">
            <UserIcon className="w-4 h-4 mr-2" />
            Profil
          </TabsTrigger>
          <TabsTrigger value="orders" className="data-[state=active]:bg-primary data-[state=active]:text-black">
            <Package className="w-4 h-4 mr-2" />
            Commandes
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-primary data-[state=active]:text-black">
            <Settings className="w-4 h-4 mr-2" />
            Paramètres
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-lg border border-primary/20 p-6 md:p-8 max-w-2xl"
          >
            <h2 className="text-2xl mb-6">Informations personnelles</h2>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    defaultValue={user.name}
                    className="bg-secondary border-primary/20"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={user.email}
                    className="bg-secondary border-primary/20"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  defaultValue={user.phone}
                  className="bg-secondary border-primary/20"
                />
              </div>

              <div>
                <Label htmlFor="address">Adresse</Label>
                <Input
                  id="address"
                  defaultValue={user.address}
                  className="bg-secondary border-primary/20"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">Ville</Label>
                  <Input
                    id="city"
                    defaultValue={user.city}
                    className="bg-secondary border-primary/20"
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">Code postal</Label>
                  <Input
                    id="postalCode"
                    defaultValue={user.postalCode}
                    className="bg-secondary border-primary/20"
                  />
                </div>
              </div>

              <Button className="bg-primary text-black hover:bg-primary/90 neon-button">
                Enregistrer les modifications
              </Button>
            </form>
          </motion.div>
        </TabsContent>

        {/* Orders Tab */}
        <TabsContent value="orders">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-2xl mb-6">Mes commandes</h2>
            
            {orders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg border border-primary/20 p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-white">Commande {order.id}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        order.status === 'Livré'
                          ? 'bg-primary/20 text-primary'
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {new Date(order.date).toLocaleDateString('fr-FR')} • {order.items} article{order.items > 1 ? 's' : ''}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-primary text-xl">€{order.total.toFixed(2)}</p>
                    <Button variant="outline" className="border-primary/30">
                      Détails
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-lg border border-primary/20 p-6 md:p-8 max-w-2xl space-y-8"
          >
            <div>
              <h2 className="text-2xl mb-6">Paramètres du compte</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-white mb-4">Modifier le mot de passe</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="current-password">Mot de passe actuel</Label>
                      <Input
                        id="current-password"
                        type="password"
                        className="bg-secondary border-primary/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="new-password">Nouveau mot de passe</Label>
                      <Input
                        id="new-password"
                        type="password"
                        className="bg-secondary border-primary/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        className="bg-secondary border-primary/20"
                      />
                    </div>
                    <Button className="bg-primary text-black hover:bg-primary/90 neon-button">
                      Mettre à jour le mot de passe
                    </Button>
                  </div>
                </div>

                <div className="pt-6 border-t border-primary/20">
                  <h3 className="text-white mb-4">Notifications</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-muted-foreground">
                        Recevoir les offres promotionnelles
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-muted-foreground">
                        Recevoir les nouveautés produits
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-muted-foreground">
                        Recevoir les conseils d'utilisation
                      </span>
                    </label>
                  </div>
                </div>

                <div className="pt-6 border-t border-primary/20">
                  <Button
                    variant="destructive"
                    className="w-full md:w-auto"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Se déconnecter
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
