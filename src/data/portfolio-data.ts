import type {
    PersonalInfo,
    Experience,
    Project,
    Education,
} from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
    name: "Tsvetan Tsaryanski",
    title: "JavaScript FullStack Developer",
    location: { city: "Gabrovo", country: "Bulgaria" },
    website: "ttsaryanski.github.io/Portfolio",
    email: "ttsaryanski@gmail.com",
    avatar: "./me.jpg",
    bio: "I am developing my career as a Full-Stack Developer, with a strong focus on building modern web applications and continuously expanding my technical skills. I work with JavaScript and TypeScript, React, Next.js, and Node.js, with experience in both frontend and backend development, databases, REST APIs, and authentication. \n Alongside application development, I am expanding my knowledge and practical skills in DevOps and infrastructure. I work with Docker, Terraform, Ansible, and CI/CD, and in my recent projects I have also been working with deployment, monitoring, and observability using tools such as Prometheus and Grafana. I am interested in the entire lifecycle of an application — from development and testing to deployment, monitoring, and maintenance. \n My goal is to continue growing as a Full-Stack Developer while building a strong foundation in DevOps and infrastructure.",
    skills: "JavaScript, TypeScript, React, Next.js, Angular, Node.js, Express.js, REST APIs, MongoDB, PostgreSQL, Prisma, Git, GitHub, Docker, Terraform, Ansible, CI/CD, GitHub Actions, Prometheus, Grafana, AWS, Azure, GCP, Full-Stack Development, DevOps, Problem Solving, Team Collaboration, Communication, Continuous Learning",
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
    {
        id: "proj-4",
        name: "My REST API",
        description:
            "A multi-RESTapi that serves three different client applications: a collaborative cooking platform, a classroom management system, and a gaming application. It provides a single backend infrastructure with authentication, data management, and specific functionalities for each client.",
        techStack: [
            "Node.js",
            "Express",
            "MongoDB",
            "Swagger",
            "Jest",
            "Docker",
            "GCP",
            "AWS",
        ],
        githubUrl: "https://github.com/ttsaryanski/My-RestAPI",
        status: "active",
        singlePage: false,
        children: [
            {
                id: "proj-4a",
                name: "Cooking Together",
                description:
                    "Recipe sharing platform with CRUD operations and user interactions.",
                techStack: ["Angular", "TypeScript"],
                liveUrl: "https://cooking-together-782b1.web.app",
                githubUrl:
                    "https://github.com/ttsaryanski/Cooking-Together-Client",
                status: "active",
                singlePage: true,
                children: [],
            },
            {
                id: "proj-4b",
                name: "ClassBook",
                description:
                    "Student and class managment system with authentication and role-based access control (RBAC).",
                techStack: ["React"],
                liveUrl: "https://classbook-react-project.web.app",
                githubUrl:
                    "https://github.com/ttsaryanski/ClassBook-Client-for-GCP",
                status: "active",
                singlePage: true,
                children: [],
            },
            {
                id: "proj-4c",
                name: "GamesPlay",
                description:
                    "Gaming catalog with role-based access (admin section with statistics, role administration and publication managment).",
                techStack: ["React"],
                liveUrl: "https://gamesplay-54b41.web.app",
                githubUrl: "https://github.com/ttsaryanski/GamesPlay_ReactApp",
                status: "active",
                singlePage: true,
                children: [],
            },
        ],
    },
    {
        id: "proj-5",
        name: "Weather App",
        description:
            "A simple weather forecast application built with React, providing current weather and a 5-day forecast for any city. Powered by the OpenWeatherMap API and deployed via Firebase Hosting.",
        techStack: ["React"],
        liveUrl: "https://weather-55483.web.app",
        githubUrl: "https://github.com/ttsaryanski/Weather",
        status: "active",
        singlePage: true,
        children: [],
    },
    {
        id: "proj-6",
        name: "Calculator",
        description:
            "This project is a calculator built with React 19. It supports basic arithmetic operations, including percentage calculations.",
        techStack: ["React"],
        liveUrl: "https://calculator-a11e1.web.app",
        githubUrl: "https://github.com/ttsaryanski/Calculator",
        status: "active",
        singlePage: true,
        children: [],
    },
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
