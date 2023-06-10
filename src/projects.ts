import type { ProjectType } from './components/Project.astro';
import type { ProjectHeaderType } from './components/ProjectHeader.astro';

// Under
import underDashboard from './assets/images/project-previews/UNDER-Dashboard.gif';

// Blob Mob
import bmTitle from './assets/images/project-previews/BM-title.jpg';
import bmTutorial from './assets/images/project-previews/BM-tutorial.jpg';
import bmDamage from './assets/images/project-previews/BM-damage.jpg';

// Boid Simulation
import boidDebug from './assets/images/project-previews/BOIDS-Single-Boid-Debug.gif';
import boidFog from './assets/images/project-previews/BOIDS-Fog.gif';
import boidUi from './assets/images/project-previews/BOIDS-UI.jpg';
import boidOcean from './assets/images/project-previews/BOIDS-Ocean.gif';
import boidDemo from './assets/images/project-previews/BOIDS-Holographic-Demo.gif';

// Sorting Algorithms
import sortingWriteup from './assets/images/project-previews/SORTING-writeup.jpg';
import sortingWriteupGraph from './assets/images/project-previews/SORTING-writeup-graph.jpg';
import sortingComparisonGraph from './assets/images/project-previews/SORTING-comparison-graph.jpg';

// Ralph's Space Quest
import rsqTitle from './assets/images/project-previews/RSQ-Title.jpg';
import rsqLevelSelect from './assets/images/project-previews/RSQ-Menu.jpg';
import rsqLevel from './assets/images/project-previews/RSQ-Carrot-Exp.jpg';
import rsqBoss from './assets/images/project-previews/RSQ-Boss-Fight.jpg';

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
    demo: 'https://blob-mob.vercel.app/',
    description:
      'A web game I designed with a global leaderboard, an upgrade shop, and account functionality to save progress.',
  },
  {
    text: 'While working at the Digital Scholar Initative, a maker space at University of California Santa Cruz, I was tasked with creating a display project.',
  },
  {
    title: 'Flocking Simulation',
    tags: ['nodejs', 'typescript', 'threejs'],
    previews: [boidDemo, boidDebug, boidFog, boidUi, boidOcean],
    code: 'https://github.com/xxzbuckxx/Boid-Simulation',
    demo: 'https://xxzbuckxx.github.io/Boid-Simulation/',
    description:
      'Using the 3D visualization tools in the UCSC Science & Engineering DSI I made an interactive visualization. I replicated flocking behavior using Boids, an emerging phenomena and example of complexity theory. I plan to put this simulation in hologram technology we have at the space. I documented my progess as a guide and inspiration to students to pursue similar projects.',
  },
  {
    text: 'I also made some projects during the school year, mostly in C and C++.',
  },
  {
    title: 'Lossless File Compression',
    tags: ['c', 'latex'],
    code: 'https://github.com/xxzbuckxx/Huffman-Encoding',
    description:
      'A lossless static file compression program in C using a Huffman tree and a priority queue. This project was for a C programming lab I took in the spring quarter of my freshman year at UCSC.',
  },
  {
    title: 'Sorting Algorithms',
    tags: ['c', 'bash', 'latex'],
    code: 'https://github.com/xxzbuckxx/Sorting-Algorithms',
    previews: [sortingWriteup, sortingWriteupGraph, sortingComparisonGraph],
    description:
      'An implementations of bubble sort, shell sort, quicksort with a stack, and quicksort with a queue. Additionally, a writeup analyzing the produced algorithms was made with LaTeX, a bash script, and GNU Plot.',
  },
  {
    text: 'I like making video games too. Here is one I am particularly proud of.',
  },
  {
    title: "Ralph's Space Quest",
    tags: ['gm2'],
    demo: 'https://xxzbuckxx.itch.io/ralphs-space-quest-demo',
    previews: [rsqTitle, rsqLevelSelect, rsqLevel, rsqBoss],
    description:
      'A 2d-platformer shooter set on an extraterrestrial planet. Besides some help with a few visual assets, programming, design, and music was done by me.',
  },
];

export default projectItems;
