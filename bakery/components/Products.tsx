"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useState } from "react";

const categories = [
  {
    id: "kroasani",
    label: "Kroasani",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    items: [
      { name: "Puter Kroasan", price: 280 },
      { name: "Pan Au Chocolat", price: 390 },
      { name: "Badem Kroasan", price: 420 },
      { name: "Kroasan Noisette", price: 480 },
      { name: "Crema Catalana", price: 450, desc: "Kroasan sa vanila kremom, kora narandže i karamelizovani šećer" },
      { name: "Cheesecake Croissant", price: 450 },
      { name: "La Décadanse Milk Chocolate", price: 470 },
      { name: "La Décadanse White Chocolate", price: 470 },
      { name: "Šunka Provolone Kroasan", price: 600 },
      { name: "Pršuta Provolone Kroasan", price: 600 },
      { name: "Mozzarella Croissant", price: 550 },
      { name: "Mortadella & Feta Croissant", price: 580 },
      { name: "Papillon", price: 590 },
      { name: "Lemon Roll", price: 380 },
      { name: "Kroasan Rol Sa Pistaćima", price: 380 },
      { name: "Kroasan Rol Sa Vanilom i Šumskim Voćem", price: 380 },
      { name: "Pain Au Raisin", price: 320, desc: "Vanilla krem i suvo grožđe" },
      { name: "Rogalach", price: 150 },
    ],
  },
  {
    id: "hleb",
    label: "Hleb",
    img: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=600&q=80",
    items: [
      { name: "Baguette", price: 230 },
      { name: "Baget Sa Maslinama", price: 310 },
      { name: "Pain Rustique 700g", price: 420, desc: "Beskvasni hleb od raženog i punog zrna brašna" },
      { name: "Focaccia Aux Olives", price: 340 },
      { name: "Rustik Sa Semenkama", price: 450 },
      { name: "Challah", price: 460 },
      { name: "Paysan", price: 520 },
      { name: "Pain Norvegien", price: 690 },
    ],
  },
  {
    id: "patisserie",
    label: "Patisserie",
    img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
    items: [
      { name: "Macaroon", price: 250, desc: "Čokolada-malina, mlečna čokolada-marakuja, bela čokolada-zeleni čaj-pistaći, toffee caramel" },
      { name: "Raspberry Macaron", price: 250 },
      { name: "Coconut Macaron", price: 250 },
      { name: "Choux", price: 490 },
      { name: "Mille Feuille", price: 690 },
      { name: "Limun Tart", price: 680 },
      { name: "Pistać Tart", price: 750 },
      { name: "Tart Exotique", price: 730 },
      { name: "Tarte Nougatine", price: 780 },
      { name: "Sezonsko Voće Tart", price: 790 },
      { name: "Basque Cheesecake", price: 680 },
      { name: "Cinabon", price: 470 },
      { name: "Limun Kolač", price: 1750 },
      { name: "Cimet Babka", price: 2600, desc: "Babka sa puterom i cimetom" },
      { name: "Basque Cheesecake Cela Torta (22cm)", price: 5440 },
      { name: "Limun Tart — Ceo Kolač (22cm)", price: 5440 },
      { name: "Tart Exotique — Ceo Kolač (22cm)", price: 5840 },
      { name: "Sezonsko Voće Tart — Ceo Kolač", price: 6320 },
    ],
  },
  {
    id: "kuhinja",
    label: "Iz Naše Kuhinje",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    items: [
      { name: "Homemade Granola", price: 820, desc: "Granola sa sezonskim voćem, mešani orasi, med, grčki jogurt" },
      { name: "Sourdough Avocado Toast", price: 990, desc: "Grilovani hleb, avokado, chilli pahuljice, maslinovo ulje, kuvano jaje" },
      { name: "Sourdough Avocado Toast Feta", price: 990, desc: "Grilovani hleb, avokado, feta sir, cherry paradajz, maslinovo ulje, čili pahuljice" },
      { name: "Pain Norvegien Avocado Toast", price: 1050, desc: "Osvežavajući avokado tost sa savršeno izbalansiranim začinima" },
      { name: "Soup Du Jour", price: 700 },
      { name: "Salade Verte", price: 700 },
      { name: "Escalope Viennoise", price: 1650 },
      { name: "Spaghetti Burrata", price: 1700 },
      { name: "Spaghetti Gambori", price: 1950 },
      { name: "Le Burger 180g", price: 1900 },
      { name: "Hokkaido Biftek Sendvič", price: 1500 },
      { name: "Steak Frites", price: 2450 },
    ],
  },
  {
    id: "kafa",
    label: "Kafe",
    img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
    items: [
      { name: "Espresso", price: 330 },
      { name: "Ristretto", price: 330 },
      { name: "Americano", price: 340 },
      { name: "Espresso Lungo", price: 340 },
      { name: "Cappuccino", price: 380 },
      { name: "Latte Macchiato", price: 420 },
      { name: "Oat Milk Cappuccino", price: 420 },
      { name: "Double Espresso", price: 430 },
      { name: "Cortado", price: 460 },
      { name: "Oat Milk Latte", price: 480 },
      { name: "Mocha", price: 450 },
      { name: "Cacao", price: 370 },
    ],
  },
  {
    id: "pica",
    label: "Pića",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80",
    items: [
      { name: "Limunana 250ml", price: 440 },
      { name: "Ice Tea", price: 470 },
      { name: "San Pelegrino 250ml", price: 390 },
      { name: "Aqua Panna 250ml", price: 390 },
      { name: "Ceđena Pomorandža 250ml", price: 530 },
      { name: "Rose Lemonade Fentimans 275ml", price: 540 },
      { name: "Wild English Elderflower Fentimans 275ml", price: 540 },
      { name: "Mandarin & Seville Orange Fentimans 275ml", price: 540 },
      { name: "Le Tribute Premium Tonic 200ml", price: 540 },
    ],
  },
  {
    id: "pakovanja",
    label: "Pakovanja",
    img: "https://images.unsplash.com/photo-1606101194559-9f047e7a45df?w=600&q=80",
    items: [
      { name: "Sables Nantais Cookies (8 kom)", price: 720 },
      { name: "Florentine", price: 720 },
      { name: "Biscuit Sale", price: 850 },
      { name: "Confiture Maison", price: 850, desc: "Domaći džem od crvenog voća" },
      { name: "Herissons Au Chocolat", price: 1150 },
      { name: "Batonnets Au Chocolat", price: 1450, desc: "Keks sa bademom i slanim karamelom preliven belgijskom mlečnom čokoladom" },
      { name: "Homemade Granola 420–440g", price: 1200 },
      { name: "Cookies BIG", price: 1200 },
      { name: "Poklon Kutija", price: 6500 },
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0, 0, 1] as [number, number, number, number], delay: i * 0.06 },
  }),
};

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState("kroasani");

  const active = categories.find((c) => c.id === activeTab)!;

  return (
    <section
      id="meni"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=1800&q=60')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-amber-50/92 backdrop-blur-[1px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-amber-700 text-sm font-semibold tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "'Playfair Display SC', serif" }}>
            Naš Meni
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Pečeno Svaki Dan,{" "}
            <span className="text-amber-700 italic">Samo za Vas</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed mb-8">
            Svaki proizvod nastaje po tradicionalnoj recepturi, od pažljivo odabranih sastojaka.
          </p>

        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-amber-800 text-white shadow-md shadow-amber-800/30"
                  : "bg-stone-100 text-stone-600 hover:bg-amber-100 hover:text-amber-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {active.items.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="flex items-start justify-between gap-4 bg-white rounded-xl px-5 py-4 shadow-sm shadow-stone-200/80 hover:shadow-md hover:shadow-amber-900/10 transition-all duration-200 group"
            >
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-stone-800 text-sm leading-snug group-hover:text-amber-800 transition-colors duration-200">{item.name}</p>
                {item.desc && (
                  <p className="text-stone-400 text-xs mt-1 leading-relaxed">{item.desc}</p>
                )}
              </div>
              <span className="flex-shrink-0 text-amber-700 font-bold text-sm whitespace-nowrap">
                {item.price.toLocaleString("sr-RS")} din
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://wolt.com/en/srb/belgrade/venue/la-boulangerie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#009DE0] hover:bg-[#0088c2] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-blue-400/30 cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4-2.37V7z" />
            </svg>
            Naruči na Wolt
          </a>
        </motion.div>
      </div>
    </section>
  );
}
