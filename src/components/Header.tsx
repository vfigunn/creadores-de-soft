"use client";

import Link from "next/link";
import { useState } from "react";
import { productList } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/creadores-de-soft-banner.png"
              alt="Creadores de Soft"
              className="h-9 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-[var(--corp-primary)] transition-colors rounded-lg hover:bg-orange-50"
            >
              Inicio
            </Link>

            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-[var(--corp-primary)] transition-colors rounded-lg hover:bg-orange-50 flex items-center gap-1">
                Productos
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 pt-2 w-72">
                  <div className="bg-white rounded-xl shadow-xl border border-neutral-100 p-2 animate-fade-in">
                    {productList.map((product) => (
                      <Link
                        key={product.slug}
                        href={product.routeBase}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-50 transition-colors group"
                        onClick={() => setProductsOpen(false)}
                      >
                        <span className="text-2xl">{product.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-neutral-800 group-hover:text-[var(--corp-primary)] transition-colors">
                            {product.name}
                          </p>
                          <p className="text-xs text-neutral-500">{product.tagline}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#nosotros"
              className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-[var(--corp-primary)] transition-colors rounded-lg hover:bg-orange-50"
            >
              Nosotros
            </Link>
            <Link
              href="/#contacto"
              className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-[var(--corp-primary)] transition-colors rounded-lg hover:bg-orange-50"
            >
              Contacto
            </Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#contacto"
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, var(--corp-primary), var(--corp-primary-light))" }}
            >
              Contactanos
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Menú"
          >
            <svg className="w-6 h-6 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-neutral-700 rounded-lg hover:bg-orange-50"
            >
              Inicio
            </Link>
            <div className="px-4 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              Productos
            </div>
            {productList.map((product) => (
              <Link
                key={product.slug}
                href={product.routeBase}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50"
              >
                <span>{product.icon}</span>
                {product.name}
              </Link>
            ))}
            <Link
              href="/#nosotros"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-neutral-700 rounded-lg hover:bg-orange-50"
            >
              Nosotros
            </Link>
            <Link
              href="/#contacto"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-neutral-700 rounded-lg hover:bg-orange-50"
            >
              Contacto
            </Link>
            <div className="pt-2">
              <Link
                href="/#contacto"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white rounded-lg"
                style={{ background: "linear-gradient(135deg, var(--corp-primary), var(--corp-primary-light))" }}
              >
                Contactanos
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
