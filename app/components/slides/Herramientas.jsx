'use client';
import { useSelector } from 'react-redux';

export default function Herramientas() {
  const { herramientas } = useSelector((state) => state.presentation);

  const gradients = [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-emerald-500 to-teal-600',
    'from-orange-500 to-red-600',
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
            Stack Tecnológico
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mapa de Herramientas TIC
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            A continuación se presentan las herramientas TIC utilizadas en el
            desarrollo de esta presentación, incluyendo su función y propósito
            dentro del proceso de aprendizaje apoyado por inteligencia
            artificial.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {herramientas.map((tool, index) => (
            <div
              key={index}
              className="group transform transition-all duration-500 hover:scale-105"
            >
              <div className="relative h-full">
                {/* Glow effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`}
                ></div>

                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-xl flex items-center justify-center text-4xl shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}
                    >
                      {tool.icono}
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all">
                    {tool.nombre}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {tool.descripcion}
                  </p>

                  {/* Bottom decoration */}
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span>Herramienta activa</span>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900 rounded-3xl p-12 shadow-2xl max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Eficiente</h4>
              <p className="text-blue-200">
                Optimizado para máximo rendimiento
              </p>
            </div>

            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Confiable</h4>
              <p className="text-blue-200">Herramientas probadas y efectivas</p>
            </div>

            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Escalable</h4>
              <p className="text-blue-200">Adaptable a cualquier proyecto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
