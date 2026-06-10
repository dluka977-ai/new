"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const reviews = [
  {
    name: "Marija Petrović",
    role: "Beograđanka",
    avatar: "https://i.pravatar.cc/80?img=47",
    rating: 5,
    text: "Kroasani su jednostavno neverovatni! Svaki put kada prođem pored, ne mogu da odolim. Tačno onako kao u Parizu — hrskavi, masleni, savršeni.",
  },
  {
    name: "Stefan Jovanović",
    role: "Food bloger",
    avatar: "https://i.pravatar.cc/80?img=12",
    rating: 5,
    text: "La BoULANGeRie je otkriće Beograda. Pain au chocolat je na drugom nivou, a kafa odlično prati sve slastice. Apsolutno preporučujem!",
  },
  {
    name: "Ana Nikolić",
    role: "Marketing menadžer",
    avatar: "https://i.pravatar.cc/80?img=32",
    rating: 5,
    text: "Naručila sam artisan tortu za godišnjicu i svi gosti su bili oduševljeni. Profesionalni, brza dostava i ukus koji ne zaboravite.",
  },
  {
    name: "Nikola Đorđević",
    role: "Arhitekta",
    avatar: "https://i.pravatar.cc/80?img=15",
    rating: 5,
    text: "Dolazim svako jutro po baguete. Uvek svježi, uvek topli, uvek savršeni. Enterijer je topao i prijatan — idealno mesto za jutarnju kafu.",
  },
  {
    name: "Jelena Stojanović",
    role: "Dizajnerka",
    avatar: "https://i.pravatar.cc/80?img=25",
    rating: 5,
    text: "Mille Feuille je neverovatno dobar — kremast, hrskav, savršeno uravnotežen. Svaki poseta je kao malo putovanje u Pariz.",
  },
  {
    name: "Miloš Ristić",
    role: "Preduzetnik",
    avatar: "https://i.pravatar.cc/80?img=8",
    rating: 5,
    text: "Odlična kafa i savršen badem kroasan ujutru — savršen start dana. Osoblje je uvek ljubazno i osmeh nikad ne nedostaje.",
  },
  {
    name: "Tijana Lazović",
    role: "Studentkinja",
    avatar: "https://i.pravatar.cc/80?img=56",
    rating: 5,
    text: "Basque Cheesecake je nešto što nisi probala nigde u Beogradu. Kremast, zlatno-smeđ, prosto se topi u ustima. Zavisnost!",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => go((current - 1 + reviews.length) % reviews.length);
  const next = () => go((current + 1) % reviews.length);

  // Auto-advance
  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(t);
  }, [inView]);

  const r = reviews[current];

  return (
    <section id="utisci" className="py-24 md:py-32 bg-stone-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-800/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-amber-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "'Playfair Display SC', serif" }}>
            Utisci Gostiju
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Šta Kažu <span className="text-amber-300 italic">Naši Gosti</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-stone-400">
            <Stars count={5} />
            <span className="text-sm font-medium">4.9 prosečna ocena · 200+ utisaka</span>
          </div>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Card */}
          <div className="relative overflow-hidden min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -80 }}
                transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
                className="w-full glass-dark rounded-3xl p-8 md:p-12 text-center"
              >
                {/* Quote */}
                <svg className="w-10 h-10 text-amber-600/50 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8C6.134 8 3 11.134 3 15s3.134 7 7 7c1.247 0 2.42-.328 3.432-.902C12.818 23.28 11.5 26 8 26H6v3h2c5.933 0 9-4.8 9-10V15c0-3.866-3.134-7-7-7zm13 0c-3.866 0-7 3.134-7 7s3.134 7 7 7c1.247 0 2.42-.328 3.432-.902C25.818 23.28 24.5 26 21 26h-2v3h2c5.933 0 9-4.8 9-10V15c0-3.866-3.134-7-7-7z" />
                </svg>

                <p className="text-stone-200 text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{r.text}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-600/40"
                  />
                  <div className="text-left">
                    <p className="font-bold text-white text-sm">{r.name}</p>
                    <p className="text-stone-400 text-xs">{r.role}</p>
                  </div>
                  <div className="ml-2">
                    <Stars count={r.rating} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Prethodna recenzija"
              className="w-11 h-11 rounded-full border border-amber-700/50 text-amber-400 hover:bg-amber-800/40 hover:border-amber-500 flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Recenzija ${i + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    i === current
                      ? "w-8 h-2.5 bg-amber-500"
                      : "w-2.5 h-2.5 bg-stone-600 hover:bg-amber-700"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Sledeća recenzija"
              className="w-11 h-11 rounded-full border border-amber-700/50 text-amber-400 hover:bg-amber-800/40 hover:border-amber-500 flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
