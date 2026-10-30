import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, XCircle, CheckCircle, ArrowRight, Sparkles, BookOpen, Heart, Eye, Filter } from 'lucide-react';
import { NO_BOOK_COMPARISON } from '../data/websiteContent';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

export default function NoBookComparison() {
  const [filter, setFilter] = useState('all'); // 'all' | 'spine' | 'touch' | 'screen'

  const filteredItems = NO_BOOK_COMPARISON.filter((row, idx) => {
    if (filter === 'spine') return row.category.toLowerCase().includes('backpack');
    if (filter === 'touch') return row.category.toLowerCase().includes('learning') || row.category.toLowerCase().includes('classroom');
    if (filter === 'screen') return row.category.toLowerCase().includes('screen');
    return true;
  });

  return (
    <section id="no-book" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#F4F9FB] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-turquoise/20 border border-brand-turquoise/40 text-brand-navy font-bold text-xs mb-3 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-brand-turquoise-dark animate-bounce" style={{ animationDuration: '2.5s' }} />
            <span>The Pedagogical Paradigm Shift</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-display mb-4">
            Traditional Preschool vs. The No-Book Model
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
            "No-Book" is not a ban on stories; it is our rejection of mindless copybook worksheets and heavy backpacks in early childhood. Experience why forward-thinking parents are choosing Blooming Era.
          </p>

          {/* Interactive Filter Pills with Spring Animation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: 'all', label: 'All 5 Dimensions' },
              { id: 'spine', label: '🎒 Child Spine Health' },
              { id: 'touch', label: '✋ Hands-On Materials' },
              { id: 'screen', label: '📵 Zero Screen Policy' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === tab.id
                    ? 'bg-brand-navy text-white shadow-md scale-105'
                    : 'bg-white/80 text-brand-navy/70 hover:bg-white border border-brand-navy/10'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Desktop Comparison Table / Cards with Staggered Scroll Reveal */}
        <motion.div layout className="space-y-4">
          <AnimatePresence>
            {filteredItems.map((row, idx) => (
              <motion.div 
                layout
                key={row.category}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, boxShadow: '0 25px 50px rgba(9, 30, 58, 0.12)' }}
                className="glass-panel p-5 sm:p-6 rounded-3xl border border-white/95 shadow-md bg-white/85 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Category Column */}
                  <div className="lg:col-span-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-turquoise-dark bg-brand-turquoise/20 px-2 py-0.5 rounded">
                      Dimension 0{idx + 1}
                    </span>
                    <h4 className="text-lg font-extrabold text-brand-navy mt-1">
                      {row.category}
                    </h4>
                  </div>

                  {/* Traditional Method Column */}
                  <div className="lg:col-span-4 p-4 rounded-2xl bg-rose-50/70 border border-rose-200/60">
                    <div className="flex items-center gap-2 text-rose-700 text-xs font-bold mb-1.5">
                      <XCircle className="w-4 h-4 flex-shrink-0 animate-pulse" />
                      <span>Traditional Rote School</span>
                    </div>
                    <p className="text-xs text-rose-950/80 leading-relaxed">
                      {row.traditional}
                    </p>
                  </div>

                  {/* Blooming Era Column */}
                  <div className="lg:col-span-5 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-300/80 shadow-xs relative overflow-hidden">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2 text-emerald-800 text-xs font-black">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>Blooming Era Experiential Model</span>
                      </div>
                      <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-brand-lime text-brand-navy shadow-xs">
                        Proven Advantage
                      </span>
                    </div>
                    <p className="text-xs text-emerald-950 font-medium leading-relaxed mb-2">
                      {row.bloomingEra}
                    </p>
                    <div className="text-[11px] text-emerald-800/90 font-semibold bg-white/80 p-2.5 rounded-xl border border-emerald-200 shadow-xs">
                      ✨ <strong>Neuroscience Benefit:</strong> {row.advantage}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* NCF-FS 2022 Quote Banner with Animated Button */}
        <ScrollReveal variant="fadeUp" delay={0.2} className="mt-12">
          <div className="glass-panel-elevated p-6 sm:p-8 rounded-3xl border border-white bg-gradient-to-r from-brand-lime/20 via-white to-brand-turquoise/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-navy flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <Sparkles className="w-6 h-6 text-brand-lime animate-spin" style={{ animationDuration: '10s' }} />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-brand-navy">
                  Aligned with National Curriculum Framework (NCF-FS 2022)
                </h4>
                <p className="text-xs text-brand-navy/70 mt-0.5">
                  Government of India mandates experiential play-based learning over textbooks for ages 3 to 8.
                </p>
              </div>
            </div>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#programmes"
              className="btn-lime px-5 py-2.5 rounded-xl text-xs font-black flex items-center gap-1.5 flex-shrink-0 shadow-md"
            >
              <span>Match Your Child's Age</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
