import type { Project } from '@/types/project';
import colorFinderSubject from "@/assets/images/colorfinder/subject.png";
import colorFinderArch from "@/assets/images/colorfinder/architecture.png";
import colorFinderPreview from "@/assets/images/colorfinder/preview.gif";

export const colorfinder: Project = {
  title: "ColorFinder",
  type: "팀 프로젝트 (3인)",
  period: "2024.04.08 ~ 2024.06.10 (10주)",
  role: ["Frontend & Backend"],
  shortDescription: "안면 색상 분석 기반 퍼스널 컬러 진단 및 실시간 기온 대응 패션 커머스 플랫폼",
  description:
    "안면 색상 데이터 기반 퍼스널 컬러 진단 및 맞춤형 의류 추천 쇼핑몰\n\n단순한 쇼핑 서비스를 넘어 OpenCV 기반의 정밀 색상 분석 기술과 공공데이터 API를 결합하여 '나에게 어울리지 않는 색(톤그로)'에 대한 고민을 기술적으로 해결함. 퍼스널 컬러와 기상 데이터를 연동한 개인화 추천 엔진을 구축하고, 상품 검색부터 결제까지 이르는 풀스택 커머스 아키텍처를 구현함. ([기술 블로그](https://velog.io/@goring/ColorFinder-%EC%95%88%EB%A9%B4-%EC%83%89%EC%83%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B8%B0%EB%B0%98-%ED%8D%BC%EC%8A%A4%EB%84%90-%EC%BB%AC%EB%9F%AC-%EC%A7%84%EB%8B%A8-%EB%B0%8F-%EB%A7%9E%EC%B6%A4%ED%98%95-%EC%9D%98%EB%A5%98-%EC%B6%94%EC%B2%9C-%EC%87%BC%ED%95%91%EB%AA%B0-24ev5oqu), [논문/발표자료](https://drive.google.com/drive/folders/1bd-zl9_SLAwJEby6GwKhnktTmCHTSj5l?usp=sharing))",
  tech: [
    "[Backend] Java 17, Spring Boot 3.3, JPA, MySQL",
    "[AI] Flask, OpenCV, NumPy",
    "[협업 도구] GitLab, Notion"
  ],
  impact:
    "한남대학교 캡스톤 경진대회 우수상 수상(2024)\n" +
    "스마트미디어 추계학술대회 학술 논문 발표\n" +
    "외부 API 호출 구간에 캐싱 전략을 적용하여 데이터 로딩 속도를 1.5s에서 0.2s로 단축\n" +
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
      "색상 추출 파이프라인 구현: Google Vision AI로 의류 이미지의 Dominant Color(RGB) 추출 → 유클리디안 거리 기반 퍼스널 컬러 타입 자동 태깅. 분류 성공률 98% 달성",
      "퍼스널 컬러 DB 설계: 잭슨의 Color Me Beautiful 이론 기반 12가지 타입 표본 데이터 구축 및 RGB 색상 매핑 로직 설계",
      "날씨 기반 추천 필터링: 기상청 단기 예보 API 연동, 실 실시간 기온 기반 의류 카테고리 필터링 + 30분 단위 캐싱으로 메인 페이지 로딩 1.5s → 0.2s ([기술 블로그](https://velog.io/@goring/ColorFinder-%EC%95%88%EB%A9%B4-%EC%83%89%EC%83%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B8%B0%EB%B0%98-%ED%8D%BC%EC%8A%A4%EB%84%90-%EC%BB%AC%EB%9F%AC-%EC%A7%84%EB%8B%A8-%EB%B0%8F-%EB%A7%9E%EC%B6%A4%ED%98%95-%EC%9D%98%EB%A5%98-%EC%B6%94%EC%B2%9C-%EC%87%BC%ED%95%91%EB%AA%B0-24ev5oqu))",
      "REST API 설계 및 구현: 회원·상품·주문·결제 도메인 Spring Boot 백엔드 API 개발 (Controller → Service → Repository 레이어 구조)",
    ],
    roleAndContributionImages: {
      0: colorFinderSubject,
    },
    techAndReason: [
      "OpenCV & Flask (진단 서버 분리): Python 기반 Flask 서버에서 OpenCV LAB 색상 공간 분석을 수행하고, Spring Boot는 WebClient로 이미지 분석 요청을 위임하도록 구성하여 진단 로직과 커머스 API의 책임을 분리.",
      "Spring Boot & JPA (커머스 도메인 구현): 회원, 상품, 장바구니, 주문, 배송지 도메인을 Controller-Service-Repository 구조로 구현하고, Spring Data JPA를 통해 엔티티 영속성과 기본 CRUD 흐름을 안정적으로 처리.",
      "KMA API 연동 (날씨 기반 추천): 기상청 초단기예보 API를 직접 호출해 현재 기온을 수집하고, 상품의 계절/기온 속성 및 사용자의 퍼스널 컬러 정보를 조합해 맞춤형 의류 추천 로직에 반영.",
      "MySQL 8.0 (관계형 데이터 관리): 사용자, 퍼스널 컬러, 상품, 장바구니, 주문, 주소 데이터를 MySQL 스키마와 JPA 엔티티로 관리하고, 커머스 흐름에 필요한 조회와 저장을 관계형 모델 기반으로 구현.",
    ],
    implementation: [
      "LAB 분석 기반 퍼스널 컬러 진단 : OpenCV와 LAB 색상 공간의 'b' 채널 분석을 통해 사용자의 피부톤을 4계절 타입으로 자동 분류",
      "기상청 API 연동 실시간 기온 수집 : 공공데이터포털의 초단기예보 API를 활용하여 기온 데이터 실시간 수집 및 반영",
      "기온 및 퍼스널 컬러 맞춤형 의류 필터링 : 현재 기온(5도 단위)과 진단된 퍼스널 컬러 속성을 조합하여 사용자에게 최적화된 의류 카테고리를 자동 필터링",
      "풀스택 이커머스 엔진 구축 : 상품 검색, 정렬(가격순/신상품순), 장바구니, 주소지 관리, 주문 및 결제 프로세스를 포함한 쇼핑 플랫폼 구현",
    ],
    troubleshooting: [
      {
        title: "🎨 RGB 원본값 대신 LAB 색상 공간으로 진단 기준을 재설계",
        items: [
          "문제: 사용자 업로드 이미지의 색상값은 조명, 카메라, 배경의 영향을 받아 단순 RGB 기준만으로 퍼스널 컬러를 안정적으로 판별하기 어려웠음.",
          "원인: RGB는 밝기와 색상 성분이 함께 섞여 있어 피부 톤처럼 미세한 색감 차이를 비교할 때 기준값이 흔들릴 수 있고, Java/Spring Boot 서버 내부에서 이미지 처리까지 담당하면 커머스 도메인과 진단 로직이 강하게 결합되는 구조가 됨.",
          "해결: 진단 로직을 Python Flask 서버로 분리하고, OpenCV로 이미지를 BGR에서 LAB 색상 공간으로 변환한 뒤 b 채널 평균값을 계산하도록 구현.\n계산된 값은 사전 구축한 4계절 퍼스널 컬러 기준 데이터셋과 비교해 가장 가까운 타입으로 매핑하고, Spring Boot는 WebClient로 분석 요청과 결과 수신만 담당하도록 역할을 분리.",
          "결과: 이미지 분석 파이프라인과 커머스 API의 책임을 분리해 Python/OpenCV 기반 진단 로직을 독립적으로 실험·수정할 수 있는 구조를 만들고, 진단 결과를 사용자 퍼스널 컬러 정보 및 추천 흐름에 연결함.",
        ],
      },
      {
        title: "🌤️ 기상청 XML 응답을 개인화 상품 추천 조건으로 연결",
        items: [
          "문제: 단순 퍼스널 컬러 추천만으로는 실제 착용 상황을 반영하기 어려워, 현재 기온을 기반으로 오늘 입기 좋은 상품을 추천하는 흐름이 필요했음.",
          "원인: 기상청 초단기예보 API는 XML 응답 안에 여러 예보 항목을 제공하며, 추천에 필요한 기온 값은 T1H 카테고리로 분리되어 있어 상품 도메인의 temp 속성과 별도 매핑이 필요했음.",
          "해결: 공공데이터포털 기상청 API를 직접 호출하고 XML 응답에서 가장 가까운 예보 시각의 T1H 기온 값을 추출.\n추출한 기온을 5도 단위 구간으로 정규화한 뒤, 상품의 temp 속성과 사용자의 퍼스널 컬러 colorId를 함께 비교해 추천 리스트를 필터링하도록 구현.",
          "결과: 외부 공공 API 데이터를 단순 표시용 정보가 아니라 상품 추천 알고리즘의 입력값으로 전환하여, 날씨와 퍼스널 컬러를 동시에 반영하는 개인화 커머스 추천 흐름을 구현함.",
        ],
      },
    ],
    testing: [

    ],
    refactoringPlan: [
      "AI 모델 정교화: 단순 LAB 분석을 넘어 딥러닝 기반 안면 랜드마크 추출을 통한 국소 영역 색상 분석 고도화",
      "Microservices Architecture: Flask와 Spring 간의 메시지 큐(Kafka) 도입으로 데이터 동기화 안정성 강화",
      "인프라 자동화: Docker 및 Kubernetes 도입을 통한 컨테이너 기반 무중단 배포 환경 구축 고려",
    ],
    retrospective: [
      "기술과 일상의 접점에서 '사용자 가치'를 고민했던 경험임. 단순히 AI 기술을 사용해보는 것에 그치지 않고, 퍼스널 컬러라는 주관적 개념을 LAB 공간 수치 분석이라는 객관적 지표로 치환하여 신뢰성 있는 서비스를 구현하는 과정에서 엔지니어로서의 보람을 느낌.",
      "복합적인 외부 인프라(기상청, Vision AI 등)를 서비스에 통합하며 예외 처리와 성능 최적화의 중요성을 체감함. 특히 캐싱 도입을 통한 성능 86% 개선 경험은 데이터 기반의 빠른 응답성이 사용자 경험에 미치는 파급력을 확인하는 계기가 됨.",
      "백엔드 시스템 설계 시 '확장성'과 '격리'의 필요성을 실감함. Python(AI)과 Java(Business)를 독립된 서버로 분리하여 각 도메인에 최적화된 프로그래밍 언어를 선택했던 전략이 시스템 전체의 유지보수성을 크게 향상시켰음을 깨달음.",
    ],
  },
};
