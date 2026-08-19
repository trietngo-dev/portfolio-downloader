import React from 'react';
import { FloatingBadge, StarDoodle, SparkleDoodle, CloudDoodle, CodeTagDoodle, ExeFileBadge } from './VectorDoodles';

export const BackgroundCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Playful Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Floating Decorative Vector Badges scattered */}
      <FloatingBadge delay={0.2} duration={5} yOffset={14} className="top-24 left-[4%] hidden lg:block">
        <StarDoodle size={38} color="#FFD166" />
      </FloatingBadge>

      <FloatingBadge delay={1.5} duration={6} yOffset={18} className="top-36 right-[6%] hidden md:block">
        <ExeFileBadge size={48} />
      </FloatingBadge>

      <FloatingBadge delay={0.8} duration={4.5} yOffset={10} className="top-[45%] left-[2%] hidden xl:block">
        <CodeTagDoodle size={42} />
      </FloatingBadge>

      <FloatingBadge delay={2.0} duration={7} yOffset={15} className="top-[60%] right-[3%] hidden lg:block">
        <CloudDoodle size={64} />
      </FloatingBadge>

      <FloatingBadge delay={1.2} duration={5.2} yOffset={12} className="top-[80%] left-[5%] hidden md:block">
        <SparkleDoodle size={32} color="#FF6B4A" />
      </FloatingBadge>

      <FloatingBadge delay={0.5} duration={6.5} yOffset={16} className="top-[88%] right-[8%] hidden xl:block">
        <StarDoodle size={30} color="#06D6A0" />
      </FloatingBadge>

      {/* Soft Dopamine Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-dopamine-yellow/20 rounded-full blur-3xl" />
      <div className="absolute top-[30%] -right-32 w-96 h-96 bg-dopamine-blue/15 rounded-full blur-3xl" />
      <div className="absolute top-[65%] -left-32 w-96 h-96 bg-dopamine-coral/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 right-[20%] w-96 h-96 bg-dopamine-mint/15 rounded-full blur-3xl" />
    </div>
  );
};
