'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import ContactModal from './ContactModal'

const services = [
  {
    title: 'Diseño Web & Apps',
    description: 'Sitios web modernos y aplicaciones móviles que convierten visitantes en clientes.',
    features: ['Responsive Design', 'UX/UI Optimizado', 'Performance'],
    gradient: 'from-purple-500 to-pink-500',
    icon: '🎨',
    bgPattern: 'dots'
  },
  {
    title: 'Branding & Identidad',
    description: 'Creamos marcas memorables que destacan en un mercado saturado.',
    features: ['Logo Design', 'Identidad Visual', 'Brand Guidelines'],
    gradient: 'from-cyan-500 to-blue-500',
    icon: '⚡',
    bgPattern: 'grid'
  },
  {
    title: 'Desarrollo Frontend',
    description: 'Código limpio y moderno con las últimas tecnologías del mercado.',
    features: ['React/Next.js', 'Animaciones', 'SEO Optimizado'],
    gradient: 'from-green-500 to-teal-500',
    icon: '💻',
    bgPattern: 'waves'
  },
  {
    title: 'Experiencias Digitales',
    description: 'Prototipos interactivos y consultoría UX para productos digitales.',
    features: ['Prototipos', 'Design Systems', 'Consultoría UX'],
    gradient: 'from-orange-500 to-red-500',
    icon: '🚀',
    bgPattern: 'circles'
  }
]

export default function WhatWeDoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsContactModalOpen(true)
  }

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden" id="servicios">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-purple-100 text-purple-600 font-bricolage font-bold text-sm uppercase tracking-wider rounded-full">
              Nuestros Servicios
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bricolage font-black text-black mb-6 leading-tight"
          >
            Transformamos ideas en
            <br />
            <span className="relative">
              experiencias digitales
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-1 md:bottom-2 left-0 right-0 h-1 md:h-2 bg-yellow-300 origin-left"
              />
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-black/70 font-bricolage max-w-2xl mx-auto"
          >
            Cada proyecto es una oportunidad de crear algo extraordinario que conecte con tu audiencia.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  {service.bgPattern === 'dots' && (
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }} />
                  )}
                  {service.bgPattern === 'grid' && (
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }} />
                  )}
                  {service.bgPattern === 'waves' && (
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #10b981 10px, #10b981 11px)',
                    }} />
                  )}
                  {service.bgPattern === 'circles' && (
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 25% 25%, #f97316 2px, transparent 2px), radial-gradient(circle at 75% 75%, #ef4444 2px, transparent 2px)',
                      backgroundSize: '30px 30px'
                    }} />
                  )}
                </div>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient}`}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Service number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        {service.icon}
                      </div>
                      <span className="text-5xl font-bricolage font-black text-gray-200 group-hover:text-gray-300 transition-colors duration-500">
                        0{index + 1}
                      </span>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.gradient} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bricolage font-bold text-black mb-4 group-hover:text-black transition-colors duration-500">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-black/70 font-bricolage mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-bricolage rounded-full group-hover:bg-gray-200 transition-colors duration-500"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleServiceClick(service.title)}
                    className={`px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-bricolage font-bold rounded-full hover:shadow-lg transition-all duration-300`}
                  >
                    Saber más
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-black/70 font-bricolage mb-6">
            ¿Tienes un proyecto en mente?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsContactModalOpen(true)}
            className="px-8 py-4 bg-black text-white font-bricolage font-bold text-lg rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg"
          >
            Hablemos de tu proyecto
          </motion.button>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        preSelectedService={selectedService}
      />
    </section>
  )
}