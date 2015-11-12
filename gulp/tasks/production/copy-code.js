var cfg = require('../../config');

var gulp = require('gulp');


//-- Copy everything but assets to destination folder
gulp.task('copy:code', function() {
  var resources = [
    cfg.paths.src+'/.gitignore',
    cfg.paths.src+'/**',
    '!'+cfg.paths.src,
    '!'+cfg.paths.src+cfg.paths.assets,
    '!'+cfg.paths.src+cfg.paths.fonts,
    '!'+cfg.paths.src+cfg.paths.fonts+'/**',
    '!'+cfg.paths.src+cfg.paths.images,
    '!'+cfg.paths.src+cfg.paths.images+'/**',
    '!'+cfg.paths.src+cfg.paths.scripts,
    '!'+cfg.paths.src+cfg.paths.scripts+'/**',
    '!'+cfg.paths.src+cfg.paths.styles,
    '!'+cfg.paths.src+cfg.paths.styles+'/**'
  ];

  return gulp.src(resources)
    .pipe(gulp.dest(cfg.paths.site));
});
