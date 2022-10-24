import {BuildActeursHTML, BuildProjectsHTML} from '/assets/buildCSVContent.js';

let ActeursCSVData = {};
let filteredActeursData = {}
let ProjectsCSVData = {};
let filteredProjectsData = {}
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
    this.field('Expertise numérique 1');
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

  document.getElementById('searchActeurs').addEventListener('input', (event) => {
    searchCSV('acteurs', event);
  });
  document.getElementById('searchProjects').addEventListener('input', (event) => {
    searchCSV('projects', event);
  });
}

const searchCSV = function (CSVData, event) {

  let searchString = event.currentTarget.value;
  const searchContainer = document.getElementById(CSVData);

  if (searchString.length < 3) {
    searchContainer.querySelector('#noResults').classList.add("hidden");
    checkRebuildCSVHTML(CSVData);
    return;
  }
  // # char used in tags is not been matched in lunrjs so removing
  searchString = searchString.replace('#', '');
  results = getSearchResults(searchString, CSVData);

  if (results.length > 0) {
    // If searhing on Acteurs we want to update the list in the HTML
    if (CSVData === 'acteurs') {
      filteredActeursData = filterActeursResults(results);
      RebuiltActeursHTML(filteredActeursData);
      searchContainer.querySelector('#noResults').classList.add("hidden");
    } else {
      filteredProjectsData = filterProjectsResults(results);
      RebuiltProjectsHTML(filteredProjectsData);
      searchContainer.querySelector('#noResults').classList.add("hidden");
    }
  } else {
    checkRebuildCSVHTML(CSVData);
    searchContainer.querySelector('#noResults').classList.remove("hidden");
  }
}

const getSearchResults = function (searchString, CSVData) {
  let data = {};
  if (CSVData === 'acteurs') {
    data.jsonFile = ActeursCSVData;
    data.idx = acteursIdx
  } else {
    data.jsonFile = ProjectsCSVData;
    data.idx = projectsIdx
  }

  let searchResults = data.idx.search(searchString ? searchString : '');

  searchResults.forEach(r => {
    r.Nom = data.jsonFile[r.ref].Nom;
  });
  
  return searchResults;
}

const filterActeursResults = function (results) {
  const result = ActeursCSVData.filter((acteur) => {
    return results.some((res) => {
      return res.Nom === acteur.Nom;
    });
  });
  return result;
}

const filterProjectsResults = function (results) {
  const result = ProjectsCSVData.filter((project) => {
    return results.some((res) => {
      return res.Nom === project.Nom;
    });
  });
  return result;
}

const RebuiltActeursHTML = function (filteredActeursData) {
  const ActeursContainer = document.getElementById('acteursData');
  // Remove current HTML for CSV data
  ActeursContainer.innerHTML = "";

  BuildActeursHTML(filteredActeursData, ActeursContainer);
}

const RebuiltProjectsHTML = function (filteredProjectsData) {
  const ProjectsContainer = document.getElementById('projectsData');
  // Remove current HTML for CSV data
  ProjectsContainer.innerHTML = "";

  BuildProjectsHTML(filteredProjectsData, ProjectsContainer);
}

const checkRebuildCSVHTML = function (CSVData) {
  if (CSVData === 'acteurs' && filteredActeursData.length > 0) {
    RebuiltActeursHTML(ActeursCSVData);
    filteredActeursData = {};
  } else if (filteredProjectsData.length > 0) {
    RebuiltProjectsHTML(ProjectsCSVData);
    filteredProjectsData = {};
  }
}

setup();

