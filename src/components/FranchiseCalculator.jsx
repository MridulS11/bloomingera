import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, TrendingUp, Calculator, ShieldCheck, CheckCircle2, 
  ArrowRight, Sparkles, Layers, DollarSign, Percent 
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function FranchiseCalculator({ onOpenTourModal }) {
  const [students, setStudents] = useState(50);
  const [feePerMonth, setFeePerMonth] = useState(3800);

  // Calculations
  const grossMonthlyRevenue = students * feePerMonth;
  const grossAnnualRevenue = grossMonthlyRevenue * 12;

  // Fixed transparent royalty: ₹7,500/month flat
  const annualRoyalty = 7500 * 12;

  // Estimated OpEx (Teacher salaries, utilities, consumables ~ 48%)
  const estimatedAnnualOpex = grossAnnualRevenue * 0.48;

  // Net Operating Surplus
  const estimatedNetSurplus = Math.max(0, grossAnnualRevenue - annualRoyalty - estimatedAnnualOpex);
  const marginPercent = Math.round((estimatedNetSurplus / grossAnnualRevenue) * 100);

  const pillars = [
    "Complete Kindermagic PrimeX™ Syllabus & Daily Lesson Plans",
    "Educator Bootcamps & Regular Pedagogical Upskilling",
    "Architectural Layout & Child-Safe Ergonomic Standards",
    "Digital Parent Communication & HPC Tracker App",
    "Hyperlocal Marketing & Admissions Campaign Collateral",
    "16-Pillar Quality Audit Checklist & Central Support"
  ];

  return (
    <section id="franchise" className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-[#F4F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime/30 border border-brand-lime/50 text-brand-navy font-bold text-xs mb-3 shadow-sm">
            <Building2 className="w-4 h-4 text-brand-navy animate-bounce" style={{ animationDuration: '3s' }} />
            <span>High-Impact Education Partnership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-display mb-4">
            Franchise Unit Economics Calculator
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
            Partner with India’s most ethical early childhood movement. Low entry threshold, 
            flat ₹7,500/mo royalty (never a penalizing revenue percentage), and 360° academic backing.
          </p>
        </ScrollReveal>

        {/* Calculator Grid with Left/Right Entrance */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-white/95 shadow-2xl bg-white/90 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Interactive Sliders */}
            <ScrollReveal variant="slideLeft" delay={0.1} className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-turquoise-dark bg-brand-turquoise/20 px-2 py-0.5 rounded">
                  Live Unit Projections
                </span>
                <h3 className="text-xl font-extrabold text-brand-navy mt-1">
                  Adjust Your Campus Parameters
                </h3>
                <p className="text-xs text-brand-navy/70 mt-1">
                  Drag the sliders to project annual operating revenue based on local neighborhood demographics.
                </p>
              </div>

              {/* Slider 1: Students */}
              <div className="p-4 rounded-2xl bg-white/80 border border-brand-navy/10 shadow-xs">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-brand-navy">Enrolled Toddlers:</span>
                  <motion.span 
                    key={students}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-base font-extrabold text-brand-navy font-mono"
                  >
                    {students} Students
                  </motion.span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="120"
                  step="5"
                  value={students}
                  onChange={(e) => setStudents(parseInt(e.target.value))}
                  className="w-full accent-brand-navy cursor-pointer h-2 bg-brand-turquoise/20 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-brand-navy/50 mt-1">
                  <span>20 (Boutique)</span>
                  <span>60 (Standard)</span>
                  <span>120 (Flagship)</span>
                </div>
              </div>

              {/* Slider 2: Fee */}
              <div className="p-4 rounded-2xl bg-white/80 border border-brand-navy/10 shadow-xs">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-brand-navy">Average Monthly Fee per Child:</span>
                  <motion.span 
                    key={feePerMonth}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-base font-extrabold text-brand-navy font-mono"
                  >
                    ₹{feePerMonth.toLocaleString('en-IN')}/mo
                  </motion.span>
                </div>
                <input
                  type="range"
                  min="2200"
                  max="7500"
                  step="200"
                  value={feePerMonth}
                  onChange={(e) => setFeePerMonth(parseInt(e.target.value))}
                  className="w-full accent-brand-navy cursor-pointer h-2 bg-brand-lime/40 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-brand-navy/50 mt-1">
                  <span>₹2,200 (Tier 2/3)</span>
                  <span>₹4,500 (Metro Suburb)</span>
                  <span>₹7,500 (Prime Metro)</span>
                </div>
              </div>

              {/* Pillars checklist */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-extrabold text-brand-navy uppercase tracking-wider">
                  Included in 16-Pillar Support:
                </div>
                <div className="space-y-1.5">
                  {pillars.slice(0, 3).map((p, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-brand-navy/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-turquoise-dark flex-shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right Financial Summary Card with Shimmer & Live Progress Bar */}
            <ScrollReveal variant="slideRight" delay={0.15} className="lg:col-span-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-brand-navy text-white shadow-2xl space-y-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-turquoise/20 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-lime font-bold">
                      Estimated Financials
                    </span>
                    <h4 className="text-lg font-extrabold text-white">Annual Campus P&L</h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-brand-lime/20 text-brand-lime text-xs font-mono font-bold border border-brand-lime/30">
                    Low ₹7.5k/mo Flat Royalty
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs text-white/70">
                    <span>Gross Annual Tuition Fees:</span>
                    <span className="text-sm font-bold text-white font-mono">
                      ₹{grossAnnualRevenue.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs text-white/70">
                    <span>Central Brand Support Royalty (Flat ₹7.5k/mo):</span>
                    <span className="text-xs font-bold text-brand-lime font-mono">
                      -₹{annualRoyalty.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs text-white/70">
                    <span>Estimated Operations (Salaries, Rent, Kits):</span>
                    <span className="text-xs font-bold text-white/80 font-mono">
                      -₹{Math.round(estimatedAnnualOpex).toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Dynamic Visual Margin Bar */}
                  <div className="pt-2">
                    <div className="flex justify-between text-[11px] font-bold text-brand-lime mb-1">
                      <span>Operating Surplus Efficiency:</span>
                      <span>{marginPercent}% Surplus Margin</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${marginPercent}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-brand-turquoise to-brand-lime rounded-full"
                      />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/15 flex justify-between items-end">
                    <div>
                      <div className="text-[11px] font-bold text-brand-lime uppercase">
                        Projected Net Annual Surplus:
                      </div>
                      <motion.div 
                        key={estimatedNetSurplus}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                        className="text-2xl sm:text-3xl font-extrabold text-white font-mono"
                      >
                        ₹{Math.round(estimatedNetSurplus).toLocaleString('en-IN')}
                      </motion.div>
                    </div>
                    <div className="text-[10px] text-white/50 text-right">
                      ~{marginPercent}% Margin
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-xs text-white/80 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-lime" />
                    Transparent Model:
                  </div>
                  <p className="text-[11px] text-white/70">
                    Indicative entry investment ₹1.5L–2.5L. No hidden royalties, no forced supplier markups. Break-even typically reached within 9 to 14 months.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenTourModal}
                  className="btn-lime w-full py-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Request Confidential Franchise Kit</span>
                  <ArrowRight className="w-4 h-4 text-brand-navy" />
                </motion.button>
              </div>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </section>
  );
}
