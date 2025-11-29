import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const offers = [
  {
    title: 'Développement WordPress sur-mesure',
    subtitle: 'Un site unique, performant et évolutif',
    description:
      "Je conçois des sites WordPress entièrement uniques, alliant design personnalisé, performance et liberté totale d'évolution. Chaque site est développé sur une base technique propre et solide, pensée pour s'adapter à vos besoins présents… comme futurs.",
    features: [
      'Design 100% sur-mesure qui met en valeur votre marque',
      'Structure évolutive, facilement enrichissable',
      'Site rapide et optimisé pour le SEO',
      'Gestion de contenu simplifiée et autonome',
      'Affichage parfait sur tous les appareils',
      'Mise en ligne sécurisée avec documentation',
    ],
    cta: 'Planifier mon site sur-mesure',
    conclusion: 'Idéal pour un site professionnel unique, performant et capable de grandir avec votre activité',
  },
  {
    title: 'Site WordPress avec Elementor',
    subtitle: 'Rapide, moderne et économique',
    description:
      "Une solution rapide, moderne et économique pour obtenir un site professionnel parfaitement aligné avec votre image. J'utilise Elementor pour créer des pages élégantes et très simples à mettre à jour, même sans toucher au code.",
    features: [
      'Design personnalisé reflétant votre identité',
      'Site évolutif sans développement complexe',
      'Pages optimisées pour le référencement',
      'Parfaitement responsive sur tous les écrans',
      'Performances optimisées',
      'Formation rapide pour une autonomie totale',
    ],
    cta: 'Lancer mon site avec Elementor',
    conclusion: 'Excellent choix pour les entreprises, indépendants ou associations souhaitant un site professionnel, flexible et facile à administrer',
  },
  {
    title: 'Application Web Avancée',
    subtitle: 'Outils sur mesure pour optimiser votre activité',
    description:
      'Je conçois des outils web sur mesure pour répondre à des besoins professionnels précis : gestion interne, automatisation, tableaux de bord, CRM, plateformes spécialisées…',
    features: [
      'Solution entièrement personnalisée autour de vos processus',
      'Outil robuste et performant pour gérer vos données',
      'Interface intuitive facilitant le travail des équipes',
      'Système sécurisé avec gestion des permissions',
      'Base technique fiable et évolutive',
      'Documentation complète pour une prise en main durable',
    ],
    cta: 'Discuter de mon application',
    conclusion: 'Idéal pour les projets nécessitant un outil professionnel puissant, conçu pour optimiser votre activité et gagner en efficacité',
  },
];

const Offers = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offers" className="py-20 bg-background-secondary/40">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
            Mes solutions
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
            Des solutions adaptées à chaque besoin digital
          </h2>
        </div>

        <div className="grid gap-8 xl:grid-cols-3">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="h-full"
            >
              <div className="relative h-full rounded-[28px] p-8 shadow-[0_25px_60px_-25px_rgba(15,23,42,0.6)] border border-white/10 bg-gradient-to-br from-primary/10 via-background to-background flex flex-col backdrop-blur-xl">
                <div className="absolute inset-x-10 -top-2 h-1 rounded-full bg-gradient-to-r from-primary to-indigo-500" />
                <p className="inline-flex items-center justify-center text-[11px] font-semibold uppercase tracking-[0.4em] text-primary/80 bg-primary/10 rounded-full px-4 py-1 mb-4">
                  {offer.subtitle}
                </p>
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
                  {offer.title}
                </h3>
                <p className="text-text-secondary mb-6">{offer.description}</p>
                <ul className="space-y-3 text-text-secondary flex-1 mb-6">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {offer.conclusion && (
                  <p className="text-sm text-text-secondary/80 italic mb-8 border-l-2 border-primary/30 pl-4">
                    {offer.conclusion}
                  </p>
                )}
                <motion.button
                  onClick={scrollToContact}
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-indigo-500 hover:from-primary-hover hover:to-primary text-white px-5 py-3 rounded-2xl font-medium shadow-lg hover:shadow-[0_0_35px_rgba(124,58,237,0.35)] transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {offer.cta}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;


