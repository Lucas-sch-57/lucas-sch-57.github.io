import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Blob from './Blob';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Blobs décoratifs */}
      <Blob 
        size="w-96 h-96 md:w-[500px] md:h-[500px]" 
        position="absolute" 
        className="top-20 left-0 md:left-0 z-0"
        delay={0}
        initialX={-128}
        initialY={0}
      />
      <Blob 
        size="w-80 h-80 md:w-96 md:h-96" 
        position="absolute" 
        className="bottom-20 right-0 md:right-0 z-0"
        delay={2}
        initialX={128}
        initialY={0}
      />

      <div className="container-custom w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texte à gauche */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary leading-tight">
              Lucas Schiltz —<br />
              Développeur web indépendant
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary">
              Je conçois des sites et applications web modernes, performants et sur mesure.
            </p>
            <motion.button
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-2xl font-medium text-lg shadow-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300 ease-out flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Me contacter
              <Mail className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Image à droite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center md:justify-end relative z-10"
          >
            <div className="relative">
              <img
                src="/pp.jpeg"
                alt="Lucas Schiltz"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg relative z-10"
              />
              <div className="absolute inset-0 rounded-full bg-primary-subtle opacity-20 blur-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

