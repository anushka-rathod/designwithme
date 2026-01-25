import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brandStrategy from "/public/State-Level-Selection.jpg";
import posterDesign from "/public/State-Level-Selection.jpg";
import "../../index.css";

function Portfolio() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Graphic Design", "Marketing"];

  const projects = [
    {
      id: 1,
      title: "QuickHelp AI - Landing Page & Dashboard UI",
      category: "Graphic Design",
      image: "/State-Level-Selection.jpg", // PDF front page image
      pdf: "/State-Level-Selection.pdf", // actual PDF
      subtitle: "Landing Page & Dashboard UI Design",
    },
    {
      id: 2,
      title: "Stitch Sutra Identity",
      category: "Marketing",
      image: "/Stitch-Sutra.png",
      subtitle: "Modern Brand Strategy",
    },
    {
      id: 3,
      title: "Digital Marketing Agency",
      category: "Graphic Design",
      image: "/Digital.png", // PDF front page image
      pdf: "/Digitala.png",
      subtitle: "Futuristic Design",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-[#5B3765]">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <span className="text-[#9E6899] font-sora text-2xl tracking-wide uppercase">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-sora text-[#F3CCDE]">
            Projects that reflect my expertise and vision
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                filter === category
                  ? "bg-[#F3CCDE] text-[#5B3765] shadow-lg scale-105"
                  : "bg-white/10 text-[#F3CCDE] hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() =>
                  project.pdf && window.open(project.pdf, "_blank")
                }
                className="group relative rounded-[32px] overflow-hidden aspect-[4/3] cursor-pointer border-4 border-white/5"
              >
                {/* Image / PDF Preview */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* PDF Badge */}
                {project.pdf && (
                  <div className="absolute top-4 right-4 bg-[#F3CCDE] text-[#5B3765] px-4 py-1 rounded-full text-sm font-semibold">
                    View PDF
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B3765] via-[#5B3765]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-4 py-1 bg-[#D6A8C4] text-[#5B3765] rounded-full text-sm font-semibold mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-sora font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-[#F3CCDE] text-lg">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
