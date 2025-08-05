"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background from Bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
        }}
      />
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        id="inicio"
      >
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Small tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-yellow-300 text-pink-600 font-bricolage font-bold text-sm uppercase tracking-wider rounded-full">
                Creazy Studio.
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl lg:text-8xl xl:text-9xl font-bricolage font-black leading-tight text-black"
            >
              <span className="font-black">Creatividad</span> <br />
              <span className="relative font-black">
                crazy good.
                {/* Underline effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-1 md:bottom-2 left-0 right-0 h-1 md:h-2 bg-yellow-300 origin-left"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl lg:text-2xl text-black/80 font-bricolage max-w-2xl mx-auto leading-relaxed"
            >
              Diseño web y de apps para startups <br />
              que quieren destacar del resto.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="pt-8"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black text-white font-bricolage font-bold text-lg rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg"
              >
                Book a Call
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Side text element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block"
        >
          <div className="writing-mode-vertical text-black/60 font-bricolage text-sm uppercase tracking-widest">
            CREAZY STUDIO
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-black/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-black/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
