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
  role: ['Frontend & Backend & AI'],
  shortDescription: '사진 기반 캐릭터 생성 및 실시간 음성 대화와 성장 리포트를 지원하는 AI 육아 플랫폼',
  description:
    'AI 사물 친구와 함께하는 아동 성장 케어!\n\n' +
    '일상 속 사물을 **대화형 AI 캐릭터**로 변환하여\n' +
    '**실시간 상호작용**과 **아이 발달 분석 리포트**를 제공하는\n육아 도우미 플랫폼',
  tech: [
    '[Backend] Java 21, Spring Boot 3.5, JPA / QueryDSL, PostgreSQL, MySQL, Redis',
    '[Infra / DevOps] Docker, Jenkins, Blue-Green, Prometheus / Grafana / Loki',
    '[AI] FastAPI, OpenAI, RAG, G-Eval, Grounded-SAM-LaMa, kiwipiepy, Silero VAD, Qwen ASR',
    '[External Services] Google Cloud STT/TTS, AWS EC2 / S3, Samsung SmartThings API',
    '[협업 도구] GitLab, Jira, Notion, Mattermost'
  ],
  impact:
    "삼성 청년 SW·AI 아카데미(SSAFY) 2학기 프로젝트 **우수상 수상**\n" +
    "프로젝트 최우수작으로 선정되어 SSAFY **전시회 참가**\n" +
    "DeepEval · G-Eval 기반 자체 LLM 평가 체계를 구축하여 대화 품질 Pass Rate **50.0% → 93.3% 개선**\n" +
    "Streaming STT Preview 및 캐릭터 애니메이션 적용으로 **체감 대기 시간** 약 50% **단축**\n" +
    "사용자가 촬영한 사물을 **2분 이내** 대화형 AI 캐릭터로 생성하는 파이프라인 구축",
  shortImpact:
    "삼성 청년 SW·AI 아카데미(SSAFY) 2학기 프로젝트 **우수상 수상**\n" +
    "프로젝트 최우수작으로 선정되어 SSAFY **전시회 참가**",
  images: {
    overviewLayout: 'mobile',
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
      '사물 사진을 AI 캐릭터로 변환하여 아이만의 친구를 생성',
      '다양한 페르소나를 가진 사물 캐릭터와 아이의 자연스러운 음성 대화 제공',
      '양치, 정리, 취침 등 부모가 설정한 생활 습관을 대화 속에서 자연스럽게 유도',
      '대화 데이터를 분석하여 언어 발달, 감정 표현, 관심 주제 분석',
      '분석 결과를 바탕으로 맞춤형 육아 가이드를 제공',
      '수면 대화 및 취침 시간을 인지하여 연동된 IoT 조명 제어'
    ],
    roleAndContribution: [
      'AI:\n실시간 자막 및 정밀 음성 인식을 위한 하이브리드 음성 인식 파이프라인 구축\nRedis 세션 컨텍스트와 RAG를 활용한 장기 기억 대화 엔진 연동\n생활 습관 형성을 위한 상황 인지형 넛지 대화 로직 설계\nDeepEval · G-Eval 기반 자체 평가 루브릭 및 평가 환경 구축',
      'Backend:\n캐릭터 도감 · 리포트 · 마이페이지 API 설계 및 개발',
      'Frontend:\n사용자 온보딩, 리포트, 마이페이지 도메인 UI/UX 설계 및 구현'
    ],
    techAndReason: [
      'Qwen3-ASR (음성 인식): AI Hub 아동 음성 데이터 5,000건 벤치마크 결과, Google STT 및 Whisper 대비 가장 낮은 CER(13.34%)을 기록하여 아동 음성 인식 모델로 선정',
      'GPT-4o (대화 생성): G-Eval 기반 아동 안전성 평가에서 타 모델 대비 최고 통과율(96/100)과 최저 응답 시간(1.15s)을 기록하여 실시간 대화 모델로 선정',
      'RAG (대화 기억): 과거 대화 기억을 주입한 RAG 구조를 적용하여 Pass Rate를 90.80%에서 93.33%로 향상시키고 응답 일관성을 개선',
    ],
    troubleshooting: [
      {
        title: 'Streaming STT가 중간 공백에서 끊기는 문제 해결',
        items: [
          '문제: 아이가 말하는 중간에 잠깐 쉬면 Streaming STT Preview가 발화를 종료로 판단해 말풍선 자막이 끊기거나, 이후 음성이 같은 발화로 이어지지 않는 현상 발생',
          '원인: 음성 chunk 사이의 짧은 공백을 조기 종료로 해석하고, 발화 단위 관리가 명확하지 않아 이전 worker와 새 worker의 결과가 섞이거나 preview transcript가 초기화될 가능성 존재',
          '해결: speech_start마다 utterance_id를 부여해 발화 단위를 분리하고, 일정 시간 동안 추가 음성을 기다리는 idle timeout 적용. interim 결과와 final transcript를 누적 관리하고, WebSocket 연결 불안정 시 pending queue에 음성 chunk를 보관 후 재연결 시 전송하도록 구조 개선',
          '결과: 짧은 중간 공백이 있어도 Streaming STT Preview가 같은 발화로 자연스럽게 이어지도록 처리하여, 실시간 말풍선 자막의 연속성과 대화 UX 안정성 향상',
        ],
      },
      {
        title: '아동 음성 녹음 파일이 비정상적으로 늘어지는 문제 해결',
        items: [
          '문제: Android 환경에서 짧은 발화가 실제보다 길고 느리게 저장되어, STT 정확도가 떨어지고 대화 응답이 지연되는 문제 발생',
          '원인: 기존 JS 기반 녹음 로직이 실제 마이크 입력 샘플레이트를 검증하지 않고 16kHz로 고정하여 WAV 파일을 생성함으로써, 48kHz 입력이 16kHz 오디오처럼 저장되어 음성이 약 3배 늘어지는 현상 발생',
          '해결: JS 기반 PCM 버퍼링 구조를 Android Native AudioRecord 기반 녹음 모듈로 전환. 실제 입력 샘플레이트를 기준으로 녹음 시간과 샘플 수를 계산하고, 업로드 직전에 명시적으로 16kHz로 리샘플링하도록 최적화',
          '결과: 기기별 샘플레이트 차이로 인한 음성 왜곡을 제거하고, 아동 발화를 정상 속도의 WAV 파일로 안정적으로 업로드하여 STT 입력 품질 및 대화 파이프라인 신뢰성 확보',
        ],
      },
      {
        title: 'LLM이 참고 정보를 과하게 반영하는 문제 개선',
        items: [
          '문제: LLM 응답 생성 시 현재 아이의 발화보다 부모 설정 규칙, 과거 대화, 발달 리포트, RAG 검색 결과를 과하게 반영하여 대화가 부자연스러워지는 현상 발생',
          '원인: 프롬프트 컨텍스트에 다양한 참고 정보가 함께 주입되면서, 모델이 현재 발화보다 보조 정보를 더 중요하게 해석할 가능성 내재. 특히 현재 세션의 최근 대화와 RAG 검색 결과가 중복될 경우 특정 맥락이 과도하게 강조됨',
          '해결: LLM 프롬프트의 정보 우선순위를 현재 발화, 최근 대화 맥락, 발달 수준, 캐릭터 설정, 부모 규칙, RAG 기억 순서로 명확히 재설계하고, 현재 세션의 최근 메시지는 RAG 후보에서 제외하여 중복 컨텍스트 주입 방지',
          '결과: 현재 발화 중심의 자연스러운 응답이 강화되었고, 부모 규칙과 과거 대화는 필요한 상황에서만 보조적으로 활용되도록 제어하여 아동 대화의 맥락 적합성과 응답 안정성 강화',
        ],
      },
    ],
    testing: [
      'Spring Boot 테스트: Report 생성 서비스 테스트와 기본 애플리케이션 컨텍스트 테스트를 통해 주요 도메인 로직의 회귀를 확인했습니다.',
      'AI 평가 스크립트: report_service와 llm_chat eval runner를 별도 디렉터리로 분리해 리포트 분석 및 대화 품질 평가를 반복 실행할 수 있게 구성했습니다.',
      '배포 검증: Blue-Green 배포 스크립트에서 target 컨테이너 health check, Nginx 설정 검증, upstream rollback 절차를 포함해 배포 실패 시 이전 슬롯을 유지하도록 했습니다.',
    ],
    retrospective: [
      '실시간 AI 서비스에서는 단순히 정확한 모델보다 사용자가 체감하는 응답 속도가 중요하다는 점을 경험하며, UX 관점에서 AI 시스템을 설계하는 시각 확보',
      '자체 평가 체계와 정량 지표를 기반으로 프롬프트를 개선하며, AI 품질을 측정·분석·개선하는 방법론 체득',
      '제한된 비용과 자원 안에서 성능을 극대화하는 과정에서 실무적인 시스템 설계와 최적화 역량 배양',
    ],
  },
};
