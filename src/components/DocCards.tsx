'use client'

interface Props {
  onResumeClick: () => void
  onPortfolioClick: () => void
  // 이력서 카드
  resumeRole?: string
  resumeName?: string
  resumeDesc?: string
  // 포트폴리오 카드
  portfolioRole?: string
  portfolioName?: string
  portfolioDesc?: string
  portfolioChips?: string[]
}

export default function DocCards({
  onResumeClick,
  onPortfolioClick,
  resumeRole = 'PM',
  resumeName = '조예진',
  resumeDesc = '서비스 기획과 실행을 연결하며 프로젝트의 목표를 현실적인 결과로 만들어왔습니다.',
  portfolioRole = 'Product Manager',
  portfolioName = '프로덕트 매니저\n조예진 입니다.',
  portfolioDesc = '웹·모바일 서비스 5개 프로젝트를 End-to-End로 리딩한 프로덕트 매니저입니다.',
  portfolioChips = ['PM', 'Figma', 'Jira'],
}: Props) {
  return (
    <div className="doc-cards">

      {/* 이력서 카드 */}
      <div className="doc-card doc-card--resume" onClick={onResumeClick}>
        <div className="doc-card__inner">
          <div className="doc-card__header">
            {/* <span className="doc-card__header-label">Resume</span> */}
            <div className="doc-card__role">{resumeRole}</div>
            <span className="doc-card__header-year">2026</span>
          </div>
          <div className="doc-card__body">
            
            <div className="doc-card__name">{resumeName}</div>
            <div className="doc-card__desc">{resumeDesc}</div>
          </div>
          <div className="doc-card__footer">
            <span className="doc-card__footer-label">이력서</span>
            <span className="doc-card__footer-arrow">→</span>
          </div>
        </div>
      </div>

      {/* 포트폴리오 카드 */}
      <div className="doc-card doc-card--portfolio" onClick={onPortfolioClick}>
        <div className="doc-card__inner">
          <div className="doc-card__header">
            {/* <span className="doc-card__header-label">Portfolio</span> */}
            <div className="doc-card__role">{portfolioRole}</div>
            <span className="doc-card__header-year">2026</span>
          </div>
          <div className="doc-card__body">
            <div className="doc-card__name">
              {portfolioName.split('\n').map((line, i) => (
                <span key={i}>{line}{i < portfolioName.split('\n').length - 1 && <br />}</span>
              ))}
            </div>
            <div className="doc-card__desc">{portfolioDesc}</div>
            {portfolioChips.length > 0 && (
              <div className="doc-card__chips">
                {portfolioChips.map(chip => (
                  <span key={chip} className="doc-card__chip">{chip}</span>
                ))}
              </div>
            )}
          </div>
          <div className="doc-card__footer">
            <span className="doc-card__footer-label">포트폴리오</span>
            <span className="doc-card__footer-arrow">→</span>
          </div>
        </div>
      </div>

    </div>
  )
}
