import type { Project } from '@/types/project';
import colorFinderSubject from "@/assets/images/colorfinder/subject.png";
import colorFinderArch from "@/assets/images/colorfinder/architecture.png";

export const colorfinder: Project = {
    title: "ColorFinder",
    type: "팀 프로젝트 (3인)",
    shortDescription: "안면 색상 데이터 기반 퍼스널 컬러 진단 및 맞춤형 의류 추천 플랫폼",
    description:
      "사용자의 안면 색상 데이터를 분석하여 퍼스널 컬러를 진단하고, 날씨와 성별, 퍼스널 컬러에 맞는 맞춤형 의류를 추천하는 지능형 커머스 플랫폼.\n\n단순한 의류 쇼핑몰을 넘어, '톤그로(Tone-aggro)' 없는 의류 소비 경험을 제공하기 위해 개발. Google Vision AI를 활용하여 의류의 색상을 정밀하게 추출하고, 잭슨의 'Color Me Beautiful' 이론을 기반으로 구축한 데이터셋과 유클리디안 거리 알고리즘을 통해 의류의 퍼스널 컬러 타입을 자동 분류.\n\n기상청 API를 연동하여 실시간 기온에 적합한 의류 카테고리를 추천하고, 사용자의 퍼스널 컬러와 매칭되는 상품을 우선 노출하는 개인화 알고리즘 구현. ([기술 블로그](https://velog.io/@goring/ColorFinder-%EC%95%88%EB%A9%B4-%EC%83%89%EC%83%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B8%B0%EB%B0%98-%ED%8D%BC%EC%8A%A4%EB%84%90-%EC%BB%AC%EB%9F%AC-%EC%A7%84%EB%8B%A8-%EB%B0%8F-%EB%A7%9E%EC%B6%A4%ED%98%95-%EC%9D%98%EB%A5%98-%EC%B6%94%EC%B2%9C-%EC%87%BC%ED%95%91%EB%AA%B0-24ev5oqu), [발표 자료](https://drive.google.com/drive/folders/1q-xnMK3-20LDLs3RK-RJZiYkG4TAeYd4?usp=sharing))",
    tech: [
      "Java 17",
      "Python 3.11",
      "Spring Boot 3.2.5",
      "Flask",
      "JPA / QueryDSL",
      "MySQL 8.0",
      "Google Vision AI",
      "OpenCV & NumPy",
      "KMA API (Weather)",
      "Selenium",
      "REST API",
    ],
    period: "2024.04.08 ~ 2024.06.10 (10주)",
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
  }
