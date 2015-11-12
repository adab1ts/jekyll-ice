var cfg = require('../../config');

var path = require('path');

var gulp       = require('gulp');
var revReplace = require('gulp-rev-replace');


//-- Replace all links to assets with its revisioned names
gulp.task('inject:assets', function() {
  var manifest   = gulp.src(path.join(cfg.paths.site, cfg.paths.assets, '/rev-manifest.json'));
  var extensions = ['.html', '.xml', '.txt', '.md', '.markdown', '.csv', '.json', '.yml', '.css', '.js'];
  var resources  = [
    cfg.paths.site + cfg.globs.text,
    '!' + cfg.paths.site + '/feed.xml'
  ];

  return gulp.src(resources)
    .pipe(revReplace({replaceInExtensions: extensions, manifest: manifest}))
    .pipe(gulp.dest(cfg.paths.site));
});


/* Refs:
    https://www.npmjs.com/package/gulp-rev-replace
*/
