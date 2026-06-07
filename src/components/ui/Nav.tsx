'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { id: 'about',    label: 'about me' },
  { id: 'works',    label: 'works' },
  { id: 'creative', label: 'creative' },
  { id: 'blog',     label: 'blogs' },
  { id: 'resume',   label: 'résumé' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 py-3 transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-[#f5f0e8]/90 backdrop-blur-sm shadow-sm' : ''
      }`}
      style={{ overflow: 'visible' }}
    >
      <div className="flex items-center justify-between">
        <button
          onClick={() => scrollTo('home')}
          className="font-maru font-black text-lg text-ink hover:text-[#e84040] transition-colors flex-shrink-0"
        >
          Howard Yao
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-2">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => scrollTo(l.id)}
                className={`font-maru font-bold text-sm px-4 py-2 rounded-pill transition-all duration-200 ${
                  active === l.id
                    ? 'bg-ink text-cream'
                    : 'text-gray-500 hover:bg-ink hover:text-cream'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 flex-shrink-0"
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} className="block w-6 h-0.5 bg-ink rounded-full" />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-ink rounded-full" />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} className="block w-6 h-0.5 bg-ink rounded-full" />
        </button>
      </div>

      {/* Mobile dropdown — absolutely positioned overlay so it never shifts page layout */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden absolute top-full left-0 right-0 mt-1 mx-6 sm:mx-8 flex flex-col gap-1 p-2 rounded-card bg-[#f5f0e8]/95 backdrop-blur-sm shadow-lg"
          >
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className={`w-full text-left font-maru font-bold text-sm px-4 py-2.5 rounded-pill transition-all duration-200 ${
                    active === l.id
                      ? 'bg-ink text-cream'
                      : 'text-gray-500 hover:bg-ink hover:text-cream'
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
