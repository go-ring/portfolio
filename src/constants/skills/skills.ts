import type { SkillGroup } from '@/types/education';

export const skills: SkillGroup[] = [
  {
    category: "Backend",
    items: [
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        level: 4,
        points: [
          "객체지향 설계 기반 서버 애플리케이션 개발",
          "비즈니스 요구사항 기반 로직 설계 및 구현",
          "예외 처리 및 공통 응답 구조 설계"
        ]
      },
      {
        name: "Spring",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        level: 4,
        points: [
          "Spring MVC 기반 계층형 아키텍처 설계",
          "RESTful API 설계 및 구현",
          "JPA · QueryDSL 기반 데이터 처리",
          "WebSocket · SSE 기반 실시간 통신 구현"
        ]
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
        level: 3,
        points: [
          "데이터 모델링 및 ERD 설계",
          "복잡한 SQL 쿼리 작성",
          "인덱스 · 트랜잭션 기반 성능 최적화"
        ]
      }
    ]
  },
  {
    category: "Infra",
    items: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        level: 3,
        points: [
          "EC2 기반 서버 운영 환경 구축",
          "S3 기반 파일 저장소 연동",
          "Docker 기반 서비스 배포 및 운영"
        ]
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        level: 3,
        points: [
          "Docker 환경 구성",
          "컨테이너 기반 서비스 배포",
          "Blue-Green 무중단 배포 경험"
        ]
      },
      {
        name: "Jenkins",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
        level: 3,
        points: [
          "CI/CD 파이프라인 구축",
          "자동 빌드 및 배포 프로세스 구성",
          "배포 자동화 운영"
        ]
      },
      {
        name: "GitLab CI/CD",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
        level: 3,
        points: [
          "CI/CD 파이프라인 구축",
          "테스트 · 빌드 · 배포 자동화",
          "Merge Request 기반 협업 환경 운영"
        ]
      }
    ]
  },
  {
    category: "AI",
    items: [
      {
        name: "LLM",
        icon: "bot", // Special case, handled in UI
        level: 2,
        points: [
          "RAG 기반 검색 증강 시스템 구현",
          "프롬프트 최적화 및 응답 품질 개선",
          "DeepEval 기반 평가 체계 구축"
        ]
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        level: 2,
        points: [
          "FastAPI 기반 AI 서버 구축",
          "외부 AI API 연동 경험"
        ]
      }
    ]
  },
  {
    category: "Others",
    items: [
      {
        name: "코드 관리",
        subItems: [
          { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
          { name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
          { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" }
        ]
      },
      {
        name: "협업",
        subItems: [
          { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
          { name: "Notion", icon: "https://cdn.simpleicons.org/notion/000000" }
        ]
      }
    ]
  }
];

// Mapping "Papers/Thesis" & capstone projects to Projects for visibility
