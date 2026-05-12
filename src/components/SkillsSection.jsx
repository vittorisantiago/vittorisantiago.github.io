import { motion } from "framer-motion";
import { Code2, Layers, ExternalLink } from "lucide-react";

const mainSkills = [
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const tools = [
  {
    name: "Supabase",
    logo: "https://cdn.simpleicons.org/supabase/3ECF8E",
  },
  {
    name: "Vercel",
    logo: "https://cdn.simpleicons.org/vercel/ffffff",
  },
  {
    name: "Claude",
    logo: "https://cdn.simpleicons.org/anthropic/D4A27F",
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
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
          <Code2 className="h-3.5 w-3.5" />
          Stack
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white"
        >
          Lo que utilizo en mi <span className="gradient-text">día a día.</span>
        </motion.h2>

        <p className="text-base md:text-lg text-neutral-400 max-w-2xl">
          Lenguajes, herramientas y plataformas con las que construyo productos
          de principio a fin.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="mb-16">
        <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {mainSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-lg border border-cyan-500/20 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all group cursor-default"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="h-8 w-8 group-hover:scale-110 transition-transform"
              />
              <span className="text-xs font-medium text-white/80 group-hover:text-cyan-300 transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="mb-16">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-white/70 mb-4 flex items-center gap-2"
        >
          <Layers className="h-5 w-5 text-cyan-300" />
          Herramientas
        </motion.h3>
        <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-lg border border-cyan-500/20 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all group cursor-default"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="h-8 w-8 group-hover:scale-110 transition-transform"
              />
              <span className="text-xs font-medium text-white/80 group-hover:text-cyan-300 transition-colors text-center">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
