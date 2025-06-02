
export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  sourceUrl?: string;
  technologies: string[];
  category: string;
  featured: boolean;
  details?: {
    problem?: string;
    solution?: string;
    features?: string[];
    challenges?: string[];
    lessons?: string;
  };
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Pet Adoption Platform",
    description: "Developed using Django REST and JWT authentication to streamline pet adoption processes.",
    image: "/placeholder.svg",
    demoUrl: "https://example.com/pet-adoption",
    sourceUrl: "https://github.com/username/pet-adoption",
    technologies: ["Python", "Django", "REST API", "JWT", "PostgreSQL"],
    category: "Web Application",
    featured: true,
    details: {
      problem: "Traditional pet adoption processes are often cumbersome and inefficient, making it difficult for potential pet parents to find and adopt pets.",
      solution: "A centralized platform that connects shelters with potential adopters, streamlining the entire adoption process from browsing to approval.",
      features: [
        "Comprehensive pet profiles with details and photos",
        "User authentication and personalized dashboards",
        "Advanced search and filtering system",
        "Application submission and tracking",
        "Messaging system between shelters and adopters"
      ],
      challenges: [
        "Implementing secure user authentication",
        "Creating an efficient search algorithm",
        "Designing a responsive UI for all devices"
      ],
      lessons: "This project improved my understanding of full-stack development, especially user authentication flows and complex database relationships. It also taught me the importance of user experience design in creating successful platforms."
    }
  },
  {
    id: 2,
    title: "Vaccination Management System",
    description: "Web-based solution tracking vaccination campaigns and dose profiles with multi-user authentication.",
    image: "/placeholder.svg",
    sourceUrl: "https://github.com/username/vaccination-system",
    technologies: ["Django", "Python", "JavaScript", "Bootstrap", "SQLite"],
    category: "Healthcare",
    featured: true,
    details: {
      problem: "Healthcare providers need efficient systems to track and manage vaccination campaigns, especially during mass vaccination efforts.",
      solution: "A comprehensive web application that helps healthcare providers manage vaccination records, schedule appointments, and track inventory.",
      features: [
        "Campaign management and scheduling",
        "Patient registration and history tracking",
        "Dose inventory management",
        "Automated reminder system",
        "Reports and analytics dashboard"
      ],
      challenges: [
        "Ensuring data privacy and security",
        "Creating an intuitive interface for healthcare workers",
        "Implementing complex scheduling algorithms"
      ],
      lessons: "This project taught me about healthcare data management, security requirements in sensitive applications, and the importance of creating intuitive interfaces for specialized users."
    }
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "Modern portfolio website showcasing skills and projects with a blog system.",
    image: "/placeholder.svg",
    demoUrl: "https://example.com",
    sourceUrl: "https://github.com/username/portfolio",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: "Frontend",
    featured: false,
    details: {
      problem: "Need for a professional online presence to showcase skills and projects effectively.",
      solution: "A responsive, modern portfolio website with dark/light mode and dynamic content sections.",
      features: [
        "Responsive design for all devices",
        "Dark/light mode toggle",
        "Dynamic projects showcase",
        "Blog system",
        "Contact form"
      ],
      challenges: [
        "Creating smooth animations and transitions",
        "Implementing a responsive design system",
        "Optimizing performance"
      ],
      lessons: "Enhanced my frontend development skills, particularly with React and Tailwind CSS, and learned techniques for creating performant, accessible web applications."
    }
  }
];

export default projectsData;
