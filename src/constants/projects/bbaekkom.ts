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
  period: '2026.04.27 ~ 2026.05.27 (4주)',
  role: ['프론트엔드 & 백엔드 & AI'],
  shortDescription: '사진 기반 캐릭터 생성 및 실시간 음성 대화와 성장 리포트를 지원하는 AI 육아 플랫폼',
  description:
    '일상 속 사물을 AI 캐릭터로 변환해 아동과 실시간 음성 대화를 나누고, 대화 데이터를 분석하여 주간 아동 발달 지표 및 육아 리포트를 제공하는 플랫폼.\n\n' +
    '사물 사진 한 장에서 이목구비를 정밀 감지하고 추출한 뒤 빈자리를 텍스처로 자연스럽게 메우는 Grounded-SAM-LaMa 비전 파이프라인으로 실시간 표정 변화가 가능한 입체 캐릭터를 생성. AI 캐릭터 대화 품질이 아동에게 안전하고 발달 수준에 부합하도록 10가지 대화 평가 루브릭을 수립하고, DeepEval G-Eval(LLM-as-a-Judge) 평가 체계를 구축. 단순 대화를 넘어 pgvector 기반 시간 소멸식 가중 RAG와 Redis 세션 컨텍스트로 이전 대화를 기억하며, 수면 시나리오에 맞춰 음성과 동기화하여 방 조명의 조도 조절 및 소등을 능동 제어하는 "상황 맥락 인지형 SmartThings IoT 연동" 루프 실현.\n\n' +
    '아동 언어 치료 현장의 학술 기준인 "자발화 분석"을 자동화하기 위해 Kiwi 형태소 분석기로 측정한 평균 발화 길이(MLU-m) 규칙 점수와 LLM의 통사·맥락 완성도 점수를 교차 검증하는 하이브리드 발달 진단 엔진 구축. 이를 통해 또래 대비 정밀한 언어/감정 성장 지표를 입체적인 도서형 주간 성장노트 대시보드로 시각화하여, 부모의 반복적 훈육 피로감과 아동 발달 상태 진단의 높은 장벽을 해결. ([GitHub](https://github.com/go-ring/bbaekkom.git), [시연 영상](https://drive.google.com/drive/folders/1P4bT4RehdQ4RQSMzQYVQJ8rl4BwSe18u?usp=drive_link), [발표 자료](https://drive.google.com/drive/folders/1pTeZ0BGsm4O_ZvsffDL0Uy6ruBkhpVq9?usp=sharing))',
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
    "하이브리드 음성 인식 설계 (Streaming & ASR): 실시간 자막 노출로 UX 지루함을 해결하는 Streaming STT와 오류율(CER) 13.34%의 아동 발화 맞춤형 Qwen3-ASR을 결합한 이중 음성 인식 파이프라인 구축\n" +
    "G-Eval 기반 프롬프트 최적화 (Prompt Tuning): 아동 무해성 10대 루브릭 기준의 G-Eval 검증을 순환 가동하여 프롬프트를 점진 개선, 대화 안전 통과율(Pass Rate)을 50.00%에서 93.33%로 대폭 향상\n" +
    "시간 소멸식 RAG 기억 엔진 구축 (pgvector): 외부 독립 벡터 DB 도입 비용 없이 단일 PostgreSQL(pgvector HNSW 인덱싱) 내에서 시간 경과에 따른 가중치 소멸 알고리즘을 융합, 10ms 이하로 과거 핵심 기억을 실시간 추출하여 장기 대화의 일관성 완성",
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
      '사물 기반 캐릭터 생성: 사용자가 촬영한 사물 이미지에서 BiRefNet으로 배경을 누끼 분리하고 Grounded-SAM-LaMa 파이프라인을 비동기 병렬(gather) 처리하여 실시간 Live 움직임이 가능한 2D 표정 캐릭터 자동 생성',
      '아동 음성 인식 및 실시간 대화: 저지연 VAD로 음성 구간을 검출하고 Qwen ASR로 전사한 아동 발화에 pgvector 기반 코사인 유사도 검색과 시간 소멸 가중 RAG 알고리즘을 융합하여 맥락을 기억하는 애착 대화 환경 구현',
      '비밀 규칙 기반 넛지 대화: 부모가 설정한 양치, 취침 등의 생활 습관 규칙을 대화 세션 컨텍스트에 주입하고, GPT-4o의 Structured Output을 유도해 캐릭터 대화 중 해당 규칙을 자연스럽게 넛지하는 동적 대화 생성 구현',
      '아이 분석 리포트 제공: Kiwi 형태소 분석기로 형태소 단위 평균 발화 길이(MLU-m)를 계측하고, 30% 오차 범위 내의 LLM 교차 검증 및 자율 보정(Self-Correction)을 거쳐 주간 영유아 발달 성장 지표 리포트 도출',
      '맞춤형 육아 가이드 제공: 대화 데이터 분석 결과를 기반으로 아동의 행동 패턴과 정서적 필요를 진단하고, 프롬프트 엔지니어링을 활용해 가독성 높은 아동 성장 가이드 및 부모 대상 맞춤 육아 지침 자동 생성',
      '상황 인지형 조명 제어: 자연어 음성 대화 중 아동의 수면 모드를 실시간 감지하여 switch, brightness 등의 capability 속성을 서버 단에서 필터링하고 실제 SmartThings IoT 기기를 능동 제어하는 스마트 취침 트리거 구축',
    ],
    roleAndContribution: [
      '음성 인식 파이프라인 구축: 실시간 자막 노출로 대화 지루함을 해소하는 Streaming STT와, 불명확한 아동 음성의 정밀 전사를 위한 Qwen ASR을 결합한 하이브리드 이중 음성 인식 파이프라인 설계',
      '상황 인지형 넛지 대화 생성: 부모가 지정한 생활 규칙(HiddenPrompt) 주입 기반의 동적 넛지 대화 로직을 설계하고, 아동과의 대화 친밀도 및 장기 기억 강화를 위한 RAG(검색 증강 생성) 기억 엔진 연동',
      '대화 안전성 검증 및 평가 환경 구축: 아동 무해성 10대 루브릭을 수립하여 DeepEval 및 G-Eval(LLM-as-a-Judge) 기반 평가 환경을 구축하고, 답변 위험성 방지 및 응답 품질 개선을 위한 프롬프트 최적화와 최적의 모델 선정',
      '리포트 · 캐릭터 도감 도메인 API 설계 및 구현: Spring Scheduler 기반 주간 리포트 배치 작업, 아동 발달 데이터 기반 주간 리포트 CRUD, 부모 설정 비밀 규칙 및 캐릭터 성격 관리 등 서비스 주요 도메인 개발',
      '온보딩 · 리포트 · 마이페이지 UI/UX 개발: 아동 발달 지표 및 육아 가이드를 포함한 주간 리포트 시각화 대시보드, Lottie 가이드를 적용한 카드 스텝 온보딩, 마이페이지 디자인 및 화면 개발',
    ],
    techAndReason: [
      'Qwen3-ASR (아이 음성 인식): AI Hub 아동 음성 데이터 5,000개 벤치마크 결과, Google STT(CER 17.88%)와 Whisper(CER 30.71%) 대비 가장 압도적으로 낮은 글자 오류율(CER 13.34%) 및 안정적인 응답 속도(1.06s)를 보여 아동 음성인식 엔진으로 최종 선택.',
      'gpt-4o (응답 생성 LLM): G-Eval 기반 아동 정서 무해성 및 루브릭 준수 평가에서 gpt-4o-mini(1,780ms), Gemini 1.5 Flash(1,472ms) 등 타 모델 대비 가장 우수한 통과율(96/100 Cases)과 최저 대기 시간(1,151ms)을 기록하여 실시간 대화 모델로 낙점.',
      'RAG (검색 증강): 프롬프트 변이 실험 결과, 단순 규칙 프롬프트(Pass Rate 57.50%) 및 RAG 미적용 구조(Pass Rate 90.80%) 대비 과거 대화 기억을 주입한 RAG 구조에서 최고 통과율(93.33%) 및 최고 평균 점수(0.8485)를 입증하여 도입.',
      'pgvector (PostgreSQL): RAG 메모리 연산을 위해 Pinecone 등의 유료 SaaS나 독립 인프라(Milvus 등)를 별도 유지하는 대신, 단일 ACID 관계형 데이터베이스 내에서 HNSW 인덱싱을 통해 10ms 이하의 고속 벡터 유사도 검색이 가능하여 채택.',
      'Spring Scheduler: 아동의 대화 발화가 발생할 때마다 복잡한 발달 지표 통계를 실시간 연산할 경우 유발되는 DB 커넥션 오버헤드를 예방하기 위해, 주간 단위의 백그라운드 배치 집계 방식으로 통계 처리 주기를 지연 적용하여 DB 부하를 경감하고자 활용.',
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
      '실시간 AI 음성 대화 중 음성 지연과 정확도라는 상충된 한계를 극복하기 위해 Streaming 자막 STT와 로컬 Qwen3-ASR을 설계하며, 기술적 오차와 모바일 UX 요구사항을 영리하게 조율하는 법을 배움.',
      'LLM의 정서적 무해성을 확보하기 위해 아동용 10대 루브릭을 정의하고 G-Eval로 벤치마크 평가를 순환 가동하며 50.00%에서 93.33%로 안전 통과율을 끌어올리는 과정에서, 주관적 판단 대신 수치 데이터를 기준으로 프롬프트를 개선해 나가는 경험을 쌓음.',
      '고비용 외부 DB 대신 pgvector HNSW를 활용해 10ms 이하의 시간 소멸식 RAG를 구현하고 Spring Scheduler 배치 이관으로 DB 부하를 90% 이상 예방하며, 제한된 자원 속에서 비용을 아끼고 성능을 극한으로 쥐어짜는 현실적인 아키텍처 설계 요령을 익힘.',
    ],
  },
};
