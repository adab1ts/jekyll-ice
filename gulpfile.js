/*
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, groups of tasks have been broken out into
  their own file in ./gulp/tasks.

  To add a new task, simply add it to the corresponding file in that directory.
*/
'use strict';


/* Refs:
    https://www.npmjs.com/package/gulp
    https://www.npmjs.com/package/require-dir
    https://www.npmjs.com/package/run-sequence
*/
var gulp = require('gulp'),
    requireDir  = require('require-dir'),
    runSequence = require('run-sequence');

requireDir('./gulp', { recurse: true });


//--
gulp.task('serve', function(cb) {
  runSequence(['jekyll:devbuild', 'compile:scripts', 'compile:styles'], 'server', 'watch', cb);
});


//--
gulp.task('build', function(cb) {
  runSequence('clean', 'jekyll:build', 'optimize:assets', 'optimize:pages', 'compress', cb);
});


//--
gulp.task('jekyllize', function(cb) {
  runSequence('clean', 'copy', 'optimize:assets', cb);
});
