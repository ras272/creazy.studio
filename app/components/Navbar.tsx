'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import ContactModal from './ContactModal'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determinar si el navbar debe estar oculto
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling hacia abajo y pasó los 100px
        setHidden(true)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling hacia arriba
        setHidden(false)
      }
      
      // Determinar si debe tener fondo
      setScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 overflow-visible">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center relative z-10"
          >
            <Image 
              src="/upscalemedia-transformed-removebg-preview.png" 
              alt="Creazy Studio Logo" 
              width={400}
              height={120}
              className="h-32 w-auto"
              onError={() => console.log('Logo failed to load')}
            />
          </motion.div>

          {/* Menu items */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              href="/#inicio"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}
              className="text-white hover:text-yellow-300 transition-colors duration-300 font-bricolage uppercase tracking-wider text-sm"
            >
              Inicio
            </motion.a>
            <motion.a
              href="/#servicios"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}
              className="text-white hover:text-yellow-300 transition-colors duration-300 font-bricolage uppercase tracking-wider text-sm"
            >
              Servicios
            </motion.a>
            <motion.a
              href="/proyectos"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}
              className="text-white hover:text-yellow-300 transition-colors duration-300 font-bricolage uppercase tracking-wider text-sm"
            >
              Proyectos
            </motion.a>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsContactModalOpen(true)}
            className="px-6 py-2 bg-white text-black font-bricolage font-bold text-sm rounded-full hover:bg-gray-100 transition-all duration-300"
          >
            CONTACTAR
          </motion.button>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </motion.nav>
  )
}