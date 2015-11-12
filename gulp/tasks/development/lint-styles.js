var cfg = require('../../config');

var gulp    = require('gulp');
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


//-- Linting
gulp.task('lint:styles', function() {
  return gulp.src(cfg.resources.src.styles)
    .pipe(stylint(opts))
    .pipe(stylint.reporter());
});


/* Refs:
    https://www.npmjs.com/package/gulp-stylint
    https://www.npmjs.com/package/stylint
    https://www.npmjs.com/package/stylint-stylish
*/
