module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addCollection("posts_es", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/posts/*.md")
  );

  eleventyConfig.addCollection("posts_en", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/en/posts/*.md")
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
