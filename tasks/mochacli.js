/**
 * Aaron R. Brown © 2015
 * file: tasks/mochacli.js
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
    force: true,
    require: [
      'should'
    ]
  },
  files: './server/test/**/*_test.js'
};
