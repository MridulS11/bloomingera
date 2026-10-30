import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, Users, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
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
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime/30 border border-brand-lime/50 text-brand-navy font-bold text-xs mb-3 shadow-sm">
            <Calendar className="w-4 h-4 text-brand-navy animate-pulse" />
            <span>Developmental Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-display mb-3">
            Programmes by Age Group
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
            Every age group has unique developmental needs. Slide your child's age below to find their perfect classroom!
          </p>
        </ScrollReveal>

        {/* Interactive Child Age Slider Widget */}
        <ScrollReveal variant="scaleUp" delay={0.1} className="max-w-3xl mx-auto mb-12">
          <div className="glass-panel p-5 sm:p-7 rounded-3xl border border-white/95 shadow-xl bg-white/90 relative overflow-hidden">
            
            {/* Top row with dynamic Avatar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <motion.div 
                  key={stage.emoji}
                  initial={{ scale: 0.6, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="w-12 h-12 rounded-2xl bg-brand-lime flex items-center justify-center text-2xl shadow-md border-2 border-brand-navy"
                >
                  {stage.emoji}
                </motion.div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-turquoise-dark bg-brand-turquoise/20 px-2 py-0.5 rounded">
                    {stage.title}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-brand-navy mt-0.5">
                    Match Your Child's Exact Age
                  </h3>
                </div>
              </div>

              <motion.div 
                key={childAge}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-brand-lime/30 border border-brand-lime font-display shadow-xs"
              >
                <span className="text-xl font-black text-brand-navy">{childAge.toFixed(1)}</span>
                <span className="text-xs font-bold text-brand-navy/80">Years Old</span>
              </motion.div>
            </div>

            {/* Slider Input */}
            <input
              type="range"
              min="2.0"
              max="6.0"
              step="0.5"
              value={childAge}
              onChange={(e) => setChildAge(parseFloat(e.target.value))}
              className="w-full accent-brand-navy cursor-pointer h-2.5 bg-brand-turquoise/30 rounded-lg mb-2"
            />

            <div className="flex justify-between text-[11px] font-bold text-brand-navy/60 px-1 mb-5">
              <span>2.0 Yrs (Playgroup)</span>
              <span>3.0 Yrs (Nursery)</span>
              <span>4.0 Yrs (Jr KG)</span>
              <span>5.0 Yrs (Sr KG)</span>
              <span>6.0 Yrs</span>
            </div>

            {/* Interactive Match Announcement Card */}
            <motion.div 
              layout
              className="p-3.5 rounded-2xl bg-gradient-to-r from-brand-turquoise/20 via-brand-lime/20 to-brand-turquoise/20 border border-brand-turquoise/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm"
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
                <span>Book {recommendedProg.name} Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Programme Cards Grid (WITH PHOTOS FOR EACH PROGRAMME) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMMES.map((prog) => {
            const isMatched = prog.id === recommendedProg.id;
            return (
              <StaggerItem key={prog.id}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 28px 56px rgba(9, 30, 58, 0.15)' }}
                  transition={{ duration: 0.3 }}
                  className={`glass-panel rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between relative h-full ${
                    isMatched
                      ? 'border-brand-turquoise shadow-2xl bg-white ring-2 ring-brand-turquoise/40 scale-[1.01]'
                      : 'border-white/90 shadow-md bg-white/80 hover:bg-white'
                  }`}
                >
                  {/* Photo Thumbnail */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <img 
                      src={prog.image} 
                      alt={prog.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                    
                    {/* Badge over photo */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-black bg-white/95 text-brand-navy shadow-sm">
                      {prog.badge}
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-lime text-brand-navy shadow-sm">
                      {prog.ratio}
                    </div>

                    <div className="absolute bottom-2.5 left-3 text-white">
                      <h3 className="text-lg font-black leading-tight drop-shadow-sm">{prog.name}</h3>
                      <p className="text-[11px] text-white/90 font-medium">{prog.age}</p>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-xs text-brand-navy/75 leading-relaxed mb-4">
                        {prog.description}
                      </p>

                      <div className="p-2 rounded-xl bg-brand-navy/5 text-[11px] font-bold text-brand-navy flex items-center gap-2 mb-4">
                        <Clock className="w-3.5 h-3.5 text-brand-turquoise-dark" />
                        <span>{prog.hours}</span>
                      </div>

                      {/* Bullet Highlights */}
                      <div className="space-y-1.5 mb-5">
                        {prog.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-brand-navy/85 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime-dark flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-brand-navy/10">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onOpenTourModal}
                        className="w-full py-2.5 rounded-xl text-xs font-extrabold border border-brand-navy/20 hover:border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                      >
                        <span>Schedule Campus Visit</span>
                        <ArrowRight className="w-3 h-3" />
                      </motion.button>
                    </div>
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
