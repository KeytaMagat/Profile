export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  description: string;
}

export interface ProfileData {
  shortened: string;
  name: string;
  name1: string;
  name2: string;
  name3: string;
  title: string;
  bio: string;
  about: {
    story: string[];
  };
  skills: {
    [category: string]: string[];
  };
  experience: Experience[];
  education: Education[];
  projects: Project[];
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  social: {
    github: string;
    linkedin: string;
  };
}

export const profileData: ProfileData = {
  shortened: "GDT",
  name: "Gadiel Dave Tagam",
  name1: "Gadiel",
  name2: "Dave",
  name3: "Tagam",
  title: "Front-end Developer | UI/UX | Designer",
  bio: "Passionate about creating beautiful, functional, and user-centered digital experiences. I combine technical expertise with creative design to build innovative solutions.",
  about: {
    story: [
      "I'm a passionate front-end developer with over 5 years of experience in creating web applications and digital solutions. My journey in technology started during my computer science studies, where I discovered my love for both coding and design.",
      "I specialize in modern front-end technologies including React, Vue.js, and TypeScript, while also having a keen eye for UI/UX design. I believe that great software should not only work flawlessly but also provide an exceptional user experience.",
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community talks. I'm always excited to take on new challenges and collaborate with fellow developers."
    ]
  },
  skills: {
    frontend: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    backend: ["Node.js", "Express.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code", "Linux"],
    design: ["UI/UX Design", "Figma", "Adobe XD", "Photoshop", "Responsive Design"]
  },
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Lead development of enterprise web applications using React and TypeScript. Mentored junior developers and implemented best practices for UI/UX design."
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with design teams to create seamless user experiences."
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Built various web components and gained experience in full-stack development while working in an agile environment."
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      year: "2015 - 2019",
      description: "Focused on software engineering, algorithms, and web development. Graduated with honors."
    },
    {
      degree: "Web Development Bootcamp",
      school: "CodeAcademy Pro",
      year: "2019",
      description: "Intensive 6-month program covering modern web development technologies and best practices."
    }
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/johnsmith/ecommerce-platform"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "Express.js", "Socket.io", "MongoDB"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/johnsmith/task-manager"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts for multiple cities with beautiful data visualizations.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/johnsmith/weather-dashboard"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and optimized performance.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveUrl: "https://johnsmith-portfolio.com",
      githubUrl: "https://github.com/johnsmith/portfolio"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms, file sharing, and user authentication. Built with modern web technologies.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Socket.io", "Node.js", "JWT", "Material-UI"],
      liveUrl: "https://chat-app-demo.com",
      githubUrl: "https://github.com/johnsmith/chat-app"
    },
    {
      title: "Blog CMS",
      description: "A content management system for blogs with rich text editor, category management, and SEO optimization features.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TinyMCE"],
      liveUrl: "https://blog-cms-demo.com",
      githubUrl: "https://github.com/johnsmith/blog-cms"
    }
  ],
  contact: {
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA"
  },
  social: {
    github: "https://github.com/johnsmith",
    linkedin: "https://linkedin.com/in/johnsmith"
  }
};