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
  shortDescription: "인증 없이는 멈추지 않는 집착형 복약 관리 및 AI 성분 분석 플랫폼",
  description:
    "복약 인증 기반으로 지속적인 복용을 유도하고, AI 성분 분석 리포트를 제공하는 스마트 복약 관리 앱\n\n사용자가 복용 중인 영양제를 등록하면 성분표 OCR과 AI 리포트를 통해 중복·과다 섭취 위험을 분석하고, 복약 시간이 지나도 인증되지 않은 기록에는 FCM 기반 재알림을 반복 발송하여 당일 복용을 끝까지 유도함. Spring Boot 백엔드, FastAPI AI 서버, React Native 앱, Docker Compose 기반 배포 환경을 연결해 복약 인증, 재고 차감, 재구매 알림까지 이어지는 모바일 헬스케어 흐름을 구현함. ([GitHub 저장소](https://github.com/go-ring/DDOYA), [Notion](https://www.notion.so/30cd6fafcbd280cca50dd1845138d5c3), [실제 화면](https://drive.google.com/drive/folders/1neonqMLU7-53-WhoPH_Fy7Od50LgdMzL), [발표 자료](https://drive.google.com/drive/folders/1zKLDYEJUsuZqS0tlo_Ish4N73Ht9loAb?usp=sharing))",
  tech: [
    "[Backend] Java 21, Spring Boot 3.5, JPA, QueryDSL",
    "[Database] MySQL, Redis",
    "[Infra / DevOps] Docker, Nginx, Jenkins, Vercel, Kibana",
    "[AI] OpenAI, FastAPI, YOLOv8, Clova OCR",
    "[협업 도구] GitLab, Jira, Notion, Mattermost"
  ],
  impact:
    "Jenkins 기반 변경 감지 CI/CD를 구축해 단일 서버 변경 시 이미지 빌드·푸시 대상 50% 감소, 전체 배포 작업량 약 30~50% 절감 추정\n" +
    "이미지 버전 관리 및 배포 검증 자동화로 장애 대응 시간 약 30~60% 단축(추산)\n" +
    "FCM 알림 처리 비동기화로 사용자 요청과 알림 서비스 간 결합도 감소\n" +
    "알림 대상자의 FCM 토큰을 한 번에 조회하도록 개선하여 DB 조회 횟수 최대 99% 감소",
  images: {
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
      "집착형 복약 독촉 시스템 : 복약 시간이 지났지만 미섭취 상태인 영양제를 스케줄러가 1분 단위로 조회하고, 인증 전까지 복용 알림을 반복 발송",
      "AI 기반 정밀 복약 인증 : 사용자가 찍은 섭취 인증 사진에서 YOLOv8로 알약 객체를 검출하고, DINOv2 임베딩·보조 특징 기반 매칭으로 실제 복용 대상과 탐지 결과를 대조",
      "개인 맞춤형 영양 분석 리포트 : OCR로 추출한 영양제 성분과 사용자 복용 목록을 바탕으로 성분 과잉·부족, 상호작용, 섭취 타이밍, 추천 제품을 리포트로 제공",
      "실시간 재고 및 재구매 알림 : 복약 인증 성공 시 영양제 재고를 차감하고, 재고 임계치 이하에 도달하면 사용자 알림 설정을 확인한 뒤 재구매 푸시 발송",
    ],
    roleAndContribution: [
      "FCM 기반 푸시 알림 도메인 설계: DeviceToken, NotificationDeliveryLog, NotificationType, PushSendResult를 중심으로 기기 토큰 등록/비활성화, 발송 결과, 알림 이력을 분리해 추적 가능한 알림 모델 구축",
      "섭취 알림 재발송 스케줄러 구현: IntakeNotificationScheduler와 NotificationProcessorService를 통해 매 1분마다 미복용 기록을 조회하고, 마지막 발송 로그 기준으로 55초 이상 지난 경우에만 다음 회차 알림 발송",
      "챙김 알림 및 재구매 알림 연동: 외출 전 영양제 챙김 알림과 재고 10개 이하 재구매 알림을 NotificationFacade로 통합하고, 사용자 수신 설정과 개별 영양제 재고 알림 설정을 함께 검증",
      "활성 기기 벌크 조회 및 예외 격리: 알림 대상자의 활성 디바이스 토큰을 한 번에 조회해 발송 불가능 대상을 선제 스킵하고, 개별 FCM 실패가 전체 스케줄러 루프를 중단시키지 않도록 처리",
      "Docker Compose 기반 운영 구성: MySQL, FastAPI AI 서버, Spring Boot 백엔드 컨테이너의 healthcheck와 depends_on 조건을 구성해 서비스 기동 순서를 안정화하고 Jenkins에서 백엔드/AI 이미지를 빌드·푸시·배포하도록 연결",
    ],
    roleAndContributionImages: {
      1: [intakeAlarm, intakeComplete],
      2: stockAlarm,
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
      "푸시 알림은 단순히 Firebase API를 호출하는 기능이 아니라, 언제 누구에게 다시 보내야 하는지와 보내지 말아야 하는지를 기록으로 통제해야 하는 도메인이라는 점을 체감함. NotificationDeliveryLog와 attemptNo를 두면서 알림도 추적 가능한 비즈니스 이벤트로 설계하는 관점을 얻음.",
      "스케줄러는 작은 예외 하나가 전체 배치 흐름을 멈출 수 있어, 활성 기기 사전 필터링과 개별 발송 예외 격리가 중요했음. 성공·실패·스킵을 분리 집계하는 방식으로 운영 시 원인 파악이 쉬운 구조를 만드는 경험을 함.",
      "AI 서버와 백엔드 서버를 컨테이너 단위로 분리하면서 모델 로딩이 필요한 FastAPI와 사용자 요청을 처리하는 Spring Boot의 생명주기를 따로 관리하는 필요성을 배움. healthcheck 기반 기동 순서와 Jenkins 배포 흐름을 통해 인프라가 애플리케이션 안정성에 직접 영향을 준다는 점을 확인함.",
    ],
  },
};
