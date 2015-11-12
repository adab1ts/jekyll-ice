var cfg = require('../../config');

var path = require('path');

var gulp = require('gulp');
var util = require('gulp-util');

var sourcemaps = require('gulp-sourcemaps');
var uglify     = require('gulp-uglify');


//-- Minify and mangle scripts
gulp.task('optimize:scripts', function() {
  return gulp.src(cfg.resources.build.scripts)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .on('error', function(e) {
      util.log(e);
    })
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.join(cfg.paths.site, cfg.paths.scripts)));
});


/* Refs:
    https://www.npmjs.com/package/gulp-sourcemaps
    https://www.npmjs.com/package/gulp-uglify
*/
