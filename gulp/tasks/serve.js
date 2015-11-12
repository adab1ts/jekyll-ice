var gulp        = require('gulp');
var runSequence = require('run-sequence');


//-- Generate a development build of the site, start a development server and watch for changes
gulp.task('serve', function(cb) {
  runSequence(
  [
    'jekyll:devbuild',
    'compile:scripts',
    'compile:styles',
    'copy:images',
    'copy:fonts'
  ],
  'encode:images',
  'server',
  'watch',
  cb);
});


/* Refs:
    https://www.npmjs.com/package/gulp
    https://www.npmjs.com/package/run-sequence
*/
