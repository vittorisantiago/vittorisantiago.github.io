import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket, ShieldCheck } from "lucide-react";

const highlights = [
  {
    title: "Detalle obsesivo",
    description: "Microinteracciones y UI pulida en cada entrega.",
    icon: Sparkles,
  },
  {
    title: "Código limpio",
    description: "Arquitectura simple, escalable y fácil de mantener.",
    icon: Code2,
  },
  {
    title: "Entrega veloz",
    description: "Itero rápido con foco en resultados medibles.",
    icon: Rocket,
  },
  {
    title: "Confiable",
    description: "Buenas prácticas, testing y performance real.",
    icon: ShieldCheck,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full max-w-6xl mx-auto mt-20 scroll-mt-32"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-xl shadow-black/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_20%_-10%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(ellipse_70%_70%_at_80%_10%,rgba(139,92,246,0.18),transparent_60%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Sobre mí
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-white"
            >
              Diseño experiencias digitales que se sienten rápidas y elegantes.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg text-neutral-300 leading-relaxed"
            >
              Soy desarrollador Full Stack con foco en interfaces modernas. Me
              gusta llevar cada detalle al extremo: performance, accesibilidad,
              motion sutil y una narrativa visual que haga destacar la marca.
            </motion.p>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-full border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-2xl shadow-black/40 overflow-hidden">
                <img
                  src="/src/assets/trajedia liviana.png"
                  alt="Santiago Vittori"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="absolute -left-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs text-white/80 backdrop-blur float-slow"
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                UI Motion
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute -right-8 bottom-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs text-white/80 backdrop-blur float"
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-violet-400" />
                Full Stack
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute left-1/2 -bottom-6 -translate-x-1/2 flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs text-white/80 backdrop-blur float-fast"
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                Performance
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
