import React, { useState } from 'react';
import { ShieldCheck, XCircle, CheckCircle, ArrowRight, Sparkles, BookOpen, Heart, Eye } from 'lucide-react';
import { NO_BOOK_COMPARISON } from '../data/websiteContent';

export default function NoBookComparison() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section id="no-book" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#F4F9FB] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-turquoise/20 border border-brand-turquoise/40 text-brand-navy font-bold text-xs mb-3 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-turquoise-dark" />
            <span>The Pedagogical Shift</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-display mb-4">
            Traditional Preschool vs. The No-Book Model
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
            "No-Book" is not a ban on stories; it is our rejection of mindless copybook worksheets and heavy backpacks in early childhood. Experience why forward-thinking parents are choosing Blooming Era.
          </p>
        </div>

        {/* Desktop Comparison Table / Cards */}
        <div className="space-y-4">
          {NO_BOOK_COMPARISON.map((row, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-5 sm:p-6 rounded-3xl border border-white/95 shadow-md hover:shadow-xl transition-all duration-300 bg-white/80"
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
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Traditional Rote School</span>
                  </div>
                  <p className="text-xs text-rose-950/80 leading-relaxed">
                    {row.traditional}
                  </p>
                </div>

                {/* Blooming Era Column */}
                <div className="lg:col-span-5 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-300/80 shadow-xs relative">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 text-emerald-800 text-xs font-black">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Blooming Era Experiential Model</span>
                    </div>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-brand-lime text-brand-navy">
                      Advantage
                    </span>
                  </div>
                  <p className="text-xs text-emerald-950 font-medium leading-relaxed mb-2">
                    {row.bloomingEra}
                  </p>
                  <div className="text-[11px] text-emerald-800/90 font-semibold bg-white/70 p-2 rounded-xl border border-emerald-200">
                    ✨ <strong>Neuroscience Benefit:</strong> {row.advantage}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* NCF-FS 2022 Quote Banner */}
        <div className="mt-12 glass-panel-elevated p-6 sm:p-8 rounded-3xl border border-white bg-gradient-to-r from-brand-lime/20 via-white to-brand-turquoise/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-navy flex items-center justify-center text-white flex-shrink-0 shadow-md">
              <Sparkles className="w-6 h-6 text-brand-lime" />
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

          <a 
            href="#programmes"
            className="btn-lime px-5 py-2.5 rounded-xl text-xs font-black flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Match Your Child's Age</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
