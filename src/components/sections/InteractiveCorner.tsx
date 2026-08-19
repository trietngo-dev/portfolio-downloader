import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smile,
  Sparkles,
  Volume2,
  BatteryCharging,
  Heart,
  Zap,
  Award,
  Hand,
  Rocket,
  Laptop,
  Glasses,
  Coffee,
  Play,
  Bot,
  Sliders,
} from 'lucide-react';
import { Mascot, MascotMood } from '../illustrations/Mascot';
import { soundFx } from '../../utils/sound';
import { triggerDownloadConfetti, triggerStarConfetti } from '../../utils/confetti';

export const InteractiveCorner: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MascotMood>('excited');
  const [energyLevel, setEnergyLevel] = useState(65);
  const [coffeeCups, setCoffeeCups] = useState(0);

  const moodButtons: { mood: MascotMood; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { mood: 'waving', label: 'Thân thiện', icon: Hand },
    { mood: 'rocket', label: 'Phóng tên lửa', icon: Rocket },
    { mood: 'working', label: 'Đang code', icon: Laptop },
    { mood: 'excited', label: 'Phấn khích', icon: Sparkles },
    { mood: 'cool', label: 'Kính ngầu', icon: Glasses },
  ];

  const handleMoodSelect = (mood: MascotMood) => {
    soundFx.playPop();
    setSelectedMood(mood);
  };

  const handleFeedCoffee = () => {
    soundFx.playMascotInteract();
    setCoffeeCups((prev) => prev + 1);
    setEnergyLevel((prev) => {
      const next = Math.min(prev + 15, 100);
      if (next === 100) {
        soundFx.playDownloadCelebrate();
        triggerDownloadConfetti();
      }
      return next;
    });
  };

  return (
    <section id="playground" className="py-20 md:py-24 relative z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dopamine-yellow/30 border border-dopamine-yellow text-amber-900 text-xs sm:text-sm font-extrabold mb-4 select-none">
            <Smile className="w-4 h-4 text-amber-600" />
            <span>Góc Tương Tác Vui Nhộn</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dopamine-dark tracking-tight mb-4">
            Phòng Thí Nghiệm Mascot & Soundboard
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 font-medium">
            Thử thay đổi trang phục cho Mascot Sparky, test âm thanh hiệu ứng Web Audio hoặc nạp trà sữa tiếp năng lượng cho Triết code!
          </p>
        </div>

        {/* Interactive Lab Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Mascot Studio */}
          <div className="lg:col-span-7 bg-white border-2 border-dopamine-dark rounded-3xl pop-shadow p-6 sm:p-8 flex flex-col items-center text-center">
            <h3 className="text-xl font-black text-dopamine-dark mb-2 flex items-center gap-2">
              <Sliders className="w-5 h-5 text-dopamine-blue stroke-[2.5]" />
              <span>Tùy Biến Biểu Cảm Mascot</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 font-medium mb-6">
              Chọn trang phục hoặc chế độ để xem phản ứng của robot Sparky
            </p>

            {/* Mascot Preview */}
            <div className="my-4">
              <Mascot
                mood={selectedMood}
                speechText={`Đang ở chế độ: ${moodButtons.find((m) => m.mood === selectedMood)?.label}!`}
                size="lg"
                interactive={true}
              />
            </div>

            {/* Mood selector buttons */}
            <div className="flex flex-wrap justify-center gap-2.5 mt-6 w-full">
              {moodButtons.map((btn) => {
                const Icon = btn.icon;
                return (
                  <button
                    key={btn.mood}
                    onClick={() => handleMoodSelect(btn.mood)}
                    className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold border-2 transition-all flex items-center gap-2 ${
                      selectedMood === btn.mood
                        ? 'bg-dopamine-coral text-white border-dopamine-dark pop-shadow-sm scale-105'
                        : 'bg-neutral-100 text-neutral-700 border-neutral-300 hover:bg-neutral-200'
                    }`}
                  >
                    <Icon className="w-4 h-4 stroke-[2.5]" />
                    <span>{btn.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Soundboard & Energy Battery */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Energy Clicker Card */}
            <div className="bg-white border-2 border-dopamine-dark rounded-3xl pop-shadow p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-black text-dopamine-dark flex items-center gap-2">
                    <BatteryCharging className="w-5 h-5 text-dopamine-coral" />
                    <span>Năng Lượng Sáng Tạo</span>
                  </h4>
                  <span className="font-mono font-bold text-sm text-dopamine-coral">
                    {energyLevel}%
                  </span>
                </div>

                {/* Battery Progress Bar */}
                <div className="w-full h-5 rounded-full bg-neutral-100 border-2 border-dopamine-dark overflow-hidden p-0.5 mb-4">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: `${energyLevel}%` }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="h-full rounded-full bg-gradient-to-r from-dopamine-yellow via-dopamine-coral to-dopamine-mint"
                  />
                </div>

                <div className="text-xs text-neutral-600 font-medium mb-4 flex items-center gap-1.5 flex-wrap">
                  <span>Đã tiếp tế:</span>
                  <strong className="text-dopamine-dark flex items-center gap-1">
                    <Coffee className="w-3.5 h-3.5 text-amber-700" />
                    {coffeeCups} ly trà sữa / cafe
                  </strong>
                  {energyLevel === 100 && (
                    <span className="w-full text-emerald-600 font-bold mt-1 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Tuyệt vời! Năng lượng 100% — Triết đã sẵn sàng code tiếp!
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={handleFeedCoffee}
                className="w-full py-3 rounded-2xl bg-dopamine-yellow hover:bg-amber-400 text-dopamine-dark font-black text-sm border-2 border-dopamine-dark pop-shadow flex items-center justify-center gap-2 active:translate-y-0.5"
              >
                <Heart className="w-4 h-4 text-dopamine-coral fill-dopamine-coral animate-bounce" />
                <span>Mời Triết 1 Ly Trà Sữa (+15% Năng Lượng)</span>
              </button>
            </div>

            {/* Soundboard Tester */}
            <div className="bg-white border-2 border-dopamine-dark rounded-3xl pop-shadow p-6">
              <h4 className="text-base font-black text-dopamine-dark mb-1 flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-dopamine-blue" />
                <span>Web Audio Soundboard</span>
              </h4>
              <p className="text-xs text-neutral-500 font-medium mb-4">
                Hiệu ứng âm thanh tổng hợp trực tiếp từ trình duyệt Web Audio API
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => soundFx.playPop()}
                  className="p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 font-bold text-xs border border-neutral-300 text-neutral-800 flex items-center gap-2 justify-center"
                >
                  <Sparkles className="w-3.5 h-3.5 text-dopamine-coral" />
                  <span>Bubble Pop</span>
                </button>
                <button
                  onClick={() => soundFx.playClick()}
                  className="p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 font-bold text-xs border border-neutral-300 text-neutral-800 flex items-center gap-2 justify-center"
                >
                  <Play className="w-3.5 h-3.5 text-dopamine-blue" />
                  <span>Bouncy Click</span>
                </button>
                <button
                  onClick={() => soundFx.playMascotInteract()}
                  className="p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 font-bold text-xs border border-neutral-300 text-neutral-800 flex items-center gap-2 justify-center"
                >
                  <Bot className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Robot Chime</span>
                </button>
                <button
                  onClick={() => {
                    soundFx.playDownloadCelebrate();
                    triggerStarConfetti();
                  }}
                  className="p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 font-bold text-xs border border-neutral-300 text-neutral-800 flex items-center gap-2 justify-center"
                >
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>Fanfare Burst</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
