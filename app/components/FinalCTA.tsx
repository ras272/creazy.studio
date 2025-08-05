"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Lottie from "lottie-react";
import { FaWhatsapp, FaRocket, FaBolt } from "react-icons/fa";

// Placeholder para la animación Lottie del CTA
const ctaAnimationData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 120,
  w: 400,
  h: 400,
  nm: "CTA Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Rocket",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 119, s: [360] },
          ],
        },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [200, 300, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 60,
              s: [200, 100, 0],
            },
            { t: 119, s: [200, 300, 0] },
          ],
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [60, 80] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 10 },
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0, 0.5, 1] },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 120,
      st: 0,
    },
  ],
};

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa trabajar con Creazy Studio. ¿Podemos hablar sobre mi proyecto?"
    );
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  return (
    <section ref={ref} className="py-32 relative overflow-hidden" id="contacto">
      {/* Vibrant gradient background similar to hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-500" />

      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-28 h-28 bg-yellow-300/20 rotate-12"
        animate={{
          rotate: [12, 372, 12],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-10 w-20 h-20 bg-cyan-300/20 rotate-45"
        animate={{
          rotate: [45, 405, 45],
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main title */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bricolage font-black leading-tight text-white"
            >
              <span className="text-white">¿LISTO PARA</span>
              <br />
              <span className="text-yellow-300">ALGO ÉPICO?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-white/90 font-bricolage leading-relaxed"
            >
              No esperes más para{" "}
              <span className="text-yellow-300 font-bold">REVOLUCIONAR</span> tu
              marca. Hablemos y creemos algo que{" "}
              <span className="text-cyan-300 font-bold">ROMPA EL INTERNET</span>
            </motion.p>

            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4"
            >
              {[
                { icon: FaRocket, text: "Consulta gratuita de 30 minutos" },
                { icon: FaBolt, text: "Propuesta personalizada en 24h" },
                { icon: FaWhatsapp, text: "Comunicación directa por WhatsApp" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-yellow-300/20 border-2 border-yellow-300 rounded-full flex items-center justify-center">
                    <feature.icon className="text-yellow-300 text-xl" />
                  </div>
                  <span className="text-white font-bricolage text-lg">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 pt-8"
            >
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 50px rgba(37, 211, 102, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bricolage font-bold uppercase tracking-wider transition-all duration-300 text-lg"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)",
                }}
              >
                <FaWhatsapp className="inline-block mr-3 text-2xl" />
                HABLAR POR WHATSAPP
                {/* Animated border */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(37, 211, 102, 0.5)",
                      "0 0 40px rgba(37, 211, 102, 0.8)",
                      "0 0 20px rgba(37, 211, 102, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)",
                  }}
                />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 font-bricolage font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                VER PORTAFOLIO
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Decorative element */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Large decorative circle */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-80 h-80 border-4 border-yellow-300/30 rounded-full flex items-center justify-center"
              >
                {/* Inner elements */}
                <motion.div
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-40 h-40 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-20 h-20 bg-yellow-300/40 rounded-full"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-cyan-300/20 blur-3xl animate-pulse" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-300/10 to-purple-300/10 blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-20 pt-16 border-t border-neon-cyan/20"
        >
          <p className="text-white/80 font-bricolage text-lg mb-4">
            ¿Tienes dudas? ¡No hay problema!
          </p>
          <p className="text-yellow-300 font-bricolage text-xl">
            📧 hola@creazystudio.com | 📱 +1 (555) 123-4567
          </p>
        </motion.div>
      </div>
    </section>
  );
}
