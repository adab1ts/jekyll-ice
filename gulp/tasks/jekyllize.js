/* Refs:
    https://www.npmjs.com/package/gulp
    https://www.npmjs.com/package/run-sequence
*/
var gulp = require('gulp'),
    runSequence = require('run-sequence');

//--
gulp.task('jekyllize', function(cb) {
  runSequence('clean', 'copy', 'optimize:assets', cb);
});
