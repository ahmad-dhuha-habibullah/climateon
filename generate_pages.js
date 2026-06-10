const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const pages = [
  { file: 'iklim-dijelaskan.njk', title: 'Iklim Dijelaskan', collection: 'iklim_dijelaskan', desc: 'Memahami konsep-konsep dasar iklim dan cuaca melalui artikel yang mudah dipahami.' },
  { file: 'bedah-paper.njk', title: 'Bedah Paper', collection: 'bedah_paper', desc: 'Menjembatani penelitian ilmiah dengan masyarakat umum.' },
  { file: 'data-story.njk', title: 'Data Story', collection: 'data_story', desc: 'Analisis berbasis data dan visualisasi.' },
  { file: 'peristiwa-ekstrem.njk', title: 'Peristiwa Ekstrem', collection: 'peristiwa_ekstrem', desc: 'Mempelajari fenomena cuaca dan iklim ekstrem yang mempengaruhi Indonesia.' },
  { file: 'solusi-adaptasi.njk', title: 'Solusi & Adaptasi', collection: 'solusi_adaptasi', desc: 'Upaya manusia menghadapi perubahan iklim.' }
];

pages.forEach(page => {
  const content = `---
layout: layouts/base.njk
title: "${page.title} - Climateon.id"
---

<div class="page-header">
    <div class="container">
        <h1>${page.title}</h1>
        <p>${page.desc}</p>
    </div>
</div>

<div class="container mb-8">
    <div class="grid-cards">
        {% for item in collections.${page.collection} %}
            <div class="card">
                {% if item.data.image %}
                <img src="{{ item.data.image }}" alt="{{ item.data.title }}" class="card-img">
                {% endif %}
                <div class="card-content">
                    <span class="card-category">{{ item.data.kategori }}</span>
                    <h3 class="card-title"><a href="{{ item.url }}">{{ item.data.title }}</a></h3>
                    <p class="card-desc">{{ item.data.description }}</p>
                    {% if item.data.jurnal %}
                    <div class="card-meta">
                        <span>{{ item.data.jurnal }} ({{ item.data.tahun }})</span>
                    </div>
                    {% else %}
                    <div class="card-meta">
                        <span>{{ item.date | readableDate }}</span>
                    </div>
                    {% endif %}
                </div>
            </div>
        {% endfor %}
    </div>
</div>
`;
  fs.writeFileSync(path.join(srcDir, page.file), content);
});

// Climate Watch specific page
const cwContent = `---
layout: layouts/base.njk
title: "Climate Watch - Climateon.id"
---

<div class="page-header">
    <div class="container">
        <h1>Climate Watch</h1>
        <p>Pemantauan kondisi iklim terkini Indonesia dan global.</p>
    </div>
</div>

<div class="container mb-8">
    <div class="watch-grid" style="margin-bottom: 3rem;">
        <div class="watch-card">
            <h3>ENSO Watch</h3>
            <div class="status" style="color: #64748b;">Netral</div>
            <div style="font-size:0.9rem; color:#64748b; margin-top:0.5rem;">Probabilitas: 65%</div>
        </div>
        <div class="watch-card">
            <h3>IOD Watch</h3>
            <div class="status" style="color: #eab308;">Positif Lemah</div>
        </div>
        <div class="watch-card">
            <h3>Marine Heatwave Watch</h3>
            <div class="status" style="color: #22c55e;">Aktivitas Rendah</div>
        </div>
    </div>

    <div class="grid-cards" style="grid-template-columns: 1fr 1fr;">
        <div class="card" style="padding: 2rem; text-align:center;">
            <h3>Curah Hujan Indonesia</h3>
            <div style="background:#f1f5f9; padding:4rem 0; border:2px dashed #cbd5e1; border-radius:8px; margin-top:1rem; color:#94a3b8;">
                [ Peta Placeholder ]
            </div>
        </div>
        <div class="card" style="padding: 2rem; text-align:center;">
            <h3>Anomali Suhu Laut Indonesia</h3>
            <div style="background:#f1f5f9; padding:4rem 0; border:2px dashed #cbd5e1; border-radius:8px; margin-top:1rem; color:#94a3b8;">
                [ Grafik Placeholder ]
            </div>
        </div>
    </div>
</div>
`;
fs.writeFileSync(path.join(srcDir, 'climate-watch.njk'), cwContent);

// Eksplorasi specific page
const eksContent = `---
layout: layouts/base.njk
title: "Eksplorasi - Climateon.id"
---

<div class="page-header">
    <div class="container">
        <h1>Eksplorasi</h1>
        <p>Jelajahi data iklim melalui alat visualisasi interaktif.</p>
    </div>
</div>

<div class="container mb-8">
    <div class="grid-cards">
        <div class="card" style="border:2px solid var(--color-accent);">
            <div class="card-content" style="text-align:center; padding: 3rem 1.5rem;">
                <span class="badge badge-blue mb-4">Segera Hadir</span>
                <h3 class="card-title">ENSO Explorer</h3>
                <p class="card-desc">Eksplorasi kondisi ENSO historis.</p>
            </div>
        </div>
        <div class="card" style="border:2px solid var(--color-accent);">
            <div class="card-content" style="text-align:center; padding: 3rem 1.5rem;">
                <span class="badge badge-blue mb-4">Segera Hadir</span>
                <h3 class="card-title">Marine Heatwave Explorer</h3>
                <p class="card-desc">Visualisasi kejadian marine heatwave.</p>
            </div>
        </div>
        <div class="card" style="border:2px solid var(--color-accent);">
            <div class="card-content" style="text-align:center; padding: 3rem 1.5rem;">
                <span class="badge badge-blue mb-4">Segera Hadir</span>
                <h3 class="card-title">Rainfall Explorer</h3>
                <p class="card-desc">Eksplorasi data curah hujan Indonesia.</p>
            </div>
        </div>
        <div class="card" style="border:2px solid var(--color-accent);">
            <div class="card-content" style="text-align:center; padding: 3rem 1.5rem;">
                <span class="badge badge-blue mb-4">Segera Hadir</span>
                <h3 class="card-title">Sea Surface Temperature Explorer</h3>
                <p class="card-desc">Visualisasi suhu permukaan laut.</p>
            </div>
        </div>
        <div class="card" style="border:2px solid var(--color-accent);">
            <div class="card-content" style="text-align:center; padding: 3rem 1.5rem;">
                <span class="badge badge-blue mb-4">Segera Hadir</span>
                <h3 class="card-title">Tropical Cyclone Explorer</h3>
                <p class="card-desc">Jelajahi lintasan siklon tropis.</p>
            </div>
        </div>
    </div>
</div>
`;
fs.writeFileSync(path.join(srcDir, 'eksplorasi.njk'), eksContent);

// Tentang specific page
const tentangContent = `---
layout: layouts/base.njk
title: "Tentang - Climateon.id"
---

<div class="page-header">
    <div class="container">
        <h1>Tentang Climateon.id</h1>
    </div>
</div>

<div class="container mb-8" style="max-width: 800px;">
    <div class="article-content">
        <p><strong>Climateon.id</strong> hadir untuk membantu masyarakat Indonesia memahami iklim, perubahan iklim, cuaca ekstrem, dan lingkungan melalui pendekatan berbasis data.</p>
        
        <p>Kami percaya bahwa informasi iklim yang mudah dipahami dapat membantu masyarakat mengambil keputusan yang lebih baik untuk masa depan.</p>
        
        <p>Climateon.id menggabungkan sains, visualisasi data, dan komunikasi publik untuk menjembatani kesenjangan antara penelitian dan masyarakat.</p>
    </div>
</div>
`;
fs.writeFileSync(path.join(srcDir, 'tentang.njk'), tentangContent);

console.log('Pages generated successfully.');
