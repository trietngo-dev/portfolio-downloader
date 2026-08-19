import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, CheckCircle, Info, ShieldCheck, Sparkles } from 'lucide-react';
import { soundFx } from '../../utils/sound';

interface SmartScreenGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SmartScreenGuideModal: React.FC<SmartScreenGuideModalProps> = ({ isOpen, onClose }) => {
  // Lock body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundFx.playPop();
            onClose();
          }}
          className="fixed inset-0 bg-dopamine-dark/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-xl bg-white border-3 border-dopamine-dark rounded-3xl pop-shadow-xl overflow-hidden z-10 max-h-[82vh] flex flex-col shadow-2xl"
        >
          {/* Header */}
          <div className="px-5 py-3.5 bg-dopamine-yellow/30 border-b-2 border-dopamine-dark flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-dopamine-coral border border-dopamine-dark cursor-pointer" onClick={onClose} />
              <span className="w-3.5 h-3.5 rounded-full bg-dopamine-yellow border border-dopamine-dark" />
              <span className="w-3.5 h-3.5 rounded-full bg-dopamine-mint border border-dopamine-dark" />
              <span className="ml-2 font-bold text-xs sm:text-sm text-dopamine-dark flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Hướng dẫn mở file an toàn (Windows SmartScreen)
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

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-5 overflow-y-auto">
            {/* Why message */}
            <div className="p-4 rounded-2xl bg-dopamine-sky/50 border-2 border-dopamine-blue/20 flex items-start gap-3">
              <Info className="w-5 h-5 text-dopamine-blue shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
                <strong className="text-dopamine-dark font-extrabold block mb-1">
                  Tại sao Windows Defender hiện cảnh báo "Unknown Publisher"?
                </strong>
                Vì đây là các phần mềm mã nguồn mở/cá nhân tự phát triển phi lợi nhuận (chưa mua chứng chỉ số EV Code Signing Certificate đắt đỏ hàng năm của Microsoft), Windows sẽ tự động hiển thị màn hình bảo vệ mặc định.
              </div>
            </div>

            <h3 className="font-extrabold text-base text-dopamine-dark">
              Cách chạy ứng dụng chỉ với 2 bước đơn giản:
            </h3>

            {/* Step 1 */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 border-2 border-neutral-200">
              <div className="w-8 h-8 rounded-xl bg-dopamine-coral text-white font-black text-sm flex items-center justify-center shrink-0 border border-dopamine-dark">
                1
              </div>
              <div className="text-xs sm:text-sm text-neutral-700 font-medium">
                Khi cửa sổ xanh dương <strong className="text-dopamine-dark">"Windows protected your PC"</strong> hiện lên, hãy nhấp vào dòng chữ <strong className="text-dopamine-blue underline">"More info"</strong> (Thông tin thêm).
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 border-2 border-neutral-200">
              <div className="w-8 h-8 rounded-xl bg-dopamine-mint text-dopamine-dark font-black text-sm flex items-center justify-center shrink-0 border border-dopamine-dark">
                2
              </div>
              <div className="text-xs sm:text-sm text-neutral-700 font-medium">
                Bấm vào nút <strong className="text-emerald-700 font-bold px-2 py-0.5 rounded bg-emerald-100">"Run anyway"</strong> (Vẫn tiếp tục chạy) để bắt đầu sử dụng phần mềm.
              </div>
            </div>

            {/* Safe guarantee */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs font-semibold text-emerald-800">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Tất cả file đều được kiểm tra mã băm SHA-256 nguyên bản và quét sạch trên VirusTotal.</span>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-neutral-50 border-t-2 border-dopamine-dark flex justify-end shrink-0">
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-dopamine-blue hover:bg-dopamine-blue/90 text-white font-bold text-sm border-2 border-dopamine-dark pop-shadow"
            >
              Đã hiểu, cảm ơn!
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};
