export default function LogoCarousel() {
  const logos = [
    { name: "Hotel Las Palmas", icon: "🌴" },
    { name: "Kiosco El Sol", icon: "☀️" },
    { name: "Ferretería Industrial", icon: "🔧" },
    { name: "Colegio San Martín", icon: "🏫" },
    { name: "Cabañas del Bosque", icon: "🌲" },
    { name: "Supermercado Express", icon: "🛒" },
    { name: "Boutique Elegance", icon: "👗" },
    { name: "Hostel Backpackers", icon: "🎒" },
  ];

  // We double the array to create a seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="py-12 bg-white border-y border-neutral-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-neutral-400">
          Más de 500 empresas ya confían en nosotros
        </p>
      </div>

      {/* Gradient masks for smooth fade effect at the edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex w-[200%] md:w-[150%] lg:w-[100%] animate-marquee">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 sm:w-48 lg:w-56 flex items-center justify-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            <span className="text-2xl">{logo.icon}</span>
            <span className="text-sm font-bold text-neutral-800 tracking-tight">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
