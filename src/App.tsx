import React from 'react';
import { Navbar } from './components/common/Navbar';
import { BackgroundCanvas } from './components/illustrations/BackgroundCanvas';
import { HeroSection } from './components/sections/HeroSection';
import { DownloadHub } from './components/sections/DownloadHub';
import { AboutSection } from './components/sections/AboutSection';
import { InteractiveCorner } from './components/sections/InteractiveCorner';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-dopamine-bg relative selection:bg-dopamine-yellow selection:text-dopamine-dark">
      {/* Background with playful grid & floating vector badges */}
      <BackgroundCanvas />

      {/* Fixed Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <DownloadHub />
        <AboutSection />
        <InteractiveCorner />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
