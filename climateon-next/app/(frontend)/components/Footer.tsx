import React from 'react'

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
              <img src="/assets/climateon_logo.png" alt="Climateon Logo" style={{height: '32px'}} />
            </div>
            <p>Platform informasi iklim Indonesia yang menyajikan penjelasan, analisis, visualisasi data, dan pemantauan kondisi iklim secara mudah dipahami.</p>
          </div>

          <div className="footer-links">
            <h4>Kategori</h4>
            <ul>
              <li><a href="/iklim-dijelaskan/">Memahami Iklim</a></li>
              <li><a href="/climate-watch/">Climate Watch</a></li>
              <li><a href="/data-story/">Data Story</a></li>
              <li><a href="/bedah-paper/">Bedah Paper</a></li>
              <li><a href="/peristiwa-ekstrem/">Peristiwa Ekstrem</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Tentang Kami</h4>
            <ul>
              <li><a href="/tentang/">Tentang Climateon.id</a></li>
              <li><a href="/tentang/">Kontak</a></li>
              <li><a href="#">Kebijakan Privasi</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Climateon.id - Memahami Iklim, Memahami Masa Depan.
        </div>
      </div>
    </footer>
  )
}
