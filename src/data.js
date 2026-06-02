export const personalInfo = {
  name: "Arsalan Alam",
  firstName: "Arsalan",
  lastName: "Alam",
  title: "Full Stack Developer",
  tagline: "I build things for the web.",
  subtitle: "Crafting scalable, high-performance applications from Vadodara, India.",
  bio: [
    "I'm Arsalan Alam, a Full Stack Developer passionate about crafting scalable, high-performance web applications that solve real-world problems.",
    "I thrive at the intersection of clean code and intuitive design — turning complex ideas into seamless digital experiences, one commit at a time."
  ],
  location: "Vadodara, India",
  email: "arsalanalam184@gmail.com",
  resumeUrl: "/resume.pdf",
  availability: "Open to full-time roles",
  social: {
    github: "https://github.com/arsalan-alam006",
    linkedin: "https://www.linkedin.com/in/arsalan-alam006/"
  }
};

export const skills = [
  { name: "React.js",          level: 88, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "Frontend" },
  { name: "Tailwind CSS",      level: 85, category: "Frontend" },
  { name: "HTML5 / CSS3",      level: 92, category: "Frontend" },
  { name: "Node.js",           level: 85, category: "Backend"  },
  { name: "Express.js",        level: 83, category: "Backend"  },
  { name: "REST API Design",   level: 86, category: "Backend"  },
  { name: "MongoDB",           level: 82, category: "Backend"  },
  { name: "JWT / bcrypt",      level: 80, category: "Backend"  },
  { name: "Git / GitHub",      level: 88, category: "Tools"    },
  { name: "Postman",           level: 82, category: "Tools"    },
  { name: "WebSockets",        level: 72, category: "Tools"    },
  { name: "OpenAI / LLM APIs", level: 75, category: "AI"       },
  { name: "MCP Architecture",  level: 70, category: "AI"       },
  { name: "Prompt Engineering",level: 73, category: "AI"       },
];

export const projects = [
  {
    id: 1,
    title: "EMS",
    fullTitle: "Employee Management System",
    category: "Full Stack Web App",
    description: "A complete Employee Management System with full CRUD operations, role-based authentication & authorization, and a real-time dashboard UI. RESTful Node.js/Express backend with MongoDB.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    color: "#1a6aff",
    colorDark: "#0a3a8c",
    github: "https://github.com/arsalan-alam006",
    live: "#",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    title: "WanderLust",
    fullTitle: "Travel & Booking Platform",
    category: "Full Stack Web App",
    description: "A full-featured travel listing platform. Supports Passport.js auth, Cloudinary image uploads, interactive Mapbox maps, session management, and server-side rendering with EJS.",
    tech: ["Node.js", "Express", "MongoDB", "Passport.js", "Cloudinary", "Mapbox", "EJS"],
    color: "#00c896",
    colorDark: "#005e45",
    github: "https://github.com/arsalan-alam006",
    live: "#",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "MCP Assistant",
    fullTitle: "AI Voice Assistant",
    category: "AI Application",
    description: "An AI-powered voice assistant on the Model Context Protocol. Integrates LLMs via OpenAI API with real-time WebSocket communication, speech-to-text, and text-to-speech.",
    tech: ["React.js", "Node.js", "OpenAI API", "MCP", "WebSockets", "Tailwind CSS"],
    color: "#a259ff",
    colorDark: "#4c1a8c",
    github: "https://github.com/arsalan-alam006",
    live: "#",
    featured: true,
    year: "2025",
  },
];

export const stats = [
  { value: "3+", label: "Projects Shipped" },
  { value: "5+", label: "Tech Stacks" },
  { value: "1", label: "AI App Built" },
  { value: "∞", label: "Lines of Code" },
];
