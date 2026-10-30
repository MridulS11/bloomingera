import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, BookOpenCheck, Compass, HeartHandshake, 
  Leaf, Cpu, ArrowRight, CheckCircle2, Layers 
} from 'lucide-react';
import { KINDERMAGIC_WORLDS } from '../data/websiteContent';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

export default function KindermagicExplorer() {
  const [selectedWorldId, setSelectedWorldId] = useState(KINDERMAGIC_WORLDS[0].id);
  const activeWorld = KINDERMAGIC_WORLDS.find((w) => w.id === selectedWorldId) || KINDERMAGIC_WORLDS[0];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'BookOpenCheck': return <BookOpenCheck className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Leaf': return <Leaf className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="learning-worlds" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-lime/30 border border-brand-lime/50 text-brand-navy font-bold text-xs mb-3 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-brand-navy" />
            <span>Proprietary Curriculum Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-display mb-4">
            Kindermagic PrimeX™: 6 Connected Worlds
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
            Preschoolers at Blooming Era do not memorize flat subjects. Instead, they rotate through 
            six purposefully equipped sensorial environments that awaken the child’s natural intelligence.
          </p>
        </ScrollReveal>

        {/* 6 Worlds Horizontal Selector Grid with Staggered Scroll Animation */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {KINDERMAGIC_WORLDS.map((world, idx) => {
            const isSelected = world.id === selectedWorldId;
            return (
              <StaggerItem key={world.id}>
                <motion.button
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedWorldId(world.id)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 relative flex flex-col justify-between h-full ${
                    isSelected
                      ? 'glass-panel-elevated bg-white border-brand-navy/20 shadow-xl ring-2 ring-brand-navy/10'
                      : 'glass-panel bg-white/70 hover:bg-white/90 border-white/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs"
                      style={{ backgroundColor: `${world.color}25`, color: world.color === '#DCE747' ? '#091E3A' : world.color }}
                    >
                      {getIcon(world.icon)}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-brand-navy/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-extrabold text-brand-navy tracking-tight leading-tight">
                      {world.name}
                    </h4>
                    <p className="text-[10px] text-brand-navy/60 font-medium truncate mt-0.5">
                      {world.badge}
                    </p>
                  </div>

                  {isSelected && (
                    <motion.div 
                      layoutId="activeWorldIndicator"
                      className="absolute -bottom-1 left-4 right-4 h-1.5 rounded-full"
                      style={{ backgroundColor: world.color === '#DCE747' ? '#DCE747' : world.color }}
                    />
                  )}
                </motion.button>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Active World Spotlight Feature Card */}
        <ScrollReveal variant="scaleUp" delay={0.15}>
          <div className="glass-panel p-6 sm:p-10 border-white/95 shadow-2xl bg-white/90 rounded-3xl relative overflow-hidden">
            {/* Subtle Accent Glow */}
            <div 
              className="absolute top-0 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-20 pointer-events-none transition-colors duration-500"
              style={{ backgroundColor: activeWorld.color }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-brand-navy"
                    style={{ backgroundColor: `${activeWorld.color}40`, border: `1px solid ${activeWorld.color}` }}
                  >
                    {activeWorld.badge}
                  </span>
                  <span className="text-xs font-semibold text-brand-navy/50">
                    Daily Station Rotation
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                    {activeWorld.name} — <span className="font-semibold text-brand-navy/70 text-xl sm:text-2xl">{activeWorld.subtitle}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-brand-navy/80 leading-relaxed mt-3">
                    {activeWorld.description}
                  </p>
                </div>

                {/* 5-Step Experiential Cycle Link */}
                <div className="p-3.5 rounded-2xl bg-brand-navy/5 border border-brand-navy/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center font-bold text-xs text-brand-navy shadow-xs flex-shrink-0">
                    Cycle
                  </div>
                  <div className="text-xs text-brand-navy/80">
                    <strong className="text-brand-navy">Core Experiential Stage:</strong> {activeWorld.cycleFocus}
                  </div>
                </div>

                {/* Learning Outcomes Checklist */}
                <div>
                  <h5 className="text-xs font-black uppercase tracking-wider text-brand-navy/70 mb-3">
                    Measurable Milestones Documented:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeWorld.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-brand-navy font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-brand-turquoise-dark flex-shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Tangible Materials Panel */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-3xl bg-gradient-to-br from-white to-[#F6FBFB] border border-white shadow-lg space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-navy/10">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-brand-navy">
                      Sensory Materials (Zero Textbooks)
                    </div>
                    <span className="text-[10px] font-mono text-brand-turquoise-dark font-bold bg-brand-turquoise/20 px-2 py-0.5 rounded">
                      Child-Safe
                    </span>
                  </div>

                  <div className="space-y-3">
                    {activeWorld.materials.map((item, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ x: 4 }}
                        className="p-3.5 rounded-2xl bg-white border border-brand-navy/10 shadow-xs flex items-center justify-between hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black text-brand-navy"
                            style={{ backgroundColor: `${activeWorld.color}35` }}
                          >
                            {idx + 1}
                          </div>
                          <span className="text-xs font-bold text-brand-navy">{item}</span>
                        </div>
                        <span className="text-[10px] text-brand-navy/50 font-medium">Tactile Kit</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-tight">
                    💡 <strong>Pedagogical Standard:</strong> Every tactile kit is inspected weekly for non-toxicity, sensory variety, and developmental appropriateness.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
