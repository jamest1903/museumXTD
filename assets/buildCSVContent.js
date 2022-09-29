let ActeursData = {};
let ProjectsData = {};

async function setup() {
    const ActeursDataJSON = await fetch('/assets/acteursData.json')
    ActeursData = await ActeursDataJSON.json();

    const ProjectsDataJSON = await fetch('/assets/projectsData.json')
    ProjectsData = await ProjectsDataJSON.json();
    setupCSVHTML();
}


function setupCSVHTML() {
    const ActeursContainer = document.getElementById('acteursData');
    const ProjectsContainer = document.getElementById('projectsData');
    // Remove current HTML for CSV data
    ActeursContainer.innerHTML="";
    ProjectsContainer.innerHTML="";

    ActeursData.forEach((row) => {
        if(row['Nom']) {
            let article = document.createElement('article');
            article.setAttribute('id', row['Nom']);
            article.setAttribute('class', 'acteurs--article');

            let articleLink = document.createElement('a');
            articleLink.setAttribute('href', row.URL);
            article.appendChild(articleLink);

            let articleHeader = document.createElement('h3');
            articleHeader.setAttribute('class', 'acteurs--article--title');
            articleHeader.textContent = row['Nom'];
            articleLink.appendChild(articleHeader);

            let articleInfo = document.createElement('div');
            articleInfo.setAttribute('class', 'acteurs--article--info');
            let spanOne = document.createElement('span');
            spanOne.textContent = row.Nature;
            let spanTwo = document.createElement('span');
            spanTwo.textContent = row.Localisation;
            let spanThree = document.createElement('span');
            spanThree.textContent = row.URL;
            articleInfo.appendChild(spanOne);
            articleInfo.appendChild(spanTwo);
            articleInfo.appendChild(spanThree);
            articleLink.appendChild(articleInfo);

            let articleServices = document.createElement('div');
            articleServices.setAttribute('class', 'acteurs--article--services');
            
            let servicesList = document.createElement('ul');
            let liOne = document.createElement('li');
            liOne.textContent = row['Expertise numérique 1'];
            servicesList.appendChild(liOne);
            if(row['Expertise numérique 2']) {
                let li2 = document.createElement('li');
                li2.textContent = row['Expertise numérique 2'];
                servicesList.appendChild(li2);
            }
            if(row['Expertise numérique 3']) {
                let li3 = document.createElement('li');
                li3.textContent = row['Expertise numérique 3'];
                servicesList.appendChild(li3);
            }
            if(row['Expertise numérique 4']) {
                let li4 = document.createElement('li');
                li4.textContent = row['Expertise numérique 2'];
                servicesList.appendChild(li4);
            }
            articleServices.appendChild(servicesList);
            articleLink.appendChild(articleServices);

            ActeursContainer.appendChild(article);
        }
    });

    ProjectsData.forEach((row) => {
        if(row['Nom']) {
            let article = document.createElement('article');
            article.setAttribute('id', row['Nom']);
            article.setAttribute('class', 'projects--article');

            let articleLink = document.createElement('a');
            articleLink.setAttribute('href', row.URL);
            article.appendChild(articleLink);

            let articleHeader = document.createElement('h3');
            articleHeader.setAttribute('class', 'projects--article--title');
            articleHeader.textContent = row['Nom'];
            articleLink.appendChild(articleHeader);

            let headerYear = document.createElement('span');
            headerYear.textContent = row['Début du projet'];
            articleLink.appendChild(headerYear);

            let articleServices = document.createElement('div');
            articleServices.setAttribute('class', 'projects--article--services');
            let desc = document.createElement('span');
            desc.setAttribute('class', 'projects--article--description');
            desc.textContent = row.Descriptif;
            
            let projectsList = document.createElement('ul');
            let liOne = document.createElement('li');
            liOne.textContent = row['Porteur de projet 1'];
            projectsList.appendChild(liOne);
            if(row['Porteur de projet 2']) {
                let liTwo = document.createElement('li');
                liTwo.textContent = row['Porteur de projet 2'];
                projectsList.appendChild(liTwo);
            }
            if(row['Porteur de projet 3']) {
                let liThree = document.createElement('li');
                liThree.textContent = row['Porteur de projet 3'];
                projectsList.appendChild(liThree);
            }
            if(row['Porteur de projet 4']) {
                let liFour = document.createElement('li');
                liFour.textContent = row['Porteur de projet 4'];
                projectsList.appendChild(liFour);
            }
            desc.appendChild(projectsList);
            articleServices.appendChild(desc);
            articleLink.appendChild(articleServices);

            ProjectsContainer.appendChild(article);
        }
    })
}

function sortCSVData(event, csvData, sort) {
    let data = csvData === 'acteurs' ? ActeursData : ProjectsData;
    // from its parents get all siblings to reset selected button in group
    const parentNode = event.target.parentNode; 
    let sibling  = parentNode.firstChild;
    // loop the three sort buttons
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== event.target) {
            sibling.classList.remove('sort--segment__selected');
        }
        sibling = sibling.nextSibling;
    }
    event.target.classList.add('sort--segment__selected');
    switch(sort) {
        case 'az':
            data.sort((a, b) => {
                const nameA = a.Nom.toUpperCase(); // ignore upper and lowercase
                const nameB = b.Nom.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                // must be equal
                return 0;
            });
            break;
        case 'sector':
            data.sort((a, b) => {
                if(csvData === 'acteurs') {
                    const sectorA = a.Nature.toUpperCase(); // ignore upper and lowercase
                    const sectorB = b.Nature.toUpperCase(); // ignore upper and lowercase
                    if (sectorA < sectorB) {
                    return -1;
                    }
                    if (sectorA > sectorB) {
                    return 1;
                    }
                    return 0;
                } else {
                    const sectorA = a['Début du projet'].toUpperCase(); // ignore upper and lowercase
                    const sectorB = b['Début du projet'].toUpperCase(); // ignore upper and lowercase
                    if (sectorA < sectorB) {
                    return -1;
                    }
                    if (sectorA > sectorB) {
                    return 1;
                    }
                    return 0;
                }
            });
            break;
        case 'local':
            data.sort((a, b) => {
                const localA = a.Localisation.toUpperCase(); // ignore upper and lowercase
                const localB = b.Localisation.toUpperCase(); // ignore upper and lowercase
                if (localA < localB) {
                  return -1;
                }
                if (localA > localB) {
                  return 1;
                }
                return 0;
            });
            break;
    }
    setupCSVHTML();
}

setup();


