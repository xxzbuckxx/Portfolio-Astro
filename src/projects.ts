import type { ProjectType } from './components/Project.astro';
import type { ProjectHeaderType } from './components/ProjectHeader.astro';

import underDashboard from './assets/images/project-previews/UNDER-Dashboard.gif';

import bmTitle from './assets/images/project-previews/BM-title.jpg';
import bmTutorial from './assets/images/project-previews/BM-tutorial.jpg';
import bmDamage from './assets/images/project-previews/BM-damage.jpg';

const projectItems: Array<ProjectType | ProjectHeaderType> = [
  {
    text: 'Here are some recent projects I have been working on. Lately I have been focused on learning React.',
  },
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
  {
    text: 'While working at the Digital Scholar Initative, a maker space at University of California Santa Cruz, I was tasked with creating a display project.',
  },
  {
    text: 'I also made some projects during the school year, mostly in C and C++.',
  },
  {
    text: 'I like making video games too. Here is one I am particularly proud of.',
  },
];

export default projectItems;
