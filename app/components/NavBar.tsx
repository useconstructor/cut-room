"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Booking", href: "#booking" },
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
          ? "bg-[#0d1829]/95 backdrop-blur-sm shadow-lg shadow-black/40"
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
            className="text-[#c9a962] group-hover:rotate-12 transition-transform duration-200"
          >
            <path
              d="M8 20L20 8M8 8c0 0 2-2 4 0s2 4 0 6-4 2-6 0-2-4 0-6zm12 12c0 0 2-2 4 0s2 4 0 6-4 2-6 0-2-4 0-6z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-heading text-xl font-bold tracking-widest text-[#ffffff]">
            THE CUT ROOM
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body font-medium tracking-wider text-sm text-[#ffffff]/70 hover:text-[#c9a962] transition-colors duration-200 uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="font-body font-semibold tracking-wider text-sm bg-[#c9a962] text-[#0d1829] px-5 py-2 hover:bg-[#b8953f] transition-colors duration-200 uppercase"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#ffffff] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#ffffff] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#ffffff] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#0d1829] border-t border-[#2d3e5f] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body font-medium tracking-wider text-base text-[#ffffff]/80 hover:text-[#c9a962] transition-colors duration-200 uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="font-body font-semibold tracking-wider text-base bg-[#c9a962] text-[#0d1829] px-5 py-3 text-center hover:bg-[#b8953f] transition-colors duration-200 uppercase"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}
