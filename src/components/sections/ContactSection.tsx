import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare, Sparkles, CheckCircle2, Heart, Coffee } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { soundFx } from '../../utils/sound';
import { triggerStarConfetti } from '../../utils/confetti';
import { PROFILE_DATA } from '../../data/profile';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'feedback',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playDownloadCelebrate();
    triggerStarConfetti();
    setSubmitted(true);
  };

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <GithubIcon className="w-5 h-5 text-neutral-800" />;
      case 'mail':
        return <Mail className="w-5 h-5 text-dopamine-coral stroke-[2.5]" />;
      case 'linkedin':
        return <LinkedinIcon className="w-5 h-5 text-dopamine-blue" />;
      case 'discord':
        return <MessageSquare className="w-5 h-5 text-dopamine-lilac stroke-[2.5]" />;
      default:
        return <MessageSquare className="w-5 h-5 text-neutral-800" />;
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dopamine-coral/15 border border-dopamine-coral/30 text-dopamine-coral text-xs sm:text-sm font-extrabold mb-4 select-none">
            <Mail className="w-4 h-4 stroke-[2.5]" />
            <span>Kết Nối & Hợp Tác</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dopamine-dark tracking-tight mb-4">
            Gửi Lời Nhắn Đến Triết
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 font-medium">
            Bạn có ý tưởng về một phần mềm tiện ích mới, muốn báo lỗi hay chỉ đơn giản là muốn kết nối? Đừng ngần ngại gửi tin nhắn nhé!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-white border-2 border-dopamine-dark rounded-3xl pop-shadow p-6 sm:p-8">
              <h3 className="text-xl font-black text-dopamine-dark mb-3">
                Kênh liên hệ trực tiếp
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-medium mb-6">
                Mình thường phản hồi tin nhắn trong vòng 24 giờ làm việc.
              </p>

              <div className="space-y-3">
                {PROFILE_DATA.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => soundFx.playHover()}
                    onClick={() => soundFx.playClick()}
                    className={`flex items-center justify-between p-3.5 rounded-2xl bg-neutral-50 border-2 border-neutral-200 font-bold text-sm text-neutral-800 transition-all ${social.color}`}
                  >
                    <div className="flex items-center gap-3">
                      {renderSocialIcon(social.icon)}
                      <span>{social.name}</span>
                    </div>
                    <span className="text-xs text-neutral-400">Kết nối &rarr;</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Coffee Box */}
            <div className="p-6 rounded-3xl bg-dopamine-yellow/20 border-2 border-dopamine-dark pop-shadow flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border-2 border-dopamine-dark flex items-center justify-center shrink-0">
                <Coffee className="w-6 h-6 text-amber-700 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-dopamine-dark">
                  Ủng hộ các dự án phần mềm miễn phí
                </h4>
                <p className="text-xs text-neutral-600 font-medium mt-1">
                  Sự đồng hành của bạn là động lực lớn để mình tiếp tục duy trì và cập nhật các công cụ mã nguồn mở!
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white border-2 border-dopamine-dark rounded-3xl pop-shadow p-6 sm:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-dopamine-mint/20 border-2 border-dopamine-dark flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-black text-dopamine-dark mb-2 flex items-center justify-center gap-2">
                  <span>Cảm ơn lời nhắn của bạn!</span>
                  <Sparkles className="w-6 h-6 text-dopamine-yellow" />
                </h3>
                <p className="text-neutral-600 text-sm font-medium max-w-md mx-auto mb-6">
                  Triết đã nhận được thông tin và sẽ phản hồi đến bạn sớm nhất qua email nhé!
                </p>
                <button
                  onClick={() => {
                    soundFx.playPop();
                    setSubmitted(false);
                    setFormData({ name: '', email: '', topic: 'feedback', message: '' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-dopamine-blue text-white font-bold text-sm border-2 border-dopamine-dark pop-shadow"
                >
                  Gửi tin nhắn khác
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-black text-dopamine-dark mb-1 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-dopamine-coral stroke-[2.5]" />
                  <span>Biểu mẫu liên hệ</span>
                </h3>
                <p className="text-xs text-neutral-500 font-medium mb-4">
                  Điền thông tin bên dưới để gửi tin nhắn trực tiếp
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      Họ và tên của bạn
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border-2 border-neutral-200 focus:border-dopamine-blue focus:bg-white focus:outline-none text-sm font-semibold text-dopamine-dark transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      Email liên hệ
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border-2 border-neutral-200 focus:border-dopamine-blue focus:bg-white focus:outline-none text-sm font-semibold text-dopamine-dark transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                    Mục đích liên hệ
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border-2 border-neutral-200 focus:border-dopamine-blue focus:bg-white focus:outline-none text-sm font-semibold text-dopamine-dark transition-all"
                  >
                    <option value="feedback">Góp ý / Yêu cầu thêm tính năng cho phần mềm</option>
                    <option value="bug">Báo lỗi phát sinh khi chạy file .exe</option>
                    <option value="project">Hợp tác dự án phát triển phần mềm</option>
                    <option value="other">Giao lưu & chào hỏi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                    Nội dung tin nhắn
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Chia sẻ ý tưởng hoặc nội dung bạn muốn gửi tới Triết..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border-2 border-neutral-200 focus:border-dopamine-blue focus:bg-white focus:outline-none text-sm font-semibold text-dopamine-dark transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-full py-3 rounded-2xl bg-dopamine-coral hover:bg-dopamine-coral/90 text-white font-black text-base border-2 border-dopamine-dark pop-shadow flex items-center justify-center gap-2 transition-all active:translate-y-0.5"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Gửi Tin Nhắn Ngay</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
