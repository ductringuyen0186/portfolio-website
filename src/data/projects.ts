export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'backend' | 'fullstack' | 'other';
  status: 'completed' | 'in-progress' | 'archived';
  startDate: string;
  endDate?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "salon-hub-api",
    title: "Salon Hub API",
    description: "Comprehensive salon management API with booking system, staff management, and payment processing.",
    longDescription: "A robust backend API for salon management featuring appointment booking, staff scheduling, customer management, service catalog, and integrated payment processing. Built with modern architecture patterns and comprehensive testing.",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Stripe API", "Jest", "Docker"],
    githubUrl: "https://github.com/ductringuyen0186/salon-hub-api",
    imageUrl: "/images/salon-hub-api.png",
    featured: true,
    category: "backend",
    status: "completed",
    startDate: "2024-06-01",
    endDate: "2024-08-15",
    highlights: [
      "RESTful API with comprehensive endpoints",
      "Integrated payment processing with Stripe",
      "Role-based authentication system",
      "Automated appointment scheduling"
    ]
  },
  {
    id: "salon-hub-ui-v2",
    title: "Salon Hub UI v2",
    description: "Modern React frontend for salon management with intuitive booking interface and admin dashboard.",
    longDescription: "A sleek and responsive frontend application for salon management. Features include customer booking interface, staff dashboard, appointment management, and comprehensive admin panel. Built with React and modern UI/UX principles.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "React Query", "React Router", "Axios"],
    githubUrl: "https://github.com/ductringuyen0186/salon-hub-ui-v2",
    imageUrl: "/images/salon-hub-ui.png",
    featured: true,
    category: "web",
    status: "completed",
    startDate: "2024-08-16",
    endDate: "2024-10-30",
    highlights: [
      "Responsive design for all devices",
      "Real-time appointment updates",
      "Intuitive admin dashboard",
      "Seamless payment integration"
    ]
  },
  {
    id: "portfolio-website",
    title: "React Portfolio Website",
    description: "Modern portfolio website built with React, TypeScript, and Tailwind CSS.",
    longDescription: "A responsive portfolio website showcasing projects with interactive features, GitHub integration, and smooth animations. Built with modern web technologies and optimized for performance.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    githubUrl: "https://github.com/ductringuyen0186/portfolio-website",
    imageUrl: "/images/portfolio.png",
    featured: false,
    category: "web",
    status: "completed",
    startDate: "2024-12-01",
    endDate: "2024-12-15",
    highlights: [
      "Interactive project showcase",
      "GitHub API integration",
      "Responsive design",
      "Smooth animations"
    ]
  },
  {
    id: "mobile-game-bobaface",
    title: "Mobile Game Development",
    description: "Engaging mobile game with physics-based mechanics deployed on iOS and Android platforms.",
    longDescription: "Engineered game mechanics and physics objects for an engaging mobile game experience at Bobaface. Collaborated with artists and UI designers to create visually appealing, user-friendly interfaces. Successfully deployed on both iOS App Store and Google Play Store.",
    technologies: ["Unity", "C#", "iOS", "Android", "Game Physics", "UI/UX Design"],
    demoUrl: "https://portfolioductringuyen.s3.us-west-2.amazonaws.com/brunchface-demo.mp4",
    featured: false,
    category: "mobile",
    status: "completed",
    startDate: "2021-04-01",
    endDate: "2022-05-01",
    highlights: [
      "Physics-based game mechanics",
      "Cross-platform deployment",
      "10% increase in session length",
      "Collaborative UI/UX design"
    ]
  }
];

export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};
