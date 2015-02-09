/**
 * Aaron R. Brown © 2015
 * file: tasks/nodemon.js
 */

'use strict';

module.exports = {
  options: {
    growl: true,
    timeout: 6000,
    ui: 'bdd',
    reporter: 'spec',
    recursive: false,
    env: {
      NODE_ENV: 'test'
    },
    force: true
  },
  files: './server/test/**/*_test.js'
};
