// ─── Search Logic for ClimateOn ───
let searchIndex = null;
let searchLoaded = false;

async function loadSearchIndex() {
    if (searchLoaded) return;
    try {
        const res = await fetch('/search.json');
        if (!res.ok) throw new Error('Gagal memuat /search.json');
        searchIndex = await res.json();
        searchLoaded = true;
    } catch (err) {
        console.error('[ClimateOn Search]', err);
        const resultsEl = document.getElementById('search-results');
        if (resultsEl) resultsEl.innerHTML = '<div class="search-empty-state">Gagal memuat indeks. Coba refresh halaman.</div>';
    }
}

function openSearch() {
    const modal = document.getElementById('search-modal');
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        const input = document.getElementById('search-input');
        if (input) input.focus();
    }, 50);
    loadSearchIndex();
}

function closeSearch() {
    const modal = document.getElementById('search-modal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    const input = document.getElementById('search-input');
    if (input) input.value = '';
    const results = document.getElementById('search-results');
    if (results) results.innerHTML = '<div class="search-empty-state">Ketik sesuatu untuk mulai mencari...</div>';
}

function renderResults(query) {
    const resultsEl = document.getElementById('search-results');
    if (!resultsEl) return;

    if (!query || query.length < 2) {
        resultsEl.innerHTML = '<div class="search-empty-state">Ketik minimal 2 karakter untuk mencari...</div>';
        return;
    }

    if (!searchIndex || !Array.isArray(searchIndex)) {
        resultsEl.innerHTML = '<div class="search-empty-state">Memuat indeks pencarian...</div>';
        return;
    }

    const q = query.toLowerCase();
    const results = searchIndex.filter(item =>
        (item.title && item.title.toLowerCase().includes(q)) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.category && item.category.toLowerCase().includes(q)) ||
        (item.tags && item.tags.some(t => t && t.toLowerCase().includes(q)))
    ).slice(0, 12);

    if (results.length === 0) {
        resultsEl.innerHTML = `<div class="search-empty-state">Tidak ada hasil untuk "<strong>${query}</strong>"</div>`;
        return;
    }

    const labelMap = {
        'iklim': 'Iklim', 'cuaca': 'Cuaca', 'lingkungan': 'Lingkungan',
        'keberlanjutan': 'Keberlanjutan', 'teknologi': 'Teknologi',
        'riset': 'Riset', 'opini': 'Opini', 'bedah-paper': 'Bedah Paper'
    };

    resultsEl.innerHTML = results.map(item => {
        const title = item.title || 'Tanpa Judul';
        // Highlight matching text
        const highlighted = title.replace(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<mark>$1</mark>');
        const kategori = labelMap[item.category] || (item.category || '').replace(/-/g, ' ');
        return `<a href="${item.url}" class="search-result-item" onclick="closeSearch()">
            <span class="search-result-kategori">${kategori}</span>
            <div class="search-result-title">${highlighted}</div>
            <div class="search-result-date">${item.date || ''}</div>
        </a>`;
    }).join('');
}

// ─── Event Listeners ───
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('search-input');
    if (input) {
        input.addEventListener('input', (e) => renderResults(e.target.value.trim()));
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSearch();
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const modal = document.getElementById('search-modal');
            if (modal && modal.classList.contains('active')) {
                closeSearch();
            } else {
                openSearch();
            }
        }
    });

    // Pre-load the index after page is idle for faster first search
    if ('requestIdleCallback' in window) {
        requestIdleCallback(loadSearchIndex);
    } else {
        setTimeout(loadSearchIndex, 2000);
    }
});
