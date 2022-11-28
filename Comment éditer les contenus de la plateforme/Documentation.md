---
title: MuseumXTD  
layout: layouts/post.njk  
eleventyNavigation:
  key: documentation
  title:Documentation
---

# Documentation
The English version is on this [[Documentation - English|page]]. 

**MuseumXTD** est une plateforme de ressources évolutive pour répondre aux nombreuses questions liées à l’implémentation et à l’usage du numérique dans les petits et moyens musées de notre région. 
- Plus d’information sur https://www.museumxtd.ch/
- Le code est accessible sur cette [page Github](https://github.com/MediaComem/museumXTD).

**La procédure que nous recommandons nécessite l'installation de deux logiciels (voir la section *1. Pour commencer*): 
- Le logiciel de prise de note Obsidian pour éditer le contenu
- L'application desktop GitHub pour héberger les pages

**Après l'installation des logiciels, vous pourrez modifier les contenus en trois étapes (voir la section *2. Modifier les contenus*):**
1. Récupérer la dernière version du site web (et éviter de travailler sur une version obsolète) grâce l'application desktop GitHub
2. Ajouter et modifier les fichiers grâce au logiciel Obsidian
3. Mettre le site web à jour avec les changements que vous avez effectués grâce à l'application desktop GitHub

Vous n'êtes pas familiers avec ces outils? Voir notre page [[Les outils utilisés par MuseumXTD]]. 

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

[[#1. Pour commencer]]
	[[#1.1. Installer l'application Desktop Github]]
		[[#1.1.1. Créer un compte]]
		[[#1.1.2. Télécharger les données sur votre ordinateur]]
  [[#1.2. Installer le logiciel Obsidian]]
[[#2. Modifier le contenu]]
	[[#2.1. Récupérer la dernière version du site web]]
	[[#2.2. Ajouter et modifier les fichiers]]
		[[#2.2.1. Ajouter les métadonnées]]
		[[#2.2.2. Ajouter du contenu]]
  - [Adding new pages](#adding-new-pages)
  - [Adding new images](#adding-new-images)
  - [Publishing to the website](#publishing-to-the-website)
- [Advanced setup with Obsidian Git](#advanced-setup-with-obsidian-git)
  - [Install git for windows](#install-git-for-windows)
  - [Clone the museumXTD project](#clone-the-museumxtd-project)
  - [Install Obsidian](#install-obsidian-1)
  - [Configuring Obsidian to automatically sync with GitHub to pull latest changes and to push new content](#configuring-obsidian-to-automatically-sync-with-github-to-pull-latest-changes-and-to-push-new-content)
  - [Some basic commands](#some-basic-commands)
- [Developpement and design](#developpement-and-design)
  - [Running locally](#running-locally)
  - [Updating changes manually to the live hosting server on GitHub pages](#updating-changes-manually-to-the-live-hosting-server-on-github-pages)
  - [Layouts](#layouts)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
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

# 2. Modifier le contenu
## 2.1. Récupérer la dernière version du site web
Avant d'effectuer des modifications, assurez-vous que vous disposez de la dernière version du contenu.
1. Dans le bureau GitHub, vérifiez que la branche actuelle est `main`.
2. Cliquez sur *Fetch Origin*. 


![screenshot of GitHub Desktop commit window](/images/read-me-images/screenshot-github_desktop-branch.png)


## 2.2. Ajouter et modifier les fichiers 
Attention: dans Obsidian, seuls les fichiers enregistrés dans le dossier *Notes* seront publiés sur le site web. Par défaut, les notes créées se placent directement dans le dossier *Notes*.  

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

### 2.2.2. Ajouter du contenu
Cliquez sur cette [[Notes question et ressource|page]] pour comprendre comment modifier le contenu qui apparait sur la plateforme museumxtd.ch dans [[index|Ressources]], directement depuis Obsidian.  

## Adding new images
All images are to be stored in the root **images** folder. When referencing any image on a MD file please follow this example `/images/nameFile.png`


## Publishing to the website
Open the GitHub Desktop app
1. Write a summary about your changes
1. Click the *Commit* button
1. Click *Push origin*

This last step will upload your changes to GitHub. Once online, your notes will be processed into web pages (from .md to .html). There will be a delay of a few minutes before they are visible online Museumxtd.ch 

![screenshot of github desktop](/images/read-me-images/screenshot-github_desktop.png)

# Advanced setup with Obsidian Git

## Install git for windows
First we need to clone the repository to our local windows machine from GitHub. We do that by installing 'git'. Please go to the [git-for-windows](https://gitforwindows.org/) website and follow the simple instructions to install. You will need to have your GitHub account added to the repository by the admin to be able to pust new commits. 
1. Set your git email address and username
    ```
    git config --global user.email "MY_NAME@example.com"
    git config --global user.name "YOUR USER NAME"
    ```
## Clone the museumXTD project
1. Open a terminal by pressing the *windows key* and start typing *terminal*. Select the **terminal** app from the programs list. The Terminal will open under the default location: C:/Users/XXXXX
2. Change directory to where you want to store the project. For example under your main documents folder and clone the project. Example below:
    ```
    cd .\Documents\
    git clone https://github.com/MediaComem/museumXTD.git
    ```
  You will see a new folder called **museumXTD** inside of your Documents folder which contains all the project files.
## Install Obsidian
If you wish to view the projects Markdown files and make changes or add new content you can do this via Obsidian. There are instructions on the [Obsidian-website](https://obsidian.md/) on how to install this tool. Once done you can select **Open folder as vault** and select the recently cloned project **museumXTD** which was created in your documents folder in the steps above.
## Configuring Obsidian to automatically sync with GitHub to pull latest changes and to push new content
Open the settings tab on Obsidian and select **Community plugins**. Next turn off safe mode and search for and install the plugin **Obsidian Git**. As you cloned the museumXTD project from GitHub, Obsidian Git will automatically see it as a git project giving you access to its native commands to pull or push changes. Please read the guide material to understand the different settings available to you.
## Some basic commands
Currently one of the menu items on Obsidian is **Open command palette**. Here you can enter the Obsidian Git commands to save changes and upload them to the GitHub repository.
- **Pull** This command is automatically triggered when you open the project with Obsidian. However it is good practice to pull from the repository just before you commit any changes in case there are some other recent changes which you are missing.
- **List changed files** Before you commit your changes you can view a list of all the files that have been changed to verify and not to push unwanted changes by mistake.
- **Open source control view** If you want to inspect each file change line by line you can use this command to compare before (red) and after (green).
- **commit all changes** This command will add your changes to the git staging area and then perform a commit. There is a standard default message attached to the commit. Usually something like *vault backup: YYYY-MM-DD hh:mm:ss* However **I advise to change this** to include your name so your team can track in the logs history who is doing what changes. Under `Obsidian settings, Community plugins, Obsidian Git, options`, here there is the field *Commit message on manual backup/commit*. You can enter your custom message here that will appear on every commit thereafter.
- **Push** Finally once you made your commit you can push your changes to the GitHub repository. This should trigger a build to publish the new version to GitHub-pages. Note it can take a few moments for the changes to take effect on the live server and you may need to clear cache on your browser if the page is already loaded. You can also view the website in *incognito mode* chrome or *InPrivate window* Edge so not to use any old cookies or cache.


# Developpement and design

## Running locally
- **install Node** The official [Node-website](https://nodejs.org/en/download/) give instructions on how to install node.

You can run the project locally by first downloading the required packages `npm ci` from the package-lock.json and then running `npm run start`. This will build the project files and store them on the docs folder. Next Eleventy will serve this docs folder on your local host to view on your browser `Local: http://localhost:8080`

## Updating changes manually to the live hosting server on GitHub pages
When you have committed your local changes with `git add` and `git commit -m "enter message here"` and pushed to the GitHub branch **main** `git push origin main`, which has the **eleventy_build.yml** file, this will trigger a build of the project on GitHub and push the created files to the **docs** folder. Next this folder, which will contain the Eleventy build, is pushed to the **gh-pages** branch. This branch will automatically update on the live host in a few moments.


## Layouts
If you wish to apply another layout to your MD file you can reference it's file name instead. Be sure to save your new layout file in the right folder *layouts* and have the correct syntax. Your MD file content will be rendered where you have added the following line `{{ content | safe }}` on your new .njk file