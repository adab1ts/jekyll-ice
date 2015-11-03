/* Refs:
    https://www.npmjs.com/package/gulp
    https://www.npmjs.com/package/run-sequence
*/
var gulp = require('gulp'),
    runSequence = require('run-sequence');

//--
gulp.task('build', function(cb) {
  runSequence('clean', 'jekyll:build', 'optimize:assets', 'optimize:pages', 'compress', cb);
});
