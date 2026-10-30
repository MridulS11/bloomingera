import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Compass, CheckCircle2, Play, Users, Award, BookOpen } from 'lucide-react';
import { BRAND } from '../data/websiteContent';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

export default function HeroSection({ onOpenTourModal }) {
  const { scrollY } = useScroll();
  
  // Parallax transforms for background ambient orbs
  const yOrb1 = useTransform(scrollY, [0, 800], [0, 140]);
  const yOrb2 = useTransform(scrollY, [0, 800], [0, -100]);
  const yOrb3 = useTransform(scrollY, [0, 800], [0, 80]);

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      {/* Background Ambient Orbs with Parallax Scroll Motion */}
      <motion.div 
        style={{ y: yOrb1 }}
        className="ambient-orb w-96 h-96 -top-10 -left-10 bg-brand-turquoise/25"
      />
      <motion.div 
        style={{ y: yOrb2 }}
        className="ambient-orb w-[420px] h-[420px] top-40 right-[-80px] bg-brand-lime/30"
      />
      <motion.div 
        style={{ y: yOrb3 }}
        className="ambient-orb w-80 h-80 bottom-0 left-1/3 bg-brand-turquoise/20"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Vision & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Badge */}
            <ScrollReveal variant="fadeUp" delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-white shadow-sm backdrop-blur-md mb-6 hover:shadow-md transition-shadow">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
                <span className="text-xs font-bold text-brand-navy tracking-tight">
                  National Curriculum Framework (NCF-FS 2022) Aligned
                </span>
                <span className="text-[10px] font-semibold text-brand-turquoise-dark bg-brand-turquoise/20 px-2 py-0.5 rounded-full">
                  New Standard
                </span>
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal variant="fadeUp" delay={0.15}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.12] mb-6 font-display">
                Where Children Learn by{' '}
                <span className="relative inline-block text-brand-navy">
                  Touching Reality
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 bottom-1 h-3 bg-brand-lime/60 -z-10 rounded-sm transform -rotate-1 origin-left"
                  />
                </span>, Not Memorizing Pages.
              </h1>
            </ScrollReveal>

            {/* Sub-headline */}
            <ScrollReveal variant="fadeUp" delay={0.25}>
              <p className="text-base sm:text-lg text-brand-navy/75 font-normal leading-relaxed mb-8 max-w-2xl">
                <strong className="font-semibold text-brand-navy">Blooming Era Preschools</strong> introduces India’s revolutionary 
                <span className="text-brand-navy font-bold"> "No-Book Experiential Model"</span> powered by 
                <span className="text-brand-navy font-bold"> Kindermagic PrimeX™</span>. We replace heavy backpacks, stressful tests, and passive worksheets with 
                6 hands-on learning worlds where young minds discover math, language, science, and robotics naturally.
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal variant="fadeUp" delay={0.35}>
              <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenTourModal}
                  className="btn-lime w-full sm:w-auto px-7 py-3.5 rounded-2xl text-sm font-extrabold flex items-center justify-center gap-2.5 shadow-lg group"
                >
                  <span>Book a Campus Discovery Tour</span>
                  <ArrowRight className="w-4 h-4 text-brand-navy group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#simulator"
                  className="btn-turquoise w-full sm:w-auto px-6 py-3.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 shadow-md"
                >
                  <Play className="w-4 h-4 fill-brand-navy text-brand-navy" />
                  <span>Try Interactive Simulator</span>
                </motion.a>
              </div>
            </ScrollReveal>

            {/* Key Trust Signals Bar */}
            <ScrollReveal variant="fadeUp" delay={0.45} className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-4 border-t border-brand-navy/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-brand-turquoise/20 flex items-center justify-center text-brand-navy">
                    <ShieldCheck className="w-4 h-4 text-brand-turquoise-dark" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-brand-navy">Zero Books</div>
                    <div className="text-[10px] text-brand-navy/60">No heavy bags</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-brand-lime/40 flex items-center justify-center text-brand-navy">
                    <Compass className="w-4 h-4 text-brand-lime-dark" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-brand-navy">6 Worlds</div>
                    <div className="text-[10px] text-brand-navy/60">Kindermagic™</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-brand-navy">1:8 Ratio</div>
                    <div className="text-[10px] text-brand-navy/60">Personalized focus</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-brand-navy">PARAKH HPC</div>
                    <div className="text-[10px] text-brand-navy/60">Non-diagnostic tracker</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Dynamic Interactive Glass Card Composition */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Central Showcase Glass Panel with 3D Float Motion */}
            <ScrollReveal variant="scaleUp" delay={0.2}>
              <div className="glass-panel p-6 sm:p-7 relative bg-white/80 border-white/95 shadow-2xl overflow-hidden hover:shadow-glass-hover transition-all duration-500">
                {/* Subtle top gloss shine */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-turquoise via-brand-lime to-brand-turquoise"></div>

                {/* Header inside card */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-brand-turquoise/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-brand-turquoise-dark" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-brand-navy">Kindermagic PrimeX™ Live</h3>
                      <p className="text-[11px] text-brand-navy/60">Experiential Pedagogy in Action</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-bold bg-brand-lime/40 text-brand-navy rounded-full border border-brand-lime">
                    Active Station
                  </span>
                </div>

                {/* Visual Simulated Station Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#F0F9FA] to-[#FAFDF0] border border-white shadow-inner mb-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Language Lab & Sand Phonics
                    </div>
                    <span className="text-[10px] text-brand-navy/50 font-mono">Today: 10:15 AM</span>
                  </div>

                  <p className="text-xs text-brand-navy/80 leading-relaxed mb-3">
                    Instead of copying the letter "S" 50 times in a paper notebook, children trace the shape in fine scented beach sand, feeling the tactile resistance while singing sound-phonemes.
                  </p>

                  {/* Micro Metrics Inside Demo */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-brand-navy/5">
                    <div className="p-2 rounded-xl bg-white/70 border border-white">
                      <div className="text-sm font-black text-brand-navy">3.8x</div>
                      <div className="text-[9px] text-brand-navy/60 font-medium">Memory Recall</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white/70 border border-white">
                      <div className="text-sm font-black text-brand-navy">0%</div>
                      <div className="text-[9px] text-brand-navy/60 font-medium">Test Anxiety</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white/70 border border-white">
                      <div className="text-sm font-black text-brand-navy">100%</div>
                      <div className="text-[9px] text-brand-navy/60 font-medium">Active Touch</div>
                    </div>
                  </div>
                </div>

                {/* 5-Step Experiential Flow Preview */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-brand-navy/70 uppercase tracking-wider">
                    The 5-Step Daily Learning Cycle
                  </div>
                  <div className="grid grid-cols-5 gap-1.5">
                    {[
                      { step: "01", name: "Experience", color: "border-brand-turquoise bg-brand-turquoise/15" },
                      { step: "02", name: "Explore", color: "border-brand-lime bg-brand-lime/25" },
                      { step: "03", name: "Express", color: "border-orange-300 bg-orange-50" },
                      { step: "04", name: "Extend", color: "border-purple-300 bg-purple-50" },
                      { step: "05", name: "Observe", color: "border-emerald-300 bg-emerald-50" },
                    ].map((s) => (
                      <div key={s.step} className={`p-2 rounded-xl border text-center ${s.color}`}>
                        <div className="text-[10px] font-mono font-bold text-brand-navy">{s.step}</div>
                        <div className="text-[9px] font-extrabold text-brand-navy truncate">{s.name}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote Pill */}
                <div className="mt-5 p-3 rounded-xl bg-white/60 border border-white text-xs text-brand-navy/80 italic flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-lime flex-shrink-0 flex items-center justify-center font-black text-brand-navy text-[10px]">
                    MY
                  </div>
                  <div>
                    <p className="leading-tight font-medium">
                      "When children use their hands to discover concepts, their brains build permanent neural architecture."
                    </p>
                    <p className="text-[10px] font-bold text-brand-navy not-italic mt-0.5">
                      — Dr. Masuda Yasmin, Founder & Chief Academic Officer
                    </p>
                  </div>
                </div>

              </div>
            </ScrollReveal>

            {/* Floating Specular Glass Badge 1 - Left Floating with gentle levitation */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex absolute -bottom-6 -left-6 glass-panel-elevated p-3.5 rounded-2xl border border-white shadow-xl items-center gap-3 bg-white/95 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-lime flex items-center justify-center text-brand-navy">
                <CheckCircle2 className="w-5 h-5 text-brand-navy" />
              </div>
              <div>
                <div className="text-xs font-black text-brand-navy">Admissions 2026-27</div>
                <div className="text-[10px] text-brand-navy/70">Limited to 16 seats per cohort</div>
              </div>
            </motion.div>

            {/* Floating Specular Glass Badge 2 - Top Right Floating with counter-levitation */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="hidden sm:flex absolute -top-5 -right-5 glass-panel-elevated py-2 px-3.5 rounded-2xl border border-white shadow-xl items-center gap-2 bg-white/95 z-20"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-turquoise"></span>
              <span className="text-[11px] font-extrabold text-brand-navy">No Heavy Backpack Guarantee</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
