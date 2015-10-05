//-- Linting
var cfg = require('../config');

var gulp = require('gulp');


//--
gulp.task('lint:scripts', function() {
  /* Refs:
      http://www.coffeelint.org/
      https://www.npmjs.com/package/gulp-coffeelint
      https://www.npmjs.com/package/coffeelint
      https://www.npmjs.com/package/coffeelint-stylish
  */
  var coffeelint = require('gulp-coffeelint');

  return gulp.src(cfg.resources.src_scripts)
    .pipe(coffeelint())
    .pipe(coffeelint.reporter('coffeelint-stylish'));
});


//--
gulp.task('lint:styles', function() {
  /* Refs:
      https://www.npmjs.com/package/gulp-stylint
      https://www.npmjs.com/package/stylint
      https://www.npmjs.com/package/stylint-stylish
  */
  var stylint = require('gulp-stylint');

  var opts = {
    rules: {
      colors: false,
      extendPref: '@extend',
      parenSpace: 'never',
      quotePref: 'single',
      trailingWhitespace: 'never',
      valid: false
    },
    reporter: {
      reporter: 'stylint-stylish'
    }
  };

  return gulp.src(cfg.resources.src_styles)
    .pipe(stylint(opts))
    .pipe(stylint.reporter());
});
