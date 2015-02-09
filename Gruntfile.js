/**
 * Aaron R. Brown © 2015
 * file: Gruntfile.js
 */

'use strict';

module.exports = function (grunt) {
  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'tasks'),
    data: {
      // configurable paths
      'server_app': 'server',
      'client_app': 'client',
      dist: 'dist',
      develop: '.build',
      temporary: 'tmp'
    },
    init: true,
    loadGruntTasks: {
      pattern: 'grunt-*',
      config: require('./package.json')
    }
  });

  grunt.registerTask('server', function () {
    grunt.task.run([
      'concurrent:monitor'
    ]);
  });

  grunt.registerTask('test', function () {
    grunt.task.run([
      'mochacli'
    ]);
  });
};
