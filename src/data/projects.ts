export interface Project {
  title: string;
  desc: string;
  tech: string[];
  repo?: string;
  featured?: boolean;
  metrics?: string;
}

export const projects: Project[] = [
  {
    title: 'Mavericks Coding Platform',
    desc: 'Coding practice platform with problem categorization, filters, leaderboard, secure auth & progress tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'REST'],
    repo: 'https://github.com/suganworks/mavericks-platform',
    featured: true,
    metrics: '+120 practice problems categorized; real-time ranking'
  },
  {
    title: 'NOVA Hospitality Robot',
    desc: 'AI-powered service robot remotely controlled via web dashboard for maintenance & hygiene tasks.',
    tech: ['Node.js', 'Realtime', 'Dashboard'],
    repo: 'https://github.com/suganworks/nova-robot',
    featured: true,
    metrics: 'Remote task dispatch & telemetry streaming'
  },
  {
    title: 'E‑Commerce Web App',
    desc: 'Full-stack shopping platform: product listing, cart, auth, admin CRUD, order management.',
    tech: ['Angular', 'Spring Boot', 'PostgreSQL'],
  repo: 'https://github.com/suganworks/ecommerce-app',
  featured: true,
  metrics: 'JWT auth · role-based admin · order workflow'
  }
];
