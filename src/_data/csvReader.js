const {parse} = require('csv-parse/sync');
const fs = require("fs");

function readCSV(name) {
  const input = fs.readFileSync(`./src/_data/${name}.csv`);
  const records = parse(input, {
    columns: true,
    skip_empty_lines: true,
  });
  console.log(`${records.length} records found.`);
  return records;
}

module.exports = function () {
  const projectsData = readCSV('projects');
  const projectsHeaders = Object.keys(projectsData[0]);
  const acteursData = readCSV('acteurs');
  const acteursHeaders = Object.keys(acteursData[0]);
  console.log(projectsData[0]);
  console.log(acteursData[0]);
  return {projectsData, projectsHeaders, acteursData, acteursHeaders};
};