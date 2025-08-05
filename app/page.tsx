'use client'

import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import WhatWeDoSection from './components/WhatWeDoSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-cyber-grid bg-grid opacity-20 animate-pulse-neon pointer-events-none" />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="fixed top-20 left-10 w-20 h-20 border-2 border-neon-pink rotate-45 opacity-30"
        animate={{ 
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="fixed top-1/3 right-20 w-16 h-16 border-2 border-neon-cyan rounded-full opacity-30"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="fixed bottom-1/4 left-1/4 w-12 h-12 bg-neon-green opacity-20 rotate-12"
        animate={{ 
          rotate: [12, 192, 12],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      <Footer />
    </main>
  )
}