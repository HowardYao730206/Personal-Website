'use client';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 transition-all duration-300 ${
        scrolled ? 'bg-[#f5f0e8]/90 backdrop-blur-sm shadow-sm' : ''
      }`}
    >
      <button
        onClick={() => scrollTo('home')}
        className="font-maru font-black text-lg text-ink hover:text-[#e84040] transition-colors"
      >
        Howard Yao
      </button>
      <ul className="flex gap-2">
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
    </nav>
  );
}
