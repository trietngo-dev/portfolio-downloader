import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, HardDrive, ShieldCheck, Check, Sparkles, Terminal, Gamepad2, Palette, Zap, Shield } from 'lucide-react';
import { AppItem } from '../../types/app';
import { soundFx } from '../../utils/sound';
import { triggerDownloadConfetti } from '../../utils/confetti';

interface AppCardProps {
  app: AppItem;
  onViewDetails: (app: AppItem) => void;
  onOpenSecurityGuide: () => void;
}

export const AppCard: React.FC<AppCardProps> = ({ app, onViewDetails, onOpenSecurityGuide }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  // Icon mapping
  const renderIcon = () => {
    const iconProps = { className: 'w-7 h-7 text-white stroke-[2.5]' };
    switch (app.iconType) {
      case 'terminal':
        return <Terminal {...iconProps} />;
      case 'game':
        return <Gamepad2 {...iconProps} />;
      case 'palette':
        return <Palette {...iconProps} />;
      case 'shield':
        return <Shield {...iconProps} />;
      case 'zap':
        return <Zap {...iconProps} />;
      case 'spark':
      default:
        return <Sparkles {...iconProps} />;
    }
  };

  // Color theme mapping
  const colorMap = {
    coral: {
      bg: 'bg-dopamine-coral',
      border: 'border-dopamine-coral',
      badge: 'bg-dopamine-coral/15 text-dopamine-coral',
      btn: 'bg-dopamine-coral hover:bg-dopamine-coral/90 text-white',
    },
    blue: {
      bg: 'bg-dopamine-blue',
      border: 'border-dopamine-blue',
      badge: 'bg-dopamine-blue/15 text-dopamine-blue',
      btn: 'bg-dopamine-blue hover:bg-dopamine-blue/90 text-white',
    },
    yellow: {
      bg: 'bg-dopamine-yellow',
      border: 'border-dopamine-yellow',
      badge: 'bg-dopamine-yellow/25 text-amber-900',
      btn: 'bg-dopamine-yellow hover:bg-amber-400 text-dopamine-dark',
    },
    mint: {
      bg: 'bg-dopamine-mint',
      border: 'border-dopamine-mint',
      badge: 'bg-dopamine-mint/20 text-emerald-800',
      btn: 'bg-dopamine-mint hover:bg-emerald-400 text-dopamine-dark',
    },
    lilac: {
      bg: 'bg-dopamine-lilac',
      border: 'border-dopamine-lilac',
      badge: 'bg-dopamine-lilac/15 text-dopamine-lilac',
      btn: 'bg-dopamine-lilac hover:bg-dopamine-lilac/90 text-white',
    },
    pink: {
      bg: 'bg-dopamine-pink',
      border: 'border-dopamine-pink',
      badge: 'bg-dopamine-pink/15 text-dopamine-pink',
      btn: 'bg-dopamine-pink hover:bg-dopamine-pink/90 text-white',
    },
  };

  const theme = colorMap[app.accentColor] || colorMap.blue;

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundFx.playDownloadCelebrate();
    triggerDownloadConfetti();
    setDownloading(true);

    // Simulate preparation and trigger browser download
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);

      // Create hidden link and click to trigger download
      const a = document.createElement('a');
      a.href = app.downloadUrl;
      a.download = `${app.title.replace(/\s+/g, '_')}_${app.version}.exe`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setTimeout(() => setDownloaded(false), 4000);
    }, 800);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
      className="bg-white border-2 border-dopamine-dark rounded-3xl pop-shadow-hover flex flex-col justify-between overflow-hidden relative group"
    >
      {/* Featured Badge */}
      {app.isFeatured && (
        <div className="absolute top-3 right-4 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-dopamine-yellow border border-dopamine-dark text-[11px] font-black text-dopamine-dark pop-shadow-sm">
            <Sparkles className="w-3 h-3 text-dopamine-dark fill-dopamine-dark" />
            <span>Nổi bật</span>
          </span>
        </div>
      )}

      {/* OS Window Style Top Bar */}
      <div className="px-4 py-2.5 bg-neutral-100/90 border-b-2 border-dopamine-dark flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-dopamine-coral border border-dopamine-dark" />
        <span className="w-3 h-3 rounded-full bg-dopamine-yellow border border-dopamine-dark" />
        <span className="w-3 h-3 rounded-full bg-dopamine-mint border border-dopamine-dark" />
        <span className="text-[11px] font-mono font-bold text-neutral-500 truncate ml-2">
          {app.id}.exe
        </span>
      </div>

      {/* Main Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Header: Icon + Title + Version */}
        <div className="flex items-start gap-4 mb-3">
          <div
            className={`w-14 h-14 rounded-2xl ${theme.bg} border-2 border-dopamine-dark pop-shadow-sm flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform`}
          >
            {renderIcon()}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl font-black text-dopamine-dark tracking-tight truncate">
                {app.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 text-xs font-mono font-bold border border-neutral-300">
                {app.version}
              </span>
              <span className="text-xs font-bold text-neutral-500 flex items-center gap-1">
                <HardDrive className="w-3 h-3" />
                {app.size}
              </span>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-sm text-neutral-600 font-medium leading-relaxed mb-4 line-clamp-2">
          {app.tagline || app.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {app.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Security & OS Info */}
        <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500 font-semibold mb-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenSecurityGuide();
            }}
            className="flex items-center gap-1 text-emerald-700 hover:underline cursor-pointer"
            title="Xem cam kết an toàn & hướng dẫn SmartScreen"
          >
            <ShieldCheck className="w-4 h-4 text-dopamine-mint stroke-[2.5]" />
            <span>Virus-Free (.exe)</span>
          </button>
          <span className="font-mono text-[11px]">{app.os}</span>
        </div>

        {/* Action Buttons: Download + View Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Main Download Button */}
          <button
            onClick={handleDownload}
            onMouseEnter={() => soundFx.playHover()}
            disabled={downloading}
            className={`w-full py-2.5 px-3 rounded-xl font-black text-sm border-2 border-dopamine-dark pop-shadow flex items-center justify-center gap-2 transition-all active:translate-y-0.5 ${
              downloaded
                ? 'bg-dopamine-mint text-dopamine-dark'
                : theme.btn
            }`}
          >
            {downloading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                />
                <span>Đang tải...</span>
              </>
            ) : downloaded ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Đã Tải Xong!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Tải .EXE</span>
              </>
            )}
          </button>

          {/* Details Button */}
          <button
            onClick={() => {
              soundFx.playClick();
              onViewDetails(app);
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="w-full py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm bg-white hover:bg-neutral-50 text-dopamine-dark border-2 border-dopamine-dark pop-shadow flex items-center justify-center gap-1.5 transition-all active:translate-y-0.5"
          >
            <span>Chi tiết</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
