'use client';
import { motion } from 'framer-motion';

const SKILLS = ['Python', 'R', 'VOCALOID', 'SynthV', 'audio mixing', 'photography', 'Lightroom', 'LaTeX', 'academic writing'];

const SKILL_COLORS = ['#e84040','#3a7bd5','#2daa55','#f0a020','#e84040','#3a7bd5','#2daa55','#f0a020','#e84040'];

export default function ResumeSection() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="inline-block bg-ink text-cream text-xs font-bold tracking-widest px-4 py-1.5 rounded-pill mb-4">
          background
        </span>
        <h2 className="font-maru font-black text-4xl text-ink mb-10 tracking-tight">Résumé</h2>

        {[
          {
            heading: 'Education',
            items: [
              { role: 'Your Degree — Your Major', place: 'University Name', year: '2022–now', detail: 'Focus area, thesis, or what you\'ve been working on.' },
            ],
          },
          {
            heading: 'Research experience',
            items: [
              { role: 'Research Role or Project', place: 'Lab / Advisor / Institution', year: '2023–now', detail: 'What you did, what methods you used, what you contributed.' },
              { role: 'Another Research Role',    place: 'Lab / Advisor / Institution', year: '2022',      detail: 'A brief description of the project and your role.' },
            ],
          },
        ].map(section => (
          <div key={section.heading} className="mb-10">
            <h3 className="font-maru font-black text-xs tracking-widest text-gray-400 border-b-2 border-gray-100 pb-2 mb-5 uppercase">
              {section.heading}
            </h3>
            <div className="flex flex-col gap-4">
              {section.items.map(item => (
                <div key={item.role} className="bg-white rounded-card px-5 py-4 grid grid-cols-[1fr_auto] gap-x-4">
                  <div>
                    <p className="font-maru font-black text-ink text-[15px]">{item.role}</p>
                    <p className="text-gray-400 text-sm">{item.place}</p>
                    <p className="text-gray-300 text-sm mt-1 leading-relaxed">{item.detail}</p>
                  </div>
                  <span className="font-mono text-xs text-gray-300 pt-1 text-right whitespace-nowrap">{item.year}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mb-10">
          <h3 className="font-maru font-black text-xs tracking-widest text-gray-400 border-b-2 border-gray-100 pb-2 mb-5 uppercase">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s, i) => (
              <motion.span
                key={s}
                whileHover={{ y: -3, rotate: -2 }}
                className="font-maru font-bold text-sm px-4 py-2 rounded-pill bg-white border-2 cursor-default"
                style={{ borderColor: SKILL_COLORS[i], color: SKILL_COLORS[i] }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>

        <a
          href="/resume.pdf"
          className="pill-btn pill-btn-primary inline-flex"
        >
          Download PDF →
        </a>
      </motion.div>
    </section>
  );
}
