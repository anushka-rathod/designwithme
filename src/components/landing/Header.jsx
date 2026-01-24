import { motion } from 'framer-motion';

function Header() {
  const navItems = ['Home', 'About', 'Services', 'Portfolio'];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-16"
    >
      <div className="text-4xl font-italianno text-white">
        🎓Anushka.
      </div>

      <nav className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1.5">
        {navItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              index === 0 
                ? 'bg-purple-light text-purple-dark' 
                : 'text-purple-light hover:bg-white/10'
            }`}
          >
            {item.toUpperCase()}
          </a>
        ))}
      </nav>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block px-6 py-3 bg-purple-light text-purple-dark font-semibold rounded-full text-sm"
      >
        CONTACT ME
      </motion.a>

      <button className="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </motion.header>
  );
}

export default Header; 
