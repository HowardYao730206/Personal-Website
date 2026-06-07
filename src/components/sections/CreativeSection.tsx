'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DetailDrawer from '@/components/ui/DetailDrawer';

type Work = { cat: string; slug: string; title: string; desc: string; year: string; color: string };

const WORKS: Work[] = [
  { cat: 'vocaloid',    slug: 'creative/vocaloid-cover', title: 'Song Title — Cover',     desc: 'Your Vocaloid arrangement and what drew you to this song.',    year: '2024', color: '#3a7bd5' },
  { cat: 'vocaloid',    slug: 'creative/vocaloid-cover', title: 'Original Track Name',    desc: 'The feeling or story you wanted to capture.',                  year: '2023', color: '#3a7bd5' },
  { cat: 'photography', slug: 'creative/photo-series',   title: 'Photo Series Name',      desc: 'What you were looking at, where you were, what you noticed.',  year: '2024', color: '#f0a020' },
  { cat: 'photography', slug: 'creative/photo-series',   title: 'Another Photo Set',      desc: 'A season, a place, a mood.',                                   year: '2023', color: '#f0a020' },
  { cat: '3d',          slug: 'creative/3d-design',      title: '3D Print / CAD Project', desc: 'What you designed, the challenge it solved, materials used.',  year: '2024', color: '#e84040' },
  { cat: '3d',          slug: 'creative/3d-design',      title: 'Another 3D Design',      desc: 'Inspiration, process, and the result.',                        year: '2023', color: '#e84040' },
];

const FILTERS = ['all', 'vocaloid', 'photography', '3d'] as const;

export default function CreativeSection() {
  const [filter, setFilter]     = useState<string>('all');
  const [drawerSlug, setDrawer] = useState<string | null>(null);
  const shown = filter === 'all' ? WORKS : WORKS.filter(w => w.cat === filter);

  return (
    <>
      <section className="max-w-3xl mx-auto px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-ink text-cream text-xs font-bold tracking-widest px-4 py-1.5 rounded-pill mb-4">
            creative
          </span>
          <h2 className="font-maru font-black text-4xl text-ink mb-8 tracking-tight">Creative</h2>

          <div className="flex gap-2 flex-wrap mb-8">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`font-maru font-bold text-sm px-5 py-2 rounded-pill border-2 transition-all ${
                  filter === f
                    ? 'bg-ink text-cream border-ink'
                    : 'bg-transparent text-gray-400 border-gray-200 hover:border-ink hover:text-ink'
                }`}>
                {f}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <AnimatePresence mode="popLayout">
              {shown.map((w, i) => (
                <motion.div key={w.title} layout
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }} transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 4 }}
                  onClick={() => setDrawer(w.slug)}
                  className="flex items-center gap-4 bg-white rounded-card px-5 py-4 cursor-pointer border-2 border-transparent hover:border-gray-100 transition-colors">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: w.color }} />
                  <div className="flex-1">
                    <p className="font-maru font-bold text-ink text-[15px] leading-tight mb-0.5">{w.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{w.desc}</p>
                  </div>
                  <span className="font-mono text-xs text-gray-300 flex-shrink-0">{w.year}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      <DetailDrawer slug={drawerSlug} onClose={() => setDrawer(null)} />
    </>
  );
}
