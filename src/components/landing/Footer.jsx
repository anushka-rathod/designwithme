import { motion } from 'framer-motion';
import instagramIcon from '../../assets/figma/instagram.png';
import linkedinIcon from '../../assets/figma/linkedin.png';
import websiteIcon from '../../assets/figma/website-icon.png';
import { Star } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="bg-[#5B3765] pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col items-center text-center gap-12 mb-24">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#F3CCDE]/10 backdrop-blur-sm border border-[#F3CCDE]/20 rounded-full px-8 py-3"
          >
            <div className="flex items-center gap-3">
              <Star className="w-4 h-4 text-[#F3CCDE] fill-[#F3CCDE] animate-pulse" />
              <span className="text-[#F3CCDE] font-semibold">Available For Opportunities</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-sora text-[#F3CCDE] max-w-4xl leading-tight">
            Let's work together to transform your ideas into design
          </h2>

          <motion.a
            href="https://www.linkedin.com/in/designwithanushka/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-[#F3CCDE] text-[#5B3765] text-xl font-bold rounded-full shadow-lg hover:bg-white transition-colors inline-block"
          >
            Hire Me Now
          </motion.a>
        </div>

        <div className="border-t border-[#F3CCDE]/20 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-4xl font-italianno text-white whitespace-nowrap">
            🎓Anushka.
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: instagramIcon, link: "https://www.instagram.com/_anushka.rathod_?igsh=YWg3OTZudXVqdGo5" },
              { icon: linkedinIcon, link: "https://www.linkedin.com/in/designwithanushka/" },
              { icon: websiteIcon, link: "#" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 bg-[#F3CCDE] rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <img src={social.icon} alt="Social" className="w-6 h-6 object-contain" />
              </motion.a>
            ))}
          </div>

          <div className="text-[#F3CCDE]/60 text-center md:text-right text-sm">
            <p>Let's create something meaningful together.</p>
            <p>Designed with care 🧡 © 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
