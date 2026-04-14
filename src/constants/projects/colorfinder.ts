import type { Project } from '@/types/project';
import colorFinderSubject from "@/assets/images/colorfinder/subject.png";
import colorFinderArch from "@/assets/images/colorfinder/architecture.png";
import colorFinderPreview from "@/assets/images/colorfinder/preview.gif";

export const colorfinder: Project = {
    title: "ColorFinder",
    type: "팀 프로젝트 (3인)",
    shortDescription: "안면 색상 데이터 기반 퍼스널 컬러 진단 및 맞춤형 의류 추천 지능형 커머스 플랫폼",
    description:
      "사용자의 안면 색상 데이터를 분석하여 퍼스널 컬러를 진단하고, 실시간 기온 및 개인별 스타일 데이터를 결합하여 최적의 의류를 추천하는 풀스택 이커머스 플랫폼입니다.\n\nOpenCV와 LAB 색상 공간 분석을 통한 정밀 진단 시스템을 구축하였으며, 기상청 API를 연동한 실시간 기온 대응 추천 알고리즘을 구현했습니다. 단순한 쇼핑몰을 넘어 '나에게 가장 잘 어울리는 스타일'을 기술적으로 제안하는 개인화 경험을 제공합니다.",
    tech: [
      "Java 17",
      "Python 3.11",
      "Spring Boot 3.2.5",
      "Flask",
      "JPA / QueryDSL",
      "MySQL 8.0",
      "OpenCV & NumPy",
      "KMA API (Weather)",
      "Google Vision AI",
      "REST API",
    ],
    period: "2024.04.08 ~ 2024.06.10 (10주)",
    role: "백엔드 개발 및 진단 알고리즘 설계",
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
      main: colorFinderPreview,
    },
    details: {
      roleAndContribution: [
        "LAB 분석 기반 퍼스널 컬러 진단 로직: OpenCV를 활용해 안면 이미지의 LAB 색상 공간 중 'b' 채널(Yellow-Blue)을 분석, 피부톤의 웜/쿨 속성을 판별하여 4계절 타입으로 자동 분류하는 알고리즘 구현",
        "기상청 API 연동 실시간 기온 수집: 공공데이터포털 초단기예보 API를 활용하여 사용자의 현재 위치(또는 기준 좌표) 기온 데이터를 실시간 수집 및 반영하고 효율적인 API 호출을 위한 캐싱 전략 수립",
        "기온 및 컬러 맞춤형 의류 필터링: 현재 기온(5도 단위)과 진단된 퍼스널 컬러 속성을 조합하여 사용자에게 최적화된 의류 카테고리를 자동 필터링하는 개인화 추천 엔진 구축",
        "풀스택 이커머스 엔진 구축: 상품 검색, 정렬(가격순/신상품순), 장바구니, 주소지 관리, 주문 및 결제 프로세스를 포함한 쇼핑 플랫폼의 전반적인 백엔드 아키텍처 구현",
        "개인화된 스타일 가이드: 개인별 퍼스널 컬러 진단 기록과 이전 주문 내역을 실시간으로 관리하고 조회할 수 있는 사용자 중심의 마이페이지 플랫폼 개발",
      ],
      techAndReason: [
        "OpenCV & Flask: 정밀한 색상 공간 분석(LAB)과 이미지 처리를 위해 Python 생태계를 활용하고, 가벼운 Flask 서버를 통해 Spring Boot와 마이크로서비스 형태로 연동.",
        "Spring Boot & JPA: 결제 및 주문과 같은 복잡한 비즈니스 로직의 트랜잭션 안전성을 보장하고, 객체 지향적인 데이터 모델링을 위해 채택.",
        "KMA API: 외부 환경(기온) 정보를 실시간으로 반영하여 서비스의 신뢰도와 추천 정확도를 높이기 위해 활용.",
        "Google Vision AI: 의류 상품 등록 시 Dominant Color를 자동으로 추출하여 퍼스널 컬러 메타데이터를 정밀하게 태깅하기 위한 도구로 활용.",
      ],
      implementation: [
        "LAB b-채널 분석 알고리즘: RGB 대비 조명 변화에 강건한 LAB 색상 공간을 채택. 특히 'b' 채널의 평균값을 분석하여 옐로우 베이스(웜)와 블루 베이스(쿨)를 명확히 구분하는 수치적 판단 기준 수립.",
        "기온 대응 추천 필터링: 기상청 API로부터 받은 실시간 기온을 5도 간격으로 범주화하여 T-셔츠부터 코트까지 적절한 의류 카테고리를 동적으로 매칭.",
      ],
      implementationImage: colorFinderSubject,
      troubleshooting: [
        {
          title: "🎨 조명에 따른 안면 색상 데이터의 왜곡 문제",
          items: [
            "문제: 동일인이라도 실내/실외 조명에 따라 추출되는 RGB 값이 크게 달라져 퍼스널 컬러 진단의 일관성이 떨어지는 현상 발생.",
            "원인: RGB 색상 공간은 조도의 영향을 과도하게 받아 휘도(L) 성분이 색상 성분과 분리되지 않음.",
            "해결: 색상 분석을 RGB에서 LAB 공간으로 전환. 명도(L) 성분을 제외하고 'b' 채널(황색-청색 방향)의 수치 변화만을 추적하여 조명 변화에 관계없이 일관된 웜/쿨 판별 기준 마련.",
            "결과: 다양한 조명 환경에서의 진단 재현성 향상 및 진단 정확도 개선.",
          ],
        },
        {
          title: "🌤️ 외부 API 호출 지연에 따른 페이지 로딩 성능 저하",
          items: [
            "문제: 메인 페이지 접속 시 기상청 API를 직접 호출하면서 평균 응답 시간이 1.5s 이상 지연되는 문제 발생.",
            "원인: 실시간 기온 수집을 위한 외부 네트워크 요청이 동기 방식으로 처리되어 전체 렌더링 지연 유발.",
            "해결: 서버 메모리를 활용한 캐싱 도입. 기온 데이터는 30분 주기로 자동 갱신하고, 사용자 요청 시 캐시된 데이터를 즉시 반환하여 외부 의존성 제거.",
            "결과: 메인 페이지 로딩 속도 1.5s → 0.2s로 약 86% 단축 및 안정적 서비스 제공.",
          ],
        },
      ],
      testing: [
        "JUnit5와 Mockito를 활용한 서비스 레이어 단위 테스트 작성",
        "Postman을 통한 RESTful API 엔드포인트 검증 및 성능 측정",
        "42명의 실제 사용자를 대상으로 한 퍼스널 컬러 진단 정확도 및 추천 만족도 테스트 진행",
      ],
      refactoringPlan: [
        "추천 알고리즘 고도화: Collaborative Filtering을 도입하여 색상/기온 정보 외에 사용자간 취향 유사도 반영",
        "인프라 확장: MSA 구조로 분리된 Flask와 Spring Boot 간의 통신 효율을 위해 Kafka 또는 gRPC 도입 고려",
        "모바일 최적화: 반응형 웹을 넘어 네이티브 앱 수준의 사용자 경험을 위한 PWA 적용",
      ],
      retrospective: [
        "사용자가 느끼는 실질적인 가치(나에게 어울리는 색)를 기술적으로 해결하며 서비스의 핵심 경쟁력을 구축하는 경험을 함.",
        "기상청, Vision AI 등 복합적인 외부 API를 조화롭게 통합하며 시스템의 안정성과 예외 처리의 중요성을 깨달음.",
        "AI 파이프라인과 백엔드 서버 간의 유기적인 연동 과정에서 명확한 인터페이스 설계의 필요성을 실감.",
      ],
    },
  };
