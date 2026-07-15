import type { Project } from '@/types/project';
import mapImage from '@/assets/images/mindam/지도.png';
import reportStatusImage from '@/assets/images/mindam/제보상태관리.png';

export const mindam: Project = {
  title: '민담(MINDAM)',
  type: '팀 프로젝트 (7인)',
  period: '2026.05.07 ~ 2026.05.13 (1주)',
  role: ['Backend & AI'],
  shortDescription: 'AI 기반 민원 자동 작성, 담당 기관 추론, 중복 제보 통합을 지원하는 공공 민원 처리 플랫폼',
  description:
    'AI로 더 쉽고 똑똑해진 시민 제보!\n\n' +
    '사진 한 장과 한 줄의 설명만으로\n' +
    'AI가 **민원을 자동 작성**하고 **담당 기관을 연결**하며\n' +
    '민원 처리 과정을 효율화하는 공공 **민원 플랫폼**',
  tech: [
    '[Backend] Java 21, Spring Boot 3.5, JPA / Specification, PostgreSQL, Redis',
    '[Infra / DevOps] Docker',
    '[AI] FastAPI, OpenAI, RAG, Structured Outputs',
    '[External Services] 공공데이터포털 유사 민원 API, AWS EC2 / S3',
    '[협업 도구] GitHub, Notion, Mattermost'
  ],
  impact:
    'SSAFY X Kakao tech bootcamp AI Hackathon **카카오 대표이사상 수상**\n' +
    '공공데이터 유사 민원 RAG 및 임베딩 Re-rank(TOP 5 선별)를 적용하여 **AI 부서 배정 오분류율 약 40% 감소 (추산)**\n' +
    '위치 및 텍스트 임베딩 기반 제보 자동 병합 파이프라인을 설계하여 **관공서의 중복 민원 처리 업무량 약 60% 단축 (추산)**\n' +
    '다단계 LLM 분석(대/소분류) 및 Structured Outputs 적용으로 파싱 에러를 원천 차단하여 **자동 제보 접수 성공률 99% 이상 달성 (추산)**',
  shortImpact: 'SSAFY X Kakao tech bootcamp AI Hackathon 카카오 대표이사상 수상**',
  images: {
    overviewLayout: 'mobile',
    overviewGallery: [
      mapImage,
      reportStatusImage,
    ],
  },
  links: {
    repo: 'https://github.com/orgs/team-ssaika/repositories',
    notion: 'https://app.notion.com/p/36dc10175d2e803f816ed1ef2382ae60?source=copy_link',
    presentation: 'https://drive.google.com/drive/folders/1VGHHurw0e6XXaeKsV9oQIFaav3OCZxyI?usp=sharing',
    proof: 'https://drive.google.com/drive/folders/1yWMTDCPJVOY0Ix1nMkLhnSL4S78WrfxP?usp=sharing',
  },
  details: {
    implementation: [
      '사진 한 장, 설명 한 줄로 AI 민원 초안 자동 생성',
      '법령과 과거 유사 사례 기반 담당 기관 자동 추론',
      '위치·내용 기반 중복 제보 자동 통합 및 이슈 그룹화',
      '실시간 지도에서 제보 현황과 위험도 시각화 제공',
      '내 제보 처리 상태 및 변경 알림 제공',
      'AI 챗봇을 통한 주변 민원 및 제보 정보 조회'
    ],
    roleAndContribution: [
      'AI:\n공공 민원 API 기반 유사 사례 검색 및 RAG 파이프라인 구축\nRe-rank를 통한 유사 민원 선별 및 AI 담당 기관 추론 성능 개선\n유사 사례·법령 정보를 활용한 부서 분류 컨텍스트 설계',
      'Backend:\n제보 · 이슈 · AI 챗봇 API 설계 및 개발'
    ],
    techAndReason: [
      'PostgreSQL & Hibernate Spatial: 일반 RDBMS나 벡터 DB는 공간 데이터 연산에 한계가 있음. PostgreSQL은 PostGIS를 통해 R-Tree 기반 공간 인덱스(GIST)를 지원하여, \'내 주변 반경 내 제보 탐색\' 등 무거운 위치 연산과 관계형 데이터 조인을 단일 DB에서 병목 없이 처리하기 위함',
      'OpenAI Structured Outputs: 일반 프롬프트 엔지니어링은 LLM이 간헐적으로 JSON 형식을 깨뜨려 파싱 에러를 유발함. Structured Outputs는 내부적으로 문법(Grammar)을 강제해 100% 스키마가 일치하는 응답을 보장하므로, 서버의 런타임 에러를 원천 차단하기 위함',
      'text-embedding-3-small: Elasticsearch 같은 키워드 매칭은 \'도로 파임\'과 \'포트홀\'을 같은 문제로 인식하기 어려움. 텍스트를 고차원 벡터로 변환해 단어가 달라도 의미적 맥락이 같은 민원을 코사인 유사도로 정확히 묶어내 중복 제보 병합 성능을 극대화',
      '공공데이터포털 유사 민원 API (RAG): LLM의 내재된 지식만으로는 수많은 지자체의 복잡한 실무 업무 분장을 추론할 수 없음. 과거의 \'실제 처리 완료 사례\'를 실시간으로 검색해 RAG 컨텍스트로 주입함으로써 AI의 부서 분류 환각을 제거',
    ],
    troubleshooting: [
      {
        title: '공공 유사 민원 100건을 그대로 넣으면 분류 컨텍스트가 흐려지는 문제 해결',
        items: [
          '문제: 유사 민원 API가 반환한 후보를 그대로 프롬프트에 넣으면 현재 제보와 직접 관련 없는 사례까지 섞여 카테고리와 담당 부서 판단이 흔들림',
          '원인: 외부 API의 검색 결과는 키워드 기반 후보에 가까워 의미적으로 정말 유사한지, 최근 행정 처리 맥락과 담당 부서가 적합한지 추가 판단이 필요',
          '해결: 현재 제보와 후보 민원을 같은 임베딩 모델로 벡터화한 뒤 코사인 유사도가 기준치 이상인 후보만 남기고, 유사도 80점·최신성 10점·담당 부서 보너스 10점 구조로 rerank 점수를 계산해 TOP-K만 보강 프롬프트 주입',
          '결과: 외부 사례를 무작정 늘리는 방식이 아니라 현재 제보와 어울리는 근거만 선별해 분류·부서 배정의 판단 맥락 강화',
        ],
      },
      {
        title: '유사 민원 API 장애가 제보 생성 전체 실패로 번지지 않도록 격리',
        items: [
          '문제: 공공 API 타임아웃, 인증키 누락, 잘못된 JSON 응답이 발생하면 제보 초안 생성 자체가 실패할 위험이 있음',
          '원인: 유사 민원 검색은 분류 품질을 높이는 보조 컨텍스트이지만, 제보 접수 플로우에서는 필수 의존성처럼 동작하면 사용자 경험을 크게 해침',
          '해결: 유사 민원 조회 실패, 임베딩 실패, 응답 파싱 실패를 빈 후보 목록으로 흡수하고 경고 로그만 남기도록 처리. 분석 파이프라인에서는 1·2차 분류와 유사 민원 검색을 병렬로 시작하되 실패 시 기본 분석 흐름은 계속 진행',
          '결과: 외부 공공 API 상태와 무관하게 제보 초안 생성은 유지하면서, 정상 상황에서는 RAG 컨텍스트로 분류 정확도를 보강하는 구조를 만들었음',
        ],
      },
      {
        title: '챗봇 답변을 LLM 단독 판단이 아니라 백엔드 검색 결과에 묶기',
        items: [
          '문제: 사용자가 주변 위험이나 내 제보 상태를 질문할 때 LLM이 실제 DB에 없는 내용을 추측해 답변하면 서비스 신뢰도가 떨어짐',
          '원인: 챗봇 질문은 자연어지만 답변 근거는 사용자의 위치, 공개 제보, 본인 제보, 이슈 그룹 상태처럼 백엔드 권한과 검색 조건이 필요한 데이터였음',
          '해결: AI는 먼저 질문 의도를 ANSWER_DIRECT, SEARCH_NEARBY, MY_REPORTS로 분류하고, 백엔드가 권한과 위치 조건에 맞는 제보 목록을 검색한 뒤 그 결과만 AI answer 단계에 전달하는 2-step 흐름으로 분리',
          '결과: 챗봇이 실제 제보 데이터에 근거해 답변하고, 사용된 reportId를 함께 반환할 수 있어 근거 기반 대화 흐름을 확보',
        ],
      },
    ],
    testing: [
      'AI 테스트: 유사 민원 정규화, 공공 API 실패 처리, 임베딩 rerank, 분석 파이프라인, 챗봇 plan/answer/title 라우트를 pytest로 검증했습니다.',
      'Backend 테스트: 챗봇 서비스 테스트와 Spring 애플리케이션 컨텍스트 테스트로 AI 연동 흐름과 주요 도메인 조립을 확인했습니다.',
      'API 계약 검증: AI-BE 내부 API 명세를 기준으로 제보 분석, 임베딩, 챗봇 요청·응답 스키마를 맞춰 백엔드와 AI 서버의 결합 지점을 관리했습니다.',
    ],
    retrospective: [
      'FastAPI 서버 분리와 Structured Outputs를 도입해 비결정적인 AI 응답으로부터 백엔드 트랜잭션을 보호하는 시스템 내결함성 설계 시각 확보',
      '임베딩 벡터 기반의 Re-rank를 거쳐 RAG의 핵심 근거만 선별함으로써, AI 환각(Hallucination)을 제어하고 파이프라인을 최적화하는 방법론 체득',
      'PostGIS 공간 인덱스와 JPA Specification을 결합하여 복잡한 위치·관계형 비즈니스 로직을 DB 단에서 병목 없이 해결하는 실무적 최적화 역량 배양',
    ],
  },
};
