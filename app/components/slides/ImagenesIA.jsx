'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ImagenesIA() {
  const { imagenesIA } = useSelector((state) => state.presentation);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgODAgMTAgTSAxMCAwIEwgMTAgODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-white/10 mb-4">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white/80">
              Generado con IA
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Imágenes Generadas con IA
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Visualizaciones creadas mediante prompts de inteligencia artificial
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {imagenesIA.map((item) => (
            <div
              key={item.id}
              className="group"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:-translate-y-2">
                {/* Image container */}
                <div className="relative aspect-[4/3] bg-gray-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent z-10"></div>

                  {/* Actual image */}
                  <Image
                    src={item.imagen}
                    alt={`Imagen IA ${item.id}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />

                  {/* Image number badge */}
                  <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {item.id}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-blue-600/80 to-indigo-600/80 z-20 transition-opacity duration-500 ${
                      hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                    } flex items-center justify-center`}
                  >
                    <div className="text-center px-6">
                      <svg
                        className="w-16 h-16 text-white mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <p className="text-white font-semibold">Ver detalles</p>
                    </div>
                  </div>
                </div>

                {/* Content - Prompt */}
                <div className="relative z-10 -mt-16 mx-6 mb-6">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 group-hover:border-white/40 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
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
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-2">
                          Prompt utilizado
                        </h3>
                        <p className="text-blue-200 text-sm leading-relaxed">
                          {item.prompt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-white/80 text-sm">
              Imágenes generadas mediante herramientas de IA avanzadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
