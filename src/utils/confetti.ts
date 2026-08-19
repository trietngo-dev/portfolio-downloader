import confetti from 'canvas-confetti';

export const triggerDownloadConfetti = () => {
  // Blast from the center
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#3A86FF', '#FF6B4A', '#FFD166', '#06D6A0', '#8338EC', '#FF006E'],
  });

  // Secondary firework bursts on sides
  setTimeout(() => {
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#3A86FF', '#FFD166', '#06D6A0'],
    });
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#FF6B4A', '#8338EC', '#FF006E'],
    });
  }, 150);
};

export const triggerStarConfetti = () => {
  confetti({
    particleCount: 30,
    spread: 360,
    ticks: 60,
    origin: { y: 0.5 },
    shapes: ['star'],
    colors: ['#FFD166', '#FF6B4A', '#3A86FF'],
  });
};
