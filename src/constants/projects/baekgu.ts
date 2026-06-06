import type { Project } from '@/types/project';
import baekguMain from "@/assets/images/baekgu/main.gif";
import baekguArch from "@/assets/images/baekgu/architecture.png";
import baekguCardPreview from "@/assets/images/baekgu/baekgu.png";

export const baekgu: Project = {
  title: "백구(BAEKGU)",
  type: "팀 프로젝트 (6인)",
  period: "2026.01.19 ~ 2026.02.06 (3주)",
  role: ["Backend & Infra"],
  shortDescription: "사용자 GitHub 기반 공고 추천 및 자소서 작성 지원 플랫폼",
  description:
    "기업의 재무/뉴스 데이터(DART, Nate)와 개발자의 기술 경험(GitHub, 포트폴리오)을 AI로 교차 분석하여, 사용자와 핏한 공고 매칭과 자기소개서 작성을 돕는 AI 채용/구직 플랫폼\n\n" +
    "구직자의 코드로 도출한 객관적 기술 역량과 DART/뉴스 기반의 기업 성장성 데이터를 통합 분석함. 단순 공고 추천을 넘어 지원자의 기술 지표가 반영된 '근거 중심(Evidence-based) 자기소개서' 생성을 지원하여 취업 시장의 정보 비대칭 문제를 해결함. ([시연 영상](https://drive.google.com/drive/folders/1aGZ_1izpcS2EAyXRVqEqdvG3YkIelbkJ?usp=sharing), [발표 자료](https://drive.google.com/drive/folders/1YyTF5Y8VIFfN4SU8AqsdHednnqFg9xkn?usp=sharing))",
  tech: [
    "[Backend] Java 17, Spring Boot 3.2, JPA, QueryDSL",
    "[Database] MySQL, Redis",
    "[Infra / DevOps] Docker, Nginx, GitLab CI/CD, Prometheus / Grafana / Loki",
    "[AI] FastAPI, OpenAI, PaddleOCR, Playwright, BeautifulSoup, Pandas, NumPy",
    "[External Services] GitHub API, Perplexity API, DART/OpenDART, Toss Payments",
    "[협업 도구] GitLab, Jira, Notion, Mattermost"
  ],
  impact:
    "복잡한 다중 관계가 있는 채팅방 목록 조회 시 발생하는 N+1 문제를 해결하여, 쿼리 응답 속도를 1.2s에서 50ms 수준으로 최적화\n" +
    "CPU 점유율이 높은 AI 연산(정규표현식, OCR)을 비동기 워커로 분리하여, 다수 유저 분석 시에도 메인 웹 서버 가용성 100% 유지\n" +
    "매 요청마다 DB를 찌르던 블랙리스트 검증을 Redis로 이관, 악성 사용자 차단 필터 속도를 약 30ms → 2ms(90% 향상)로 단축해 Disk I/O 병목 해소",
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
      "공고 · 채팅 · 자소서 도메인 API 설계 및 구현: SYNONYM 기반 공고 매칭 로직, WebSocket 기반 실시간 채팅, LLM 연동 자소서 생성 지원 등 서비스 주요 비즈니스 도메인 개발",
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
      "사용자 개발 역량 정밀 분석 : GitHub 커밋 빈도, 코드 기여도 등 실질적 활동 데이터를 기반으로 핵심 기술 역량을 객관적으로 도출 (Git Clone & LLM 분석)",
      "지능형 기업 데이터 분석 : DART(재무제표)와 실시간 뉴스(비즈니스 트렌드)를 결합하여 기업의 안정성 및 성장성을 정밀 검증 (Perplexity AI 연동)",
      "AI 맞춤형 공고 매칭 : 분석된 사용자 역량과 실시간 채용 데이터를 온톨로지 기반 기술 매칭 시스템으로 정합하여 최적의 커리어 경로 및 추천 근거 제시",
      "데이터 기반 자소서 자동 작성 : 역량-공고-기업 분석 데이터를 종합하여 구체적 실적 근거(Evidence) 중심의 고품질 자기소개서 생성",
      "실시간 직무 소통 네트워크 : WebSocket 및 STOMP 기반 오픈채팅 시스템을 통한 지원자 및 현직자 간의 투명한 정보 공유 지원",
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
}
