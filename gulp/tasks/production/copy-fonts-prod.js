var cfg = require('../../config');

var path = require('path');

var gulp = require('gulp');


//-- Copy fonts to site folder
gulp.task('copy:fonts:prod', function() {
  return gulp.src(cfg.resources.build.fonts)
    .pipe(gulp.dest(path.join(cfg.paths.site, cfg.paths.fonts)));
});
