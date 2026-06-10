'use client'
import React, { useState } from 'react'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-container">
        <a href="/" className="site-logo">
          <img src="/assets/climateon_logo.png" alt="Climateon.id Logo" />
        </a>

        <nav className={`main-nav ${menuOpen ? 'active' : ''}`} id="main-nav">
          <a href="/">Beranda</a>
          <a href="/iklim-dijelaskan/">Memahami Iklim</a>
          <a href="/climate-watch/">Climate Watch</a>
          <a href="/data-story/">Data Story</a>
          <a href="/bedah-paper/">Bedah Paper</a>
          <a href="/peristiwa-ekstrem/">Peristiwa Ekstrem</a>
          <a href="/solusi-adaptasi/">Solusi & Adaptasi</a>
          <a href="/eksplorasi/">Eksplorasi</a>
          <a href="/tentang/">Tentang</a>
        </nav>

        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i data-lucide="menu"></i>
        </button>
      </div>
    </header>
  )
}
