'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <Header />

      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '80px',
        }}
      >
        {/* Single card - no tilt */}
        <div className={`home-card-single ${mounted ? 'home-card-single--visible' : ''}`}>
          {/* Glow shadow behind */}
          <div className="home-card-single__glow" />

          <div className="home-card-single__inner">
            {/* Upper area - two-tone split like design */}
            <div className="home-card-single__upper">
              {/* Left white panel */}
              <div className="home-card-single__left" />
              {/* Right lighter panel with tab notch */}
              <div className="home-card-single__right">
                <div className="home-card-single__notch" />
              </div>
            </div>

            {/* Bottom meta */}
            <div className="home-card-single__meta">
              <p className="home-card-single__name">JO YEJIN</p>
              <p className="home-card-single__date">2003-01-21</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
