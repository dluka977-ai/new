"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
    role: "Prave da se ostvaruju snovi",
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

  return (
    <section id="utisci" className="py-24 md:py-32" style={{ background: "var(--color-cream)" }}>
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
            Utisci Gostiju
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Šta Kažu <span className="text-amber-700 italic">Naši Gosti</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-stone-500">
            <Stars count={5} />
            <span className="text-sm font-medium">4.9 prosečna ocena · 200+ utisaka</span>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm shadow-stone-200 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-amber-200" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8C6.134 8 3 11.134 3 15s3.134 7 7 7c1.247 0 2.42-.328 3.432-.902C12.818 23.28 11.5 26 8 26H6v3h2c5.933 0 9-4.8 9-10V15c0-3.866-3.134-7-7-7zm13 0c-3.866 0-7 3.134-7 7s3.134 7 7 7c1.247 0 2.42-.328 3.432-.902C25.818 23.28 24.5 26 21 26h-2v3h2c5.933 0 9-4.8 9-10V15c0-3.866-3.134-7-7-7z" />
              </svg>

              <p className="text-stone-600 text-sm leading-relaxed flex-1">"{r.text}"</p>

              <div className="border-t border-stone-100 pt-4 flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{r.name}</p>
                  <p className="text-stone-400 text-xs">{r.role}</p>
                </div>
                <div className="ml-auto">
                  <Stars count={r.rating} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
