import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, Users, ArrowRight, CheckCircle2, Sliders, Calendar } from 'lucide-react';
import { PROGRAMMES } from '../data/websiteContent';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

export default function ProgrammesSection({ onOpenTourModal }) {
  const [childAge, setChildAge] = useState(3.5); // default 3.5 yrs (Nursery)

  // Find recommended programme based on slider
  const recommendedProg = PROGRAMMES.find(
    (p) => childAge >= p.minAge && childAge < p.maxAge
  ) || PROGRAMMES[1];

  // Child avatar and status based on age
  const getChildStageInfo = (age) => {
    if (age < 3.0) return { emoji: "👶", title: "Sensory Toddler Stage", focus: "Language & Toilet Readiness" };
    if (age < 4.5) return { emoji: "🧒", title: "Curious Explorer Stage", focus: "Phonemic Discovery & Numeracy" };
    return { emoji: "🧑", title: "Independent Scholar Stage", focus: "Grade 1 Cognitive Readiness" };
  };

  const stage = getChildStageInfo(childAge);

  return (
    <section id="programmes" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime/30 border border-brand-lime/50 text-brand-navy font-bold text-xs mb-3 shadow-sm">
            <Calendar className="w-4 h-4 text-brand-navy animate-pulse" />
            <span>Developmentally Staged Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-display mb-4">
            Age-Matched Academic Programmes
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
            Every developmental window is unique. Our programmes are calibrated to respect your child's 
            sensory sensitivity, emergent phonetics, and physical coordination.
          </p>
        </ScrollReveal>

        {/* Interactive Child Age Slider Widget with Dynamic Reactive Avatar */}
        <ScrollReveal variant="scaleUp" delay={0.1} className="max-w-3xl mx-auto mb-14">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/95 shadow-xl bg-white/90 relative overflow-hidden">
            
            {/* Top row with dynamic Avatar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <motion.div 
                  key={stage.emoji}
                  initial={{ scale: 0.6, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="w-14 h-14 rounded-2xl bg-brand-lime flex items-center justify-center text-3xl shadow-md border-2 border-brand-navy"
                >
                  {stage.emoji}
                </motion.div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-turquoise-dark bg-brand-turquoise/20 px-2 py-0.5 rounded">
                    {stage.title}
                  </span>
                  <h3 className="text-lg font-extrabold text-brand-navy mt-0.5">
                    Match Your Child's Exact Age
                  </h3>
                  <p className="text-xs text-brand-navy/60 font-medium">Focus: {stage.focus}</p>
                </div>
              </div>

              <motion.div 
                key={childAge}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-brand-lime/30 border border-brand-lime font-display shadow-xs"
              >
                <span className="text-2xl font-black text-brand-navy">{childAge.toFixed(1)}</span>
                <span className="text-xs font-bold text-brand-navy/80">Years Old</span>
              </motion.div>
            </div>

            {/* Slider Input with glow */}
            <input
              type="range"
              min="2.0"
              max="6.0"
              step="0.5"
              value={childAge}
              onChange={(e) => setChildAge(parseFloat(e.target.value))}
              className="w-full accent-brand-navy cursor-pointer h-2.5 bg-brand-turquoise/30 rounded-lg mb-3"
            />

            <div className="flex justify-between text-[11px] font-bold text-brand-navy/60 px-1 mb-6">
              <span>2.0 Yrs (Playgroup)</span>
              <span>3.0 Yrs (Nursery)</span>
              <span>4.0 Yrs (Jr KG)</span>
              <span>5.0 Yrs (Sr KG)</span>
              <span>6.0 Yrs</span>
            </div>

            {/* Interactive Match Announcement Card */}
            <motion.div 
              layout
              className="p-4 rounded-2xl bg-gradient-to-r from-brand-turquoise/20 via-brand-lime/20 to-brand-turquoise/20 border border-brand-turquoise/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-brand-turquoise-dark">
                  Recommended Learning Cohort:
                </span>
                <div className="text-base font-extrabold text-brand-navy flex items-center gap-2">
                  <span>{recommendedProg.name}</span>
                  <span className="text-xs font-semibold text-brand-navy/70">({recommendedProg.age})</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-brand-navy border border-brand-navy/10 shadow-xs">
                    {recommendedProg.ratio}
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenTourModal}
                className="btn-lime px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-md"
              >
                <span>Book {recommendedProg.name} Tour</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Programme Cards Grid with Staggered Scroll Animations */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMMES.map((prog) => {
            const isMatched = prog.id === recommendedProg.id;
            return (
              <StaggerItem key={prog.id}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 28px 56px rgba(9, 30, 58, 0.15)' }}
                  transition={{ duration: 0.3 }}
                  className={`glass-panel p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative h-full ${
                    isMatched
                      ? 'border-brand-turquoise shadow-2xl bg-white ring-2 ring-brand-turquoise/40 scale-[1.01]'
                      : 'border-white/90 shadow-md bg-white/75 hover:bg-white/95'
                  }`}
                >
                  {isMatched && (
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute -top-3.5 left-6 px-3 py-0.5 rounded-full bg-brand-turquoise text-brand-navy font-black text-[10px] uppercase tracking-wider shadow-md border border-white flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-brand-navy" />
                      <span>Best Match For Your Child</span>
                    </motion.div>
                  )}

                  <div>
                    {/* Top Badge & Ratio */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-navy/5 text-brand-navy border border-brand-navy/10">
                        {prog.badge}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-bold text-brand-navy/70">
                        <Users className="w-3.5 h-3.5 text-brand-turquoise-dark" />
                        {prog.ratio}
                      </span>
                    </div>

                    {/* Title & Age */}
                    <h3 className="text-xl font-extrabold text-brand-navy tracking-tight">
                      {prog.name}
                    </h3>
                    <div className="text-xs font-bold text-brand-turquoise-dark mb-3">
                      Ages: {prog.age}
                    </div>

                    <p className="text-xs text-brand-navy/75 leading-relaxed mb-5">
                      {prog.description}
                    </p>

                    {/* Daily Schedule Hour */}
                    <div className="p-2.5 rounded-xl bg-brand-navy/5 text-[11px] font-medium text-brand-navy flex items-center gap-2 mb-5">
                      <Clock className="w-3.5 h-3.5 text-brand-navy/60" />
                      <span>{prog.hours}</span>
                    </div>

                    {/* Highlights Bullet Points */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-navy/60">
                        Curricular Core:
                      </span>
                      {prog.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-brand-navy/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime-dark flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-navy/10">
                    <div className="text-[10px] text-brand-navy/60 mb-3 italic">
                      {prog.ncfAlignment}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={onOpenTourModal}
                      className="w-full py-2.5 rounded-xl text-xs font-extrabold border border-brand-navy/20 hover:border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <span>Schedule Campus Observation</span>
                      <ArrowRight className="w-3 h-3" />
                    </motion.button>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
