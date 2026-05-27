import type { Project } from '@/types/project';
import bbaekkomThumbnail from '@/assets/images/bbaekkom/thumbnail.png';
import bbaekkomArchitecture from '@/assets/images/bbaekkom/architecture.png';
import characterCollection from '@/assets/images/bbaekkom/캐릭터도감.jpg';
import conversationListen from '@/assets/images/bbaekkom/대화듣기.jpg';
import wordReport from '@/assets/images/bbaekkom/단어리포트.jpg';
import growthReport from '@/assets/images/bbaekkom/성장리포트1.jpg';
import conversationGuide from '@/assets/images/bbaekkom/대화가이드1.jpg';

export const bbaekkom: Project = {
  title: '빼꼼(BBAEKKOM)',
  type: '팀 프로젝트 (6인)',
  period: '2026.05.06 ~ 2026.05.27 (3주)',
  role: ['프론트엔드 & 백엔드 & AI'],
  shortDescription: '사진 기반 캐릭터 생성 및 실시간 음성 대화와 성장 리포트를 지원하는 AI 육아 플랫폼',
  description:
    '일상 속 사물을 AI 캐릭터로 변환해 아동과 실시간 음성 대화를 나누고, 대화 데이터를 분석하여 주간 아동 발달 지표 및 육아 리포트를 제공하는 플랫폼.\n\n' +
    '사물 사진 한 장에서 이목구비를 정밀 감지하고 추출한 뒤 빈자리를 텍스처로 자연스럽게 메우는 Grounded-SAM-LaMa 비전 파이프라인으로 실시간 표정 변화가 가능한 입체 캐릭터를 생성. AI 캐릭터 대화 품질이 아동에게 안전하고 발달 수준에 부합하도록 10가지 대화 평가 루브릭을 수립하고, DeepEval G-Eval(LLM-as-a-Judge) 평가 체계를 구축. 단순 대화를 넘어 pgvector 기반 시간 소멸식 가중 RAG와 Redis 세션 컨텍스트로 이전 대화를 기억하며, 수면 시나리오에 맞춰 음성과 동기화하여 방 조명의 조도 조절 및 소등을 능동 제어하는 "상황 맥락 인지형 SmartThings IoT 연동" 루프 실현.\n\n' +
    '아동 언어 치료 현장의 학술 기준인 "자발화 분석"을 자동화하기 위해 Kiwi 형태소 분석기로 측정한 평균 발화 길이(MLU-m) 규칙 점수와 LLM의 통사·맥락 완성도 점수를 교차 검증하는 하이브리드 발달 진단 엔진 구축. 이를 통해 또래 대비 정밀한 언어/감정 성장 지표를 입체적인 도서형 주간 성장노트 대시보드로 시각화하여, 부모의 반복적 훈육 피로감과 아동 발달 상태 진단의 높은 장벽을 해결.',
  tech: [
    'React Native 0.85',
    'Java 21',
    'Spring Boot 3.5',
    'JPA / QueryDSL',
    'PostgreSQL (pgvector)',
    'MySQL 8.0',
    'Redis',
    'SSE',
    'WebSocket',
    'FastAPI',
    'OpenAI (GPT-4o)',
    'DeepEval / G-Eval',
    'Grounded-SAM-LaMa',
    'kiwipiepy',
    'Google Cloud STT/TTS',
    'Qwen ASR',
    'Silero VAD',
    'YOLOv8',
    'AWS EC2 / S3',
    'SmartThings API',
    'Jenkins',
    'Blue-Green',
    'Prometheus / Grafana / Loki',
    'Jira / Mattermost',
    'Git',
  ],
  impact:
    'React Native, Spring Boot, FastAPI를 역할별로 분리해 모바일 UX, 비즈니스 로직, AI 추론을 독립적으로 확장할 수 있는 구조를 구성했습니다.\n' +
    '대화 세션 컨텍스트를 Redis에 유지하고 STT-LLM-TTS 파이프라인을 FastAPI에서 처리해 실시간 음성 대화 흐름을 구현했습니다.\n' +
    '객체 후보 이미지를 S3에 임시 저장하고 Redis TTL 캐시로 관리해 캐릭터 생성 전 확인 단계를 안전하게 설계했습니다.\n' +
    'Nginx upstream 전환 기반 Blue-Green 배포와 Prometheus/Grafana/Loki 관측 구성을 통해 운영 중단과 장애 추적 리스크를 줄였습니다.',
  images: {
    preview: bbaekkomThumbnail,
    architecture: bbaekkomArchitecture,
    overviewGallery: [
      characterCollection,
      conversationListen,
      wordReport,
      growthReport,
      conversationGuide,
    ],
  },
  links: {
    repo: 'https://github.com/go-ring/bbaekkom.git',
    notion: 'https://www.notion.so/Main-33a5c3cba4bc805c96ccf2f9b6b6ea87?source=copy_link',
    presentation: 'https://drive.google.com/drive/folders/1pTeZ0BGsm4O_ZvsffDL0Uy6ruBkhpVq9?usp=sharing',
    proof: 'https://drive.google.com/drive/folders/1P4bT4RehdQ4RQSMzQYVQJ8rl4BwSe18u?usp=drive_link',
  },
  details: {
    implementation: [
      'AI 캐릭터 생성 플로우: React Native Vision Camera로 사물을 촬영하고, Spring Boot가 이미지 형식과 소유권을 검증한 뒤 FastAPI 객체 후보 추출 결과를 받아 S3 임시 이미지와 Redis TTL 캐시에 저장했습니다. 사용자가 후보를 확정하면 캐릭터 이미지, 표정 파츠, 성격, 말투 정보를 캐릭터 도메인에 연결합니다.',
      '실시간 음성 대화 파이프라인: 네이티브 VAD 레코더가 음성 구간을 감지하고 WAV 업로드 파일을 생성하면 FastAPI가 STT, LLM 응답 생성, TTS 합성을 순차 처리합니다. Spring Boot는 사용자/시스템 메시지를 저장하고 SSE로 앱에 응답, 감정, 애니메이션, TTS, SmartThings 명령을 전달합니다.',
      '대화 미리보기와 UX 제어: WebSocket으로 발화 중 오디오 청크와 임시 자막을 처리하고, React Native 화면에서는 캐릭터 모션, 말풍선, 마이크 상태, 대화 잠금, 종료 애니메이션을 하나의 대화 경험으로 묶었습니다.',
      '주간 리포트 생성: 대화 기록을 기반으로 단어 빈도, 감정 상태, 발달 지표, 양육 가이드를 AI 서버에서 분석하고, 백엔드가 리포트/키워드/감정/가이드/발달 레벨 테이블에 정규화해 저장합니다.',
      'SmartThings 연동: OAuth로 사용자의 SmartThings 기기 토큰을 암호화 저장하고, 기본 조명을 선택한 뒤 AI 응답에 포함된 명령을 switch, brightness, color, colorTemperature capability payload로 검증 및 변환해 실행합니다.',
      '운영 환경 구성: 백엔드와 AI 서버를 Docker 이미지로 분리하고, Jenkins 파이프라인과 Nginx Blue-Green upstream 전환 스크립트, Prometheus/Grafana/Loki/Promtail 모니터링 구성을 추가했습니다.',
    ],
    roleAndContribution: [
      '백엔드 도메인 설계: auth, profile, character, objectcandidate, chat, report, smartthings 도메인을 분리하고 JPA 엔티티, DTO, Repository, Service, Controller 계층을 구성했습니다.',
      'AI 서버 연동 구조: Spring Boot에서 FastAPI AI 서버를 WebClient로 호출하도록 구성하고, 객체 검출, 캐릭터 생성, 대화, 리포트 요청/응답 스키마를 서비스 경계에 맞게 분리했습니다.',
      '실시간 대화 처리: 채팅 세션 초기화, Redis 컨텍스트 저장, 음성 메시지 처리, SSE 이벤트 전송, 대화 종료 요약 저장까지 이어지는 대화 라이프사이클을 구현했습니다.',
      '모바일 대화 UX 구현: React Native에서 VAD 상태, 실시간 자막, 캐릭터 애니메이션, TTS 재생, 대화 이력, PIN 기반 제어 잠금을 결합한 대화 화면을 구성했습니다.',
      'SmartThings 제어 안정화: OAuth 토큰 암호화, 기기 동기화, 기본 조명 선택, AI 명령 검증, 명령 실행 로그 저장을 통해 외부 IoT 제어 흐름을 추적 가능하게 만들었습니다.',
      '배포/관측 인프라: backend blue/green 컨테이너, Nginx upstream reload, health check, 로그 수집과 메트릭 대시보드 구성을 통해 서비스 운영 흐름을 정리했습니다.',
    ],
    techAndReason: [
      'React Native: 카메라, 마이크, 오디오 재생, 애니메이션이 필요한 모바일 중심 서비스를 Android/iOS 코드베이스로 확장하기 위해 선택했습니다.',
      'Spring Boot: 인증, 권한 검증, 트랜잭션, JPA 도메인 모델, 외부 API 연동이 많은 비즈니스 서버를 안정적으로 구성하기 위해 사용했습니다.',
      'FastAPI: STT/TTS, LLM, 이미지 처리, 리포트 분석처럼 Python AI 생태계와 가까운 작업을 백엔드와 분리해 독립 배포할 수 있도록 구성했습니다.',
      'Redis: 대화 세션 컨텍스트와 객체 후보 TTL 캐시처럼 짧은 수명의 상태를 빠르게 저장하고 만료시키기 위해 사용했습니다.',
      'SSE & WebSocket: 완성된 AI 응답은 SSE로 단방향 전달하고, 발화 중 미리보기처럼 더 잦은 실시간 교환은 WebSocket으로 분리했습니다.',
      'AWS S3: 사용자가 촬영한 객체 후보와 캐릭터 이미지를 서버 파일시스템에 묶지 않고 외부 스토리지에서 관리하기 위해 사용했습니다.',
      'SmartThings API: 대화형 캐릭터가 실제 조명 제어까지 연결되는 경험을 만들기 위해 OAuth, 기기 동기화, capability command 실행을 도입했습니다.',
      'Docker Compose & Jenkins: 백엔드, AI, Redis, Nginx, 모니터링 컴포넌트를 환경별로 재현 가능하게 띄우고 배포 자동화를 구성하기 위해 사용했습니다.',
    ],
    troubleshooting: [
      {
        title: '대화 중 서버 재시작이나 AI 응답 실패가 UX 전체를 끊지 않도록 분리',
        items: [
          '문제: 음성 대화는 STT, LLM, TTS, DB 저장, SSE 전송이 이어지는 긴 파이프라인이라 한 구간의 실패가 전체 대화 세션 중단으로 이어질 수 있었습니다.',
          '원인: 대화 컨텍스트와 처리 상태를 단일 서버 프로세스 메모리에만 두면 재시작이나 네트워크 오류에 취약하고, 모바일 앱은 응답 지연과 실패를 즉시 체감합니다.',
          '해결: 세션 컨텍스트는 Redis에 저장하고, FastAPI 처리 결과는 Spring Boot가 저장/전송하도록 역할을 나눴습니다. STT 검증 실패 시에도 재시도 안내 TTS를 생성해 대화 흐름을 복구하도록 했습니다.',
          '결과: AI 응답 생성 실패와 음성 인식 실패를 사용자에게 안내 가능한 상태로 바꾸고, 대화 종료 시에는 요약과 컨텍스트 정리를 별도로 수행할 수 있는 구조를 확보했습니다.',
        ],
      },
      {
        title: '객체 후보 이미지를 확정 전까지 안전하게 관리',
        items: [
          '문제: 사용자가 촬영한 원본에서 추출한 객체 후보는 캐릭터로 확정되기 전까지 임시 데이터이므로, 영구 저장하면 불필요한 스토리지와 개인정보 관리 부담이 커집니다.',
          '원인: AI 검출 결과에는 cutout 이미지, bounding box, confidence, objectName 등이 함께 필요하지만, 확정 전 데이터는 짧은 수명과 미리보기 접근이 동시에 필요했습니다.',
          '해결: 후보 이미지는 S3의 temp/object-candidates 경로에 업로드하고, candidateId와 메타데이터는 Redis TTL 캐시에 30분 동안 보관했습니다. 검증 실패 시에는 업로드된 S3 객체를 조용히 삭제하도록 정리했습니다.',
          '결과: 사용자 확인 전 임시 후보와 확정 캐릭터 데이터를 분리했고, 만료와 삭제 정책을 코드 레벨에서 명확히 관리할 수 있게 됐습니다.',
        ],
      },
      {
        title: 'SmartThings 명령을 AI 응답 그대로 실행하지 않도록 검증',
        items: [
          '문제: AI가 생성한 조명 제어 명령을 그대로 외부 API로 전달하면 잘못된 action, 범위 밖 밝기/색온도, 지원하지 않는 기기 제어가 발생할 수 있습니다.',
          '원인: 자연어 대화에서 나온 명령은 구조화되어 있더라도 외부 IoT API의 capability schema와 완전히 같지 않아 서버 측 검증 계층이 필요했습니다.',
          '해결: SWITCH, SET_BRIGHTNESS, SET_COLOR, SET_COLOR_TEMPERATURE action만 허용하고, 밝기 0~100, 색온도 2500~6500K 등 파라미터 범위를 검증한 뒤 SmartThings payload로 변환했습니다.',
          '결과: AI 응답과 실제 IoT 제어 사이에 안전한 변환 계층을 두고, 실행 결과는 SmartThingsCommandLog에 저장해 추적 가능성을 확보했습니다.',
        ],
      },
    ],
    testing: [
      'Spring Boot 테스트: Report 생성 서비스 테스트와 기본 애플리케이션 컨텍스트 테스트를 통해 주요 도메인 로직의 회귀를 확인했습니다.',
      'AI 평가 스크립트: report_service와 llm_chat eval runner를 별도 디렉터리로 분리해 리포트 분석 및 대화 품질 평가를 반복 실행할 수 있게 구성했습니다.',
      '배포 검증: Blue-Green 배포 스크립트에서 target 컨테이너 health check, Nginx 설정 검증, upstream rollback 절차를 포함해 배포 실패 시 이전 슬롯을 유지하도록 했습니다.',
    ],
    retrospective: [
      'AI 기능은 모델 호출 자체보다 세션 상태, 실패 복구, 사용자 피드백, 데이터 저장 경계가 더 중요하다는 점을 체감했습니다. 특히 실시간 대화에서는 작은 지연이나 실패도 UX에 바로 드러나므로 파이프라인을 단계별로 분리하고 관측 가능하게 만드는 설계가 필요했습니다.',
      '모바일 앱에서 카메라, 마이크, TTS, 애니메이션, 서버 이벤트를 동시에 다루면서 프론트엔드 상태 관리의 복잡도가 빠르게 커진다는 것을 배웠습니다. React Query와 Zustand를 역할별로 나누고, 화면 컴포넌트는 사용자 흐름 중심으로 정리하는 방식이 유지보수에 도움이 됐습니다.',
      '외부 IoT 제어는 AI 응답을 그대로 믿는 대신 서버에서 명령 범위와 대상 기기를 검증해야 실제 서비스로 이어질 수 있었습니다. AI와 현실 세계를 연결할 때는 안전한 중간 계층이 필수라는 점을 확인했습니다.',
    ],
  },
};
