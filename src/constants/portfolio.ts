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

import colorFinderSubject from "@/assets/images/colorfinder/subject.png";

import colorFinderArch from "@/assets/images/colorfinder/architecture.png";

import nos3Main from "@/assets/images/artificialSatellite/main.bmp";
import nos3Arch1 from "@/assets/images/artificialSatellite/architecture1.bmp";
import nos3Arch2 from "@/assets/images/artificialSatellite/architecture2.bmp";

import baekguMain from "@/assets/images/baekgu/main.gif";
import baekguArch from "@/assets/images/baekgu/architecture.png";
import baekguCardPreview from "@/assets/images/baekgu/baekgu.png";

import algogoMain from "@/assets/images/algogo/main.gif";
import algogoCardPreview from "@/assets/images/algogo/algogo.png";

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

export const profile = {
  name: "이가은",
  enName: "Lee GaEun",
  birthdate: "2002.04.01",
  title: "Backend Developer",
  shortBio: "데이터와 논리적인 사고를 바탕으로 성장하는 백엔드 개발자입니다.",
  education: {
    school: "한남대학교 컴퓨터공학과",
    major: "학사 4.09/4.5"
  },
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
    title: "백구(BAEKGU)",
    type: "팀 프로젝트 (6인)",
    period: "2026.01.19 ~ 2026.02.06 (3주)",
    role: ["백엔드 리드 & 인프라"],
    shortDescription: "사용자 GitHub 기반 공고 추천 및 자소서 작성 지원 플랫폼",
    description:
      "개발자의 GitHub 코드와 기업의 재무 데이터를 AI로 분석해 맞춤형 기업을 매칭하고 합격 가이드를 제공하는 지능형 채용 플랫폼.\n\n구직자의 코드로 도출한 객관적 기술 역량과 DART/뉴스 기반의 기업 성장성 데이터를 통합 분석함. 단순 공고 추천을 넘어 지원자의 기술 지표가 반영된 '근거 중심(Evidence-based) 자기소개서' 생성을 지원하여 취업 시장의 정보 비대칭 문제를 해결함. ([시연 영상](https://drive.google.com/drive/folders/1aGZ_1izpcS2EAyXRVqEqdvG3YkIelbkJ?usp=sharing), [발표 자료](https://drive.google.com/drive/folders/1YyTF5Y8VIFfN4SU8AqsdHednnqFg9xkn?usp=sharing))",
    tech: [
      "Java 17",
      "Spring Boot 3.2",
      "FastAPI",
      "JPA / QueryDSL",
      "MySQL 8.0",
      "Redis",
      "AWS EC2 / S3",
      "GitLab CI/CD",
      "Docker",
      "Nginx",
      "OpenAI (GPT-4o)",
      "PaddleOCR",
      "Google Vision AI",
      "OpenDartReader",
      "WebSocket (STOMP)",
      "Prometheus / Grafana",
      "Loki",
      "Jira / Mattermost",
      "Git",
    ],
    impact:
      "QueryDSL 최적화(Fetch Join): 복잡한 다중 관계가 있는 채팅방 목록 조회 시 발생하는 N+1 문제를 해결하여, 쿼리 응답 속도를 1.2s에서 50ms 수준으로 최적화\nSpring-FastAPI 부하 격리 설계: CPU 점유율이 높은 AI 연산(정규표현식, OCR)을 비동기 워커로 분리하여, 다수 유저 분석 시에도 메인 웹 서버 가용성 100% 유지\nWebSocket(STOMP) 통신망 구축: 1초 주기의 지속 Polling 방식을 대체하여 헤더 오버헤드를 제거, 실시간성 확보는 물론 일일 기준 채팅망 네트워크 대역폭(Bandwidth) 약 85% 절감 달성\nRedis 인메모리 보안 모델: 매 요청마다 DB를 찌르던 블랙리스트 검증을 Redis로 이관, 악성 사용자 차단 필터 속도를 약 30ms → 2ms(90% 향상)로 단축해 Disk I/O 병목 해소",
    images: {
      preview: baekguCardPreview,
      architecture: baekguArch,
      main: baekguMain
    },
    links: {
      repo: "https://github.com/go-ring/baekgu",
      presentation: "https://drive.google.com/drive/folders/1YyTF5Y8VIFfN4SU8AqsdHednnqFg9xkn?usp=sharing",
      proof: "https://drive.google.com/drive/folders/1aGZ_1izpcS2EAyXRVqEqdvG3YkIelbkJ?usp=sharing",
      notion: "https://www.notion.so/2e03b20e2ab480089393e059585d614c",
    },
    details: {
      roleAndContribution: [
        "GitLab CI/CD 기반 백엔드-AI 서버 분리 구조 설계: FastAPI와 Spring Boot의 수명 주기를 분리하여 백엔드 배포 중에도 AI 분석 파이프라인이 중단되지 않는 Fault-Tolerant 아키텍처 구축",
        "FastAPI-Spring 비동기 처리 및 작업 안정성 확보: 분석 결과 보고 로직을 비동기 콜백 구조로 설계하고 예외 처리를 강화하여 서버 결합도 해소 및 데이터 전송의 최종 일관성 확보",
        "공고·채팅·자소서 핵심 도메인 API 설계 및 구현: 시노님 기반 공고 매칭 로직, WebSocket 기반 실시간 채팅, LLM 연동 자소서 생성 지원 등 서비스 주요 비즈니스 도메인 전체 개발",
        "Prometheus·Grafana·Loki 기반 통합 모니터링 구축: 서버 메트릭 수집부터 로그 통합 분석까지 전체 시스템 가시성을 확보하여 장애 조치 및 성능 관찰 환경 조성",
        "Redis 기반 비정상 요청 차단 시스템 구현 (블랙리스트 관리): Redis Atomic Counter를 활용한 비정상 호출 실시간 탐지 및 블랙리스트 관리 체계 구축으로 시스템 보안 강화",
      ],
      techAndReason: [
        "Spring Boot + FastAPI 분리 (부하 격리): 무거운 AI 연산이 웹 API 응답을 지연시키지 않도록, I/O 처리(Spring)와 AI 연산(FastAPI) 서버를 물리적으로 격리하여 시스템 안정성 확보.",
        "Redis (보안 및 캐싱): 매 요청마다 발생하는 DB 조회 병목을 차단. Atomic Increment 연산을 지원하는 인메모리 Redis를 도입해 비정상 트래픽을 지연 없이 실시간 차단.",
        "WebSocket + STOMP (트래픽 최적화): 무거운 HTTP 헤더를 반복 교환하는 Polling의 한계를 극복. WebSocket과 STOMP 채널 라우팅을 도입해 빠르고 효율적인 채팅 비동기 통신망 구축.",
        "Git Clone (API Rate Limit 우회): 파일당 1회를 소모하는 GitHub API의 호출 한계를 피하기 위해 `git clone` 방식을 채택. 단 1회의 네트워크 호출로 대용량 코드 수집 한계 극복.",
      ],
      implementation: [
        "사용자 개발 역량 정밀 분석: GitHub 커밋 빈도, 코드 기여도 등 실질적 활동 데이터를 기반으로 핵심 기술 역량을 객관적으로 도출 (Git Clone & LLM 분석)",
        "지능형 기업 데이터 분석: DART(재무제표)와 실시간 뉴스(비즈니스 트렌드)를 결합하여 기업의 안정성 및 성장성을 정밀 검증 (Perplexity AI 연동)",
        "AI 맞춤형 공고 매칭: 분석된 사용자 역량과 실시간 채용 데이터를 온톨로지 기반 기술 매칭 시스템으로 정합하여 최적의 커리어 경로 및 추천 근거 제시",
        "데이터 기반 자소서 자동 작성: 역량-공고-기업 분석 데이터를 종합하여 구체적 실적 근거(Evidence) 중심의 고품질 자기소개서 생성",
        "실시간 직무 소통 네트워크: WebSocket 및 STOMP 기반 오픈채팅 시스템을 통한 지원자 및 현직자 간의 투명한 정보 공유 지원",
      ],
      troubleshooting: [
        {
          title: "🐳 CI/CD 배포가 진행 중인 AI 분석을 강제 종료한다",
          items: [
            "문제: AI 분석은 총 7단계(git clone → 단일 레포 분석 → OCR → DB 로드 → 통합 분석 → Fit Score 계산 → DB 저장)를 순차 실행하며, 최대 10분 소요. 하루에도 수 차례 이루어지는 CI/CD 배포 시, 진행 중인 분석이 강제 종료되어 사용자가 처음부터 다시 기다려야 하는 문제 발생.",
            "원인: Spring 배포 타이밍에 진행 중인 AI 분석이 Spring으로 진행률을 보고(notify_spring())하는 순간 연결이 끊기면, 처리되지 않은 예외가 발생해 분석 파이프라인 전체 종료.\ndocker-compose.prod.yml에서 fastapi가 backend에 의존(depends_on)하도록 설정되어 있어, Spring 컨테이너가 재시작되면 FastAPI 컨테이너도 함께 재시작.",
            "해결: 이중 방어선 적용.\n[1차] fastapi의 depends_on에서 backend 의존성을 제거해 두 컨테이너의 수명 주기를 물리적으로 분리. docker compose up -d backend 실행 시 fastapi 컨테이너는 재시작되지 않음.\n[2차] AI 분석은 총 5번에 걸쳐 Spring에 진행 상황(40% → 100%)을 보고합니다. 이 보고 로직(notify_spring())을 try-except-pass로 감싸, Spring이 재시작 중이어서 보고에 실패하더라도 분석 자체는 멈추지 않고 끝까지 실행됩니다. 분석 결과는 Spring을 거치지 않고 FastAPI가 MySQL에 직접 저장하기 때문에, Spring이 꺼져 있는 동안에도 데이터가 유실되지 않습니다. Spring이 재기동된 후 사용자는 정상적으로 결과를 조회할 수 있습니다. (Eventual Consistency)",
            "결과: docker restart baekgu-backend 실행 후 AI 워커 로그에서 Connection refused 경고만 찍히고, OCR → 통합 분석 → Fit Score 단계까지 파이프라인이 끝까지 완료됨.",
          ],
        },
        {
          title: "🛡️ DB 기반 보안 검사가 매 요청마다 API를 느리게 만든다",
          items: [
            "문제: 비정상 접근을 반복하는 사용자를 모든 API 요청마다 확인해야 하는데, 위반 횟수 집계를 MySQL에서 하면 Write가 많아질수록 DB에 부담이 가중됨.",
            "원인: 위반 카운팅처럼 빈번하게 발생하는 쓰기 연산까지 Disk I/O가 있는 MySQL에 의존하는 구조.",
            "해결: 위반 횟수 카운팅은 Redis로, 영구 차단 정보는 MySQL로 이원화. \n 위반 감지 시 RedisTemplate.opsForValue().increment()로 violation:{userId} 카운터를 원자적으로 증가. \n TTL자동 초기화. 누적 횟수가 5회를 초과하면 MySQL BlackListUser 테이블에 영구 저장. \n JwtAuthenticationTokenFilter가 Spring Security 진입 전 isBlocked()로 해당 테이블을 조회해 즉시 403으로 차단",
            "결과: 위반 카운팅 연산이 Redis 원자 연산으로 처리되어 동시 요청 시 Race Condition 없이 정확한 집계 보장.\n JMeter 초당 1,000회 부하 테스트에서 응답 속도 120ms → 5ms, CPU 사용률 80% 감소 확인.",
          ],
        },
        {
          title: "💬 WebSocket 핸드셰이크에서 JWT 헤더가 서버에 닿지 않는다",
          items: [
            "문제: WebSocket에 JWT 인증 적용. HTTP 업그레이드 방식으로 연결되므로, 핸드셰이크 시 Authorization: Bearer 헤더를 전달하면 HandshakeInterceptor에서 받아 인증할 수 있을 것으로 예상했으나, 헤더가 서버에 도달하지 않음",
            "원인: JavaScript의 new WebSocket(url) 호출 시, 커스텀 HTTP 헤더를 붙이는 기능 자체가 없음. 브라우저 WebSocket API 스펙(RFC 6455)의 제약.",
            "해결: 인증 시점을 HTTP 레이어에서 STOMP 레이어로 분리.\n[HTTP 레이어] WebSocketHandshakeInterceptor — 핸드셰이크는 인증 없이 무조건 통과.\n[STOMP 레이어] JwtChannelInterceptor — CONNECT 프레임 수신 시 JWT 검증, Access Token 타입 확인, userId 세션 저장. return message 대신 createMessage()로 반환해야 변경된 Principal이 SimpUserRegistry에 정상 전파되어 /user/queue 개인 구독(1:1 Push)이 동작.",
            "결과: STOMP CONNECT 프레임 안에 Authorization 헤더 포함 전송 확인. Nginx 로그에 토큰 미노출 확인. /user/queue 개인 구독 1:1 메시지 Push 정상 작동.",
          ],
        },
      ],
      testing: [
        "JMeter 부하 테스트: /api/v1/job-postings 엔드포인트에 초당 1,000회 요청으로 Redis vs MySQL 보안 로직 성능 비교 검증",
        "배포 내성 테스트: 분석 Progress ~40%(Step 2 완료 직후) 시점에 docker restart baekgu-backend 실행 → docker logs -f baekgu-fastapi로 Connection refused 경고 후 OCR → 통합 분석 → Fit Score 단계까지 파이프라인 끝까지 완료 및 Spring 재기동 후 Progress 100% COMPLETED 정상 수신 확인",
        "채팅 N+1 검증: 브라우저 개발자 도구 Network → WS 탭에서 단일 WebSocket 연결 유지 확인, MySQL 쿼리 로그로 단일 쿼리 실행 검증",
      ],
      retrospective: [
        "가장 크게 체감한 것은 결함 허용(Fault-Tolerance) 아키텍처의 가치임. AI 분석 중 서버 배포로 인해 파이프라인이 끊기는 이슈를 파헤치며, 단순히 동작하는 기능을 넘어 '어떤 악조건에서도 가용성이 무너지지 않는 구조'를 설계하는 것이 백엔드의 본질임을 깨달음.",
        "수치와 근거에 기반한 기술의 트레이드오프 결정. Redis나 WebSocket을 유행처럼 도입하지 않고, DB I/O 병목과 네트워크 대역폭 낭비라는 명확한 지표적 한계를 확인한 뒤 타당한 해결책으로 적용함. 유행에 휩쓸리지 않고 데이터에 근거하여 기술을 취사선택하는 엔지니어링 가치관을 확립함.",
        "트러블슈팅 과정에서 타협하지 않는 집요함을 기름. N+1 문제와 부하 테스트의 지연 속에서 로깅 및 메트릭(Loki, Prometheus)을 원인 분석의 도구로 삼아 끝내 50ms 수준의 응답 최적화를 이뤄냄. 병목을 끝까지 파고들어 한계를 극복했던 이 경험을 통해 근거 있는 개선을 주도하는 태도를 확립함."
      ],
    },
  },
  {
    title: "알고가자(Algogo)",
    type: "팀 프로젝트 (5인)",
    period: "2025.11.20 ~ 2026.01.20 (9주)",
    role: ["백엔드 & 인프라"],
    shortDescription: "알고리즘 스터디 운영 자동화 및 강제적 코드 리뷰 학습 플랫폼",
    description:
      "알고리즘 스터디 운영 자동화와 강제적 코드 리뷰 규칙을 하나로 통합한 지능형 학습 관리 플랫폼.\n\n제출된 알고리즘 코드를 OpenAI API의 Logprobs(토큰 확률 분포)를 활용한 G-Eval 방법론으로 수학적으로 자동 평가하고 정교한 피드백을 제공함. 단순한 문제 풀이 관리를 넘어, 타인의 코드를 일정 횟수 이상 리뷰해야만 활동을 이어갈 수 있는 '제출 잠금(Lock) 기반 선순환 리뷰 루프' 시스템을 구축함. 이를 통해 알고리즘 학습의 본질인 '사고의 공유'를 강제로 유도하고, 스터디 모집부터 활동 시각화 및 리뷰어 그룹 매칭까지 전 과정을 통합하여 운영진의 관리 피로도를 근본적으로 해결함. ([시연 영상](https://drive.google.com/drive/folders/1whFJSQOZUTy8wNHKJbOnCMuwldX32LXF?usp=sharing), [GitHub 저장소](https://github.com/team-algogo/algogo_server.git), [Notion 워크스페이스](https://www.notion.so/2688c963ea8b80d88bf7e79182feeccc))",
    tech: [
      "Java 17",
      "Spring Boot 3.5.7",
      "JPA / QueryDSL",
      "MySQL 8.0",
      "Redis",
      "AWS S3 & CloudFront",
      "Git",
      "Jenkins",
      "Nginx",
      "Docker",
      "Blue-Green",
      "Vercel",
      "OpenAI API (G-Eval & WebClient)",
      "Spring Boot Actuator & Prometheus",
      "Logstash Logback",
    ],
    impact:
      "실운영 약 120명 유저 유치 및 리뷰 선순환 생태계 안착: SSAFY 14·15기 교육생 대상으로 플랫폼을 런칭, 코드 리뷰를 강제하는 잠금(Lock) 비즈니스 설계를 통해 밀도 높은 실제 스터디 생태계 구축\nHealth Check 연동 무중단 배포(0 Downtime) 달성: Nginx 라우팅과 애플리케이션의 Ready 생명주기를 동기화하는 Blue-Green 파이프라인을 구축해 배포 중 발생하는 트래픽 유실과 502 에러 100% 차단\n비동기 격리를 통한 DB 커넥션 풀 고갈 방어: 지연이 잦은 OpenAI API 연동망을 트랜잭션 외부 독립 스레드풀로 분리, 트래픽 스파이크 시에도 타 API가 연쇄 마비되는 현상(Cascading Failure) 원천 차단\n계층형 N+1 병목 최적화 (단일 쿼리 트리 조립): QueryDSL Flat 쿼리 및 O(N) 메모리 트리 조립 알고리즘을 도입해 아무리 깊은 대댓글 뎁스에서도 DB 조회를 단 1회로 병합 종결\nDocker 레이어 캐시 최적화 및 보안 컨테이너 구축: 구조 개편으로 CI 빌드 시간을 66% 단축(12분→4분)하고, 최하위 권한(Non-root) 런타임 적용으로 권한 상승 공격 컨테이너 취약점 전면 제거\n클라우드 네이티브(S3·CloudFront) 정적 리소스 분리: 정적 에셋 서빙 비용을 엣지 로케이션(CDN)으로 넘겨 API 서버(오리진)의 부하를 없애고 사용자 체감 응답 속도 향상 달성",
    images: {
      preview: algogoCardPreview,
      main: algogoMain
    },
    links: {
      repo: "https://github.com/team-algogo/algogo_server.git",
      notion: "https://www.notion.so/2688c963ea8b80d88bf7e79182feeccc",
      proof: "https://drive.google.com/drive/folders/1whFJSQOZUTy8wNHKJbOnCMuwldX32LXF?usp=sharing",
    },
    details: {
      roleAndContribution: [
        "문제집 및 리뷰 도메인 코어 API 설계 및 구현: 그룹 및 캠페인 목적에 맞춘 알고리즘 문제집(Program-Problem) 관리 로직과, 제출된 코드의 특정 라인(Line)에 매핑되는 계층형 리뷰 및 반응(Reaction) 도메인 전체 개발",
        "OpenAI API 연동 비동기 이벤트 아키텍처 설계: AI 코드 평가 대기 중 발생할 수 있는 메인 DB 커넥션 풀(HikariCP) 고갈 이슈를 방지하고자, 비동기 구조 기반의 독립적인 트랜잭션 격리 환경 구축",
        "Jenkins·Nginx 기반 Blue-Green 무중단 CI/CD 파이프라인 구축: Nginx Gateway 서버와 통합 API 서버를 물리적으로 분리하고, Health Check 기반 자동 트래픽 스위칭을 도입하여 트래픽 전환 가용성 100% 달성",
        "Docker Multi-stage Build 및 Non-root 권한 격리 적용: BuildKit Layer 캐싱을 도입하여 컨테이너 빌드 소요 시간을 단축(66%)함과 동시에, appuser 권한 분리를 통한 호스트 OS 보안성 대폭 강화",
        "AWS S3 및 CloudFront 기반 클라우드 네이티브 자산 서빙 구조 설계: 다수의 스터디 자료 및 이미지 서빙 시 오리진 인스턴스의 트래픽 부하를 엣지 로케이션으로 분산시켜 데이터 전송 안정성 확보",
      ],
      techAndReason: [
        "Blue-Green 배포: 단일 운영 서버(EC2) 한계상 롤링 배포가 불가능한 환경에서, 신/구 버전을 동시 기동 후 Nginx 라우팅을 전환하여 완벽한 롤백 지점 확보 및 무중단 배포(0 Downtime) 달성",
        "S3 + CloudFront: 다수의 문제집 이미지 등 정적 에셋 서빙 시 발생하는 EC2 대역폭 부하를 분산시키기 위해 도입. CDN 엣지 캐싱을 통해 오리진(API 서버)을 완전한 무상태(Stateless) 기반 구조로 전환",
        "Docker 캐싱 & Non-root: CI 빌드 시 종속성 레이어 캐싱을 적용해 소요 시간을 극대화하여 단축하고, 런타임 이미지는 최소 권한의 appuser(10001)로 실행시켜 호스트 OS와의 권한 상승(Privilege Escalation) 보안 취약점 사전 차단",
        "Spring Event + @Async (OpenAI): GPT API의 수 초 단위 응답 대기 시간 동안 메인 트랜잭션이 유지되며 발생하는 DB 커넥션 풀(HikariCP) 고갈 및 데드락을 원천 차단하기 위해, 애플리케이션 이벤트를 활용한 논리적 스레드 분리",
      ],
      implementation: [
        "제출 잠금(Lock) 기반 강제 리뷰: 타인의 코드를 반드시 일정 횟수 이상 리뷰해야만 새로운 코드를 제출할 수 있는 선순환 피드백 시스템 구축",
        "LLM 기반 정밀 코드 평가: OpenAI(G-Eval)를 활용하여 제출된 코드의 최적화 수준, 복잡도, 예외 처리 능력을 객관적으로 수치화 및 자동 피드백",
        "스터디 운영 체계 자동화: 주차별 문제 출제, 미제출자 자동 알림 패널티 부과 기능을 통해 운영진의 스터디 관리 리소스 최소화",
        "코드 라인별 계층형 리뷰: 제출된 코드의 특정 라인(Line)을 지정한 피드백 및 대댓글(Thread) 기능을 설계하여 밀도 높은 기술 소통 지원",
        "개인별 성취도 지표 시각화: 문제 난이도별 성공률, 시도 횟수, 실행 시간 및 메모리 추이 등 상세 학습 지표를 시각화하여 체계적 관리 구현",
      ],
      troubleshooting: [
        {
          title: "🚀 Nginx 배포 전환 시점의 502 Error 및 Health Check 기반 플로우 도입",
          items: [
            "문제: Jenkins 파이프라인으로 새 애플리케이션 컨테이너를 배포하고 Nginx 라우팅을 즉시 전환했을 때, 사용자 측에서 순간적으로 '502 Bad Gateway' 에러가 발생하는 배포 불안정성 발견.",
            "원인: 도커 컨테이너 내부의 자바 프로세스(Up)는 기동되었더라도 Spring Boot의 JVM 초기화 및 8080 포트 활성화(Ready)까지 수 초가 소요됨. 이 부팅 시간을 고려하지 않고 Nginx 업스트림을 변경해, 아직 패킷을 수용할 수 없는 서버로 트래픽이 유입됨.",
            "해결: 단순 'sleep' 방식의 불안정한 대기를 폐기하고, Nginx Gateway 서버의 배포 스크립트 단에서 타겟 API 서버의 '/actuator/health' 엔드포인트가 HTTP 200을 반환할 때까지 curl로 순환 폴링(Polling)하며 대기하는 동적 검증 로직 구현.",
            "결과: API 서버가 완벽히 트래픽을 수용할 수 있는 상태(Ready)를 프로그래밍적으로 엄격히 보장하여, 배포 중 트래픽 유실이나 에러 없는 진정한 무중단 배포 달성.",
          ],
        },
        {
          title: "📦 Docker 빌드 레이어 최적화 및 Non-root 권한 분리 크래시 극복",
          items: [
            "문제: CI 파이프라인에서 매번 수백 메가바이트의 라이브러리를 재다운로드하여 빌드 병목이 발생함. 또한, 컨테이너 탈취 공격(Privilege Escalation)을 방어하고자 운영 이미지를 'appuser(UID:10001)' 비특권 계정으로 전환하자, 로그 폴더 쓰기 권한 부족으로 런타임 크래시 발생.",
            "원인: [1] Dockerfile 상단에서 'COPY . .'를 뭉뚱그려 수행하여, 소스 코드 1줄 패치 시에도 전체 Gradle 의존성 캐시 레이어가 무효화됨.\n[2] Non-root 계정으로 실행 컨텍스트를 내렸으나, 컨테이너 내부 작업 디렉터리('/app/logs')의 소유권은 여전히 기본값인 root에게 박혀 있었음.",
            "해결: [캐싱 설계] 'gradlew' 및 'build.gradle' 등의 환경 설정 파일을 선행 'COPY' 하도록 지시어를 분리(Multi-stage) 배치해, 변경 빈도가 낮은 레이어의 빌드 캐시 적중률 극대화.\n[소유권 매핑] 컨테이너 런타임 실행 전에 'chown -R appuser:app /app' 명령어를 선행 수행하여 작업 공간에 대한 명시적 소유권을 부여함으로써 권한 충돌 해소.",
            "결과: 의미 없는 라이브러리 다운로드를 차단해 CI 빌드 시간을 12분에서 4분(66% 단축)으로 아키텍처 레벨에서 단축하고, 안티프래질 보안 원칙(Least Privilege)을 철저히 준수함.",
          ],
        },
        {
          title: "🔄 비동기 격리를 통한 외부 API 지연의 DB 커넥션 풀(HikariCP) 고갈 방어",
          items: [
            "문제: SSAFY 실운영 단계에서 과제 제출 마감 시간대에 약 120여 명의 교육생 트래픽이 집중되며 동시 제출 스파이크가 발생. 이때 동반되는 OpenAI API 통신 지연(건당 3~10초)으로 인해 DB 커넥션 풀(HikariCP)이 순간적으로 100% 점유되며, 전혀 무관한 타 코어 API까지 전면 마비되는 장애(Cascading Failure) 직면.",
            "원인: 영속성 로직을 위해 열어둔 '@Transactional' 스코프 내부에서 HTTP 네트워크 비용이 높은 외부 API를 동기적으로 기다리면, 응답이 돌아올 때까지 해당 스레드가 DB 커넥션을 반납하지 못한 채 풀을 잠식하기 때문.",
            "해결: Spring 'ApplicationEvent'와 '@Async'를 도입하여 외부 I/O 통신 구간을 트랜잭션 밖의 병렬 스레드풀로 물리적 격리. 주 트랜잭션 커밋이 완료된 직후(TransactionPhase.AFTER_COMMIT)에만 이벤트를 발행해 메인 DB 커넥션 반환을 보증하고, AI 처리가 끝난 뒤에만 산출물을 DB에 짧게 Update 하도록 재설계.",
            "결과: 외부 I/O 지연이 핵심 내부 시스템을 갉아먹는 병목을 제거해, 마감 시간대의 극단적인 트래픽 쏠림 환경에서도 메인 API의 100% DB 응답성을 성공적으로 사수함.",
          ],
        },
        {
          title: "💬 계층형 코드 리뷰 O(N) 최적화: N+1 쿼리 병목 원천 차단",
          items: [
            "문제: 코드 리뷰 강제 정책 도입 후 120여 명의 사용자가 단일 제출물에 다수의 대댓글(계층형 리뷰)을 적극적으로 남기기 시작함. JPA 지연 로딩(Lazy)에 의존한 기존 렌더링 방식으로는 트리가 깊어질수록 쿼리가 폭증(N+1)해 조회 성능 붕괴 위험 발견.",
            "원인: RDBMS 특성상 무한 뎁스 계층 데이터를 단방향으로 한 번에 가져오는 것이 몹시 비효율적이며, ORM의 Fetch 전략만으로는 연관관계 순회 비용을 감당하기 힘듦.",
            "해결: QueryDSL Flat 조회 체계 및 O(N) In-Memory 트리 조립 알고리즘 전격 채택.\n[DB I/O 상쇄] ReviewQueryRepositoryImpl에서 전체 리뷰를 플랫(Flat) 쿼리로 일괄 조회. 동시에 로그인 유저의 '좋아요' 판단 로직마저 EXISTS 서브쿼리 프로젝션에 병합시켜 DB 통신을 단 1회로 종결.\n[트리 변환 최적화] 반환된 Flat 리스트를 Service 계층의 LinkedHashMap 기반 알고리즘에 넘겨 루프 1회 O(N)만에 부모-자식 Tree 구조 조립 완료.",
            "결과: 실운영 환경에서 아무리 깊은 대댓글과 방대한 리뷰 데이터가 누적되더라도 무조건 1번의 쿼리로 렌더링됨을 보장하여, 데이터베이스 I/O 병목을 완벽히 차단함.",
          ],
        },
        {
          title: "🌍 CloudFront 캐시 통제: Invalidation 지연 우회를 위한 UUID Cache Busting 도입",
          items: [
            "문제: 정적 에셋 서빙 부하를 줄이기 위해 AWS S3와 CloudFront를 도입했으나, 프로필이나 썸네일 등 동일 파일명으로 이미지가 덮어씌워질 때(Update), CloudFront 엣지 서버의 긴 캐시 TTL로 인해 구형 이미지가 계속 노출되는 동기화 지연 현상 발생.",
            "원인: 공식 파훼법인 CloudFront Invalidation API를 호출할 수 있으나, 건당 수분이 소요되며 빈번한 호출 시 추가 과금이 부과되는 심각한 트레이드오프가 존재.",
            "해결: 단순 Invalidation 동작 대신 업로드 아키텍처를 개선하여, 이미지가 업데이트될 때마다 파일 식별 URL에 고유한 UUID 쿼리 파라미터를 바인딩해 반환하는 캐시 파훼(Cache Busting) 전략 도입.",
            "결과: Invalidation API를 전혀 호출하지 않고도 이미지 갱신 시 100%의 최신화 상태를 보장하여 추가 과금 요소를 제거하고 CDN 동기화 지연 문제를 완벽히 해결.",
          ],
        },
      ],
      retrospective: [
        "인프라와 어플리케이션 생명주기 정밀 제어 역량 확보. Nginx와 Spring Boot 포트 오픈 시점 간극으로 발생하는 502 에러 해결. 단순 대기가 아닌 Health Check 폴링 기반의 검증 로직을 구축하며 무중단 배포의 실무적 메커니즘 체득.",
        "보안과 효율성을 모두 잡는 컨테이너 아키텍처 설계. Docker Multi-stage 빌드와 레이어 캐싱으로 빌드 타임을 66% 단축. Non-root 권한 분리 시 발생하는 런타임 권한 에러를 해결하며 시스템 보안 인프라의 정밀한 구성 능력 배양.",
        "외부 장애가 내부로 전파되지 않는 안티프래질 설계 체득. 외부 LLM API 지연이 DB 커넥션 풀을 말리고 전체 시스템 마비(Cascading Failure)로 번지는 현상 해결. 비동기 이벤트와 트랜잭션 격리를 통해 가용한 자원을 사수하는 아키텍처 설계의 중요성 경험.",
        "데이터베이스 I/O와 클라우드 자원의 최적화 트레이드오프 역량. 계층형 데이터의 N+1 병목을 O(N) 트리 조립 알고리즘으로 극복하고, CDN 동기화 지연을 UUID 기반 파훼법으로 해결하는 등 주어진 환경에서 최고 성능을 뽑아내는 실전 튜닝 역량 고도화.",
      ],
    },
  },
  {
    title: "ColorFinder",
    type: "팀 프로젝트 (3인)",
    shortDescription: "안면 색상 데이터 기반 퍼스널 컬러 진단 및 맞춤형 의류 추천 플랫폼",
    description:
      "사용자의 안면 색상 데이터를 분석하여 퍼스널 컬러를 진단하고, 날씨와 성별, 퍼스널 컬러에 맞는 맞춤형 의류를 추천하는 지능형 커머스 플랫폼.\n\n단순한 의류 쇼핑몰을 넘어, '톤그로(Tone-aggro)' 없는 의류 소비 경험을 제공하기 위해 개발. Google Vision AI를 활용하여 의류의 색상을 정밀하게 추출하고, 잭슨의 'Color Me Beautiful' 이론을 기반으로 구축한 데이터셋과 유클리디안 거리 알고리즘을 통해 의류의 퍼스널 컬러 타입을 자동 분류.\n\n기상청 API를 연동하여 실시간 기온에 적합한 의류 카테고리를 추천하고, 사용자의 퍼스널 컬러와 매칭되는 상품을 우선 노출하는 개인화 알고리즘 구현. ([기술 블로그](https://velog.io/@goring/ColorFinder-%EC%95%88%EB%A9%B4-%EC%83%89%EC%83%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B8%B0%EB%B0%98-%ED%8D%BC%EC%8A%A4%EB%84%90-%EC%BB%AC%EB%9F%AC-%EC%A7%84%EB%8B%A8-%EB%B0%8F-%EB%A7%9E%EC%B6%A4%ED%98%95-%EC%9D%98%EB%A5%98-%EC%B6%94%EC%B2%9C-%EC%87%BC%ED%95%91%EB%AA%B0-24ev5oqu), [발표 자료](https://drive.google.com/drive/folders/1q-xnMK3-20LDLs3RK-RJZiYkG4TAeYd4?usp=sharing))",
    tech: [
      "Java 17",
      "Python 3.11",
      "Spring Boot 3.2.5",
      "Flask",
      "JPA / QueryDSL",
      "MySQL 8.0",
      "Google Vision AI",
      "OpenCV & NumPy",
      "KMA API (Weather)",
      "Selenium",
      "REST API",
    ],
    period: "2024.04.08 ~ 2024.06.10 (10주)",
    role: "백엔드 개발",
    impact:
      "한남대학교 캡스톤 경진대회 우수상 (2024)\n2024 스마트미디어 추계학술대회 학술 논문 발표\n42명의 베타 테스터 대상 사용자 만족도 조사 결과, 평균 4.7/5.0점 달성 (추천 정확도 92% 긍정)",
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
    },
    details: {
      roleAndContribution: [
        "색상 추출 파이프라인 구현: Google Vision AI로 의류 이미지의 Dominant Color(RGB) 추출 → 유클리디안 거리 기반 퍼스널 컬러 타입 자동 태깅. 분류 성공률 98% 달성",
        "퍼스널 컬러 DB 설계: 잭슨의 Color Me Beautiful 이론 기반 12가지 타입 표본 데이터 구축 및 RGB 색상 매핑 로직 설계",
        "날씨 기반 추천 필터링: 기상청 단기 예보 API 연동, 실시간 기온 기반 의류 카테고리 필터링 + 30분 단위 캐싱으로 메인 페이지 로딩 1.5s → 0.2s ([기술 블로그](https://velog.io/@goring/ColorFinder-%EC%95%88%EB%A9%B4-%EC%83%89%EC%83%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B8%B0%EB%B0%98-%ED%8D%BC%EC%8A%A4%EB%84%90-%EC%BB%AC%EB%9F%AC-%EC%A7%84%EB%8B%A8-%EB%B0%8F-%EB%A7%9E%EC%B6%A4%ED%98%95-%EC%9D%98%EB%A5%98-%EC%B6%94%EC%B2%9C-%EC%87%BC%ED%95%91%EB%AA%B0-24ev5oqu))",
        "REST API 설계 및 구현: 회원·상품·주문·결제 도메인 Spring Boot 백엔드 API 개발 (Controller → Service → Repository 레이어 구조)",
      ],
      techAndReason: [
        "Spring Boot: 퍼스널 컬러 진단과 의류 추천이라는 복합적인 비즈니스 로직을 트랜잭션 단위로 안정적으로 처리하기 위해 선택.",
        "JPA (Hibernate): 복잡한 SQL 쿼리 없이 객체 중심의 도메인 설계를 통해, 추천 알고리즘 구현 자체에 집중할 수 있는 환경 마련.",
        "Google Vision AI: 자체 모델 학습 비용을 절감하고, 상용 API의 높은 정확도(Dominant Color 추출)를 활용하여 '색상 매핑 알고리즘' 개발에 집중하는 전략 채택.",
        "MySQL: 다대다(N:M) 관계인 사용자와 의류 데이터를 명확한 스키마로 관리하고, 추천 쿼리의 조인 성능을 고려하여 RDBMS 채택.",
      ],
      implementation: [
        "색상 추출 파이프라인: Google Vision AI로 의류 이미지의 Dominant Color(RGB)를 추출하고, 미리 정의된 12가지 퍼스널 컬러 타입의 대표 색상값과 유클리디안 거리를 계산하여 가장 가까운 타입으로 자동 태깅.",
        "기상청 데이터 캐싱: 기상청 API의 응답 속도 불안정 문제를 해결하기 위해, 1시간 단위로 날씨 정보를 조회하여 Redis(또는 인메모리)에 캐싱하고, 사용자 요청 시 캐시된 데이터를 기반으로 추천 카테고리 필터링.",
      ],
      implementationImage: colorFinderSubject,
      troubleshooting: [
        {
          title: "🎨 Vision AI가 추출한 RGB 값이 DB 색상 표본과 일치하지 않는다",
          items: [
            "문제: Google Vision AI로 의류 이미지의 Dominant Color(RGB)를 추출해 퍼스널 컬러 타입을 분류하려 했으나, 추출된 RGB 값이 DB 표본과 정확히 일치하지 않아 타입 분류 실패 발생.",
            "원인: 색상 매핑 로직이 RGB 값의 완전 일치 비교에 의존하는 구조. 실제 이미지에서 추출된 색상은 조명·이미지 압축 등의 영향으로 실험실 표본 값과 픽셀 단위 차이가 발생함.",
            "해결: 완전 일치 비교 대신 3차원 RGB 공간의 유클리디안 거리(Euclidean Distance) 공식 도입.\n12가지 퍼스널 컬러 타입 각각의 대표 RGB 표본과 추출된 색상 간 거리를 계산해 가장 가까운 타입으로 자동 분류.",
            "결과: 색상 타입 분류 성공률 98% 달성.",
          ],
        },
        {
          title: "🌤️ 기상청 API 직접 호출이 매 요청마다 메인 페이지를 느리게 만든다",
          items: [
            "문제: 메인 페이지 로드 시 기상청 단기 예보 API를 직접 호출하면서 평균 로딩 시간이 1.5s에 달하는 문제 발생.",
            "원인: 사용자 요청마다 실시간으로 외부 기상청 API를 호출하는 구조. 기상청 서버의 응답 속도가 불규칙해 지연이 그대로 메인 페이지 로딩 시간에 반영됨.",
            "해결: API 호출 결과를 서버 메모리(Local Cache)에 캐싱.\n스케줄러로 1시간 단위 자동 갱신. 이후 사용자 요청은 외부 API 대신 캐시된 날씨 데이터를 기반으로 의류 카테고리 필터링.",
            "결과: 메인 페이지 로딩 1.5s → 0.2s. 기상청 API 장애 시에도 캐시 데이터로 서비스 정상 유지.",
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
        "외부 AI API를 비즈니스 로직에 통합하는 과정에서 데이터 전처리(RGB 보정)의 중요성 체감.",
        "단순한 기능 구현을 넘어, '나에게 어울리는 색'이라는 사용자 가치를 기술적으로 해결하는 과정이 즐거웠음.",
        "기상청 API 장애 상황에 대한 예외 처리(Fallback) 로직의 필요성 인지.",
      ],
    },
  },
  {
    title: "가상화 기반 우주 통신망 연동 및 사이버 위협 연구",
    period: "2023.04.01 ~ 2023.10.31",
    type: "산학 과제 (3인)",
    role: "위성 시뮬레이터 환경 구축 및 문제 해결",
    shortDescription: "클라우드 기반 NOS3 위성 통신망 시뮬레이션 환경 구축 및 분석",
    description:
      "NASA의 오픈소스 위성 시뮬레시연 플랫폼 NOS3를 기반으로, 가상 인공위성-지상국(GS)-사용자 환경을 클라우드에서 재현하기 위한 연구형 테스트베드. 핵심 목표는 우주 통신망 연동 구조를 가상화 환경에서 검증하고, 사이버 위협 대응 실험이 가능한 기본 실행 환경 마련. NOS Engine, cFS, 42, COSMOS 등 구성요소를 중심으로 통신/운영 흐름을 분석하고 클라우드에서 재현 가능한 형태로 정리. ([연구 보고서](https://drive.google.com/file/d/1wtzY7gHgHmb1sj4i1sMoRnfpqYnxw1jh/view?usp=sharing))",
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
      "클라우드 서버에서 VirtualBox 중첩 가상화 제약을 우회할 수 있는 설치 절차 검토·정리.\nNOS3 installer(MIN/COSMOS/CUSTOM)와 빌드/실행 스크립트(Build/Run/Stop/Clean) 실행 순서 문서화.\nRuby(Nokogiri) 의존성 및 경로 하드코딩 이슈를 수정해 주요 설치 실패 원인 감소.\n로컬 VM 기반 설치와 클라우드 기반 설치를 비교 정리해 재현 가능한 실험 환경 구축에 기여.",
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
        "클라우드 이식 경로 재정의: NOS3 공식 설치(Vagrant 기반)와 클라우드 환경 제약 비교 분석 → VM 없이 구동 가능한 installer 직접 실행 방식으로 전환",
        "자동 프로비저닝 구성: NCloud Server Init Script로 필수 패키지 설치 자동화 + MIN → COSMOS → CUSTOM 순서 설치 스크립트화",
        "원격 GUI 접속 환경 구축: xrdp 기반 원격 데스크톱 구성으로 클라우드 서버에서 COSMOS·시뮬레이터 화면 직접 관측 가능",
        "의존성·경로 오류 수정: Nokogiri gem 버전 고정(1.12.5) 및 빌드 스크립트 하드코딩 경로 교정으로 설치-실행 파이프라인 안정화",
      ],
      techAndReason: [
        "NOS3/cFS/42/COSMOS: 비행 소프트웨어와 시뮬레이터, 지상국 구성요소를 함께 다뤄 우주 통신망 실험 환경 구성에 적합.",
        "NCloud Init Script: 서버 생성 시 초기 스크립트를 자동 실행할 수 있어 수동 설정 편차를 줄이고 반복 설치에 유리.",
        "Shell Script: MIN/COSMOS/CUSTOM 및 Build/Run/Stop/Clean 작업을 명령 단위로 표준화해 재현 가능한 운영 절차 마련.",
        "xrdp: 클라우드 리눅스 서버에 GUI 접근을 제공해 시뮬레이터 관찰 및 데모 진행 효율 향상.",
      ],
      implementation: [
        "기존 설치 경로 분석: 로컬 환경 기준 절차(`git clone` -> `submodule init/update` -> `/deployment` 설정 -> `vagrant up`)를 분해해 클라우드에서 대체 가능한 단계와 불가능한 단계 구분.",
        "클라우드 설치 자동화: NCloud 서버 생성 시 Init Script를 적용하고, `~/nos3/support/installers/ubuntu`에서 MIN -> COSMOS -> CUSTOM 순으로 설치 스크립트화.",
        "빌드/실행 표준화: `~/Desktop`의 `nos3-build.sh`, `nos3-run.sh`, `nos3-stop.sh`, `nos3-clean.sh` 실행 순서를 작업 가이드로 정리해 운영 실수 최소화.",
        "구성요소 구조 문서화: cFS APPS, CFE/OSAL, HWLIB, LIBA3200/LIBA3200NOS, NOS Engine Client/Server의 역할을 정리해 팀 내부 지식 자산 확보.",
      ],
      troubleshooting: [
        {
          title: "🛸 클라우드의 중첩 가상화 제약이 NOS3 기본 설치를 불가능하게 만든다",
          items: [
            "문제: NOS3 공식 설치 절차는 VirtualBox VM 생성을 전제로 하는데, 이미 가상화된 클라우드 서버에서 동일한 방식을 시도하자 설치 자체가 실패.",
            "원인: 클라우드 서버는 하이퍼바이저 위에서 실행되므로 그 위에 다시 VirtualBox를 올리는 중첩 가상화가 제약됨. NOS3 공식 절차가 로컬 환경만을 전제로 설계된 구조.",
            "해결: Vagrant·VirtualBox 의존 단계를 제거하고, installer 스크립트(MIN → COSMOS → CUSTOM)를 클라우드 서버에서 직접 실행하는 방식으로 설치 경로 재정의.\nNCloud Init Script로 필수 패키지 설치를 자동화하고, xrdp로 원격 GUI 접속 환경까지 구성.",
            "결과: VM 생성 없이 NOS3 구성요소를 클라우드 서버에서 직접 구동 성공. 재현 가능한 설치 절차 문서화.",
          ],
        },
        {
          title: "📦 Ruby 의존성과 경로 하드코딩이 설치 파이프라인을 중단시킨다",
          items: [
            "문제: COSMOS 설치 스크립트 실행 시 Nokogiri 미설치·버전 불일치로 Ruby 의존성 오류 발생. 이후 빌드·실행 스크립트에서도 경로 불일치로 실행이 중단.",
            "원인: 스크립트가 특정 버전의 Nokogiri gem을 전제하지만 명시적으로 설치하지 않음. 설치 스크립트와 빌드 스크립트가 서로 다른 경로 구조를 가정하는 하드코딩 구조.",
            "해결: COSMOS 설치 스크립트에 gem install nokogiri -v 1.12.5를 추가해 버전 고정.\nnos3-build.sh 등 빌드·실행 스크립트 내 경로를 실제 서버 디렉토리 구조에 맞게 수정.",
            "결과: Ruby 의존성 설치 실패 제거 및 Build → Run → Stop → Clean 파이프라인 정상화. 팀 전체 재현 가능한 운영 절차 확보.",
          ],
        },
      ],
      retrospective: [
        "오픈소스 시뮬레이터를 다른 인프라에 이식할 때는 기능 구현보다 설치 체계와 의존성 정리가 우선임을 인지.",
        "클라우드 Init Script 기반 자동화가 반복 배포 안정성과 팀 협업 속도에 직접적인 영향을 준다는 것을 확인.",
      ],
    },
  },
];

export const education: EducationItem[] = [
  {
    school: "삼성 청년 SW·AI 아카데미 (SSAFY)",
    period: "2025.07 ~ 2026.06",
    degree: "14기 교육생",
    description: "알고리즘 및 웹 개발 심화 과정",
    organizer: "삼성전자",
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
    organizer: "한남대학교",
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

export const awards: AwardItem[] = [
  {
    name: "우수상",
    competition: "캡스톤 디자인 대회",
    organization: "한남대학교",
    date: "2024.06.10",
  },
];
