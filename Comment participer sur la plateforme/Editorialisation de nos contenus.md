---
title: MuseumXTD
layout: layouts/post.njk
date: 2022-06-09
---
# Comment éditer des notes *question* et *ressource* dans [[Numérique et Musée]]

Du markd... quoi? Jetez un coup d'œil à [ce guide Obsidian](https://johackim.com/obsidian) pour mieux vous familiariser au logiciel et à la syntaxe markdown. 

## 1. Les notes *question*  
### Structure de la note   
Voir le modèle [[Note question]].   
### Formatage  
- On ne peut pas inclure de *?* dans les titres des notes car Obsidian n'y permet pas les caractères spéciaux ( * / \ < > : ? | ).  
- On peut néanmoins personnaliser le lien vers la note (les double crochets) grâce à l'ajout d'une barre verticale à l'intérieur des crochets. 
Exemple:  
- Le nom de la note [[La pratique muséale numérique. Une approche globale]] ne peut être *La pratique muséale numérique. Une approche globale?* -> essayer de modifier le titre **directement** dans la note et un message d'erreur apparaitra. 
- On peut néanmoins personnaliser sa mention, grâce à l'ajout d'une barre verticale comme suit : 
	- "[ [ La pratique muséale numérique. Une approche globale|La pratique muséale, une approche globale? ] ]" donnera [[La pratique muséale numérique. Une approche globale|La pratique muséale numérique. Une approche globale?]] (cf le guide Obsidian)
### Contenu
- Le titre de la question doit apparaître en haut de la note (*Intitulé de la question*) et intégrer un *?* à la fin. 
- La réponse doit être claire et précise. 
- Les ressources doivent être listées numériquement dans l'ordre d'importance. 
- Le résumé de la ressource doit reprendre une ou deux phrases du résumé présent dans la note *ressource*. Exemple (*cliquer sur la note pour l'ouvrir*): 
	  1. [[La pratique muséale numérique. Une approche globale]]
	     Ce document donne une définition de la stratégie numérique et les raisons de l'implémenter dans les musées. 
- Une ou plusieurs notes *question* peuvent y être associées à la fin après *Voir également*.    

## 2. Les notes *ressources*  
### Structure de la note  
Voir le modèle [[Note ressource]].
### Formatage
- Le titre de la note doit être simple et correspondre au titre de la ressource (pas de mention de l'auteur ou de la date). 
- Obsidian ne permet pas les caractères spéciaux ( * / \ < > : ? | ) dans les titres des notes.   
### Contenu
- La ressource doit être citée comme ci-dessous: 
	- Auteur, Initiale., & Auteur, Initiale. (Date). Titre.
- La citation doit rediriger vers l'article: pour cela, mettre la citation entre crochets simple et insérer le lien entre parenthèse après les crochets. Exemple: 
	- [AMS (2020). La pratique muséale numérique. Une approche globale.](http://msw.be/wp-content/uploads/2020/01/VMS_Digitalisierung_F_Web.pdf)
- Seule l'année de publication est nécessaire pour la date. 
- Le résumé de la ressource doit être repris dans la note *question* dans laquelle elle apparaît.   
- *A retenir*: la ressource doit être synthétisée avec des phrases courtes et claires. Les concepts-clés peuvent être surlignés en gras.  
- Le contexte est une ou deux phrases à propos de l'auteur ou du projet et inclut idéalement une redirection vers le profil de l'auteur ou le site du projet. 
- Une ou plusieurs notes *question* peuvent y être associées à la fin après *Apparaît dans*. 