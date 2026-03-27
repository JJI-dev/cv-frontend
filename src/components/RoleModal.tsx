'use client'

import { useEffect } from 'react'

interface Props {
  role: string
  description: string
  onClose: () => void
}

export default function RoleModal({ role, description, onClose }: Props) {
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
      className="modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-box">
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '20px', right: '20px',
            width: '32px', height: '32px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '50%', background: '#f0f0f0', color: '#666',
            fontSize: '18px', lineHeight: 1, transition: 'background 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#e0e0e0')}
          onMouseLeave={e => (e.currentTarget.style.background = '#f0f0f0')}
        >
          ×
        </button>

        {/* Role tag */}
        <div style={{
          display: 'inline-block',
          fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: '#888',
          border: '1px solid #e0e0e0', borderRadius: '20px',
          padding: '4px 12px', marginBottom: '20px',
          fontFamily: 'Poppins, sans-serif',
        }}>
          {role}
        </div>

        {/* Description */}
        <p style={{
          fontFamily: 'Pretendard, sans-serif',
          fontWeight: 400, fontSize: '16px', lineHeight: 1.8,
          color: '#333', marginBottom: '32px', letterSpacing: '-0.03em',
        }}>
          {description}
        </p>

        {/* CTA */}
        <a
          href="https://career.jji.kr"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '100%', padding: '14px',
            background: '#0a0a0a', color: '#fff',
            borderRadius: '10px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500, fontSize: '14px', letterSpacing: '-0.02em',
            transition: 'opacity 0.2s', textDecoration: 'none',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          경력 홈페이지로 가기 →
        </a>
      </div>
    </div>
  )
}
