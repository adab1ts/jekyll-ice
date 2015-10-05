//-- Clean up
var cfg = require('../config');

var gulp = require('gulp'),
    exec = require('child_process').exec;


//--
gulp.task('clean', function(cb) {
  /* Refs:
      https://github.com/gulpjs/gulp/blob/master/docs/API.md#async-task-support
      https://iojs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
  */
  exec('find -regextype posix-egrep ! -regex ".(/\.git(/.*|ignore)?)?" -delete', {cwd: cfg.paths.dest}, function(err) {
    if (err) return cb(err);
    cb();
  });
});


//--
gulp.task('clean:unrev', function(cb) {
  /* Refs:
      https://github.com/gulpjs/gulp/blob/master/docs/API.md#async-task-support
      https://iojs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
  */
  //exec('find -regextype posix-egrep -regex ".*/main.(css|js)$" -delete', {cwd: cfg.paths.dest+cfg.paths.assets}, function(err) {
  exec('find -regextype posix-egrep -regex "(./rev\-manifest.json$|./assets/.*/main.(css|js)$)" -delete', {cwd: cfg.paths.dest}, function(err) {
    if (err) return cb(err);
    cb();
  });
});
