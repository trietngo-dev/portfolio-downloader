import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import { motion } from 'framer-motion';

export const SoundToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsMuted(soundFx.getIsMuted());
  }, []);

  const handleToggle = () => {
    const newMuted = soundFx.toggleMute();
    setIsMuted(newMuted);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={handleToggle}
      className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-dopamine-dark bg-white font-bold text-xs pop-shadow transition-colors ${
        isMuted ? 'text-neutral-500 bg-neutral-100' : 'text-dopamine-dark bg-dopamine-yellow/20'
      } ${className}`}
      title={isMuted ? 'Bật âm thanh hiệu ứng (Cute Sound FX)' : 'Tắt âm thanh'}
    >
      {isMuted ? (
        <>
          <VolumeX className="w-4 h-4 text-neutral-500" />
          <span className="hidden sm:inline">Âm thanh: Tắt</span>
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4 text-dopamine-coral animate-pulse" />
          <span className="hidden sm:inline">Âm thanh: Bật</span>
          <span className="w-2 h-2 rounded-full bg-dopamine-mint animate-ping" />
        </>
      )}
    </motion.button>
  );
};
