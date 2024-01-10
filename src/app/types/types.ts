export interface Certificate { 
    displayName: string;
    imageSrc: string;
    href: string;
    description: string;
    year_received: number;
};

export interface TechIcon {
    displayName: string;
    srcName: string;
};

export interface Project {
    title: string;
    paragraphs: string[];
    imageFile?: string;
    techIcons: TechIcon[];
    repoLink?: string;
    completion_status: boolean;
}