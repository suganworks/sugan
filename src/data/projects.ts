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
    desc: 'Developed a platform for analytical skill-building, featuring a library of 50+ categorized problems with advanced filtering capabilities. Implemented secure user authentication and database integration using Supabase to efficiently manage user progress and problem data.',
    tech: ['Vite', 'ReactJS', 'REST API', 'Tailwind CSS', 'Supabase'],
    repo: 'https://github.com/suganworks/Mavericks',
    featured: true,
    metrics: '50+ categorized problems · Secure authentication · Progress tracking'
  },
  {
    title: 'E-Commerce Website',
    desc: 'Built a full-stack e-commerce platform from the ground up, managing over 100 unique product listings and processing customer orders. Engineered core functionalities including user authentication, shopping cart management, and full CRUD operations on the PostgreSQL database.',
    tech: ['Angular', 'Spring Boot', 'Thymeleaf', 'PostgreSQL'],
    repo: 'https://github.com/suganworks/ecom-website',
    featured: true,
    metrics: '100+ product listings · Full CRUD operations · Order processing'
  },
  {
    title: '3D Viewer (Java Swing)',
    desc: 'Applied complex mathematical concepts, including 3D matrix transformations and Z-buffering, to algorithmically render and visualize 3D models from scratch. Engineered interactive user controls for model rotation, zoom, and toggling between wireframe and solid modes.',
    tech: ['Java', 'Swing', '3D Math', 'Z-buffering'],
    repo: 'https://github.com/suganworks/3d-viewer',
    featured: true,
    metrics: '3D matrix transformations · Interactive controls · Wireframe/solid modes'
  }
];
