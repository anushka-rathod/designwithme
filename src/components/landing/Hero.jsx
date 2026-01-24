import { motion } from 'framer-motion';
import websitePhoto1 from '../../assets/figma/website-photo-1.png';
import websitePhoto2 from '../../assets/figma/website-photo-2.png';
import downloadCvSvg from '../../assets/figma/download-cv.svg';
import { Star } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#5B3765] to-[#2E1A33]">
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D6A8C4] rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#D6A8C4] rounded-full blur-[150px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 w-fit">
            <Star className="w-4 h-4 text-[#D6A8C4] fill-[#D6A8C4] animate-pulse" />
            <span className="text-[#F3CCDE] font-semibold text-sm">Available For Opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-sora text-[#F3CCDE] leading-tight">
            Hey, I'm Anushka, <br />
            <span className="text-white/90">Graphic Designer.</span>
          </h1>

          <p className="text-[#F3CCDE]/80 text-lg max-w-xl leading-relaxed">
            Create stunning visuals backed by data-driven insights. Transform your ideas into compelling designs and meaningful analytics.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#5B3765] text-white font-semibold rounded-full border border-[#F3CCDE]/20 shadow-lg hover:bg-[#4a2c52] transition-colors"
            >
              Let's Talk
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm text-[#F3CCDE] font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              My Works
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content - Images */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-[600px] w-full flex items-center justify-center"
        >
          {/* Images Container */}
          <div className="relative w-full h-full">
             {/* Photo 1 */}
            <motion.div 
              className="absolute top-10 right-10 w-64 h-80 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl rotate-6 z-10"
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
            >
              <img src={websitePhoto1} alt="Portfolio Work 1" className="w-full h-full object-cover" />
            </motion.div>

            {/* Photo 2 */}
            <motion.div 
              className="absolute bottom-20 left-10 w-64 h-80 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl -rotate-6 z-20"
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
            >
              <img src={websitePhoto2} alt="Portfolio Work 2" className="w-full h-full object-cover" />
            </motion.div>

            {/* Download CV Button */}
            <motion.div 
              className="absolute bottom-10 right-20 z-30 cursor-pointer"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
            >
               <div className="relative w-32 h-32 flex items-center justify-center">
                  <img src={downloadCvSvg} alt="Download CV" className="w-full h-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#D6A8C4] rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5B3765]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                  </div>
               </div>
            </motion.div>
            
            {/* Decorative Stars */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-0 left-20 text-[#D6A8C4] text-4xl"
            >
              ✦
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute bottom-40 right-0 text-[#D6A8C4] text-3xl"
            >
              ✦
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
