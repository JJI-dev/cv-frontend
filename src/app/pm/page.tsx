'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RoleModal from '@/components/RoleModal'
import PdfViewer from '@/components/PdfViewer'
import DocCards from '@/components/DocCards'

const PORTFOLIO_ID = '1KCoilfUZxXN_uAND4HiQO92NVs7yoXdQ'
const RESUME_ID = '1hKSTGWgjIO7DfbdV2PwWzwPzuzvBM5D7'

export default function PMPage() {
  const [mounted, setMounted] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [pdfOpen, setPdfOpen] = useState<'resume' | 'portfolio' | null>(null)

  useEffect(() => { setMounted(true) }, [])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <Header />
      <main
        className={mounted ? 'page-enter' : ''}
        style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
          paddingTop: '80px', padding: '80px var(--px) 0',
        }}
      >
        <div className="role-layout">
          <div className="role-card" onClick={() => setModalOpen(true)}>
            <div className="role-card__glow" />
            <div className="role-card__inner">
              <div className="role-card__upper">
                <div className="role-card__left" />
                <div className="role-card__right"><div className="role-card__notch" /></div>
              </div>
              <div className="role-card__meta">
                <p className="role-card__title">Product Manager</p>
                <p className="role-card__date">2026-03-22</p>
              </div>
            </div>
          </div>

          <DocCards
            resumeRole="PM"
            portfolioRole="Product Manager"
            portfolioName={'프로덕트 매니저\n조예진 입니다.'}
            portfolioDesc="웹·모바일 서비스 5개 프로젝트를 End-to-End로 리딩한 프로덕트 매니저입니다."
            portfolioChips={['PM', 'Figma', 'Jira']}
            onResumeClick={() => setPdfOpen('resume')}
            onPortfolioClick={() => setPdfOpen('portfolio')}
          />
        </div>
      </main>
      <Footer />

      {modalOpen && (
        <RoleModal
          role="Product Manager"
          description="웹·모바일 서비스 5개 프로젝트를 End-to-End로 리딩한 프로덕트 매니저입니다."
          onClose={() => setModalOpen(false)}
        />
      )}
      {pdfOpen && (
        <PdfViewer
          fileId={pdfOpen === 'resume' ? RESUME_ID : PORTFOLIO_ID}
          label={pdfOpen === 'resume' ? '이력서 · Resume' : '포트폴리오 · Portfolio'}
          onClose={() => setPdfOpen(null)}
        />
      )}
    </div>
  )
}
