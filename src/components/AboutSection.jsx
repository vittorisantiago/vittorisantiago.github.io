import { motion } from "framer-motion";
import { Sparkles, Code2, Zap, Layers } from "lucide-react";

// Tarjetas
const highlights = [
  { title: "Arquitectura Sólida", icon: Code2 },
  { title: "Experiencia de Usuario", icon: Sparkles },
  { title: "Adaptabilidad", icon: Zap },
  { title: "Visión Integral", icon: Layers },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full max-w-6xl mx-auto mt-24 mb-16 scroll-mt-32 px-4 sm:px-6"
    >
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-12 shadow-2xl shadow-black/40">
        {/* Fondo sutil */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_-10%,rgba(56,189,248,0.1),transparent_60%),radial-gradient(ellipse_80%_80%_at_80%_10%,rgba(139,92,246,0.1),transparent_60%)]" />

        <div className="relative grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Columna de Texto */}
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-cyan-300 sm:text-xs"
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
                Ingeniería de software con{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  visión de producto.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl"
              >
                Más que escribir código, construyo soluciones. Combino
                pensamiento analítico con una ejecución práctica para crear
                productos digitales que aportan valor real. Me caracterizo por
                la curiosidad técnica y la capacidad de resolver desafíos
                complejos con un enfoque simple y efectivo.
              </motion.p>
            </div>

            {/* Grid de Tarjetas */}
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 pt-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + 0.05 * index }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 sm:p-5 transition-colors hover:bg-white/10 hover:border-white/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white/15 to-transparent text-cyan-200 group-hover:text-cyan-100 transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-50 transition-colors">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Columna de Imagen */}
          <div className="relative flex items-center justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden ring-1 ring-white/5">
                <img
                  src="/personal nueva liviana.jpg"
                  alt="Santiago Vittori"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
