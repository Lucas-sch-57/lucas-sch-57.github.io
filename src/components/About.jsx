import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-[700px] mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Après trois années d'expérience passionnantes en agence, j'ai décidé de donner un nouveau tournant à ma carrière en me lançant en tant que développeur web indépendant.
          </p>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mt-6">
            J'accompagne les entreprises, startups, indépendants et particuliers dans la création de solutions web modernes, performantes et durables.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

