var cfg = require('../../config');

var path = require('path');

var gulp = require('gulp');
var util = require('gulp-util');

var htmlmin = require('gulp-htmlmin');

var opts = {
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeComments: true
};


//-- Minify HTML pages
gulp.task('optimize:pages', function() {
  return gulp.src(path.join(cfg.paths.site, cfg.globs.pages))
    .pipe(htmlmin(opts))
    .on('error', function(e) {
      util.log(e);
    })
    .pipe(gulp.dest(cfg.paths.site));
});


/* Refs:
    https://www.npmjs.com/package/gulp-htmlmin
    https://www.npmjs.com/package/html-minifier
    https://www.npmjs.com/package/gulp-prettify
*/
