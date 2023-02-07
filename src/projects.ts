import type { Project } from './components/Project.astro';

import underDashboard from './assets/images/project-previews/UNDER-Dashboard.gif';

import bmTitle from './assets/images/project-previews/BM-title.jpg';
import bmTutorial from './assets/images/project-previews/BM-tutorial.jpg';
import bmDamage from './assets/images/project-previews/BM-damage.jpg';

export const projects: Project[] = [
  {
    title: 'Under.io Metric System',
    tags: ['fullstack', 'nodejs', 'typescript', 'react', 'aws'],
    previews: [underDashboard],
    description:
      'At a startup, it is crucial to understand where the buisness is at. That is why I was tasked with building an admin dashboard that displayed important site metrics and allowed easy access of customer data.',
  },
  {
    title: 'Blob Mob',
    tags: ['fullstack', 'nodejs', 'typescript', 'react', 'firebase'],
    previews: [bmTitle, bmTutorial, bmDamage],
    code: 'https://github.com/xxzbuckxx/Blob-Mob',
    demo: 'https://xxzbuckxx.github.io/Blob-Mob/',
    description:
      'A web game I designed with a global leaderboard, an upgrade shop, and account functionality to save progress.',
  },
];
