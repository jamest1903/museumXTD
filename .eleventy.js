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

module.exports = config => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./images/');
  config.addPassthroughCopy("./css");
  config.addPassthroughCopy("./assets");

  const all_files = getAllFiles(process.cwd());
  console.log(all_files);

  const getFolder = function(fileName) {
    for (const file of all_files) {
      if(file.indexOf(fileName)>-1){
        let filePath = file.split(path.sep);
        let i = filePath.indexOf(fileName+'.md');
        if(filePath[i-1] === 'museumXTD') {
          return '';
        }
        return filePath[i-1];
      }
    }
    return '';
  }
  
  let markdownIt = require("markdown-it");
  //let markdownItObsidian = require("markdown-it-obsidian")();
  let markdownItOptions = {
    html: true,
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
        console.log(parentFolder);
        console.log(parts[0]);
        if(parentFolder) {
          match.url = `${parentFolder}/${parts[0].trim()}/`;
        } else {
          match.url = `${parts[0].trim()}/`;
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