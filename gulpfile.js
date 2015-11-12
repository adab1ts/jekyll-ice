'use strict';
/*
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, tasks have been broken out into
  their own file and placed in the proper folder in ./gulp/tasks.

  To add a new task, simply create its corresponding file in the proper folder.
*/
var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });


/* Refs:
    https://www.npmjs.com/package/require-dir
*/
