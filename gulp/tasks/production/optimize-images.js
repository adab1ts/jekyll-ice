var cfg = require('../../config');

var gulp = require('gulp');
var util = require('gulp-util');

var imagemin = require('gulp-imagemin');

var opts = {
  optimizationLevel: 3,
  progressive: true,
  interlaced: true
};


//-- Minify images
gulp.task('optimize:images', function() {
  var images = [
    cfg.resources.build.favicon,
    cfg.resources.build.images
  ];

  return gulp.src(images, {base: cfg.paths.site})
    .pipe(imagemin(opts))
    .on('error', function(e) {
      util.log(e);
    })
    .pipe(gulp.dest(cfg.paths.site));
});


/* Refs:
    https://www.npmjs.com/package/gulp-imagemin
    https://www.npmjs.com/package/imagemin
*/
