import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NoBookComparison from './components/NoBookComparison';
import KindermagicExplorer from './components/KindermagicExplorer';
import ClassroomSimulator from './components/ClassroomSimulator';
import ProgrammesSection from './components/ProgrammesSection';
import DevelopmentTracker from './components/DevelopmentTracker';
import FranchiseCalculator from './components/FranchiseCalculator';
import LeadershipSection from './components/LeadershipSection';
import TourBookingModal from './components/TourBookingModal';
import Footer from './components/Footer';
import { Sparkles, Calendar, ArrowUp } from 'lucide-react';

export default function App() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F9FB] text-brand-navy relative selection:bg-brand-lime selection:text-brand-navy">
      
      {/* Top Navbar */}
      <Navbar onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenTourModal={() => setIsTourModalOpen(true)} />
        
        <div className="specular-divider" />

        {/* 2. Interactive Classroom Simulator (WonderLab & Kiddy Codey) */}
        <ClassroomSimulator />

        <div className="specular-divider" />

        {/* 3. The No-Book Comparative Shift */}
        <NoBookComparison />

        <div className="specular-divider" />

        {/* 4. Kindermagic PrimeX 6 Learning Worlds */}
        <KindermagicExplorer />

        <div className="specular-divider" />

        {/* 5. Age-Matched Programmes with Interactive Age Matcher Slider */}
        <ProgrammesSection onOpenTourModal={() => setIsTourModalOpen(true)} />

        <div className="specular-divider" />

        {/* 6. Non-Diagnostic Milestone Tracker (PARAKH HPC Aligned) */}
        <DevelopmentTracker />

        <div className="specular-divider" />

        {/* 7. Franchise Unit Economics Calculator */}
        <FranchiseCalculator onOpenTourModal={() => setIsTourModalOpen(true)} />

        <div className="specular-divider" />

        {/* 8. Visionary Academic Leadership */}
        <LeadershipSection />
      </main>

      {/* Footer */}
      <Footer onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Tour Booking Modal */}
      <TourBookingModal 
        isOpen={isTourModalOpen} 
        onClose={() => setIsTourModalOpen(false)} 
      />

      {/* Floating Action Button for Instant Tour Reservation */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={() => setIsTourModalOpen(true)}
          className="btn-lime px-4 py-3 rounded-2xl text-xs font-black shadow-2xl flex items-center gap-2 border-2 border-white animate-bounce hover:animate-none"
          title="Book Campus Tour"
        >
          <Sparkles className="w-4 h-4 text-brand-navy" />
          <span className="hidden sm:inline">Book Discovery Tour</span>
          <span className="sm:hidden">Book Tour</span>
        </button>

        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-2xl bg-white/90 border border-brand-navy/15 text-brand-navy flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
