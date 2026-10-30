import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NoBookComparison from './components/NoBookComparison';
import KindermagicExplorer from './components/KindermagicExplorer';
import ClassroomSimulator from './components/ClassroomSimulator';
import ProgrammesSection from './components/ProgrammesSection';
import PreschoolGallery from './components/PreschoolGallery';
import DevelopmentTracker from './components/DevelopmentTracker';
import FranchiseCalculator from './components/FranchiseCalculator';
import LeadershipSection from './components/LeadershipSection';
import TourBookingModal from './components/TourBookingModal';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import { AnimatedDivider } from './components/ScrollReveal';
import { Sparkles, Calendar, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F9FB] text-brand-navy relative selection:bg-brand-lime selection:text-brand-navy">
      
      {/* Dynamic Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Top Navbar */}
      <Navbar onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero Section (Visual Preschool Photos + Badges) */}
        <HeroSection onOpenTourModal={() => setIsTourModalOpen(true)} />
        
        <AnimatedDivider />

        {/* 2. Interactive Classroom Simulator (WonderLab is 3rd / Last) */}
        <ClassroomSimulator />

        <AnimatedDivider />

        {/* 3. The No-Book Comparative Shift (Stick Figure Child hidden on mobile) */}
        <NoBookComparison />

        <AnimatedDivider />

        {/* 4. Kindermagic PrimeX 6 Learning Worlds (High-Res World Imagery) */}
        <KindermagicExplorer />

        <AnimatedDivider />

        {/* 5. Joyful Campus Moments Gallery */}
        <PreschoolGallery />

        <AnimatedDivider />

        {/* 6. Age-Matched Programmes with Photos */}
        <ProgrammesSection onOpenTourModal={() => setIsTourModalOpen(true)} />

        <AnimatedDivider />

        {/* 7. Non-Diagnostic Milestone Tracker (PARAKH HPC Aligned) */}
        <DevelopmentTracker />

        <AnimatedDivider />

        {/* 8. Franchise Unit Economics Calculator */}
        <FranchiseCalculator onOpenTourModal={() => setIsTourModalOpen(true)} />

        <AnimatedDivider />

        {/* 9. Visionary Academic Leadership */}
        <LeadershipSection />
      </main>

      {/* Footer */}
      <Footer onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Tour Booking Modal */}
      <TourBookingModal 
        isOpen={isTourModalOpen} 
        onClose={() => setIsTourModalOpen(false)} 
      />

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsTourModalOpen(true)}
          className="btn-lime px-4 py-3 rounded-2xl text-xs font-black shadow-2xl flex items-center gap-2 border-2 border-white"
          title="Book Campus Tour"
        >
          <Sparkles className="w-4 h-4 text-brand-navy" />
          <span className="hidden sm:inline">Book Discovery Tour</span>
          <span className="sm:hidden">Book Tour</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-11 h-11 rounded-2xl bg-white/90 border border-brand-navy/15 text-brand-navy flex items-center justify-center shadow-lg hover:bg-white transition-all"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      </div>

    </div>
  );
}
