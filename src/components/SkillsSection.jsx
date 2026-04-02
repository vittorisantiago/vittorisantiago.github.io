import { motion } from "framer-motion";
import { Code2, Terminal, Shield, Zap, ExternalLink } from "lucide-react";

const skillCategories = [
  {
    title: "Lenguajes de Programación",
    icon: Code2,
    skills: ["Python", "Bash", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Herramientas de Seguridad",
    icon: Shield,
    skills: ["Burp Suite", "Caido", "Nmap", "Metasploit", "Wireshark"],
  },
  {
    title: "Sistemas & Infraestructura",
    icon: Terminal,
    skills: [
      "Linux (Arch, Kali)",
      "Docker",
      "Git",
      "Bash Scripting",
      "Networking",
    ],
  },
  {
    title: "Metodologías",
    icon: Zap,
    skills: [
      "OWASP Top 10",
      "Web Pentesting",
      "AppSec",
      "Red Team",
      "Threat Modeling",
    ],
  },
];

const learningPlatforms = [
  {
    name: "HackTheBox",
    emoji: "🔓",
    url: "https://www.hackthebox.com/",
    description: "Máquinas y desafíos de hacking",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "TryHackMe",
    emoji: "🎓",
    url: "https://tryhackme.com/",
    description: "Cursos y labs interactivos",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "PortSwigger",
    emoji: "🌐",
    url: "https://portswigger.net/",
    description: "Web Security Academy",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "PentesterLab",
    emoji: "🛡️",
    url: "https://pentesterlab.com/",
    description: "Ejercicios de pentesting",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "picoCTF",
    emoji: "🚩",
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
          Stack & Herramientas
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white"
        >
          Tecnologías que manejo con{" "}
          <span className="gradient-text">confianza.</span>
        </motion.h2>

        <p className="text-base md:text-lg text-neutral-400 max-w-2xl">
          Un stack enfocado en ciberseguridad ofensiva, pentesting web y
          desarrollo de herramientas de seguridad.
        </p>
      </div>

      {/* Grid de Categorías */}
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 p-6 md:p-8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            {/* Fondo con gradiente sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Contenido */}
            <div className="relative z-10">
              {/* Icono + Título */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-300 group-hover:bg-cyan-500/30 transition-colors">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-cyan-200 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Decoración de esquina */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
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
                <div className="text-4xl">{platform.emoji}</div>
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

      {/* Nota adicional */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-neutral-300 text-center"
      >
        <p className="text-sm md:text-base">
          Aprendizaje continuo en laboratorios de seguridad. Siempre
          actualizando conocimientos en nuevas vulnerabilidades y técnicas de{" "}
          <strong>offensive security</strong>.
        </p>
      </motion.div>
    </section>
  );
}
