var cfg = require('../../config');

var gulp  = require('gulp');
var bsync = require('browser-sync').create();

var middleware = require('connect-gzip-static');

var opts = {
  server: {
    baseDir: cfg.paths.site
  },
  port: cfg.server.site.port
};


//-- Start production server
gulp.task('server:prod', function(cb) {
  bsync.init(opts, function(err, bs) {
    if (err) return cb(err);
    bs.addMiddleware('*', middleware(cfg.paths.site), {override: true});
    cb();
  });
});


/* Refs:
    http://www.browsersync.io/docs/gulp/
    http://www.browsersync.io/docs/api/
    http://www.browsersync.io/docs/options/
    https://www.npmjs.com/package/browser-sync
    https://www.npmjs.com/package/connect-gzip-static
    https://github.com/Browsersync/recipes/tree/master/recipes/server.gzipped.assets
*/
