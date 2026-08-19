import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ShieldCheck, CheckCircle2, Copy, Check, Terminal, ExternalLink, Cpu } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { AppItem } from '../../types/app';
import { soundFx } from '../../utils/sound';
import { triggerDownloadConfetti } from '../../utils/confetti';

interface AppDetailModalProps {
  app: AppItem | null;
  onClose: () => void;
  onOpenSecurityGuide: () => void;
}

export const AppDetailModal: React.FC<AppDetailModalProps> = ({ app, onClose, onOpenSecurityGuide }) => {
  const [copiedHash, setCopiedHash] = useState(false);
  const [downloading, setDownloading] = useState(false);

  // Lock body scrolling when modal is open
  useEffect(() => {
    if (app) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [app]);

  if (!app) return null;

  const handleCopyHash = () => {
    soundFx.playPop();
    navigator.clipboard.writeText(app.checksumSha256);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const handleDownload = () => {
    soundFx.playDownloadCelebrate();
    triggerDownloadConfetti();
    setDownloading(true);

    setTimeout(() => {
      setDownloading(false);
      const a = document.createElement('a');
      a.href = app.downloadUrl;
      a.download = `${app.title.replace(/\s+/g, '_')}_${app.version}.exe`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, 600);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundFx.playPop();
            onClose();
          }}
          className="fixed inset-0 bg-dopamine-dark/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-2xl bg-white border-3 border-dopamine-dark rounded-3xl pop-shadow-xl overflow-hidden z-10 max-h-[82vh] flex flex-col shadow-2xl"
        >
          {/* Window Header */}
          <div className="px-5 py-3.5 bg-neutral-100 border-b-2 border-dopamine-dark flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-dopamine-coral border border-dopamine-dark cursor-pointer" onClick={onClose} />
              <span className="w-3.5 h-3.5 rounded-full bg-dopamine-yellow border border-dopamine-dark" />
              <span className="w-3.5 h-3.5 rounded-full bg-dopamine-mint border border-dopamine-dark" />
              <span className="ml-2 font-mono font-bold text-xs sm:text-sm text-neutral-600 truncate">
                {app.id}_details.exe
              </span>
            </div>
            <button
              onClick={() => {
                soundFx.playPop();
                onClose();
              }}
              className="p-1 rounded-lg hover:bg-neutral-200 text-dopamine-dark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">

            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b-2 border-neutral-100">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl font-black text-dopamine-dark tracking-tight">
                    {app.title}
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-lg bg-dopamine-blue/15 text-dopamine-blue font-mono font-bold text-sm border border-dopamine-blue/30">
                    {app.version}
                  </span>
                </div>
                <p className="text-neutral-600 font-medium text-sm sm:text-base mt-1">
                  {app.tagline}
                </p>
              </div>

              {/* Quick Specs */}
              <div className="flex sm:flex-col items-end gap-1.5 text-xs font-bold text-neutral-500 shrink-0">
                <span className="bg-neutral-100 px-2.5 py-1 rounded-md">Dung lượng: {app.size}</span>
                <span className="bg-neutral-100 px-2.5 py-1 rounded-md">Ngày: {app.releaseDate}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-2">
                Giới thiệu phần mềm
              </h4>
              <div className="text-neutral-700 leading-relaxed text-sm sm:text-base font-normal whitespace-pre-line p-4 rounded-2xl bg-neutral-50 border border-neutral-200/90">
                {app.fullDescription}
              </div>
            </div>

            {/* Features Checklist */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-3">
                Tính năng nổi bật
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {app.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-xs sm:text-sm font-semibold text-neutral-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-dopamine-mint shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Requirements */}
            <div className="p-4 rounded-2xl bg-dopamine-sky/40 border-2 border-dopamine-blue/20">
              <h4 className="text-xs font-black uppercase tracking-wider text-dopamine-blue mb-2 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                Yêu cầu hệ thống (System Requirements)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold text-neutral-700">
                <div><strong className="block text-neutral-500">Hệ điều hành:</strong> {app.systemRequirements.os}</div>
                <div><strong className="block text-neutral-500">RAM:</strong> {app.systemRequirements.ram}</div>
                <div><strong className="block text-neutral-500">Ổ cứng:</strong> {app.systemRequirements.storage}</div>
                <div><strong className="block text-neutral-500">Kiến trúc:</strong> {app.systemRequirements.architecture}</div>
              </div>
            </div>

            {/* Security & Checksum */}
            <div className="p-4 rounded-2xl bg-white border-2 border-neutral-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold text-neutral-700 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-dopamine-mint" />
                  Mã băm SHA-256 Checksum (Xác thực file nguyên gốc)
                </span>
                <button
                  onClick={handleCopyHash}
                  className="text-xs font-bold text-dopamine-blue hover:underline flex items-center gap-1"
                >
                  {copiedHash ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-dopamine-mint" />
                      <span className="text-dopamine-mint">Đã copy!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy SHA-256</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-2 bg-neutral-100 rounded-lg font-mono text-[11px] text-neutral-600 truncate select-all">
                {app.checksumSha256}
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-neutral-500 font-medium">
                <span>Cam kết 100% không virus, không adware, không thu thập dữ liệu</span>
                <button
                  onClick={onOpenSecurityGuide}
                  className="text-dopamine-coral font-bold hover:underline"
                >
                  Gặp cảnh báo SmartScreen?
                </button>
              </div>
            </div>

            {/* Changelog */}
            {app.changelog && app.changelog.length > 0 && (
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-2">
                  Lịch sử cập nhật (Changelog)
                </h4>
                <div className="space-y-3">
                  {app.changelog.map((log, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs">
                      <div className="flex items-center justify-between font-bold text-neutral-800 mb-1.5">
                        <span className="text-dopamine-blue font-mono">{log.version}</span>
                        <span className="text-neutral-400">{log.date}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-neutral-600">
                        {log.notes.map((n, idx) => (
                          <li key={idx}>{n}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 bg-neutral-50 border-t-2 border-dopamine-dark flex flex-wrap items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3 ml-auto">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl font-bold text-sm text-neutral-600 hover:bg-neutral-200 transition-colors"
              >
                Đóng
              </button>

              <button
                onClick={handleDownload}
                disabled={downloading}
                className="px-6 py-2.5 rounded-xl bg-dopamine-coral hover:bg-dopamine-coral/90 text-white font-black text-sm border-2 border-dopamine-dark pop-shadow flex items-center gap-2 active:translate-y-0.5 transition-all"
              >
                {downloading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Đang tải xuống...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 stroke-[2.5]" />
                    <span>Tải Về (.exe)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
