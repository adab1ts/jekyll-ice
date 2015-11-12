var cfg = require('../../config');

var gulp = require('gulp');
var webp = require('gulp-webp');


//-- Transcode images to WebP
gulp.task('transcode:images', function() {
  var images = cfg.paths.site + cfg.paths.images + '/**/*.{jpg,jpeg,png}';
  var opts = {};

  return gulp.src(images, {base: cfg.paths.site})
    .pipe(webp(opts))
    .pipe(gulp.dest(cfg.paths.site));
});


/* Refs:
    https://github.com/kogakure/gulp-tutorial
    http://stefanimhoff.de/2014/gulp-tutorial-15-performance-improvements-webp-gzip/
    https://www.npmjs.com/package/gulp-webp
*/
