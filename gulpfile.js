// GULP PACKAGES
var gulp  		= require('gulp'),
    browserSync = require('browser-sync').create(),
    sourcemaps 		= require('gulp-sourcemaps');
	concat      = require('gulp-concat');
    sass = require('gulp-sass')(require('sass'));



// GULP VARIABLES
// Modify these variables to match your project needs

// Set local URL if using Browser-Sync
const 	LOCAL_URL = 'rianimate.test';

const SOURCE = {
	scripts: [
		'src/js/**/*.js',
    ],

	// Scss files will be concantonated, minified if ran with --production
	styles: 'src/scss/**/*.scss',
};

const DEST = {
	styles: 'dist/css/',
	scripts: 'dist/js/'
};

const TESTS = {
	styles: 'tests/css/',
	scripts: 'tests/js/'
};

// GULP FUNCTIONS


function scripts() {
	return gulp.src(SOURCE.scripts)  
    .pipe(sourcemaps.init())
    .pipe(concat('core.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(DEST.scripts))
    .pipe(gulp.dest(TESTS.scripts))
};

function styles(){
    return gulp.src(SOURCE.styles)
        .pipe(sass())
        .pipe(gulp.dest(DEST.styles))
        .pipe(gulp.dest(TESTS.styles))
        .pipe(browserSync.stream());
};


function serve() {

    browserSync.init({
        server: {
            baseDir: "tests"
        },
		host: LOCAL_URL,

    });

    gulp.watch(SOURCE.styles, gulp.parallel('styles'));
    gulp.watch(SOURCE.scripts, gulp.parallel('scripts')).on('change', browserSync.reload);
};

exports.scripts = scripts;
exports.serve = serve;
exports.styles = styles;

// Run styles, scripts and foundation-js
exports.default = gulp.series(styles, scripts);