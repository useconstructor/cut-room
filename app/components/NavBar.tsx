"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Hours", href: "#hours" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A1A1A]/95 backdrop-blur-sm shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 group"
          onClick={() => setMenuOpen(false)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="text-[#D4AF37] group-hover:rotate-12 transition-transform duration-200"
          >
            <path
              d="M8 20L20 8M8 8c0 0 2-2 4 0s2 4 0 6-4 2-6 0-2-4 0-6zm12 12c0 0 2-2 4 0s2 4 0 6-4 2-6 0-2-4 0-6z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-heading text-xl font-bold tracking-widest text-[#F5F5F5]">
            THE CUT ROOM
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading font-medium tracking-wider text-sm text-[#F5F5F5]/70 hover:text-[#D4AF37] transition-colors duration-200 uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+15554238871"
            className="font-heading font-semibold tracking-wider text-sm bg-[#C41E3A] text-[#F5F5F5] px-5 py-2 hover:bg-[#A01830] transition-colors duration-200 uppercase"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#F5F5F5] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#F5F5F5] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#F5F5F5] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#1A1A1A] border-t border-[#2C2C2C] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading font-medium tracking-wider text-base text-[#F5F5F5]/80 hover:text-[#D4AF37] transition-colors duration-200 uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+15554238871"
            className="font-heading font-semibold tracking-wider text-base bg-[#C41E3A] text-[#F5F5F5] px-5 py-3 text-center hover:bg-[#A01830] transition-colors duration-200 uppercase"
            onClick={() => setMenuOpen(false)}
          >
            Call Now
          </a>
        </nav>
      )}
    </header>
  );
}
