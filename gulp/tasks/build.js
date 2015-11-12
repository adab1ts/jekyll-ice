var gulp        = require('gulp');
var runSequence = require('run-sequence');


//-- Generate an optimized production build of the Jekyll site
gulp.task('build', function(cb) {
  runSequence('clean',
  [
    'jekyll:build',
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
    'copy:fonts:prod',
    'optimize:pages'
  ],
  'revision:assets',
  'inject:assets',
  'clean:unrev',
  [
    'transcode:images',
    'compress'
  ],
  cb);
});


/* Refs:
    https://www.npmjs.com/package/gulp
    https://www.npmjs.com/package/run-sequence
*/
