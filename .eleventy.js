const fs = require("fs")
const path = require("path")
let avoid=['.eleventy.js','.git','.gitignore','.obsidian','assets','css','docs','node_modules','tables','_data','_includes','package.json','package-lock.json'];

const getAllFiles = function(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath)
  var arrayOfFiles = arrayOfFiles || [];
  
  files.forEach(function(file) {
    let skip=false;
    avoid.forEach(function(f){
      if(f==file)
        skip=true;
    })
    if(!skip){
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
      } else {
        arrayOfFiles.push(path.join(dirPath, "/", file))
      }
    }
  })
  return arrayOfFiles
}

// https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/
function extractExcerpt(article) {
  if (!article.hasOwnProperty('templateContent')) {
    console.warn('Failed to extract excerpt: Document has no property "templateContent".');
    return null;
  }

  let excerpt = null;
  const content = article.templateContent;
  const excerptHTML = content.trim();
  // remove HTML tags
  excerpt = excerptHTML.replace(/<\/?[^>]+(>|$)/g, "").trim();
  // remove line breaks
  excerpt = excerpt.replace(/(\r\n|\n|\r)/gm, " ");
  return excerpt;
  }

module.exports = config => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./images/');
  config.addPassthroughCopy("./css");
  config.addPassthroughCopy("./assets");

  //Creating a collection of all files to loop in creating search index
  config.addCollection("allFiles", function(collection) {
    return collection.getFilteredByGlob("Notes/*.md").sort((a,b) => {
      if(a.data.date < b.data.date) return -1;
      if(a.data.date > b.date.date) return 1;
      return 0;
    });
  });

  config.addShortcode('excerpt', article => extractExcerpt(article));

  const all_files = getAllFiles(process.cwd());

  const getFolder = function(fileName) {
    for (const filePathString of all_files) {
      if(filePathString.indexOf(fileName+'.md')>-1){
        let filePathArray = filePathString.split(path.sep);
        let i = filePathArray.indexOf(fileName+'.md');      
        if(filePathArray[i-1] === 'museumXTD') {
          return '';
        }
        return filePathArray[i-1];
      }
    }
    return '';
  }
  
  let markdownIt = require("markdown-it");
  //let markdownItObsidian = require("markdown-it-obsidian")();
  let markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true,
    linkPattern: /\[\[([\w\s/!]+)(\|([\w\s/!]+))?\]\]/,
  };

  const slugify = require("slugify");

  let markdownLib = markdownIt(markdownItOptions)
    .use(require('markdown-it-anchor'), {slugify});
  markdownLib.linkify.add("[[", {
    validate: /^\s?([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s?\]\]/,
    normalize: match => {
      const parts = match.raw.slice(2,-2).split("|");
      parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, "");
      match.text = (parts[1] || parts[0]).trim();
      // anchor links
      if (parts[0].includes('#')) {
        match.url = `#${slugify(parts[0].trim())}`;
      } else if(parts[0] === 'index'){
        match.url = `/${parts[0].trim()}.html`;
      } else {
        const parentFolder = getFolder(parts[0]);
        if(parentFolder) {
          match.url = `/${parentFolder}/${parts[0].trim()}/`;
        } else {
          match.url = `/${parts[0].trim()}/`;
        }
      }
    }
  })
  config.setLibrary("md", markdownLib);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: '.',
      includes: "_includes",
      data: "_data",
      output: 'docs'
    }
  };
};