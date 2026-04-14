export interface ProjectDetails {
  roleAndContribution?: string[];
  roleAndContributionImages?: Record<number, string>;
  techAndReason?: string[];
  implementation?: string[];
  implementationImage?: string;
  troubleshooting?: {
    title: string;
    items: string[];
  }[];
  testing?: string[];
  refactoringPlan?: string[];
  retrospective?: string[];
}

export interface Project {
  title: string;
  role: string | string[];
  description: string;
  shortDescription: string;
  tech: string[];
  impact?: string;
  links: {
    repo?: string;
    demo?: string;
    blog?: string;
    paper?: string;
    presentation?: string;
    proof?: string;
    jira?: string;
    notion?: string;
  };
  images?: {
    main?: string;
    architecture?: string | string[];
    preview?: string;
  };
  period: string;
  type: string; // Team Project, Personal Project, Paper
  details?: ProjectDetails;
}
