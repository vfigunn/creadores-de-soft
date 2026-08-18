// ===================================================================
// CREADORES DE SOFT — Mock Data
// ===================================================================

export type ProductSlug = "cds-hoteleria" | "cds-facturalo-simple" | "cds-academias";

export interface Module {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ProductType {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

export interface LearningResource {
  title: string;
  description: string;
  type: "video" | "guía" | "tutorial" | "webinar";
  duration: string;
  level: "Principiante" | "Intermedio" | "Avanzado";
}

export interface Product {
  slug: ProductSlug;
  routeBase: string;
  name: string;
  tagline: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  theme: string;
  primaryColor: string;
  icon: string;
  benefits: { title: string; description: string; icon: string }[];
  modules: Module[];
  types: ProductType[];
  pricing: PricingPlan[];
  blog: BlogPost[];
  learning: LearningResource[];
}

// ===================================================================
// HOTELERÍA
// ===================================================================
const hoteleria: Product = {
  slug: "cds-hoteleria",
  routeBase: "/cds-hoteleria",
  name: "CDS Hotelería",
  tagline: "Sistema para Hoteles y Restaurantes",
  description:
    "El sistema para hoteles pequeños y medianos que utilizan los Apart, Bungalows, complejo de cabañas, Hoteles Boutique y Hoteles 3 estrellas.",
  heroTitle: "Sistema para Hoteles y Restaurantes",
  heroSubtitle:
    "Impulsá tu negocio mediante una gestión más eficiente, optimizando recursos, tomando mejores decisiones y brindando mejor atención a tus clientes. Incrementá tus clientes, tus ingresos y el desarrollo de tu negocio.",
  theme: "hoteleria",
  primaryColor: "#5E00A3",
  icon: "🏨",
  benefits: [
    {
      title: "Conserjería",
      description:
        "Gestioná de forma precisa y automatizada la información relevante para el buen funcionamiento de tu negocio. Reservas, Alojamientos, Consumos, Check In, Check Out, Caja, Pagos, Facturación, Base de Clientes y Estadísticas.",
      icon: "🛎️",
    },
    {
      title: "Restaurante",
      description:
        "Asignación de mozos, estados de mesa, emisión de comandas, facturación de mesa, arqueo de caja y reportes. Ideal para hoteles con servicio gastronómico integrado.",
      icon: "🍽️",
    },
    {
      title: "Reservas Online",
      description:
        "Motor de reservas para tu sitio web con gestión de disponibilidad, confirmación automática y sincronización en tiempo real con tu sistema de conserjería.",
      icon: "🌐",
    },
    {
      title: "Sistema Modular",
      description:
        "Arquitectura modular que se adapta a tu establecimiento. Activá solo los módulos que necesitás y escalá a medida que tu negocio crece.",
      icon: "🧩",
    },
  ],
  modules: [
    {
      slug: "reservas",
      name: "Gestión de Reservas",
      shortDescription:
        "Motor de reservas online con calendario visual y confirmación automática.",
      description:
        "Sistema completo de gestión de reservas con calendario visual drag-and-drop, motor de reservas online embebible en tu web, y sincronización automática con los principales canales de distribución. Incluye gestión de tarifas dinámicas, políticas de cancelación configurables y confirmaciones automáticas por email y WhatsApp.",
      icon: "📅",
      features: [
        "Calendario visual drag-and-drop",
        "Motor de reservas online (widget embebible)",
        "Tarifas dinámicas por temporada y demanda",
        "Confirmación automática por email y WhatsApp",
        "Políticas de cancelación configurables",
        "Gestión de grupos y eventos",
      ],
    },
    {
      slug: "check-in-check-out",
      name: "Check-in / Check-out",
      shortDescription:
        "Proceso ágil de entrada y salida con registro digital de huéspedes.",
      description:
        "Agilizá el proceso de llegada y salida de tus huéspedes con registro digital, escaneo de documentos, firma electrónica y asignación automática de habitaciones. Ofrecé check-in online previo para reducir tiempos de espera en recepción.",
      icon: "🔑",
      features: [
        "Check-in online previo a la llegada",
        "Escaneo de documentos de identidad",
        "Firma electrónica de registro",
        "Asignación automática de habitaciones",
        "Late check-out configurable",
        "Historial completo del huésped",
      ],
    },
    {
      slug: "facturacion",
      name: "Facturación y Cobros",
      shortDescription:
        "Facturación electrónica integrada con AFIP y múltiples medios de pago.",
      description:
        "Sistema de facturación electrónica completamente integrado con AFIP. Generá facturas A, B y C automáticamente, gestioná cuentas corrientes, y aceptá múltiples medios de pago incluyendo tarjetas, transferencias y efectivo. Reportes contables listos para tu contador.",
      icon: "💰",
      features: [
        "Facturación electrónica AFIP (A, B, C)",
        "Múltiples medios de pago",
        "Cuentas corrientes de huéspedes",
        "Reportes contables automáticos",
        "Integración con sistemas POS",
        "Control de caja diario",
      ],
    },
    {
      slug: "housekeeping",
      name: "Housekeeping",
      shortDescription:
        "Gestión de limpieza y mantenimiento con asignación automática de tareas.",
      description:
        "Coordiná el equipo de limpieza con asignación automática de habitaciones, seguimiento en tiempo real del estado de cada habitación, y alertas para mantenimiento preventivo. Tu equipo de housekeeping trabaja con una app móvil dedicada.",
      icon: "🧹",
      features: [
        "Asignación automática de tareas",
        "App móvil para el equipo de limpieza",
        "Estado de habitaciones en tiempo real",
        "Alertas de mantenimiento preventivo",
        "Control de inventario de amenities",
        "Reportes de productividad por empleado",
      ],
    },
    {
      slug: "channel-manager",
      name: "Channel Manager",
      shortDescription:
        "Sincronización de disponibilidad y tarifas con +200 canales de distribución.",
      description:
        "Conectá tu establecimiento con más de 200 OTAs y canales de distribución. Sincronizá automáticamente disponibilidad, tarifas y restricciones en tiempo real. Evitá overbookings y maximizá tu ocupación con una gestión centralizada de todos tus canales.",
      icon: "🌐",
      features: [
        "Conexión con +200 OTAs (Booking, Expedia, Airbnb, etc.)",
        "Sincronización de disponibilidad en tiempo real",
        "Gestión centralizada de tarifas",
        "Prevención de overbooking",
        "Reportes de rendimiento por canal",
        "Paridad tarifaria automática",
      ],
    },
    {
      slug: "reportes",
      name: "Reportes y Analytics",
      shortDescription:
        "Dashboards en tiempo real con KPIs clave de la industria hotelera.",
      description:
        "Accedé a dashboards interactivos con las métricas que importan: ocupación, RevPAR, ADR, GOP y más. Compará períodos, analizá tendencias y exportá reportes para tu equipo directivo y contable.",
      icon: "📊",
      features: [
        "Dashboard en tiempo real",
        "KPIs: ocupación, RevPAR, ADR, GOP",
        "Comparativa de períodos",
        "Análisis de tendencias",
        "Exportación a Excel y PDF",
        "Reportes programables por email",
      ],
    },
  ],
  types: [
    {
      slug: "hoteles",
      name: "Hoteles",
      shortDescription:
        "Solución completa para hoteles de todas las categorías, desde 2 hasta 5 estrellas.",
      description:
        "CDS Hotelería se adapta a hoteles de cualquier categoría con módulos específicos para la gestión de múltiples tipos de habitación, tarifas complejas, servicios adicionales y operaciones de gran volumen. Ideal para hoteles urbanos, de playa y de montaña.",
      icon: "⭐",
      features: [
        "Gestión multi-categoría de habitaciones",
        "Tarifas complejas y paquetes",
        "Servicios adicionales (spa, restaurante, minibar)",
        "Gestión de congresos y eventos",
        "Fidelización de huéspedes",
        "Integración con key cards",
      ],
    },
    {
      slug: "hostels",
      name: "Hostels",
      shortDescription:
        "Gestión ágil de camas, dormitorios compartidos y espacios comunes.",
      description:
        "Pensado para la dinámica de los hostels: gestión por cama (no por habitación), reservas de dormitorios compartidos, control de espacios comunes y un flujo de check-in rápido para viajeros. Integración nativa con plataformas como Hostelworld.",
      icon: "🛏️",
      features: [
        "Gestión por cama individual",
        "Dormitorios compartidos mixtos/segregados",
        "Control de espacios comunes",
        "Check-in rápido para backpackers",
        "Integración con Hostelworld",
        "Gestión de lockers y amenities compartidos",
      ],
    },
    {
      slug: "cabanas",
      name: "Cabañas y Lodges",
      shortDescription:
        "Control de unidades independientes con gestión de temporadas y servicios.",
      description:
        "Para complejos de cabañas, lodges y bungalows con gestión por unidad independiente. Control de mantenimiento preventivo para cada unidad, tarifas estacionales avanzadas y gestión de servicios opcionales como excursiones y actividades.",
      icon: "🏕️",
      features: [
        "Gestión por unidad independiente",
        "Tarifas estacionales avanzadas",
        "Mantenimiento preventivo por unidad",
        "Servicios opcionales y excursiones",
        "Mapa visual del complejo",
        "Gestión de amenities por cabaña",
      ],
    },
    {
      slug: "apart-hoteles",
      name: "Apart-Hoteles",
      shortDescription:
        "Solución híbrida para estadías cortas y largas con gestión de servicios.",
      description:
        "Combiná la gestión hotelera con la administración de departamentos temporarios. Tarifas diferenciadas por duración de estadía, gestión de servicios de limpieza periódica, control de consumos individuales y facturación flexible para estadías extendidas.",
      icon: "🏢",
      features: [
        "Tarifas por noche, semana y mes",
        "Gestión de estadías extendidas",
        "Control de consumos individuales",
        "Servicios de limpieza periódica",
        "Facturación flexible",
        "Gestión de propietarios (condo-hotel)",
      ],
    },
  ],
  pricing: [
    {
      name: "Starter",
      price: "$29.900",
      period: "/mes",
      description: "Para establecimientos de hasta 15 habitaciones",
      features: [
        "Hasta 15 habitaciones",
        "Gestión de reservas",
        "Check-in / Check-out digital",
        "Facturación electrónica AFIP",
        "1 usuario administrador",
        "Soporte por email",
      ],
      highlighted: false,
      cta: "Comenzar prueba gratis",
    },
    {
      name: "Professional",
      price: "$59.900",
      period: "/mes",
      description: "Para hoteles de hasta 50 habitaciones",
      features: [
        "Hasta 50 habitaciones",
        "Todo lo de Starter",
        "Channel Manager (hasta 5 canales)",
        "Housekeeping",
        "Reportes avanzados",
        "5 usuarios",
        "Soporte prioritario",
      ],
      highlighted: true,
      cta: "Comenzar prueba gratis",
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      description: "Para cadenas y grandes establecimientos",
      features: [
        "Habitaciones ilimitadas",
        "Todo lo de Professional",
        "Channel Manager ilimitado",
        "API para integraciones",
        "Multi-propiedad",
        "Usuarios ilimitados",
        "Account manager dedicado",
        "SLA garantizado",
      ],
      highlighted: false,
      cta: "Contactar ventas",
    },
  ],
  blog: [
    {
      slug: "tendencias-hoteleras-2025",
      title: "5 tendencias hoteleras que van a dominar en 2025",
      excerpt:
        "Desde la personalización con IA hasta la sostenibilidad como diferencial competitivo, estas son las tendencias que todo hotelero debe conocer.",
      date: "2025-01-15",
      author: "Equipo CDS Hotelería",
      category: "Tendencias",
      readTime: "6 min",
    },
    {
      slug: "aumentar-ocupacion-temporada-baja",
      title: "Cómo aumentar la ocupación en temporada baja: guía práctica",
      excerpt:
        "Estrategias probadas para mantener buenos niveles de ocupación durante los meses de menor demanda turística.",
      date: "2025-01-08",
      author: "Martín López",
      category: "Estrategia",
      readTime: "8 min",
    },
    {
      slug: "channel-manager-imprescindible",
      title: "Por qué un Channel Manager es imprescindible en 2025",
      excerpt:
        "Gestionar canales manualmente ya no es viable. Te contamos cómo un Channel Manager puede aumentar tus reservas un 35%.",
      date: "2024-12-20",
      author: "Ana García",
      category: "Tecnología",
      readTime: "5 min",
    },
    {
      slug: "experiencia-huesped-digital",
      title: "La experiencia del huésped en la era digital",
      excerpt:
        "Check-in online, llaves digitales, room service por app: lo que tus huéspedes esperan encontrar cuando llegan a tu hotel.",
      date: "2024-12-10",
      author: "Equipo CDS Hotelería",
      category: "Experiencia",
      readTime: "7 min",
    },
  ],
  learning: [
    {
      title: "Primeros pasos con CDS Hotelería",
      description: "Configurá tu establecimiento y empezá a operar en menos de 30 minutos.",
      type: "tutorial",
      duration: "25 min",
      level: "Principiante",
    },
    {
      title: "Configurar el Channel Manager",
      description: "Conectá tus canales de distribución y sincronizá disponibilidad automáticamente.",
      type: "guía",
      duration: "15 min",
      level: "Intermedio",
    },
    {
      title: "Reportes avanzados para hoteleros",
      description: "Aprendé a interpretar KPIs clave y tomar decisiones basadas en datos.",
      type: "webinar",
      duration: "45 min",
      level: "Avanzado",
    },
    {
      title: "Gestión de tarifas dinámicas",
      description: "Maximizá tus ingresos con estrategias de pricing inteligente.",
      type: "video",
      duration: "20 min",
      level: "Intermedio",
    },
  ],
};

// ===================================================================
// FACTURALO SIMPLE
// ===================================================================
const facturaloSimple: Product = {
  slug: "cds-facturalo-simple",
  routeBase: "/cds-facturalo-simple",
  name: "Facturalo Simple",
  tagline: "Gestión Simple de Facturación Electrónica",
  description:
    "Sistema Web de Facturación Electrónica para Monotributos e Inscriptos de Argentina. 100% online, rápido y pensado para pequeños comercios.",
  heroTitle: "Facturá sin estrés. Vendé con tranquilidad",
  heroSubtitle:
    "Con Facturalo Simple, emitís tus facturas electrónicas en segundos, sin depender del contador ni sufrir con ARCA. 100% online, rápido y pensado para pequeños comercios.",
  theme: "facturalo-simple",
  primaryColor: "#2779BD",
  icon: "📄",
  benefits: [
    {
      title: "Sistema web",
      description:
        "Facturá desde cualquier lugar. Solo necesitás internet. Accedé desde tu compu o notebook con cualquier navegador (Chrome, Mozilla, Edge, Brave, etc.).",
      icon: "🌐",
    },
    {
      title: "Aprendé en 1 hora",
      description:
        "Su interfaz simple te permite emitir facturas electrónicas en segundos y con una hora de capacitación ya podés estar operando sin inconvenientes.",
      icon: "⏱️",
    },
    {
      title: "Controlá tus ventas y stock",
      description:
        "Tené todo tu negocio ordenado en un solo lugar. Stock en tiempo real, alertas de productos con bajo inventario y reportes de rotación.",
      icon: "📦",
    },
    {
      title: "Soporte humano real",
      description:
        "Si necesitás ayuda, te atendemos por WhatsApp o teléfono. Nada de chatbots ni respuestas automáticas.",
      icon: "🤝",
    },
  ],
  modules: [
    {
      slug: "facturacion-electronica",
      name: "Facturación Electrónica",
      shortDescription:
        "Emití facturas A, B, C, notas de crédito y débito integrado con AFIP.",
      description:
        "Sistema de facturación electrónica homologado por AFIP con emisión de comprobantes tipo A, B, C, M, notas de crédito y débito. Envío automático por email al cliente con PDF adjunto. Numeración automática, control de puntos de venta y CAE en tiempo real.",
      icon: "📄",
      features: [
        "Comprobantes A, B, C, M",
        "Notas de crédito y débito",
        "Envío automático por email",
        "CAE en tiempo real",
        "Múltiples puntos de venta",
        "Facturación recurrente programada",
      ],
    },
    {
      slug: "control-stock",
      name: "Control de Stock",
      shortDescription:
        "Gestión de inventario con alertas automáticas y múltiples depósitos.",
      description:
        "Controlá tu inventario en tiempo real con descuento automático de stock por cada venta, alertas configurables de stock mínimo, gestión de múltiples depósitos y reportes de rotación de productos. Cargá productos con código de barras o manualmente.",
      icon: "📦",
      features: [
        "Stock en tiempo real",
        "Alertas de stock mínimo",
        "Múltiples depósitos",
        "Lectura de código de barras",
        "Movimientos entre depósitos",
        "Reportes de rotación",
      ],
    },
    {
      slug: "reportes",
      name: "Reportes y Estadísticas",
      shortDescription:
        "Dashboards de ventas, libro IVA y reportes contables exportables.",
      description:
        "Accedé a reportes completos de ventas por período, cliente y producto. Generá el libro IVA digital para tu contador, controlá tu flujo de caja y exportá todo a Excel o PDF. Dashboards visuales para entender tu negocio de un vistazo.",
      icon: "📊",
      features: [
        "Reporte de ventas por período",
        "Libro IVA digital",
        "Ranking de productos y clientes",
        "Flujo de caja",
        "Exportación a Excel y PDF",
        "Dashboard visual",
      ],
    },
    {
      slug: "clientes-proveedores",
      name: "Clientes y Proveedores",
      shortDescription:
        "Base de datos centralizada de clientes y proveedores con cuentas corrientes.",
      description:
        "Gestioná tu cartera de clientes y proveedores con datos fiscales completos, historial de comprobantes, cuentas corrientes y seguimiento de pagos pendientes. Importá clientes masivamente desde Excel.",
      icon: "👥",
      features: [
        "Datos fiscales completos",
        "Cuentas corrientes",
        "Historial de comprobantes",
        "Seguimiento de pagos",
        "Importación masiva desde Excel",
        "Categorización de clientes",
      ],
    },
    {
      slug: "integracion-afip",
      name: "Integración con AFIP",
      shortDescription:
        "Conexión directa con servidores de AFIP para emisión y validación de comprobantes.",
      description:
        "Conexión directa y segura con los web services de AFIP. Validación automática de CUIT, consulta de condición fiscal, emisión de CAE en tiempo real y cumplimiento automático de todas las resoluciones generales vigentes.",
      icon: "🏛️",
      features: [
        "Conexión directa con AFIP",
        "Validación de CUIT en tiempo real",
        "CAE automático",
        "Consulta de condición fiscal",
        "Cumplimiento RG vigentes",
        "Certificados digitales gestionados",
      ],
    },
    {
      slug: "cobranzas",
      name: "Gestión de Cobranzas",
      shortDescription:
        "Control de cobros, medios de pago y conciliación bancaria.",
      description:
        "Registrá cobros en múltiples medios de pago (efectivo, tarjeta, transferencia, MercadoPago). Conciliación bancaria simplificada, seguimiento de cheques y reportes de cobranza por período.",
      icon: "💳",
      features: [
        "Múltiples medios de pago",
        "Integración MercadoPago",
        "Conciliación bancaria",
        "Seguimiento de cheques",
        "Reportes de cobranza",
        "Recibos de cobro automáticos",
      ],
    },
  ],
  types: [
    {
      slug: "comercios",
      name: "Comercios",
      shortDescription:
        "Solución de facturación para comercios minoristas con control de stock.",
      description:
        "Pensado para negocios de venta al público: kioscos, almacenes, tiendas de ropa, ferreterías y más. Con punto de venta rápido, lectura de código de barras, control de stock automático y ticket de cambio.",
      icon: "🏪",
      features: [
        "Punto de venta rápido",
        "Lectura de código de barras",
        "Ticket de cambio",
        "Control de stock automático",
        "Cierre de caja diario",
        "Múltiples medios de pago",
      ],
    },
    {
      slug: "profesionales",
      name: "Profesionales",
      shortDescription:
        "Facturación simplificada para monotributistas y profesionales independientes.",
      description:
        "Ideal para contadores, abogados, médicos, diseñadores y cualquier profesional independiente. Facturación C simplificada, control de honorarios, recibos de cobro y reportes para la declaración jurada.",
      icon: "💼",
      features: [
        "Facturación C simplificada",
        "Control de honorarios",
        "Recibos de cobro",
        "Reportes para DDJJ",
        "Agenda de clientes",
        "Facturación recurrente",
      ],
    },
    {
      slug: "pymes",
      name: "PyMEs",
      shortDescription:
        "Sistema completo de facturación y gestión comercial para pequeñas y medianas empresas.",
      description:
        "Solución integral para PyMEs con facturación A y B, gestión de proveedores, cuentas corrientes, múltiples puntos de venta, reportes gerenciales y control de acceso por roles de usuario.",
      icon: "🏭",
      features: [
        "Facturación A y B",
        "Gestión de proveedores",
        "Cuentas corrientes completas",
        "Múltiples puntos de venta",
        "Reportes gerenciales",
        "Control de acceso por roles",
      ],
    },
    {
      slug: "retail",
      name: "Retail",
      shortDescription:
        "Gestión de cadenas de locales con stock centralizado y reportes por sucursal.",
      description:
        "Para cadenas de locales y franquicias. Gestión centralizada de stock, precios y promociones con reportes por sucursal, transferencias entre locales y un panel gerencial unificado.",
      icon: "🛒",
      features: [
        "Gestión multi-sucursal",
        "Stock centralizado",
        "Precios y promociones por local",
        "Transferencias entre sucursales",
        "Panel gerencial unificado",
        "Reportes por sucursal",
      ],
    },
  ],
  pricing: [
    {
      name: "Monotributo",
      price: "$9.900",
      period: "/mes",
      description: "Para monotributistas y profesionales",
      features: [
        "Facturación C ilimitada",
        "Hasta 100 productos",
        "1 punto de venta",
        "Reportes básicos",
        "1 usuario",
        "Soporte por email",
      ],
      highlighted: false,
      cta: "Empezar gratis",
    },
    {
      name: "PyME",
      price: "$24.900",
      period: "/mes",
      description: "Para pequeñas y medianas empresas",
      features: [
        "Facturación A, B, C ilimitada",
        "Productos ilimitados",
        "Control de stock",
        "Cuentas corrientes",
        "Hasta 3 puntos de venta",
        "5 usuarios",
        "Soporte prioritario",
      ],
      highlighted: true,
      cta: "Empezar gratis",
    },
    {
      name: "Corporativo",
      price: "$49.900",
      period: "/mes",
      description: "Para empresas con múltiples sucursales",
      features: [
        "Todo lo de PyME",
        "Multi-sucursal",
        "API para integraciones",
        "Conciliación bancaria",
        "Usuarios ilimitados",
        "Puntos de venta ilimitados",
        "Account manager dedicado",
      ],
      highlighted: false,
      cta: "Contactar ventas",
    },
  ],
  blog: [
    {
      slug: "facturacion-electronica-obligatoria",
      title: "Facturación electrónica obligatoria: todo lo que necesitás saber",
      excerpt:
        "Guía completa sobre la obligatoriedad de la factura electrónica en Argentina, quiénes deben emitirla y cómo cumplir con AFIP.",
      date: "2025-01-20",
      author: "Equipo Facturalo Simple",
      category: "Legal",
      readTime: "10 min",
    },
    {
      slug: "errores-comunes-facturacion",
      title: "Los 7 errores más comunes al facturar y cómo evitarlos",
      excerpt:
        "Desde datos fiscales incorrectos hasta CAE vencidos: los errores que más dolores de cabeza generan y cómo prevenirlos.",
      date: "2025-01-12",
      author: "Laura Méndez",
      category: "Tips",
      readTime: "6 min",
    },
    {
      slug: "control-stock-pyme",
      title: "Control de stock para PyMEs: por qué no podés seguir con Excel",
      excerpt:
        "El inventario manual tiene los días contados. Te mostramos cómo un sistema de stock puede ahorrarte tiempo y dinero.",
      date: "2025-01-05",
      author: "Carlos Ruiz",
      category: "Gestión",
      readTime: "7 min",
    },
    {
      slug: "monotributo-categorias-2025",
      title: "Categorías de Monotributo 2025: tabla actualizada y cómo elegir",
      excerpt:
        "Las nuevas categorías de Monotributo con los topes actualizados. Te ayudamos a elegir la categoría correcta para tu actividad.",
      date: "2024-12-28",
      author: "Equipo Facturalo Simple",
      category: "Legal",
      readTime: "5 min",
    },
  ],
  learning: [
    {
      title: "Cómo empezar a facturar en 5 minutos",
      description: "Configurá tu cuenta y emití tu primera factura electrónica rápidamente.",
      type: "tutorial",
      duration: "5 min",
      level: "Principiante",
    },
    {
      title: "Configurar puntos de venta en AFIP",
      description: "Paso a paso para dar de alta tus puntos de venta en AFIP y vincularlos con Facturalo.",
      type: "guía",
      duration: "10 min",
      level: "Intermedio",
    },
    {
      title: "Gestión de stock para comercios",
      description: "Aprendé a cargar productos, configurar alertas y gestionar múltiples depósitos.",
      type: "video",
      duration: "15 min",
      level: "Principiante",
    },
    {
      title: "Reportes contables y libro IVA",
      description: "Generá los reportes que tu contador necesita en segundos.",
      type: "webinar",
      duration: "30 min",
      level: "Avanzado",
    },
  ],
};

// ===================================================================
// ACADEMIAS
// ===================================================================
const academias: Product = {
  slug: "cds-academias",
  routeBase: "/cds-academias",
  name: "CDS Academias",
  tagline: "Gestión académica integral",
  description:
    "Software de gestión académica que administra aranceles, materias, notas y carreras. Pensado para instituciones educativas que quieren dejar atrás las planillas y digitalizar su gestión.",
  heroTitle: "La gestión académica que tu institución necesita",
  heroSubtitle:
    "Administrá aranceles, materias, notas y carreras desde una única plataforma. Portal de alumnos, comunicación automatizada y reportes en tiempo real.",
  theme: "academias",
  primaryColor: "#1E3A5F",
  icon: "🎓",
  benefits: [
    {
      title: "Aranceles sin morosidad",
      description:
        "Gestión automatizada de cuotas con recordatorios, recargos por mora y múltiples medios de pago. Reducí la morosidad hasta un 40%.",
      icon: "💰",
    },
    {
      title: "Notas y actas digitales",
      description:
        "Los docentes cargan notas desde cualquier dispositivo. Actas digitales, promedio automático y libro de calificaciones en la nube.",
      icon: "📝",
    },
    {
      title: "Portal del alumno",
      description:
        "Cada alumno accede a sus notas, estado de cuenta, materias inscriptas y certificados desde su portal personal.",
      icon: "👤",
    },
    {
      title: "Comunicación integrada",
      description:
        "Notificaciones por email, WhatsApp y push. Comunicá novedades, vencimientos y recordatorios de forma automática.",
      icon: "📱",
    },
  ],
  modules: [
    {
      slug: "gestion-aranceles",
      name: "Gestión de Aranceles",
      shortDescription:
        "Administración de cuotas, becas, recargos y múltiples medios de pago.",
      description:
        "Sistema completo de gestión de aranceles con generación automática de cuotas, becas y descuentos configurables, recargos por mora, y múltiples medios de pago. Seguimiento de deudores con recordatorios automáticos y reportes de recaudación.",
      icon: "💰",
      features: [
        "Generación automática de cuotas",
        "Becas y descuentos configurables",
        "Recargos por mora automáticos",
        "Múltiples medios de pago",
        "Recordatorios de vencimiento",
        "Reportes de recaudación y morosidad",
      ],
    },
    {
      slug: "gestion-materias-notas",
      name: "Gestión de Materias y Notas",
      shortDescription:
        "Carga de notas por docentes, actas de examen y libro de calificaciones digital.",
      description:
        "Los docentes cargan notas desde la plataforma web o app móvil. Configuración flexible de criterios de evaluación, actas de examen digital con firma electrónica, promedio automático y libro de calificaciones en la nube accesible para autoridades.",
      icon: "📝",
      features: [
        "Carga de notas online/móvil",
        "Criterios de evaluación flexibles",
        "Actas de examen digitales",
        "Promedio automático configurable",
        "Libro de calificaciones en la nube",
        "Correlatividades automáticas",
      ],
    },
    {
      slug: "gestion-carreras",
      name: "Gestión de Carreras",
      shortDescription:
        "Planes de estudio, correlatividades y seguimiento del avance de cada alumno.",
      description:
        "Definí planes de estudio con materias, correlatividades, carga horaria y requisitos. Seguimiento del avance de cada alumno con porcentaje de carrera completado, materias pendientes y estimación de fecha de graduación.",
      icon: "🎓",
      features: [
        "Planes de estudio configurables",
        "Correlatividades automáticas",
        "Seguimiento de avance por alumno",
        "Carga horaria por materia",
        "Requisitos de graduación",
        "Historial académico completo",
      ],
    },
    {
      slug: "portal-alumnos",
      name: "Portal de Alumnos",
      shortDescription:
        "Acceso personalizado para que los alumnos consulten notas, estado de cuenta y más.",
      description:
        "Portal web responsive donde cada alumno accede con su usuario personal a: notas y promedios, estado de cuenta y comprobantes de pago, materias inscriptas, plan de carrera y avance, certificados descargables y notificaciones institucionales.",
      icon: "👤",
      features: [
        "Consulta de notas y promedios",
        "Estado de cuenta y pagos",
        "Inscripción a materias online",
        "Certificados descargables",
        "Notificaciones personalizadas",
        "Historial académico completo",
      ],
    },
    {
      slug: "comunicacion",
      name: "Comunicación Institucional",
      shortDescription:
        "Notificaciones automáticas por email, WhatsApp y push a alumnos y familias.",
      description:
        "Sistema de comunicación multicanal para mantener informados a alumnos, padres y docentes. Notificaciones automáticas de vencimientos, notas publicadas, novedades institucionales. Campañas segmentadas por carrera, año o situación arancelaria.",
      icon: "📱",
      features: [
        "Email, WhatsApp y notificaciones push",
        "Recordatorios automáticos de pago",
        "Alertas de notas publicadas",
        "Campañas segmentadas",
        "Calendario institucional",
        "Mensajería interna docente-alumno",
      ],
    },
    {
      slug: "reportes-academicos",
      name: "Reportes Académicos",
      shortDescription:
        "Estadísticas de rendimiento, deserción, recaudación y más.",
      description:
        "Dashboards con métricas clave: tasa de aprobación, deserción, morosidad, recaudación y rendimiento por materia. Reportes exportables para autoridades, acreditaciones y auditorías.",
      icon: "📊",
      features: [
        "Tasa de aprobación por materia",
        "Análisis de deserción",
        "Reportes de recaudación",
        "Rendimiento por cohorte",
        "Exportación para acreditaciones",
        "Dashboard en tiempo real",
      ],
    },
  ],
  types: [
    {
      slug: "academias-privadas",
      name: "Academias Privadas",
      shortDescription:
        "Gestión integral para academias de idiomas, arte, música y formación profesional.",
      description:
        "Solución flexible para academias que ofrecen cursos cortos y talleres. Gestión de inscripciones por ciclo, cuotas diferenciadas por curso, certificados de asistencia y rendimiento, y marketing para captación de nuevos alumnos.",
      icon: "🎨",
      features: [
        "Inscripciones por ciclo/taller",
        "Cuotas diferenciadas por curso",
        "Certificados de asistencia",
        "Gestión de horarios y aulas",
        "Marketing y captación",
        "Control de asistencia",
      ],
    },
    {
      slug: "institutos-terciarios",
      name: "Institutos Terciarios",
      shortDescription:
        "Sistema académico completo para terciarios con carreras, planes y correlatividades.",
      description:
        "Pensado para institutos de formación técnica y profesional con carreras de 2 a 4 años. Gestión completa de planes de estudio, correlatividades, mesa de exámenes, actas oficiales y seguimiento de cohortes para informes ministeriales.",
      icon: "🏫",
      features: [
        "Planes de estudio oficiales",
        "Mesa de exámenes configurable",
        "Actas oficiales digitales",
        "Seguimiento de cohortes",
        "Informes ministeriales",
        "Título y analítico digital",
      ],
    },
    {
      slug: "escuelas-oficios",
      name: "Escuelas de Oficios",
      shortDescription:
        "Gestión simplificada para escuelas de oficios con cursos cortos y certificaciones.",
      description:
        "Para escuelas que ofrecen capacitaciones técnicas y oficios: plomería, electricidad, gastronomía, programación, etc. Gestión de cursos con duración variable, certificación por competencias, seguimiento de prácticas profesionales y bolsa de trabajo.",
      icon: "🔧",
      features: [
        "Cursos de duración variable",
        "Certificación por competencias",
        "Seguimiento de prácticas",
        "Bolsa de trabajo integrada",
        "Gestión de materiales y talleres",
        "Convenios con empresas",
      ],
    },
  ],
  pricing: [
    {
      name: "Básico",
      price: "$19.900",
      period: "/mes",
      description: "Para academias de hasta 100 alumnos",
      features: [
        "Hasta 100 alumnos",
        "Gestión de aranceles",
        "Carga de notas",
        "Portal de alumnos básico",
        "2 usuarios administrativos",
        "Soporte por email",
      ],
      highlighted: false,
      cta: "Comenzar prueba gratis",
    },
    {
      name: "Institucional",
      price: "$39.900",
      period: "/mes",
      description: "Para instituciones de hasta 500 alumnos",
      features: [
        "Hasta 500 alumnos",
        "Todo lo de Básico",
        "Gestión de carreras y correlatividades",
        "Comunicación multicanal",
        "Reportes avanzados",
        "10 usuarios",
        "Soporte prioritario",
      ],
      highlighted: true,
      cta: "Comenzar prueba gratis",
    },
    {
      name: "Premium",
      price: "Personalizado",
      period: "",
      description: "Para grandes instituciones",
      features: [
        "Alumnos ilimitados",
        "Todo lo de Institucional",
        "API para integraciones",
        "Multi-sede",
        "Usuarios ilimitados",
        "Personalización de marca",
        "Account manager dedicado",
        "SLA garantizado",
      ],
      highlighted: false,
      cta: "Contactar ventas",
    },
  ],
  blog: [
    {
      slug: "digitalizacion-gestion-academica",
      title: "Por qué digitalizar la gestión académica ya no es opcional",
      excerpt:
        "Las instituciones que siguen con planillas y papeles pierden alumnos. Te contamos los beneficios concretos de la digitalización.",
      date: "2025-01-18",
      author: "Equipo CDS Academias",
      category: "Transformación Digital",
      readTime: "8 min",
    },
    {
      slug: "reducir-morosidad-aranceles",
      title: "5 estrategias para reducir la morosidad en aranceles",
      excerpt:
        "Recordatorios automáticos, descuentos por pago adelantado y más: las tácticas que funcionan para cobrar a tiempo.",
      date: "2025-01-10",
      author: "Sofía Peralta",
      category: "Gestión",
      readTime: "6 min",
    },
    {
      slug: "portal-alumnos-satisfaccion",
      title: "Cómo un portal de alumnos mejora la satisfacción estudiantil",
      excerpt:
        "Los alumnos quieren información en tiempo real. Un portal bien diseñado reduce consultas administrativas en un 60%.",
      date: "2025-01-03",
      author: "Diego Martínez",
      category: "Experiencia",
      readTime: "5 min",
    },
    {
      slug: "acreditacion-institucional-datos",
      title: "Acreditación institucional: cómo los datos simplifican el proceso",
      excerpt:
        "Preparar la documentación para acreditaciones puede llevar meses. Con datos digitalizados, lo hacés en días.",
      date: "2024-12-22",
      author: "Equipo CDS Academias",
      category: "Regulatorio",
      readTime: "7 min",
    },
  ],
  learning: [
    {
      title: "Configurar tu institución en CDS Academias",
      description: "Cargá carreras, materias, docentes y alumnos paso a paso.",
      type: "tutorial",
      duration: "30 min",
      level: "Principiante",
    },
    {
      title: "Gestión de aranceles y cobranzas",
      description: "Configurá cuotas, becas, recargos y medios de pago para tu institución.",
      type: "guía",
      duration: "20 min",
      level: "Intermedio",
    },
    {
      title: "Portal del alumno: guía para administradores",
      description: "Personalizá y configurá el portal de autogestión de tus alumnos.",
      type: "video",
      duration: "15 min",
      level: "Intermedio",
    },
    {
      title: "Reportes para acreditación institucional",
      description: "Generá los reportes que necesitás para procesos de acreditación y auditoría.",
      type: "webinar",
      duration: "40 min",
      level: "Avanzado",
    },
  ],
};

// ===================================================================
// PRODUCT MAP & HELPERS
// ===================================================================
export const products: Record<string, Product> = {
  "cds-hoteleria": hoteleria,
  "cds-facturalo-simple": facturaloSimple,
  "cds-academias": academias,
};

export const productList: Product[] = [hoteleria, facturaloSimple, academias];

export function getProduct(slug: string): Product | undefined {
  return products[slug];
}

export function getModule(productSlug: string, moduleSlug: string): Module | undefined {
  const product = getProduct(productSlug);
  return product?.modules.find((m) => m.slug === moduleSlug);
}

export function getProductType(productSlug: string, typeSlug: string): ProductType | undefined {
  const product = getProduct(productSlug);
  return product?.types.find((t) => t.slug === typeSlug);
}

// Navigation links per product
export function getProductNavLinks(productSlug: string) {
  return [
    { label: "Inicio", href: `/${productSlug}` },
    { label: "Módulos", href: `/${productSlug}/modulos` },
    { label: "Tipos", href: `/${productSlug}/tipos` },
    { label: "Precios", href: `/${productSlug}/precios` },
    { label: "Aprendizaje", href: `/${productSlug}/aprendizaje` },
    { label: "Blog", href: `/${productSlug}/blog` },
  ];
}
