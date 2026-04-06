import { motion } from "framer-motion";
import { Code2, Terminal, ExternalLink } from "lucide-react";

const mainSkills = [
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Bash",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  },
  {
    name: "Linux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

const tools = [
  { name: "Burp Suite", logo: "https://cdn.simpleicons.org/burpsuite/ff7300" },
  {
    name: "Caido",
    logo: "/caido.png",
  },
  { name: "Nmap", logo: "/nmap.png" },
];

const learningPlatforms = [
  {
    name: "HackTheBox",
    logo: "https://cdn.simpleicons.org/hackthebox/9FEF00",
    url: "https://www.hackthebox.com/",
    description: "Máquinas y desafíos de hacking",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "TryHackMe",
    logo: "/tryhackme.png",
    url: "https://tryhackme.com/",
    description: "Cursos y labs interactivos",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "PortSwigger",
    logo: "https://cdn.simpleicons.org/burpsuite/FF9500",
    url: "https://portswigger.net/",
    description: "Web Security Academy",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "PentesterLab",
    logo: "/pentesterlab.jpeg",
    url: "https://pentesterlab.com/",
    description: "Ejercicios de pentesting",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "picoCTF",
    logo: "/picoCTF.jpeg",
    url: "https://picoctf.org/",
    description: "CTF challenges",
    color: "from-yellow-500 to-orange-500",
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
          Herramientas
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
          Lenguajes, herramientas y plataformas que uso regularmente en mis
          proyectos.
        </p>
      </div>

      {/* Skills Grid - Minimalist */}
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
          <Terminal className="h-5 w-5 text-cyan-300" />
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

      {/* Plataformas de Aprendizaje */}
      <div className="mt-16 mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold tracking-tight text-white mb-8"
        >
          Plataformas donde practico
        </motion.h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {learningPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-cyan-500/20 bg-white/5 p-5 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Fondo gradiente */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-15 transition-opacity`}
              />

              {/* Contenido */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="h-10 w-10 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h4 className="font-semibold text-white group-hover:text-cyan-200 transition-colors">
                    {platform.name}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    {platform.description}
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-4 w-4 text-cyan-300" />
                </div>
              </div>

              {/* Efecto de borde brillante */}
              <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/30 rounded-xl transition-colors pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
