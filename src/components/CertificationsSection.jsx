import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, X } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Arch Linux desde Cero",
    issuer: "Hack4u",
    date: "23 de marzo, 2026",
    color: "from-cyan-500 to-blue-600",
    icon: "🐧",
    status: "Completado",
    description:
      "Instalación y configuración completa de Arch Linux desde cero",
    imageUrl: "/certificados/Personalización Linux Hack4u.jpg",
  },
  {
    id: 2,
    title: "Introducción a Linux",
    issuer: "Hack4u",
    date: "En Progreso",
    color: "from-orange-500 to-red-500",
    icon: "🔧",
    status: "En Progreso",
    description: "Fundamentos de Linux y línea de comandos",
  },
];

export default function CertificationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + certificates.length) % certificates.length,
    );
  };

  // Para mostrar múltiples certificados en desktop
  const getVisibleCertificates = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const itemsToShow = isMobile ? 1 : Math.min(2, certificates.length);
    const visible = [];

    for (let i = 0; i < itemsToShow; i++) {
      visible.push(certificates[(currentIndex + i) % certificates.length]);
    }

    return visible;
  };

  return (
    <section
      id="certificates"
      className="relative w-full max-w-6xl mx-auto mt-32 mb-20 px-4 scroll-mt-24"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 w-fit"
        >
          <Award className="h-3.5 w-3.5" />
          Certificaciones
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white"
        >
          Certificaciones de{" "}
          <span className="gradient-text">aprendizaje continuo.</span>
        </motion.h2>

        <p className="text-base md:text-lg text-neutral-400 max-w-2xl">
          Cursos completados y en progreso de plataformas especializadas en
          ciberseguridad y ethical hacking.
        </p>
      </div>

      {/* Carrusel */}
      <div className="relative">
        {/* Contenedor del carrusel */}
        <div className="overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full"
            >
              {getVisibleCertificates().map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() =>
                    cert.status === "Completado" &&
                    cert.imageUrl &&
                    setSelectedCert(cert)
                  }
                  className={`group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-white/10 to-white/5 p-6 md:p-8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 h-full ${
                    cert.status === "Completado" && cert.imageUrl
                      ? "cursor-pointer hover:scale-105"
                      : ""
                  }`}
                >
                  {/* Fondo con gradiente */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                  />

                  {/* Contenido */}
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    {/* Icono y Badge */}
                    <div className="mb-4">
                      <div className="text-4xl mb-3">{cert.icon}</div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${cert.color}`}
                      >
                        {cert.status === "Completado"
                          ? "✓ Completado"
                          : "📚 En Progreso"}
                      </span>
                      {cert.status === "Completado" && cert.imageUrl && (
                        <span className="ml-2 text-xs text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
                          (Click para ver)
                        </span>
                      )}
                    </div>

                    {/* Texto */}
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-neutral-400 mb-3">
                        {cert.issuer}
                      </p>
                      {cert.description && (
                        <p className="text-xs text-neutral-500 mb-3 line-clamp-2">
                          {cert.description}
                        </p>
                      )}
                      <p className="text-xs text-neutral-600">{cert.date}</p>
                    </div>
                  </div>

                  {/* Decoración */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Botones de Navegación */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => paginate(-1)}
            className="p-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Indicadores */}
          <div className="flex gap-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const diff = index - currentIndex;
                  setDirection(diff > 0 ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-cyan-400"
                    : "w-2 bg-neutral-600 hover:bg-neutral-500"
                }`}
                aria-label={`Certificado ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="p-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Contador */}
        <div className="text-center mt-6 text-sm text-neutral-500">
          {currentIndex + 1} de {certificates.length}
        </div>
      </div>

      {/* Modal de Certificado */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-black rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-500/50"
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-black/90 border border-cyan-500/50 text-cyan-300 transition-all"
                aria-label="Cerrar"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Contenedor de imagen */}
              <div className="relative w-full bg-gradient-to-b from-cyan-500/10 to-transparent p-4 sm:p-8">
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Info del certificado */}
              <div className="p-6 sm:p-8 border-t border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-cyan-300 font-semibold mb-3">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
                <p className="text-neutral-400">{selectedCert.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
