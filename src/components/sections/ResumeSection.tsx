'use client';
import { motion } from 'framer-motion';

const SKILLS = [
  'C/C++', 'Python', 'RISC-V', 'x86', 'Embedded Systems',
  'Raspberry Pi', 'STM32', 'ESP32', 'MQTT', 'Linux',
  'Signal Processing', 'PCB Design (KiCad)', 'UART/SPI/I2C/CAN', 'Git',
  'Sensors & IoT', 'Data Structures & Algorithms',
];

const SKILL_COLORS = [
  '#e84040','#3a7bd5','#2daa55','#f0a020','#e84040',
  '#3a7bd5','#2daa55','#f0a020','#e84040','#3a7bd5',
  '#2daa55','#f0a020','#e84040','#3a7bd5','#2daa55','#f0a020',
];

const HONORS = [
  'Co-Author: A 60 GHz Millimeter-Wave FMCW Radar System for Real-Time Observations in Remote Outdoor Environments',
  'IEEE Sensor Applications Symposium 2025 — Best Poster Award',
  'LBNL 2024–2025 Recognition of Excellence Award',
  'VEX Robotics Excellence Award & Tournament Champion / Finalist (VEX / FRC)',
];

export default function ResumeSection() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="inline-block bg-ink text-cream text-xs font-bold tracking-widest px-4 py-1.5 rounded-pill mb-4">
          background
        </span>
        <h2 className="font-maru font-black text-4xl text-ink mb-10 tracking-tight">Résumé</h2>

        {/* Education */}
        <div className="mb-10">
          <h3 className="font-maru font-black text-xs tracking-widest text-gray-400 border-b-2 border-gray-100 pb-2 mb-5 uppercase">
            Education
          </h3>
          <div className="flex flex-col gap-4">
            {[
              {
                role: 'B.S. Electrical Engineering & Computer Science',
                place: 'University of California, Berkeley',
                year: '2025–2027',
                detail: 'Major GPA: 3.9 / 4.0',
              },
              {
                role: 'A.S. Mathematics & Computer Engineering',
                place: 'Mt. San Antonio College',
                year: '2023–2025',
                detail: 'Major GPA: 3.87 / 4.0',
              },
            ].map(item => (
              <div key={item.role} className="bg-white rounded-card px-5 py-4 grid grid-cols-[1fr_auto] gap-x-4">
                <div>
                  <p className="font-maru font-black text-ink text-[15px]">{item.role}</p>
                  <p className="text-gray-400 text-sm">{item.place}</p>
                  <p className="text-gray-300 text-xs mt-1">{item.detail}</p>
                </div>
                <span className="font-mono text-xs text-gray-300 pt-1 text-right whitespace-nowrap">{item.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-10">
          <h3 className="font-maru font-black text-xs tracking-widest text-gray-400 border-b-2 border-gray-100 pb-2 mb-5 uppercase">
            Experience & Projects
          </h3>
          <div className="flex flex-col gap-4">
            {[
              {
                role: 'Student Intern / Research Assistant',
                place: 'Lawrence Berkeley National Laboratory (LBNL) · Berkeley, CA',
                year: 'Jun 2024–Present',
                bullets: [
                  'Designed a portable embedded sensor platform (Raspberry Pi + Quectel RM502Q-AE 5G NR) for real-time environmental data collection in remote regions.',
                  'Built end-to-end MQTT data pipeline with Grafana visualization — <1–2 s latency for sensor and RSSI streams.',
                  'Developed Kriging-based spatial interpolation for RSSI mapping; ~20–30% accuracy gain over naïve methods across >1 km² terrain.',
                  'Integrated with QGIS for geospatial analysis of >1000 geo-tagged data points per deployment.',
                ],
              },
              {
                role: 'Team Captain / Electrical & Software Engineer',
                place: 'FIRST & VEX Robotics Teams · Diamond Bar, CA',
                year: 'Jun 2021–May 2025',
                bullets: [
                  'Developed autonomous and teleoperated robot control systems in C++ with sensor feedback for navigation, manipulation, and scoring.',
                  'Built match strategy data tools (React, TypeScript, MongoDB) supporting 20+ teams; designed components in Fusion 360 and OnShape.',
                  'Led 4–6 member teams across mechanical, electrical, and software domains through full competition lifecycle.',
                ],
              },
              {
                role: 'Acoustic Positioning System (APS)',
                place: 'Python · Signal Processing · Numerical Methods · Berkeley, CA',
                year: 'Oct–Nov 2025',
                bullets: [
                  'Implemented cross-correlation algorithms to extract time-of-arrival offsets from multi-beacon acoustic signals in noisy environments.',
                  'Averaged 100k+ sample signals to reduce noise and improve peak detection accuracy.',
                  'Solved overdetermined least-squares system from TDOA data to achieve high-accuracy 2D localization.',
                ],
              },
            ].map(item => (
              <div key={item.role} className="bg-white rounded-card px-5 py-4">
                <div className="grid grid-cols-[1fr_auto] gap-x-4 mb-3">
                  <div>
                    <p className="font-maru font-black text-ink text-[15px]">{item.role}</p>
                    <p className="text-gray-400 text-sm">{item.place}</p>
                  </div>
                  <span className="font-mono text-xs text-gray-300 pt-1 text-right whitespace-nowrap">{item.year}</span>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                      <span className="text-gray-200 mt-0.5 flex-shrink-0">–</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Honors */}
        <div className="mb-10">
          <h3 className="font-maru font-black text-xs tracking-widest text-gray-400 border-b-2 border-gray-100 pb-2 mb-5 uppercase">
            Technical / Honors
          </h3>
          <div className="bg-white rounded-card px-5 py-4 flex flex-col gap-2">
            {HONORS.map((h, i) => (
              <div key={i} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                <span className="text-gray-200 flex-shrink-0">–</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-10">
          <h3 className="font-maru font-black text-xs tracking-widest text-gray-400 border-b-2 border-gray-100 pb-2 mb-5 uppercase">
            Additional Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s, i) => (
              <motion.span
                key={s}
                whileHover={{ y: -3, rotate: -2 }}
                className="font-maru font-bold text-sm px-4 py-2 rounded-pill bg-white border-2 cursor-default"
                style={{ borderColor: SKILL_COLORS[i % SKILL_COLORS.length], color: SKILL_COLORS[i % SKILL_COLORS.length] }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>

        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer"
          className="pill-btn pill-btn-primary inline-flex">
          Download PDF →
        </a>
      </motion.div>
    </section>
  );
}
