---
title: MuseumXTD
layout: layouts/post.njk
---
# Comment éditer des notes *question* et *ressource* dans Obsidian

Cette note permet de comprendre comment modifier le contenu qui apparait sur la plateforme museumxtd.ch dans [[index|Ressources]], directement depuis Obsidian. Il existe deux types de contenu: les notes *question* et *ressource*. 

Du markd... quoi? Jetez un coup d'œil à [ce guide Obsidian](https://johackim.com/obsidian) pour mieux vous familiariser au logiciel et à la syntaxe markdown. 

## 1. Les notes *question*  
Les notes *question* sont les thématiques autour desquelles s'articulent les ressources. Elles prennent la forme de question pour comprendre ce qu'est la transition numérique pour les petits et moyens musées (*Qu'est-ce qu'une stratégie numérique? Comment créer et valoriser une collection numérique?* etc.). 

### 1.1. Formatage  
- Obsidian ne permet pas les caractères spéciaux dans les titres des notes ( * / \ < > : ? | ).  
- On peut néanmoins personnaliser le lien vers la note (les double crochets) grâce à l'ajout d'une barre verticale à l'intérieur des crochets. 
	Exemple:  
	- Le nom de la note [[La pratique muséale numérique. Une approche globale]] ne peut être *La pratique muséale numérique. Une approche globale?* -> essayer de modifier le titre **directement** dans la note et un message d'erreur apparaitra. 
	- On peut néanmoins personnaliser sa mention, grâce à l'ajout d'une barre verticale comme suit : 
		- "[ [ La pratique muséale numérique. Une approche globale|La pratique muséale, une approche globale? ] ]" donnera [[La pratique muséale numérique. Une approche globale|La pratique muséale numérique. Une approche globale?]] (cf le guide Obsidian)
### 1.2. Contenu
- Voir [[Note question]] pour comprendre la structure de la note. 
- Les ressources doivent être listées numériquement dans l'ordre d'importance. 
- Le résumé de la ressource reprend une ou deux phrases du résumé présent dans la note *ressource*. Exemple (*cliquer sur la note pour l'ouvrir*): 
	  1. [[La pratique muséale numérique. Une approche globale]]
	     Ce document donne une définition de la stratégie numérique et les raisons de l'implémenter dans les musées. 
- Une ou plusieurs notes *question* peuvent y être associées à la fin après *Ressource similaire*.    

## 2. Les notes *ressource*  
Les notes *ressource* sont les réponses aux notes *question*. Elles prennent la forme de fiches synthèses d'une ressource (article, outils etc.)

### 2.1. Formatage
- Le titre de la note doit être simple et correspondre au titre de la ressource (pas de mention de l'auteur ou de la date). 
- Obsidian ne permet pas les caractères spéciaux ( * / \ < > : ? | ) dans les titres des notes.   
### 2.2. Contenu
- Voir [[Note ressource]] pour comprendre la structure de la note 
- Le titre du texte doit rediriger vers l'article: pour cela, mettre la citation entre crochets simple et insérer le lien entre parenthèse après les crochets. Exemple: 
	- [La pratique muséale numérique. Une approche globale.](http://msw.be/wp-content/uploads/2020/01/VMS_Digitalisierung_F_Web.pdf)
- Le résumé de la ressource doit être repris dans la note *question* dans laquelle elle apparaît.   
- *A retenir*: la ressource doit être synthétisée avec des phrases courtes et claires. Les concepts-clés peuvent être surlignés en gras.  
- Le contexte est une ou deux phrases à propos de l'auteur ou du projet et inclut idéalement une redirection vers le profil de l'auteur ou le site du projet. 
- Une ou plusieurs notes *question* peuvent y être associées à la fin après *Apparaît dans*. 