const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Passthrough copy for images and CSS
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("climateon_logo.png");
  
  // Colocate images in content directories
  eleventyConfig.addPassthroughCopy("src/content/**/*.{jpg,jpeg,png,gif,svg}");

  // Figure shortcode for images with captions
  eleventyConfig.addShortcode("figure", function(src, alt, caption) {
    return `<figure class="content-figure">
      <img src="${src}" alt="${alt}">
      <figcaption>${caption}</figcaption>
    </figure>`;
  });

  // Custom filter for resolving colocated assets
  eleventyConfig.addFilter("resolveAsset", function(assetPath, pageUrl) {
    if (!assetPath) return "";
    // If the path is relative (starts with "./"), resolve it against the page URL
    if (assetPath.startsWith("./")) {
      return pageUrl + assetPath.slice(2);
    }
    return assetPath;
  });

  // Custom filter for readable dates (e.g. "12 Juni 2024")
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).setLocale('id').toFormat("dd MMMM yyyy");
  });

  // Create collections based on directories
  eleventyConfig.addCollection("iklim_dijelaskan", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/iklim-dijelaskan/**/*.md").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("bedah_paper", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/bedah-paper/**/*.md").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("data_story", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/data-story/**/*.md").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("peristiwa_ekstrem", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/peristiwa-ekstrem/**/*.md").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("solusi_adaptasi", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/solusi-adaptasi/**/*.md").sort((a, b) => b.date - a.date);
  });

  // Extract unique topics
  eleventyConfig.addCollection("topics", function(collectionApi) {
    let topicSet = new Set();
    const items = collectionApi.getFilteredByGlob(["src/content/**/*.md"]);
    items.forEach(item => {
      if ('topic' in item.data) {
        topicSet.add(item.data.topic);
      }
      if ('kategori' in item.data) {
        topicSet.add(item.data.kategori);
      }
    });
    return [...topicSet].sort();
  });

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
