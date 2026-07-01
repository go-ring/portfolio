import type { Project } from '@/types/project';
import ddoyaArch from "@/assets/images/ddoya/architecture.png";
import intakeAlarm from "@/assets/images/ddoya/features/섭취알람.jpg";
import intakeComplete from "@/assets/images/ddoya/features/섭취완료.jpg";
import stockAlarm from "@/assets/images/ddoya/features/재고알람.jpg";
import dailyRoutine from "@/assets/images/ddoya/features/데일리섭취루틴.jpg";
import reportNutrient from "@/assets/images/ddoya/features/레포트_성분과잉부족_1.jpg";
import routineRecommend from "@/assets/images/ddoya/features/섭취루틴영양체추천.jpg";

export const ddoya: Project = {
  title: "DDOYA (또야)",
  type: "팀 프로젝트 (6인)",
  period: "2026.02.23 ~ 2026.03.29 (5주)",
  role: ["Backend & Infra"],
  shortDescription: "복약 인증 기반으로 지속적인 복용을 유도하고, AI 성분 분석 리포트를 제공하는 스마트 복약 관리 앱",
  description:
    "복약을 끝까지 챙기는 스마트 영양제 관리\n\n" +
    "**AI 성분 분석**과 **복약 인증**을 통해\n" +
    "건강한 복약 습관 형성을 돕는 **모바일 헬스케어** 플랫폼",
  tech: [
    "[Backend] Java 21, Spring Boot 3.5, JPA / QueryDSL, MySQL, Redis",
    "[Infra / DevOps] Docker, Nginx, Jenkins, Vercel, Kibana",
    "[AI] OpenAI, FastAPI, YOLOv8, Clova OCR",
    "[협업 도구] GitLab, Jira, Notion, Mattermost"
  ],
  impact:
    "▪ 변경 감지 기반 Jenkins CI/CD 구축으로 불필요한 빌드·배포 작업 **30~50% 절감(추산)**\n" +
    "▪ 배포 검증 자동화를 통해 **운영 안정성 향상 및 장애 대응 시간 단축**\n" +
    "▪ FCM 알림 비동기 처리로 **서비스 간 결합도 감소**\n" +
    "▪ FCM 토큰 일괄 조회 구조로 **DB 조회 횟수 최대 99% 감소**",
  shortImpact: "",
  images: {
    overviewLayout: 'mobile',
    architecture: ddoyaArch,
    overviewGallery: [dailyRoutine, reportNutrient, routineRecommend],
  },
  links: {
    repo: "https://github.com/go-ring/DDOYA",
    notion: "https://www.notion.so/30cd6fafcbd280cca50dd1845138d5c3",
    proof: "https://drive.google.com/drive/folders/1neonqMLU7-53-WhoPH_Fy7Od50LgdMzL",
    presentation: "https://drive.google.com/drive/folders/1zKLDYEJUsuZqS0tlo_Ish4N73Ht9loAb?usp=sharing",
  },
  details: {
    implementation: [
      "영양제 성분표 OCR 분석을 통한 복약 정보 자동 등록",
      "AI 기반 성분 분석으로 중복·과다 섭취 위험 및 맞춤형 리포트 제공",
      "복약 인증 전까지 반복 알림을 발송하는 집착형 복약 관리 시스템",
      "복약 기록 기반 재고 자동 차감 및 섭취 이력 관리",
      "재고 부족 시 FCM 기반 재구매 알림 제공"
    ],
    roleAndContribution: [
      "Infra: ▪ Docker 기반 마이크로서비스 아키텍처 구축\n▪ Docker Multi-stage Build 및 권한 분리 적용\n▪ Health Check 기반 서비스 의존성 관리\n▪ Jenkins CI/CD 기반 자동 빌드·배포 환경 구축",
      "Backend: ▪ 복약 알림 · 챙김 알림 · 재구매 알림 도메인 API 설계 및 개발\n▪ 반복 알림 스케줄링 및 알림 이력 관리 기능 구현"
    ],
    roleAndContributionImages: {
      1: [intakeAlarm, intakeComplete, stockAlarm],
    },
    techAndReason: [
      "Firebase Admin SDK & FCM: 모바일 기기의 FCM 토큰을 사용자 단위로 저장하고, 섭취/챙김/재구매 알림을 OS 푸시로 발송하기 위해 도입. 알림 타입을 data payload에 함께 넣어 클라이언트 라우팅까지 고려.",
      "Spring Scheduler: 복약 시간이 지난 MISSED 기록을 매 1분마다 검사하고 인증 전까지 반복 알림을 보내기 위해 사용. cron 스케줄과 로그 기반 재전송 게이트로 무차별 중복 발송을 방지.",
      "Spring Data JPA & MySQL 8.0: 섭취 스케줄, 섭취 기록, 사용자 알림 설정, FCM 토큰, 알림 발송 로그를 관계형 모델로 관리하고 Fetch Join 및 벌크 조회로 알림 처리 루프의 DB 접근을 줄임.",
      "FastAPI & AI Server: OCR, YOLOv8, DINOv2 임베딩, OpenAI 분석을 Spring Boot와 분리된 Python 서버에서 수행해 AI 모델 로딩과 비즈니스 API의 책임을 분리.",
      "Docker Compose & Jenkins: MySQL, AI, Backend를 컨테이너 단위로 분리하고 healthcheck 기반 의존 조건을 둔 뒤, Jenkins에서 변경 범위에 따라 백엔드/AI 이미지를 빌드·푸시·배포하도록 구성.",
    ],
    troubleshooting: [
      {
        title: "🔔 인증 전까지 반복되는 알림이 중복 폭탄이 되지 않도록 제어",
        items: [
          "문제: 집착형 복약 알림을 구현하려면 미복용 상태가 유지되는 동안 반복 푸시가 필요했지만, 단순 1분 스케줄러만 두면 같은 섭취 기록에 알림이 과도하게 중복 발송될 위험이 있었음.",
          "원인: 스케줄러는 매분 실행되고, FCM 발송 성공 여부와 마지막 발송 시각을 별도로 기록하지 않으면 동일 IntakeRecord가 매 루프마다 무조건 발송 대상으로 다시 잡히는 구조가 됨.",
          "해결: NotificationDeliveryLog에 발송 이력과 attemptNo를 저장하고, 다음 스케줄러 실행 시 intakeRecordId 기준 최근 로그를 조회해 마지막 발송 후 55초 이상 지난 경우에만 다음 회차 알림을 보내도록 게이트를 구현.",
          "결과: 인증 전까지 반복 독촉한다는 서비스 핵심 컨셉은 유지하면서도, 발송 이력 기반으로 재알림 간격과 회차를 통제할 수 있는 알림 파이프라인을 구축함.",
        ],
      },
      {
        title: "📱 활성 기기 없는 사용자가 스케줄러 처리량을 낭비하지 않도록 최적화",
        items: [
          "문제: 알림 대상자가 많아질수록 사용자별로 FCM 토큰을 매번 개별 조회하면, 실제 발송 가능한 기기가 없는 사용자까지 루프에서 비용을 발생시키는 문제가 생김.",
          "원인: 섭취 알림과 챙김 알림 모두 대상 스케줄을 먼저 조회한 뒤 사용자별 기기 토큰이 있는지 확인해야 하므로, 기기 확인을 개별 쿼리로 처리하면 스케줄러의 DB 접근이 쉽게 늘어남.",
          "해결: 대상 IntakeRecord 또는 IntakeSchedule에서 userId 집합을 먼저 만들고, DeviceTokenRepository의 userId IN 조건으로 활성 토큰을 벌크 조회하여 usersWithDevices 집합을 구성. 발송 전 이 집합에 없는 사용자는 즉시 스킵.",
          "결과: 발송 불가능한 사용자를 사전에 걸러 FCM 호출과 DB 조회 낭비를 줄이고, 개별 실패가 있어도 성공/실패/스킵 건수를 집계하며 전체 스케줄러 루프가 계속 돌도록 안정화함.",
        ],
      },
      {
        title: "💊 복약 인증과 재고 차감, 재구매 알림을 하나의 흐름으로 연결",
        items: [
          "문제: 복용 인증이 성공해도 재고가 별도로 관리되면 사용자가 남은 영양제 수량을 직접 확인해야 하고, 재구매 타이밍을 놓칠 수 있었음.",
          "원인: AI 인증 결과, 섭취 기록 상태 변경, 재고 차감, 재구매 알림은 서로 다른 도메인에 흩어져 있어 성공 조건과 알림 조건을 같은 트랜잭션 흐름에서 조심스럽게 연결해야 했음.",
          "해결: FastAPI 인증 결과가 기대 복용량과 일치해 TAKEN으로 전환되는 경우에만 재고를 차감하고, 차감 직후 RepurchaseNotificationService가 개별 영양제 알림 설정·전체 재고 알림 설정·재고 10개 이하 조건을 모두 확인한 뒤 FCM 재구매 알림을 발송하도록 구성.",
          "결과: 사용자의 사진 인증 액션 하나가 섭취 기록 갱신, 재고 반영, 재구매 알림까지 이어지는 자동화 흐름으로 확장되어 복약 관리 서비스의 체감 완성도를 높임.",
        ],
      },
    ],
    retrospective: [
      "알림 서비스를 설계하며 이벤트 이력과 상태를 관리하는 **도메인 설계 역량 배양**",
      "스케줄러 운영 과정에서 장애가 전체 흐름으로 확산되지 않는 **안정적인 처리 구조의 중요성 학습**",
      "컨테이너 기반 서비스 분리와 자동 배포 환경을 구축하며 **인프라가 애플리케이션 안정성에 미치는 영향 체감**"
    ],
  },
};
