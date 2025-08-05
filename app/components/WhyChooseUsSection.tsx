'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { number: "150+", label: "Proyectos Exitosos", icon: "🚀" },
  { number: "98%", label: "Clientes Satisfechos", icon: "⭐" },
  { number: "24h", label: "Primera Propuesta", icon: "⚡" },
  { number: "3x", label: "Más Conversiones", icon: "📈" }
]

const benefits = [
  {
    title: "Resultados Garantizados",
    description: "Trabajamos hasta que estés 100% satisfecho con los resultados. Tu éxito es nuestro éxito.",
    icon: "💎"
  },
  {
    title: "Entrega Express",
    description: "Tu proyecto listo en tiempo récord sin sacrificar calidad.",
    icon: "🔥"
  },
  {
    title: "Soporte 24/7",
    description: "Estamos aquí cuando nos necesites, sin excepciones.",
    icon: "🛡️"
  }
]

export default function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-400" id="por-que-elegirnos">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-black text-yellow-400 font-bricolage font-bold text-sm uppercase tracking-wider rounded-full">
              ¿Por qué Creazy Studio?
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bricolage font-black text-black mb-6 leading-tight"
          >
            Mientras otros prometen,
            <br />
            <span className="relative">
              nosotros entregamos resultados
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-black/20 origin-left"
              />
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-black/80 font-bricolage max-w-2xl mx-auto"
          >
            No somos otro estudio más. Somos tu arma secreta para dominar tu mercado.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
              className="text-center bg-black/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-black/20 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-bricolage font-black text-black mb-1">
                {stat.number}
              </div>
              <div className="text-sm font-bricolage text-black/70 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/20 transition-all duration-500 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bricolage font-bold text-black mb-4">
                  {benefit.title}
                </h3>
                <p className="text-black/70 font-bricolage leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl text-black">⭐</span>
            ))}
          </div>
          <blockquote className="text-xl font-bricolage text-black/90 mb-4 italic">
            "Creazy Studio transformó completamente nuestro negocio. En 2 meses aumentamos las ventas un 300%. Son increíbles."
          </blockquote>
          <cite className="text-black/70 font-bricolage font-bold">
            — María González, CEO de TechStart
          </cite>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-lg font-bricolage text-black/80 mb-6">
            <strong>Solo trabajamos con 5 clientes por mes.</strong> ¿Quieres ser uno de ellos?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-black text-yellow-400 font-bricolage font-bold text-xl rounded-full hover:bg-gray-800 transition-all duration-300 shadow-2xl"
          >
            Reservar mi lugar ahora
          </motion.button>
          <p className="text-sm font-bricolage text-black/60 mt-4">
            ⚡ Respuesta en menos de 2 horas
          </p>
        </motion.div>
      </div>

      {/* Side text element */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block"
      >
        <div className="writing-mode-vertical text-black/60 font-bricolage text-sm uppercase tracking-widest">
          RESULTADOS REALES
        </div>
      </motion.div>
    </section>
  )
}