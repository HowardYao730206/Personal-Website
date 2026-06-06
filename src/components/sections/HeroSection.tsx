'use client';
import { motion } from 'framer-motion';

const NAME_COLORS = ['#e84040','#3a7bd5','#222','#2daa55','#f0a020','#222','#3a7bd5','#222','#e84040'];
const NAME_CHARS  = ['H','o','w','a','r','d',' ','Y','a','o'];

const CARDS = [
  { icon: '/icons/about.png',    title: 'About me',  sub: 'researcher · creator',   bg: '#e84040', shadow: '#b52020', section: 'about'    },
  { icon: '/icons/works.png',    title: 'Works',     sub: 'research & engineering',  bg: '#3a7bd5', shadow: '#1a4fa0', section: 'works'    },
  { icon: '/icons/creative.png', title: 'Creative',  sub: 'music, photo & 3D',       bg: '#f0a020', shadow: '#c07010', section: 'creative' },
  { icon: '/icons/blogs.png',    title: 'Blogs',     sub: 'thoughts & notes',        bg: '#2daa55', shadow: '#1a7a35', section: 'blog'     },
];

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-ink text-cream text-xs font-bold tracking-widest px-4 py-1.5 rounded-pill mb-6">
            researcher · creator
          </span>

          {/* Bouncy name */}
          <div className="font-maru font-black leading-none mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}>
            {NAME_CHARS.map((ch, i) =>
              ch === ' ' ? (
                <br key={i} />
              ) : (
                <motion.span
                  key={i}
                  className="inline-block cursor-default"
                  style={{ color: NAME_COLORS[i] }}
                  whileHover={{ y: -8, rotate: -4, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
                >
                  {ch}
                </motion.span>
              )
            )}
          </div>

          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-sm">
            研究员、Vocaloid 制作人、摄影师。<br />
            Researcher, Vocaloid producer, photographer —<br />
            sometimes all at once.
          </p>

          <div className="flex gap-3 flex-wrap">
            <button className="pill-btn pill-btn-primary" onClick={() => scrollTo('works')}>
              See my work
            </button>
            <button className="pill-btn pill-btn-outline" onClick={() => scrollTo('blog')}>
              Read my blog
            </button>
          </div>
        </motion.div>

        {/* Right — cards grid */}
        <div className="grid grid-cols-2 gap-4">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 + i * 0.08, type: 'spring', stiffness: 260, damping: 20 }}
              whileHover={{ y: -6, rotate: 1.5, transition: { type: 'spring', stiffness: 300 } }}
              onClick={() => scrollTo(card.section)}
              className="rounded-card p-5 cursor-pointer relative overflow-hidden select-none"
              style={{
                background: card.bg,
                boxShadow: `6px 6px 0 ${card.shadow}`,
              }}
            >
              {/* circle accent */}
              <div
                className="absolute -top-5 -right-5 w-16 h-16 rounded-full"
                style={{ background: 'rgba(255,255,255,.15)' }}
              />
              <img src={card.icon} alt="" className="w-10 h-10 mb-2 object-contain" />
              <div className="font-maru font-black text-white text-base leading-tight">{card.title}</div>
              <div className="text-white/70 text-xs mt-1 font-normal">{card.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
