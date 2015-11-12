var cfg = require('../../config');

var path = require('path');

var gulp       = require('gulp');
var util       = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var bsync      = require('browser-sync');

var stylus      = require('gulp-stylus');
var axis        = require('axis');
var rupture     = require('rupture');
var typographic = require('typographic');
var plugins     = [axis(), rupture(), typographic()];
/* See https://github.com/jenius/axis/issues/222 */

var postcss      = require('gulp-postcss');
var rucksack     = require('rucksack-css');
var lost         = require('lost');
var autoprefixer = require('autoprefixer');
var mqpacker     = require('css-mqpacker');
var processors   = [rucksack({fallbacks: true}), lost(), autoprefixer(), mqpacker({sort: true})];


//-- Pre/Post Processing CSS
gulp.task('compile:styles', ['lint:styles'], function(cb) {
  bsync.notify('Processing CSS');

  var styles  = cfg.assets.styles;
  var nstyles = styles.length;

  var compile = function(style) {
    var done = function() {
      nstyles--;
      if (nstyles === 0) cb();
    };

    return gulp.src(path.join(cfg.paths.src, cfg.paths.styles, style.entry))
      .pipe(sourcemaps.init())
      .pipe(stylus({'include css': true, use: plugins}))
      .pipe(postcss(processors))
      .on('error', function(e) {
        util.log(e);
      })
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(path.join(cfg.paths.build, cfg.paths.styles)))
      .on('end', done);
  };

  styles.forEach(compile);
});


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
    https://www.npmjs.com/package/css-mqpacker
    https://nodejs.org/api/path.html#path_path_join_path1_path2
*/
