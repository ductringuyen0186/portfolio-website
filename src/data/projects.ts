export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
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
    liveUrl: "https://salon-hub-api.herokuapp.com",
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
    liveUrl: "https://salon-hub-ui.netlify.app",
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
    id: "triton-digital-apis",
    title: "Enterprise REST API Services",
    description: "High-performance REST APIs handling 50,000+ daily transactions at Triton Digital.",
    longDescription: "Developed and maintained enterprise-grade REST API services supporting over 50,000 daily transactions. Reduced response times by 20% and achieved 99.9% uptime through containerized deployments with Kubernetes, OpenShift, and ArgoCD. Reengineered legacy code into Spring Batch framework improving performance by 25% and reducing processing time by 40%. Implemented multi-currency support expanding customer base by 15%.",
    technologies: ["Java", "Spring Boot", "Kotlin", "Kubernetes", "OpenShift", "ArgoCD", "MySQL", "Grafana", "Jenkins"],
    githubUrl: "https://github.com/ductringuyen0186/enterprise-api-services",
    imageUrl: "/images/enterprise-api.png",
    featured: true,
    category: "backend",
    status: "completed",
    startDate: "2022-07-01",
    endDate: "2024-12-01",
    highlights: [
      "50,000+ daily transactions supported",
      "20% response time improvement",
      "99.9% application uptime achieved",
      "25% performance improvement with Spring Batch",
      "40% reduction in processing time",
      "15% customer base expansion with multi-currency support"
    ]
  },
  {
    id: "portfolio-website",
    title: "React Portfolio Website",
    description: "Modern portfolio website built with React, TypeScript, and Tailwind CSS.",
    longDescription: "A responsive portfolio website showcasing projects with interactive features, GitHub integration, and smooth animations. Built with modern web technologies and optimized for performance.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    githubUrl: "https://github.com/ductringuyen0186/portfolio-website",
    liveUrl: "https://ducnguyen.dev",
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
    githubUrl: "https://github.com/ductringuyen0186/mobile-game-project",
    imageUrl: "/images/mobile-game.png",
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
  },
  {
    id: "chat-application",
    title: "Real-time Chat Application",
    description: "WebSocket-based chat app with React frontend and Node.js backend.",
    longDescription: "A real-time chat application supporting multiple rooms, private messaging, file sharing, and user presence indicators. Built with Socket.io for real-time communication and MongoDB for message persistence.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
    githubUrl: "https://github.com/ductringuyen0186/realtime-chat",
    liveUrl: "https://chat-app-demo.example.com",
    imageUrl: "/images/chat-app.png",
    featured: false,
    category: "fullstack",
    status: "completed",
    startDate: "2023-05-01",
    endDate: "2023-07-15",
    highlights: [
      "Real-time messaging",
      "Multiple chat rooms",
      "File sharing capability",
      "User presence indicators"
    ]
  },
  {
    id: "monitoring-dashboard",
    title: "Infrastructure Monitoring Dashboard",
    description: "Custom monitoring solution with Prometheus, Grafana, and Go services.",
    longDescription: "A comprehensive monitoring solution for infrastructure and applications. Collects metrics from various sources, provides alerting capabilities, and displays real-time dashboards. Built with custom Go services for metric collection and processing.",
    technologies: ["Go", "Prometheus", "Grafana", "InfluxDB", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/ductringuyen0186/monitoring-dashboard",
    imageUrl: "/images/monitoring.png",
    featured: false,
    category: "backend",
    status: "in-progress",
    startDate: "2024-10-01",
    highlights: [
      "Custom metric collectors",
      "Real-time alerting",
      "Multi-source data aggregation",
      "Kubernetes integration"
    ]
  },
  {
    id: "mobile-expense-tracker",
    title: "Mobile Expense Tracker",
    description: "React Native app for personal finance management with cloud sync.",
    longDescription: "A mobile application for tracking personal expenses with categories, budgets, and financial insights. Features cloud synchronization, offline support, and detailed analytics. Built with React Native for cross-platform compatibility.",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux", "Chart.js"],
    githubUrl: "https://github.com/ductringuyen0186/expense-tracker-mobile",
    imageUrl: "/images/expense-tracker.png",
    featured: false,
    category: "mobile",
    status: "completed",
    startDate: "2023-02-01",
    endDate: "2023-04-30",
    highlights: [
      "Cross-platform mobile app",
      "Offline-first architecture",
      "Cloud synchronization",
      "Financial analytics"
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
