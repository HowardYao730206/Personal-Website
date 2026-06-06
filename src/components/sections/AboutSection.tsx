'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="inline-block bg-ink text-cream text-xs font-bold tracking-widest px-4 py-1.5 rounded-pill mb-4">
          about me
        </span>
        <h2 className="font-maru font-black text-4xl text-ink mb-10 tracking-tight">Who I am</h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Profile photo */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-card overflow-hidden bg-gray-100 border-2 border-gray-200 relative">
              {/* Replace /profile.jpg with your image path inside the public/ folder */}
              <Image
                src="/profile.jpg"
                alt="Howard Yao"
                fill
                className="object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <p className="text-ink font-maru font-bold text-xl mb-3">Howard Yao</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              研究员、Vocaloid 制作人、摄影师。<br />
              Researcher, Vocaloid producer, photographer — sometimes all at once.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Write a few sentences about yourself here — your research interests, what drives you creatively, where you study or work, and anything else you'd like visitors to know.
            </p>

            <div className="flex flex-wrap gap-2">
              {['researcher', 'vocaloid producer', 'photographer', '3D designer'].map((tag, i) => {
                const colors = ['#e84040', '#3a7bd5', '#f0a020', '#2daa55'];
                return (
                  <span
                    key={tag}
                    className="font-maru font-bold text-xs px-3 py-1.5 rounded-pill border-2"
                    style={{ borderColor: colors[i], color: colors[i] }}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
