import { motion } from 'framer-motion';
import aboutImage from '../../assets/figma/about-image.png';

function About() {
  return (
    <section id="about" className="relative py-24 bg-[#5B3765] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D6A8C4] rounded-full blur-[400px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <span className="text-[#9E6899] font-sora font-bold text-2xl tracking-wide">ABOUT ME</span>
            <h2 className="text-4xl md:text-6xl font-sora text-[#F3CCDE] leading-tight">
              I'm an aspiring <br /> Data Scientist.
            </h2>
          </div>

          <div className="flex flex-col gap-6 text-[#F3CCDE]/80 text-lg leading-relaxed font-inter">
            <p>
              I'm a Data Scientist with hands-on experience working on real-world datasets, uncovering patterns, and building models that drive data-backed decisions. I focus on turning complex data into meaningful insights and believe in learning through experimentation while creating solutions that are both impactful and user-centric.
            </p>
            <p>
              My aim is to leverage data science to transform raw data into meaningful insights and intelligent solutions that support decision-making and create impactful, user-focused outcomes.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-fit px-8 py-4 bg-[#F3CCDE] text-[#5B3765] font-semibold rounded-full shadow-lg hover:bg-white transition-colors"
          >
            Download CV
          </motion.button>
        </motion.div>

        {/* Right Content - Image & Stats */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
            <img src={aboutImage} alt="About Me" className="w-full h-auto object-cover" />
          </div>

          {/* Stats Cards */}
          <div className="absolute -bottom-10 -left-10 z-20 flex flex-col gap-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl w-48"
            >
              <h3 className="text-4xl font-sora font-bold text-white mb-1">10+</h3>
              <p className="text-[#F3CCDE] text-sm">Project Completed</p>
            </motion.div>
          </div>

          <div className="absolute -top-10 -right-10 z-20 flex flex-col gap-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl w-48"
            >
              <h3 className="text-4xl font-sora font-bold text-white mb-1">100%</h3>
              <p className="text-[#F3CCDE] text-sm">Clients Satisfaction</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
