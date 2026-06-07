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
        <h2 className="font-maru font-black text-4xl text-ink mb-6 tracking-tight">Who I am</h2>

        <div className="flex flex-col md:flex-row gap-8 items-start">
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
          <div className="flex-1 mt-6 md:mt-0 md:-mt-12">
            <p className="text-ink font-maru font-bold text-xl mb-3">Howard Yao</p>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Hello! I&apos;m Howard, a senior Electrical Engineering &amp; Computer Science student at UC Berkeley.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              I am currently a Student Assistant in the Engineering Division at Lawrence Berkeley National Laboratory, where I have the privilege of conducting research under the guidance of{' '}
              <a
                href="https://engineering.lbl.gov/profile/stijnwielandt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink font-semibold underline underline-offset-2 hover:text-[#3a7bd5] transition-colors"
              >
                Stijn Wielandt
              </a>.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              I&apos;m passionate about robotics, sensors, and digital systems. My work spans embedded systems, sensing technologies, and intelligent machines.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Thanks for stopping by! It&apos;s great to meet you!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
