'use client';
import { motion } from 'framer-motion';

const ACCENT = ['#222', '#3a7bd5', '#f0a020', '#2daa55'];

const POSTS = [
  { date: 'Jun 2026', title: 'Your latest post title goes here',       excerpt: 'A sentence or two about what you wrote — warm and honest.',              tags: ['reflection'] },
  { date: 'May 2026', title: 'On making things that no one might see', excerpt: 'Sometimes the act of creating is entirely for yourself.',                 tags: ['creativity', 'music'] },
  { date: 'Apr 2026', title: 'What I noticed this month',              excerpt: 'A loose collection — a photo, a paper I read, a song I loved.',           tags: ['monthly notes'] },
  { date: 'Mar 2026', title: 'Notes from a photography walk',          excerpt: 'I went out with no particular goal and came back with these thoughts.',   tags: ['photography'] },
];

export default function BlogSection() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="inline-block bg-ink text-cream text-xs font-bold tracking-widest px-4 py-1.5 rounded-pill mb-4">
          writing
        </span>
        <h2 className="font-maru font-black text-4xl text-ink mb-10 tracking-tight">Thoughts & notes</h2>

        <div className="flex flex-col gap-3">
          {POSTS.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ x: 4 }}
              className="bg-white rounded-card px-5 py-4 cursor-pointer border-l-4 transition-all hover:shadow-sm"
              style={{ borderLeftColor: ACCENT[i] }}
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-gray-300 pt-1 w-20 flex-shrink-0">{post.date}</span>
                <div>
                  <p className="font-maru font-bold text-ink text-[15px] leading-tight mb-1">{post.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">{post.excerpt}</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {post.tags.map(t => (
                      <span key={t} className="font-maru font-bold text-[11px] bg-gray-50 text-gray-400 px-2.5 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
