'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaExternalLinkAlt, FaPlay } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'NEON DREAMS',
    category: 'Branding Y2K',
    description: 'Identidad visual completa para marca de streetwear futurista',
    image: '/api/placeholder/600/400',
    color: 'neon-pink',
    tags: ['Branding', 'Y2K', 'Streetwear']
  },
  {
    id: 2,
    title: 'CYBER EATS',
    category: 'App Móvil',
    description: 'App de delivery con interfaz holográfica y experiencia inmersiva',
    image: '/api/placeholder/600/400',
    color: 'neon-cyan',
    tags: ['UI/UX', 'Mobile', 'Food Tech']
  },
  {
    id: 3,
    title: 'RETRO WAVE',
    category: 'Sitio Web',
    description: 'Landing page interactiva para festival de música electrónica',
    image: '/api/placeholder/600/400',
    color: 'neon-green',
    tags: ['Web Design', 'Music', 'Interactive']
  },
  {
    id: 4,
    title: 'GLITCH FASHION',
    category: 'E-commerce',
    description: 'Tienda online con efectos glitch y animaciones épicas',
    image: '/api/placeholder/600/400',
    color: 'neon-purple',
    tags: ['E-commerce', 'Fashion', 'Glitch']
  },
  {
    id: 5,
    title: 'MATRIX CORP',
    category: 'Identidad Corporativa',
    description: 'Rebranding completo para empresa tech con estética cyberpunk',
    image: '/api/placeholder/600/400',
    color: 'neon-yellow',
    tags: ['Corporate', 'Tech', 'Cyberpunk']
  },
  {
    id: 6,
    title: 'VIRTUAL REALITY',
    category: 'Motion Graphics',
    description: 'Video promocional con animaciones 3D y efectos holográficos',
    image: '/api/placeholder/600/400',
    color: 'neon-pink',
    tags: ['Motion', '3D', 'VR']
  }
]

export default function ProjectShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-32 relative overflow-hidden" id="proyectos">
      {/* Green to pink gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-cyan-500 to-purple-600" />
      
      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-16 left-16 w-32 h-32 bg-yellow-300/20 rounded-full"
        animate={{ 
          scale: [1, 1.4, 1],
          rotate: [0, 360, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-16 right-16 w-24 h-24 bg-white/10 rotate-45"
        animate={{ 
          rotate: [45, 405, 45],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bricolage font-black mb-6 text-white"
          >
            <span className="text-white">NUESTROS</span>{' '}
            <span className="text-yellow-300">PROYECTOS</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-white/90 max-w-3xl mx-auto font-bricolage"
          >
            Cada proyecto es una{' '}
            <span className="text-yellow-300 font-bold">OBRA MAESTRA</span> que
            rompe límites y redefine lo posible
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)'
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-300/50 transition-all duration-500 overflow-hidden rounded-2xl"
            >
              {/* Project image placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                {/* Animated background */}
                <motion.div
                  animate={hoveredProject === project.id ? {
                    background: [
                      `linear-gradient(45deg, ${project.color === 'neon-pink' ? '#ff0080' : project.color === 'neon-cyan' ? '#00ffff' : project.color === 'neon-green' ? '#39ff14' : project.color === 'neon-purple' ? '#bf00ff' : '#ffff00'}20, transparent)`,
                      `linear-gradient(225deg, ${project.color === 'neon-pink' ? '#ff0080' : project.color === 'neon-cyan' ? '#00ffff' : project.color === 'neon-green' ? '#39ff14' : project.color === 'neon-purple' ? '#bf00ff' : '#ffff00'}20, transparent)`,
                      `linear-gradient(45deg, ${project.color === 'neon-pink' ? '#ff0080' : project.color === 'neon-cyan' ? '#00ffff' : project.color === 'neon-green' ? '#39ff14' : project.color === 'neon-purple' ? '#bf00ff' : '#ffff00'}20, transparent)`
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0"
                />
                
                {/* Play button overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={hoveredProject === project.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center bg-dark-900/80"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 rounded-full bg-yellow-300/20 border-2 border-yellow-300 flex items-center justify-center cursor-pointer"
                  >
                    <FaPlay className="text-2xl text-yellow-300 ml-1" />
                  </motion.div>
                </motion.div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-300/20 border border-yellow-300 text-yellow-300 font-bricolage text-xs uppercase tracking-wider rounded-full">
                  {project.category}
                </div>

                {/* External link */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={hoveredProject === project.id ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4"
                >
                  <FaExternalLinkAlt className="text-white hover:text-yellow-300 cursor-pointer" />
                </motion.div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-2xl font-bricolage font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/80 font-bricolage mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white/10 text-white/80 font-bricolage text-xs uppercase tracking-wider border border-white/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={hoveredProject === project.id ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 to-cyan-300/10 pointer-events-none rounded-2xl"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-white text-purple-600 font-bricolage font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            VER TODOS LOS PROYECTOS
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}