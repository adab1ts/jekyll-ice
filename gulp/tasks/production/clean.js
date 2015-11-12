var cfg = require('../../config');

var path = require('path');

var gulp  = require('gulp');
var spawn = require('child_process').spawn;


//-- Clean the production build of the site
gulp.task('clean', function(cb) {
  return spawn('find', ['-regextype', 'posix-egrep', '!', '-regex', ".(/\.git(/.*|ignore)?)?", '-delete'], {cwd: cfg.paths.site, stdio: 'inherit'})
          .on('close', cb);
});


//-- Clean unrev assets of the production build of the site
gulp.task('clean:unrev', function(cb) {
  var cwdir = path.join(cfg.paths.site, cfg.paths.assets);

  return spawn('find', ['-type', 'f', '-regextype', 'posix-egrep', '!', '-regex', "(./.*\.map$|./.*\.[0-9a-f]{8}\.(gif|jpg|jpeg|png|svg|css|js)$)", '-delete'], {cwd: cwdir, stdio: 'inherit'})
          .on('close', cb);
});


/* Refs:
    https://github.com/gulpjs/gulp/blob/master/docs/API.md#async-task-support
    https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options
*/
