export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Top decorative line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p
              className="text-2xl font-bold text-amber-400 tracking-widest mb-3"
              style={{ fontFamily: "'Playfair Display SC', serif" }}
            >
              La BoULANGeRie
            </p>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs mb-6">
              Autentična francuska pekara u srcu Beograda. Sveže pečeno, svaki dan, uz ljubav i tradiciju.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/laboulangerie"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-amber-700 flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="tel:0698833090"
                aria-label="Pozovi nas"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-amber-700 flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-stone-100 font-semibold text-sm uppercase tracking-widest mb-5">Navigacija</p>
            <ul className="space-y-3">
              {[
                ["#onama", "O Nama"],
                ["#meni", "Naš Meni"],
                ["#galerija", "Galerija"],
                ["#utisci", "Utisci"],
                ["#kontakt", "Kontakt"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-stone-400 hover:text-amber-300 transition-colors duration-200 text-sm cursor-pointer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-stone-100 font-semibold text-sm uppercase tracking-widest mb-5">Kontakt</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2.5 text-stone-400">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Kneza Miloša 50, Beograd
              </li>
              <li>
                <a href="tel:0698833090" className="flex items-center gap-2.5 text-stone-400 hover:text-amber-300 transition-colors cursor-pointer">
                  <svg className="w-4 h-4 flex-shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  069 8833090
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-stone-400">
                <svg className="w-4 h-4 flex-shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pon – Ned: 08:00 – 18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© {year} La BoULANGeRie. Sva prava zadržana.</p>
          <p>Napravljeno sa ljubavlju u Beogradu 🥐</p>
        </div>
      </div>
    </footer>
  );
}
