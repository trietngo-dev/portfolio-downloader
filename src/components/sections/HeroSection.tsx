import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, ShieldCheck, Sparkles, Terminal, Package, Zap } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { Mascot } from '../illustrations/Mascot';
import { soundFx } from '../../utils/sound';
import { triggerStarConfetti } from '../../utils/confetti';
import { PROFILE_DATA } from '../../data/profile';

export const HeroSection: React.FC = () => {
  const handleDownloadClick = () => {
    soundFx.playDownloadCelebrate();
    triggerStarConfetti();
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Top Playful Badge */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              onClick={() => soundFx.playPop()}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-dopamine-dark pop-shadow-sm mb-6 cursor-pointer select-none"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-dopamine-mint animate-pulse" />
              <span className="text-xs sm:text-sm font-extrabold text-dopamine-dark flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-dopamine-coral" />
                Windows Software & Tools Hub
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="text-xl sm:text-2xl font-extrabold text-dopamine-coral mb-3 tracking-tight">
              Xin chào, mình là Ngô Phan Triết
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dopamine-dark tracking-tight leading-[1.18] mb-6">
              Kiến tạo <span className="relative inline-block text-dopamine-blue">
                phần mềm
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-dopamine-yellow"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0 15 Q50 0 100 15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span> tiện ích, gọn nhẹ & sáng tạo.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed max-w-xl mb-8">
              Chào mừng bạn đến với góc nhỏ chia sẻ các công cụ Windows <code className="px-2 py-0.5 rounded-md bg-dopamine-coral/15 text-dopamine-coral font-mono font-bold text-sm border border-dopamine-coral/30">.exe</code> portable, indie apps và tiện ích máy tính do mình tự tay phát triển — 100% miễn phí & an toàn.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              {/* Primary Download Hub Button */}
              <a
                href="#downloads"
                onMouseEnter={() => soundFx.playHover()}
                onClick={handleDownloadClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-dopamine-coral hover:bg-dopamine-coral/95 text-white font-black text-base border-2 border-dopamine-dark pop-shadow-hover select-none"
              >
                <Download className="w-5 h-5 stroke-[2.5]" />
                <span>Khám phá Kho Phần Mềm</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </a>

              {/* Secondary About Button */}
              <a
                href="#about"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-neutral-50 text-dopamine-dark font-extrabold text-base border-2 border-dopamine-dark pop-shadow-hover select-none"
              >
                <Terminal className="w-4 h-4 text-dopamine-blue" />
                <span>Về tác giả</span>
              </a>

              {/* GitHub Releases link */}
              <a
                href="https://github.com/trietngo-dev"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="p-3.5 rounded-2xl bg-white hover:bg-neutral-50 text-dopamine-dark border-2 border-dopamine-dark pop-shadow-hover"
                title="Xem trên GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm font-bold text-neutral-600">
              <div className="flex items-center gap-2 bg-dopamine-mint/15 text-emerald-800 px-3.5 py-1.5 rounded-xl border border-emerald-300/60">
                <ShieldCheck className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                <span>Không Virus / Mã độc</span>
              </div>
              <div className="flex items-center gap-2 bg-dopamine-blue/15 text-blue-900 px-3.5 py-1.5 rounded-xl border border-blue-300/60">
                <Zap className="w-4 h-4 text-dopamine-blue stroke-[2.5]" />
                <span>Chạy ngay (Portable)</span>
              </div>
              <div className="flex items-center gap-2 bg-dopamine-yellow/25 text-amber-900 px-3.5 py-1.5 rounded-xl border border-amber-300/60">
                <Package className="w-4 h-4 text-amber-600 stroke-[2.5]" />
                <span>Tải qua GitHub CDN</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Mascot Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'backOut' }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Playful Backdrop Card for Mascot */}
            <div className="relative w-full max-w-sm sm:max-w-md p-6 sm:p-8 bg-white border-3 border-dopamine-dark rounded-3xl pop-shadow-xl text-center flex flex-col items-center">

              {/* Window Header Dots */}
              <div className="w-full flex items-center justify-between pb-4 mb-2 border-b-2 border-dopamine-dark/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-dopamine-coral border border-dopamine-dark" />
                  <span className="w-3.5 h-3.5 rounded-full bg-dopamine-yellow border border-dopamine-dark" />
                  <span className="w-3.5 h-3.5 rounded-full bg-dopamine-mint border border-dopamine-dark" />
                </div>
                <span className="text-xs font-mono font-bold text-neutral-500">
                  TRIET
                </span>
                <span className="text-xs font-bold text-dopamine-blue bg-dopamine-sky px-2 py-0.5 rounded-md">
                  v2.0
                </span>
              </div>

              {/* The Mascot Component */}
              <Mascot
                mood="waving"
                speechText="Chào bạn! Mình là Sparky bot, bạn thử click vào mình xem!"
                size="lg"
                interactive={true}
              />

              {/* Mascot Status Badge */}
              <div className="mt-4 w-full p-2.5 rounded-xl bg-dopamine-sky/60 border border-dopamine-blue/20 flex items-center justify-between text-xs font-bold text-neutral-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-dopamine-mint animate-ping" />
                  Trạng thái: Sẵn sàng tải
                </span>
                <span className="text-dopamine-blue font-mono">Win 10/11 x64</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
