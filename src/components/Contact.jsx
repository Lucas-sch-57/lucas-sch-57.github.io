import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background-secondary relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-text-primary">
            Contact
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-12">
            Vous avez un projet, une idée ou une question ? Parlons-en !
          </p>

          <div className="space-y-8">
            {/* Email */}
            <motion.a
              href="mailto:schiltz.lucas.pro@gmail.com"
              className="inline-flex items-center gap-3 text-text-primary hover:text-primary transition-colors duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
              <span>schiltz.lucas.pro@gmail.com</span>
            </motion.a>

            {/* Icônes sociales */}
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://www.linkedin.com/in/lucasschiltz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-text-primary hover:text-primary hover:bg-primary-subtle hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300 ease-out shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com/lucas-sch-57"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-text-primary hover:text-primary hover:bg-primary-subtle hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300 ease-out shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

