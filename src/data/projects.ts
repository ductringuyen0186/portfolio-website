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
    id: "task-queue",
    title: "Distributed Task Queue",
    description: "Go + gRPC microservice handling async jobs with Redis & Kubernetes.",
    longDescription: "A high-performance distributed task queue system built with Go and gRPC. Features include job scheduling, retry mechanisms, dead letter queues, and horizontal scaling with Kubernetes. Uses Redis for job persistence and provides a web dashboard for monitoring.",
    technologies: ["Go", "gRPC", "Redis", "Kubernetes", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/task-queue",
    liveUrl: "https://task-queue-demo.example.com",
    imageUrl: "/images/task-queue.png",
    featured: true,
    category: "backend",
    status: "completed",
    startDate: "2024-01-15",
    endDate: "2024-03-20",
    highlights: [
      "Handles 10,000+ jobs per second",
      "99.9% uptime with automatic failover",
      "Real-time monitoring dashboard",
      "Kubernetes-native deployment"
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
    featured: true,
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
    id: "e-commerce-api",
    title: "E-Commerce Microservices API",
    description: "Scalable e-commerce backend with microservices architecture using Go and Docker.",
    longDescription: "A comprehensive e-commerce platform built with microservices architecture. Features user management, product catalog, order processing, payment integration, and inventory management. Each service is containerized and can be deployed independently.",
    technologies: ["Go", "Docker", "PostgreSQL", "Redis", "RabbitMQ", "JWT", "Stripe API"],
    githubUrl: "https://github.com/ductringuyen0186/ecommerce-microservices",
    imageUrl: "/images/ecommerce-api.png",
    featured: false,
    category: "backend",
    status: "completed",
    startDate: "2023-08-01",
    endDate: "2023-11-30",
    highlights: [
      "Microservices architecture",
      "Event-driven communication",
      "Payment processing integration",
      "Scalable inventory management"
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
