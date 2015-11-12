var cfg = require('../../config');

var gulp  = require('gulp');
var bsync = require('browser-sync');
var spawn = require('child_process').spawn;


//-- Production build of the Jekyll site
gulp.task('jekyll:build', function(cb) {
  bsync.notify('Building Jekyll Site (Production)');

  return spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--source=' + cfg.paths.src, '--destination=' + cfg.paths.site, '--config=_config.yml'], {stdio: 'inherit'})
          .on('close', cb);
});


/* Refs:
    http://jekyllrb.com/docs/usage/
    http://jekyllrb.com/docs/configuration/#build-command-options
    http://jekyllrb.com/docs/configuration/#default-configuration
    https://github.com/gulpjs/gulp/blob/master/docs/API.md#async-task-support
    https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options
*/
