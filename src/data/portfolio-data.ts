/**
 * Portfolio Data
 * Single source of truth for all portfolio content
 */

import type {
    PersonalInfo,
    Experience,
    Writing,
    Speaking,
    Project,
    Education,
} from "@/types/portfolio";

// ===== Portfolio Data =====

export const personalInfo: PersonalInfo = {
    name: "Tsvetan Tsaryanski",
    title: "JavaScript FullStack Developer",
    location: { city: "Gabrovo", country: "Bulgaria" },
    website: "ttsaryanski.github.io/Portfolio/",
    email: "ttsaryanski@gmail.com",
    avatar: "./me.jpg",
    bio: "I am developing my career as a Full-Stack Developer, with a strong focus on building modern web applications and continuously expanding my technical skills. I work with JavaScript and TypeScript, React, Next.js, and Node.js, with experience in both frontend and backend development, databases, REST APIs, and authentication. \n Alongside application development, I am expanding my knowledge and practical skills in DevOps and infrastructure. I work with Docker, Terraform, Ansible, and CI/CD, and in my recent projects I have also been working with deployment, monitoring, and observability using tools such as Prometheus and Grafana. I am interested in the entire lifecycle of an application — from development and testing to deployment, monitoring, and maintenance. \n My goal is to continue growing as a Full-Stack Developer while building a strong foundation in DevOps and infrastructure.",
    skills: "JavaScript, TypeScript, React, Next.js, Node.js, Express.js, REST APIs, PostgreSQL, MongoDB, Prisma, Git, GitHub, Docker, Terraform, Ansible, CI/CD, GitHub Actions, Prometheus, Grafana, Linux, AWS, Azure, Google Cloud, Full-Stack Development, DevOps, Problem Solving, Team Collaboration, Communication, Continuous Learning",
};

export const experience: Experience[] = [
    {
        id: "exp-1",
        company: "PolyPress LTD",
        role: "Offset Printing Press Operator",
        location: "Gabrovo, BG",
        startDate: "2010-10",
        endDate: null,
        description: "",
        current: true,
    },
];

export const writing: Writing[] = [
    {
        id: "write-1",
        title: "Building Design Systems That Scale",
        publication: "Smashing Magazine",
        date: "2024-01",
        url: "https://example.com/article-1",
        featured: true,
    },
    {
        id: "write-2",
        title: "The Future of Design Tools: AI and Automation",
        publication: "UX Collective",
        date: "2023-11",
        url: "https://example.com/article-2",
        featured: false,
    },
    {
        id: "write-3",
        title: "Accessibility in Design: Beyond Compliance",
        publication: "A List Apart",
        date: "2023-08",
        url: "https://example.com/article-3",
        featured: false,
    },
    {
        id: "write-4",
        title: "Designing for Mobile: Patterns That Work",
        publication: "CSS-Tricks",
        date: "2023-05",
        url: "https://example.com/article-4",
        featured: false,
    },
    {
        id: "write-5",
        title: "From Developer to Designer: My Journey",
        publication: "Medium",
        date: "2023-02",
        url: "https://example.com/article-5",
        featured: false,
    },
];

export const speaking: Speaking[] = [
    {
        id: "speak-1",
        event: "Design Systems Summit 2024",
        date: "2024-06-15",
        location: "San Francisco, CA",
        talk: "Scaling Design Systems Across Multiple Products",
        description:
            "A deep dive into building and maintaining design systems that work across multiple product teams and platforms.",
        url: "https://example.com/talk-1",
        recordingUrl: "https://example.com/recording-1",
        slidesUrl: "https://example.com/slides-1",
        upcoming: true,
    },
    {
        id: "speak-2",
        event: "UX Week Conference",
        date: "2023-10-20",
        location: "New York, NY",
        talk: "Bridging Design and Development: A Practical Guide",
        description:
            "Practical strategies for improving collaboration between design and engineering teams.",
        url: "https://example.com/talk-2",
        recordingUrl: "https://example.com/recording-2",
        upcoming: false,
    },
    {
        id: "speak-3",
        event: "Figma Config",
        date: "2023-06-21",
        location: "Virtual",
        talk: "Building Accessible Components in Figma",
        description:
            "Learn how to design accessible components from the ground up using Figma.",
        url: "https://example.com/talk-3",
        recordingUrl: "https://example.com/recording-3",
        slidesUrl: "https://example.com/slides-3",
        upcoming: false,
    },
    {
        id: "speak-4",
        event: "Local Design Meetup",
        date: "2023-03-15",
        location: "Austin, TX",
        talk: "Career Growth for Designers: From IC to Leadership",
        description:
            "Tips and insights on transitioning from individual contributor to design leadership roles.",
        upcoming: false,
    },
];

export const projects: Project[] = [
    {
        id: "proj-1",
        name: "PowerTrack",
        description:
            "PowerTrack is a full-stack web application for managing and analyzing electricity bills, with tracking of energy consumption, costs, and statistics over time. The project also demonstrates DevOps practices such as Docker, Terraform, Ansible, CI/CD, Prometheus, and Grafana for automated deployment and monitoring.",
        techStack: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS 4",
            "Prisma",
            "PostgreSQL",
            "Clerk",
            "Recharts",
            "Docker",
            "Terraform",
            "Ansible",
            "Prometheus",
            "Grafana",
        ],
        liveUrl: "https://powertrack.duckdns.org",
        githubUrl:
            "https://github.com/ttsaryanski/electricity-bills-archive-and-analytics",
        status: "active",
        singlePage: true,
        children: [],
    },
    {
        id: "proj-2",
        name: "Forum API",
        description:
            "A RESTful backend application for managing users, categories, topics, and comments, featuring JWT authentication, RBAC, likes, and refresh tokens stored in cookies. It is built with Node.js, Express, and PostgreSQL, and also includes real-time chat using Socket.IO.",
        techStack: [
            "Node.js",
            "Express",
            "TypeScript",
            "MongoDB",
            "PostgreSQL",
            "Socket.IO",
            "Swagger",
            "Docker",
            "GCP",
        ],
        githubUrl: "https://github.com/ttsaryanski/Forum-API",
        status: "active",
        singlePage: false,
        children: [
            {
                id: "proj-2a",
                name: "Forum Client",
                description:
                    "The Forum is a modern web application providing an intuitive interface for interacting with the Forum API. It allows users to browse categories and topics, create and manage discussions, post comments, like content, and communicate through real-time chat.",
                techStack: ["React", "TypeScript", "Socket.IO"],
                liveUrl: "https://forum-1ab65.web.app",
                githubUrl: "https://github.com/ttsaryanski/Forum-Client",
                status: "active",
                singlePage: true,
                children: [],
            },
        ],
    },
    {
        id: "proj-3",
        name: "Mogilev33 API",
        description:
            "A REST backend for managing building/apartment property documents: protocols, invitations and offers, with authentication and file upload.",
        techStack: [
            "Node.js",
            "Express",
            "TypeScript",
            "MongoDB",
            "Swagger",
            "Docker",
            "GCP",
        ],
        githubUrl: "https://github.com/ttsaryanski/Mogilev33-API",
        status: "active",
        singlePage: false,
        children: [
            {
                id: "proj-3a",
                name: "Mogilev33 Admin",
                description:
                    "Admin panel for document management of a condominium building.",
                techStack: ["React"],
                liveUrl: "https://mogilev33-admin.web.app",
                githubUrl:
                    "https://github.com/ttsaryanski/Mogilev33-Client-Admin",
                status: "active",
                singlePage: true,
                children: [],
            },
            {
                id: "proj-3b",
                name: "Mogilev33 Client",
                description:
                    "A web application for communicating with residents of a condominium building. Residents can receive notifications about upcoming general meetings, access meeting minutes, repair proposals, and other important information related to the building.",
                techStack: ["React"],
                liveUrl: "https://mogilev33-b1d4b.web.app",
                githubUrl: "https://github.com/ttsaryanski/Mogilev33-Client",
                status: "active",
                singlePage: true,
                children: [],
            },
        ],
    },
    // {
    //     id: "proj-4",
    //     name: "Portfolio Template",
    //     description:
    //         "Free portfolio template for designers and developers. Includes dark mode, responsive design, and SEO optimization.",
    //     techStack: ["Next.js", "Tailwind CSS", "MDX"],
    //     liveUrl: "https://template.example.com",
    //     githubUrl: "https://github.com/example/portfolio-template",
    //     status: "archived",
    //     singlePage: false,
    //     children: [],
    // },
];

export const education: Education[] = [
    {
        id: "edu-1",
        institution: "Software University",
        degree: "Certificate",
        field: "Front-End Developer with JavaScript",
        startYear: "2023",
        endYear: "2025",
        location: "Sofia, BG",
        details:
            "Professional training in developing interactive, responsive, and user-focused web applications using HTML, CSS, and JavaScript, working with REST APIs, SPA architecture, and modern front-end technologies.",
    },
    {
        id: "edu-2",
        institution: "Software University",
        degree: "Certificate",
        field: "JavaScript Full-Stack Developer",
        startYear: "2025",
        endYear: "2026",
        location: "Sofia, BG",
        details:
            "Professional training in developing full-stack web applications using JavaScript across both front end and back end, working with modern frameworks, REST APIs, databases, authentication, and scalable application architectures, with additional foundations in DevOps, including Git, CI/CD, containerization, Infrastructure as Code (IaC), and cloud technologies.",
    },
];
