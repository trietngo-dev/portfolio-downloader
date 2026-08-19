export type AppCategory = 'All' | 'Utility' | 'DevTools' | 'Games' | 'Automation';

export interface AppItem {
  id: string;
  title: string;
  tagline: string;
  version: string;
  releaseDate: string;
  size: string;
  category: AppCategory;
  tags: string[];
  os: string;
  downloadUrl: string;
  githubUrl?: string;
  checksumSha256: string;
  virusTotalScanUrl?: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  systemRequirements: {
    os: string;
    ram: string;
    storage: string;
    architecture: string;
  };
  changelog: {
    version: string;
    date: string;
    notes: string[];
  }[];
  accentColor: 'blue' | 'coral' | 'yellow' | 'mint' | 'lilac' | 'pink';
  iconType: 'spark' | 'terminal' | 'game' | 'shield' | 'zap' | 'palette';
  isFeatured?: boolean;
}
