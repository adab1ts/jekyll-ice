/*
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, groups of tasks have been broken out into
  their own folder in ./gulp/tasks.

  To add a new task, simply create its corresponding file in the proper folder.
*/
'use strict';


/* Refs:
    https://www.npmjs.com/package/require-dir
*/
var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });
