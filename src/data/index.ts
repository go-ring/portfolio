export interface ProjectDetails {
  roleAndContribution?: string[];
  techAndReason?: string[];
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
  tech: string[];
  impact?: string;
  links: {
    repo?: string;
    demo?: string;
    blog?: string;
  };
  period: string;
  type: string; // Team Project, Personal Project, Paper
  details?: ProjectDetails;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  school: string;
  period: string;
  degree: string;
  gpa?: string;
  description?: string;
}

export interface CertificationItem {
  name: string;
  date: string;
  issuer?: string;
}

export const profile = {
  name: "이가은",
  enName: "Lee GaEun",
  title: "Backend Developer",
  shortBio: "데이터와 논리적인 사고를 바탕으로 성장하는 백엔드 개발자입니다.",
  missionStatement: "깊이 있는 탐구와 끊임없는 도전을 통해 더 나은 소프트웨어를 만듭니다.",
  keywords: ["성실함", "책임감", "논리적사고", "협업", "성장"], // Generic positive keywords as bio is sparse
  about: [
    "한남대학교 컴퓨터공학과를 졸업하고, 현재 삼성 청년 SW 아카데미(SSAFY)에서 강도 높은 소프트웨어 엔지니어링 과정을 이수하고 있습니다.",
    "시스템 소프트웨어 공학 연구실에서의 연구 경험을 통해 데이터 분석 역량과 논리적 문제 해결 능력을 길렀습니다.",
    "안정적이고 확장 가능한 백엔드 시스템 구축을 목표로, 지속적인 학습과 실무 프로젝트를 통해 전문성을 강화하고 있습니다."
  ],
  social: {
    github: "https://github.com/go-ring",
    email: "mailto:dlrkdms001@gmail.com",
    blog: "https://velog.io/@goring/posts",
    linkedin: "" 
  },
  strengths: [
    "System Architecture",
    "Data Analysis",
    "Logical Problem Solving",
    "Academic Research"
  ]
};

export const skills: SkillGroup[] = [
  {
    category: "Language",
    items: ["Java", "Python", "JavaScript"]
  },
  {
    category: "Backend",
    items: ["Spring Boot", "JPA", "SQL"]
  },
  {
    category: "Data & Tools",
    items: ["Git", "Notion", "Slack"]
  }
];

// Mapping "Papers/Thesis" & capstone projects to Projects for visibility
export const projects: Project[] = [
  {
    title: "ColorFinder",
    period: "2024.01 ~ 2024.06",
    type: "팀 프로젝트 (3인)",
    role: "백엔드 개발",
    description:
      "사용자 안면 색상 데이터 기반, 퍼스널 컬러 진단 및 맞춤형 의류 추천 쇼핑몰입니다.",
    tech: [
      "Java",
      "Spring Boot",
      "Python",
      "Flask",
      "MySQL",
      "OpenCV",
      "Vision API",
      "기상청 Open API"
    ],
    impact:
      "한남대학교 캡스톤 경진대회 우수상 수상. 프로젝트 결과를 기반으로 학부 논문 작성 및 학회 발표 경험을 쌓았습니다.",
    links: {
      blog: "https://velog.io/@goring/ColorFinder-%EC%95%88%EB%A9%B4-%EC%83%89%EC%83%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B8%B0%EB%B0%98-%ED%8D%BC%EC%8A%A4%EB%84%90-%EC%BB%AC%EB%9F%AC-%EC%A7%84%EB%8B%A8-%EB%B0%8F-%EB%A7%9E%EC%B6%A4%ED%98%95-%EC%9D%98%EB%A5%98-%EC%B6%94%EC%B2%9C-%EC%87%BC%ED%95%91%EB%AA%B0-24ev5oqu"
    },
    details: {
      roleAndContribution: [
        "Spring Boot 기반으로 회원 · 상품 · 주문 · 결제 도메인의 REST API를 설계하고 구현했습니다.",
        "회원, 상품, 주문, 결제 테이블 중심으로 MySQL 스키마를 설계하고, 주요 조회 쿼리에 인덱스를 적용해 성능을 개선했습니다.",
        "Flask + OpenCV 기반 퍼스널 컬러 분석 서버와의 REST 통신 규격을 정의하고, 타임아웃·에러 상황에 대한 예외 처리를 담당했습니다.",
        "tldraw를 활용해 API 흐름과 화면 간 시퀀스를 시각화하고, 프론트엔드와 함께 기능 통합 테스트를 주도했습니다."
      ],
      techAndReason: [
        "Spring Boot & Java: 주문/결제 흐름과 같은 상태 전이가 많은 도메인에서 안정적인 트랜잭션 관리와 계층 분리가 용이해 선택했습니다.",
        "MySQL: 정형 데이터(회원, 상품, 주문)를 다루면서 인덱스 튜닝과 조인 최적화가 중요한 쇼핑몰 도메인에 적합하다고 판단했습니다.",
        "Flask + OpenCV + Vision API: 얼굴 색상 분석은 실험과 튜닝이 잦기 때문에, 웹 서비스와 분리된 파이썬 기반 분석 서버로 구성해 유연하게 개선할 수 있도록 했습니다.",
        "기상청 Open API: 조명·환경에 따른 색감 왜곡을 줄이기 위해 촬영 시점의 날씨 정보를 함께 수집·분석하는 실험에 활용했습니다."
      ],
      troubleshooting: [
        {
          title: "퍼스널 컬러 + 카테고리 기반 상품 검색 성능 저하",
          items: [
            "문제: products 테이블에서 personalColorId + cateId 조건으로 상품을 검색할 때, 풀 스캔이 발생해 응답 속도가 느렸습니다.",
            "접근: EXPLAIN으로 쿼리 실행 계획을 확인해 보니, 두 컬럼 조합에 대한 적절한 인덱스가 없어 rows 587행을 탐색하고 있었습니다.",
            "해결: personalColorId, cateId 순으로 복합 인덱스(idx_color_category)를 생성해 검색 경로를 최적화했습니다.",
            "결과: rows 587행 → 39행으로 줄어들며, 실측 기준 검색 응답 시간이 약 50% 단축되었습니다."
          ]
        },
        {
          title: "AI 분석 서버와 쇼핑몰 백엔드 간 책임 분리",
          items: [
            "문제: 초기 설계에서는 색상 분석 로직과 쇼핑몰 로직이 한 서비스에 혼재되어, 모델 수정 시 전체 배포가 필요하고 장애 범위도 넓었습니다.",
            "접근: 얼굴 색상 분석을 독립된 Flask 서버로 분리하고, Spring Boot에서는 분석 결과를 입력받아 추천·주문을 처리하는 역할만 담당하도록 아키텍처를 재구성했습니다.",
            "효과: AI 모델 교체나 파이프라인 수정 시에도 쇼핑몰 서비스는 그대로 유지되며, 장애 시 영향 범위를 분석 서버로 한정할 수 있었습니다."
          ]
        }
      ],
      testing: [
        "주요 주문/결제 플로우에 대해 정상 결제 · 재고 부족 · 잘못된 요청 등의 시나리오를 나누어 서비스 단위로 검증했습니다.",
        "Postman과 Swagger 문서를 활용해 프론트엔드와 함께 API 계약을 기반으로 통합 테스트를 반복하면서, 실제 운영에서 발생 가능한 엣지 케이스를 미리 점검했습니다."
      ],
      refactoringPlan: [
        "상품 검색 API를 색상/카테고리/가격/스타일 필터별로 쿼리 객체 패턴으로 분리해, 조건이 복잡해져도 쿼리 조합을 유연하게 관리하고 싶습니다.",
        "AI 분석 요청을 완전히 비동기 큐 기반으로 전환해, 분석 지연이 쇼핑몰 응답 속도에 영향을 주지 않도록 개선할 계획입니다.",
        "주문/결제 플로우에 대한 통합 테스트 코드를 더 촘촘히 보강해, 결제 연동이나 로직 변경 시 회귀 테스트를 자동화하고 싶습니다."
      ],
      retrospective: [
        "주문과 결제, 재고 감소까지 이어지는 데이터 흐름을 설계하면서, 도메인 이벤트와 트랜잭션 경계를 명확히 나누는 것의 중요성을 체감했습니다.",
        "API 명세를 먼저 맞추고 구현을 진행하는 것이 협업 효율을 크게 올려 준다는 것을 경험해, 이후 프로젝트에서도 계약 기반 개발 방식을 유지하려 합니다.",
        "AI 분석 서버와 웹 백엔드를 분리한 경험을 통해, 변경이 잦은 영역과 안정성이 중요한 영역을 분리 설계하는 감각을 얻었습니다."
      ]
    }
  },
  {
    title: "ChatGPT를 활용한 대화형 플랫폼: 동향과 전망",
    period: "2023",
    type: "학술 논문",
    role: "연구원",
    description: "생성형 AI 모델인 ChatGPT의 뱅킹, 교육 등 다양한 분야에서의 활용 동향과 미래 전망 분석.",
    tech: ["AI Research", "Trend Analysis"],
    impact: "2023 한국스마트미디어학회 종합학술대회 발표",
    links: {}
  },
  {
    title: "빅데이터 분석 방법 비교",
    period: "2023",
    type: "심포지움 발표",
    role: "연구원",
    description: "다양한 빅데이터 분석 방법론의 장단점 비교 및 케이스 스터디 수행.",
    tech: ["Big Data", "Analytics"],
    impact: "2023 한국스마트미디어학회 심포지움 참여",
    links: {}
  }
];

export const education: EducationItem[] = [
  {
    school: "한남대학교",
    period: "2025.02 졸업", // Implied from birthdate/profile context
    degree: "컴퓨터공학과 학사",
    description: "전공 심화 과정 이수 및 학부 연구생 활동"
  },
  {
    school: "Samsung Software Academy For Youth (SSAFY)",
    period: "2025.08 - 현재",
    degree: "14기 교육생",
    description: "알고리즘 및 웹 개발 심화 과정"
  }
];

export const experience: ExperienceItem[] = [
  {
    company: "시스템 소프트웨어 공학 연구실",
    role: "학부 연구생",
    duration: "2022.10 - 2024.01",
    description: "학부생 신분으로 연구실에 소속되어 논문 작성 및 학술 대회 참여, 최신 기술 동향 연구 수행."
  },
  {
    company: "CIA Academy",
    role: "어학연수",
    duration: "2024.07 - 2024.09",
    description: "글로벌 커뮤니케이션 능력 향상 및 문화 교류."
  }
];

export const certifications: CertificationItem[] = [
  {
    name: "정보처리기사",
    date: "2025.09",
    issuer: "한국산업인력공단"
  },
  {
    name: "Opic IM2",
    date: "2025.09"
  },
  {
    name: "SQLD",
    date: "2025.04",
    issuer: "한국데이터산업진흥원"
  }
];
