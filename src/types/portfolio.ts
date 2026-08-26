export interface PersonalInfo {
    name: string;
    title: string;
    location: { city: string; country: string };
    website: string;
    email: string;
    avatar: string;
    bio: string;
    skills: string;
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string | null;
    description: string;
    media?: string;
    current: boolean;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    status: "active" | "archived";
    singlePage: boolean;
    children: Project[];
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    field: string;
    startYear: string;
    endYear: string;
    location: string;
    details?: string;
}
