import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../../utils/sound';

export type MascotMood = 'waving' | 'rocket' | 'working' | 'excited' | 'cool';

interface MascotProps {
  mood?: MascotMood;
  speechText?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
  className?: string;
}

export const Mascot: React.FC<MascotProps> = ({
  mood = 'waving',
  speechText,
  size = 'md',
  interactive = true,
  className = '',
}) => {
  const [currentMood, setCurrentMood] = useState<MascotMood>(mood);
  const [clickCount, setClickCount] = useState(0);
  const [bubbleMessage, setBubbleMessage] = useState(speechText);

  // Sync prop changes
  React.useEffect(() => {
    setCurrentMood(mood);
  }, [mood]);

  React.useEffect(() => {
    setBubbleMessage(speechText);
  }, [speechText]);

  const moodsList: MascotMood[] = ['waving', 'rocket', 'working', 'excited', 'cool'];
  const funnyPhrases = [
    'Chào bạn! Hãy tải thử một ứng dụng nhé! 🚀',
    'Tất cả phần mềm đều 100% Virus-Free & Portable! ✨',
    'Bạn vừa click vào mình đó à? Nhột quá! 🤖',
    'Được code bằng cả đam mê và trà sữa 🧋',
    'Cần hỗ trợ gì cứ nhắn Triết qua mục liên hệ nha! 💬',
    'Phím tắt bí mật: Thử click thêm lần nữa xem! 🌟'
  ];

  const handleMascotClick = () => {
    if (!interactive) return;
    soundFx.playMascotInteract();
    
    const nextClick = clickCount + 1;
    setClickCount(nextClick);

    // Rotate mood
    const nextMood = moodsList[nextClick % moodsList.length];
    setCurrentMood(nextMood);

    // Rotate speech bubble
    const nextPhrase = funnyPhrases[nextClick % funnyPhrases.length];
    setBubbleMessage(nextPhrase);
  };

  // Dimensions
  const sizeMap = {
    sm: 'w-24 h-24',
    md: 'w-40 h-40 md:w-48 md:h-48',
    lg: 'w-56 h-56 md:w-64 md:h-64',
    xl: 'w-72 h-72 md:w-80 md:h-80',
  };

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Speech Bubble */}
      <AnimatePresence>
        {bubbleMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="mb-3 max-w-xs px-4 py-2 bg-white border-2 border-dopamine-dark rounded-2xl pop-shadow text-xs sm:text-sm font-bold text-dopamine-dark relative z-20 leading-relaxed"
          >
            <span>{bubbleMessage}</span>
            {/* Bubble arrow */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-dopamine-dark" />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascot SVG Canvas */}
      <motion.div
        onClick={handleMascotClick}
        whileHover={interactive ? { scale: 1.06, rotate: [-1, 1, -1] } : {}}
        whileTap={interactive ? { scale: 0.94 } : {}}
        className={`${sizeMap[size]} relative cursor-pointer group`}
        title={interactive ? "Click để tương tác với Mascot Sparky!" : undefined}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-md overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shadows */}
          <ellipse cx="100" cy="188" rx="55" ry="10" fill="#181A2A" opacity="0.12" />

          {/* Floating Antenna with animated light */}
          <motion.g
            animate={{ rotate: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ transformOrigin: '100px 65px' }}
          >
            <line x1="100" y1="65" x2="100" y2="35" stroke="#181A2A" strokeWidth="6" strokeLinecap="round" />
            {/* Antenna Ball */}
            <circle cx="100" cy="30" r="14" fill="#FFD166" stroke="#181A2A" strokeWidth="5" />
            <circle cx="96" cy="26" r="4" fill="#FFFFFF" />
            {/* Antenna Spark/Glow */}
            <motion.circle
              cx="100"
              cy="30"
              r="18"
              fill="none"
              stroke="#FF6B4A"
              strokeWidth="2"
              strokeDasharray="4 4"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              style={{ transformOrigin: '100px 30px' }}
            />
          </motion.g>

          {/* Robot Ear Left */}
          <rect x="36" y="85" width="16" height="30" rx="8" fill="#FF6B4A" stroke="#181A2A" strokeWidth="5" />
          <line x1="44" y1="92" x2="44" y2="108" stroke="#181A2A" strokeWidth="3" strokeLinecap="round" />

          {/* Robot Ear Right */}
          <rect x="148" y="85" width="16" height="30" rx="8" fill="#FF6B4A" stroke="#181A2A" strokeWidth="5" />
          <line x1="156" y1="92" x2="156" y2="108" stroke="#181A2A" strokeWidth="3" strokeLinecap="round" />

          {/* Main Head & Body (Rounded Box) */}
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            {/* Robot Body */}
            <rect
              x="48"
              y="60"
              width="104"
              height="95"
              rx="28"
              fill="#3A86FF"
              stroke="#181A2A"
              strokeWidth="6"
            />

            {/* Screen Face Area */}
            <rect
              x="58"
              y="72"
              width="84"
              height="58"
              rx="18"
              fill="#181A2A"
            />

            {/* Screen Inner Glare / Reflection */}
            <path
              d="M66 78 Q100 80 134 86"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* MOOD SPECIFIC EYES & FACE */}
            {currentMood === 'waving' && (
              <>
                {/* Cheerful Oval Eyes */}
                <motion.g
                  animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                  transition={{ repeat: Infinity, duration: 3.5, times: [0, 0.45, 0.5, 0.55, 1] }}
                  style={{ transformOrigin: '100px 96px' }}
                >
                  <circle cx="82" cy="96" r="10" fill="#FFD166" />
                  <circle cx="118" cy="96" r="10" fill="#FFD166" />
                  <circle cx="84" cy="94" r="3.5" fill="#FFFFFF" />
                  <circle cx="120" cy="94" r="3.5" fill="#FFFFFF" />
                </motion.g>
                {/* Cute Smiling Mouth */}
                <path d="M90 114 Q100 123 110 114" stroke="#06D6A0" strokeWidth="4" strokeLinecap="round" fill="none" />
                {/* Blushing Cheeks */}
                <circle cx="70" cy="112" r="5" fill="#FF6B4A" opacity="0.85" />
                <circle cx="130" cy="112" r="5" fill="#FF6B4A" opacity="0.85" />
              </>
            )}

            {currentMood === 'excited' && (
              <>
                {/* Star Eyes */}
                <polygon points="82,88 85,95 92,96 87,101 88,108 82,104 76,108 77,101 72,96 79,95" fill="#FFD166" stroke="#FFFFFF" strokeWidth="1" />
                <polygon points="118,88 121,95 128,96 123,101 124,108 118,104 112,108 113,101 108,96 115,95" fill="#FFD166" stroke="#FFFFFF" strokeWidth="1" />
                {/* Big Open Smile */}
                <path d="M88 112 Q100 128 112 112 Z" fill="#FF6B4A" stroke="#FFFFFF" strokeWidth="2" />
              </>
            )}

            {currentMood === 'cool' && (
              <>
                {/* Pixel Sunglasses */}
                <rect x="68" y="88" width="28" height="18" rx="4" fill="#06D6A0" stroke="#FFFFFF" strokeWidth="2" />
                <rect x="104" y="88" width="28" height="18" rx="4" fill="#06D6A0" stroke="#FFFFFF" strokeWidth="2" />
                <line x1="96" y1="95" x2="104" y2="95" stroke="#FFFFFF" strokeWidth="3" />
                <line x1="72" y1="92" x2="84" y2="92" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <line x1="108" y1="92" x2="120" y2="92" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                {/* Smirk */}
                <path d="M96 115 Q106 120 114 113" stroke="#FFD166" strokeWidth="4" strokeLinecap="round" fill="none" />
              </>
            )}

            {currentMood === 'working' && (
              <>
                {/* Focused Glasses / Eyes */}
                <circle cx="82" cy="95" r="9" fill="none" stroke="#FFD166" strokeWidth="3" />
                <circle cx="118" cy="95" r="9" fill="none" stroke="#FFD166" strokeWidth="3" />
                <line x1="91" y1="95" x2="109" y2="95" stroke="#FFD166" strokeWidth="3" />
                <circle cx="82" cy="95" r="4" fill="#06D6A0" />
                <circle cx="118" cy="95" r="4" fill="#06D6A0" />
                {/* Determinated Small Smile */}
                <line x1="92" y1="116" x2="108" y2="116" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
              </>
            )}

            {currentMood === 'rocket' && (
              <>
                {/* Amazed Wide Eyes */}
                <circle cx="82" cy="94" r="11" fill="#06D6A0" />
                <circle cx="118" cy="94" r="11" fill="#06D6A0" />
                <circle cx="82" cy="94" r="5" fill="#181A2A" />
                <circle cx="118" cy="94" r="5" fill="#181A2A" />
                <circle cx="80" cy="92" r="2.5" fill="#FFFFFF" />
                <circle cx="116" cy="92" r="2.5" fill="#FFFFFF" />
                {/* Surprised Cute Mouth */}
                <circle cx="100" cy="116" r="5" fill="#FFD166" />
              </>
            )}

            {/* Belly Badge Button */}
            <circle cx="100" cy="140" r="8" fill="#FFD166" stroke="#181A2A" strokeWidth="3" />
            <polygon points="100,135 102,139 106,140 103,143 104,147 100,145 96,147 97,143 94,140 98,139" fill="#181A2A" />

            {/* Left Arm / Hand */}
            {currentMood === 'waving' ? (
              <motion.g
                animate={{ rotate: [-20, 25, -20] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                style={{ transformOrigin: '48px 120px' }}
              >
                <path d="M48 120 Q20 100 24 80" stroke="#181A2A" strokeWidth="6" strokeLinecap="round" fill="none" />
                <circle cx="24" cy="78" r="11" fill="#FF6B4A" stroke="#181A2A" strokeWidth="4" />
                <circle cx="22" cy="76" r="3" fill="#FFFFFF" />
              </motion.g>
            ) : currentMood === 'working' ? (
              <g>
                <path d="M48 125 Q35 140 60 148" stroke="#181A2A" strokeWidth="6" strokeLinecap="round" fill="none" />
                <circle cx="60" cy="148" r="8" fill="#FF6B4A" stroke="#181A2A" strokeWidth="3" />
              </g>
            ) : (
              <g>
                <path d="M48 125 Q28 135 32 150" stroke="#181A2A" strokeWidth="6" strokeLinecap="round" fill="none" />
                <circle cx="32" cy="150" r="9" fill="#FF6B4A" stroke="#181A2A" strokeWidth="4" />
              </g>
            )}

            {/* Right Arm / Hand & Prop */}
            {currentMood === 'rocket' ? (
              <g>
                {/* Arm holding rocket */}
                <path d="M152 125 Q170 120 165 105" stroke="#181A2A" strokeWidth="6" strokeLinecap="round" fill="none" />
                {/* Mini Vector Rocket */}
                <g transform="translate(155, 75) rotate(25)">
                  {/* Rocket Body */}
                  <path d="M15 0 Q25 15 25 35 L5 35 Q5 15 15 0 Z" fill="#FF6B4A" stroke="#181A2A" strokeWidth="3" />
                  {/* Rocket Window */}
                  <circle cx="15" cy="20" r="5" fill="#FFD166" stroke="#181A2A" strokeWidth="2" />
                  {/* Rocket Fins */}
                  <polygon points="5,28 0,38 7,35" fill="#8338EC" stroke="#181A2A" strokeWidth="2" />
                  <polygon points="25,28 30,38 23,35" fill="#8338EC" stroke="#181A2A" strokeWidth="2" />
                  {/* Flame */}
                  <polygon points="10,35 15,46 20,35" fill="#FFD166" />
                </g>
              </g>
            ) : currentMood === 'working' ? (
              <g>
                <path d="M152 125 Q165 140 140 148" stroke="#181A2A" strokeWidth="6" strokeLinecap="round" fill="none" />
                <circle cx="140" cy="148" r="8" fill="#FF6B4A" stroke="#181A2A" strokeWidth="3" />
                {/* Mini Laptop */}
                <rect x="75" y="142" width="50" height="28" rx="4" fill="#E2E8F0" stroke="#181A2A" strokeWidth="3" />
                <polygon points="70,168 130,168 126,162 74,162" fill="#94A3B8" stroke="#181A2A" strokeWidth="2" />
                <circle cx="100" cy="154" r="3" fill="#3A86FF" />
              </g>
            ) : currentMood === 'cool' ? (
              <g>
                <path d="M152 125 Q175 110 168 90" stroke="#181A2A" strokeWidth="6" strokeLinecap="round" fill="none" />
                {/* Peace Sign Hand */}
                <circle cx="168" cy="88" r="10" fill="#FF6B4A" stroke="#181A2A" strokeWidth="4" />
                <line x1="168" y1="80" x2="164" y2="68" stroke="#181A2A" strokeWidth="4" strokeLinecap="round" />
                <line x1="172" y1="80" x2="176" y2="70" stroke="#181A2A" strokeWidth="4" strokeLinecap="round" />
              </g>
            ) : (
              <g>
                <path d="M152 125 Q172 135 168 150" stroke="#181A2A" strokeWidth="6" strokeLinecap="round" fill="none" />
                <circle cx="168" cy="150" r="9" fill="#FF6B4A" stroke="#181A2A" strokeWidth="4" />
              </g>
            )}

            {/* Little Feet */}
            <rect x="70" y="155" width="22" height="20" rx="10" fill="#FF6B4A" stroke="#181A2A" strokeWidth="5" />
            <rect x="108" y="155" width="22" height="20" rx="10" fill="#FF6B4A" stroke="#181A2A" strokeWidth="5" />
          </motion.g>
        </svg>
      </motion.div>

      {/* Hint Badge below Mascot */}
      {interactive && (
        <span className="mt-1 text-[11px] font-bold text-neutral-600 bg-white/90 px-2.5 py-0.5 rounded-full border border-neutral-300 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          Click để đổi biểu cảm ✨
        </span>
      )}
    </div>
  );
};
