import type { Project } from '@/types/project';
import colorFinderSubject from "@/assets/images/colorfinder/subject.png";
import colorFinderArch from "@/assets/images/colorfinder/architecture.png";
import colorFinderPreview from "@/assets/images/colorfinder/preview.gif";

export const colorfinder: Project = {
  title: "ColorFinder",
  type: "팀 프로젝트 (3인)",
  period: "2024.04.08 ~ 2024.06.10 (10주)",
  role: ["Backend & AI"],
  shortDescription: "사용자 안면 색상 데이터 기반 퍼스널 컬러 진단, 실시간 기온을 결합한 맞춤형 의류 추천 쇼핑몰",
  description:
    "나에게 어울리는 옷을 추천하는 쇼핑몰\n\n" +
    "**퍼스널 컬러 진단**과 **실시간 기상 데이터**를 결합하여\n" +
    "사용자에게 최적화된 **의류를 추천**하는 패션 커머스 플랫폼",
  tech: [
    "[Backend] Java 17, Spring Boot 3.3, JPA, MySQL",
    "[AI] Flask, OpenCV, NumPy",
    "[협업 도구] GitLab, Notion"
  ],
  impact:
    "한남대학교 캡스톤 경진대회 우수상 수상(2024)\n" +
    "스마트미디어 추계학술대회 학술 논문 발표\n" +
    "외부 API 호출에 캐싱을 적용하여 데이터 로딩 속도를 1.5s에서 0.2s로 단축\n" +
    "베타 테스터 만족도 4.7점 달성",
  shortImpact:
    "한남대학교 캡스톤 경진대회 우수상 수상(2024)\n" +
    "스마트미디어 추계학술대회 학술 논문 발표\n" +
    "베타 테스터 만족도 4.7점 달성",
  images: {
    architecture: colorFinderArch,
    main: colorFinderPreview,
  },
  links: {
    repo: "https://github.com/chaeha617/capstone_colorfinder",
    blog: "https://velog.io/@goring/ColorFinder-%EC%95%88%EB%A9%B4-%EC%83%89%EC%83%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B8%B0%EB%B0%98-%ED%8D%BC%EC%8A%A4%EB%84%90-%EC%BB%AC%EB%9F%AC-%EC%A7%84%EB%8B%A8-%EB%B0%8F-%EB%A7%9E%EC%B6%A4%ED%98%95-%EC%9D%98%EB%A5%98-%EC%B6%94%EC%B2%9C-%EC%87%BC%ED%95%91%EB%AA%B0-24ev5oqu",
    paper: "https://drive.google.com/drive/folders/1bd-zl9_SLAwJEby6GwKhnktTmCHTSj5l?usp=sharing",
    presentation: "https://drive.google.com/drive/folders/1q-xnMK3-20LDLs3RK-RJZiYkG4TAeYd4?usp=sharing",
    award: "https://drive.google.com/drive/folders/1oh4o9QwShnQzbdlVRr-fSeyHb0qUrMeH?usp=sharing",
  },
  details: {
    roleAndContribution: [
      "Backend: ▪ 날씨 기반 의류 추천 및 상품 필터링 기능 개발\n▪ 기상청 API 연동 및 캐싱 기반 추천 시스템 구현\n▪ 회원 · 상품 · 주문 · 결제 도메인 API 설계 및 개발",
      "AI: ▪ Google Vision AI 기반 의류 색상 추출 및 퍼스널 컬러 분류 기능 구현\n▪ 12가지 퍼스널 컬러 타입 데이터셋 및 색상 매핑 로직 설계"
    ],
    roleAndContributionImages: {
      1: colorFinderSubject,
    },
    techAndReason: [
      "OpenCV & Flask (진단 서버 분리): Python 기반 Flask 서버에서 OpenCV LAB 색상 공간 분석을 수행하고, Spring Boot는 WebClient로 이미지 분석 요청을 위임하도록 구성하여 진단 로직과 커머스 API의 책임을 분리.",
      "Spring Boot & JPA (커머스 도메인 구현): 회원, 상품, 장바구니, 주문, 배송지 도메인을 Controller-Service-Repository 구조로 구현하고, Spring Data JPA를 통해 엔티티 영속성과 기본 CRUD 흐름을 안정적으로 처리.",
      "KMA API 연동 (날씨 기반 추천): 기상청 초단기예보 API를 직접 호출해 현재 기온을 수집하고, 상품의 계절/기온 속성 및 사용자의 퍼스널 컬러 정보를 조합해 맞춤형 의류 추천 로직에 반영.",
    ],
    implementation: [
      "OpenCV 기반 사용자 안면 색상 분석을 통한 퍼스널 컬러 진단",
      "LAB 색상 공간 분석을 활용한 4계절 톤 분류",
      "기상청 API 연동을 통한 실시간 기온 데이터 수집",
      "기온 및 퍼스널 컬러 기반 맞춤형 의류 추천",
      "상품 검색, 장바구니, 주문 및 결제를 포함한 이커머스 기능 제공"
    ],

    testing: [

    ],
    refactoringPlan: [
      "AI 모델 정교화: 단순 LAB 분석을 넘어 딥러닝 기반 안면 랜드마크 추출을 통한 국소 영역 색상 분석 고도화",
      "Microservices Architecture: Flask와 Spring 간의 메시지 큐(Kafka) 도입으로 데이터 동기화 안정성 강화",
      "인프라 자동화: Docker 및 Kubernetes 도입을 통한 컨테이너 기반 무중단 배포 환경 구축 고려",
    ],
    retrospective: [
      "주관적인 퍼스널 컬러 개념을 데이터 기반으로 분석하며 기술을 **사용자 가치로 연결하는 경험 축적**",
      "캐싱과 외부 API 최적화를 적용하며 **빠른 응답성이 서비스 품질에 미치는 영향 체감**",
      "AI와 비즈니스 로직을 분리한 구조를 설계하며 **확장 가능한 시스템 아키텍처의 중요성 학습**"
    ],
  },
};
