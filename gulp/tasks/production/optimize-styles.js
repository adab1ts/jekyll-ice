var cfg = require('../../config');

var path = require('path');

var gulp = require('gulp');
var util = require('gulp-util');

var sourcemaps = require('gulp-sourcemaps');
var cssnano    = require('gulp-cssnano');


//-- Minify styles
gulp.task('optimize:styles', function() {
  return gulp.src(cfg.resources.build.styles)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(cssnano({sourceMap: true}))
    .on('error', function(e) {
      util.log(e);
    })
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.join(cfg.paths.site, cfg.paths.styles)));
});


/* Refs:
    https://www.npmjs.com/package/gulp-sourcemaps
    https://www.npmjs.com/package/gulp-cssnano
*/
