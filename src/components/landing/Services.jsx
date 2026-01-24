import { motion } from 'framer-motion';
import { Monitor, Lightbulb, Package, TrendingUp } from 'lucide-react';
import '../../index.css';

function Services() {
  const services = [
    {
      icon: <Monitor className="w-10 h-10 text-[#5B3765]" />,
      title: "UI/UX Design Services",
      description: "Creating clean, modern, and visually consistent interfaces for websites and mobile apps, focused on clarity and ease of use."
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-[#5B3765]" />,
      title: "Brand Strategy",
      description: "Understanding the brand's vision, goals, and target audience to create designs that communicate the right message."
    },
    {
      icon: <Package className="w-10 h-10 text-[#5B3765]" />,
      title: "Packaging Design",
      description: "Creating packaging concepts that reflect the brand's identity, values, and target audience."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#5B3765]" />,
      title: "SEO & Marketing",
      description: "Designing SEO-friendly website structures with clean layouts, proper headings, and user-focused content flow."
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#4E2F56]">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <span className="text-[#9E6899] font-sora text-2xl tracking-wide uppercase">Services</span>
          <h2 className="text-4xl md:text-5xl font-sora text-[#F3CCDE]">My Specialties</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#F3CCDE] p-8 rounded-[32px] flex flex-col gap-6 group hover:bg-white transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center group-hover:bg-[#F3CCDE] transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-sora font-semibold text-[#5B3765]">
                {service.title}
              </h3>
              
              <p className="text-[#5B3765]/80 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
