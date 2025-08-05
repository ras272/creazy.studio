"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string | null;
}

const services = [
  { name: "Diseño Web", icon: "🎨", color: "from-purple-500 to-pink-500" },
  { name: "Branding", icon: "⚡", color: "from-cyan-500 to-blue-500" },
  { name: "App Móvil", icon: "📱", color: "from-green-500 to-teal-500" },
  { name: "UX/UI", icon: "🚀", color: "from-orange-500 to-red-500" },
  {
    name: "Motion Graphics",
    icon: "🎬",
    color: "from-yellow-500 to-orange-500",
  },
  { name: "Consultoría", icon: "💡", color: "from-indigo-500 to-purple-500" },
];

const budgetRanges = [
  "< $5,000",
  "$5,000 - $15,000",
  "$15,000 - $30,000",
  "$30,000 - $50,000",
  "$50,000+",
];

export default function ContactModal({
  isOpen,
  onClose,
  preSelectedService,
}: ContactModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    services: [] as string[],
    budget: "",
    message: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSuccess(false);

      // Map service titles to modal service names
      const serviceMapping: { [key: string]: string } = {
        "Diseño Web & Apps": "Diseño Web",
        "Branding & Identidad": "Branding",
        "Desarrollo Frontend": "Diseño Web",
        "Experiencias Digitales": "UX/UI",
      };

      const mappedService = preSelectedService
        ? serviceMapping[preSelectedService] || preSelectedService
        : null;

      setFormData({
        name: "",
        email: "",
        company: "",
        services: mappedService ? [mappedService] : [],
        budget: "",
        message: "",
        timeline: "",
      });
    }
  }, [isOpen, preSelectedService]);

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);

    // Auto close after success
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email;
      case 2:
        return formData.services.length > 0;
      case 3:
        return formData.budget;
      case 4:
        return formData.message;
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            {/* Animated particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Gradient orbs */}
            <motion.div
              className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300"
          >
            <X size={20} />
          </motion.button>

          <div className="relative z-10 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bricolage font-bold text-sm uppercase tracking-wider rounded-full">
                  Paso {step} de 4
                </span>
              </motion.div>

              <motion.h2
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl lg:text-4xl font-bricolage font-black text-white mb-2"
              >
                {step === 1 && "¡Hola! Cuéntanos de ti"}
                {step === 2 && "¿Qué necesitas?"}
                {step === 3 && "¿Cuál es tu presupuesto?"}
                {step === 4 && "Cuéntanos tu proyecto"}
              </motion.h2>

              <motion.p
                key={`subtitle-${step}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white/70 font-bricolage"
              >
                {step === 1 && "Empecemos con lo básico para conocerte mejor"}
                {step === 2 &&
                  "Selecciona todos los servicios que te interesan"}
                {step === 3 && "Esto nos ayuda a crear la propuesta perfecta"}
                {step === 4 && "Comparte tu visión y hagámosla realidad"}
              </motion.p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                  initial={{ width: "25%" }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Form Steps */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-bricolage font-bold mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 font-bricolage focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-bricolage font-bold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 font-bricolage focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-bricolage font-bold mb-2">
                      Empresa (opcional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          company: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 font-bricolage focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {services.map((service, index) => (
                    <motion.button
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleServiceToggle(service.name)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        formData.services.includes(service.name)
                          ? `bg-gradient-to-r ${service.color} border-transparent text-white`
                          : "bg-white/5 border-white/20 text-white hover:border-white/40"
                      }`}
                    >
                      <div className="text-2xl mb-2">{service.icon}</div>
                      <div className="font-bricolage font-bold text-sm">
                        {service.name}
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-4"
                >
                  {budgetRanges.map((budget, index) => (
                    <motion.button
                      key={budget}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, budget }))
                      }
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                        formData.budget === budget
                          ? "bg-gradient-to-r from-yellow-400 to-orange-500 border-transparent text-black"
                          : "bg-white/5 border-white/20 text-white hover:border-white/40"
                      }`}
                    >
                      <div className="font-bricolage font-bold text-lg">
                        {budget}
                      </div>
                    </motion.button>
                  ))}

                  <div className="mt-6">
                    <label className="block text-white font-bricolage font-bold mb-2">
                      Timeline del proyecto
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          timeline: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-bricolage focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                    >
                      <option value="">Selecciona un timeline</option>
                      <option value="ASAP">Lo antes posible</option>
                      <option value="1-2 weeks">1-2 semanas</option>
                      <option value="1 month">1 mes</option>
                      <option value="2-3 months">2-3 meses</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-white font-bricolage font-bold mb-2">
                      Cuéntanos sobre tu proyecto *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 font-bricolage focus:outline-none focus:border-yellow-400 transition-colors duration-300 resize-none"
                      placeholder="Describe tu proyecto, objetivos, inspiraciones, o cualquier detalle que consideres importante..."
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevStep}
                disabled={step === 1}
                className={`px-6 py-3 font-bricolage font-bold rounded-full transition-all duration-300 ${
                  step === 1
                    ? "bg-white/10 text-white/50 cursor-not-allowed"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Anterior
              </motion.button>

              {step < 4 ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`px-8 py-3 font-bricolage font-bold rounded-full transition-all duration-300 ${
                    canProceed()
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-lg"
                      : "bg-white/10 text-white/50 cursor-not-allowed"
                  }`}
                >
                  Siguiente
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className={`px-8 py-3 font-bricolage font-bold rounded-full transition-all duration-300 ${
                    canProceed() && !isSubmitting
                      ? "bg-gradient-to-r from-green-400 to-green-600 text-white hover:shadow-lg"
                      : "bg-white/10 text-white/50 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    "🚀 Enviar Proyecto"
                  )}
                </motion.button>
              )}
            </div>
          </div>

          {/* Success State */}
          <AnimatePresence>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 bg-gradient-to-br from-green-900/95 to-green-800/95 backdrop-blur-sm flex items-center justify-center text-center p-8"
              >
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", damping: 15 }}
                    className="text-6xl mb-4"
                  >
                    🎉
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-bricolage font-black text-white mb-4"
                  >
                    ¡Mensaje Enviado!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-white/80 font-bricolage text-lg"
                  >
                    Te contactaremos en menos de 24 horas con una propuesta
                    épica.
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
