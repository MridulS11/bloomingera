import React, { useState } from 'react';
import { Sparkles, Clock, Users, ArrowRight, CheckCircle2, Sliders, Calendar } from 'lucide-react';
import { PROGRAMMES } from '../data/websiteContent';

export default function ProgrammesSection({ onOpenTourModal }) {
  const [childAge, setChildAge] = useState(3.5); // default 3.5 yrs (Nursery)

  // Find recommended programme based on slider
  const recommendedProg = PROGRAMMES.find(
    (p) => childAge >= p.minAge && childAge < p.maxAge
  ) || PROGRAMMES[1];

  return (
    <section id="programmes" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-lime/30 border border-brand-lime/50 text-brand-navy font-bold text-xs mb-3 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-brand-navy" />
            <span>Developmentally Staged Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-display mb-4">
            Age-Matched Academic Programmes
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
            Every developmental window is unique. Our programmes are calibrated to respect your child's 
            sensory sensitivity, emergent phonetics, and physical coordination.
          </p>
        </div>

        {/* Interactive Child Age Slider Widget */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/95 shadow-xl bg-white/90 max-w-3xl mx-auto mb-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-turquoise-dark bg-brand-turquoise/20 px-2 py-0.5 rounded">
                Smart Matcher
              </span>
              <h3 className="text-lg font-extrabold text-brand-navy mt-1">
                How old is your child?
              </h3>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-brand-lime/30 border border-brand-lime font-display">
              <span className="text-2xl font-black text-brand-navy">{childAge.toFixed(1)}</span>
              <span className="text-xs font-bold text-brand-navy/80">Years Old</span>
            </div>
          </div>

          {/* Slider Input */}
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

          {/* Interactive Match Announcement */}
          <div className="p-4 rounded-2xl bg-brand-turquoise/15 border border-brand-turquoise/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-brand-turquoise-dark">
                Recommended Programme:
              </span>
              <div className="text-base font-extrabold text-brand-navy flex items-center gap-2">
                <span>{recommendedProg.name}</span>
                <span className="text-xs font-normal text-brand-navy/70">({recommendedProg.age})</span>
              </div>
            </div>

            <button
              onClick={onOpenTourModal}
              className="btn-lime px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-sm"
            >
              <span>Book {recommendedProg.name} Tour</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Programme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMMES.map((prog) => {
            const isMatched = prog.id === recommendedProg.id;
            return (
              <div
                key={prog.id}
                className={`glass-panel p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative ${
                  isMatched
                    ? 'border-brand-turquoise shadow-2xl bg-white scale-[1.02] ring-2 ring-brand-turquoise/30'
                    : 'border-white/90 shadow-md bg-white/75 hover:bg-white/95'
                }`}
              >
                {isMatched && (
                  <div className="absolute -top-3.5 left-6 px-3 py-0.5 rounded-full bg-brand-turquoise text-brand-navy font-black text-[10px] uppercase tracking-wider shadow-md border border-white">
                    ⭐ Recommended For You
                  </div>
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
                  <button
                    onClick={onOpenTourModal}
                    className="w-full py-2.5 rounded-xl text-xs font-extrabold border border-brand-navy/20 hover:border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Schedule Campus Observation</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
