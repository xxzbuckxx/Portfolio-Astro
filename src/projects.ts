import type { ProjectType } from './components/Project.astro';
import type { ProjectHeaderType } from './components/ProjectHeader.astro';

// SlugPath
import slugPathHeader from './assets/images/project-previews/SLUGPATH-Header.jpg';
import slugPathLanding from './assets/images/project-previews/SLUGPATH-Landing.jpg';
import slugPathPlanner from './assets/images/project-previews/SLUGPATH-Planner.jpg';

// CruzHacks
import cruzHacksStatistics from './assets/images/project-previews/CRUZHACKS-Admin-Statistics.jpg';
import cruzHacksApplication from './assets/images/project-previews/CRUZHACKS-Application.jpg';
import cruzHacksHomepage from './assets/images/project-previews/CRUZHACKS-Homepage.jpg';
import cruzHacksSpeakers from './assets/images/project-previews/CRUZHACKS-Speakers.jpg';

// StudentStay
import studentStayHomepage from './assets/images/project-previews/STUDENTSTAY-Homepage.jpg';
import studentStayMap from './assets/images/project-previews/STUDENTSTAY-Map.jpg';
import studentStayMatching from './assets/images/project-previews/STUDENTSTAY-Matching.jpg';
import studentStayProfile from './assets/images/project-previews/STUDENTSTAY-Profile.jpg';

// SlugFit
import slugfitHeader from './assets/images/project-previews/SLUGFIT-Header.jpg';

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
    title: 'SlugPath',
    technologies: ['fullstack', 'nodejs', 'typescript', 'nextjs', 'postgres', 'tailwindcss'],
    previews: [slugPathHeader, slugPathPlanner, slugPathLanding],
    site: 'https://slugpath.com/',
    code: 'https://github.com/SlugPath',
    description:
      "SlugPath is a webapp I am currently developing with other students at UCSC. It's a tool to help students plan their academic careers. I have been active in creating a landing page and refreshing the design of the platform.",
  },
  {
    title: 'CruzHacks 2024',
    technologies: ['fullstack', 'nodejs', 'typescript', 'react', 'firebase', 'tailwindcss'],
    previews: [cruzHacksHomepage, cruzHacksApplication, cruzHacksSpeakers, cruzHacksStatistics],
    site: 'https://cruzhacks.com/',
    description:
      'As lead engineer for CruzHacks in 2024, I was responsible for the development of the landing page and event tooling for the 700+ hackathon applicants. I worked with a team of 5 engineers to reskin the website, create a new registration system, and implement a new admin dashboard and user flow.',
  },
  {
    title: 'StudentStay',
    technologies: [
      'fullstack',
      'nodejs',
      'typescript',
      'tailwindcss',
      'nextjs',
      'mapbox',
      'supabase',
    ],
    previews: [studentStayHomepage, studentStayMap, studentStayMatching, studentStayProfile],
    description:
      'StudentStay is a startup idea I pursued with a buisness partner. Our goal was to help university students with their housing searches. We created a webapp with a zillow-like rental map and a roomate finder preferences page. Although we did not reach our MVP, I learned a lot about the startup process and how to work with a team.',
  },
  {
    title: 'SlugFit Workout App',
    technologies: ['fullstack', 'nodejs', 'typescript', 'React Native', 'supabase'],
    previews: [slugfitHeader],
    code: 'https://github.com/zacktraczyk/SlugFit',
    description:
      'SlugFit is a mobile app I helped build to create, track, and share custom workouts. I created the authentication pages, workout builder, and profile pages. I also handled all repository management including inital React Native scaffolding, Git Flow setup, CI/CD pipelines with Github Actions, and Supabase configuration.',
  },
  // {
  //   title: ''
  // }
  {
    title: 'Flocking Simulation',
    technologies: ['nodejs', 'typescript', 'threejs'],
    previews: [boidDemo, boidDebug, boidFog, boidUi, boidOcean],
    code: 'https://github.com/zacktraczyk/Boid-Simulation',
    site: 'https://zacktraczyk.github.io/Boid-Simulation/',
    description:
      'This flocking simulation was presented at the Digital Scholarship Symposium at University of California on May 25th, 2023. Using a holographic display I implemented Boids, an algorithm that simulates flocking behavior. The project was written in Typescript using Three.js for rendering.',
  },
  {
    title: 'Blob Mob',
    technologies: ['fullstack', 'nodejs', 'typescript', 'react', 'firebase'],
    previews: [bmTitle, bmTutorial, bmDamage],
    code: 'https://github.com/zacktraczyk/Blob-Mob',
    site: 'https://blob-mob.vercel.app/',
    description:
      'Blob Mob is a web game I designed with a global leaderboard, an upgrade shop, and account functionality. The core of the game is made in Typescript while the UI elments are made in React.',
  },
  {
    title: "Ralph's Space Quest",
    technologies: ['GameMaker Studio 2'],
    site: 'https://xxzbuckxx.itch.io/ralphs-space-quest-demo',
    previews: [rsqTitle, rsqLevelSelect, rsqLevel, rsqBoss],
    description:
      '"Ralph\'s Space Quest" is a site 2d-platformer shooter set on an extraterrestrial planet. The game contains a level select, a single site level, and a boss fight. I created the majority of the assets only outsourcing the background art.',
  },
];

const _project_archive: Array<ProjectType | ProjectHeaderType> = [
  {
    title: 'Under.io Metric System',
    technologies: ['fullstack', 'nodejs', 'typescript', 'react', 'aws'],
    previews: [underDashboard],
    description:
      'At a startup, it is crucial to understand where the buisness is at. That is why I was tasked with building an admin dashboard that displayed important site metrics and allowed easy access of customer data.',
  },
  {
    title: 'Sorting Algorithms',
    technologies: ['c', 'bash', 'latex'],
    code: 'https://github.com/zacktraczyk/Sorting-Algorithms',
    previews: [sortingWriteup, sortingWriteupGraph, sortingComparisonGraph],
    description:
      'An implementations of bubble sort, shell sort, quicksort with a stack, and quicksort with a queue. Additionally, a writeup analyzing the produced algorithms was made with LaTeX, a bash script, and GNU Plot.',
  },
  {
    title: 'Lossless File Compression',
    technologies: ['c', 'latex'],
    code: 'https://github.com/zacktraczyk/Huffman-Encoding',
    description:
      'A lossless static file compression program in C using a Huffman tree and a priority queue.',
  },
];

export default projectItems;
