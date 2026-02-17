export interface ProjectDetails {
  roleAndContribution?: string[];
  techAndReason?: string[];
  implementation?: string[];
  implementationImage?: string;
  troubleshooting?: {
    title: string;
    items: string[];
  }[];
  testing?: string[];
  refactoringPlan?: string[];
  retrospective?: string[];
}


import colorFinderSubject from '../resourse/colorfinder/subject.png';

import colorFinderArch from '../resourse/colorfinder/architecture.png';
import colorFinderPreview from '../resourse/colorfinder/preview.gif';

import nos3Main from '../resourse/artificialSatellite/main.bmp';
import nos3Arch1 from '../resourse/artificialSatellite/architecture1.bmp';
import nos3Arch2 from '../resourse/artificialSatellite/architecture2.bmp';

export interface Project {
  title: string;
  role: string | string[];
  description: string;
  tech: string[];
  impact?: string;
  links: {
    repo?: string;
    demo?: string;
    blog?: string;
    paper?: string;
    presentation?: string;
    proof?: string;
  };
  images?: {
    main?: string;
    architecture?: string | string[];
    preview?: string;
  };
  period: string;
  type: string; // Team Project, Personal Project, Paper
  details?: ProjectDetails;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  school: string;
  period: string;
  degree: string;
  gpa?: string;
  description?: string;
}

export interface CertificationItem {
  name: string;
  date: string;
  issuer?: string;
}

export interface ResearchItem {
  title: string;
  conference: string;
  date: string;
}

export const profile = {
  name: "이가은",
  enName: "Lee GaEun",
  birthdate: "2002.04.01",
  title: "Backend Developer",
  shortBio: "데이터와 논리적인 사고를 바탕으로 성장하는 백엔드 개발자입니다.", 
  education: "한남대학교 컴퓨터공학과 (졸업)",
  missionStatement: "깊이 있는 탐구와 끊임없는 도전을 통해 더 나은 소프트웨어를 만듭니다.",
  keywords: ["성실함", "책임감", "논리적사고", "협업", "성장"],
  about: [
    "한남대학교 컴퓨터공학과를 졸업하고, 현재 삼성 청년 SW 아카데미(SSAFY)에서 강도 높은 소프트웨어 엔지니어링 과정을 이수하고 있습니다.",
    "시스템 소프트웨어 공학 연구실에서의 연구 경험을 통해 데이터 분석 역량과 논리적 문제 해결 능력을 길렀습니다.",
    "안정적이고 확장 가능한 백엔드 시스템 구축을 목표로, 지속적인 학습과 실무 프로젝트를 통해 전문성을 강화하고 있습니다."
  ],
  social: {
    github: "https://github.com/go-ring",
    email: "mailto:dlrkdms001@gmail.com",
    blog: "https://velog.io/@goring/posts",
    linkedin: "" 
  }
};

export const skills: SkillGroup[] = [
  {
    category: "Language",
    items: ["Java", "Python", "C"]
  },
  {
    category: "Backend",
    items: ["Spring", "Spring Boot", "Spring Data JPA", "QueryDSL", "FastAPI"]
  },
  {
    category: "Data",
    items: ["MySQL", "Redis","ElasticSearch"]
  },
  {
    category: "DevOps",
    items: ["Git", "Docker", "AWS"]
  }
];

// Mapping "Papers/Thesis" & capstone projects to Projects for visibility
export const projects: Project[] = [
  {
    title: "ColorFinder",
    type: "팀 프로젝트 (3인)",
    description:
      "사용자의 안면 색상 데이터를 분석하여 퍼스널 컬러를 진단하고, 날씨와 성별, 퍼스널 컬러에 맞는 맞춤형 의류를 추천하는 지능형 커머스 플랫폼입니다.\n\n단순한 의류 쇼핑몰을 넘어, '톤그로(Tone-aggro)' 없는 의류 소비 경험을 제공하기 위해 개발되었습니다. Google Vision AI를 활용하여 의류의 색상을 정밀하게 추출하고, 잭슨의 'Color Me Beautiful' 이론을 기반으로 구축한 데이터셋과 유클리디안 거리 알고리즘을 통해 의류의 퍼스널 컬러 타입을 자동 분류합니다.\n\n또한 기상청 API를 연동하여 실시간 기온에 적합한 의류 카테고리를 추천하며, 사용자의 퍼스널 컬러와 매칭되는 상품을 우선적으로 노출하는 개인화 알고리즘을 구현했습니다.",
    tech: ["Java", "Spring Boot", "MySQL", "JPA", "Google Vision AI", "Python", "OpenCV", "Selenium"],
    period: "2024.01.13 ~ 2024.06.03",
    role: "백엔드 개발",
    impact:
      "한남대학교 캡스톤 경진대회 우수상 (2024)\n2024 스마트미디어 추계학술대회 학술 논문 발표 \n42명의 베타 테스터 대상 사용자 만족도 조사 결과, 5점 만점에 평균 4.7점 달성 (추천 정확도 92% 긍정)",
    links: {
      repo: "https://github.com/chaeha617/capstone_colorfinder",
      demo: "http://color-finder.site",
      blog: "https://velog.io/@goring/ColorFinder-%EC%95%88%EB%A9%B4-%EC%83%89%EC%83%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B8%B0%EB%B0%98-%ED%8D%BC%EC%8A%A4%EB%84%90-%EC%BB%AC%EB%9F%AC-%EC%A7%84%EB%8B%A8-%EB%B0%8F-%EB%A7%9E%EC%B6%A4%ED%98%95-%EC%9D%98%EB%A5%98-%EC%B6%94%EC%B2%9C-%EC%87%BC%ED%95%91%EB%AA%B0-24ev5oqu",
      paper: "https://drive.google.com/drive/folders/1bd-zl9_SLAwJEby6GwKhnktTmCHTSj5l?usp=sharing",
      presentation: "https://drive.google.com/drive/folders/1q-xnMK3-20LDLs3RK-RJZiYkG4TAeYd4?usp=sharing",
      proof: "https://drive.google.com/drive/folders/1oh4o9QwShnQzbdlVRr-fSeyHb0qUrMeH?usp=sharing"
    },
    images: {
      architecture: colorFinderArch,
      preview: colorFinderPreview
    },
    details: {
      roleAndContribution: [
        "Spring Boot 기반 백엔드 REST API 설계 및 구현 (회원/상품/주문/결제)",
        "Google Vision AI Properties API 연동 및 의류 색상 추출 로직 개발",
        "유클리디안 거리(Euclidean Distance) 기반 색상 유사도 분석 알고리즘 구현",
        "잭슨의 컬러 미 뷰티풀(Color Me Beautiful) 표본 데이터 DB 구축 및 매핑 로직 설계",
        "기상청 단기 예보 API 연동을 통한 실시간 기온 기반 의류 카테고리 필터링 구현"
      ],
      techAndReason: [
        "Spring Boot: 퍼스널 컬러 진단과 의류 추천이라는 복합적인 비즈니스 로직을 트랜잭션 단위로 안정적으로 처리하기 위해 선택했습니다.",
        "JPA (Hibernate): 복잡한 SQL 쿼리 없이 객체 중심의 도메인 설계를 통해, 추천 알고리즘 구현 자체에 집중할 수 있는 환경을 만들었습니다.",
        "Google Vision AI: 자체 모델 학습 비용을 절감하고, 상용 API의 높은 정확도(Dominant Color 추출)를 활용하여 '색상 매핑 알고리즘' 개발에 더 시간을 투자하는 전략을 취했습니다.",
        "MySQL: 다대다(N:M) 관계인 사용자와 의류 데이터를 명확한 스키마로 관리하고, 추천 쿼리의 조인 성능을 고려하여 RDBMS를 채택했습니다."
      ],
      implementation: [
        "색상 추출 파이프라인: Google Vision AI로 의류 이미지의 Dominant Color(RGB)를 추출하고, 미리 정의된 12가지 퍼스널 컬러 타입의 대표 색상값과 유클리디안 거리를 계산하여 가장 가까운 타입으로 자동 태깅했습니다.",
        "기상청 데이터 캐싱: 기상청 API의 응답 속도 불안정 문제를 해결하기 위해, 1시간 단위로 날씨 정보를 조회하여 Redis(또는 인메모리)에 캐싱하고, 사용자 요청 시 캐시된 데이터를 기반으로 추천 카테고리를 필터링했습니다."
      ],
      implementationImage: colorFinderSubject,
      troubleshooting: [
        {
          title: "AI 색상 추출 정확도 및 DB 매핑 문제",
          items: [
            "문제: Vision AI가 추출한 RGB 값과 DB에 저장된 퍼스널 컬러 표본 데이터가 정확히 일치하지 않아 매핑 실패 발생",
            "해결: 단순 일치 비교 대신, 3차원 RGB 공간에서의 유클리디안 거리(Euclidean Distance) 공식을 도입.",
            "결과: 추출된 색상과 가장 거리가 가까운 표본 데이터를 찾아내는 방식으로 개선하여 분류 성공률 98% 달성"
          ]
        },
        {
          title: "기상청 API 응답 지연으로 인한 메인 페이지 로딩 저하",
          items: [
            "문제: 외부 API(기상청) 호출 시간이 불규칙하여 메인 페이지 렌더링 속도에 영향을 줌",
            "해결: API 호출 결과를 서버 메모리(Local Cache)에 30분 단위로 캐싱하고, 스케줄러를 통해 주기적으로 갱신하도록 변경",
            "결과: 메인 페이지 로딩 속도를 평균 1.5초에서 0.2초로 단축"
          ]
        }
      ],
      testing: [
        "JUnit5와 Mockito를 활용한 서비스 레이어 단위 테스트 작성 (커버리지 70%)",
        "Postman을 활용한 API 엔드포인트 통합 테스트 수행",
        "42명의 베타 테스터를 대상으로 시나리오 기반 사용성 테스트(UT) 진행"
      ],
      refactoringPlan: [
        "추천 알고리즘 고도화: 단순 색상/기온 매칭을 넘어 사용자 선호 스타일을 반영한 협업 필터링 도입 고려",
        "대용량 트래픽 대응: Redis 캐시 서버 도입으로 조회 성능 추가 최적화",
        "CQRS 패턴 도입: 상품 조회와 주문 처리 로직 분리로 확장성 확보"
      ],
      retrospective: [
        "외부 AI API를 비즈니스 로직에 통합하는 과정에서 데이터 전처리(RGB 보정)의 중요성을 체감했습니다.",
        "단순한 기능 구현을 넘어, '나에게 어울리는 색'이라는 사용자 가치를 기술적으로 해결하는 과정이 즐거웠습니다.",
        "기상청 API 장애 상황에 대한 예외 처리(Fallback) 로직의 필요성을 배웠습니다."
      ]
    }
  },
  {
    title: "가상화 기반 우주 통신망 연동 및 사이버 위협 연구",
    period: "2023.04.01 ~ 2023.10.31",
    type: "산학 과제 (3인)",
    role: "위성 시뮬레이터 환경 구축 및 문제 해결",
    description: "국가보안기술연구소 의뢰로 NASA의 위성 시뮬레이터(NOS3)를 NCloud 환경에 구축하여, 가상 위성 통신망 연동 및 사이버 위협 대응 훈련이 가능한 테스트베드를 제공했습니다.",
    tech: ["NOS3", "Linux", "NCloud", "Shell", "C", "Ruby", "Git"],
    impact: "클라우드 환경에서의 이중 가상화 충돌 문제를 해결하고, 자동 프로비저닝(Cloud-Init) 도입으로 배포 시간을 단축하여 안정적인 훈련 기반을 마련했습니다.",
    images: {
      main: nos3Main,
      architecture: [nos3Arch1, nos3Arch2]
    },
    links: {
      proof: "https://drive.google.com/file/d/1wtzY7gHgHmb1sj4i1sMoRnfpqYnxw1jh/view?usp=sharing"
    },
    details: {
      roleAndContribution: [
        "NASA NOS3 아키텍처(NOS Engine, 42, cFS, AIT)를 분석하고, 로컬 VirtualBox 환경을 NCloud(Ubuntu 18.04) 상의 네이티브 실행 환경으로 마이그레이션했습니다.",
        "기존 Vagrant/VirtualBox 의존성을 제거하고, Cloud-Init Script를 활용하여 MIN(최소 설치), COSMOS, CUSTOM 스크립트 실행을 자동화했습니다.",
        "xrdp를 활용한 리눅스 GUI 원격 접속 환경을 구성하여, 시뮬레이터의 가시성을 확보하고 교육 접근성을 높였습니다.",
        "Ruby/Nokogiri 라이브러리 버전 호환성 문제와 스크립트 경로 하드코딩 오류를 디버깅하여 빌드 프로세스를 정상화했습니다."
      ],
      techAndReason: [
        "NOS3: 실제 위성 소프트웨어(cFS)와 하드웨어 모델을 통합 시뮬레이션할 수 있어, 사이버 위협 훈련에 적합하여 선정했습니다.",
        "NCloud: 국내 클라우드 서비스로 기술 지원이 신속하며, Init Script 기능을 통해 서버 프로비저닝을 자동화하기 용이해 선택했습니다.",
        "Shell Script & Cloud-Init: 복잡한 패키지 설치와 환경 설정을 코드화(IaC)하여, 인적 오류를 줄이고 반복 가능한 배포 환경을 만들었습니다."
      ],
      implementation: [
        "클라우드 네이티브 마이그레이션: NOS3의 Vagrantfile(루비)을 분석하여 VirtualBox 의존성을 제거하고, NCloud Ubuntu 18.04 환경에 맞는 의존성 설치 스크립트(Bash)로 재작성하여 네이티브 구동 환경을 구축했습니다.",
        "프로비저닝 자동화: Cloud-Init을 활용하여 서버 생성 시 필수 패키지 설치, 환경 변수 설정, NOS3 빌드 과정을 자동으로 수행하도록 하여 배포 시간을 단축했습니다.",
        "원격 시뮬레이션 환경 구성: Headless 클라우드 서버에 경량 데스크탑 환경(MATE/XFCE)과 xrdp를 설치하여, 로컬에서 위성 시뮬레이터(COSMOS, 42)의 GUI를 제어할 수 있는 시각화 환경을 구현했습니다."
      ],
      troubleshooting: [
        {
          title: "이중 가상화 충돌 및 VirtualBox 의존성 해결",
          items: [
            "문제: NOS3는 기본적으로 VirtualBox 위에서 가상머신으로 구동되도록 설계되었으나, 이미 가상화된 클라우드 VM 위에서는 중첩 가상화가 지원되지 않아 설치가 불가능했습니다.",
            "접근: Installer Script를 분석하여 VirtualBox/Vagrant 의존 코드를 식별하고, 클라우드 OS(Ubuntu 18.04)에 직접 패키지를 설치하도록 스크립트를 재작성했습니다.",
            "해결: 가상머신 생성 단계를 건너뛰고 필요한 라이브러리와 환경 변수만 호스트에 주입하는 방식을 적용하여 구동에 성공했습니다."
          ]
        },
        {
          title: "Ruby 라이브러리 및 하드코딩 경로 오류 수정",
          items: [
            "문제: COSMOS 지상국 시스템 빌드 시 Ruby Nokogiri 라이브러리 버전 불일치 오류와, 스크립트 내 하드코딩된 경로(~/Desktop vs ~/nos3) 불일치로 빌드가 실패했습니다.",
            "해결: `gem install nokogiri -v 1.12.5` 명령어를 추가하여 버전을 고정하고, `nos3-build.sh` 등의 스크립트 내 절대 경로를 올바르게 수정하여 빌드 환경을 안정화했습니다."
          ]
        }
      ],
      retrospective: [
        "오픈소스 프로젝트(NOS3)를 새로운 환경(Cloud)에 이식하는 과정에서, 의존성 분석과 레거시 코드 리팩토링의 중요성을 배웠습니다.",
        "단순한 가상머신 구동을 넘어, IaC(Infrastructure as Code) 도구를 활용한 자동화 배포가 운영 효율성에 미치는 긍정적 영향을 체감했습니다.",
        "리눅스 커널 레벨의 가상화 이슈(중첩 가상화 불가)를 SW 구성을 변경하여 우회하는 경험을 통해, 시스템 엔지니어링 역량을 길렀습니다."
      ]
    }
  }
];

export const education: EducationItem[] = [
  {
    school: "Samsung SW·AI Academy For Youth (SSAFY)",
    period: "2025.08 ~ 현재",
    degree: "14기 교육생",
    description: "알고리즘 및 웹 개발 심화 과정"
  },
  {
    school: "CIA Academy",
    period: "2024.07 ~ 2024.09",
    degree: "어학연수",
    description: "글로벌 커뮤니케이션 능력 향상 및 문화 교류"
  },
  {
    school: "시스템 소프트웨어 공학 연구실",
    period: "2022.10 ~ 2024.01",
    degree: "학부 연구생",
    description: "논문 작성 및 최신 기술 동향 연구"
  }
];

export const certifications: CertificationItem[] = [
  {
    name: "OPIC IM2",
    date: "2025.09"
  },
  {
    name: "정보처리기사",
    date: "2025.09"
  },
  {
    name: "SQLD",
    date: "2025.04"
  }
];

export const research: ResearchItem[] = [
  {
    title: "안면 색상 데이터 기반 퍼스널 컬러 진단 서비스",
    conference: "2024 한국스마트미디어학회&한국전자거래학회 추계학술대회",
    date: "2024.10"
  },
  {
    title: "ChatGPT를 활용한 대화형 플랫폼: 동향과 전망",
    conference: "2023 한국스마트미디어학회 종합학술대회",
    date: "2023.04"
  },
  {
    title: "빅데이터 분석 방법 비교",
    conference: "2023 한국스마트미디어학회 심포지움",
    date: "2023.10"
  }
];
