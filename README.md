# ARCHIVED: React with Flux Starter Kit

[Building Applications with React and Flux](https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents) on Pluralsight has been updated to use create-react-app and other more modern tooling. So this repo is no longer related to the course. So I'm marking this repo as archived for historical purposes.

## This starter kit gives you the following:

- React, React Router, and Flux for ultra-responsive UI development  
- Browserify bundling  
- jQuery with Bootstrap for styling  
- Gulp build that:  
  - compiles JSX  
  - lints JSX and JS via ESLint  
  - bundles JS and CSS files  
  - migrates the built app to the dist folder  
  - runs a dev webserver  
  - opens your browser at the dev URL  
  - reloads the browser upon save  

## To get started: 

1. Install [NodeJS](http://www.nodejs.org)  
2. Download this repo 
3. Open the command line of your choice and cd to the root directory of this repo on your machine  
4. `npm install` - Installs packages
5. `npm install -g gulp` - Installs gulp globally. [Why globally?](http://stackoverflow.com/questions/22115400/why-do-we-need-to-install-gulp-globally-and-locally)
5. `gulp` - Builds the project and opens your browser. Check [here if you have issues](https://github.com/coryhouse/react-flux-starter-kit#having-issues-try-this).
6. Navigate to [http://localhost:9005/](http://localhost:9005/) if your browser doesn't open automatically.

You're now all set to [follow along with the course](http://www.pluralsight.com/author/cory-house)! 

## Having Issues? Try this:

1. If you have an .eslintrc file in your user directory, delete it.

## Change Log

* Aug 20, 2015 - Updated to use gulp-open 1.0.0 and browserify 11.0.1 since the course has been updated to use these versions.  
* Jan 23, 2016 - Fixed missing quotes around jQuery globals in .eslintrc.
* Jan 12, 2017 - Added link to completed demo and updated demo that uses latest versions as of early 2017.
* Feb 25, 2018 - Updated to work with Node 8.
