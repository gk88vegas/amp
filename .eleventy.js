module.exports = function(eleventyConfig) {
  // Copy images folder to output
  eleventyConfig.addPassthroughCopy("src/images");
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
