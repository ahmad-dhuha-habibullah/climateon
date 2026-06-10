const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // ─── Passthrough Copy ───
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({"climateon_logo.png": "climateon_logo.png"});
  eleventyConfig.addPassthroughCopy("src/content/**/*.{jpg,jpeg,png,gif,svg,webp}");

  // ─── Filters ───

  // Tanggal dalam Bahasa Indonesia
  eleventyConfig.addFilter("tanggalBaca", (dateObj) => {
    if (!dateObj) return "";
    const d = (dateObj instanceof Date) ? dateObj : new Date(dateObj);
    const bulan = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    if (!dateObj) return "";
    return DateTime.fromJSDate(new Date(dateObj), { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    if (!dateObj) return "";
    return new Date(dateObj).toISOString();
  });

  // Waktu baca (estimasi dari jumlah kata)
  eleventyConfig.addFilter("waktuBaca", (content) => {
    if (!content) return "1";
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return minutes < 1 ? "1" : String(minutes);
  });

  // Ringkasan otomatis
  eleventyConfig.addFilter("ringkasan", (content, length = 160) => {
    if (!content) return "";
    const text = content.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
    return text.length > length ? text.substring(0, length) + "..." : text;
  });

  // Slug filter
  eleventyConfig.addFilter("slug", (str) => {
    if (!str) return "";
    return str.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  });

  // Limit filter
  eleventyConfig.addFilter("limit", (arr, count) => {
    if (!arr) return [];
    return arr.slice(0, count);
  });

  // Filter berdasarkan kategori
  eleventyConfig.addFilter("filterKategori", (collection, kategori) => {
    if (!collection) return [];
    return collection.filter(item => item.data.category === kategori);
  });

  // Filter featured
  eleventyConfig.addFilter("featured", (collection) => {
    if (!collection) return [];
    return collection.filter(item => item.data.featured === true);
  });

  // Exclude item
  eleventyConfig.addFilter("exclude", (collection, url) => {
    if (!collection) return [];
    return collection.filter(item => item.url !== url);
  });

  // Cari penulis dari slug
  eleventyConfig.addFilter("cariPenulis", (slug, penulisCollection) => {
    if (!slug || !penulisCollection) return null;
    const penulisPage = penulisCollection.find(p => p.fileSlug === slug);
    if (!penulisPage) return null;
    return { ...penulisPage.data, slug: penulisPage.fileSlug };
  });

  // Shuffle array
  eleventyConfig.addFilter("shuffle", (arr) => {
    if (!arr) return [];
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });

  // startsWith filter for active nav
  eleventyConfig.addFilter("startsWith", (str, prefix) => {
    if (!str || !prefix) return false;
    return str.toString().startsWith(prefix);
  });

  // Ensure URL has http/https protocol
  eleventyConfig.addFilter("ensureUrl", (url) => {
    if (!url) return "";
    const str = url.toString().trim();
    if (str.startsWith("http://") || str.startsWith("https://") || str.startsWith("mailto:")) {
      return str;
    }
    // If it's something like "user@example.com", we might prepend mailto:, but let's assume URLs for now
    return "https://" + str;
  });

  // ─── Collections ───

  // Semua artikel (gabungan semua kategori)
  eleventyConfig.addCollection("semuaArtikel", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Koleksi per kategori
  const kategori = [
    "iklim", "cuaca", "lingkungan", "keberlanjutan",
    "teknologi", "riset", "opini", "bedah-paper"
  ];

  kategori.forEach(kat => {
    eleventyConfig.addCollection(kat.replace("-", "_"), function(collectionApi) {
      return collectionApi.getFilteredByGlob(`src/content/${kat}/**/*.md`)
        .sort((a, b) => b.date - a.date);
    });
  });

  // Koleksi artikel unggulan
  eleventyConfig.addCollection("unggulan", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/**/*.md")
      .filter(item => item.data.featured === true)
      .sort((a, b) => b.date - a.date);
  });

  // Koleksi tag
  eleventyConfig.addCollection("semuaTag", function(collectionApi) {
    let tagSet = new Set();
    collectionApi.getFilteredByGlob("src/content/**/*.md").forEach(item => {
      if (item.data.tags) {
        item.data.tags.forEach(tag => tagSet.add(tag.toLowerCase()));
      }
    });
    return [...tagSet].sort();
  });

  // ─── Shortcodes ───

  eleventyConfig.addShortcode("figure", function(src, alt, caption) {
    return `<figure class="content-figure">
      <img src="${src}" alt="${alt}" loading="lazy">
      <figcaption>${caption}</figcaption>
    </figure>`;
  });

  eleventyConfig.addShortcode("tahun", function() {
    return new Date().getFullYear().toString();
  });

  // ─── Config ───
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
