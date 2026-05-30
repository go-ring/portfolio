import { Github, Link, Mail, Phone, Printer } from 'lucide-react';
import {
  awards,
  certifications,
  education,
  projects,
  research,
  skills,
} from '@/constants/portfolio';
import { profileData } from '@/constants/profile';
import type { Project } from '@/types/project';
import profilePhoto from '@/assets/images/profile1.jpg';
import { resolvePdfImage } from '@/utils/pdfImageResolver';
import '@/styles/pdf.css';

type CaseStudyContent = {
  title: string;
  theme: 'green' | 'blue' | 'yellow';
  subtitle: string;
  intro: string;
  features: string[];
  techGroups: { title: string; items: string[] }[];
  roleGroups: { title: string; items: string[] }[];
  result: string;
};

const caseStudies: CaseStudyContent[] = [
  {
    title: '빼꼼(BBAEKKOM)',
    theme: 'green',
    subtitle: 'AI 캐릭터 대화와 아동 성장 리포트를 연결한 육아 플랫폼',
    intro:
      '사진 속 사물을 AI 캐릭터로 만들고, 아동과 실시간 음성 대화를 나누며, 대화 데이터를 분석해 부모에게 성장 리포트와 육아 가이드를 제공하는 서비스입니다.',
    features: [
      'Streaming STT와 Qwen ASR을 결합해 대화 지연과 전사 정확도를 함께 개선했습니다.',
      'pgvector 기반 시간 소멸식 RAG로 과거 대화를 기억하는 장기 대화 구조를 설계했습니다.',
      'DeepEval G-Eval 기반 아동 안전 루브릭으로 대화 안전 통과율을 93.33%까지 개선했습니다.',
      'Kiwi 형태소 분석과 LLM 교차 검증을 활용해 주간 언어 발달 리포트를 생성했습니다.',
    ],
    techGroups: [
      { title: 'Backend', items: ['Java 21', 'Spring Boot', 'JPA', 'QueryDSL', 'Redis'] },
      { title: 'AI', items: ['OpenAI GPT-4o', 'Qwen ASR', 'DeepEval', 'Kiwi', 'pgvector'] },
      { title: 'Infra', items: ['AWS EC2', 'S3', 'Jenkins', 'Blue-Green', 'Grafana'] },
    ],
    roleGroups: [
      {
        title: '음성 대화',
        items: ['하이브리드 STT/ASR 파이프라인 설계', 'RAG 기억 엔진 연동', '실패 복구 흐름 구성'],
      },
      {
        title: 'AI 평가',
        items: ['10대 아동 안전 루브릭 설계', 'G-Eval 평가 환경 구축', '프롬프트 개선 루프 운영'],
      },
      {
        title: '리포트',
        items: ['주간 리포트 도메인 API 구현', '발달 지표 분석 흐름 설계', '리포트 UI/UX 구현'],
      },
    ],
    result: '대화 안전성, 기억 일관성, 리포트 제공을 하나의 제품 경험으로 연결했습니다.',
  },
  {
    title: '백구(BAEKGU)',
    theme: 'blue',
    subtitle: 'GitHub 역량 분석과 기업 데이터를 결합한 채용 매칭 플랫폼',
    intro:
      '지원자의 GitHub 코드와 기업 재무/뉴스 데이터를 분석해 맞춤형 기업 추천과 근거 중심 자기소개서 작성을 돕는 채용 플랫폼입니다.',
    features: [
      'Spring Boot와 FastAPI 서버를 분리해 AI 분석 중 배포가 일어나도 파이프라인이 끊기지 않도록 구성했습니다.',
      'QueryDSL Fetch Join으로 채팅방 목록 조회의 N+1 문제를 해결해 응답 속도를 1.2초에서 50ms 수준으로 개선했습니다.',
      'Polling 대신 WebSocket STOMP를 적용해 실시간성을 확보하고 네트워크 대역폭을 약 85% 절감했습니다.',
      'Redis Atomic Counter 기반 비정상 요청 차단으로 보안 필터 응답 시간을 30ms에서 2ms로 줄였습니다.',
    ],
    techGroups: [
      { title: 'Backend', items: ['Java 17', 'Spring Boot', 'JPA', 'QueryDSL', 'WebSocket'] },
      { title: 'AI/Data', items: ['FastAPI', 'OpenAI', 'PaddleOCR', 'OpenDartReader'] },
      { title: 'Infra', items: ['AWS EC2', 'S3', 'Docker', 'Nginx', 'GitLab CI/CD'] },
    ],
    roleGroups: [
      {
        title: '아키텍처',
        items: ['Backend-AI 서버 분리', '비동기 분석 콜백 설계', '배포 내성 구조 확보'],
      },
      {
        title: '성능 개선',
        items: ['채팅 조회 N+1 제거', 'Redis 보안 필터 최적화', 'WebSocket 통신망 구축'],
      },
      {
        title: '운영',
        items: ['Prometheus/Grafana/Loki 구성', '장애 관찰 환경 구축', '배포 중 분석 지속성 검증'],
      },
    ],
    result: 'AI 분석, 실시간 채팅, 보안 필터가 동시에 동작하는 환경에서도 안정성을 확보했습니다.',
  },
  {
    title: '알고가자(Algogo)',
    theme: 'yellow',
    subtitle: '스터디 운영과 코드 리뷰를 자동화한 알고리즘 학습 플랫폼',
    intro:
      '문제 제출, 리뷰 강제 정책, AI 코드 피드백, 학습 지표를 통합해 알고리즘 스터디 운영 부담을 줄인 플랫폼입니다.',
    features: [
      '타인의 코드를 일정 횟수 이상 리뷰해야 다음 제출이 가능한 제출 잠금 기반 리뷰 루프를 설계했습니다.',
      'OpenAI 코드 평가를 트랜잭션 외부 비동기 이벤트로 분리해 DB 커넥션 풀 고갈을 방어했습니다.',
      'Nginx와 Actuator health check를 연동한 Blue-Green 배포로 무중단 배포를 달성했습니다.',
      'Docker layer cache와 non-root 런타임 적용으로 CI 빌드 시간을 12분에서 4분으로 줄였습니다.',
    ],
    techGroups: [
      { title: 'Backend', items: ['Java 17', 'Spring Boot', 'JPA', 'QueryDSL', 'Redis'] },
      { title: 'AI', items: ['OpenAI API', 'G-Eval', 'WebClient'] },
      { title: 'Infra', items: ['Docker', 'Jenkins', 'Nginx', 'S3', 'CloudFront'] },
    ],
    roleGroups: [
      {
        title: '도메인',
        items: ['문제집/제출/리뷰 API 설계', '계층형 리뷰 O(N) 조립', '제출 잠금 정책 구현'],
      },
      {
        title: '장애 방어',
        items: ['AI 평가 비동기 격리', 'DB 커넥션 풀 고갈 방지', '외부 API 지연 전파 차단'],
      },
      {
        title: '배포',
        items: ['Blue-Green 파이프라인 구축', 'Health check 기반 전환', 'CI 빌드 캐시 최적화'],
      },
    ],
    result: '약 120명의 실사용 환경에서 리뷰 선순환과 운영 자동화 구조를 검증했습니다.',
  },
];

function asArray(value?: string | string[]) {
  if (!value) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

function imageList(project: Project) {
  const images = project.images;
  if (!images) {
    return [];
  }

  return [
    images.preview,
    images.main,
    ...asArray(images.architecture),
    ...(images.overviewGallery ?? []),
  ]
    .filter((image): image is string => Boolean(image))
    .map(resolvePdfImage)
    .filter((image): image is string => Boolean(image));
}

function findProject(title: string) {
  const project = projects.find((item) => item.title === title);
  if (!project) {
    throw new Error(`Project not found: ${title}`);
  }
  return project;
}

function PageShell({
  section,
  page,
  tone = 'blue',
  children,
}: {
  section: string;
  page: string;
  tone?: 'blue' | 'green' | 'yellow';
  children: React.ReactNode;
}) {
  return (
    <section className={`pdf-slide pdf-tone-${tone}`}>
      <div className="pdf-card">
        <div className="pdf-page-label">
          {section} <span>| {page}</span>
        </div>
        {children}
      </div>
    </section>
  );
}

function SectionTitle({
  label,
  title,
}: {
  label?: string;
  title: string;
}) {
  return (
    <header className="pdf-section-title">
      {label ? <span>{label}</span> : null}
      <h1>{title}</h1>
    </header>
  );
}

function formatEducationTitle(item: (typeof education)[number]) {
  if (item.school.includes('SSAFY')) {
    return '삼성 청년 SW·AI 아카데미 14기';
  }
  return `${item.school} ${item.degree}`.trim();
}

function CoverPage() {
  return (
    <section className="pdf-slide pdf-cover-slide pdf-tone-blue">
      <div className="pdf-card pdf-cover-card">
        <div className="pdf-cover-title">
          <h1>PORTFOLIO</h1>
          <p>Backend Developer</p>
        </div>
        <div className="pdf-cover-contact">
          <strong>이가은</strong>
          <div>
            <p><Mail size={18} /><span>{profileData.email}</span></p>
            <p><Phone size={18} /><span>{profileData.phone}</span></p>
            <p><Github size={18} /><span>{profileData.social.github}</span></p>
            <p><Link size={18} /><span>https://go-ring.github.io/portfolio/</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectOverviewCard({ project, index }: { project: Project; index: number }) {
  const image = imageList(project)[0];
  const tones = ['green', 'blue', 'pink', 'yellow', 'purple', 'gray'];

  return (
    <article className={`pdf-project-card pdf-project-${tones[index % tones.length]}`}>
      <figure>
        {image ? <img src={image} alt={`${project.title} preview`} /> : null}
      </figure>
      <h2>{project.title}</h2>
      <p>{project.period}</p>
      <strong>{project.shortDescription}</strong>
      <small>담당역할 : {asArray(project.role).join(', ')}</small>
    </article>
  );
}

function ProjectIntro({ content, page }: { content: CaseStudyContent; page: string }) {
  const project = findProject(content.title);
  const image = imageList(project)[0];

  return (
    <PageShell section="PROJECTS" page={page} tone={content.theme}>
      <div className="pdf-project-intro">
        <div className="pdf-project-name">
          <div className="pdf-project-logo">{project.title.slice(0, 2)}</div>
          <h1>{project.title}</h1>
        </div>
        <div className="pdf-project-visual">
          {image ? <img src={image} alt={`${project.title} visual`} /> : null}
        </div>
        <div className="pdf-project-copy">
          <h2>소개</h2>
          <p>{content.intro}</p>
          <h2>핵심 기능</h2>
          <ul>
            {content.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <footer>
            <strong>{project.type} | {project.period}</strong>
            <span>{content.result}</span>
          </footer>
        </div>
      </div>
    </PageShell>
  );
}

function ProjectRole({ content, page }: { content: CaseStudyContent; page: string }) {
  return (
    <PageShell section="PROJECTS" page={page} tone={content.theme}>
      <div className="pdf-role-page">
        <div>
          <SectionTitle title={content.title} />
          <div className="pdf-tech-list">
            {content.techGroups.map((group) => (
              <section key={group.title}>
                <h2>{group.title} 기술 스택</h2>
                <div>
                  {group.items.slice(0, 4).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
        <div className="pdf-role-list">
          <h2>담당 역할</h2>
          {content.roleGroups.map((group) => (
            <section key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
          <p>{content.result}</p>
        </div>
      </div>
    </PageShell>
  );
}

export function PDFPortfolioPage() {
  return (
    <div className="pdf-root">
      <div className="pdf-toolbar">
        <a href="./" className="pdf-toolbar-link">웹 포트폴리오로 돌아가기</a>
        <button type="button" onClick={() => window.print()}>
          <Printer size={16} />
          PDF 출력
        </button>
      </div>

      <main className="pdf-document">
        <CoverPage />

        <PageShell section="ABOUT ME" page="01">
          <div className="pdf-about">
            <SectionTitle
              title="데이터와 논리로 성장하는 백엔드 개발자 이가은입니다."
            />
            <p className="pdf-tags"># 책임감 # 성장형 # 문제해결 # 협업</p>
            <div className="pdf-about-side">
              <figure className="pdf-about-photo">
                <img src={profilePhoto} alt="이가은 프로필 사진" />
              </figure>
              <div className="pdf-contact-list" aria-label="Contact">
                <p><Mail size={16} /><span>{profileData.email}</span></p>
                <p><Phone size={16} /><span>{profileData.phone}</span></p>
                <p><Github size={16} /><span>{profileData.social.github}</span></p>
                <p><Link size={16} /><span>https://go-ring.github.io/portfolio/</span></p>
              </div>
            </div>
            <div className="pdf-about-info">
              <section>
                <h2>Education</h2>
                {education.map((item) => (
                  <p key={`${item.school}-${item.period}`}>
                    <strong>{formatEducationTitle(item)}</strong>
                    <span>{item.period}</span>
                  </p>
                ))}
              </section>
              <section>
                <h2>Licenses</h2>
                {certifications.map((item) => (
                  <p key={item.name}>
                    <strong>{item.name}</strong>
                    <span>{item.date}</span>
                  </p>
                ))}
              </section>
              <section>
                <h2>Awards</h2>
                {awards.map((item) => (
                  <p key={`${item.competition}-${item.name}`}>
                    <strong>{item.competition} {item.name}</strong>
                    <span>{item.date}</span>
                  </p>
                ))}
              </section>
              <section>
                <h2>Research</h2>
                {research.slice(0, 2).map((item) => (
                  <p key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.date}</span>
                  </p>
                ))}
              </section>
            </div>
          </div>
        </PageShell>

        <PageShell section="ABOUT ME" page="02">
          <div className="pdf-skills-page">
            <SectionTitle label="Skills" title="SKILLS" />
            <div className="pdf-skill-columns">
              {skills.map((group) => (
                <section key={group.category}>
                  <h2>{group.category}</h2>
                  <div>
                    {group.items.map((skill) => (
                      <span key={`${group.category}-${skill.name}`}>{skill.name}</span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </PageShell>

        <PageShell section="PROJECTS" page="03">
          <div className="pdf-projects-overview">
            <SectionTitle label="Projects" title="PROJECTS" />
            <div>
              {projects.map((project, index) => (
                <ProjectOverviewCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </PageShell>

        {caseStudies.map((content, index) => (
          <div key={content.title}>
            <ProjectIntro content={content} page={String(index * 2 + 4).padStart(2, '0')} />
            <ProjectRole content={content} page={String(index * 2 + 5).padStart(2, '0')} />
          </div>
        ))}
      </main>
    </div>
  );
}
