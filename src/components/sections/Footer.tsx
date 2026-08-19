import React from 'react';
import { Rocket, Heart, ShieldCheck, Bot } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import { triggerStarConfetti } from '../../utils/confetti';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playDownloadCelebrate();
    triggerStarConfetti();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-white border-t-3 border-dopamine-dark pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b-2 border-neutral-100">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-dopamine-blue border-2 border-dopamine-dark pop-shadow flex items-center justify-center">
              <Bot className="w-6 h-6 text-white stroke-[2.5]" />
            </div>
            <div>
              <h4 className="text-xl font-black text-dopamine-dark">
                Ngô Phan Triết
              </h4>
              <p className="text-xs text-neutral-500 font-bold">
                Windows Software & Portfolio Hub • 100% Free & Portable
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-extrabold text-neutral-700">
            <a href="#downloads" className="hover:text-dopamine-coral transition-colors">Kho Phần Mềm</a>
            <span>•</span>
            <a href="#about" className="hover:text-dopamine-blue transition-colors">Về Tác Giả</a>
            <span>•</span>
            <a href="#skills" className="hover:text-dopamine-lilac transition-colors">Kỹ Năng</a>
            <span>•</span>
            <a href="#playground" className="hover:text-amber-600 transition-colors">Góc Vui Vẻ</a>
            <span>•</span>
            <a href="#contact" className="hover:text-dopamine-coral transition-colors">Liên Hệ</a>
          </div>

          {/* Back to top rocket button */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-dopamine-coral hover:bg-dopamine-coral/90 text-white font-black text-xs border-2 border-dopamine-dark pop-shadow transition-transform hover:-translate-y-1 active:translate-y-0.5"
            title="Cuộn lên đầu trang"
          >
            <Rocket className="w-4 h-4 animate-bounce" />
            <span>Lên Đầu Trang</span>
          </button>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-neutral-500 text-center sm:text-left">
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <span>Thiết kế & phát triển bởi <strong>Ngô Phan Triết</strong></span>
            <Heart className="w-3.5 h-3.5 text-dopamine-coral fill-dopamine-coral" />
          </div>

          <div className="flex items-center gap-2 justify-center">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Phân phối an toàn qua GitHub </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
