"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    name: "Kroasani",
    desc: "Hrskavi spolja, meki iznutra — pravi pariski kroasan od maslanog lisnatog testa.",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    badge: "Bestseler",
  },
  {
    name: "Bagueti",
    desc: "Klasični francuski baguet sa zlatnom korom i mekim, vazdušastim mrvicama.",
    img: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80",
    badge: null,
  },
  {
    name: "Pain au Chocolat",
    desc: "Svilenkasto lisnato testo omotano oko premium belgijske čokolade.",
    img: "https://images.unsplash.com/photo-1606101194559-9f047e7a45df?w=600&q=80",
    badge: "Omiljeno",
  },
  {
    name: "Artisan Torte",
    desc: "Višeslojne torte ukrašene sezonskim voćem i svežom kremom po narudžbini.",
    img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
    badge: null,
  },
  {
    name: "Svježi Sendviči",
    desc: "Domaći baguet sendviči sa svežim povrćem, sirom i delikatesnim nadevom.",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    badge: null,
  },
  {
    name: "Specijaliteti Kafe",
    desc: "Espresso, cappuccino i filteri kafe — savršen par uz svaki naš pekarsk specijal.",
    img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
    badge: "Novo",
  },
];

import type { Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0, 0, 1] as [number, number, number, number], delay: i * 0.08 },
  }),
};

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="meni" className="py-24 md:py-32" style={{ background: "var(--color-warm-white)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-amber-700 text-sm font-semibold tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "'Playfair Display SC', serif" }}>
            Naš Meni
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Pečeno Svaki Dan, <span className="text-amber-700 italic">Samo za Vas</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            Svaki proizvod nastaje po tradicionalnoj recepturi, od pažljivo odabranih sastojaka.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-md shadow-stone-200/80 hover:shadow-xl hover:shadow-amber-900/15 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {p.badge && (
                  <span className="absolute top-3 left-3 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-stone-800 mb-2">{p.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-amber-700 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  <span>Saznaj više</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-amber-800 hover:bg-amber-700 text-amber-50 font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-amber-800/30 cursor-pointer"
          >
            Naruči Online
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
