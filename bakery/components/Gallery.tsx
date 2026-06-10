"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const images = [
  { src: "/la1.png", alt: "La BoULANGeRie — priprema kroasana" },
  { src: "/la2.png", alt: "La BoULANGeRie — sendvič" },
  { src: "/la3.png", alt: "La BoULANGeRie — hleb sa semenkama" },
  { src: "/la4.png", alt: "La BoULANGeRie — čokoladni kroasani" },
  { src: "/la5.png", alt: "La BoULANGeRie — bagueti" },
  { src: "/la6.png", alt: "La BoULANGeRie — peciva" },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="galerija" className="py-24 md:py-32 bg-stone-50">
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
            Galerija
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Pogledajte Naš <span className="text-amber-700 italic">Svet Ukusa</span>
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto">
            Svaki detalj, svaki komad — ručno izrađen sa ljubavlju.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="masonry">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              onClick={() => setLightbox(img.src)}
              className="group relative overflow-hidden rounded-xl cursor-zoom-in"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ height: i % 3 === 0 ? "280px" : "200px" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/30 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <motion.img
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            src={lightbox}
            alt="Galerija slika uvećana"
            className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
          />
          <button
            onClick={() => setLightbox(null)}
            aria-label="Zatvori"
            className="absolute top-4 right-4 text-white/70 hover:text-white cursor-pointer p-2"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </section>
  );
}
