import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, LayoutGrid, Github } from "lucide-react";

const projects = [
  {
    title: "Mueblería Jota",
    category: "Full Stack Ecommerce",
    description:
      "Plataforma de venta integral. Transformé un catálogo estático en una experiencia de compra fluida con gestión de stock en tiempo real.",
    image: "/project-muebleria-jota.png",
    tags: ["React", "Node", "Express", "CSS3"],
    link: "https://github.com/vittorisantiago/muebleria-jota-fullstack",
    featured: true,
  },
  {
    title: "BeefValue",
    category: "Análisis económico",
    description:
      "Sistema de análisis económico para empresas comercializadoras de carne bovina, con herramientas basadas en datos para decisiones estratégicas.",
    image: "/beefvalue.png",
    tags: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
    link: "https://github.com/vittorisantiago/beefvalue",
    featured: false,
  },
  {
    title: "Biosys",
    category: "Gestión de árboles",
    description:
      "Proyecto universitario para la gestión de árboles, con un sistema de administración desarrollado en C# y SQL Server.",
    image: "/biosys.png",
    tags: ["C#", "SQL Server", "WinForms"],
    link: "https://github.com/vittorisantiago/biosys",
    featured: false,
  },
];

export default function ProjectsSection() {
  const [featured, ...others] = projects;

  return (
    <section
      id="projects"
      className="relative w-full max-w-6xl mx-auto mt-32 mb-20 px-4 scroll-mt-24"
    >
      {/* 1. Header de la Sección */}
      <div className="flex flex-col gap-4 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 w-fit"
        >
          <LayoutGrid className="h-3.5 w-3.5" />
          Trabajo seleccionado
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white"
        >
          Proyectos con{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
            identidad propia.
          </span>
        </motion.h2>

        <p className="text-base md:text-lg text-neutral-400 max-w-2xl">
          Cada línea de código tiene un propósito. Aquí hay una selección de
          productos digitales diseñados para funcionar tan bien como se ven.
        </p>
      </div>

      {/* 2. Grid Principal */}
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* TARJETA DESTACADA */}
        <motion.article
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-2xl transition-all hover:border-white/20"
        >
          {/* Imagen (Top) - Ahora separada del texto */}
          <div className="relative h-[280px] md:h-[400px] w-full overflow-hidden bg-white/5">
            {/* Overlay sutil al hacer hover */}
            <div className="absolute inset-0 z-10 bg-black/0 transition-colors group-hover:bg-black/10" />

            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Contenido (Bottom) */}
          <div className="relative flex flex-1 flex-col justify-between p-6 md:p-8 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">
                  {featured.category}
                </span>
                <Github className="h-5 w-5 text-neutral-500 transition-colors group-hover:text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-violet-200 transition-colors">
                {featured.title}
              </h3>

              <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-prose">
                {featured.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-neutral-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Botón de Acción */}
            <div className="pt-8">
              <a
                href={featured.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all hover:gap-3 group/link"
              >
                Ver proyecto completo
                <div className="p-1.5 rounded-full bg-white text-black transition-transform group-hover/link:-rotate-45">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </a>
            </div>
          </div>
        </motion.article>

        {/* COLUMNA DERECHA */}
        <div className="flex flex-col gap-6">
          {others.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-lg transition-all hover:border-white/20 hover:shadow-xl"
            >
              {/* Imagen más pequeña */}
              <div className="relative h-48 w-full overflow-hidden bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Contenido Compacto */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-200 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-neutral-600 group-hover:text-white transition-colors" />
                  </div>

                  <p className="text-sm text-neutral-400 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider font-medium text-neutral-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Card "Coming Soon" o GitHub Link*/}
          <motion.a
            href="https://github.com/vittorisantiago"
            target="_blank"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 rounded-[2rem] border border-white/5 bg-white/5 p-8 text-neutral-400 hover:bg-white/10 hover:text-white transition-all cursor-pointer border-dashed"
          >
            <Github className="h-6 w-6" />
            <span className="font-medium">Ver más en GitHub</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
