"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Run a local dev server
var open = require('gulp-open'); //Open a URL in web browser
var browserify = require('browserify'); //Bundles JS
var reactify = require('reactify'); //Transforms React JSX to JS
var source = require('vinyl-source-stream'); //Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint');//Lint JS files, including JSX

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css'
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
};

//Start a local development server
gulp.task('connect', function(done) {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });

    done();
});

gulp.task('open', gulp.series('connect', function(done) {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
        
    done();
}));

gulp.task('html', function(done) {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
    
    done();
});

gulp.task('js', function(done) {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());

    done();
});

gulp.task('css', function(done) {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));

    done();
});

gulp.task('lint', function(done) {
    return gulp.src(config.paths.js)
        .pipe( lint({configFile: 'eslint.config.json'}))
        .pipe(lint.format());
    
    // done(); // we dont need it here since we have return
});

gulp.task('watch', function() {
    gulp.watch(config.paths.html, gulp.series('html'));
    gulp.watch(config.paths.js, gulp.series('js', 'lint'));
});

gulp.task('default', gulp.series('html', 'js', 'css', 'lint', 'open', 'watch'));