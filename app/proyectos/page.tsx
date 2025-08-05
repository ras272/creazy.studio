"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";

const projects = [
  {
    id: 1,
    title: "PORTFOLIO CREATIVO",
    category: "Sitio Web",
    description:
      "Portfolio web con diseño masonry dinámico para estudio de fotografía que triplicó sus clientes.",
    longDescription:
      "Desarrollamos un portfolio web con grid masonry responsive y animaciones suaves en Framer. El diseño moderno y la navegación intuitiva permitieron al estudio mostcar su trabajo de forma impactante, resultando en un aumento significativo de consultas comerciales.",
    image: "/mansory.png",
    color: "from-purple-500 to-pink-600",
    tags: ["Portfolio", "Framer", "Photography", "Responsive"],
    results: [
      "300% más consultas",
      "50+ proyectos destacados",
      "Awwwards Honorable Mention",
    ],
    year: "2025",
  },
  {
    id: 2,
    title: "Neobrutalist UI design",
    category: "Aplicación Web",
    description:
      "Plataforma integral de creación de contenido con IA que revolucionó el workflow de creadores digitales.",
    longDescription:
      "Desarrollamos una aplicación web completa con React y TypeScript que integra estudios especializados para audio, video, imagen y texto. La plataforma incluye herramientas de IA para mejora automática de contenido, interfaz intuitiva con componentes personalizados y integración con redes sociales, permitiendo a los creadores producir contenido de alta calidad de forma eficiente.",
    image: "/neo.jpg",
    color: "from-blue-500 to-purple-600",
    tags: ["React", "TypeScript", "AI Tools", "Content Creation"],
    results: [
      "10K+ creadores activos",
      "500% mejora en workflow",
      "Featured en Product Hunt",
    ],
    year: "2025",
  },
  {
    id: 3,
    title: "FONDANT E-COMMERCE",
    category: "E-commerce",
    description:
      "Plataforma de ecommerce con diseño moderno que revolucionó la experiencia de compra online.",
    longDescription:
      "Desarrollamos Fondant E-commerce con enfoque en simplicidad y velocidad. Diseñamos páginas de producto totalmente responsivas con navegación intuitiva, carga rápida y UX optimizada que facilita encontrar productos favoritos. La plataforma está diseñada para funcionar perfectamente en cualquier dispositivo, mejorando significativamente las conversiones y satisfacción del usuario.",
    image: "/fondant.png",
    color: "from-orange-500 to-red-500",
    tags: ["E-commerce", "Product Design", "Responsive", "UX/UI"],
    results: [
      "85% mejora en conversiones",
      "40% menos tiempo de carga",
      "95% satisfacción móvil",
    ],
    year: "2025",
  },
];

export default function ProyectosPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

        {/* Moving Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Navbar />

      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bricolage font-bold text-sm uppercase tracking-wider rounded-full">
                Nuestro Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-8xl font-bricolage font-black text-white mb-6 leading-tight"
            >
              Proyectos que
              <br />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400">
                rompen el internet
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-yellow-400/30 to-cyan-400/30 origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-white/80 font-bricolage max-w-3xl mx-auto leading-relaxed"
            >
              Cada proyecto es una obra maestra que desafía los límites de la
              creatividad. Desde startups disruptivas hasta marcas establecidas,
              transformamos ideas en experiencias épicas.
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section ref={ref} className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 100 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden rounded-2xl"
                >
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    {project.image !== "/api/placeholder/800/600" ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                      />
                    )}

                    {/* Year Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white font-bricolage text-xs uppercase tracking-wider rounded-full">
                      {project.year}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bricolage text-xs uppercase tracking-wider rounded-full">
                      {project.category}
                    </div>

                    {/* Hover Button */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={
                        hoveredProject === project.id
                          ? { opacity: 1 }
                          : { opacity: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="px-6 py-3 bg-white/90 backdrop-blur-sm text-black font-bricolage font-bold rounded-full shadow-lg"
                      >
                        Ver Proyecto
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bricolage font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-white/70 font-bricolage mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/10 text-white/80 font-bricolage text-xs uppercase tracking-wider border border-white/20 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Results Preview */}
                    <div className="text-sm text-white/60 font-bricolage">
                      <strong className="text-yellow-300">Resultados:</strong>{" "}
                      {project.results[0]}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-12 border border-white/10"
            >
              <h2 className="text-4xl lg:text-5xl font-bricolage font-black text-white mb-6">
                ¿Listo para ser el próximo
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  caso de éxito?
                </span>
              </h2>

              <p className="text-xl text-white/80 font-bricolage mb-8 max-w-2xl mx-auto">
                Únete a las marcas que ya están dominando su mercado con nuestro
                diseño épico.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
                className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bricolage font-bold text-xl rounded-full hover:shadow-2xl transition-all duration-300"
              >
                Empezar mi proyecto
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
