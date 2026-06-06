import type { Project } from '@/types/project';
import nos3Main from "@/assets/images/artificialSatellite/main.bmp";
import nos3Arch1 from "@/assets/images/artificialSatellite/architecture1.bmp";
import nos3Arch2 from "@/assets/images/artificialSatellite/architecture2.bmp";

export const artificialSatellite: Project = {
    title: "가상화 기반 우주 통신망 연동 및 사이버 위협 연구",
    period: "2023.04.01 ~ 2023.10.31",
    type: "산학 과제 (3인)",
    role: "위성 시뮬레이터 환경 구축 및 문제 해결",
    shortDescription: "클라우드 기반 NOS3 위성 통신망 시뮬레이션 환경 구축 및 분석",
    description:
      "NASA의 오픈소스 위성 시뮬레시연 플랫폼 NOS3를 기반으로, 가상 인공위성-지상국(GS)-사용자 환경을 클라우드에서 재현하기 위한 연구형 테스트베드. 핵심 목표는 우주 통신망 연동 구조를 가상화 환경에서 검증하고, 사이버 위협 대응 실험이 가능한 기본 실행 환경 마련. NOS Engine, cFS, 42, COSMOS 등 구성요소를 중심으로 통신/운영 흐름을 분석하고 클라우드에서 재현 가능한 형태로 정리. ([연구 보고서](https://drive.google.com/file/d/1wtzY7gHgHmb1sj4i1sMoRnfpqYnxw1jh/view?usp=sharing))",
    tech: [
      "NOS3",
      "Linux",
      "NCloud",
      "Cloud-Init",
      "Shell",
      "Ruby",
      "Vagrant",
      "VirtualBox",
      "xrdp",
      "Git",
    ],
    impact:
      "클라우드 서버에서 VirtualBox 중첩 가상화 제약을 우회할 수 있는 설치 절차 검토·정리.\nNOS3 installer(MIN/COSMOS/CUSTOM)와 빌드/실행 스크립트(Build/Run/Stop/Clean) 실행 순서 문서화.\nRuby(Nokogiri) 의존성 및 경로 하드코딩 이슈를 수정해 주요 설치 실패 원인 감소.\n로컬 VM 기반 설치와 클라우드 기반 설치를 비교 정리해 재현 가능한 실험 환경 구축에 기여.",
    images: {
      main: nos3Main,
      architecture: [nos3Arch1, nos3Arch2],
    },
    links: {
      proof:
        "https://drive.google.com/file/d/1wtzY7gHgHmb1sj4i1sMoRnfpqYnxw1jh/view?usp=sharing",
    },
    details: {
      roleAndContribution: [
        "클라우드 이식 경로 재정의: NOS3 공식 설치(Vagrant 기반)와 클라우드 환경 제약 비교 분석 → VM 없이 구동 가능한 installer 직접 실행 방식으로 전환",
        "자동 프로비저닝 구성: NCloud Server Init Script로 필수 패키지 설치 자동화 + MIN → COSMOS → CUSTOM 순서 설치 스크립트화",
        "원격 GUI 접속 환경 구축: xrdp 기반 원격 데스크톱 구성으로 클라우드 서버에서 COSMOS·시뮬레이터 화면 직접 관측 가능",
        "의존성·경로 오류 수정: Nokogiri gem 버전 고정(1.12.5) 및 빌드 스크립트 하드코딩 경로 교정으로 설치-실행 파이프라인 안정화",
      ],
      techAndReason: [
        "NOS3/cFS/42/COSMOS: 비행 소프트웨어와 시뮬레이터, 지상국 구성요소를 함께 다뤄 우주 통신망 실험 환경 구성에 적합.",
        "NCloud Init Script: 서버 생성 시 초기 스크립트를 자동 실행할 수 있어 수동 설정 편차를 줄이고 반복 설치에 유리.",
        "Shell Script: MIN/COSMOS/CUSTOM 및 Build/Run/Stop/Clean 작업을 명령 단위로 표준화해 재현 가능한 운영 절차 마련.",
        "xrdp: 클라우드 리눅스 서버에 GUI 접근을 제공해 시뮬레이터 관찰 및 데모 진행 효율 향상.",
      ],
      implementation: [
        "기존 설치 경로 분석: 로컬 환경 기준 절차(`git clone` -> `submodule init/update` -> `/deployment` 설정 -> `vagrant up`)를 분해해 클라우드에서 대체 가능한 단계와 불가능한 단계 구분.",
        "클라우드 설치 자동화: NCloud 서버 생성 시 Init Script를 적용하고, `~/nos3/support/installers/ubuntu`에서 MIN -> COSMOS -> CUSTOM 순으로 설치 스크립트화.",
        "빌드/실행 표준화: `~/Desktop`의 `nos3-build.sh`, `nos3-run.sh`, `nos3-stop.sh`, `nos3-clean.sh` 실행 순서를 작업 가이드로 정리해 운영 실수 최소화.",
        "구성요소 구조 문서화: cFS APPS, CFE/OSAL, HWLIB, LIBA3200/LIBA3200NOS, NOS Engine Client/Server의 역할을 정리해 팀 내부 지식 자산 확보.",
      ],

      troubleshooting: [
        {
          title: "🛸 클라우드의 중첩 가상화 제약이 NOS3 기본 설치를 불가능하게 만든다",
          items: [
            "문제: NOS3 공식 설치 절차는 VirtualBox VM 생성을 전제로 하는데, 이미 가상화된 클라우드 서버에서 동일한 방식을 시도하자 설치 자체가 실패.",
            "원인: 클라우드 서버는 하이퍼바이저 위에서 실행되므로 그 위에 다시 VirtualBox를 올리는 중첩 가상화가 제약됨. NOS3 공식 절차가 로컬 환경만을 전제로 설계된 구조.",
            "해결: Vagrant·VirtualBox 의존 단계를 제거하고, installer 스크립트(MIN → COSMOS → CUSTOM)를 클라우드 서버에서 직접 실행하는 방식으로 설치 경로 재정의.\nNCloud Init Script로 필수 패키지 설치를 자동화하고, xrdp로 원격 GUI 접속 환경까지 구성.",
            "결과: VM 생성 없이 NOS3 구성요소를 클라우드 서버에서 직접 구동 성공. 재현 가능한 설치 절차 문서화.",
          ],
        },
        {
          title: "📦 Ruby 의존성과 경로 하드코딩이 설치 파이프라인을 중단시킨다",
          items: [
            "문제: COSMOS 설치 스크립트 실행 시 Nokogiri 미설치·버전 불일치로 Ruby 의존성 오류 발생. 이후 빌드·실행 스크립트에서도 경로 불일치로 실행이 중단.",
            "원인: 스크립트가 특정 버전의 Nokogiri gem을 전제하지만 명시적으로 설치하지 않음. 설치 스크립트와 빌드 스크립트가 서로 다른 경로 구조를 가정하는 하드코딩 구조.",
            "해결: COSMOS 설치 스크립트에 gem install nokogiri -v 1.12.5를 추가해 버전 고정.\nnos3-build.sh 등 빌드·실행 스크립트 내 경로를 실제 서버 디렉토리 구조에 맞게 수정.",
            "결과: Ruby 의존성 설치 실패 제거 및 Build → Run → Stop → Clean 파이프라인 정상화. 팀 전체 재현 가능한 운영 절차 확보.",
          ],
        },
      ],
      retrospective: [
        "오픈소스 시뮬레이터를 다른 인프라에 이식할 때는 기능 구현보다 설치 체계와 의존성 정리가 우선임을 인지.",
        "클라우드 Init Script 기반 자동화가 반복 배포 안정성과 팀 협업 속도에 직접적인 영향을 준다는 것을 확인.",
      ],
    },
  }
