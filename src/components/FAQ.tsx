"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Es difícil migrar mis datos actuales al nuevo sistema?",
    answer: "No, en absoluto. Contamos con herramientas de importación masiva desde Excel y nuestro equipo de soporte te asiste durante todo el proceso para que no pierdas ni un solo dato histórico."
  },
  {
    question: "¿Tienen soporte técnico en Argentina?",
    answer: "Sí, somos una empresa argentina. Nuestro equipo de soporte habla tu idioma, entiende tus horarios y las particularidades de los negocios locales. Te atendemos por WhatsApp y teléfono, nada de respuestas automatizadas."
  },
  {
    question: "¿Qué pasa con AFIP si se corta internet?",
    answer: "El sistema permite seguir registrando tus ventas de forma local. En cuanto recuperes la conexión, el sistema se sincronizará automáticamente con AFIP para obtener los CAE correspondientes sin interrumpir tu operatoria."
  },
  {
    question: "¿Los planes tienen límite de usuarios?",
    answer: "Nuestros planes están diseñados para acompañar tu crecimiento. Los planes iniciales tienen un límite de usuarios para mantener un precio accesible, pero contamos con opciones corporativas con usuarios ilimitados y control de permisos avanzado."
  },
  {
    question: "¿Cómo funcionan las actualizaciones del sistema?",
    answer: "Al ser un software en la nube (SaaS), todas las actualizaciones son automáticas y gratuitas. Siempre estarás usando la última versión, cumpliendo con las últimas normativas de AFIP sin tener que instalar nada en tu computadora."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--corp-primary)] mb-3">
            Preguntas Frecuentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-neutral-50 shadow-sm' : 'bg-white hover:border-neutral-300'
              }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => toggleOpen(index)}
              >
                <span className="font-semibold text-neutral-900 pr-4">{faq.question}</span>
                <span className={`text-[var(--corp-primary)] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
