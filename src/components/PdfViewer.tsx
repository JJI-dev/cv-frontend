'use client'

import { useEffect } from 'react'

interface Props {
  fileId: string
  label: string
  onClose: () => void
}

export default function PdfViewer({ fileId, label, onClose }: Props) {
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`
  const viewUrl = `https://drive.google.com/file/d/${fileId}/view`

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 300,
        display: 'flex', flexDirection: 'column',
        animation: 'fadeIn 0.2s ease forwards',
      }}
    >
      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 24px',
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(4px)',
        borderBottom: '1px solid #eee',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onClose}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '13px', color: '#666',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#000')}
            onMouseLeave={e => (e.currentTarget.style.color = '#666')}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
            </svg>
            닫기
          </button>
          <span style={{ width: '1px', height: '16px', background: '#e0e0e0' }} />
          <span style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500, fontSize: '13px',
            color: '#0a0a0a', letterSpacing: '-0.02em',
          }}>
            {label}
          </span>
        </div>

        <a
          href={viewUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '12px', color: '#888',
            padding: '6px 14px', border: '1px solid #e8e8e8', borderRadius: '20px',
            transition: 'all 0.15s', textDecoration: 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#0a0a0a'
            e.currentTarget.style.color = '#fff'
            e.currentTarget.style.borderColor = '#0a0a0a'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#888'
            e.currentTarget.style.borderColor = '#e8e8e8'
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          새 탭으로 열기
        </a>
      </div>

      {/* iframe */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <iframe
          src={embedUrl}
          allow="autoplay"
          title={label}
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        />
      </div>
    </div>
  )
}
