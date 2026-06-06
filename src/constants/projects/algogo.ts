import type { Project } from '@/types/project';
import algogoMain from "@/assets/images/algogo/main.gif";

export const algogo: Project = {
    title: "알고가자(Algogo)",
    type: "팀 프로젝트 (5인)",
    period: "2025.11.20 ~ 2026.01.20 (9주)",
    role: ["Backend & Infra"],
    shortDescription: "알고리즘 스터디 운영 자동화 및 강제적 코드 리뷰 규칙을 통합한 스터디 관리 플랫폼",
    description:
      "리뷰가 학습이 되는 알고리즘 스터디\n\n" +
      "제출 잠금 기반 **강제 리뷰 시스템**과 **AI 코드 평가**로\n" +
      "코드 공유 및 피드백 문화를 만드는 **스터디 관리** 플랫폼",
    tech: [
      "[Backend] Java 17, Spring Boot 3.3, JPA / QueryDSL, MySQL, Redis",
      "[Infra / DevOps] Docker, Nginx, Jenkins, Vercel, Kibana",
      "[AI] OpenAI, G-Eval",
      "[협업 도구] GitLab, Notion, Mattermost"
    ],
    impact:
      "AI 코드 평가로 수동 리뷰 대비 평가 시간 약 **80~90% 단축(추산)**\n" +
      "배포 자동화로 배포 시간 약 70% 단축(추산), **중단 없는 서비스 구축**\n" +
      "공통 로직 분리로 코드 중복 감소 및 **유지보수 비용 절감(추산 30% 이상)**\n" +
      "실제 사용자 수십 명 규모 확보 및 실제 코드 리뷰·평가 기능 사용 검증",
    images: {
      main: algogoMain
    },
    links: {
      repo: "https://github.com/team-algogo/algogo_server.git",
      notion: "https://www.notion.so/2688c963ea8b80d88bf7e79182feeccc",
      proof: "https://drive.google.com/drive/folders/1whFJSQOZUTy8wNHKJbOnCMuwldX32LXF?usp=sharing",
    },
    details: {
      roleAndContribution: [
        "Infra: ▪ Docker 기반 마이크로서비스 아키텍처 구축\n▪ Docker Multi-stage Build 및 권한 분리 적용\n▪ Jenkins CI/CD 기반 자동 빌드·배포 환경 구축\n▪ Jenkins · Nginx 기반 Blue-Green 무중단 배포 파이프라인 구축\n▪ AWS S3 · CloudFront 기반 정적 자산 서빙 환경 구축",
        "Backend: ▪ 문제집 · 코드 리뷰 도메인 API 설계 및 개발",
        "AI: ▪ OpenAI Logprobs 기반 G-Eval 코드 평가 시스템 설계 및 구현"
      ],
      techAndReason: [
        "Blue-Green 배포: 단일 운영 서버(EC2) 한계상 롤링 배포가 불가능한 환경에서, 신/구 버전을 동시 기동 후 Nginx 라우팅을 전환하여 완벽한 롤백 지점 확보 및 무중단 배포(0 Downtime) 달성",
        "S3 + CloudFront: 다수의 문제집 이미지 등 정적 에셋 서빙 시 발생하는 EC2 대역폭 부하를 분산시키기 위해 도입. CDN 엣지 캐싱을 통해 오리진(API 서버)을 완전한 무상태(Stateless) 기반 구조로 전환",
        "Docker 캐싱 & Non-root: CI 빌드 시 종속성 레이어 캐싱을 적용해 소요 시간을 극대화하여 단축하고, 런타임 이미지는 최소 권한의 appuser(10001)로 실행시켜 호스트 OS와의 권한 상승(Privilege Escalation) 보안 취약점 사전 차단",
        "Spring Event + @Async (OpenAI): GPT API의 수 초 단위 응답 대기 시간 동안 메인 트랜잭션이 유지되며 발생하는 DB 커넥션 풀(HikariCP) 고갈 및 데드락을 원천 차단하기 위해, 애플리케이션 이벤트를 활용한 논리적 스레드 분리",
      ],
      implementation: [
        "알고리즘 문제 풀이 및 제출 이력 통합 관리",
        "제출 잠금(Lock) 기반 강제 코드 리뷰 학습 구조 제공",
        "OpenAI Logprobs 기반 G-Eval 확률 모델로 코드 품질 평가 및 피드백 제공",
        "코드 라인 단위 리뷰 및 Thread 기반 토론 기능 지원",
        "그룹 스터디 운영 자동화 및 활동 현황 관리",
        "개인별 학습 데이터 분석 및 성장 지표 시각화",
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
        "기능 구현을 넘어 장애 상황에서도 안정적으로 동작하는 **무중단 배포 아키텍처 설계 경험 축적**",
        "Docker 빌드 최적화와 권한 분리를 적용하며 성능과 보안을 균형 있게 고려하는 **인프라 설계 역량 함양**",
        "비동기 이벤트와 트랜잭션 격리를 통해 외부 서비스 장애가 내부 시스템으로 전파되지 않는 **안정적인 시스템 구조 설계**",
        "데이터베이스와 클라우드 환경의 병목을 분석·개선하며 **근거 기반의 성능 최적화 역량 강화**"
      ],
    },
};
