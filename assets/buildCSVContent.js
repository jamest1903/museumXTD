async function setup() {
    ActeursDataJSON = await fetch("/assets/acteursData.json")
    ActeursData = await ActeursData.json();

    ProjectsDataJSON = await fetch("/assets/projectsData.json")
    ProjectsData = await ProjectsData.json();
    setupCSVHTML(ActeursData, ProjectsData);
}


function setupCSVHTML(ActeursData, ProjectsData) {
    const ActeursContainer = document.getElementById("acteurs");
    const ProjectsContainer = document.getElementById("projects");

    ActeursData.forEach((row) => {
        if(row["Nom"]) {
            let article = document.createElement("article");
            article.setAttribute('id', row["Nom"]);
            article.setAttribute('class', "acteurs--article");

            let h3 = document.createElement("h3");
            h3.setAttribute('class', 'acteurs--article--title');
            h3.textContent = row['Nom'];
            article.appendChild(h3);

            let divInfo = document.createElement("div");
            divInfo.setAttribute('class', 'acteurs--article--info');
            let spanOne = document.createElement("span");
            spanOne.textContent = row.Nature;
            let spanTwo = document.createElement("span");
            spanTwo.textContent = row.Localisation;
            let spanThree = document.createElement("span");
            let spanLink = document.createElement("a");
            spanLink.setAttribute('href', row.URL);
            spanLink.textContent = "Site web";
            spanThree.appendChild(spanLink);
            divInfo.appendChild(spanOne);
            divInfo.appendChild(spanTwo);
            divInfo.appendChild(spanThree);
            article.appendChild(divInfo);

            let ul = document.createElement("ul");
            ul.setAttribute('class', "acteurs--article--services");
            let liOne = document.createElement("li");
            liOne.textContent = row["Expertise numérique 1"];
            ul.appendChild(liOne);
            if(row["Expertise numérique 2"]) {
                let li2 = document.createElement("li");
                li2.textContent = row["Expertise numérique 2"];
                ul.appendChild(li2);
            }
            if(row["Expertise numérique 3"]) {
                let li3 = document.createElement("li");
                li3.textContent = row["Expertise numérique 3"];
                ul.appendChild(li3);
            }
            if(row["Expertise numérique 4"]) {
                let li4 = document.createElement("li");
                li4.textContent = row["Expertise numérique 2"];
                ul.appendChild(li4);
            }
            article.appendChild(ul);

            ActeursContainer.appendChild(article);
        }
    });

    ProjectsData.forEach((row) => {
        if(row["Nom"]) {
            let article = document.createElement("article");
            article.setAttribute('id', row["Nom"]);
            article.setAttribute('class', "projects--article");

            let h3 = document.createElement("h3");
            h3.setAttribute('class', 'projects--article--title');
            h3.textContent = row['Nom'] + '---' + row.URL;
            article.appendChild(h3);

            let spanOne = document.createElement("span");
            spanOne.textContent = row["Début du projet"] + '--' + row.Localisation;
            let spanTwo = document.createElement("span");
            spanTwo.textContent = row.Descriptif;
            article.appendChild(spanOne);
            let br = document.createElement("br");
            article.appendChild(br);
            article.appendChild(spanTwo);

            let pOne = document.createElement("p");
            pOne.textContent = row["Porteur de projet 1"];
            article.appendChild(pOne);
            if(row["Porteur de projet 2"]) {
                let p2 = document.createElement("p");
                p2.textContent = row["Porteur de projet 2"];
                article.appendChild(p2);
            }
            if(row["Porteur de projet 3"]) {
                let p3 = document.createElement("p");
                p3.textContent = row["Porteur de projet 3"];
                article.appendChild(p3);
            }
            if(row["Porteur de projet 4"]) {
                let p4 = document.createElement("p");
                p4.textContent = row["Porteur de projet 4"];
                article.appendChild(p4);
            }

            ProjectsContainer.appendChild(article);
        }
    })
}


setup();


