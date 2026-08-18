"use client";

import { useState } from "react";

const tabs = [
  {
    id: "hoteleria",
    label: "Conserjería (Hotelería)",
    icon: "🏨",
    image: "/mockups/hoteleria.png",
    color: "#5E00A3",
    description: "Calendario visual de reservas, ocupación en tiempo real y KPIs de la industria."
  },
  {
    id: "facturacion",
    label: "Facturación y POS",
    icon: "📄",
    image: "/mockups/facturacion.png",
    color: "#2779BD",
    description: "Punto de venta rápido, catálogo de productos y facturación electrónica integrada."
  },
  {
    id: "academias",
    label: "Gestión Académica",
    icon: "🎓",
    image: "/mockups/academias.png",
    color: "#1E3A5F",
    description: "Portal de estudiantes, control de asistencia, promedios y reportes de desempeño."
  }
];

export default function ProductDemo() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <section className="py-20 sm:py-28 bg-neutral-900 text-white overflow-hidden" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Interfaces pensadas para trabajar más rápido
          </h2>
          <p className="text-lg text-neutral-400">
            Sistemas intuitivos y modernos. Olvidate de capacitar a tu equipo durante semanas; 
            nuestros productos están diseñados para ser aprendidos en minutos.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive 
                    ? "bg-white text-neutral-900 shadow-lg scale-105" 
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Demo Display */}
        <div className="relative mx-auto max-w-5xl">
          {/* Decorative glow behind the image based on active color */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 blur-[120px] rounded-full opacity-30 transition-colors duration-700 pointer-events-none"
            style={{ backgroundColor: currentTab.color }}
          />

          <div className="relative glass-dark rounded-2xl p-2 sm:p-4 border border-neutral-700/50 shadow-2xl backdrop-blur-xl">
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-700/50 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 h-6 bg-neutral-800 rounded-md max-w-xs opacity-50" />
            </div>

            {/* Image Container with crossfade */}
            <div className="relative aspect-[4/3] sm:aspect-video rounded-lg overflow-hidden bg-neutral-900">
              {tabs.map(tab => (
                <img
                  key={tab.id}
                  src={tab.image}
                  alt={`Screenshot de ${tab.label}`}
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                    activeTab === tab.id ? "opacity-100 relative" : "opacity-0 absolute pointer-events-none"
                  }`}
                />
              ))}
            </div>
            
            {/* Description floating card */}
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-11/12 sm:w-auto min-w-[300px] bg-white text-neutral-900 p-4 sm:p-6 rounded-xl shadow-2xl border border-neutral-100 text-center animate-fade-in-up">
              <p className="font-medium text-sm sm:text-base">{currentTab.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
