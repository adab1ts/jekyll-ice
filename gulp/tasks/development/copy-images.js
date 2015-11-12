var cfg = require('../../config');

var path = require('path');

var gulp    = require('gulp');
var changed = require('gulp-changed');


//-- Copy images to build folder
gulp.task('copy:images', function() {
  return gulp.src(cfg.resources.src.images)
    .pipe(changed(path.join(cfg.paths.build, cfg.paths.images)))
    .pipe(gulp.dest(path.join(cfg.paths.build, cfg.paths.images)));
});


/* Refs:
    https://www.npmjs.com/package/gulp-changed
*/
