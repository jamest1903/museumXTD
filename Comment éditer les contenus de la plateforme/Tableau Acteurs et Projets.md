---
title: MuseumXTD
layout: layouts/post.njk
tags:
---

Cette note fournit un mode d'emploi pour ajouter/enlever/modifier des valeurs dans les tableaux *Acteurs* et *Projets*, qui apparaît sur la plateforme museumxtd dans [Acteurs&Projets](https://www.museumxtd.ch/tables/). 

## Avant de modifier
1. Avez-vous les accès pour modifier le site internet [MuseumXTD.ch](https://www.museumxtd.ch) ? Voir l'étape [[README#Getting started]]. 
2. Avez-vous compris le processus **PULL**/**COMMIT**/**PUSH** ? Les modifications des tableaux suivent les mêmes règles que les modifications des contenus depuis Obsidian: 
	- PULL: avant de faire n'importe quelle modification, il faut s'assurer d'être à jour. Voir [[README#Making changes]]
	- COMMIT&PUSH: après toutes modifications, il faut pouvoir les rendre accessible aux autres utilisateurs. Voir [[README#Publishing to the website]]
3. Télécharger le logiciel libre *Libre Office*. Ce dernier a été choisi pour un soucis de formatage et d'accès. 
	- [Cliquer ici pour télécharger](https://fr.libreoffice.org/download/telecharger-libreoffice/)
	- [Cliquer ici pour installer](https://fr.libreoffice.org/get-help/install-howto/)

## Modifier 
1. Pour ouvrir les documents à modifier:
	1. Aller dans le dossier local museumxtd > _ data
	2. Ouvrir le document avec LibreOffice (clique droit > Ouvrir avec > LibreOffice)
2. Pour modifier les documents
	1. Attention: ne pas modifier la première ligne
	2. Ajouter/enlever/modifier les valeurs en remplissant idéalement toutes les colonnes
	3. Enregistrer Sous > remplacer le document existant **SOUS FORMAT .CSV** et non format .ODF
	   ![[Pasted image 20221026120839.png]]

## Après avoir modifié
1.  **COMMIT**&**PUSH**: après ses modifications, il faut pouvoir les rendre accessible aux autres utilisateurs. Voir [[README#Publishing to the website]]
2. Les modifications se vérifient depuis l'interface GitHub Desktop, dans *History*. 