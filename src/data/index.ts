export interface ProjectDetails {
  roleAndContribution?: string[];
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

import colorFinderSubject from "../resourse/colorfinder/subject.png";

import colorFinderArch from "../resourse/colorfinder/architecture.png";
import colorFinderPreview from "../resourse/colorfinder/preview.gif";

import nos3Main from "../resourse/artificialSatellite/main.bmp";
import nos3Arch1 from "../resourse/artificialSatellite/architecture1.bmp";
import nos3Arch2 from "../resourse/artificialSatellite/architecture2.bmp";

import baekguMain from "../resourse/baekgu/main.gif";
import baekguArch from "../resourse/baekgu/architecture.png";

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
    paper?: string;
    presentation?: string;
    proof?: string;
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

export const experience: ExperienceItem[] = [];

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

export interface ResearchItem {
  title: string;
  conference: string;
  date: string;
}

export const profile = {
  name: "이가은",
  enName: "Lee GaEun",
  birthdate: "2002.04.01",
  title: "Backend Developer",
  shortBio: "데이터와 논리적인 사고를 바탕으로 성장하는 백엔드 개발자입니다.",
  education: "한남대학교 컴퓨터공학과 (졸업)",
  missionStatement:
    "깊이 있는 탐구와 끊임없는 도전을 통해 더 나은 소프트웨어를 만듭니다.",
  keywords: ["성실함", "책임감", "논리적사고", "협업", "성장"],
  about: [
    "한남대학교 컴퓨터공학과를 졸업하고, 현재 삼성 청년 SW 아카데미(SSAFY)에서 강도 높은 소프트웨어 엔지니어링 과정을 이수하고 있습니다.",
    "시스템 소프트웨어 공학 연구실에서의 연구 경험을 통해 데이터 분석 역량과 논리적 문제 해결 능력을 길렀습니다.",
    "안정적이고 확장 가능한 백엔드 시스템 구축을 목표로, 지속적인 학습과 실무 프로젝트를 통해 전문성을 강화하고 있습니다.",
  ],
  social: {
    github: "https://github.com/go-ring",
    email: "mailto:dlrkdms001@gmail.com",
    blog: "https://velog.io/@goring/posts",
    linkedin: "",
  },
};

export const skills: SkillGroup[] = [
  {
    category: "Language",
    items: ["Java", "Python", "C"],
  },
  {
    category: "Backend",
    items: ["Spring", "Spring Boot", "Spring Data JPA", "QueryDSL", "FastAPI"],
  },
  {
    category: "Data",
    items: ["MySQL", "Redis", "ElasticSearch"],
  },
  {
    category: "DevOps",
    items: ["Git", "Docker", "AWS"],
  },
];

// Mapping "Papers/Thesis" & capstone projects to Projects for visibility
export const projects: Project[] = [
  {
    title: "백구 (Baekgu)",
    type: "팀 프로젝트 (6인)",
    period: "2026.01.05 ~ 2026.02.09",
    role: ["백엔드 리드 & 인프라"],
    description:
      "GitHub 코드 분석 기반의 올인원 개발자 취업 솔루션. '개발자는 코드로 말하고 싶은데, 기업은 자소서를 원한다'는 채용의 병목 문제를 해결하기 위해 탄생했습니다.\n\nGitHub 레포지토리(실제 커밋/코드)와 기업의 최신 데이터(DART 공시, Perplexity AI)를 교차 분석하여, 기술 역량 기반 공고 매칭과 근거 있는 자기소개서 작성을 자동화합니다. 범용 LLM의 할루시네이션(Hallucination) 문제를 극복하고, SSAFY 취업 컨설턴트 자문을 반영한 증거 중심 커리어 솔루션을 지향합니다.",
    tech: [
      "Java 17",
      "Spring Boot 3.2",
      "FastAPI",
      "WebSocket/STOMP",
      "GitLab CI/CD",
      "Grafana",
      "Loki",
      "MySQL 8.0",
      "Redis",
      "QueryDSL",
      "Docker",
      "Nginx",
      "Prometheus",
    ],
    impact:
      "AI 분석 파이프라인 성공률 99.9% 달성 (배포 중단 이슈 해결)\n보안 시스템: 모의 해킹(Brute-force) 시나리오 평균 0.05초 내 자동 차단\n채팅 지연 1초(Polling) → 10ms 미만(WebSocket Push)으로 단축\n채팅방 목록 조회 1.5s → 50ms로 30배 성능 개선 (QueryDSL 최적화)\n보안 로직 DB → Redis 전환: 응답속도 120ms → 5ms, CPU 사용률 80% 감소",
    images: {
      preview: baekguMain,
      architecture: baekguArch,
    },
    links: {
      repo: "https://github.com/go-ring/baekgu",
      presentation: "https://drive.google.com/drive/folders/1YyTF5Y8VIFfN4SU8AqsdHednnqFg9xkn?usp=sharing",
      proof: "https://drive.google.com/drive/folders/1aGZ_1izpcS2EAyXRVqEqdvG3YkIelbkJ?usp=sharing",
    },
    details: {
      roleAndContribution: [
        "백엔드 리드: MSA 지향 아키텍처 설계 (Spring Boot ↔ FastAPI 비동기 통신), 서비스 분리 및 통신 계약 정의",
        "보안 시스템: Redis 기반 IP 바인딩 JWT 인증 및 Blacklist 자동 차단 시스템 구현 (BlackListServiceImpl.java)",
        "실시간 채팅: WebSocket + STOMP 채팅 서버 구축, QueryDSL로 N+1 문제 해결 (ChatRoomQueryRepositoryImpl.java)",
        "결함 허용 파이프라인: AI 워커(FastAPI)의 Fault-Tolerant 상태 보고 로직 설계 (orchestrator.py)",
        "DevOps: GitLab CI/CD 파이프라인 구축, Docker Compose 기반 서비스별 독립 배포 전략 수립",
        "모니터링: Prometheus + Grafana + Loki 통합 관제 환경 구성",
      ],
      techAndReason: [
        "Spring Boot + FastAPI 분리: 비즈니스 로직(Spring)과 AI 연산(FastAPI)의 부하를 격리하여, AI 작업의 CPU 집약적 연산이 사용자 API 응답 속도에 영향을 주지 않도록 설계했습니다.",
        "Redis (보안 & 캐싱): 블랙리스트 판별을 모든 API 요청마다 수행해야 했기 때문에, Disk I/O가 발생하는 MySQL 대신 Microsecond 단위 응답이 가능한 In-Memory 저장소 Redis를 선택했습니다. TTL 기능으로 자동 차단 해제도 구현했습니다.",
        "WebSocket + STOMP: 채팅 구현 시 HTTP Polling은 메시지 유무에 관계없이 매초 ~800byte 헤더를 주고받아 트래픽의 90% 이상을 낭비합니다. WebSocket은 최초 핸드셰이크 후 연결을 유지하여 헤더 오버헤드 없이 Payload만 교환합니다.",
        "QueryDSL (N+1 해결): JPA Fetch Join은 집계 함수(COUNT, MAX)와 페이징이 동시에 필요한 상황에서 한계가 있었습니다. Projections.constructor와 SELECT 절 서브쿼리를 조합해 단일 쿼리로 모든 정보를 매핑했습니다.",
        "Git Clone (vs GitHub API): GitHub Contents API는 파일당 1건의 요청을 소비해 Rate Limit(5,000건/시간)이 빠르게 소진됩니다. git clone은 단 1번의 명령으로 전체 코드를 가져오며, Rate Limit을 소비하지 않습니다.",
        "Docker 컨테이너 격리: AI 분석(수 분 소요)과 백엔드 배포 사이클을 분리하기 위해, backend와 fastapi를 독립 컨테이너로 운영합니다. 백엔드만 재배포해도 AI 워커는 중단되지 않습니다.",
      ],
      implementation: [
        "IP 바인딩 JWT: 토큰 발급 시 클라이언트 IP를 암호화하여 Payload에 포함하고, JwtAuthenticationTokenFilter에서 매 요청마다 실제 IP와 대조합니다. 토큰 탈취 후 다른 IP에서 사용하는 세션 하이재킹을 원천 차단합니다.",
        "Redis Atomic Counter 블랙리스트: 비정상 접근(4xx 에러 반복) 감지 시 RedisTemplate.opsForValue().increment()로 카운트를 증가시키고, 임계치 초과 시 Spring Security 필터 진입 전에 즉시 403 차단합니다.",
        "채팅 N+1 최적화: '방 목록(1) + 안 읽은 메시지 수(N) + 상대 프로필(N) + 마지막 메시지(N)' 패턴을 Projections.constructor와 서브쿼리를 활용한 단일 QueryDSL 쿼리로 해결했습니다. 1만 건 이상 데이터에서도 50ms 미만을 유지합니다.",
        "결함 허용(Fault-Tolerant) AI 파이프라인: orchestrator.py에서 Spring으로의 진행률 보고를 try-except-pass로 감싸, Spring 배포 중 연결 실패가 발생해도 AI 분석 작업 자체는 죽지 않고 끝까지 완료됩니다.",
        "데이터 수집 파이프라인: DART OpenAPI로 기업 공시 데이터 추출, Perplexity sonar-pro로 최신 뉴스 수집, GitHub API로 커밋 이력 수집, git clone으로 전체 소스 분석, Playwright로 자소설닷컴 공고(네트워크 인터셉트 방식) 크롤링.",
      ],
      troubleshooting: [
        {
          title: "🐳 AI 분석 중 배포 시 작업 중단 문제 (Fault-Tolerant 아키텍처)",
          items: [
            "상황: AI 분석에 5분 이상 소요되는데, 하루 여러 번 배포가 이루어지는 CI/CD 환경에서 진행 중인 분석이 강제 종료되어 사용자에게 치명적인 UX 저하 발생",
            "원인: 비즈니스 서버(Spring)와 AI 연산(FastAPI)이 같은 컨테이너 혹은 강결합 구조로 운영됨",
            "해결: AI 워커를 독립 Docker 컨테이너(FastAPI)로 분리. docker compose up -d backend 수행 시 fastapi 컨테이너는 재시작되지 않도록 구성. orchestrator.py의 Spring 보고 로직에 try-except-pass 적용으로 연결 실패 시에도 분석 계속 진행",
            "결과: 배포 중에도 AI 분석 성공률 99.9% 달성. docker restart baekgu-backend 실행 후 AI 워커 로그에서 Connection refused 후에도 다음 단계(OCR → 분석 → 점수 산출)로 계속 진행 확인",
          ],
        },
        {
          title: "🛡️ 보안 로직 DB 조회로 인한 API 응답 지연 (Redis 전환)",
          items: [
            "상황: 블랙리스트 여부를 모든 API 요청마다 검사해야 하는 요구사항. MySQL 조회 시 Disk I/O로 Latency 증가 및 커넥션 풀 고갈 위험",
            "해결: Redis(In-Memory) 도입. violation:user:{id} 키로 블랙리스트 조회 → 존재 시 Spring Security 로직 진입 전 즉시 403 차단. TTL로 자동 차단 해제 구현",
            "결과: JMeter 부하 테스트(초당 1000회)에서 MySQL 대비 응답속도 120ms → 5ms, CPU 사용률 80% 감소",
          ],
        },
        {
          title: "💬 채팅방 목록 조회 응답 지연 (QueryDSL N+1 해결)",
          items: [
            "상황: 테스트 데이터 누적 후 채팅방 목록 로딩 200ms → 1.5s로 급격히 저하",
            "원인: JPA Lazy Loading으로 채팅방 수만큼 추가 쿼리 발생 (N+1 문제): 방 목록(1) + 안 읽은 메시지(N) + 상대 프로필(N) + 마지막 메시지(N)",
            "시도: QueryDSL Fetch Join 적용 시도 → 집계 함수(COUNT, MAX)와 페이징이 동시에 필요한 구조에서 한계 봉착",
            "해결: Projections.constructor로 DTO 직접 조회, SELECT 절 서브쿼리로 집계값 포함 → 단일 쿼리로 모든 정보 매핑",
            "결과: 데이터 1만 건 이상에서도 조회 속도 50ms 미만 일정 유지 (1.5s → 0.05s, 30배 개선)",
          ],
        },
      ],
      testing: [
        "JMeter 부하 테스트: /api/v1/job-postings 엔드포인트에 초당 1,000회 요청으로 Redis vs MySQL 보안 로직 성능 비교 검증",
        "배포 내성 테스트: AI 분석 진행 중(Progress 30%) docker restart baekgu-backend 실행 후 AI 워커 로그로 작업 연속성 검증",
        "채팅 N+1 검증: 브라우저 개발자 도구 Network → WS 탭에서 단일 WebSocket 연결 유지 확인, MySQL 쿼리 로그로 단일 쿼리 실행 검증",
      ],
      retrospective: [
        "\"기능 구현은 시작일 뿐, 완성은 운영에서 결정된다\": AI 분석이라는 Long-running Task가 배포 전략 전체를 바꿔야 했던 경험에서 아키텍처 설계의 중요성을 깨달았습니다.",
        "트레이드오프의 이해: Redis나 WebSocket이 항상 정답은 아닙니다. 데이터 중요도, 실시간성 요구, 서버 리소스를 종합적으로 고려하여 적정 기술을 선택하는 안목을 길렀습니다.",
        "Observability의 가치: Loki + Prometheus를 직접 세팅하며, 로그와 메트릭 없는 장애 추적은 눈을 감고 운전하는 것과 같다는 것을 체감했습니다.",
      ],
    },
  },
  {
    title: "ColorFinder",
    type: "팀 프로젝트 (3인)",
    description:
      "사용자의 안면 색상 데이터를 분석하여 퍼스널 컬러를 진단하고, 날씨와 성별, 퍼스널 컬러에 맞는 맞춤형 의류를 추천하는 지능형 커머스 플랫폼입니다.\n\n단순한 의류 쇼핑몰을 넘어, '톤그로(Tone-aggro)' 없는 의류 소비 경험을 제공하기 위해 개발되었습니다. Google Vision AI를 활용하여 의류의 색상을 정밀하게 추출하고, 잭슨의 'Color Me Beautiful' 이론을 기반으로 구축한 데이터셋과 유클리디안 거리 알고리즘을 통해 의류의 퍼스널 컬러 타입을 자동 분류합니다.\n\n또한 기상청 API를 연동하여 실시간 기온에 적합한 의류 카테고리를 추천하며, 사용자의 퍼스널 컬러와 매칭되는 상품을 우선적으로 노출하는 개인화 알고리즘을 구현했습니다.",
    tech: [
      "Java",
      "Spring Boot",
      "MySQL",
      "JPA",
      "Google Vision AI",
      "Python",
      "OpenCV",
      "Selenium",
    ],
    period: "2024.01.13 ~ 2024.06.03",
    role: "백엔드 개발",
    impact:
      "한남대학교 캡스톤 경진대회 우수상 (2024)\n2024 스마트미디어 추계학술대회 학술 논문 발표 \n42명의 베타 테스터 대상 사용자 만족도 조사 결과, 평균 4.7/5.0점 달성 (추천 정확도 92% 긍정)",
    links: {
      repo: "https://github.com/chaeha617/capstone_colorfinder",
      demo: "http://color-finder.site",
      blog: "https://velog.io/@goring/ColorFinder-%EC%95%88%EB%A9%B4-%EC%83%89%EC%83%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B8%B0%EB%B0%98-%ED%8D%BC%EC%8A%A4%EB%84%90-%EC%BB%AC%EB%9F%AC-%EC%A7%84%EB%8B%A8-%EB%B0%8F-%EB%A7%9E%EC%B6%A4%ED%98%95-%EC%9D%98%EB%A5%98-%EC%B6%94%EC%B2%9C-%EC%87%BC%ED%95%91%EB%AA%B0-24ev5oqu",
      paper:
        "https://drive.google.com/drive/folders/1bd-zl9_SLAwJEby6GwKhnktTmCHTSj5l?usp=sharing",
      presentation:
        "https://drive.google.com/drive/folders/1q-xnMK3-20LDLs3RK-RJZiYkG4TAeYd4?usp=sharing",
      proof:
        "https://drive.google.com/drive/folders/1oh4o9QwShnQzbdlVRr-fSeyHb0qUrMeH?usp=sharing",
    },
    images: {
      architecture: colorFinderArch,
      preview: colorFinderPreview,
    },
    details: {
      roleAndContribution: [
        "Spring Boot 기반 백엔드 REST API 설계 및 구현 (회원/상품/주문/결제)",
        "Google Vision AI Properties API 연동 및 의류 색상 추출 로직 개발",
        "유클리디안 거리(Euclidean Distance) 기반 색상 유사도 분석 알고리즘 구현",
        "잭슨의 컬러 미 뷰티풀(Color Me Beautiful) 표본 데이터 DB 구축 및 매핑 로직 설계",
        "기상청 단기 예보 API 연동을 통한 실시간 기온 기반 의류 카테고리 필터링 구현",
      ],
      techAndReason: [
        "Spring Boot: 퍼스널 컬러 진단과 의류 추천이라는 복합적인 비즈니스 로직을 트랜잭션 단위로 안정적으로 처리하기 위해 선택했습니다.",
        "JPA (Hibernate): 복잡한 SQL 쿼리 없이 객체 중심의 도메인 설계를 통해, 추천 알고리즘 구현 자체에 집중할 수 있는 환경을 만들었습니다.",
        "Google Vision AI: 자체 모델 학습 비용을 절감하고, 상용 API의 높은 정확도(Dominant Color 추출)를 활용하여 '색상 매핑 알고리즘' 개발에 더 시간을 투자하는 전략을 취했습니다.",
        "MySQL: 다대다(N:M) 관계인 사용자와 의류 데이터를 명확한 스키마로 관리하고, 추천 쿼리의 조인 성능을 고려하여 RDBMS를 채택했습니다.",
      ],
      implementation: [
        "색상 추출 파이프라인: Google Vision AI로 의류 이미지의 Dominant Color(RGB)를 추출하고, 미리 정의된 12가지 퍼스널 컬러 타입의 대표 색상값과 유클리디안 거리를 계산하여 가장 가까운 타입으로 자동 태깅했습니다.",
        "기상청 데이터 캐싱: 기상청 API의 응답 속도 불안정 문제를 해결하기 위해, 1시간 단위로 날씨 정보를 조회하여 Redis(또는 인메모리)에 캐싱하고, 사용자 요청 시 캐시된 데이터를 기반으로 추천 카테고리를 필터링했습니다.",
      ],
      implementationImage: colorFinderSubject,
      troubleshooting: [
        {
          title: "AI 색상 추출 정확도 및 DB 매핑 문제",
          items: [
            "문제: Vision AI가 추출한 RGB 값과 DB에 저장된 퍼스널 컬러 표본 데이터가 정확히 일치하지 않아 매핑 실패 발생",
            "해결: 단순 일치 비교 대신, 3차원 RGB 공간에서의 유클리디안 거리(Euclidean Distance) 공식을 도입.",
            "결과: 추출된 색상과 가장 거리가 가까운 표본 데이터를 찾아내는 방식으로 개선하여 분류 성공률 98% 달성",
          ],
        },
        {
          title: "기상청 API 응답 지연으로 인한 메인 페이지 로딩 저하",
          items: [
            "문제: 외부 API(기상청) 호출 시간이 불규칙하여 메인 페이지 렌더링 속도에 영향을 줌",
            "해결: API 호출 결과를 서버 메모리(Local Cache)에 30분 단위로 캐싱하고, 스케줄러를 통해 주기적으로 갱신하도록 변경",
            "결과: 메인 페이지 로딩 속도를 평균 1.5초에서 0.2초로 단축",
          ],
        },
      ],
      testing: [
        "JUnit5와 Mockito를 활용한 서비스 레이어 단위 테스트 작성 (커버리지 70%)",
        "Postman을 활용한 API 엔드포인트 통합 테스트 수행",
        "42명의 베타 테스터를 대상으로 시나리오 기반 사용성 테스트(UT) 진행",
      ],
      refactoringPlan: [
        "추천 알고리즘 고도화: 단순 색상/기온 매칭을 넘어 사용자 선호 스타일을 반영한 협업 필터링 도입 고려",
        "대용량 트래픽 대응: Redis 캐시 서버 도입으로 조회 성능 추가 최적화",
        "CQRS 패턴 도입: 상품 조회와 주문 처리 로직 분리로 확장성 확보",
      ],
      retrospective: [
        "외부 AI API를 비즈니스 로직에 통합하는 과정에서 데이터 전처리(RGB 보정)의 중요성을 체감했습니다.",
        "단순한 기능 구현을 넘어, '나에게 어울리는 색'이라는 사용자 가치를 기술적으로 해결하는 과정이 즐거웠습니다.",
        "기상청 API 장애 상황에 대한 예외 처리(Fallback) 로직의 필요성을 배웠습니다.",
      ],
    },
  },
  {
    title: "가상화 기반 우주 통신망 연동 및 사이버 위협 연구",
    period: "2023.04.01 ~ 2023.10.31",
    type: "산학 과제 (3인)",
    role: "위성 시뮬레이터 환경 구축 및 문제 해결",
    description:
      "NASA의 오픈소스 위성 시뮬레이션 플랫폼 NOS3를 기반으로, 가상 인공위성-지상국(GS)-사용자 환경을 클라우드에서 재현하기 위한 연구형 테스트베드입니다. 핵심 목표는 우주 통신망 연동 구조를 가상화 환경에서 검증하고, 사이버 위협 대응 실험이 가능한 기본 실행 환경을 마련하는 것입니다. NOS Engine, cFS, 42, COSMOS 등 구성요소를 중심으로 통신/운영 흐름을 분석하고 클라우드에서 재현 가능한 형태로 정리했습니다.",
    tech: [
      "NOS3",
      "Linux",
      "NCloud",
      "Cloud-Init",
      "Shell",
      "Ruby",
      "Vagrant",
      "VirtualBox",
      "xrdp",
      "Git",
    ],
    impact:
      "클라우드 서버에서 VirtualBox 중첩 가상화 제약을 우회할 수 있는 설치 절차를 검토·정리했습니다.\nNOS3 installer(MIN/COSMOS/CUSTOM)와 빌드/실행 스크립트(Build/Run/Stop/Clean) 실행 순서를 문서화했습니다.\nRuby(Nokogiri) 의존성 및 경로 하드코딩 이슈를 수정해 주요 설치 실패 원인을 줄였습니다.\n로컬 VM 기반 설치와 클라우드 기반 설치를 비교 정리해 재현 가능한 실험 환경 구축에 기여했습니다.",
    images: {
      main: nos3Main,
      architecture: [nos3Arch1, nos3Arch2],
    },
    links: {
      proof:
        "https://drive.google.com/file/d/1wtzY7gHgHmb1sj4i1sMoRnfpqYnxw1jh/view?usp=sharing",
    },
    details: {
      roleAndContribution: [
        "NOS3 공식 설치 흐름(Vagrant up 중심)과 클라우드 환경 제약을 비교 분석해 이식 방향을 정리했습니다.",
        "NOS3 1.04.00 installer 경로(`~/nos3/support/installers/ubuntu`)의 스크립트를 기반으로 클라우드 설치 시나리오를 재구성했습니다.",
        "NCloud Server 생성 시 Init Script를 연결해 필수 패키지 설치 및 초기 프로비저닝 자동화를 적용했습니다.",
        "xrdp 기반 GUI 원격 접속 환경을 구성해 클라우드 서버에서 COSMOS/시뮬레이터 화면 확인이 가능하도록 구현했습니다.",
        "Nokogiri 의존성 오류와 빌드 스크립트 경로 오류를 직접 수정해 설치-실행 파이프라인을 안정화했습니다.",
      ],
      techAndReason: [
        "NOS3/cFS/42/COSMOS: 비행 소프트웨어와 시뮬레이터, 지상국 구성요소를 함께 다뤄 우주 통신망 실험 환경 구성에 적합했습니다.",
        "NCloud Init Script: 서버 생성 시 초기 스크립트를 자동 실행할 수 있어 수동 설정 편차를 줄이고 반복 설치에 유리했습니다.",
        "Shell Script: MIN/COSMOS/CUSTOM 및 Build/Run/Stop/Clean 작업을 명령 단위로 표준화해 재현 가능한 운영 절차를 만들었습니다.",
        "xrdp: 클라우드 리눅스 서버에 GUI 접근을 제공해 시뮬레이터 관찰 및 데모 진행 효율을 높였습니다.",
      ],
      implementation: [
        "기존 설치 경로 분석: 로컬 환경 기준 절차(`git clone` -> `submodule init/update` -> `/deployment` 설정 -> `vagrant up`)를 분해해 클라우드에서 대체 가능한 단계와 불가능한 단계를 구분했습니다.",
        "클라우드 설치 자동화: NCloud 서버 생성 시 Init Script를 적용하고, `~/nos3/support/installers/ubuntu`에서 MIN -> COSMOS -> CUSTOM 순으로 설치되도록 스크립트화했습니다.",
        "빌드/실행 표준화: `~/Desktop`의 `nos3-build.sh`, `nos3-run.sh`, `nos3-stop.sh`, `nos3-clean.sh` 실행 순서를 작업 가이드로 정리해 운영 실수를 줄였습니다.",
        "구성요소 구조 문서화: cFS APPS, CFE/OSAL, HWLIB, LIBA3200/LIBA3200NOS, NOS Engine Client/Server의 역할을 정리해 팀 내부 지식 자산으로 남겼습니다.",
      ],
      troubleshooting: [
        {
          title: "이중 가상화 충돌 및 VirtualBox 의존성 해결",
          items: [
            "문제: NOS3 기본 절차는 VirtualBox VM 생성을 전제로 하지만, 이미 가상화된 클라우드 서버에서는 중첩 가상화 제약으로 동일한 방식이 실패했습니다.",
            "접근: Vagrant/VirtualBox 의존 단계를 제거하고, installer 스크립트 실행과 패키지 직접 설치 방식으로 절차를 전환했습니다.",
            "해결: VM 생성 없이도 NOS3 구성요소를 실행할 수 있도록 설치 경로를 재정의해 클라우드 환경에서 구동에 성공했습니다.",
          ],
        },
        {
          title: "Ruby 라이브러리 및 하드코딩 경로 오류 수정",
          items: [
            "문제: `nos3_ubuntu_64_COSMOS.sh` 실행 시 Nokogiri 미설치/버전 이슈로 Ruby 의존성 오류가 발생했습니다.",
            "해결: 스크립트에 `gem install nokogiri -v 1.12.5`를 추가해 의존성을 고정했습니다.",
            "문제: 설치 스크립트(`~/nos3/support/installers/ubuntu`)와 빌드/실행 스크립트(`~/Desktop`)의 경로 가정이 달라 스크립트 실행이 중단됐습니다.",
            "해결: `nos3-build.sh` 등 스크립트 내 경로를 실제 서버 구조에 맞게 수정해 Build/Run 절차를 정상화했습니다.",
          ],
        },
      ],
      retrospective: [
        "오픈소스 시뮬레이터를 다른 인프라에 이식할 때는 기능 구현보다 설치 체계와 의존성 정리가 우선이라는 점을 배웠습니다.",
        "클라우드 Init Script 기반 자동화가 반복 배포 안정성과 팀 협업 속도에 직접적인 영향을 준다는 것을 확인했습니다.",
      ],
    },
  },
];

export const education: EducationItem[] = [
  {
    school: "Samsung SW·AI Academy For Youth (SSAFY)",
    period: "2025.08 ~ 현재",
    degree: "14기 교육생",
    description: "알고리즘 및 웹 개발 심화 과정",
  },
  {
    school: "CIA Academy",
    period: "2024.07 ~ 2024.09",
    degree: "어학연수",
    description: "글로벌 커뮤니케이션 능력 향상 및 문화 교류",
  },
  {
    school: "시스템 소프트웨어 공학 연구실",
    period: "2022.10 ~ 2024.01",
    degree: "학부 연구생",
    description: "논문 작성 및 최신 기술 동향 연구",
  },
];

export const certifications: CertificationItem[] = [
  {
    name: "OPIC IM2",
    date: "2025.09",
  },
  {
    name: "정보처리기사",
    date: "2025.09",
  },
  {
    name: "SQLD",
    date: "2025.04",
  },
];

export const research: ResearchItem[] = [
  {
    title: "안면 색상 데이터 기반 퍼스널 컬러 진단 서비스",
    conference: "2024 한국스마트미디어학회&한국전자거래학회 추계학술대회",
    date: "2024.10",
  },
  {
    title: "ChatGPT를 활용한 대화형 플랫폼: 동향과 전망",
    conference: "2023 한국스마트미디어학회 종합학술대회",
    date: "2023.04",
  },
  {
    title: "빅데이터 분석 방법 비교",
    conference: "2023 한국스마트미디어학회 심포지움",
    date: "2023.10",
  },
];
