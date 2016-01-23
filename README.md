# React with Flux Starter Kit
This contains the completed environment setup that we walk through in detail in module 2 of ["Building Applications with React and Flux" on Pluralsight](http://www.pluralsight.com/author/cory-house).

##This starter kit gives you the following:
- React, React Router, and Flux for ultra-responsive UI development  
- Browserify bundling  
- jQuery with Bootstrap for styling  
- Gulp build that:  
-- compiles JSX  
-- lints JSX and JS via ESLint  
-- bundles JS and CSS files  
-- migrates the built app to the dist folder  
-- runs a dev webserver  
-- opens your browser at the dev URL  
-- reloads the browser upon save  

##To get started:  
1. Install [NodeJS](http://www.nodejs.org)  
2. Download this repo 
3. Open the command line of your choice and cd to the root directory of this repo on your machine  
4. `npm install` - Installs packages
5. `npm install -g gulp` - Installs gulp globally. [Why globally?](http://stackoverflow.com/questions/22115400/why-do-we-need-to-install-gulp-globally-and-locally)
5. `gulp` - Builds the project and opens your browser. 
6. Navigate to [http://localhost:9005/](http://localhost:9005/) if your browser doesn't open automatically.

You're now all set to [follow along with the course](http://www.pluralsight.com/author/cory-house)! 


##Change Log
* Aug 20, 2015 - Updated to use gulp-open 1.0.0 and browserify 11.0.1 since the course has been updated to use these versions.  
* Jan 23, 2015 - Fixed missing quotes around jQuery globals in .eslintrc.
