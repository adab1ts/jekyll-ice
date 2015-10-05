//-- Server Tasks
var cfg = require('../config');

var gulp = require('gulp'),
    bsync = require('browser-sync').create(),
    middleware = require('connect-gzip-static');


//--
gulp.task('server', function(cb) {
  /* Refs:
      http://www.browsersync.io/docs/gulp/
      http://www.browsersync.io/docs/api/
      http://www.browsersync.io/docs/options/
      https://www.npmjs.com/package/browser-sync
      https://www.npmjs.com/package/connect-gzip-static
      https://github.com/Browsersync/recipes/tree/master/recipes/server.gzipped.assets
  */
  var opts = {
    files: [
      cfg.resources.fonts,
      cfg.resources.images,
      cfg.resources.scripts,
      cfg.resources.styles,
      cfg.resources.pages
    ],
    server: {
      baseDir: cfg.paths.dest
    },
    port: cfg.server.port
  };

  bsync.init(opts, cb);
});


//--
gulp.task('server:prod', function(cb) {
  /* Refs:
      http://www.browsersync.io/docs/gulp/
      http://www.browsersync.io/docs/api/
      http://www.browsersync.io/docs/options/
      https://www.npmjs.com/package/browser-sync
      https://www.npmjs.com/package/connect-gzip-static
      https://github.com/Browsersync/recipes/tree/master/recipes/server.gzipped.assets
  */
  var opts = {
    server: {
      baseDir: cfg.paths.dest
    },
    port: cfg.server.port
  };

  bsync.init(opts, function(err, bs) {
    if (err) return cb(err);
    bs.addMiddleware('*', middleware(cfg.paths.dest), {override: true});
    cb();
  });
});
