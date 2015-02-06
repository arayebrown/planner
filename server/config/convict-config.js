/**
 * Aaron R. Brown © 2015
 * file: server/config/convict-config.js
 */

'use strict';

var convict = require('convict'),
    conf = convict({
      'host': 'localhost',
      'port': 8000,
      'express': {
        'x-powered-by': false,
        'trust proxy': false,
        'jsonp callback name': null,
        'json replacer': null,
        'json spaces': 0,
        'case sensitive routing': false,
        'strict routing': false,
        'view cache': false,
        'view engine': 'js',
        'views': 'views'
      }
    });

conf.validate();

module.exports = conf;
