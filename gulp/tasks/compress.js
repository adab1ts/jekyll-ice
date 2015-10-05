//-- Compression
var cfg = require('../config');

var gulp = require('gulp');


//--
gulp.task('compress', function() {
  /* Refs:
      https://www.npmjs.com/package/gulp-gzip
      https://github.com/kogakure/gulp-tutorial
      http://stefanimhoff.de/2014/gulp-tutorial-15-performance-improvements-webp-gzip/
  */
  var compress = require('gulp-gzip');

  var resources = cfg.paths.dest + '/**/*.{html,xml,json,css,js}';
  var opts = {};

  return gulp.src(resources)
    .pipe(compress(opts))
    .pipe(gulp.dest(cfg.paths.dest));
});
