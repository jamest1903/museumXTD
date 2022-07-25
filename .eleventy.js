module.exports = config => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./images/');
  config.addPassthroughCopy("./css");
  config.addPassthroughCopy("./assets");
  
  let markdownIt = require("markdown-it");
  //let markdownItObsidian = require("markdown-it-obsidian")();
  let markdownItOptions = {
    html: true,
    linkify: true,
    linkPattern: /\[\[([\w\s/!]+)(\|([\w\s/!]+))?\]\]/,
  };
  let markdownLib = markdownIt(markdownItOptions)
  markdownLib.linkify.add("[[", {
    validate: /^\s?([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s?\]\]/,
    normalize: match => {
      const parts = match.raw.slice(2,-2).split("|");
      parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, "");
      match.text = (parts[1] || parts[0]).trim();
      match.url = `/Notes/${parts[0].trim()}/`; 
    }
  })
    //.use(markdownItObsidian)
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