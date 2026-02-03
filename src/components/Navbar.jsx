import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, FileText, Mail } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "#home", icon: Home },
  { name: "Sobre mí", href: "#about", icon: User },
  { name: "Proyectos", href: "#projects", icon: Briefcase },
  { name: "Contacto", href: "#contact", icon: Mail },
  // { name: "CV", href: "/cv-santiago.pdf", icon: FileText },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.1, 0.25, 0.5],
        rootMargin: "-25% 0px -55% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className="flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20 ring-1 ring-white/5">
        {navItems.map((item) => {
          const isActive = activeId === item.href.replace("#", "");

          return (
            <a
              key={item.name}
              href={item.href}
              className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors group rounded-full hover:bg-white/5 ${
                isActive
                  ? "text-white bg-white/10"
                  : "text-neutral-400 hover:text-white"
              }`}
              aria-label={item.name}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setActiveId(item.href.replace("#", ""))}
            >
              <item.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span className="hidden sm:block">{item.name}</span>

              {/* Efecto de brillo inferior al hacer hover */}
              <span
                className={`absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
