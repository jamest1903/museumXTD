module.exports = config => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./images/');
  config.addPassthroughCopy("./css");
  config.addPassthroughCopy("./assets");
  
  let markdownIt = require("markdown-it");
  let markdownItObsidian = require("markdown-it-obsidian")();
  let markdownItOptions = {
    html: true,
  };
  let markdownLib = markdownIt(markdownItOptions)
    .use(markdownItObsidian)
    config.setLibrary("md", markdownLib);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: '.',
      includes: "_includes",
      data: "_data",
      output: 'dist'
    }
  };
};