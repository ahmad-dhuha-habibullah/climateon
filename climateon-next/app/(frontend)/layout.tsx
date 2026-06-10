import React from 'react'
import '../globals.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export const metadata = {
  title: 'Climateon.id - Memahami Iklim, Memahami Masa Depan',
  description: 'Platform informasi iklim Indonesia yang menyajikan penjelasan, analisis, visualisasi data, dan pemantauan kondisi iklim secara mudah dipahami.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" type="image/png" href="/assets/climateon_logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/lucide@latest" defer></script>
      </head>
      <body>
        <Header />
        <main id="app-root">
          {children}
        </main>
        <Footer />
        <script dangerouslySetInnerHTML={{__html: `
          window.onload = function() {
            if (window.lucide) {
              window.lucide.createIcons();
            }
          }
        `}} />
      </body>
    </html>
  )
}
