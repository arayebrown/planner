/**
 * Aaron R. Brown © 2015
 * file: tasks/nodemon.js
 */

'use strict';

module.exports = {
  dev: {
    script: 'index.js',
    options: {
      cwd: './server',
      env: {
        PORT: '8000'
      },
      nodeArgs: ['--debug'],
      // omit this property if you aren't serving HTML files and
      // don't want to open a browser tab on start
      callback: function (nodemon) {
        nodemon.on('log', function () {
        });

        // refreshes browser when server reboots
        nodemon.on('restart', function () {
          //grunt.log.ok('signaling restart to watch');
          // Delay before server listens on port
          setTimeout(function () {
            require('fs').writeFileSync('../.rebooted', 'rebooted');
          }, 1000);
        });
      },
      watch: ['**/*.js']
    }
  },
  prod: {
    script: 'index.js',
    options: {
      cwd: './server',
      env: {
        isWatching: false,
        PORT: '8000',
        NODE_ENV: 'production'
      }
    }
  }
};
