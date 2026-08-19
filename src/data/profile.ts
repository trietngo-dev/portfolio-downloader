export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    icon: string;
    color: string;
  }[];
}

export const PROFILE_DATA = {
  name: 'Ngô Phan Triết',
  nickname: 'Triết',
  role: 'Software Developer & Creator',
  tagline: 'Lập trình viên đam mê kiến tạo các phần mềm Windows tiện ích, công cụ năng suất & trải nghiệm tương tác sáng tạo.',
  location: 'Việt Nam',
  availableForFreelance: true,
  stats: [
    { label: 'Phần mềm phát hành', value: '10+', color: 'text-dopamine-coral' },
    { label: 'Tổng lượt tải về', value: '25K+', color: 'text-dopamine-blue' },
    { label: 'Mức độ hài lòng', value: '99%', color: 'text-dopamine-mint' },
    { label: 'Dòng code đã viết', value: '200K+', color: 'text-dopamine-lilac' },
  ],
  bio: `Mình là một lập trình viên yêu thích việc biến những ý tưởng thú vị thành các phần mềm Windows (.exe) thực tế, nhỏ gọn và hữu ích. Mình theo đuổi triết lý phần mềm nhẹ, nhanh, không rác (portable) và mang phong cách thiết kế tươi vui, gần gũi với người dùng.`,
  
  skillCategories: [
    {
      title: 'Phát triển Phần mềm Desktop & System',
      skills: [
       { name: 'C# / .NET 8 / WPF', level: 'Chuyên sâu', icon: 'laptop', color: 'bg-dopamine-blue/15 text-dopamine-blue' },
        { name: 'C++ / Win32 API', level: 'Thành thạo', icon: 'zap', color: 'bg-dopamine-coral/15 text-dopamine-coral' },
        { name: 'Rust / Tauri', level: 'Thành thạo', icon: 'code', color: 'bg-dopamine-yellow/25 text-amber-700' },
        { name: 'Python (Scripting & Automation)', level: 'Thành thạo', icon: 'terminal', color: 'bg-dopamine-mint/15 text-emerald-700' },
        { name: 'Electron / Node.js', level: 'Tốt', icon: 'atom', color: 'bg-dopamine-lilac/15 text-dopamine-lilac' },
      ],
    },
    {
      title: 'Phát triển Giao diện Web & UX/UI',
      skills: [
        { name: 'React 18/19 & TypeScript', level: 'Chuyên sâu', icon: 'rocket', color: 'bg-dopamine-blue/15 text-dopamine-blue' },
        { name: 'Tailwind CSS & Animation', level: 'Chuyên sâu', icon: 'palette', color: 'bg-dopamine-mint/15 text-emerald-700' },
        { name: 'Vite & Frontend Tooling', level: 'Thành thạo', icon: 'zap', color: 'bg-dopamine-coral/15 text-dopamine-coral' },
        { name: 'UI / Illustration System', level: 'Thành thạo', icon: 'sparkles', color: 'bg-dopamine-lilac/15 text-dopamine-lilac' },
      ],
    },
    {
      title: 'Công cụ & Quy trình (DevOps / Tools)',
      skills: [
        { name: 'Git & GitHub Actions', level: 'Chuyên sâu', icon: 'git-branch', color: 'bg-neutral-200 text-neutral-800' },
        { name: 'GitHub Releases / CI-CD', level: 'Thành thạo', icon: 'package', color: 'bg-dopamine-blue/15 text-dopamine-blue' },
        { name: 'Vercel Deployment', level: 'Thành thạo', icon: 'triangle', color: 'bg-neutral-200 text-neutral-900' },
        { name: 'SQLite & Local Storage', level: 'Thành thạo', icon: 'database', color: 'bg-dopamine-yellow/25 text-amber-700' },
      ],
    },
  ],

  socials: [
    { name: 'GitHub', url: 'https://github.com/ngophantriet', icon: 'github', color: 'hover:bg-neutral-800 hover:text-white' },
    { name: 'Email', url: 'mailto:contact@ngophantriet.dev', icon: 'mail', color: 'hover:bg-dopamine-coral hover:text-white' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin', color: 'hover:bg-dopamine-blue hover:text-white' },
    { name: 'Discord', url: 'https://discord.com', icon: 'discord', color: 'hover:bg-dopamine-lilac hover:text-white' },
  ],
};
