import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Heart } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/websiteContent';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

export default function PreschoolGallery() {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-white via-[#F6FBFB] to-[#F4F9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-turquoise/20 border border-brand-turquoise/40 text-brand-navy font-bold text-xs mb-3 shadow-sm">
            <Camera className="w-4 h-4 text-brand-turquoise-dark" />
            <span>Campus Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-display mb-3">
            Life at Blooming Era
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
            Every day is filled with hands-on wonders, sensory smiles, and boundless creativity!
          </p>
        </ScrollReveal>

        {/* 6-Photo Masonry / Responsive Grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {GALLERY_PHOTOS.map((item, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-[3/4] bg-white"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Overlaid Tag and Title */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <span className="inline-block text-[9px] font-bold px-2 py-0.5 rounded-full bg-brand-lime text-brand-navy mb-1 shadow-xs">
                    {item.tag}
                  </span>
                  <h4 className="text-xs font-black truncate">{item.title}</h4>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
