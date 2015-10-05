//-- Optimizations
var cfg = require('../config');

var gulp = require('gulp'),
    util = require('gulp-util'),
    runSequence = require('run-sequence');


//--
gulp.task('optimize:images', function() {
  /* Refs:
      https://www.npmjs.com/package/gulp-imagemin
      https://www.npmjs.com/package/imagemin
  */
  var imagemin = require('gulp-imagemin');

  var images = [cfg.resources.favicon, cfg.resources.images];
  var opts = {
    progressive: true,
    interlaced: true
  };

  return gulp.src(images, {base: cfg.paths.dest})
    .pipe(imagemin(opts))
    .on('error', function(e) {
      util.log(e);
    })
    .pipe(gulp.dest(cfg.paths.dest));
});


//--
gulp.task('optimize:scripts', ['compile:scripts'], function() {
  /* Refs:
      https://www.npmjs.com/package/gulp-sourcemaps
      https://www.npmjs.com/package/gulp-uglify
  */
  var sourcemaps = require('gulp-sourcemaps'),
          uglify = require('gulp-uglify');

  return gulp.src(cfg.resources.scripts)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .on('error', function(e) {
      util.log(e);
    })
    .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: cfg.paths.dest.slice(1)}))
    .pipe(gulp.dest(cfg.paths.dest + cfg.paths.scripts));
});


//--
gulp.task('optimize:styles', ['compile:styles'], function() {
  /* Refs:
      https://www.npmjs.com/package/gulp-sourcemaps
      https://www.npmjs.com/package/gulp-cssnano
  */
  var sourcemaps = require('gulp-sourcemaps'),
         cssnano = require('gulp-cssnano');

  return gulp.src(cfg.resources.styles)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(cssnano({sourceMap: true}))
    .on('error', function(e) {
      util.log(e);
    })
    .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: cfg.paths.dest.slice(1)}))
    .pipe(gulp.dest(cfg.paths.dest + cfg.paths.styles));
});


//--
gulp.task('revision:assets', ['optimize:images', 'optimize:scripts', 'optimize:styles'], function() {
  /* Refs:
      https://www.npmjs.com/package/gulp-rev-all
  */
  var RevAll = require('gulp-rev-all'),
      revAll = new RevAll();

  var assets = [cfg.resources.scripts, cfg.resources.styles];

  return gulp.src(assets, {base: cfg.paths.dest})
    .pipe(revAll.revision())
    .pipe(gulp.dest(cfg.paths.dest))
    .pipe(revAll.manifestFile())
    .pipe(gulp.dest(cfg.paths.dest));
});


//--
gulp.task('inject:assets', ['revision:assets'], function() {
  /* Refs:
      https://www.npmjs.com/package/gulp-rev-replace
  */
  var revReplace = require('gulp-rev-replace');

  var manifest = gulp.src(cfg.paths.dest + '/rev-manifest.json');

  return gulp.src(cfg.resources.pages)
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(cfg.paths.dest));
});


//--
gulp.task('optimize:assets', function(cb) {
  runSequence('inject:assets', 'clean:unrev', cb);
});


//--
gulp.task('optimize:pages', function() {
  /* Refs:
      https://www.npmjs.com/package/gulp-htmlmin
      https://www.npmjs.com/package/html-minifier
  */
  var htmlmin = require('gulp-htmlmin');

  var opts = {
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeComments: true
  };

  return gulp.src(cfg.resources.pages)
    .pipe(htmlmin(opts))
    .on('error', function(e) {
      util.log(e);
    })
    .pipe(gulp.dest(cfg.paths.dest));
});
