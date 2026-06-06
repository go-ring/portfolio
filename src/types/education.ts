export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
  level?: number;
  points?: string[];
  subItems?: { name: string; icon?: string }[];
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface EducationItem {
  school: string;
  period: string;
  degree: string;
  gpa?: string;
  description?: string;
  organizer?: string;
}

export interface CertificationItem {
  name: string;
  date: string;
  issuer?: string;
}

export interface ResearchItem {
  title: string;
  conference: string;
  date: string;
}

export interface AwardItem {
  name: string;
  competition: string;
  organization: string;
  date: string;
}
