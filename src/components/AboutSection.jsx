import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full max-w-6xl mx-auto mt-24 mb-16 scroll-mt-32 px-4 sm:px-6"
    >
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-cyan-500/20 bg-white/5 p-6 sm:p-8 md:p-12 shadow-2xl shadow-black/40 backdrop-blur">
        {/* Fondo sutil con acentos cyan */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_-10%,rgba(0,217,255,0.1),transparent_60%),radial-gradient(ellipse_80%_80%_at_80%_10%,rgba(255,107,53,0.08),transparent_60%)]" />

        <div className="relative grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Columna de Texto */}
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-cyan-300 sm:text-xs"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Sobre mí
            </motion.div>

            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl leading-tight sm:text-3xl md:text-5xl font-bold tracking-tight text-white text-balance"
              >
                Ingeniero en Sistemas orientado a{" "}
                <span className="gradient-text">Ciberseguridad.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl"
              >
                Ingeniero en Sistemas con experiencia en desarrollo web,
                orientando mi perfil hacia la Ciberseguridad. Utilizo entornos
                Linux y desarrollo scripts en Python para automatizar procesos.
                Actualmente me encuentro en constante aprendizaje sobre
                metodologías de pentesting y busco una primera oportunidad en el
                área para sumar experiencia, trabajar en equipo y seguir
                aprendiendo.
              </motion.p>
            </div>
          </div>

          {/* Columna de Imagen */}
          <div className="relative flex items-center justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500/20 to-orange-500/20 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full border border-cyan-500/30 bg-[#0f0f1e] shadow-2xl overflow-hidden ring-1 ring-cyan-500/10">
                <img
                  src="/personal nueva liviana.jpg"
                  alt="Santiago Vittori"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
