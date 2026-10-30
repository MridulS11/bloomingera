import React from 'react';
import { Phone, Mail, MapPin, Sparkles, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { BRAND } from '../data/websiteContent';

export default function Footer({ onOpenTourModal }) {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 relative overflow-hidden border-t border-white/10">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-turquoise/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 flex items-center justify-center shadow-md">
                <img 
                  src="/logo.jpeg" 
                  alt="Blooming Era Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = '<span class="text-xs font-black text-brand-navy">BE</span>';
                  }}
                />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight font-display">
                  {BRAND.name}
                </span>
                <p className="text-xs text-brand-lime font-medium">
                  {BRAND.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Empowering India's young learners through hands-on experiential inquiry. We replace heavy backpacks, stressful exams, and passive copybooks with 6 connected learning worlds.
            </p>

            {/* Quick Contact Chips */}
            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-turquoise" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-brand-lime transition-colors">
                  {BRAND.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-turquoise" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-brand-lime transition-colors">
                  {BRAND.email} / {BRAND.admissionsEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-turquoise" />
                <span>{BRAND.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-black uppercase tracking-wider text-brand-lime">
              Academic Architecture
            </h5>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#no-book" className="hover:text-white transition-colors">The No-Book Philosophy</a>
              </li>
              <li>
                <a href="#learning-worlds" className="hover:text-white transition-colors">Kindermagic PrimeX™ (6 Worlds)</a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-white transition-colors">Interactive Classroom Simulator</a>
              </li>
              <li>
                <a href="#programmes" className="hover:text-white transition-colors">Developmental Age Pathways</a>
              </li>
              <li>
                <a href="#tracker" className="hover:text-white transition-colors">Non-Diagnostic Milestone Tracker</a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-white transition-colors">Academic Advisory Board</a>
              </li>
            </ul>
          </div>

          {/* Franchise & Alternatives (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-xs font-black uppercase tracking-wider text-brand-lime">
              Partnership & Design Demos
            </h5>
            
            {/* Franchise Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Franchise Partnership</span>
                <span className="text-[10px] bg-brand-lime/20 text-brand-lime px-2 py-0.5 rounded-full font-mono">
                  Fixed Royalty
                </span>
              </div>
              <p className="text-[11px] text-white/70">
                Join our 16-pillar expansion matrix across Tier-1 and Tier-2 growth hubs.
              </p>
              <a 
                href="#franchise"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-turquoise hover:underline"
              >
                <span>Calculate Campus ROI</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Design Previews Switcher Card */}
            <div className="p-4 rounded-2xl bg-brand-turquoise/10 border border-brand-turquoise/30 space-y-1.5">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-lime" />
                Client Design Previews Hub
              </span>
              <p className="text-[11px] text-white/75">
                Compare with our alternative design concepts (Previews 1 through 6).
              </p>
              <a 
                href="standalone-previews.html"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-lime hover:underline"
              >
                <span>Open Design Showcase (Previews 1–6)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. All Rights Reserved. Aligned with NCF-FS 2022.
          </div>
          <div className="flex items-center gap-4">
            <span>Non-Diagnostic Pedagogy</span>
            <span>•</span>
            <span>Zero-Screen Early Childhood Policy</span>
            <span>•</span>
            <span>Child Protection Protocol</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
