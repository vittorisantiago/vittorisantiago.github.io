import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";

const contact = {
  email: "vittori513@gmail.com",
  linkedin: "https://www.linkedin.com/in/santiago-vittori/",
  github: "https://github.com/vittorisantiago",
  whatsapp:
    "https://wa.me/5493471613063?text=Hola%20Santiago,%20vi%20tu%20portfolio...",
};

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative w-full max-w-4xl mx-auto mt-32 mb-24 px-4 scroll-mt-32"
    >
      {/* Título Sutil */}
      <div className="mb-8 flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <span className="text-sm font-medium text-neutral-400 uppercase tracking-widest">
          Contacto
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* TARJETA PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-white/5 p-8 shadow-2xl md:col-span-2 lg:col-span-2 flex flex-col justify-between hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
        >
          {/* Efecto de fondo */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(0,217,255,0.1),transparent_50%)]" />

          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white text-balance">
              ¿Interesado en un{" "}
              <span className="text-cyan-300">Security Engineer</span>?
            </h2>
            <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
              Abierto a nuevos desafíos en ciberseguridad ofensiva, red teaming
              y penetration testing. Hablemos.
            </p>
          </div>

          <div className="relative z-10 mt-8 flex flex-col sm:flex-row gap-3">
            {/* Botón Principal - Email */}
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-6 py-3 text-sm font-semibold text-black transition-all hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 active:scale-95"
            >
              <Mail className="h-4 w-4" />
              Enviar correo
            </a>

            {/* Botón Secundario - Copiar */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-cyan-500/20 hover:border-cyan-500/50"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied ? "Copiado" : contact.email}
            </button>
          </div>
        </motion.div>

        {/* COLUMNA LATERAL */}
        <div className="flex flex-col gap-4">
          {/* LinkedIn */}
          <motion.a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group flex flex-1 items-center justify-between rounded-[2rem] border border-cyan-500/20 bg-white/5 p-6 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div>
              <span className="block text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Perfil
              </span>
              <span className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                LinkedIn
              </span>
            </div>
            <Linkedin className="h-6 w-6 text-neutral-600 group-hover:text-cyan-400 transition-colors" />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group flex flex-1 items-center justify-between rounded-[2rem] border border-orange-500/20 bg-white/5 p-6 transition-all hover:border-orange-500/40 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20"
          >
            <div>
              <span className="block text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Código
              </span>
              <span className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                GitHub
              </span>
            </div>
            <Github className="h-6 w-6 text-neutral-600 group-hover:text-orange-400 transition-colors" />
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group flex flex-1 items-center justify-between rounded-[2rem] border border-orange-500/20 bg-white/5 p-6 transition-all hover:border-orange-500/40 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20"
          >
            <div>
              <span className="block text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Chat Rápido
              </span>
              <span className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                WhatsApp
              </span>
            </div>
            <MessageCircle className="h-6 w-6 text-neutral-600 group-hover:text-orange-400 transition-colors" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
