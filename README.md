# La plateforme MuseumXTD.ch
*Find the English version below (click [here](#museumxtd-website))*

**MuseumXTD** est une plateforme de ressources évolutive pour répondre aux nombreuses questions liées à l’implémentation et à l’usage du numérique dans les petits et moyens musées de notre région. Plus d’information sur https://www.museumxtd.ch/ 

<br>

**La procédure que nous recommandons nécessite l'installation de deux logiciels (voir la section *1. Pour commencer*)**: 
- Le logiciel de prise de note Obsidian pour éditer le contenu
- L'application desktop GitHub pour héberger les pages

**Après l'installation des logiciels, vous pourrez modifier les contenus en trois étapes (voir la section *2. Modifier les contenus du site internet*):**
1. Récupérer la dernière version du site web (et éviter de travailler sur une version obsolète) grâce l'application desktop GitHub
2. Ajouter et modifier les fichiers grâce au logiciel Obsidian
3. Mettre le site web à jour avec les changements que vous avez effectués grâce à l'application desktop GitHub

Vous n'êtes pas familiers avec ces outils? Voir notre page [Les outils utilisés par MuseumXTD](https://www.museumxtd.ch/Notes/Les%20outils%20utilis%C3%A9s%20par%20MuseumXTD/). 

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<br>


- [1. Pour commencer](#1-pour-commencer)
  - [1.1. Installer l'application Desktop Github](#11-installer-lapplication-desktop-github)
    - [1.1.1. Créer un compte](#111-cr%C3%A9er-un-compte)
    - [1.1.2. Télécharger les données sur votre ordinateur](#112-t%C3%A9l%C3%A9charger-les-donn%C3%A9es-sur-votre-ordinateur)
  - [1.2. Installer le logiciel Obsidian](#12-installer-le-logiciel-obsidian)
- [2. Modifier les contenus du site internet](#2-modifier-les-contenus-du-site-internet)
	- [2.1. Récupérer la dernière version du site web](#21-r%C3%A9cup%C3%A9rer-la-derni%C3%A8re-version-du-site-web)
	- [2.2. Ajouter et modifier les fichiers dans Obsidian](#22-ajouter-et-modifier-les-fichiers-dans-obsidian)
		- [2.2.1. Ajouter les métadonnées](#221-ajouter-les-m%C3%A9tadonn%C3%A9es)
		- [2.2.2. Ajouter et/ou modifier du contenu](#222-ajouter-etou-modifier-du-contenu)
		- [2.2.3. Ajouter des images](#223-ajouter-des-images)
	- [2.3. Publier les modifications sur le site](#23-publier-les-modifications-sur-le-site)
- [3. Configuration avancée avec Obsidian Git](#3-configuration-avancée-avec-obsidian-git-alternative)
	- [3.1. Installer git pour windows](#31-installer-git-pour-windows)
	- [3.2. Cloner le projet museumXTD](#32-cloner-le-projet-museumxtd)
	- [3.3. Installer Obsidian](#33-installer-obsidian)
	- [3.4. Configurer Obsidian pour qu'il se synchronise automatiquement avec GitHub afin de récupérer les dernières modifications et de pousser le nouveau contenu](#34-configurer-obsidian-pour-quil-se-synchronise-automatiquement-avec-github-afin-de-récupérer-les-dernières-modifications-et-de-pousser-le-nouveau-contenu)
	- [3.5. Quelques commandes de base](#35-quelques-commandes-de-base)
- [4. Développement et design](#4-développement-et-design)
	- [4.1. Exécuter en local](#41-exécuter-en-local)
	- [4.2. Mise à jour manuelle des modifications sur le serveur d'hébergement en direct sur les pages GitHub](#42-mise-à-jour-manuelle-des-modifications-sur-le-serveur-dhébergement-en-direct-sur-les-pages-github)
	- [4.3. Layouts](#43-layouts)

# 1. Pour commencer
**Ce dont vous allez avoir besoin**: 
- Un compte [GitHub](https://github.com/) 
- L'autorisation d'accéder au dépôt museumXTD (en envoyant votre login GitHub à info@museumxtd.ch)
- Le logiciel Obsidian et l'application Desktop GitHub (voir les étapes d'installation ci-dessous)

## 1.1. Installer l'application Desktop Github  
Cette application vous permettra de télécharger et d'envoyer le contenu du site Web entre GitHub et votre ordinateur. Allez sur la [page GitHub Desktop](https://desktop.github.com), téléchargez et installez l'application sur votre ordinateur.

### 1.1.1. Créer un compte
Ouvrez GitHub Desktop et connectez-vous avec votre compte GitHub.
- Windows : menu Fichier > Options. Dans la fenêtre des options, cliquez sur Comptes et suivez les étapes pour vous connecter.
- MacOS : menu GitHub Desktop > Préférences. Dans la fenêtre des préférences, cliquez sur Comptes et suivez les étapes pour vous connecter.

### 1.1.2. Télécharger les données sur votre ordinateur
- Allez sur la page [GitHub de MuseumXTD](https://github.com/MediaComem/museumXTD/)
- Cliquez sur le bouton **Code** (capture d'écran ci-dessous)
- Copiez l'URL à partir du menu déroulant
- Ouvrez l'application GitHub Desktop (connectez-vous si vous ne l'avez pas déjà fait)
- Allez dans le menu File > Clone repository. Cliquez sur l'onglet URL et collez dans le champ nommé _Repository URL or GitHub username and repository_ (capture d'écran ci-dessous)
- Cliquez sur le bouton **Clone**

GitHub Desktop va créer un nouveau dossier appelé **museumXTD** à l'intérieur de votre dossier Documents > GitHub qui contient tous les fichiers du projet.


![screenshot of the MuseumXTD page on GitHub.com](/images/read-me-images/screenshot-repository-page.png)

![screenshot of Github Desktop - Clone a repository dialog](/images/read-me-images/screenshot-GitHub-Desktop-Clone-dialog.png)

## 1.2. Installer le logiciel Obsidian
Obsidian est un logiciel de prise de notes, grâce auquel vous pouvez créer des pages (notes) et les lier entre elles. Des instructions sur la façon d'installer cet outil se trouvent sur le [Obsidian-website](https://obsidian.md/). 

Ouvrez Obsidian, et allez dans le menu File > Open vault... puis dans la fenêtre cliquez sur **Open folder as vault** et sélectionnez le dossier **museumXTD** que vous avez créé dans les étapes ci-dessus (par défaut dans documents > GitHub).

![screenshot of Obsidian open window dialog](/images/read-me-images/screenshot-obsidian-open_folder_as_vault.png)

# 2. Modifier les contenus du site internet
## 2.1. Récupérer la dernière version du site web
Avant d'effectuer des modifications, assurez-vous que vous disposez de la dernière version du contenu.
1. Dans le bureau GitHub, vérifiez que la branche actuelle est `main`.
2. Cliquez sur *Fetch Origin*. 


![screenshot of GitHub Desktop commit window](/images/read-me-images/screenshot-github_desktop-branch.png)


## 2.2. Ajouter et modifier les fichiers dans Obsidian
Une fois que la mise à jour est assurée, vous pouvez modifier les fichiers directement depuis le logiciel Obsidian. 
Attention: seuls les fichiers enregistrés dans le dossier *Notes* dans Obsidian seront publiés sur le site web. Par défaut, les notes créées se placent directement dans le dossier *Notes*.  

### 2.2.1. Ajouter les métadonnées
Pour que votre note soit publiée sur le site, vous devez ajouter une section spéciale en haut: les métadonnées. Cela ajoutera le menu, la mise en page et les couleurs au contenu.

Pour les ajouter, deux solutions se présentent: 
1. Ajouter les métadonnées à la main, entre deux lignes de tirets ('---') 
2. Ajouter les via un modèle prédéfini: Menu de gauche > Insérer le modèle > *Métadonnées Notes*(seulement les métadonnées) OU *Note ressource* (pour créer une note *ressource*) OU *Note question* (pour créer une note *question*)

Les champs des métadonnées: 
- **title** Le texte qui sera affiché dans l'onglet du navigateur.
- **layout** Une option pour changer le style de la page web, par défaut, utilisez `layouts/post.njk`.
- **tags** Permet de rassembler des ressources similaires. Voir la liste dans la page [[Tags]]. 
- **alias** Permet d'associer un titre différent à la note (cette balise est utile pour ajouter des caractères spéciaux, non permis par Obsidian, dans le titre). 
- **eleventyNavigation** Permet de définir le fil d'Ariane associé à la note et qui s'affichera sur le site
	- **key** Identifiant de la note
	- **title** Titre visible dans le fil d'Ariane sur le site
	- **parent** Identifiant de la note qui précédente la note actuelle dans le fil d'Ariane

Ci-dessous un exemple d'en-tête.
```
---
title: MuseumXTD 
layout: layouts/post.njk 
tags: question 
alias: [Quels sont les opportunités et les freins?] 
eleventyNavigation: 
	key: opportunités 
	title: Quels sont les opportunités et les freins? 
	parent: comprendre
---
```

### 2.2.2. Ajouter et/ou modifier du contenu
- Ajouter et/ou modifier du contenu dans l'onglet [Ressources](https://www.museumxtd.ch/): lisez cette [Notes question et ressource|page](https://github.com/MediaComem/museumXTD/blob/main/Comment%20%C3%A9diter%20les%20contenus%20de%20la%20plateforme/Notes%20question%20et%20ressource.md) pour comprendre comment modifier les questions et réponses de la plateforme museumxtd.ch.   

- Ajouter et/ou modifier du contenu dans l'onglet [Répertoire](https://www.museumxtd.ch/tables/)
  - Si vous voulez modifier les textes de la page Répertoire, veuillez modifier directement la page [tables](https://github.com/MediaComem/museumXTD/blob/main/tables/tables.md)
  - Si vous souhaitez ajouter des références dans la base de données, veuillez suivre le tutoriel [Tableau Acteurs et Projets](https://github.com/MediaComem/museumXTD/blob/main/Comment%20%C3%A9diter%20les%20contenus%20de%20la%20plateforme/Tableau%20Acteurs%20et%20Projets.md)

### 2.2.3. Ajouter des images 
Toutes les images doivent être stockées dans le dossier racine **images**. Pour ajouter une image dans un fichier MD, veuillez écrire `![légende de l'image](/images/nameFile.png)`, avec: 
- `[légende de l'image]` la légende que vous voulez associé
- `(/images/nameFile.png)` l'adresse où se trouve l'image

## 2.3. Publier les modifications sur le site
Ouvrez l'application GitHub Desktop: 
1. Rédigez un résumé de vos modifications
2. Cliquez sur le bouton *Commit*
3. Cliquez sur *Push origin*

Cette dernière étape permet de télécharger vos modifications sur GitHub. Une fois en ligne, vos notes seront transformées en pages web (de .md à .html). Il y aura un délai de quelques minutes avant qu'elles ne soient visibles en ligne Museumxtd.ch 

![screenshot of github desktop](/images/read-me-images/screenshot-github_desktop.png)


# 3. Configuration avancée avec Obsidian Git (alternative)

## 3.1. Installer git pour windows
Tout d'abord, nous devons cloner le dépôt sur notre machine Windows locale depuis GitHub. Pour ce faire, nous installons 'git'. Rendez-vous sur le site [git-for-windows](https://gitforwindows.org/) et suivez les instructions simples d'installation. Vous devrez avoir votre compte GitHub ajouté au dépôt par l'administrateur pour pouvoir déposer de nouveaux commits. 
1. Définissez votre adresse e-mail et votre nom d'utilisateur git
    ```
    git config --global user.email "MY_NAME@example.com"
    git config --global user.name "YOUR USER NAME"
    ```
## 3.2. Cloner le projet museumXTD
1.  Ouvrez un terminal en appuyant sur la touche *windows* et en tapant *terminal* ou *commande*. Sélectionnez l'application **terminal** dans la liste des programmes. Le terminal s'ouvre à l'emplacement par défaut : C:/Utilisateurs/XXXXX
2. Enregistrez le dossier à l'endroit où vous voulez stocker le projet. Par exemple enregistrez-le dans vos Documents et clonez le projet. Exemple ci-dessous:
    ```
    cd .\Documents\
    git clone https://github.com/MediaComem/museumXTD.git
    ```
 Vous verrez un nouveau dossier appelé **museumXTD** à l'intérieur de votre dossier Documents qui contient tous les fichiers du projet.

## 3.3. Installer Obsidian
Si vous souhaitez visualiser les fichiers Markdown des projets et apporter des modifications ou ajouter du nouveau contenu, vous pouvez le faire via Obsidian. Il y a des instructions sur le [Obsidian-website](https://obsidian.md/) sur la façon d'installer cet outil. Une fois cela fait, vous pouvez sélectionner **Ouvrir le dossier en tant que coffre-fort** et sélectionner le projet récemment cloné **museumXTD** qui a été créé dans votre dossier de documents dans les étapes ci-dessus.

## 3.4. Configurer Obsidian pour qu'il se synchronise automatiquement avec GitHub afin de récupérer les dernières modifications et de pousser le nouveau contenu
Ouvrez l'onglet paramètres sur Obsidian et sélectionnez **Plugins communautaires**. Ensuite, désactivez le mode sans échec et recherchez et installez le plugin **Obsidian Git**. Comme vous avez cloné le projet museumXTD depuis GitHub, Obsidian Git le verra automatiquement comme un projet git, vous donnant accès à ses commandes natives pour tirer ou pousser des changements. Veuillez lire le guide pour comprendre les différents paramètres qui vous sont proposés.

## 3.5. Quelques commandes de base
Actuellement, l'un des éléments de menu sur Obsidian est **Ouvrir la palette de commande**. Ici, vous pouvez entrer les commandes Git d'Obsidian pour enregistrer les changements et les télécharger vers le dépôt GitHub.
- **Pull** Cette commande est automatiquement déclenchée lorsque vous ouvrez le projet avec Obsidian. Cependant, c'est une bonne pratique de tirer du dépôt juste avant de commettre des changements au cas où il y aurait d'autres changements récents que vous auriez manqués.
- Liste des fichiers modifiés** Avant de livrer vos changements, vous pouvez voir une liste de tous les fichiers qui ont été modifiés pour vérifier et ne pas pousser des changements non désirés par erreur.
- **Open source control view** Si vous voulez inspecter chaque changement de fichier ligne par ligne, vous pouvez utiliser cette commande pour comparer avant (rouge) et après (vert).
- **Commit all changes** Cette commande ajoutera vos modifications à la zone de transit git et effectuera ensuite un commit. Il y a un message standard par défaut attaché à la livraison. Habituellement quelque chose comme *vault backup : YYYY-MM-DD hh:mm:ss* Cependant **Je conseille de le changer** pour inclure votre nom afin que votre équipe puisse suivre dans l'historique des logs qui fait quels changements. Sous `Obsidian settings, Community plugins, Obsidian Git, options`, ici il y a le champ *Commit message on manual backup/commit*. Vous pouvez entrer votre message personnalisé ici qui apparaîtra sur chaque commit par la suite.
- **Push** Enfin, une fois que vous avez fait votre commit, vous pouvez pousser vos changements vers le dépôt GitHub. Cela devrait déclencher une construction pour publier la nouvelle version sur GitHub-pages. Notez que les changements peuvent prendre quelques instants pour prendre effet sur le serveur en direct et que vous devrez peut-être vider le cache de votre navigateur si la page est déjà chargée. Vous pouvez également afficher le site web en mode *incognito* chrome ou *fenêtre privée* Edge afin de ne pas utiliser d'anciens cookies ou cache.


# 4. Développement et design

## 4.1. Exécuter en local
- **installation de Node** Le site officiel [Node-website](https://nodejs.org/en/download/) donne des instructions sur la façon d'installer Node.

Vous pouvez exécuter le projet localement en téléchargeant d'abord les paquets requis `npm ci` à partir du package-lock.json et en exécutant ensuite `npm run start`. Cela va construire les fichiers du projet et les stocker dans le dossier docs. Ensuite, Eleventy va servir ce dossier docs sur votre hôte local pour le visualiser sur votre navigateur `Local : http://localhost:8080`.

## 4.2. Mise à jour manuelle des modifications sur le serveur d'hébergement en direct sur les pages GitHub
Lorsque vous avez validé vos changements locaux avec `git add` et `git commit -m "enter message here"` et poussé vers la branche **main** de GitHub `git push origin main`, qui contient le fichier **eleventy_build.yml**, cela va déclencher une construction du projet sur GitHub et pousser les fichiers créés vers le dossier **docs**. Ensuite, ce dossier, qui contiendra le build Eleventy, est poussé vers la branche **gh-pages**. Cette branche sera automatiquement mise à jour sur l'hôte live dans quelques instants.


## 4.3. Layouts
Si vous souhaitez appliquer une autre mise en page à votre fichier MD (layout), vous pouvez faire référence à son nom de fichier. Veillez à enregistrer votre nouveau fichier de mise en page dans le bon dossier *layouts* et à utiliser la bonne syntaxe. Le contenu de votre fichier MD sera rendu à l'endroit où vous avez ajouté la ligne suivante `{{ content | safe }}` dans votre nouveau fichier .njk

-----

# MuseumXTD website
**MuseumXTD** is an evolutive resources plateform, which has been created to answer the numerous questions related to the implementation and use of digital in the small and medium-sized museums. More information on https://www.museumxtd.ch/
<br>

**To follow the following process, the installation of two softwares (see part *1. Getting started*) is required**: 
- Obsidian, a note-taking software that will allow you to edit the content
- The desktop app GitHub, that will host the web pages

**Once the softwares have been installed, you will need to follow three steps to modify the content (see part *2. Editing the content*)**: 
1. Fetch the latest version of the website with the GitHub Desktop app (and avoid to work with an obsolete version)
2. Edit and change the files in the Obsidian app
3. Push the changes to update the website with the GitHub Desktop app

Not familiar with these tools? Let's discover how we have used them [here](https://www.museumxtd.ch/Notes/Les%20outils%20utilis%C3%A9s%20par%20MuseumXTD/). 


- [1. Getting started](#1-getting-started)
  - 1.1. [Install the Github Desktop app](#11-install-the-github-desktop-app)
    - [1.1.1. Sign-in](#111-sign-in)
    - [1.1.2. Getting the content onto your computer](#112-getting-the-content-onto-your-computer)
   - [1.2. Install Obsidian](#12-install-obsidian)
- [2. Editing the content](#2-editing-the-content)
  -	[2.1. Fetch the latest version of the website](#21-fetch-the-latest-version-of-the-website)
  - [2.2. Adding and changing the files in Obsidian](#22-adding-and-changing-the-files-in-obsidian)
    - [2.2.1. Adding metada](#221-adding-metada)
    - [2.2.2. Adding and/or modifying content](#222-adding-andor-modifying-content)
    - [2.2.3. Adding new images](#223-adding-new-images)
   - [2.3. Publishing to the website](#23-publishing-to-the-website)
- [3. Advanced setup with Obsidian Git (alternative)](#3-advanced-setup-with-obsidian-git-alternative)
  - [3.1. Install git for windows](#31-install-git-for-windows)
  - [3.2. Clone the museumXTD project](#32-clone-the-museumxtd-project)
  - [3.3. Install Obsidian](#33-install-obsidian)
  - [3.4. Configuring Obsidian to automatically sync with GitHub to pull latest changes and to push new content](#34-configuring-obsidian-to-automatically-sync-with-github-to-pull-latest-changes-and-to-push-new-content)
  - [3.5. Some basic commands](#35-some-basic-commands)
- [4. Developpement and design](#4-developpement-and-design)
  - [4.1. Running locally](#41-running-locally)
  - [4.2. Updating changes manually to the live hosting server on GitHub pages](#42-updating-changes-manually-to-the-live-hosting-server-on-github-pages)
  - [4.3. Layouts](#43-layouts-1)


# 1. Getting started
**What you will need**

-   A [GitHub](https://github.com/) account
-   Permission to access the repository (send your GitHub user name to [info@museumxtd.ch](mailto:info@museumxtd.ch))
-   Obsidian and GitHub Desktop app. See install steps bellow.

## 1.1. Install the Github Desktop app
This app will let you download and upload the website's content between GitHub and your computer. Go to the [GitHub Desktop page](https://desktop.github.com/), download and install the app on your computer.

### 1.1.1. Sign-in
Open GitHub Desktop and sign-in with your GitHub account.
- Windows: menu File > Options. In the options window, click Accounts and follow the steps to sign in.
- MacOS: menu GitHub Desktop > Preferences. In the preference window, click Accounts and follow the steps to sign in.

### 1.1.2. Getting the content onto your computer
1.  Go to the [MuseumXTD GitHub page](https://github.com/MediaComem/museumXTD/).
2.  Click the **Code** button (screenshot bellow)
3.  Copy the URL from the pop-up menu.
4.  Open the GitHub Desktop app ([Sign-in](https://github.com/MediaComem/museumXTD/#sign-in) if you didn't already)
5.  Go to menu File > Clone repository. Click on the URL tab and paste in the field named _Repository URL or GitHub username and repository_. (screenshot bellow)
6.  Click the **Clone** button

GitHub Desktop will create a new folder called **museumXTD** inside of your Documents > GitHub folder which contains all the project files.

[![screenshot of the MuseumXTD page on GitHub.com](https://github.com/MediaComem/museumXTD/raw/main/images/read-me-images/screenshot-repository-page.png)](https://github.com/MediaComem/museumXTD/blob/main/images/read-me-images/screenshot-repository-page.png)


![screenshot of Github Desktop - Clone a repository dialog](/images/read-me-images/screenshot-GitHub-Desktop-Clone-dialog.png)

## 1.2. Install Obsidian
Obsidian is where you can create pages (notes) and link between them. There are instructions on the [Obsidian-website](https://obsidian.md/) on how to install this tool.

Open Obsidian, and go to menu File > Open vault... then in the window click **Open folder as vault** and select the **museumXTD** folder you created in the steps above (by default in documents > GitHub).

[![screenshot of Obsidian open window dialog](https://github.com/MediaComem/museumXTD/raw/main/images/read-me-images/screenshot-obsidian-open_folder_as_vault.png)


# 2. Editing the content

## 2.1. Fetch the latest version of the website
Before making changes, make sure you have the latest version of the content.
1.  In GitHub Desktop check that under Current Branch is `main`
2.  Click *Fetch Origin*

![screenshot of GitHub Desktop commit window](/images/read-me-images/screenshot-github_desktop-branch.png)

Please also read our editing guidelines in "Comment participer sur la plateforme" folder.



## 2.2. Adding and changing the files in Obsidian
Once you have fetched the latest version of the website, you can modify and edit the files thanks to Obsidian. 
Be aware that only the files saved to the Notes folder will be published on the website. By default, the new notes are created directly in the Notes folder. 

### 2.2.1. Adding metada
In order for your note to be published on the site, you need to add a special section at the top: the metadata. This will add the menu, layout and colours to the content.

There are two ways to add them: 
1. Add the metadata by hand, between two lines of dashes ('---') 
2. Add them thanks to a template: Left menu > Insert template > *Métadonnées Notes* (only metadata) OR *Note ressource* (to create a *resource* note) OR *Note question* (to create a *question* note)

Metadata fields: 
- **title** The text that will be displayed in browser tab. 
- **layout** An option to change the style of the webpage, by default use `layouts/post.njk`
- **tags** For organising your work in Obsidian and for the website Search function. See the list in the [[Tags]] page. 
- **alias** Allows you to associate a different title to the note (this tag is useful for adding special characters, not allowed by Obsidian, in the title). 
- **eleventyNavigation** Allows you to define the breadcrumb trail associated with the note and which will be displayed on the site
	- **key** Note identifier
	- **title** Title visible in the breadcrumb trail on the site
	- **parent** Identifier of the note that precedes the current note in the breadcrumb trail

Below is an example of the standard header to start a page with.

```
---
title: MuseumXTD 
layout: layouts/post.njk 
tags: question 
alias: [Quels sont les opportunités et les freins?] 
eleventyNavigation: 
	key: opportunités 
	title: Quels sont les opportunités et les freins? 
	parent: comprendre
---
```

### 2.2.2. Adding and/or modifying content
- Add and/or edit content in the [Ressources](https://www.museumxtd.ch/)  tab 
Click on this [[Notes question et ressource|page]] to understand how to edit content that appears on the museumxtd.ch platform in [[index|Ressources]], directly from Obsidian.  

- Adding and/or editing content in the [Répertoire](https://www.museumxtd.ch/tables/)  tab 
If you want to modify the texts on the Répertoire page, please go to : [[tables]]
If you want to add references to the database, please follow the tutorial [[Tableau Acteurs et Projets]]

### 2.2.3. Adding new images
All images are to be stored in the root **images** folder. To add an image to an MD file, write `![image caption](/images/nameFile.png)`, with: 
- `[image description]` the description you want associated
- `(/images/nameFile.png)` the address where the image is located

## 2.3. Publishing to the website
Open the GitHub Desktop app:
1.  Write a summary about your changes
2.  Click on the _Commit_ button
3.  Click on _Push origin_

This last step will upload your changes to GitHub. Once online, your notes will be processed into web pages (from .md to .html). There will be a delay of a few minutes before they are visible online Museumxtd.ch

[![screenshot of github desktop](https://github.com/MediaComem/museumXTD/raw/main/images/read-me-images/screenshot-github_desktop.png)](https://github.com/MediaComem/museumXTD/blob/main/images/read-me-images/screenshot-github_desktop.png)

# 3. Advanced setup with Obsidian Git (alternative)

## 3.1. Install git for windows
First we need to clone the repository to our local windows machine from GitHub. We do that by installing 'git'. Please go to the [git-for-windows](https://gitforwindows.org/) website and follow the simple instructions to install. You will need to have your GitHub account added to the repository by the admin to be able to pust new commits.

1.  Set your git email address and username
    ```
    git config --global user.email "MY_NAME@example.com"
    git config --global user.name "YOUR USER NAME"
    ```

## 3.2. Clone the museumXTD project
1.  Open a terminal by pressing the _windows key_ and start typing _terminal_. Select the **terminal** app from the programs list. The Terminal will open under the default location: C:/Users/XXXXX
2.  Change directory to where you want to store the project. For example under your main documents folder and clone the project. Example below: 
    ```
    cd .\Documents\
    git clone https://github.com/MediaComem/museumXTD.git
    ```

You will see a new folder called **museumXTD** inside of your Documents folder which contains all the project files.

## 3.3. Install Obsidian

If you wish to view the projects Markdown files and make changes or add new content you can do this via Obsidian. There are instructions on the [Obsidian-website](https://obsidian.md/) on how to install this tool. Once done you can select **Open folder as vault** and select the recently cloned project **museumXTD** which was created in your documents folder in the steps above.

## 3.4. Configuring Obsidian to automatically sync with GitHub to pull latest changes and to push new content

Open the settings tab on Obsidian and select **Community plugins**. Next turn off safe mode and search for and install the plugin **Obsidian Git**. As you cloned the museumXTD project from GitHub, Obsidian Git will automatically see it as a git project giving you access to its native commands to pull or push changes. Please read the guide material to understand the different settings available to you.

## 3.5. Some basic commands

Currently one of the menu items on Obsidian is **Open command palette**. Here you can enter the Obsidian Git commands to save changes and upload them to the GitHub repository.

-   **Pull** This command is automatically triggered when you open the project with Obsidian. However it is good practice to pull from the repository just before you commit any changes in case there are some other recent changes which you are missing.
-   **List changed files** Before you commit your changes you can view a list of all the files that have been changed to verify and not to push unwanted changes by mistake.
-   **Open source control view** If you want to inspect each file change line by line you can use this command to compare before (red) and after (green).
-   **commit all changes** This command will add your changes to the git staging area and then perform a commit. There is a standard default message attached to the commit. Usually something like _vault backup: YYYY-MM-DD hh:mm:ss_ However **I advise to change this** to include your name so your team can track in the logs history who is doing what changes. Under `Obsidian settings, Community plugins, Obsidian Git, options`, here there is the field _Commit message on manual backup/commit_. You can enter your custom message here that will appear on every commit thereafter.
-   **Push** Finally once you made your commit you can push your changes to the GitHub repository. This should trigger a build to publish the new version to GitHub-pages. Note it can take a few moments for the changes to take effect on the live server and you may need to clear cache on your browser if the page is already loaded. You can also view the website in _incognito mode_ chrome or _InPrivate window_ Edge so not to use any old cookies or cache.

# 4. Developpement and design

## 4.1. Running locally

-   **install Node** The official [Node-website](https://nodejs.org/en/download/) give instructions on how to install node.

You can run the project locally by first downloading the required packages `npm ci` from the package-lock.json and then running `npm run start`. This will build the project files and store them on the docs folder. Next Eleventy will serve this docs folder on your local host to view on your browser `Local: http://localhost:8080`

## 4.2. Updating changes manually to the live hosting server on GitHub pages

When you have committed your local changes with `git add` and `git commit -m "enter message here"` and pushed to the GitHub branch **main** `git push origin main`, which has the **eleventy_build.yml** file, this will trigger a build of the project on GitHub and push the created files to the **docs** folder. Next this folder, which will contain the Eleventy build, is pushed to the **gh-pages** branch. This branch will automatically update on the live host in a few moments.

## 4.3. Layouts

If you wish to apply another layout to your MD file you can reference it's file name instead. Be sure to save your new layout file in the right folder _layouts_ and have the correct syntax. Your MD file content will be rendered where you have added the following line `{{ content | safe }}` on your new .njk file.
