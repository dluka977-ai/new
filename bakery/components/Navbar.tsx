"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#onama", label: "O Nama" },
  { href: "#meni", label: "Meni" },
  { href: "#galerija", label: "Galerija" },
  { href: "#utisci", label: "Utisci" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-amber-900/10 py-3" : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#vrh"
          className="font-sc text-xl tracking-widest text-amber-800 hover:text-amber-600 transition-colors cursor-pointer"
          style={{ fontFamily: "'Playfair Display SC', serif" }}
        >
          La BoULANGeRie
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-semibold transition-colors duration-200 tracking-wide cursor-pointer relative group ${
                  scrolled
                    ? "text-stone-700 hover:text-amber-700"
                    : "text-white hover:text-amber-300"
                }`}
              >
                {l.label}
                <span className={`absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300 ${scrolled ? "bg-amber-600" : "bg-amber-300"}`} />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#kontakt"
          className={`hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg cursor-pointer ${
            scrolled
              ? "bg-amber-800 hover:bg-amber-700 text-amber-50 hover:shadow-amber-800/30"
              : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
          }`}
        >
          Naruči Online
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Otvori meni"
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
        >
          <span className={`block w-6 h-0.5 bg-amber-800 transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-amber-800 transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-amber-800 transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-amber-100"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium text-stone-700 hover:text-amber-700 transition-colors py-1 cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#kontakt"
                  onClick={() => setOpen(false)}
                  className="inline-block bg-amber-800 text-amber-50 text-sm font-semibold px-5 py-2.5 rounded-full cursor-pointer"
                >
                  Naruči Online
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
