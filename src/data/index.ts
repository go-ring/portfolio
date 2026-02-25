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
      "GitHub 코드 분석 기반의 올인원 개발자 취업 솔루션. '개발자는 코드로 말하고 싶은데, 기업은 자소서를 원한다'는 채용의 병목 문제를 해결하기 위해 탄생.\n\nGitHub 레포지토리(실제 커밋/코드)와 기업의 최신 데이터(DART 공시, Perplexity AI)를 교차 분석하여, 기술 역량 기반 공고 매칭과 근거 있는 자기소개서 작성을 자동화. 범용 LLM의 할루시네이션(Hallucination) 문제를 극복하고, SSAFY 취업 컨설턴트 자문을 반영한 증거 중심 커리어 솔루션. ([시연 영상](https://drive.google.com/drive/folders/1aGZ_1izpcS2EAyXRVqEqdvG3YkIelbkJ?usp=sharing), [발표 자료](https://drive.google.com/drive/folders/1YyTF5Y8VIFfN4SU8AqsdHednnqFg9xkn?usp=sharing))",
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
        "모니터링 시스템 구축: Prometheus + Grafana + Loki를 연동해 서버 메트릭·애플리케이션 로그·트래픽을 단일 대시보드에서 통합 관제. 장애 발생 시 로그 스택 트레이스를 수 초 내 추적 가능한 환경 마련",
        "Redis 기반 블랙리스트 자동 차단 시스템: 모니터링 지표 기반으로 비정상 접근(4xx 반복)을 감지 → RedisTemplate Atomic Counter로 카운트 → 임계치 초과 시 Spring Security 진입 전 즉시 403 차단 + TTL 자동 해제 ([BlackListServiceImpl.java](https://github.com/go-ring/baekgu/blob/master/backend/baekgu/src/main/java/ssafy/project/baekgu/auth/service/impl/BlackListServiceImpl.java))",
        "GitLab CI/CD 파이프라인 구축: 코드 푸시 → 자동 빌드·테스트·배포 흐름 구성. Docker Compose 서비스 분리 전략으로 backend 재배포 시 AI 워커(FastAPI) 컨테이너 무중단 유지",
        "WebSocket/STOMP 채팅 서버 구현: SimpMessagingTemplate 기반 Pub/Sub 메시징 구조 적용. 채팅방 목록 조회의 N+1 문제를 QueryDSL Projections.constructor + 서브쿼리로 해결 → 1.5s → 50ms ([ChatRoomQueryRepositoryImpl.java](https://github.com/go-ring/baekgu/blob/master/backend/baekgu/src/main/java/ssafy/project/baekgu/chat/repository/query/ChatRoomQueryRepositoryImpl.java))",
      ],
      techAndReason: [
        "Spring Boot + FastAPI 분리: 비즈니스 로직(Spring)과 AI 연산(FastAPI)의 부하를 격리하여, AI 작업의 CPU 집약적 연산이 사용자 API 응답 속도에 영향을 주지 않도록 부하 격리 설계.",
        "Redis (보안 & 캐싱): 블랙리스트 판별을 모든 API 요청마다 수행해야 했기 때문에, Disk I/O가 발생하는 MySQL 대신 Microsecond 단위 응답이 가능한 In-Memory 저장소 Redis 선택. TTL 기능으로 자동 차단 해제 구현.",
        "WebSocket + STOMP: 채팅 구현 시 HTTP Polling은 메시지 유무에 관계없이 매초 ~800byte 헤더를 주고받아 트래픽의 90% 이상을 낭비. WebSocket은 최초 핸드셰이크 후 연결을 유지하여 헤더 오버헤드 없이 Payload만 교환.",
        "Git Clone (vs GitHub API): GitHub Contents API는 파일당 1건의 요청을 소비해 Rate Limit(5,000건/시간)이 빠르게 소진. git clone은 단 1번의 명령으로 전체 코드를 가져오며, Rate Limit 미소비.",
      ],
      implementation: [
        "IP 바인딩 JWT: 토큰 발급 시 클라이언트 IP를 암호화하여 Payload에 포함하고, JwtAuthenticationTokenFilter에서 매 요청마다 실제 IP와 대조. 세션 하이재킹 원천 차단.",
        "Redis Atomic Counter 블랙리스트: 비정상 접근(4xx 에러 반복) 감지 시 RedisTemplate.opsForValue().increment()로 카운트 증가, 임계치 초과 시 Spring Security 필터 진입 전 즉시 403 차단.",
        "채팅 N+1 최적화: '방 목록(1) + 안 읽은 메시지 수(N) + 상대 프로필(N) + 마지막 메시지(N)' 패턴을 Projections.constructor와 서브쿼리를 활용한 단일 QueryDSL 쿼리로 해결. 1만 건 이상 데이터에서도 50ms 미만 유지 ([시연 영상](https://drive.google.com/drive/folders/1aGZ_1izpcS2EAyXRVqEqdvG3YkIelbkJ?usp=sharing)).",
        "결함 허용(Fault-Tolerant) AI 파이프라인 — 이중 방어선: [1차] docker-compose.prod.yml에서 backend·fastapi 간 depends_on 없이 독립 컨테이너로 분리, Spring 배포가 FastAPI 수명 주기에 물리적으로 영향 없음. [2차] orchestrator.py의 notify_spring()에서 Spring 콜백을 try-except-pass로 감싸, Progress 40% → 100% 각 단계 보고가 실패해도 파이프라인은 계속 진행. 분석 결과는 FastAPI가 MySQL에 직접 db.commit()으로 저장하여 Spring 재시작 후에도 사용자가 정상 조회 가능 ([발표자료 참고](https://drive.google.com/drive/folders/1YyTF5Y8VIFfN4SU8AqsdHednnqFg9xkn?usp=sharing)).",
        "데이터 수집 파이프라인: DART OpenAPI로 기업 공시 데이터 추출, Perplexity sonar-pro로 최신 뉴스 수집, GitHub API로 커밋 이력 수집, git clone으로 전체 소스 분석, Playwright로 자소설닷컴 공고(네트워크 인터셉트 방식) 크롤링.",
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
        "\"기능 구현은 시작일 뿐, 완성은 운영에서 결정된다\": AI 분석이라는 Long-running Task가 배포 전략 전체를 바꿔야 했던 경험에서 아키텍처 설계의 중요성 체감.",
        "트레이드오프의 이해: Redis나 WebSocket이 항상 정답은 아님. 데이터 중요도, 실시간성 요구, 서버 리소스를 종합적으로 고려하여 적정 기술 선택 안목 함양.",
        "Observability의 가치: Loki + Prometheus를 직접 세팅하며, 로그와 메트릭 없는 장애 추적은 눈을 감고 운전하는 것과 같음을 체감.",
      ],
    },
  },
  {
    title: "ColorFinder",
    type: "팀 프로젝트 (3인)",
    description:
      "사용자의 안면 색상 데이터를 분석하여 퍼스널 컬러를 진단하고, 날씨와 성별, 퍼스널 컬러에 맞는 맞춤형 의류를 추천하는 지능형 커머스 플랫폼.\n\n단순한 의류 쇼핑몰을 넘어, '톤그로(Tone-aggro)' 없는 의류 소비 경험을 제공하기 위해 개발. Google Vision AI를 활용하여 의류의 색상을 정밀하게 추출하고, 잭슨의 'Color Me Beautiful' 이론을 기반으로 구축한 데이터셋과 유클리디안 거리 알고리즘을 통해 의류의 퍼스널 컬러 타입을 자동 분류.\n\n기상청 API를 연동하여 실시간 기온에 적합한 의류 카테고리를 추천하고, 사용자의 퍼스널 컬러와 매칭되는 상품을 우선 노출하는 개인화 알고리즘 구현. ([기술 블로그](https://velog.io/@goring/ColorFinder-%EC%95%88%EB%A9%B4-%EC%83%89%EC%83%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B8%B0%EB%B0%98-%ED%8D%BC%EC%8A%A4%EB%84%90-%EC%BB%AC%EB%9F%AC-%EC%A7%84%EB%8B%A8-%EB%B0%8F-%EB%A7%9E%EC%B6%A4%ED%98%95-%EC%9D%98%EB%A5%98-%EC%B6%94%EC%B2%9C-%EC%87%BC%ED%95%91%EB%AA%B0-24ev5oqu), [발표 자료](https://drive.google.com/drive/folders/1q-xnMK3-20LDLs3RK-RJZiYkG4TAeYd4?usp=sharing))",
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
      preview: colorFinderPreview,
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
    description:
      "NASA의 오픈소스 위성 시뮬레이션 플랫폼 NOS3를 기반으로, 가상 인공위성-지상국(GS)-사용자 환경을 클라우드에서 재현하기 위한 연구형 테스트베드. 핵심 목표는 우주 통신망 연동 구조를 가상화 환경에서 검증하고, 사이버 위협 대응 실험이 가능한 기본 실행 환경 마련. NOS Engine, cFS, 42, COSMOS 등 구성요소를 중심으로 통신/운영 흐름을 분석하고 클라우드에서 재현 가능한 형태로 정리. ([연구 보고서](https://drive.google.com/file/d/1wtzY7gHgHmb1sj4i1sMoRnfpqYnxw1jh/view?usp=sharing))",
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
    school: "Samsung SW·AI Academy For Youth (SSAFY)",
    period: "2025.08 ~ 현재",
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
