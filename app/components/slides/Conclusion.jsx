'use client';

export default function Conclusion() {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Main content */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 mb-8">
            <svg
              className="w-4 h-4 text-emerald-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium text-emerald-300">
              Conclusión
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transformando la
            <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mt-2">
              Educación Digital
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            Las herramientas TIC y la inteligencia artificial están
            revolucionando el proceso de aprendizaje, haciéndolo más accesible,
            personalizado y efectivo.
          </p>
        </div>

        {/* Key takeaways */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: '🚀',
              title: 'Innovación',
              description:
                'Tecnología de vanguardia al servicio del aprendizaje',
            },
            {
              icon: '🎯',
              title: 'Efectividad',
              description: 'Resultados medibles en el proceso educativo',
            },
            {
              icon: '🌟',
              title: 'Futuro',
              description: 'Preparando estudiantes para los retos del mañana',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group transform transition-all duration-500 hover:scale-105"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-colors">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-blue-300 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-lg opacity-30"></div>
          <div className="relative bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Evidencia GA1-220501046-AA1-EV01
              </h3>
              <p className="text-blue-200 mb-8 leading-relaxed">
                Esta presentación demuestra el dominio de herramientas TIC y el
                conocimiento sobre la aplicación de inteligencia artificial en
                contextos educativos modernos.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">4+</div>
                  <div className="text-sm text-blue-300">Herramientas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">2</div>
                  <div className="text-sm text-blue-300">Imágenes IA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-blue-300">Digital</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">TIC</div>
                  <div className="text-sm text-blue-300">Powered</div>
                </div>
              </div>

              {/* Check items */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-300">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Herramientas integradas</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>IA implementada</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Objetivos cumplidos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-blue-300 text-sm mb-4">
            Desarrollado con dedicación para demostrar competencias en TIC
          </p>
          <p className="text-blue-400/60 text-xs">
            © 2026 - Evidencia Educativa | Inteligencia Artificial en la
            Educación
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-lg z-50 group"
        aria-label="Volver arriba"
      >
        <svg
          className="w-6 h-6 group-hover:-translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </section>
  );
}
