import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const contact = {
  email: "vittori513@gmail.com",
  phone: "+54 9 3471613063",
  linkedin: "https://www.linkedin.com/in/santiago-vittori/",
  github: "https://github.com/vittorisantiago",
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full max-w-6xl mx-auto mt-20 scroll-mt-32 min-h-[70vh] mb-4"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-2xl shadow-black/30">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(139,92,246,0.2),transparent_55%)]" />
        <div className="pointer-events-none absolute -top-20 right-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Contacto rápido
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-white"
            >
              ¿Listo para lanzar algo diferente?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-base md:text-lg text-neutral-300 leading-relaxed"
            >
              Te respondo rápido. Podemos definir alcance, tiempos y un plan
              claro en una llamada corta o por mail. Sin vueltas.
            </motion.p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}?subject=Nuevo%20proyecto`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white text-black px-5 py-2 text-sm font-semibold transition hover:bg-neutral-200"
              >
                Enviar mail
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Email directo
                </p>
                <p className="mt-2 text-sm text-white/90">{contact.email}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Teléfono
                </p>
                <p className="mt-2 text-sm text-white/90">{contact.phone}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <motion.a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-white/90 shadow-xl shadow-black/20"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  LinkedIn
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Conectar y ver trayectoria
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200 transition group-hover:scale-105">
                <Linkedin className="h-5 w-5" />
              </div>
            </motion.a>

            <motion.a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-white/90 shadow-xl shadow-black/20"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  GitHub
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Ver proyectos y código
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-violet-200 transition group-hover:scale-105">
                <Github className="h-5 w-5" />
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid gap-3 sm:grid-cols-2"
            >
              <a
                href={`tel:${contact.phone.replace(/\s|\(|\)|-/g, "")}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/90 transition hover:bg-white/10 sm:col-span-2"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                  <Phone className="h-4 w-4" />
                </span>
                Llamar ahora
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
