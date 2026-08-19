import React from 'react';
import { motion } from 'framer-motion';

// Star Badge Vector
export const StarDoodle: React.FC<{ size?: number; color?: string; className?: string }> = ({
  size = 32,
  color = '#FFD166',
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block drop-shadow-sm ${className}`}
  >
    <path
      d="M20 2L24.8 14.2L38 15.6L28 24.3L30.9 37.2L20 30.6L9.1 37.2L12 24.3L2 15.6L15.2 14.2L20 2Z"
      fill={color}
      stroke="#181A2A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="18" r="2" fill="#FFFFFF" />
  </svg>
);

// Sparkle Cross Doodle
export const SparkleDoodle: React.FC<{ size?: number; color?: string; className?: string }> = ({
  size = 24,
  color = '#FF6B4A',
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path
      d="M16 0C16 8.83656 23.1634 16 32 16C23.1634 16 16 23.1634 16 32C16 23.1634 8.83656 16 0 16C8.83656 16 16 8.83656 16 0Z"
      fill={color}
      stroke="#181A2A"
      strokeWidth="2.5"
    />
  </svg>
);

// Floppy Disk Retro Doodle (.EXE save file)
export const FloppyDiskDoodle: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <rect x="6" y="6" width="48" height="48" rx="8" fill="#3A86FF" stroke="#181A2A" strokeWidth="4" />
    <path d="M16 6V22H44V6H16Z" fill="#FAFAFD" stroke="#181A2A" strokeWidth="3" />
    <rect x="22" y="10" width="8" height="8" rx="2" fill="#FF6B4A" />
    <rect x="14" y="32" width="32" height="18" rx="4" fill="#FFD166" stroke="#181A2A" strokeWidth="3" />
    <line x1="20" y1="38" x2="40" y2="38" stroke="#181A2A" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="20" y1="44" x2="34" y2="44" stroke="#181A2A" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Windows .EXE File Badge Vector
export const ExeFileBadge: React.FC<{ size?: number; className?: string }> = ({
  size = 54,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Page */}
    <path
      d="M12 10C12 7.79086 13.7909 6 16 6H44L58 20V60C58 62.2091 56.2091 64 54 64H16C13.7909 64 12 62.2091 12 60V10Z"
      fill="#FAFAFD"
      stroke="#181A2A"
      strokeWidth="4"
    />
    {/* Folded Corner */}
    <path d="M44 6V20H58" fill="#FFD166" stroke="#181A2A" strokeWidth="3.5" />
    {/* EXE Tag */}
    <rect x="18" y="32" width="34" height="20" rx="6" fill="#FF6B4A" stroke="#181A2A" strokeWidth="3" />
    <text x="24" y="46" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="12" fill="#FFFFFF">
      .EXE
    </text>
  </svg>
);

// Code Brackets Sticker
export const CodeTagDoodle: React.FC<{ size?: number; className?: string }> = ({
  size = 40,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <rect x="4" y="6" width="42" height="38" rx="10" fill="#8338EC" stroke="#181A2A" strokeWidth="3.5" />
    <path d="M18 18L12 25L18 32" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 18L38 25L32 32" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="27" y1="16" x2="23" y2="34" stroke="#FFD166" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

// Happy Cloud Doodle
export const CloudDoodle: React.FC<{ size?: number; className?: string }> = ({
  size = 60,
  className = '',
}) => (
  <svg
    width={size}
    height={size * 0.6}
    viewBox="0 0 100 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path
      d="M25 50H78C88 50 95 42 95 32C95 23 88 16 80 16C78 9 70 4 60 4C49 4 40 10 37 20C34 18 30 17 26 17C15 17 6 25 6 36C6 44 14 50 25 50Z"
      fill="#E0F2FE"
      stroke="#181A2A"
      strokeWidth="4"
    />
    <circle cx="45" cy="30" r="3" fill="#181A2A" />
    <circle cx="65" cy="30" r="3" fill="#181A2A" />
    <path d="M51 36 Q55 40 59 36" stroke="#181A2A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

// Floating Parallax Wrapper for Badges
export const FloatingBadge: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}> = ({ children, delay = 0, duration = 4, yOffset = 12, className = '' }) => (
  <motion.div
    animate={{
      y: [-yOffset, yOffset, -yOffset],
      rotate: [-3, 3, -3],
    }}
    transition={{
      repeat: Infinity,
      duration,
      delay,
      ease: 'easeInOut',
    }}
    className={`absolute pointer-events-none z-10 select-none ${className}`}
  >
    {children}
  </motion.div>
);
