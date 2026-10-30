import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Sparkles, Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';
import { BRAND } from '../data/websiteContent';

export default function Navbar({ onOpenTourModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "The No-Book Model", href: "#no-book" },
    { label: "6 Learning Worlds", href: "#learning-worlds" },
    { label: "Classroom Simulator", href: "#simulator" },
    { label: "Programmes", href: "#programmes" },
    { label: "Parent Tracker", href: "#tracker" },
    { label: "Franchise ROI", href: "#franchise" },
    { label: "Leadership", href: "#leadership" },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-brand-navy text-white text-xs py-2 px-4 border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-lime/20 text-brand-lime font-semibold text-[11px] border border-brand-lime/30">
              <Sparkles className="w-3 h-3 text-brand-lime" />
              Admissions Open 2026–2027
            </span>
            <span className="hidden md:inline text-white/80">
              NCF-FS 2022 Compliant India's Premier Experiential Preschool
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/80">
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-1.5 hover:text-brand-lime transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-turquoise" />
              <span className="font-medium">{BRAND.phone}</span>
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a 
              href="standalone-previews.html" 
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-[11px] transition-all border border-white/20"
              title="View all alternative designs (Previews 1 through 6)"
            >
              <span>Explore All Previews (1–6)</span>
              <ArrowUpRight className="w-3 h-3 text-brand-lime" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Floating Header */}
      <header className={`sticky top-3 z-40 transition-all duration-300 px-3 sm:px-6`}>
        <div className={`max-w-7xl mx-auto rounded-3xl transition-all duration-300 ${
          scrolled 
            ? 'glass-panel-elevated py-2.5 px-4 sm:px-6 shadow-xl border border-white/90 bg-white/90 backdrop-blur-xl' 
            : 'glass-panel py-3.5 px-4 sm:px-6 shadow-md border border-white/80 bg-white/80 backdrop-blur-md'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden border border-brand-navy/10 shadow-sm flex items-center justify-center bg-white p-0.5 group-hover:scale-105 transition-transform">
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
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg sm:text-xl tracking-tight text-brand-navy font-display">
                    Blooming Era
                  </span>
                  <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-brand-turquoise/20 text-brand-navy rounded border border-brand-turquoise/40">
                    Preschool
                  </span>
                </div>
                <span className="text-[11px] text-brand-navy/60 font-medium tracking-tight -mt-0.5">
                  Kindermagic PrimeX™ System
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-semibold text-brand-navy/80 hover:text-brand-navy hover:bg-brand-turquoise/15 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href="#franchise"
                className="px-3.5 py-2 text-xs font-bold text-brand-navy hover:bg-brand-navy/5 rounded-xl transition-colors border border-brand-navy/15"
              >
                Franchise Hub
              </a>
              <button
                onClick={onOpenTourModal}
                className="btn-lime px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-md hover:shadow-lg"
              >
                <span>Book Campus Tour</span>
                <Sparkles className="w-3.5 h-3.5 text-brand-navy" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenTourModal}
                className="btn-lime px-3 py-1.5 rounded-lg text-xs font-bold sm:hidden"
              >
                Book Tour
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-brand-navy bg-white/70 border border-white/80 hover:bg-white shadow-sm"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 glass-panel-elevated rounded-2xl border border-white/90 shadow-2xl bg-white/95 backdrop-blur-2xl animate-in fade-in duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-brand-navy/90 hover:bg-brand-turquoise/15 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-brand-navy/10 flex flex-col gap-2">
                <a
                  href="#franchise"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2 text-xs font-bold text-brand-navy bg-brand-turquoise/20 rounded-xl"
                >
                  Partner / Franchise Opportunities
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTourModal();
                  }}
                  className="w-full btn-lime py-2.5 text-xs font-bold rounded-xl flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book a Campus Discovery Tour</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
