# museumXTD

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Adding new content with MarkDown files](#adding-new-content-with-markdown-files)
- [Updating changes to the live hosting server on github pages](#updating-changes-to-the-live-hosting-server-on-github-pages)
- [Configuring Odsidian to automatically push updates to github](#configuring-odsidian-to-automatically-push-updates-to-github)
- [Running locally](#running-locally)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


The applied research pilot project **MuseumXTD** ("museum extended") explores the challenges of the digital transition within small and medium-sized museums.

#### Adding new content with MarkDown files
- **title** This property is referenced in the ***layouts/base.njk*** HTML to use as the title to the browser tab. If not set it has the default value as *MuseumXTD* 
- **layout** We add this to have your MD file contained in some HTML/CSS referenced in a njk file. For this project we have the standard HTML/CSS applied with layouts/post.njk
- **date** This property can be included to your front matter to override the default date (file creation) and customize how the file is sorted in a collection. For more info on available formats see [here](https://www.11ty.dev/docs/dates/)

Below is an example of the standard properties to add to your new MD file. post.njk will import the HTML from `base.njk` which imports the `main.css` styles to apply to your page.
```
---
title: MuseumXTD
layout: layouts/post.njk
date: 2022-06-23
---
```

If you wish to apply another layout to your MD file you can reference it's file name instead. Be sure to save your new layout file in the right folder *layouts* and have the correct syntax. Your MD file content will be rendered where you have added the following line `{{ content | safe }}` on your new .njk file

#### Updating changes to the live hosting server on github pages
When you push changes to the github branch **test-live** which has the **eleventy_build.yml** file this will trigger a build of the project on github and push the created files to the **docs** folder. Next this folder which will contain the eleventy build, is pushed to the **gh-pages** branch. This branch will automatically update on the live host in a few moments.

#### Configuring Odsidian to automatically push updates to github
Open the settings tab and under *Community plugins* search for and install the plugin **Obsidian Git**. With this plugin you can push your changes on the project to the github repository automatically. Please read the material to understand the different options available to you.

#### Running locally
You can run the project locally by first cloning the project from github, downloading the packages `npm ci` from the package.json and then running `npm run start`. This will build the project and serve the updated docs folder on your local host to view on your browser `Local: http://localhost:8080`
