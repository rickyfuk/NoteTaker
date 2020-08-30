# Project Name

Homework 10 - Employee Summary

# Table of contents

- [Project Name](#project-name)
- [Table of contents](#table-of-contents)
- [General info](#general-info)
- [Screenshots](#screenshots)
- [Features](#features)
- [User Guide](#user-guide)
- [Code Style](#code-style)
- [Technology](#technology)
- [Local File Description](#local-file-description)
- [Status](#status)
- [Future Plan](#future-plan)
- [Create By](#create-by)

# General info

This project is to bulid a note taker app where it is running on a cloud drive and allow the user to add/read/delete notes from the apps.

Please visit [https://rf-notetaker-app.herokuapp.com/](https://rf-notetaker-app.herokuapp.com/) for the site.

For the feature of the site, please visit the [Features](#features) section for more details.

# Screenshots

![screenshot](https://github.com/rickyfuk/NoteTaker/blob/master/public/assets/images/screenshot.PNG?raw=true)

# Features

In this application, the following features have been applied:

1. The user can tranverse to different pages by the server application
2. The user can perform the following function for the notes:
   1. Add
   2. Read
   3. Delete
3. ALl the saved data will put into a database

# User Guide

The main page (landing page):

1. "Get Started" button - will divert to the notes page for managing the notes.

The notes page:

1. When the users press the Pencil Button <img src="../NoteTaker/public/assets/images/pencil.png" width="20"/> on the right hand corner, they can start writing a new notes.
2. When the users enter the title and content, then a save button <img src="../NoteTaker/public/assets/images/save.png" width="20"/> will pop up on the right hand corner and they can save the file at any time they want.
3. The user can view any previous notes by pressing the previous notes on the left hand side.
   <img src="../NoteTaker/public/assets/images/display.png" width="300"/>
4. The user can delete the note by pressing the Bin Button <img src="../NoteTaker/public/assets/images/bin.png" width="20"/> next to the notes

# Code Style

Standard

# Technology

The following technology have been used for this project:

1. [HTML](https://whatwg.org/)
2. [CSS](https://www.w3.org/Style/CSS/)
3. [Bootstrap](https://getbootstrap.com/)
4. [Fontawesome](https://fontawesome.com/)
5. [JavaScript](https://www.javascript.com/)
6. [NodeJS](https://nodejs.org/en/)
7. [NPM](https://www.npmjs.com/)
   - The following application from NPM have been used:
   1. [Express](https://expressjs.com/)

# Local File Description

Below are the description for all local files:

1. HTML:
   1. index.html - The landing html page for the application
   2. notes.html - The notes html page for the user to manage the notes
2. CSS:
   1. style.css - to add the local style to this application
3. Javascript
   1. Part 1 - Public
      1. index.js - the javascript file to trasit the information from API into html
   2. Part 2 - Main folder
      1. server.js - the javascript file to listen to the user instruction and divert the request to the corresponding js router file
   3. Part 3 - Router
      1. htmlroute.js - the javascript file to change the display of the html pages by the instruction from server.js
      2. apiroute.js - the javascript file to recieved the API changes request andtake corresponding action (recieved from connect.js) to reply on the API.
   4. Part 4 - DB
      1. connect.js - contain the program for different API action and provide the script for apiroute.js to run in due course
4. JSON
   1. package.json - the main file for the description of the application and the dependencies
   2. db.json - the database to keep the notes

# Status

Project status: finished

# Future Plan

Plan for the future development of this site:

1. Add the update version
2. Add the authentication system

# Create By

Created by Chung Hei Fuk
