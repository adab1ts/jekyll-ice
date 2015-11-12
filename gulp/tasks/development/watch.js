var cfg = require('../../config');

var gulp = require('gulp');

var jekyllizable = [
  '_config.yml',
  '_config.devel.yml',
  cfg.paths.src + cfg.globs.jekyll,
  cfg.paths.src + cfg.globs.favicon
];


//-- Watch
gulp.task('watch', function() {
  gulp.watch(jekyllizable,              ['jekyll:rebuild']);
  gulp.watch(cfg.resources.src.fonts,   ['copy:fonts']);
  gulp.watch(cfg.resources.src.images,  ['copy:images']);
  gulp.watch(cfg.resources.src.scripts, ['compile:scripts']);
  gulp.watch(cfg.resources.src.styles,  ['compile:styles']);
});


/* Refs:
    https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglob--opts-tasks-or-gulpwatchglob--opts-cb
*/
