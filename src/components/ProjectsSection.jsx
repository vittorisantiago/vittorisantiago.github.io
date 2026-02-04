import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers } from "lucide-react";

const projects = [
  {
    title: "Mueblería Jota — Ecommerce",
    description:
      "Tienda online para una mueblería con catálogo destacado y experiencia de compra clara.",
    image: "/project-muebleria-jota.png",
    tags: ["Ecommerce", "React", "UI/UX"],
    link: "https://github.com/vittorisantiago/muebleria-jota-fullstack",
    details: [
      "Catálogo con foco en conversión",
      "Navegación clara y moderna",
      "Arquitectura escalable",
    ],
  },
  {
    title: "Orion Commerce",
    description:
      "E‑commerce elegante con filtros rápidos, búsqueda instantánea y checkout liviano.",
    image: "/assets/project-orion.jpg",
    tags: ["React", "Tailwind", "Stripe"],
    link: "#",
    details: [
      "Catálogo con rendimiento elevado",
      "UX orientada a conversión",
      "Modo oscuro con contraste AA",
    ],
  },
  {
    title: "Pulse Analytics",
    description:
      "Dashboard modular con métricas en tiempo real y visualizaciones claras.",
    image: "/assets/project-pulse.jpg",
    tags: ["Next.js", "Charts", "Realtime"],
    link: "#",
    details: [
      "Data streaming con estados claros",
      "Alertas y paneles personalizados",
      "Arquitectura escalable",
    ],
  },
];

export default function ProjectsSection() {
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      className="relative w-full max-w-6xl mx-auto mt-20 scroll-mt-32 min-h-[80vh]"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 w-fit">
            <Sparkles className="h-3.5 w-3.5" />
            Proyectos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Proyectos con identidad propia y mucho movimiento.
          </h2>
          <p className="text-base md:text-lg text-neutral-300 max-w-2xl">
            Cada proyecto cuenta una historia visual distinta. Diseño,
            desarrollo y performance alineados para que el producto destaque.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30"
          >
            <div className="absolute inset-0">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.25),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.2),transparent_55%)]" />
            </div>

            <div className="relative flex flex-col justify-between gap-6 p-6 sm:p-8 min-h-[420px]">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs text-white/80 backdrop-blur">
                  <Layers className="h-3.5 w-3.5" />
                  Proyecto destacado
                </div>
                <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
                  Frontend & UI
                </div>
              </div>

              <div className="max-w-xl">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-neutral-200 leading-relaxed">
                  {featured.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Detalles
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-200">
                    {featured.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-between gap-3 rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Estado
                    </p>
                    <p className="mt-2 text-sm text-white/90">Live ready</p>
                  </div>
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 transition hover:bg-white/20"
                  >
                    Ver caso completo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-6">
            {rest.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                whileHover={{ y: -6, rotate: -0.2 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_55%)]" />

                <div className="relative flex flex-col gap-4">
                  <div className="relative h-40 overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-300">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <details className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/80">
                    <summary className="cursor-pointer list-none font-medium text-white/90">
                      Ver detalles
                    </summary>
                    <ul className="mt-3 space-y-2 text-xs text-neutral-200">
                      {project.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
