const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src', 'content');

const categories = {
  'iklim-dijelaskan': [
    { title: 'Apa Itu ENSO?', category: 'Iklim Dijelaskan' },
    { title: 'Apa Itu IOD?', category: 'Iklim Dijelaskan' },
    { title: 'Apa Itu Marine Heatwave?', category: 'Iklim Dijelaskan' },
    { title: 'Mengapa Indonesia Tidak Memiliki Empat Musim?', category: 'Iklim Dijelaskan' },
    { title: 'Bagaimana Siklon Tropis Terbentuk?', category: 'Iklim Dijelaskan' },
    { title: 'Apa Itu Perubahan Iklim?', category: 'Iklim Dijelaskan' },
    { title: 'Mengenal Angin Monsun di Indonesia', category: 'Iklim Dijelaskan' },
    { title: 'Perbedaan Cuaca dan Iklim', category: 'Iklim Dijelaskan' },
    { title: 'Bagaimana Gas Rumah Kaca Bekerja?', category: 'Iklim Dijelaskan' },
    { title: 'Mengenal El Niño Modoki', category: 'Iklim Dijelaskan' },
    { title: 'Siklus Karbon dalam Sistem Iklim', category: 'Iklim Dijelaskan' },
    { title: 'Apa Itu La Niña?', category: 'Iklim Dijelaskan' }
  ],
  'bedah-paper': [
    { title: 'Marine Heatwaves in the Indonesian Seas: Trends and Variability', category: 'Marine Heatwave', authors: 'Susanto et al.', year: 2024, journal: 'Oceanography Journal', doi: '10.1234/ocean.2024.01' },
    { title: 'Future Rainfall Changes over Maritime Continent', category: 'Perubahan Iklim', authors: 'Hidayat et al.', year: 2023, journal: 'Climate Dynamics', doi: '10.1234/clim.2023.05' },
    { title: 'ENSO Influence on Indonesian Rainfall', category: 'ENSO', authors: 'Aldrian et al.', year: 2025, journal: 'Meteorology', doi: '10.1234/met.2025.11' },
    { title: 'Observed Sea Level Rise in Southeast Asia', category: 'Kenaikan Muka Laut', authors: 'Rahman et al.', year: 2023, journal: 'Sea Level Research', doi: '10.1234/sea.2023.02' },
    { title: 'Tropical Cyclone Variability in the Eastern Indian Ocean', category: 'Siklon Tropis', authors: 'Nugroho et al.', year: 2024, journal: 'Tropical Weather', doi: '10.1234/trop.2024.08' },
    { title: 'Climate Extremes under Global Warming Scenarios', category: 'Perubahan Iklim', authors: 'Sari et al.', year: 2025, journal: 'Global Env Change', doi: '10.1234/gec.2025.04' }
  ],
  'data-story': [
    { title: 'Daerah Paling Basah di Indonesia', category: 'Data Story' },
    { title: 'Perubahan Suhu Laut Indonesia Sejak 1993', category: 'Data Story' },
    { title: 'Siklon Tropis dan Curah Hujan Nusantara', category: 'Data Story' },
    { title: 'Tren Kenaikan Muka Laut di Indonesia', category: 'Data Story' },
    { title: 'Evolusi El Niño dan La Niña 30 Tahun Terakhir', category: 'Data Story' },
    { title: 'Wilayah Rentan Kekeringan', category: 'Data Story' }
  ],
  'peristiwa-ekstrem': [
    { title: 'Siklon Tropis', category: 'Peristiwa Ekstrem' },
    { title: 'Gelombang Panas Laut', category: 'Peristiwa Ekstrem' },
    { title: 'Banjir Besar', category: 'Peristiwa Ekstrem' },
    { title: 'Kekeringan', category: 'Peristiwa Ekstrem' },
    { title: 'Gelombang Tinggi', category: 'Peristiwa Ekstrem' },
    { title: 'Cuaca Ekstrem', category: 'Peristiwa Ekstrem' },
    { title: 'Puting Beliung', category: 'Peristiwa Ekstrem' },
    { title: 'Hujan Es', category: 'Peristiwa Ekstrem' },
    { title: 'Tanah Longsor', category: 'Peristiwa Ekstrem' }
  ],
  'solusi-adaptasi': [
    { title: 'Restorasi Mangrove', category: 'Solusi & Adaptasi' },
    { title: 'Infrastruktur Tahan Iklim', category: 'Solusi & Adaptasi' },
    { title: 'Pertanian Adaptif', category: 'Solusi & Adaptasi' },
    { title: 'Sistem Peringatan Dini', category: 'Solusi & Adaptasi' },
    { title: 'Kota Tahan Perubahan Iklim', category: 'Solusi & Adaptasi' },
    { title: 'Energi Terbarukan', category: 'Solusi & Adaptasi' }
  ]
};

// Create dirs and write files
Object.entries(categories).forEach(([dir, articles]) => {
  const dirPath = path.join(contentDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  articles.forEach((article, index) => {
    const slug = article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const date = new Date(Date.now() - index * 86400000).toISOString().split('T')[0];
    
    let frontmatter = `---
layout: layouts/article.njk
title: "${article.title}"
description: "Penjelasan ringkas tentang ${article.title} dan dampaknya bagi wilayah kepulauan Indonesia secara umum."
kategori: "${article.category}"
date: ${date}
image: "https://picsum.photos/seed/${slug}/800/400"
`;

    if (dir === 'bedah-paper') {
      frontmatter += `penulis: "${article.authors}"
tahun: ${article.year}
jurnal: "${article.journal}"
doi: "${article.doi}"
`;
    }

    frontmatter += `---\n\n`;
    
    let content = `Penjelasan mengenai **${article.title}** sangat penting bagi masyarakat. Indonesia sebagai negara kepulauan yang terletak di ekuator sangat rentan terhadap variabilitas iklim.

## Latar Belakang

Secara geografis, kepulauan Nusantara dipengaruhi oleh fenomena berskala global dan regional. Memahami ${article.title.toLowerCase()} merupakan kunci untuk meningkatkan kesiapsiagaan kita menghadapi potensi risiko lingkungan di masa depan.

Dalam beberapa dekade terakhir, kita telah mengamati perubahan signifikan yang memerlukan adaptasi serta mitigasi berbasis sains.`;

    if (dir === 'bedah-paper') {
      content = `Penelitian ini mengeksplorasi fenomena ${article.title} menggunakan data observasi dan model iklim resolusi tinggi.

## Ringkasan Singkat
Paper ini menyoroti tren utama dan variabilitas yang terjadi di perairan Nusantara atau wilayah atmosfer sekitarnya. 

## Pertanyaan Penelitian
Bagaimana ${article.category} berkembang di masa depan, dan seberapa besar dampaknya terhadap pola ekstrem iklim lokal?

## Metodologi
Para peneliti menggunakan data pengamatan in-situ dan produk reanalisis untuk memverifikasi tren perubahan selama 3 dekade terakhir.

## Temuan Utama
Ditemukan bahwa terdapat peningkatan frekuensi dan intensitas fenomena ekstrem, yang secara langsung berkaitan dengan pemanasan global.

## Apa Artinya untuk Indonesia?
Hasil studi ini menggarisbawahi perlunya penguatan sistem peringatan dini, terutama untuk wilayah pesisir dan pulau-pulau kecil yang paling rentan.

## Kelebihan dan Keterbatasan
Kelebihan studi ini terletak pada resolusi spasial yang tinggi, namun dibatasi oleh kurangnya data historis jangka panjang di beberapa stasiun pengamatan.

## Kesimpulan
Memahami mekanisme ${article.category} sangat penting untuk mengembangkan kebijakan adaptasi jangka panjang.`;
    }

    fs.writeFileSync(path.join(dirPath, `${slug}.md`), frontmatter + content);
  });
});

console.log('Dummy content generated successfully.');
