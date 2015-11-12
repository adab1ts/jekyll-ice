var cfg = require('../../config');

var gulp     = require('gulp');
var compress = require('gulp-gzip');


//-- Gzip text files
gulp.task('compress', function() {
  var resources = cfg.paths.site + cfg.globs.text;
  var opts = {};

  return gulp.src(resources)
    .pipe(compress(opts))
    .pipe(gulp.dest(cfg.paths.site));
});


/* Refs:
    https://github.com/kogakure/gulp-tutorial
    http://stefanimhoff.de/2014/gulp-tutorial-15-performance-improvements-webp-gzip/
    https://www.npmjs.com/package/gulp-gzip
*/
