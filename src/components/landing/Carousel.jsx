import { motion } from 'framer-motion';

function Carousel() {
  const items = [
    "Statistical Analysis", "Business Intelligence", "Machine Learning Solutions", "Data Visualization",
    "Statistical Analysis", "Business Intelligence", "Machine Learning Solutions", "Data Visualization",
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#F3CCDE] to-[#D6A8C4] py-8 overflow-hidden border-y-4 border-[#1E5571] mt-20">
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex items-center gap-12 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="text-3xl md:text-4xl font-sora font-bold text-[#1E5571] uppercase tracking-wider">
                {item}
              </span>
              <span className="text-2xl text-[#F3CCDE] bg-[#1E5571] p-2 rounded-full">
                ★
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
