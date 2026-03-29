'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RoleModal from '@/components/RoleModal'
import PdfViewer from '@/components/PdfViewer'
import DocCards from '@/components/DocCards'

const PORTFOLIO_ID = '1KCoilfUZxXN_uAND4HiQO92NVs7yoXdQ'
const RESUME_ID = '1hKSTGWgjIO7DfbdV2PwWzwPzuzvBM5D7'

export default function PlannerPage() {
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
                <div className="role-card__right">
                  <div className="role-card__notch" />
                </div>
              </div>
              <div className="role-card__meta">
                <p className="role-card__title">서비스 기획자</p>
                <p className="role-card__date">2026-03-22</p>
              </div>
            </div>
          </div>

          <DocCards
            onResumeClick={() => setPdfOpen('resume')}
            onPortfolioClick={() => setPdfOpen('portfolio')}
            // 이력서 카드
            resumeRole="서비스 기획자"
            resumeName="조예진"
            resumeDesc="사용자 중심의 서비스 기획과 UX 설계로 비즈니스 목표를 달성해왔습니다."
            // 포트폴리오 카드
            portfolioRole="서비스 기획자"
            portfolioName={'서비스 기획자\n조예진 입니다.'}
            portfolioDesc="IA 설계부터 스토리보드, UX 개선까지 서비스 전 과정을 기획한 플래너입니다."
            portfolioChips={['기획', 'Figma', 'Adobe XD']}
          />
        </div>
      </main>
      <Footer />

      {modalOpen && (
        <RoleModal
          role="서비스 기획자"
          description="사용자 중심의 서비스 기획과 UX 설계로 비즈니스 목표를 달성하는 서비스 기획자입니다."
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
