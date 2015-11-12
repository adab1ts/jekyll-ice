var gulp        = require('gulp');
var runSequence = require('run-sequence');


//-- Prepare an optimized version of the Jekyll site code
gulp.task('jekyllize', function(cb) {
  runSequence('clean',
  'copy:code',
  [
    'compile:scripts',
    'compile:styles',
    'copy:images',
    'copy:fonts'
  ],
  'encode:images',
  [
    'optimize:scripts',
    'optimize:styles',
    'optimize:images',
    'copy:fonts:prod'
  ],
  'revision:assets',
  'inject:assets',
  'clean:unrev',
  'transcode:images',
  cb);
});


/* Refs:
    https://www.npmjs.com/package/gulp
    https://www.npmjs.com/package/run-sequence
*/
