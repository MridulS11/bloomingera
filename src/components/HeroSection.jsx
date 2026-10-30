import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Compass, CheckCircle2, Play, Users, Award, Smile } from 'lucide-react';
import { BRAND } from '../data/websiteContent';
import ScrollReveal from './ScrollReveal';

export default function HeroSection({ onOpenTourModal }) {
  const { scrollY } = useScroll();
  
  // Parallax transforms for background ambient orbs
  const yOrb1 = useTransform(scrollY, [0, 800], [0, 140]);
  const yOrb2 = useTransform(scrollY, [0, 800], [0, -100]);

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-36 overflow-hidden">
      {/* Background Ambient Orbs */}
      <motion.div 
        style={{ y: yOrb1 }}
        className="ambient-orb w-[480px] h-[480px] -top-20 -left-16 bg-brand-turquoise/20"
      />
      <motion.div 
        style={{ y: yOrb2 }}
        className="ambient-orb w-[520px] h-[520px] top-40 right-[-100px] bg-brand-lime/25"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Spacious, Punchy, & Inspiring */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Badge */}
            <ScrollReveal variant="fadeUp" delay={0.05}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-white shadow-sm backdrop-blur-md mb-6 sm:mb-8 hover:shadow-md transition-shadow">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-brand-navy tracking-tight">
                  India’s Flagship No-Book Experiential Preschool
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-brand-turquoise-dark bg-brand-turquoise/20 px-2.5 py-0.5 rounded-full">
                  NCF-FS 2022
                </span>
              </div>
            </ScrollReveal>

            {/* Spacious Headline */}
            <ScrollReveal variant="fadeUp" delay={0.12}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.16] mb-6 sm:mb-8 font-display">
                Where Children Learn by{' '}
                <span className="relative inline-block text-brand-navy">
                  Touching Reality
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 bottom-1.5 h-3.5 bg-brand-lime/60 -z-10 rounded-sm transform -rotate-1 origin-left"
                  />
                </span>, Not Memorizing Pages!
              </h1>
            </ScrollReveal>

            {/* Punchy Subtitle with generous margins */}
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <p className="text-base sm:text-lg text-brand-navy/80 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl">
                Replace heavy backpacks, rote worksheets, and test anxiety with 
                <strong className="text-brand-navy font-bold"> 6 vibrant sensory learning worlds</strong>. Math, science, language, and coding come alive through touch, curiosity, and smiles!
              </p>
            </ScrollReveal>

            {/* Visual Action Chips */}
            <ScrollReveal variant="fadeUp" delay={0.25} className="w-full">
              <div className="flex flex-wrap items-center gap-3 mb-10 sm:mb-12">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 border border-white shadow-xs text-xs sm:text-sm font-bold text-brand-navy hover:shadow-sm transition-shadow">
                  🎒 <strong>Zero Heavy Bags</strong>
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 border border-white shadow-xs text-xs sm:text-sm font-bold text-brand-navy hover:shadow-sm transition-shadow">
                  🌱 <strong>Living Botany Labs</strong>
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 border border-white shadow-xs text-xs sm:text-sm font-bold text-brand-navy hover:shadow-sm transition-shadow">
                  🤖 <strong>Screen-Free Coding</strong>
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 border border-white shadow-xs text-xs sm:text-sm font-bold text-brand-navy hover:shadow-sm transition-shadow">
                  ⭐ <strong>1:8 Caring Ratio</strong>
                </span>
              </div>
            </ScrollReveal>

            {/* CTA Buttons with Spacious Padding */}
            <ScrollReveal variant="fadeUp" delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenTourModal}
                  className="btn-lime px-8 py-4 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2.5 shadow-xl hover:shadow-2xl"
                >
                  <Sparkles className="w-4 h-4 text-brand-navy" />
                  <span>Book Campus Discovery Tour</span>
                  <ArrowRight className="w-4 h-4 text-brand-navy" />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#simulator"
                  className="btn-turquoise px-6 py-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Play className="w-4 h-4 fill-brand-navy text-brand-navy" />
                  <span>Try Live Classroom Lab</span>
                </motion.a>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Spacious High-Resolution Preschool Photo Showcase */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <ScrollReveal variant="scaleUp" delay={0.15}>
              <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-white">
                
                {/* Main Hero Preschool Children Photo (Appropriate 3-4 Year Old Preschoolers) */}
                <img 
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80" 
                  alt="Happy preschool children playing with sensory wooden blocks" 
                  className="w-full h-[420px] sm:h-[480px] lg:h-[530px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Bottom Glass Banner */}
                <div className="absolute bottom-5 left-5 right-5 glass-panel-elevated p-4 sm:p-5 rounded-2xl border border-white/90 shadow-xl bg-white/95">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-brand-lime flex items-center justify-center text-2xl shadow-xs">
                        🎨
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-extrabold text-brand-navy">Kindermagic PrimeX™</h4>
                        <p className="text-xs text-brand-navy/70 font-medium">100% Hands-On Tactile Learning</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full bg-brand-turquoise/25 text-brand-navy border border-brand-turquoise/40">
                      Active Station
                    </span>
                  </div>
                </div>

              </div>
            </ScrollReveal>

            {/* Floating Specular Glass Badge 1 - Left Floating */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex absolute -bottom-6 -left-6 glass-panel-elevated p-3.5 rounded-2xl border border-white shadow-xl items-center gap-3 bg-white/95 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-lime flex items-center justify-center text-brand-navy">
                <Smile className="w-5 h-5 text-brand-navy" />
              </div>
              <div>
                <div className="text-xs font-black text-brand-navy">Joyful Cohorts</div>
                <div className="text-[10px] text-brand-navy/70">Max 16 kids per batch</div>
              </div>
            </motion.div>

            {/* Floating Specular Glass Badge 2 - Top Right Floating */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="hidden sm:flex absolute -top-5 -right-5 glass-panel-elevated py-2.5 px-4 rounded-2xl border border-white shadow-xl items-center gap-2 bg-white/95 z-20"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-turquoise"></span>
              <span className="text-[11px] font-extrabold text-brand-navy">Zero Heavy Backpacks Guarantee</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
