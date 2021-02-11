# Agency Website with React

This project was made as part of THP coding bootcamp, in order to practice contexts and routing in React. 

Project : Setting up the website of an agency

## Introduction

After an interview, a development agency hired you. Well done! After a few months, they want to redo their website, and YOU are in charge of its protoype.

Your agency cares about its clients eyes, so they want a way to switch between a light and a dark theme quickly. Cool! 😎

## Requirements

### The pages

The website must have 3 pages, all accessible via a navbar :

    Home, with the URL "/"
    The agency, "/about"
    Works, "/works"

### The dark and light themes

There must be a button on the top-right corner of the webpage, allowing the user to switch from a light to a dark theme. The default theme will be the light one (BONUS: unless the user has his browser preferences set to dark).

The theme chosen by the user will be stored in localStorage in such a way that when the user visits the website in the future, the theme will be the one he chose during his last visit.

### The Works page and study cases

There must be a dynamic routing put in place in the works page in order to access the agency's different study cases.

The routes must have the following format: "/works/clientname-study-case"

## Expected result

A website with React containing 3 pages ("Home", "About" and "Works").

The components must be function components, and react-router-dom will be used for routing.

3 other pages are exepected (Platon, Solane and Sedal), one for each study case. As you can guess, those pages are in fact one and the same component, in which will be display different data given according to the URL. So it is dynamic routing.

## Bonus features

- The user can choose one of two displays of the study cases via a button: 
    - a list: with just the name of the clients, 
    - a grid: with both the name of the client and the title of the case study

- The night mode will be set automatically if the user's browser preferences are set to dark. Of course if the user choses the light one instead, his choice must have the upper hand!

### Authors

@Mtwod, @colinebrlt
