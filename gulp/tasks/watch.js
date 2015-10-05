//-- Watch
var cfg = require('../config');

var gulp = require('gulp');


//--
gulp.task('watch', function() {
  /* Refs:
      https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglob--opts-tasks-or-gulpwatchglob--opts-cb
  */
  var jekyllizable = [
    cfg.paths.fonts+'/**/*.{eot,svg,ttf,woff}',
    cfg.paths.images+'/**/*.{jpg,jpeg,png,svg}',
    '/**/*.{md,markdown,yml,html,xml,txt}',
    '*.ico'
  ].map(function(glob) { return cfg.paths.src + glob; });

  gulp.watch(jekyllizable, ['jekyll:devbuild']);
  gulp.watch(cfg.resources.src_scripts, ['compile:scripts']);
  gulp.watch(cfg.resources.src_styles, ['compile:styles']);
});
