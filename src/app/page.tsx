'use client';
import Nav from '@/components/ui/Nav';
import HeroSection from '@/components/sections/HeroSection';
import WorksSection from '@/components/sections/WorksSection';
import BlogSection from '@/components/sections/BlogSection';
import ResumeSection from '@/components/sections/ResumeSection';

export default function Home() {
  return (
    <main>
      <Nav />
      <section id="home"><HeroSection /></section>
      <section id="works"><WorksSection /></section>
      <section id="blog"><BlogSection /></section>
      <section id="resume"><ResumeSection /></section>
      <footer className="text-center py-8 font-mono text-xs tracking-widest text-gray-400 border-t border-black/5">
        Howard Yao · {new Date().getFullYear()}
      </footer>
    </main>
  );
}
