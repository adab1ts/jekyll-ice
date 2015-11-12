var cfg = require('../../config');

var gulp  = require('gulp');
var bsync = require('browser-sync').create();

var opts = {
  files: [
    cfg.resources.build.fonts,
    cfg.resources.build.images,
    cfg.resources.build.scripts,
    cfg.resources.build.styles,
    cfg.resources.build.pages
  ],
  server: {
    baseDir: cfg.paths.build
  },
  port: cfg.server.build.port
};


//-- Start development server
gulp.task('server', function(cb) {
  bsync.init(opts, cb);
});


/* Refs:
    http://www.browsersync.io/docs/gulp/
    http://www.browsersync.io/docs/api/
    http://www.browsersync.io/docs/options/
    https://www.npmjs.com/package/browser-sync
    https://www.npmjs.com/package/connect-gzip-static
    https://github.com/Browsersync/recipes/tree/master/recipes/server.gzipped.assets
*/
