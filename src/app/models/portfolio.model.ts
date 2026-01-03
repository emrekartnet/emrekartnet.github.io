// TypeScript interfaces for portfolio data

export interface Profile {
    name: string;
    title: string;
    tagline: string;
    subTagline: string;
    location: string;
    email: string;
    phone?: string;
    bio: string;
    image?: string;
    links: {
        github: string;
        linkedin: string;
        website?: string;
        twitter?: string;
    };
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    field: string;
    location: string;
    startDate: string;
    endDate: string;
    description?: string;
    gpa?: string;
    activities?: string[];
}

export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    type: 'full-time' | 'part-time' | 'internship' | 'contract' | 'freelance';
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
    technologies: string[];
    achievements?: string[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image?: string;
    technologies: string[];
    liveUrl?: string;
    sourceUrl?: string;
    featured: boolean;
    category: 'web' | 'mobile' | 'ai' | 'iot' | 'other';
    achievements?: string[];
}

export interface Skill {
    name: string;
    level: number; // 1-100
    icon?: string;
    category: string;
}

export interface SkillCategory {
    name: string;
    icon: string;
    skills: Skill[];
}

export interface Contact {
    email: string;
    phone?: string;
    social: {
        github: string;
        linkedin: string;
        twitter?: string;
        website?: string;
    };
}

export interface PortfolioData {
    profile: Profile;
    education: Education[];
    experience: Experience[];
    projects: Project[];
    skillCategories: SkillCategory[];
    contact: Contact;
}
