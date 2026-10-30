import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, Award, Heart, MessageSquare, 
  Calendar, UserCheck, ShieldCheck, FileText, ChevronRight 
} from 'lucide-react';
import { TRACKER_SAMPLES } from '../data/websiteContent';

export default function DevelopmentTracker() {
  const [activeDomainKey, setActiveDomainKey] = useState('cognitive');
  const activeRecord = TRACKER_SAMPLES[activeDomainKey];

  return (
    <section id="tracker" className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-[#F5FAFA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-turquoise/20 border border-brand-turquoise/40 text-brand-navy font-bold text-xs mb-3 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-turquoise-dark" />
            <span>PARAKH Holistic Progress Card Aligned</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-display mb-4">
            Non-Diagnostic Milestone Tracker
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
            We never rank or shame toddlers with letter grades. Parents receive continuous, qualitative 
            observational milestones celebrating each child's organic pace.
          </p>
        </div>

        {/* Portal Simulation Container */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-white/95 shadow-2xl bg-white/90 max-w-5xl mx-auto">
          
          {/* Top Simulated App Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-brand-navy/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-lime flex items-center justify-center font-black text-brand-navy text-lg shadow-sm">
                A
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-base text-brand-navy">Aarav Sharma</h3>
                  <span className="text-[10px] font-bold bg-brand-turquoise/20 text-brand-turquoise-dark px-2 py-0.5 rounded-full">
                    Nursery Cohort A
                  </span>
                </div>
                <p className="text-xs text-brand-navy/60 font-medium">
                  Continuous Observation Period: Term 1 (2026–27) • Age: 3 Years 8 Months
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Zero Deficit Framing</span>
            </div>
          </div>

          {/* Domain Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
            {Object.keys(TRACKER_SAMPLES).map((key) => {
              const item = TRACKER_SAMPLES[key];
              const isActive = activeDomainKey === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveDomainKey(key)}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    isActive
                      ? 'glass-panel-elevated bg-white border-brand-navy/30 shadow-lg scale-[1.02]'
                      : 'bg-white/60 hover:bg-white border-white/80 text-brand-navy/70'
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold text-brand-navy/40 uppercase">Domain</div>
                  <div className="text-xs font-extrabold text-brand-navy truncate mt-0.5">
                    {item.domain}
                  </div>
                  <div className="mt-2 text-[10px] font-bold text-brand-turquoise-dark">
                    {item.status}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Observation Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white to-[#F2FAFA] border border-white shadow-inner space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span 
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: activeRecord.color }}
                />
                <span className="font-extrabold text-sm sm:text-base text-brand-navy">
                  {activeRecord.domain}
                </span>
              </div>
              <span className="text-xs font-bold text-brand-navy/60 flex items-center gap-1 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                {activeRecord.date}
              </span>
            </div>

            {/* Target Milestone */}
            <div className="p-4 rounded-2xl bg-white border border-brand-navy/10 shadow-xs">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-turquoise-dark">
                Developmental Milestone Observed:
              </span>
              <p className="text-sm font-bold text-brand-navy mt-1">
                "{activeRecord.milestone}"
              </p>
            </div>

            {/* Real Observation Log */}
            <div className="p-4 rounded-2xl bg-brand-lime/15 border border-brand-lime/30 space-y-2">
              <div className="flex items-center justify-between text-xs font-extrabold text-brand-navy">
                <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-brand-navy" />
                  Educator Qualitative Narrative:
                </span>
                <span className="text-[10px] font-medium text-brand-navy/70">{activeRecord.educator}</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-navy/85 leading-relaxed italic">
                "{activeRecord.observation}"
              </p>
            </div>

            {/* Progress Guarantee Notice */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-brand-navy/60 gap-3 border-t border-brand-navy/10">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified by Dr. Shelly Bisht (Head of Curriculum)</span>
              </div>
              <span className="font-bold text-brand-navy">Portfolio Exports: Digital & Physical Memory Book</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
