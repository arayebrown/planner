/**
 * Aaron R. Brown © 2015
 * file: server/config/convict-config.js
 */

'use strict';

var convict = require('convict'),
    conf;
    
conf = convict({
  'env': {
    'doc': 'The application environment',
    'format': ['production', 'integration', 'development', 'test'],
    'default': 'development',
    'env': 'NODE_ENV'
  },
  'host': {
    'default': 'localhost'
  },
  'port': {
    'default': 8000
  }
});

//load env-dependent configs

conf.validate();

module.exports = conf;
