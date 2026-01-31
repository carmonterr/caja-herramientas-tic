'use client';
import { useSelector } from 'react-redux';

export default function Tema() {
  const { tema, descripcion } = useSelector((state) => state.presentation);

  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
            Tema Principal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tema Seleccionado
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Card */}
        <div className="relative group max-w-5xl mx-auto">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>

          {/* Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-full -ml-24 -mb-24"></div>

            <div className="relative p-12 md:p-16">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {tema}
              </h3>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap justify-center mb-8">
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  IA
                </span>
                <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                  Educación
                </span>
                <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                  TIC
                </span>
              </div>

              {/* Description */}
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute -left-4 top-0 text-blue-200 text-6xl font-serif leading-none select-none"></div>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center relative z-10">
                  {descripcion}
                </p>
                <div className="absolute -right-4 bottom-0 text-blue-200 text-6xl font-serif leading-none select-none"></div>
              </div>

              {/* Bottom decoration */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">Digital</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      TIC
                    </div>
                    <div className="text-sm text-gray-600">Herramientas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      IA
                    </div>
                    <div className="text-sm text-gray-600">Powered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
