var cfg = require('../../config');

var path = require('path');

var gulp   = require('gulp');
var util   = require('gulp-util');
var bsync  = require('browser-sync');
var source = require('vinyl-source-stream');

var browserify     = require('browserify');
var browserifyShim = require('browserify-shim');
var coffeeify      = require('coffeeify');
var watchify       = require('watchify');


//-- Pre/Post Processing JavaScript
gulp.task('compile:scripts', ['lint:scripts'], function(cb) {
  bsync.notify('Processing JavaScript');

  var scripts  = cfg.assets.scripts;
  var nscripts = scripts.length;

  var compile = function(script) {
    var done = function() {
      nscripts--;
      if (nscripts === 0) cb();
    };

    var b = browserify({
      entries: path.join(cfg.paths.src, cfg.paths.scripts, script.entry),
      extensions: [path.extname(script.entry)],
      debug: true,
      transform: [coffeeify, browserifyShim],
      cache: {}, packageCache: {}, fullPaths: false
    });

    if (global.isWatching) {
      b = watchify(b);
      b.on('update', bundle);
    }

    var bundle = function() {
      return b.bundle()
        .on('error', function(e) {
          util.log(e);
        })
        .pipe(source(script.out))
        .pipe(gulp.dest(path.join(cfg.paths.build, cfg.paths.scripts)))
        .on('end', done);
    };

    return bundle();
  };

  scripts.forEach(compile);
});


/* Refs:
    http://browserify.org/articles.html
    https://viget.com/extend/gulp-browserify-starter-faq
    https://egghead.io/lessons/nodejs-introduction-to-browserify-part-1
    https://egghead.io/lessons/javascript-gulp-and-browserify-initial-setup
    http://stefanimhoff.de/2014/gulp-tutorial-5-javascripts-browserify/
    https://www.npmjs.com/package/browserify
    https://www.npmjs.com/package/browserify-shim
    https://www.npmjs.com/package/coffeeify
    https://www.npmjs.com/package/vinyl-source-stream
    https://nodejs.org/api/path.html#path_path_join_path1_path2
*/
