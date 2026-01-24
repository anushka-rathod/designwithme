
import { motion } from 'framer-motion';
import testimonialAna from '../../assets/figma/testimonial-ana.png';
import testimonialJhon from '../../assets/figma/testimonial-jhin.png';
import '../../index.css';
function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ana",
      role: "Project Manager",
      image: testimonialAna,
      text: "She did a great job translating our ideas into a well-structured and visually pleasing design. The process was simple, and the final output met our expectations."
    },
    {
      id: 2,
      name: "Jhon",
      role: "Project Manager",
      image: testimonialJhon,
      text: "She did a great job translating our ideas into a well-structured and visually pleasing design. The process was simple, and the final output met our expectations."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#4E2F56]">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <span className="text-[#9E6899] font-sora text-2xl tracking-wide uppercase">TESTIMONIAL</span>
          <h2 className="text-4xl md:text-5xl font-sora text-[#F3CCDE]">What client say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#F3CCDE] p-8 rounded-[32px] relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#5B3765]">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-sora font-bold text-[#5B3765]">{testimonial.name}</h3>
                  <p className="text-[#5B3765]/70">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-[#5B3765] text-lg leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="absolute top-8 right-8 text-[#5B3765]/10 text-8xl font-serif leading-none">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;