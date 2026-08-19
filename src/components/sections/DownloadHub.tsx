import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  Sparkles,
  ShieldCheck,
  Download,
  AlertCircle,
  Wrench,
  Terminal,
  Zap,
  Gamepad2,
  Layers,
  Package,
  Rocket,
  PlusCircle,
} from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { APPS_DATA } from '../../data/apps';
import { AppItem, AppCategory } from '../../types/app';
import { AppCard } from './AppCard';
import { AppDetailModal } from './AppDetailModal';
import { SmartScreenGuideModal } from './SmartScreenGuideModal';
import { soundFx } from '../../utils/sound';

export const DownloadHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);
  const [showSecurityGuide, setShowSecurityGuide] = useState(false);

  const categories: { id: AppCategory; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'All', label: 'Tất cả', icon: Layers },
    { id: 'Utility', label: 'Tiện ích', icon: Wrench },
    { id: 'DevTools', label: 'Dev Tools', icon: Terminal },
    { id: 'Automation', label: 'Tự động hóa', icon: Zap },
    { id: 'Games', label: 'Trò chơi', icon: Gamepad2 },
  ];

  // Filter and search logic
  const filteredApps = useMemo(() => {
    return APPS_DATA.filter((app) => {
      const matchCategory = selectedCategory === 'All' || app.category === selectedCategory;
      const matchQuery =
        searchQuery.trim() === '' ||
        app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category: AppCategory) => {
    soundFx.playPop();
    setSelectedCategory(category);
  };

  const hasApps = APPS_DATA.length > 0;

  return (
    <section id="downloads" className="py-20 md:py-28 relative z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dopamine-coral/15 border border-dopamine-coral/30 text-dopamine-coral text-xs sm:text-sm font-extrabold mb-4 select-none">
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Kho Tải Phần Mềm Windows (.EXE)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dopamine-dark tracking-tight mb-4">
            Gian Hàng Ứng Dụng
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 font-medium">
            Tất cả phần mềm đều không cần cài đặt rườm rà.
          </p>
        </div>

        {/* If apps exist: Render Search Bar & Filters */}
        {hasApps ? (
          <>
            <div className="bg-white border-2 border-dopamine-dark rounded-3xl pop-shadow p-4 sm:p-5 mb-10">
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">

                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm tên phần mềm, từ khóa (macro, color, ram, code)..."
                    className="w-full pl-11 pr-10 py-3 rounded-2xl bg-neutral-50 border-2 border-neutral-200 focus:border-dopamine-blue focus:bg-white focus:outline-none text-sm font-semibold text-dopamine-dark transition-all placeholder:text-neutral-400"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => {
                        soundFx.playPop();
                        setSearchQuery('');
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-neutral-200 text-neutral-400"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    const count =
                      cat.id === 'All'
                        ? APPS_DATA.length
                        : APPS_DATA.filter((a) => a.category === cat.id).length;

                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap border-2 transition-all flex items-center gap-1.5 shrink-0 ${isSelected
                          ? 'bg-dopamine-dark text-white border-dopamine-dark shadow-sm'
                          : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-200/60'
                          }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{cat.label}</span>
                        <span
                          className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${isSelected
                            ? 'bg-dopamine-yellow text-dopamine-dark'
                            : 'bg-neutral-200 text-neutral-600'
                            }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

              </div>
            </div>

            {/* Apps Grid */}
            {filteredApps.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                <AnimatePresence>
                  {filteredApps.map((app) => (
                    <AppCard
                      key={app.id}
                      app={app}
                      onViewDetails={(a) => setSelectedApp(a)}
                      onOpenSecurityGuide={() => setShowSecurityGuide(true)}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* Empty Filter/Search Result */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center bg-white border-2 border-dashed border-dopamine-dark/30 rounded-3xl my-8 max-w-lg mx-auto"
              >
                <div className="w-16 h-16 rounded-2xl bg-neutral-100 border-2 border-neutral-300 flex items-center justify-center mx-auto mb-4 text-neutral-400">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-dopamine-dark mb-2">
                  Không tìm thấy phần mềm phù hợp
                </h3>
                <p className="text-neutral-500 text-sm font-medium mb-6">
                  Không có ứng dụng nào khớp với từ khóa "{searchQuery}". Hãy thử tìm bằng từ khóa khác hoặc xóa bộ lọc nhé!
                </p>
                <button
                  onClick={() => {
                    soundFx.playPop();
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-dopamine-blue text-white font-bold text-sm border-2 border-dopamine-dark pop-shadow"
                >
                  Xem tất cả phần mềm
                </button>
              </motion.div>
            )}
          </>
        ) : (
          /* Empty Dataset: Coming Soon State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 sm:p-12 text-center bg-white border-3 border-dopamine-dark rounded-3xl pop-shadow-xl max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 rounded-3xl bg-dopamine-sky border-2 border-dopamine-dark pop-shadow flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-10 h-10 text-dopamine-coral animate-bounce" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dopamine-yellow/30 border border-dopamine-yellow text-amber-900 text-xs font-black mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Đang Chuẩn Bị Phát Hành</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-dopamine-dark mb-3">
              Kho Phần Mềm Đang Chuẩn Bị Ra Mắt!
            </h3>

            <p className="text-neutral-600 text-sm sm:text-base font-medium leading-relaxed max-w-lg mx-auto mb-6">
              Triết đang hoàn thiện và đóng gói các phiên bản phát hành chính thức đầu tiên trên <strong className="text-dopamine-blue">GitHub Releases</strong>. Hãy quay lại sớm để tải những công cụ thú vị nhé!
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://github.com/ngophantriet"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-dopamine-dark hover:bg-neutral-800 text-white font-bold text-sm border-2 border-dopamine-dark pop-shadow transition-transform hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Theo dõi trên GitHub</span>
              </a>

              <a
                href="#contact"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white hover:bg-neutral-50 text-dopamine-dark font-bold text-sm border-2 border-dopamine-dark pop-shadow transition-transform hover:-translate-y-0.5"
              >
                <span>Yêu cầu tính năng / Đặt hàng tool</span>
              </a>
            </div>
          </motion.div>
        )}

        {/* Security / Quality Assurance Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-white border-2 border-dopamine-dark rounded-3xl pop-shadow flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-dopamine-mint/20 border-2 border-dopamine-dark flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8 text-emerald-600 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="text-lg font-black text-dopamine-dark">
                Tại sao bạn có thể hoàn toàn an tâm khi tải file?
              </h4>
              <p className="text-neutral-600 text-sm font-medium mt-0.5">
                Mỗi bản build .exe đều được biên dịch từ mã nguồn sạch, công khai mã băm SHA-256 và lưu trữ trực tiếp trên GitHub Releases.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              setShowSecurityGuide(true);
            }}
            className="px-4 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 border-2 border-dopamine-dark font-bold text-xs sm:text-sm text-dopamine-dark shrink-0 flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4 text-dopamine-coral stroke-[2.5]" />
            <span>Hướng dẫn mở file .exe</span>
          </button>
        </div>

      </div>

      {/* App Detail Modal */}
      <AppDetailModal
        app={selectedApp}
        onClose={() => setSelectedApp(null)}
        onOpenSecurityGuide={() => {
          setSelectedApp(null);
          setShowSecurityGuide(true);
        }}
      />

      {/* SmartScreen Guide Modal */}
      <SmartScreenGuideModal
        isOpen={showSecurityGuide}
        onClose={() => setShowSecurityGuide(false)}
      />
    </section>
  );
};
