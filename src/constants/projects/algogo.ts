import type { Project } from '@/types/project';
import algogoMain from "@/assets/images/algogo/main.gif";
import algogoCardPreview from "@/assets/images/algogo/algogo.png";

export const algogo: Project = {
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
  }
