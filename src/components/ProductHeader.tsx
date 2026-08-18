"use client";

import Link from "next/link";
import { useState } from "react";
import { getProductNavLinks, type Product } from "@/lib/data";

interface ProductHeaderProps {
  product: Product;
}

export default function ProductHeader({ product }: ProductHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = getProductNavLinks(product.slug);

  return (
    <header
      className="sticky top-0 z-50 border-b transition-colors"
      style={{
        background: `rgba(255,255,255,0.85)`,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderColor: `color-mix(in srgb, ${product.primaryColor} 15%, transparent)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Back to corporate + Product name */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-neutral-400 hover:text-neutral-600 transition-colors flex items-center gap-1 text-xs"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Creadores de Soft</span>
            </Link>
            <div className="w-px h-5 bg-neutral-200" />
            <Link href={product.routeBase} className="flex items-center gap-2 group">
              <span className="text-xl">{product.icon}</span>
              <span
                className="font-bold text-sm sm:text-base transition-colors"
                style={{ color: product.primaryColor }}
              >
                {product.name}
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-neutral-600 rounded-lg transition-all duration-200"
                style={{
                  ["--hover-bg" as string]: `color-mix(in srgb, ${product.primaryColor} 8%, transparent)`,
                  ["--hover-color" as string]: product.primaryColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `color-mix(in srgb, ${product.primaryColor} 8%, transparent)`;
                  e.currentTarget.style.color = product.primaryColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href={`/${product.slug}/precios`}
              className="hidden sm:block px-4 py-2 text-xs font-semibold text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: product.primaryColor }}
            >
              Ver precios
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="Menú"
            >
              <svg className="w-5 h-5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100 animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${product.slug}/precios`}
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-2.5 mt-2 text-sm font-semibold text-white rounded-lg"
              style={{ backgroundColor: product.primaryColor }}
            >
              Ver precios
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
