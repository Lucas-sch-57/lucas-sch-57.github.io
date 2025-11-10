import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-end',
      skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Back-end',
      skills: ['AdonisJS', 'Node.js'],
    },
    {
      title: 'CMS',
      skills: ['WordPress'],
    },
    {
      title: 'Outils',
      skills: ['Git', 'Figma'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background-secondary relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-text-primary">
            Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
              >
                <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary-subtle text-primary rounded-xl text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 ease-out cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

