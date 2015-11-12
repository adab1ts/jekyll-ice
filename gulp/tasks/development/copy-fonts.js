var cfg = require('../../config');

var path = require('path');

var gulp    = require('gulp');
var changed = require('gulp-changed');


//-- Copy fonts to build folder
gulp.task('copy:fonts', function() {
  return gulp.src(cfg.resources.src.fonts)
    .pipe(changed(path.join(cfg.paths.build, cfg.paths.fonts)))
    .pipe(gulp.dest(path.join(cfg.paths.build, cfg.paths.fonts)));
});


/* Refs:
    https://www.npmjs.com/package/gulp-changed
*/
