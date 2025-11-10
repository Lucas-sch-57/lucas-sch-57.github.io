import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-20 min-h-[400px] flex items-center relative">
      <div className="container-custom w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto px-4">
            Mes projets seront bientôt disponibles. En attendant, n'hésitez pas à me contacter pour en discuter !
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

