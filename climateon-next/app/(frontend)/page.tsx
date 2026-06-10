import React from 'react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
          <div className="container">
              <h1>Memahami Iklim Indonesia Melalui Data</h1>
              <p>Artikel, analisis, visualisasi, dan pemantauan iklim untuk membantu masyarakat memahami perubahan lingkungan yang terjadi di sekitar kita.</p>
              <div className="hero-actions">
                  <a href="/iklim-dijelaskan/" className="btn btn-primary">Jelajahi Artikel</a>
                  <a href="/climate-watch/" className="btn btn-outline">Lihat Climate Watch</a>
              </div>
          </div>
      </section>

      {/* Memahami Iklim */}
      <section className="section">
          <div className="container">
              <div className="section-title">
                  <h2>Memahami Iklim</h2>
                  <a href="/iklim-dijelaskan/" className="section-link">Lihat Semua</a>
              </div>
              <div className="grid-cards">
                  {/* To be connected to Payload CMS Posts */}
                  <div className="card">
                      <div className="card-content">
                          <span className="card-category">Iklim Dijelaskan</span>
                          <h3 className="card-title"><a href="#">Memahami Perubahan Suhu Global</a></h3>
                          <p className="card-desc">Bagaimana tren suhu bumi berubah dalam 100 tahun terakhir?</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Climate Watch */}
      <section className="section" style={{backgroundColor: 'var(--color-surface)'}}>
          <div className="container">
              <div className="section-title">
                  <h2>Climate Watch</h2>
                  <a href="/climate-watch/" className="section-link">Selengkapnya</a>
              </div>
              <div className="watch-grid">
                  <div className="watch-card">
                      <h3>ENSO</h3>
                      <div className="status" style={{color: '#64748b'}}>Netral</div>
                  </div>
                  <div className="watch-card">
                      <h3>IOD</h3>
                      <div className="status" style={{color: '#eab308'}}>Positif Lemah</div>
                  </div>
                  <div className="watch-card">
                      <h3>Anomali SST Indonesia</h3>
                      <div className="status" style={{color: '#ef4444'}}>+0.4°C</div>
                  </div>
                  <div className="watch-card">
                      <h3>Curah Hujan Nasional</h3>
                      <div className="status" style={{color: '#0ea5e9'}}>Atas Normal</div>
                  </div>
              </div>
          </div>
      </section>

      {/* Data Story Pilihan */}
      <section className="section">
          <div className="container">
              <div className="section-title">
                  <h2>Data Story Pilihan</h2>
                  <a href="/data-story/" className="section-link">Lihat Semua</a>
              </div>
              <div className="grid-cards">
                  <div className="card">
                      <div className="card-content">
                          <span className="card-category">Data Story</span>
                          <h3 className="card-title"><a href="#">Dampak El Nino 2023</a></h3>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Bedah Paper Terbaru */}
      <section className="section" style={{backgroundColor: 'var(--color-surface)'}}>
          <div className="container">
              <div className="section-title">
                  <h2>Bedah Paper Terbaru</h2>
                  <a href="/bedah-paper/" className="section-link">Lihat Semua</a>
              </div>
              <div className="grid-cards">
                  <div className="card">
                      <div className="card-content">
                          <span className="badge badge-blue mb-4">Bedah Paper</span>
                          <h3 className="card-title"><a href="#">Analisis Curah Hujan Ekstrem</a></h3>
                          <p className="card-desc">Ulasan paper tentang peningkatan frekuensi hujan ekstrem.</p>
                          <div className="card-meta">
                              <span>Jurnal Klimatologi (2025)</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}
