"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SEOSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const locations = [
    "Asunción", "Ciudad del Este", "San Lorenzo", "Luque", "Capiatá", 
    "Lambaré", "Fernando de la Mora", "Limpio", "Ñemby", "Mariano Roque Alonso"
  ];

  const services = [
    "Desarrollo Web", "Diseño de Páginas Web", "Aplicaciones Móviles", 
    "Marketing Digital", "SEO", "E-commerce", "Tiendas Online", 
    "Branding", "Diseño Gráfico", "Redes Sociales", "Google Ads", 
    "Consultoría Digital", "Mantenimiento Web", "Hosting", "Dominios"
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-bricolage font-black text-black mb-6"
          >
            Servicios Digitales en Todo Paraguay
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-black/70 font-bricolage max-w-3xl mx-auto"
          >
            Somos una agencia de desarrollo web y marketing digital con presencia en las principales ciudades de Paraguay. 
            Ofrecemos soluciones tecnológicas innovadoras para empresas, startups y emprendedores paraguayos.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bricolage font-bold text-black mb-6">
              🌍 Ciudades donde Trabajamos
            </h3>
            <p className="text-black/70 font-bricolage mb-6">
              Brindamos servicios de desarrollo web, diseño de aplicaciones móviles y marketing digital 
              en las principales ciudades de Paraguay:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {locations.map((location, index) => (
                <motion.div
                  key={location}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.05, duration: 0.5 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-black/80 font-bricolage text-sm">
                    {location}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bricolage font-bold text-black mb-6">
              🚀 Nuestros Servicios Especializados
            </h3>
            <p className="text-black/70 font-bricolage mb-6">
              Como agencia líder en tecnología digital en Paraguay, ofrecemos una amplia gama de servicios 
              para impulsar tu presencia online:
            </p>
            <div className="grid grid-cols-1 gap-2">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.03, duration: 0.5 }}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-black/80 font-bricolage text-sm">
                    {service} en Paraguay
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bricolage font-bold text-black mb-4">
            ¿Por qué elegir Creazy Studio como tu Agencia Digital en Paraguay?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-bricolage font-bold text-black mb-2">Experiencia Local</h4>
              <p className="text-black/70 font-bricolage text-sm">
                Conocemos el mercado paraguayo y las necesidades específicas de las empresas locales.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-bricolage font-bold text-black mb-2">Tecnología Avanzada</h4>
              <p className="text-black/70 font-bricolage text-sm">
                Utilizamos las últimas tecnologías para crear soluciones web y móviles de vanguardia.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-bricolage font-bold text-black mb-2">Soporte Continuo</h4>
              <p className="text-black/70 font-bricolage text-sm">
                Brindamos soporte técnico y mantenimiento continuo para todos nuestros proyectos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}