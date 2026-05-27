import type { SkillGroup } from '@/types/education';

export const skills: SkillGroup[] = [
  {
    category: "Language",
    items: [
      { name: "Java", level: "상" },
      { name: "Python", level: "중" },
      { name: "C", level: "하" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", level: "상" },
      { name: "Spring Data JPA", level: "상" },
      { name: "QueryDSL", level: "상" },
      { name: "WebSocket (STOMP)", level: "중" },
      { name: "Spring Scheduler", level: "중" },
      { name: "FastAPI", level: "중" },
      { name: "Firebase Admin SDK & FCM", level: "하" },
    ],
  },
  {
    category: "DBMS / Cache",
    items: [
      { name: "MySQL", level: "상" },
      { name: "PostgreSQL", level: "하" },
      { name: "Redis", level: "중" },
      { name: "H2", level: "하" },
      { name: "ElasticSearch", level: "하" },
    ],
  },
  {
    category: "AI / LLM",
    items: [
      { name: "OpenAI GPT", level: "중" },
      { name: "DeepEval / G-Eval", level: "하" },
      { name: "Google Cloud STT/TTS", level: "하" },
      { name: "Qwen ASR", level: "하" },
    ],
  },
  {
    category: "Infra / DevOps",
    items: [
      { name: "Docker", level: "상" },
      { name: "Jenkins", level: "상" },
      { name: "Blue-Green", level: "중" },
      { name: "GitLab CI/CD", level: "중" },
      { name: "Prometheus", level: "하" },
      { name: "Grafana", level: "하" },
      { name: "Loki", level: "하" },

      { name: "Nginx", level: "중" },
      { name: "AWS EC2", level: "중" },
      { name: "AWS S3", level: "중" },
      { name: "CloudFront", level: "하" },
      { name: "Vercel", level: "하" },
    ],
  },
  {
    category: "Collaboration",
    items: [
      { name: "Git", level: "상" },
      { name: "GitHub", level: "상" },
      { name: "GitLab", level: "중" },
      { name: "Jira", level: "중" },
      { name: "Notion", level: "상" },
      { name: "Mattermost", level: "중" },
      { name: "Slack", level: "하" },
    ],
  },
];

// Mapping "Papers/Thesis" & capstone projects to Projects for visibility
