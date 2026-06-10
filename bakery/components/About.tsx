"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0, 0, 1] } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="onama" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800&q=70')" }}
      />
      <div className="absolute inset-0 bg-amber-50/92" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Images collage */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="relative"
          >
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
                alt="Sveže pečeni hleb u La BoULANGeRie"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="absolute -bottom-8 right-0 md:-right-4 w-40 md:w-48 rounded-xl overflow-hidden shadow-xl shadow-amber-900/20 border-4 border-amber-50"
            >
              <img
                src="https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=400&q=80"
                alt="Kroasani iz pekare"
                className="w-full h-36 object-cover"
                loading="lazy"
              />
            </motion.div>
            {/* Decorative badge */}
            <motion.div
              variants={fadeUp}
              className="absolute -top-6 left-0 md:-left-4 bg-amber-800 text-amber-50 rounded-2xl p-4 shadow-lg"
            >
              <p className="font-sc text-2xl font-bold leading-none" style={{ fontFamily: "'Playfair Display SC', serif" }}>15+</p>
              <p className="text-xs tracking-wider mt-1 opacity-80">Godina tradicije</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          >
            <motion.p variants={fadeUp} className="text-amber-700 text-sm font-semibold tracking-[0.25em] uppercase mb-4 font-sc" style={{ fontFamily: "'Playfair Display SC', serif" }}>
              Naša Priča
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-stone-800 leading-tight mb-6">
              Tradicija Okusa,{" "}
              <span className="text-amber-700 italic">Strast Pečenja</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-stone-600 text-lg leading-relaxed mb-6">
              U <strong className="text-stone-800">La BoULANGeRie</strong>, kombinujemo tradicionalne francuske tehnike pečenja sa premium sastojcima kako bismo stvorili nezaboravne hlebove, peciva i deserete.
            </motion.p>
            <motion.p variants={fadeUp} className="text-stone-600 leading-relaxed mb-8">
              Svaki kroasan, svaki baguet, svaki kolač — ručno je pripremljen svakog jutra od podneva do ponoći, koristeći brašno iz eko mlina, domaće maslac i svežo voće od lokalnih proizvođača. Naš šef pekar je svoju zanat usavršio u Parizu i donosi malo Francuske pravo u srce Beograda.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 mb-8">
              {[
                { num: "100%", label: "Domaći sastojci" },
                { num: "Dnevno", label: "Svež asortiman" },
                { num: "Ručno", label: "Svaki komad" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-amber-700" style={{ fontFamily: "'Playfair Display', serif" }}>{s.num}</p>
                  <p className="text-sm text-stone-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="#meni"
              className="inline-flex items-center gap-2 bg-amber-800 hover:bg-amber-700 text-amber-50 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-amber-800/30 cursor-pointer"
            >
              Istraži naš meni
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
