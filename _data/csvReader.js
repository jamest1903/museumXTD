const {parse} = require('csv-parse/sync');
const fs = require("fs");

function readCSV(name) {
  const input = fs.readFileSync(`./_data/${name}.csv`, 'utf8');
  const records = parse(input, {
    columns: true,
    bom: true,
    skip_empty_lines: true,
  });
  return records;
}

module.exports = function () {
  const projectsData = readCSV('projects');
  const projectsHeaders = Object.keys(projectsData[0]);
  const acteursData = readCSV('acteurs');
  const acteursHeaders = Object.keys(acteursData[0]);
  return {projectsData, projectsHeaders, acteursData, acteursHeaders};
};