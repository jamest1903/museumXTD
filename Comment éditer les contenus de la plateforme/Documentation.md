---
title: MuseumXTD  
layout: layouts/post.njk  
eleventyNavigation:
  key: documentation
  title:Documentation
---

# Documentation
Find the English version below. 

**MuseumXTD** est une plateforme de ressources évolutive pour répondre aux nombreuses questions liées à l’implémentation et à l’usage du numérique dans les petits et moyens musées de notre région. 
- Plus d’information sur https://www.museumxtd.ch/
- Le code est accessible sur cette [page Github](https://github.com/MediaComem/museumXTD).

**La procédure que nous recommandons nécessite l'installation de deux logiciels (voir la section *1. Pour commencer*)**: 
- Le logiciel de prise de note Obsidian pour éditer le contenu
- L'application desktop GitHub pour héberger les pages

**Après l'installation des logiciels, vous pourrez modifier les contenus en trois étapes (voir la section *2. Modifier les contenus du site internet*):**
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
[[#2. Modifier les contenus du site internet]]
	[[#2.1. Récupérer la dernière version du site web]]
	[[#2.2. Ajouter et modifier les fichiers]]
		[[#2.2.1. Ajouter les métadonnées]]
		[[#2.2.2. Ajouter du contenu]]
		[[#2.2.3. Ajouter des images]]
	[[#2.3. Publier les modifications sur le site]]
[[#3. Configuration avancée avec Obsidian Git]]
	[[#3.1. Installer git pour windows]]
	[[#3.2. Cloner le projet museumXTD]]
	[[#3.3. Installer Obsidian]]
	[[#3.4. Configurer Obsidian pour qu'il se synchronise automatiquement avec GitHub afin de récupérer les dernières modifications et de pousser le nouveau contenu]]
	[[#3.5. Quelques commandes de base]]
[[#4. Développement et design]]
	[[#4.1. Exécuter en local]]
	[[#4.2. Mise à jour manuelle des modifications sur le serveur d'hébergement en direct sur les pages GitHub]]
	[[#4.3. Layouts]]

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
Cliquez sur cette [[Notes question et ressource|page]] pour comprendre comment modifier le contenu qui apparait sur la plateforme museumxtd.ch dans [[index|Ressources]], directement depuis Obsidian.  

### 2.2.3. Ajouter des images 
Toutes les images doivent être stockées dans le dossier racine **images**. Pour référencer une image dans un fichier MD, veuillez suivre l'exemple suivant : `/images/nameFile.png`.


## 2.3. Publier les modifications sur le site
Ouvrez l'application GitHub Desktop
1. Rédigez un résumé de vos modifications
1. Cliquez sur le bouton *Commit
1. Cliquez sur *Push origin*

Cette dernière étape permet de télécharger vos modifications sur GitHub. Une fois en ligne, vos notes seront transformées en pages web (de .md à .html). Il y aura un délai de quelques minutes avant qu'elles ne soient visibles en ligne Museumxtd.ch 

![screenshot of github desktop](/images/read-me-images/screenshot-github_desktop.png)

# 3. Configuration avancée avec Obsidian Git

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