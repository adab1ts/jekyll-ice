//-- Jekyll Tasks
var gulp = require('gulp'),
    exec = require('child_process').exec;


//--
gulp.task('jekyll:devbuild', function(cb) {
  /* Refs:
      http://jekyllrb.com/docs/usage/
      http://jekyllrb.com/docs/configuration/#build-command-options
      http://jekyllrb.com/docs/configuration/#default-configuration
      https://github.com/gulpjs/gulp/blob/master/docs/API.md#async-task-support
      https://iojs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
  */
  exec('jekyll build --config _config.yml,_config.devel.yml', function(err) {
    if (err) return cb(err);
    cb();
  });
});


//--
gulp.task('jekyll:build', function(cb) {
  /* Refs:
      http://jekyllrb.com/docs/usage/
      http://jekyllrb.com/docs/configuration/#build-command-options
      http://jekyllrb.com/docs/configuration/#default-configuration
      https://github.com/gulpjs/gulp/blob/master/docs/API.md#async-task-support
      https://iojs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
  */
  exec('jekyll build', function(err) {
    if (err) return cb(err);
    cb();
  });
});
