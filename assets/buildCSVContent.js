let ActeursData = {};
let ProjectsData = {};

async function setup() {
    const ActeursDataJSON = await fetch('/assets/acteursData.json')
    ActeursData = await ActeursDataJSON.json();

    const ProjectsDataJSON = await fetch('/assets/projectsData.json')
    try {
        ProjectsData = await ProjectsDataJSON.json();
    } catch {
        console.log('Error in reading /assets/projectsData.json');
    }

    document.getElementById('acteursAZ').addEventListener('click', (event) => {
        sortCSVData(event, "acteurs","az");
    });
    document.getElementById('acteursSector').addEventListener('click', (event) => {
        sortCSVData(event, "acteurs","Type");
    });
    document.getElementById('acteursLocal').addEventListener('click', (event) => {
        sortCSVData(event, "acteurs","local");
    });

    /* projects HTML removed

    document.getElementById('projectsAZ').addEventListener('click', (event) => {
        sortCSVData(event, "projects","az");
    });
    document.getElementById('projectsSector').addEventListener('click', (event) => {
        sortCSVData(event, "projects","Type");
    });
    document.getElementById('projectsLocal').addEventListener('click', (event) => {
        sortCSVData(event, "projects","local");
    });
    */

    setupCSVHTML();
}

function setupCSVHTML() {
    const ActeursContainer = document.getElementById('acteursData');
    // Remove current HTML for CSV data
    ActeursContainer.innerHTML = "";

    BuildActeursHTML(ActeursData, ActeursContainer);
    
    /* removing ProjectsData from the website
    const ProjectsContainer = document.getElementById('projectsData');
    ProjectsContainer.innerHTML = "";
    BuildProjectsHTML(ProjectsData, ProjectsContainer);
    */
}

export function sortCSVData(event, csvData, sort) {
    let data = csvData === 'acteurs' ? ActeursData : ProjectsData;
    // from its parents get all siblings to reset selected button in group
    const parentDivSort = event.target.parentNode;
    let sibling = parentDivSort.firstChild;
    // loop the three sort buttons
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== event.target) {
            sibling.classList.remove('sort--segment__selected');
        }
        sibling = sibling.nextSibling;
    }
    event.target.classList.add('sort--segment__selected');
    switch (sort) {
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
        case 'Type':
            data.sort((a, b) => {
                if (csvData === 'acteurs') {
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
                    const sectorA = a['Date'].toUpperCase(); // ignore upper and lowercase
                    const sectorB = b['Date'].toUpperCase(); // ignore upper and lowercase
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
    // clear any search input as CSV data will be reset
    parentDivSort.previousElementSibling.value = '';
    setupCSVHTML();
}

export function BuildActeursHTML(acteursData, acteursContainer) {
    acteursData.forEach((row) => {
        if (row['Nom']) {
            let article = document.createElement('article');
            article.setAttribute('id', row['Nom']);
            article.setAttribute('class', 'acteurs--article');

            let articleLink = document.createElement('a');
            articleLink.setAttribute('href', row.URL);
            articleLink.setAttribute('target', '_blank');
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
            if (row['Expertise numérique 2']) {
                let li2 = document.createElement('li');
                li2.textContent = row['Expertise numérique 2'];
                servicesList.appendChild(li2);
            }
            if (row['Expertise numérique 3']) {
                let li3 = document.createElement('li');
                li3.textContent = row['Expertise numérique 3'];
                servicesList.appendChild(li3);
            }
            if (row['Expertise numérique 4']) {
                let li4 = document.createElement('li');
                li4.textContent = row['Expertise numérique 2'];
                servicesList.appendChild(li4);
            }
            articleServices.appendChild(servicesList);
            articleLink.appendChild(articleServices);

            acteursContainer.appendChild(article);
        }
    });
}

export function BuildProjectsHTML(projectsData, projectsContainer) {
    projectsData.forEach((row) => {
        if (row['Nom']) {
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
            headerYear.textContent = row['Date'];
            articleLink.appendChild(headerYear);

            let articleServices = document.createElement('div');
            articleServices.setAttribute('class', 'projects--article--services');
            let desc = document.createElement('span');
            desc.setAttribute('class', 'projects--article--description');
            desc.textContent = row.Descriptif;
            articleServices.appendChild(desc);
            articleLink.appendChild(articleServices);

            projectsContainer.appendChild(article);
        }
    })
}

setup();
