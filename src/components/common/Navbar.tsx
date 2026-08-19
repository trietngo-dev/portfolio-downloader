import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Sparkles, FolderDown, User, Layers, Smile, Bot } from 'lucide-react';
import { SoundToggle } from './SoundToggle';
import { soundFx } from '../../utils/sound';

export const Navbar: React.FC = () => {
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
    { name: 'Kho Phần Mềm (.exe)', href: '#downloads', icon: FolderDown, badge: 'Hot' },
    { name: 'Về tôi', href: '#about', icon: User },
    { name: 'Kỹ năng', href: '#skills', icon: Layers },
    { name: 'Góc vui vẻ', href: '#playground', icon: Smile },
    { name: 'Liên hệ', href: '#contact', icon: Sparkles },
  ];

  const handleLinkClick = () => {
    soundFx.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-white/90 backdrop-blur-md border-b-2 border-dopamine-dark/10 shadow-sm'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={() => soundFx.playPop()}
          className="group flex items-center gap-2.5 text-dopamine-dark font-black tracking-tight text-lg sm:text-xl select-none"
        >
          {/* Mini Vector Mascot Icon */}
          <div className="w-10 h-10 rounded-2xl bg-dopamine-blue border-2 border-dopamine-dark pop-shadow flex items-center justify-center group-hover:rotate-6 group-hover:scale-105 transition-transform">
            <Bot className="w-5 h-5 text-white stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg leading-none group-hover:text-dopamine-blue transition-colors">
              Ngô Phan Triết
            </span>
            <span className="text-[10px] font-extrabold text-dopamine-coral tracking-wider uppercase mt-0.5">
              Windows Software Hub
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-sm p-1.5 rounded-full border-2 border-dopamine-dark/15 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
              className="relative px-3.5 py-1.5 rounded-full text-sm font-bold text-neutral-700 hover:text-dopamine-dark hover:bg-dopamine-sky/60 transition-all flex items-center gap-1.5"
            >
              {link.name}
              {link.badge && (
                <span className="px-1.5 py-0.2 bg-dopamine-coral text-white text-[10px] font-black rounded-full uppercase tracking-wider animate-pulse">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions: Sound Toggle + CTA */}
        <div className="flex items-center gap-2.5">
          <SoundToggle />

          <a
            href="#downloads"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-dopamine-coral hover:bg-dopamine-coral/90 text-white font-extrabold text-sm border-2 border-dopamine-dark pop-shadow transition-transform hover:-translate-y-0.5 active:translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span>Tải .EXE Ngay</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-xl bg-white border-2 border-dopamine-dark pop-shadow text-dopamine-dark"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b-2 border-dopamine-dark px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl font-bold text-neutral-800 hover:bg-dopamine-sky/50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-dopamine-blue" />
                      <span>{link.name}</span>
                    </div>
                    {link.badge && (
                      <span className="px-2 py-0.5 bg-dopamine-coral text-white text-[10px] font-black rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </a>
                );
              })}
              <a
                href="#downloads"
                onClick={handleLinkClick}
                className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-dopamine-coral text-white font-extrabold border-2 border-dopamine-dark pop-shadow"
              >
                <Download className="w-4 h-4" />
                <span>Xem & Tải Phần Mềm (.exe)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
