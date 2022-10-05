let ActeursCSVData = {};
let ProjectsCSVData = {};
let acteursIdx = null;
let projectsIdx = null;
let results = null;

async function setup() {
    const ActeursDataJSON = await fetch('/assets/acteursData.json')
    ActeursCSVData = await ActeursDataJSON.json();

    const ProjectsDataJSON = await fetch('/assets/projectsData.json')
    ProjectsCSVData = await ProjectsDataJSON.json();

    // assign an ID so it's easier to look up later, it will be the same as index
    acteursIdx = lunr(function () {
      this.ref('id');
      this.field('Nom');
      ActeursCSVData.forEach(function (Data, acteursIdx) {
        Data.id = acteursIdx;
        this.add(Data); 
    }, this);
    });
  
    projectsIdx = lunr(function () {
      this.ref('id');
      this.field('Nom');
      ProjectsCSVData.forEach(function (Data, projectsIdx) {
        Data.id = projectsIdx;
        this.add(Data); 
    }, this);
    });

}


const searchCSV = function(CSVData, event) {

  let searchString = event.currentTarget.value;
  const searchContainer = document.getElementById(CSVData);
  
  if (searchString.length < 3) {
    searchContainer.querySelector('#results').classList.add("hidden");
    searchContainer.querySelector('#noResults').classList.remove("hidden");
    return;
  }
  // # char used in tags is not been matched in lunrjs so removing
  searchString = searchString.replace('#','');
  
  results = getSearchResults(searchString, CSVData);
  if (results.length > 0) {
    searchContainer.querySelector('#results').classList.remove("hidden");
    searchContainer.querySelector('#noResults').classList.add("hidden");
    const HTMLResultList = searchContainer.querySelector('#resultsList');
    HTMLResultList.innerHTML = buildResultsList(results);
  } else {
    searchContainer.querySelector('#results').classList.add("hidden");
    searchContainer.querySelector('#noResults').classList.remove("hidden");
  }
}

const getSearchResults = function(searchString, CSVData) {
  let data = {};
  if (CSVData === 'acteurs') {
    data.jsonFile = ActeursCSVData;
    data.idx = acteursIdx
  } else {
    data.jsonFile = ProjectsCSVData;
    data.idx = projectsIdx
  }
 
  let searchResults = data.idx.search(searchString ? searchString: '');

  searchResults.forEach(r => {
    r.Nom = data.jsonFile[r.ref].Nom;
  });

  return searchResults;
}

const buildResultsList = function(results) {
  let list = '';
  for (item of results) {
    list += '<li><a href="#'+item.Nom+'">'+item.Nom+'</a></li>';
  }
  return list;
}

setup();

