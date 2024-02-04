export interface Certificate {
  displayName: string;
  imageSrc: string;
  href: string;
  description: string;
  year_received: number;
}

export interface TechIcon {
  displayName: string;
  srcName: string;
}

export interface Project {
  title: string;
  description: string;
  paragraphs: string[];
  imageFile?: string;
  techIcons: TechIcon[];
  repoLink?: string;
  slug: string;
  completion_status: boolean;
}

export interface Work {
  job_title: string;
  start_date: string;
  end_date: string | null;
}
