var cfg = require('../../config');

var path = require('path');

var gulp    = require('gulp');
var enc_b64 = require('gulp-base64');

var opts = {
  baseDir: cfg.paths.build,
  extensions: ['png'],
  maxImageSize: 20 * 1024,
  debug: false
};


//-- Encode images into CSS stylesheets
gulp.task('encode:images', function() {
  return gulp.src(cfg.resources.build.styles)
    .pipe(enc_b64(opts))
    .pipe(gulp.dest(path.join(cfg.paths.build, cfg.paths.styles)));
});


/* Refs:
    https://www.npmjs.com/package/gulp-base64
*/
