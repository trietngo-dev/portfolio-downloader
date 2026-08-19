import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Code2,
  Sparkles,
  Terminal,
  Rocket,
  CheckCircle2,
  Layers,
  MapPin,
  Laptop,
  Zap,
  Code,
  Atom,
  Palette,
  GitBranch,
  Package,
  Triangle,
  Database,
  ShieldCheck,
  Cpu,
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';
import { Mascot } from '../illustrations/Mascot';
import { soundFx } from '../../utils/sound';

export const AboutSection: React.FC = () => {
  const renderSkillIcon = (iconName: string) => {
    const iconClass = "w-4 h-4 stroke-[2.5]";
    switch (iconName) {
      case 'laptop':
        return <Laptop className={`${iconClass} text-dopamine-blue`} />;
      case 'zap':
        return <Zap className={`${iconClass} text-dopamine-coral`} />;
      case 'code':
        return <Code className={`${iconClass} text-amber-600`} />;
      case 'terminal':
        return <Terminal className={`${iconClass} text-emerald-600`} />;
      case 'atom':
        return <Atom className={`${iconClass} text-dopamine-lilac`} />;
      case 'rocket':
        return <Rocket className={`${iconClass} text-dopamine-blue`} />;
      case 'palette':
        return <Palette className={`${iconClass} text-emerald-600`} />;
      case 'sparkles':
        return <Sparkles className={`${iconClass} text-dopamine-lilac`} />;
      case 'git-branch':
        return <GitBranch className={`${iconClass} text-neutral-800`} />;
      case 'package':
        return <Package className={`${iconClass} text-dopamine-blue`} />;
      case 'triangle':
        return <Triangle className={`${iconClass} text-neutral-900 fill-neutral-900`} />;
      case 'database':
        return <Database className={`${iconClass} text-amber-600`} />;
      default:
        return <Code2 className={`${iconClass} text-dopamine-blue`} />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 relative z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dopamine-blue/15 border border-dopamine-blue/30 text-dopamine-blue text-xs sm:text-sm font-extrabold mb-4 select-none">
            <User className="w-4 h-4" />
            <span>Hồ Sơ & Câu Chuyện</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dopamine-dark tracking-tight mb-4">
            Về Tác Giả — Ngô Phan Triết
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 font-medium">
            Một lập trình viên yêu thích việc biến các ý tưởng công nghệ thành các công cụ phần mềm thiết thực và gần gũi.
          </p>
        </div>

        {/* Profile Card & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Personal Story Card */}
          <div className="lg:col-span-7 bg-white border-2 border-dopamine-dark rounded-3xl pop-shadow p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Card Window Top */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b-2 border-neutral-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-dopamine-coral border border-dopamine-dark" />
                  <span className="w-3 h-3 rounded-full bg-dopamine-yellow border border-dopamine-dark" />
                  <span className="w-3 h-3 rounded-full bg-dopamine-mint border border-dopamine-dark" />
                  <span className="text-xs font-mono font-bold text-neutral-500 ml-1">
                    triet_profile.md
                  </span>
                </div>
                <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                  <span>{PROFILE_DATA.location}</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-dopamine-dark mb-4 leading-snug text-dopamine-blue">
                "Code để giải quyết vấn đề thực tế, thiết kế để mang lại niềm vui."
              </h3>

              <p className="text-neutral-700 leading-relaxed font-normal text-sm sm:text-base mb-4">
                {PROFILE_DATA.bio}
              </p>

              <p className="text-neutral-700 leading-relaxed font-normal text-sm sm:text-base mb-6">
                Khi sử dụng máy tính hàng ngày, mình nhận thấy rất nhiều thao tác có thể được tối ưu hóa chỉ bằng một phần mềm nhỏ gọn. Đó là lý do mình phát triển và chia sẻ kho công cụ này miễn phí đến cộng đồng.
              </p>

              {/* Core Principles */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-neutral-400">
                  Triết lý phát triển phần mềm:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm font-bold text-neutral-800">
                    <Zap className="w-4 h-4 text-dopamine-coral shrink-0 stroke-[2.5]" />
                    <span>Chạy ngay (Portable, No Install)</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm font-bold text-neutral-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                    <span>Không rác Registry & Quảng cáo</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm font-bold text-neutral-800">
                    <Cpu className="w-4 h-4 text-dopamine-blue shrink-0 stroke-[2.5]" />
                    <span>Tối ưu RAM & CPU cực thấp</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm font-bold text-neutral-800">
                    <Palette className="w-4 h-4 text-dopamine-lilac shrink-0 stroke-[2.5]" />
                    <span>Giao diện Flat trực quan & vui mắt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t-2 border-neutral-100">
              {PROFILE_DATA.stats.map((stat, i) => (
                <div key={i} className="text-center p-2 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className={`text-xl sm:text-2xl font-black ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-bold text-neutral-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Working Mascot Illustration Card */}
          <div className="lg:col-span-5 bg-dopamine-sky/30 border-2 border-dopamine-dark rounded-3xl pop-shadow p-6 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center">
              <span className="px-3.5 py-1 bg-white border border-dopamine-dark rounded-full text-xs font-black text-dopamine-dark pop-shadow-sm mb-4 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-dopamine-blue stroke-[2.5]" />
                <span>Chế độ làm việc tập trung</span>
              </span>

              {/* Working Mascot */}
              <Mascot
                mood="working"
                speechText="Triết đang viết thêm các tool Windows xịn sò mới!"
                size="lg"
                interactive={true}
              />

              <div className="mt-4 p-4 rounded-2xl bg-white border-2 border-dopamine-dark max-w-xs text-xs sm:text-sm font-bold text-neutral-800 leading-relaxed">
                💡 "Một lập trình viên giỏi không chỉ viết code chạy được, mà còn tạo ra phần mềm người khác thích dùng."
              </div>
            </div>
          </div>

        </div>

        {/* Skills & Tech Stack Section */}
        <div id="skills" className="scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dopamine-lilac/15 border border-dopamine-lilac/30 text-dopamine-lilac text-xs sm:text-sm font-extrabold mb-3 select-none">
              <Layers className="w-4 h-4" />
              <span>Năng Lực Chuyên Môn</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-dopamine-dark">
              Công Nghệ & Kỹ Năng Lập Trình
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROFILE_DATA.skillCategories.map((category, catIdx) => (
              <div
                key={catIdx}
                className="bg-white border-2 border-dopamine-dark rounded-3xl pop-shadow p-6 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-black text-dopamine-dark mb-4 pb-3 border-b-2 border-neutral-100 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-dopamine-blue stroke-[2.5]" />
                    <span>{category.title}</span>
                  </h4>

                  <div className="space-y-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <motion.div
                        key={sIdx}
                        whileHover={{ scale: 1.02, x: 2 }}
                        onMouseEnter={() => soundFx.playHover()}
                        className="flex items-center justify-between p-3 rounded-2xl bg-neutral-50 border border-neutral-200/90 text-xs sm:text-sm"
                      >
                        <div className="flex items-center gap-2.5 font-extrabold text-neutral-800">
                          {renderSkillIcon(skill.icon)}
                          <span>{skill.name}</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-md font-bold text-[11px] ${skill.color}`}>
                          {skill.level}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
