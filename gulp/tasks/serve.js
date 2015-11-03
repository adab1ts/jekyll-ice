/* Refs:
    https://www.npmjs.com/package/gulp
    https://www.npmjs.com/package/run-sequence
*/
var gulp = require('gulp'),
    runSequence = require('run-sequence');

//--
gulp.task('serve', function(cb) {
  runSequence(['jekyll:devbuild', 'compile:scripts', 'compile:styles'], 'server', 'watch', cb);
});
