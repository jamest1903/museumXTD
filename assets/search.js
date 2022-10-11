// https://lunrjs.com/guides/getting_started.html
let result = null;
let docs = null;
let idx = null;
let results = null;


async function setup() {
    result = await fetch('/assets/searchIndex.json');
    docs = await result.json();
    idx = null;
    // assign an ID so it's easier to look up later, it will be the same as index
    idx = lunr(function () {
      this.ref('id');
      this.field('title');
      this.field('content');
    docs.forEach(function (doc, idx) {
        doc.id = idx;
        this.add(doc); 
    }, this);
    });
}

const search = function() {
  let searchString = document.getElementById('searchString').value;
  if (searchString.length < 3) {
    document.getElementById('results').classList.add("hidden");
    document.getElementById('noResults').classList.add("hidden");
    return;
  }
  // # char used in tags is not been matched in lunrjs so removing
  searchString = searchString.replace('#','');
  let searchResults = idx.search(searchString ? searchString: '');
  // we need to add title, url from ref
  searchResults.forEach(r => {
    r.title = docs[r.ref].title;
    r.url = docs[r.ref].url;
  });
  results = searchResults;
  if (results.length > 0) {
    document.getElementById('results').classList.remove("hidden");
    document.getElementById('noResults').classList.add("hidden");
    const HTMLResultList = document.getElementById('resultList');
    HTMLResultList.innerHTML = buildResultsList(results);
  } else {
    document.getElementById('results').classList.add("hidden");
    document.getElementById('noResults').classList.remove("hidden");
  }
}

const buildResultsList = function(results) {
  let list = '';
  for (item of results) {
    list += '<li><a href="'+item.url+'">'+item.title+'</a></li>';
  }
  return list;
}

setup();

