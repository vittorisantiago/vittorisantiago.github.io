import React, { useState } from "react";

const CategoryIcons = {
  Frontend: (
    <span className="material-symbols-outlined text-[var(--sec)] opacity-70">
      web
    </span>
  ),
  Backend: (
    <span className="material-symbols-outlined text-[var(--sec)] opacity-70">
      database
    </span>
  ),
  "Análisis de Sistemas": (
    <span className="material-symbols-outlined text-[var(--sec)] opacity-70">
      analytics
    </span>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    Frontend: [
      "Interfaces interactivas con HTML, CSS y JavaScript",
      "Diseño de páginas responsivas y modernas",
      "Exploración de frameworks como React",
    ],
    Backend: [
      "Lógica de servidor con Python y Node.js",
      "Gestión básica de bases de datos (SQL)",
      "Conexión entre frontend y backend",
    ],
    "Análisis de Sistemas": [
      "Diseño de soluciones a problemas técnicos",
      "Metodologías ágiles y de desarrollo",
      "Modelado de procesos y requisitos",
      "Resolución de problemas con enfoque lógico",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        Qué hago?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
