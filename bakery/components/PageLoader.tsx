"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent browser from restoring scroll position
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-stone-900"
        >
          {/* Animated logo */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
            className="text-center"
          >
            <motion.p
              className="text-amber-300 text-4xl md:text-5xl font-bold tracking-widest mb-3"
              style={{ fontFamily: "'Playfair Display SC', serif" }}
            >
              La BoULANGeRie
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-amber-100/50 text-sm tracking-[0.3em] uppercase"
            >
              Beograd · Francuska Pekara
            </motion.p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="mt-10 w-48 h-px bg-stone-700 overflow-hidden rounded-full"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="h-full bg-gradient-to-r from-amber-600 to-amber-300 rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
