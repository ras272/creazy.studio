'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import ContactModal from './ContactModal'

const socialLinks = [
  { name: 'Instagram', icon: '📸', url: '#', color: 'from-pink-500 to-purple-500' },
  { name: 'Behance', icon: '🎨', url: '#', color: 'from-blue-500 to-cyan-500' },
  { name: 'Dribbble', icon: '🏀', url: '#', color: 'from-pink-400 to-red-500' },
  { name: 'LinkedIn', icon: '💼', url: '#', color: 'from-blue-600 to-blue-800' },
  { name: 'Twitter', icon: '🐦', url: '#', color: 'from-cyan-400 to-blue-500' }
]

const quickLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' }
]

const services = [
  'Diseño Web',
  'Branding',
  'Apps Móviles',
  'UX/UI Design',
  'Motion Graphics',
  'Consultoría'
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <footer ref={ref} className="relative overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        
        {/* Moving particles */}
        {[...Array(50)].map((_, i) => (
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
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-yellow-300/20 rotate-45"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <Image 
                src="/upscalemedia-transformed-removebg-preview.png" 
                alt="Creazy Studio Logo" 
                width={200}
                height={60}
                className="h-16 w-auto"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white/80 font-bricolage text-lg leading-relaxed mb-8 max-w-md"
            >
              Somos el estudio creativo que transforma ideas locas en 
              <span className="text-yellow-300 font-bold"> experiencias digitales épicas</span>. 
              ¿Listo para la revolución?
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white text-xl hover:shadow-lg transition-all duration-300`}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bricolage font-bold text-white mb-6 relative">
              Navegación
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-300 to-transparent origin-left"
              />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-yellow-300 font-bricolage transition-colors duration-300 flex items-center group"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      →
                    </motion.span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bricolage font-bold text-white mb-6 relative">
              Servicios
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-300 to-transparent origin-left"
              />
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="text-white/70 font-bricolage hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bricolage font-bold text-white mb-4">
              🚀 ¡Únete a la revolución creativa!
            </h3>
            <p className="text-white/80 font-bricolage mb-6 max-w-2xl mx-auto">
              Recibe tips exclusivos, proyectos épicos y ofertas especiales directo en tu inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 font-bricolage focus:outline-none focus:border-yellow-300 transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bricolage font-bold rounded-full hover:shadow-lg transition-all duration-300"
              >
                ¡Empezar proyecto!
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-white/60 font-bricolage mb-4 md:mb-0">
            © 2025 Creazy Studio. Todos los derechos reservados. 
            <span className="text-yellow-300"> Hecho con 💜 y mucha locura</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white font-bricolage transition-colors duration-300">
              Privacidad
            </a>
            <a href="#" className="text-white/60 hover:text-white font-bricolage transition-colors duration-300">
              Términos
            </a>
            <a href="#" className="text-white/60 hover:text-white font-bricolage transition-colors duration-300">
              Cookies
            </a>
          </div>
        </motion.div>

        {/* Floating "Back to Top" Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 z-50"
        >
          ↑
        </motion.button>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </footer>
  )
}