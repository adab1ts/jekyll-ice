var cfg = require('../../config');

var path = require('path');

var gulp   = require('gulp');
var RevAll = require('gulp-rev-all'),
    revAll = new RevAll();


//-- Revision assets and write manifest
gulp.task('revision:assets', function() {
  var assets = [
    cfg.resources.site.images,
    cfg.resources.site.scripts,
    cfg.resources.site.styles
  ];

  return gulp.src(assets, {base: cfg.paths.site})
    .pipe(revAll.revision())
    .pipe(gulp.dest(cfg.paths.site))
    .pipe(revAll.manifestFile())
    .pipe(gulp.dest(path.join(cfg.paths.site, cfg.paths.assets)));
});


/* Refs:
    https://www.npmjs.com/package/gulp-rev-all
*/
