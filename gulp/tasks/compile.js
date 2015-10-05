//-- Pre/Post Processing
var cfg = require('../config');

var gulp = require('gulp'),
    util = require('gulp-util');


//--
gulp.task('compile:scripts', ['lint:scripts'], function() {
  /* Refs:
      http://browserify.org/articles.html
      https://viget.com/extend/gulp-browserify-starter-faq
      https://egghead.io/lessons/nodejs-introduction-to-browserify-part-1
      https://egghead.io/lessons/javascript-gulp-and-browserify-initial-setup
      https://www.npmjs.com/package/browserify
      https://www.npmjs.com/package/coffeeify
      https://www.npmjs.com/package/vinyl-source-stream
  */
  var browserify = require('browserify'),
       coffeeify = require('coffeeify'),
          source = require('vinyl-source-stream');

  var b = browserify({
    entries: cfg.resources.main_script,
    extensions: ['.coffee'],
    debug: true,
    transform: [coffeeify]
  });

  return b.bundle()
    .on('error', function(e) {
      util.log(e);
    })
    .pipe(source('main.js'))
    .pipe(gulp.dest(cfg.paths.dest + cfg.paths.scripts));
});


//--
gulp.task('compile:styles', ['lint:styles'], function() {
  /* Refs:
      https://www.npmjs.com/package/gulp-sourcemaps
      https://www.npmjs.com/package/gulp-stylus
      https://www.npmjs.com/package/axis
      https://www.npmjs.com/package/rupture
      https://www.npmjs.com/package/typographic
      https://www.npmjs.com/package/gulp-postcss
      https://www.npmjs.com/package/rucksack-css
      https://www.npmjs.com/package/lost
      https://www.npmjs.com/package/autoprefixer
  */
  var sourcemaps = require('gulp-sourcemaps');

  var typographic = require('typographic'),
             axis = require('axis'),
          rupture = require('rupture'),
           stylus = require('gulp-stylus');

  var autoprefixer = require('autoprefixer'),
              lost = require('lost'),
          rucksack = require('rucksack-css'),
           postcss = require('gulp-postcss');

  var processors = [rucksack({fallbacks: true}), lost(), autoprefixer()],
         plugins = [rupture(), typographic()];
//         plugins = [axis(), rupture(), typographic()];

  return gulp.src(cfg.resources.main_style)
    .pipe(sourcemaps.init())
    .pipe(stylus({use: plugins}))
    .pipe(postcss(processors))
    .on('error', function(e) {
      util.log(e);
    })
    .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: cfg.paths.src.slice(1)}))
    .pipe(gulp.dest(cfg.paths.dest + cfg.paths.styles));
});
