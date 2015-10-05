//-- Copy
var cfg = require('../config');

var gulp = require('gulp');


//--
gulp.task('copy', function() {
  var resources = [
    cfg.paths.src+'/.gitignore',
    cfg.paths.src+'/**',
    '!'+cfg.paths.src,
    '!'+cfg.paths.src+cfg.paths.assets,
    '!'+cfg.paths.src+cfg.paths.scripts,
    '!'+cfg.paths.src+cfg.paths.scripts+'/**',
    '!'+cfg.paths.src+cfg.paths.styles,
    '!'+cfg.paths.src+cfg.paths.styles+'/**'
  ];

  return gulp.src(resources)
    .pipe(gulp.dest(cfg.paths.dest));
});
