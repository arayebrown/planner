/**
 * Aaron R. Brown © 2015
 * file: tasks/shell.js
 */

'use strict';

module.exports = {
  emberServe: {
    command: 'ember serve',
    options: {
      execOptions: {
        cwd: 'client',
        async: true
      }
    }
  },
};
