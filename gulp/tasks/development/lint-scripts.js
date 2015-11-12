var cfg = require('../../config');

var gulp       = require('gulp');
var coffeelint = require('gulp-coffeelint');


//-- Linting
gulp.task('lint:scripts', function() {
  return gulp.src(cfg.resources.src.scripts)
    .pipe(coffeelint())
    .pipe(coffeelint.reporter('coffeelint-stylish'));
});


/* Refs:
    http://www.coffeelint.org/
    https://www.npmjs.com/package/gulp-coffeelint
    https://www.npmjs.com/package/coffeelint
    https://www.npmjs.com/package/coffeelint-stylish
*/
