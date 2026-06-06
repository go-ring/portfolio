import type { Project } from '@/types/project';
import baekguMain from "@/assets/images/baekgu/main.gif";
import baekguArch from "@/assets/images/baekgu/architecture.png";
import baekguCardPreview from "@/assets/images/baekgu/baekgu.png";

export const baekgu: Project = {
  title: "백구(BAEKGU)",
  type: "팀 프로젝트 (6인)",
  period: "2026.01.19 ~ 2026.02.06 (3주)",
  role: ["Backend & Infra"],
  shortDescription: "기업의 재무/뉴스 데이터와 개발자의 기술 경험(GitHub, 포트폴리오) 기반 사용자와 공고 추천 및 자기소개서 작성을 돕는 AI 구직 플랫폼",
  description:
    "개발자 맞춤형 AI 취업 도우미 플랫폼\n\n" +
    "사용자 GitHub 기반 **역량 분석** 결과와\n" +
    "**기업 공고·재무 데이터 분석** 결과를 결합하여,\n" +
    "**채용 공고 추천 및 자기소개서 작성** 지원",
  tech: [
    "[Backend] Java 17, Spring Boot 3.2, JPA / QueryDSL, MySQL, Redis",
    "[Infra / DevOps] Docker, Nginx, GitLab CI/CD, Prometheus / Grafana / Loki",
    "[AI] FastAPI, OpenAI, PaddleOCR, Playwright, BeautifulSoup, Pandas, NumPy",
    "[External Services] GitHub API, Perplexity API, DART/OpenDART, Toss Payments",
    "[협업 도구] GitLab, Jira, Notion, Mattermost"
  ],
  impact:
    "▪ N+1 문제 해결로 채팅방 목록 조회 성능 **1.2초 → 50ms 개선**\n" +
    "▪ AI 분석 작업 비동기화로 대량 요청 환경에서도 **서버 가용성 유지**\n" +
    "▪ Redis 캐싱 도입으로 블랙리스트 검증 속도 **30ms → 2ms 개선** 및 DB 부하 감소",
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
      "Infra: ▪ GitLab CI/CD 기반 자동 배포 파이프라인 구축\n▪ Redis 기반 비정상 요청 차단 시스템 구현 (블랙리스트 관리)\n▪ Prometheus·Grafana·Loki 기반 통합 모니터링 구축",
      "Backend: ▪ FastAPI-Spring 비동기 통신 구조 설계 및 구현\n▪ 공고 · 채팅 · 자소서 API 설계 및 개발",
      "Frontend: ▪ 채팅 도메인 UI/UX 구현"
    ],
    techAndReason: [
      "Spring Boot + FastAPI 분리 (부하 격리): 무거운 AI 연산이 웹 API 응답을 지연시키지 않도록, I/O 처리(Spring)와 AI 연산(FastAPI) 서버를 물리적으로 격리하여 시스템 안정성 확보.",
      "Redis (보안 및 캐싱): 매 요청마다 발생하는 DB 조회 병목을 차단. Atomic Increment 연산을 지원하는 인메모리 Redis를 도입해 비정상 트래픽을 지연 없이 실시간 차단.",
      "WebSocket + STOMP (트래픽 최적화): 무거운 HTTP 헤더를 반복 교환하는 Polling의 한계를 극복. WebSocket과 STOMP 채널 라우팅을 도입해 빠르고 효율적인 채팅 비동기 통신망 구축.",
      "Git Clone (API Rate Limit 우회): 파일당 1회를 소모하는 GitHub API의 호출 한계를 피하기 위해 `git clone` 방식을 채택. 단 1회의 네트워크 호출로 대용량 코드 수집 한계 극복.",
    ],
    implementation: [
      "GitHub·포트폴리오를 분석하여 개발자의 핵심 역량 도출",
      "재무 데이터(DART)와 기업 뉴스(Perplexity API)를 분석하여 기업 정보 수집 및 분석",
      "사용자 역량과 기업 요구사항을 비교하여 맞춤형 공고 추천",
      "기업 분석을 바탕으로 맞춤형 자기소개서 작성 지원",
      "실시간 취업 정보 공유 커뮤니티 제공",
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
      "AI 서비스 개발 과정에서 장애 상황에서도 서비스가 지속될 수 있도록 설계하는 **Fault-Tolerant 아키텍처의 중요성 체감**",
      "Redis, WebSocket 등 기술을 단순히 도입하는 것이 아니라 성능 지표와 병목 원인을 근거로 선택하는 **데이터 중심의 의사결정 방식 학습**",
      "N+1 문제와 성능 병목을 분석·해결하는 과정에서 로그와 메트릭 기반으로 원인을 추적하며 문제를 끝까지 해결하는 **집요한 문제 해결 태도 배양**"
    ],
  },
}
