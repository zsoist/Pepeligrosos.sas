export type Project = {
  title: string
  category: string
  role: string
  summary: string
  note: string
  stack: string[]
  year: string
  image?: string
  imageAlt: string
  liveUrl?: string
  cta: string
  accent: string
  visualLabel: string
}

export const navigationLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#contact', label: 'Contact' },
]

export const heroStats = [
  {
    value: '5+',
    label: 'Years shaping web interfaces',
    detail: 'A solid track record building responsive, accessible websites.',
  },
  {
    value: 'Vue + React',
    label: 'Design-aware frontend delivery',
    detail: 'Comfortable moving from concept to polished implementation.',
  },
  {
    value: 'Colombia',
    label: 'Remote-ready creative partner',
    detail: 'Warm collaboration style with strong attention to detail.',
  },
]

export const heroSignals = [
  'Accessible UI',
  'Motion with restraint',
  'CMS integrations',
  'Responsive web experiences',
  'Design to code execution',
  'Frontend systems',
  'Human-first detail',
  'Visual storytelling',
]

export const featuredProjects: Project[] = [
  {
    title: 'Dicapta',
    category: 'Accessibility platform',
    role: 'Migration + frontend development',
    summary:
      'A multilingual accessibility-focused site where clarity, inclusion and content structure had to work together seamlessly.',
    note: 'Built with accessibility and CMS-connected content as a practical foundation, not an afterthought.',
    stack: ['Vue.js', 'Vue Router', 'CMS integration', 'Accessible UX'],
    year: 'Selected work',
    image: '/images/projects/dicapta.png',
    imageAlt:
      'Homepage screenshot for Dicapta showing accessible communication messaging',
    liveUrl: 'https://dicapta.netlify.app/',
    cta: 'View live site',
    accent: '#77aee8',
    visualLabel: 'Inclusive media experience',
  },
  {
    title: 'Morningstar Indexes',
    category: 'Enterprise finance platform',
    role: 'Large-scale frontend development',
    summary:
      'A substantial web experience where dense information, modular content and brand consistency needed to stay readable and credible.',
    note: 'The challenge was not just shipping pages, but keeping structure, scale and clarity under control.',
    stack: ['Vue.js', 'REST API', 'CMS integration', 'Design collaboration'],
    year: 'Selected work',
    image: '/images/projects/morningstar.png',
    imageAlt:
      'Homepage screenshot for Morningstar Indexes with an enterprise content layout',
    liveUrl: 'https://indexes.morningstar.com/',
    cta: 'View live site',
    accent: '#d06d52',
    visualLabel: 'Large-scale information design',
  },
  {
    title: 'GitHub Explorer',
    category: 'Personal product experiment',
    role: 'Frontend build + API integration',
    summary:
      'A React project that turns repository discovery into a friendlier, more guided interface powered by the GitHub REST API.',
    note: 'Smaller in scope, but useful as proof of product thinking, interface polish and curiosity-driven building.',
    stack: ['React.js', 'React Router', 'GitHub REST API'],
    year: 'Personal build',
    image: '/images/projects/github-explorer.png',
    imageAlt:
      'GitHub Explorer interface showing a dark themed landing page with a call to action',
    liveUrl: 'https://github-explorer-with-react.netlify.app/',
    cta: 'Explore the build',
    accent: '#79a58e',
    visualLabel: 'Open-source discovery flow',
  },
  {
    title: 'Chrome Extension + Site System',
    category: 'Private build',
    role: 'Vue frontend + content system',
    summary:
      'A paired website and Chrome extension build that reflects Pepe’s ability to work across product surfaces and connected frontend experiences.',
    note: 'The original portfolio references this work directly, so the V2 keeps it visible while reserving room for future visuals.',
    stack: ['Vue.js', 'Chrome extensions', 'CMS integration'],
    year: 'Selected build',
    imageAlt: 'Abstract placeholder for a private Chrome extension and website system',
    cta: 'Visuals available on request',
    accent: '#d4a164',
    visualLabel: 'Private system build',
  },
]

export const aboutPillars = [
  {
    kicker: 'Background',
    title: 'Multidisciplinary roots',
    description:
      'Electronics engineering, photography and self-directed experimentation still shape how Pepe solves interface problems.',
  },
  {
    kicker: 'Approach',
    title: 'Detail with purpose',
    description:
      'Type, spacing, motion, responsiveness and semantics are treated as one coordinated experience.',
  },
  {
    kicker: 'Values',
    title: 'Usability stays visible',
    description:
      'The work aims to feel polished without ever becoming confusing, noisy or inaccessible.',
  },
]

export const capabilities = [
  {
    kicker: 'Build',
    note: 'From concept to live',
    title: 'Creative frontend development',
    description:
      'Production-ready interfaces that feel refined, responsive and visually intentional across devices.',
    points: [
      'Semantic structure and reusable UI patterns',
      'Responsive layouts with polish on mobile and desktop',
      'Design-sensitive implementation decisions',
    ],
  },
  {
    kicker: 'Motion',
    note: 'Guides the eye',
    title: 'Motion and interaction',
    description:
      'Animation used as atmosphere and hierarchy, not as noise. Smooth enough to feel premium, restrained enough to stay readable.',
    points: [
      'Scroll pacing, staggered reveals and hover behavior',
      'Microinteractions that reinforce hierarchy',
      'Reduced-motion aware implementation',
    ],
  },
  {
    kicker: 'Translate',
    note: 'Faithful execution',
    title: 'Design-to-code delivery',
    description:
      'Strong translation from visual direction into maintainable frontend systems without flattening the original idea.',
    points: [
      'Thoughtful component architecture',
      'Typography, spacing and rhythm carried into code',
      'Clean implementation that stays easy to evolve',
    ],
  },
  {
    kicker: 'Support',
    note: 'Content-ready',
    title: 'CMS and API integrations',
    description:
      'Comfortable working on sites that depend on dynamic content, external data and scalable publishing workflows.',
    points: [
      'CMS-connected pages and reusable content patterns',
      'REST API powered frontend experiences',
      'Frontend handling for evolving content needs',
    ],
  },
  {
    kicker: 'Access',
    note: 'Baseline quality',
    title: 'Accessible UI and usability',
    description:
      'Accessibility is treated as part of interface quality, alongside legibility, contrast, structure and behavior.',
    points: [
      'Keyboard-aware interactions',
      'Readable hierarchy and robust contrast choices',
      'User-friendly decisions that reduce friction',
    ],
  },
  {
    kicker: 'Ship',
    note: 'Performance-conscious',
    title: 'Modern delivery standards',
    description:
      'Motion, media and layout choices are made with maintainability and performance in mind, not just visual impact.',
    points: [
      'Lighthouse-conscious implementation',
      'Scalable structure for future content updates',
      'Deploy-ready codebase with clear ownership',
    ],
  },
]

export const collaborationFocus = [
  'Frontend roles',
  'Freelance projects',
  'Agencies',
  'Product teams',
  'Small businesses',
  'Design-minded redesigns',
]

export const trustPoints = [
  {
    kicker: 'Experience',
    title: 'More than five years of web experience',
    description:
      'The original portfolio already signals this. V2 reframes it with stronger hierarchy and clearer confidence.',
  },
  {
    kicker: 'Location',
    title: 'Based in Colombia, built for remote collaboration',
    description:
      'The portfolio keeps that local identity while positioning Pepe as a polished partner for international work.',
  },
  {
    kicker: 'Craft',
    title: 'Frontend with visual literacy',
    description:
      'A recurring strength across the projects is that implementation decisions carry taste, not just technical completion.',
  },
  {
    kicker: 'Focus',
    title: 'Accessible and user-friendly by default',
    description:
      'Pepe’s personality is not erased here. It is elevated into a more premium, recruiter-friendly presentation.',
  },
]

export const contactLinks = [
  {
    label: 'Email',
    value: 'pepe.lancheros@gmail.com',
    href: 'mailto:pepe.lancheros@gmail.com',
    external: false,
  },
  {
    label: 'GitHub',
    value: 'pepelancheros',
    href: 'https://github.com/pepelancheros',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Sebastian Lancheros',
    href: 'https://www.linkedin.com/in/sebastian-lancheros/',
    external: true,
  },
  {
    label: 'Instagram',
    value: '@pepeligroso_',
    href: 'https://www.instagram.com/pepeligroso_/',
    external: true,
  },
]
