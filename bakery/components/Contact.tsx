"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const locations = [
  {
    id: "kneza",
    name: "Kneza Miloša",
    address: "Kneza Miloša 50, Beograd",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.4!2d20.4612!3d44.8013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab85d46ac0b%3A0x1e53e5cb1aab72bc!2sKneza%20Milo%C5%A1a%2050%2C%20Beograd!5e0!3m2!1ssr!2srs!4v1716000000000!5m2!1ssr!2srs",
    mapsUrl: "https://www.google.com/maps/search/Kneza+Miloša+50,+Beograd",
  },
  {
    id: "milutina",
    name: "Kralja Milutina",
    address: "Kralja Milutina 35, Beograd 11000",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.8!2d20.4633!3d44.7985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa4e1a55555%3A0x1234567890abcdef!2sKralja%20Milutina%2035%2C%20Beograd!5e0!3m2!1ssr!2srs!4v1716000000001!5m2!1ssr!2srs",
    mapsUrl: "https://www.google.com/maps/search/Kralja+Milutina+35,+Beograd",
  },
  {
    id: "pjaron",
    name: "Pjaron De Mondezira",
    address: "Pjarona De Mondezira 4, Beograd 11000",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.2!2d20.4589!3d44.8025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab0e0000001%3A0xabcdef1234567890!2sPjaron%20De%20Mondezira%204%2C%20Beograd!5e0!3m2!1ssr!2srs!4v1716000000002!5m2!1ssr!2srs",
    mapsUrl: "https://www.google.com/maps/search/Pjarona+De+Mondezira+4,+Beograd",
  },
];

const pinIcon = (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeLocation, setActiveLocation] = useState("kneza");

  const active = locations.find((l) => l.id === activeLocation)!;

  return (
    <section id="kontakt" className="py-24 md:py-32" style={{ background: "var(--color-warm-white)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-amber-700 text-sm font-semibold tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "'Playfair Display SC', serif" }}>
            Pronađite Nas
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Naše <span className="text-amber-700 italic">Lokacije</span>
          </h2>
          <p className="text-stone-500 max-w-md mx-auto">
            Tri lokacije u srcu Beograda — uvek blizu vas!
          </p>
        </motion.div>

        {/* Location tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocation(loc.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeLocation === loc.id
                  ? "bg-amber-800 text-white shadow-md shadow-amber-800/30"
                  : "bg-stone-100 text-stone-600 hover:bg-amber-100 hover:text-amber-800"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {loc.name}
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            {/* All locations list */}
            <div className="space-y-3">
              {locations.map((loc) => (
                <div
                  key={loc.id}
                  onClick={() => setActiveLocation(loc.id)}
                  className={`flex items-start gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-200 ${
                    activeLocation === loc.id
                      ? "bg-amber-50 border-2 border-amber-300"
                      : "bg-white border-2 border-transparent hover:border-amber-200"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    activeLocation === loc.id ? "bg-amber-700 text-white" : "bg-amber-100 text-amber-700"
                  }`}>
                    {pinIcon}
                  </div>
                  <div>
                    <p className="font-bold text-stone-800 text-sm">{loc.name}</p>
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-stone-500 text-sm hover:text-amber-700 transition-colors"
                    >
                      {loc.address}
                    </a>
                  </div>
                  {activeLocation === loc.id && (
                    <span className="ml-auto text-xs bg-amber-700 text-white px-2 py-1 rounded-full font-semibold">
                      Aktivna
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Contact + hours */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-0.5">Telefon</p>
                <a href="tel:0698833090" className="text-stone-800 font-semibold hover:text-amber-700 transition-colors cursor-pointer">
                  069 8833090
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-5 border border-amber-200/60">
              <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Radno Vreme</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-stone-700 font-medium">Ponedeljak – Nedeljа</span>
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">08:00 – 18:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-700 text-sm font-medium">Otvoreno sada</span>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://wolt.com/en/srb/belgrade/venue/la-boulangerie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#009DE0] hover:bg-[#0088c2] text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg cursor-pointer text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4-2.37V7z" />
                </svg>
                Naruči na Wolt
              </a>
              <a
                href="tel:0698833090"
                className="inline-flex items-center gap-2 bg-amber-800 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-amber-800/30 cursor-pointer text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Pozovi nas
              </a>
              <a
                href="https://instagram.com/la_boulangerie_belgrade"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Google Maps embed — switches with active location */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl shadow-stone-200 border border-stone-100"
          >
            <motion.iframe
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              title={`La BoULANGeRie — ${active.name}`}
              src={active.mapSrc}
              width="100%"
              height="460"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
