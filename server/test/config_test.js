/**
 * Aaron R. Brown © 2015
 * file: server/test/config_test.js
 */

'use strict';

var conf = require('../config/convict-config');

describe('Configuration', function() {
  it('should be test for the environment', function() {
    conf.get('env').should.eql('test');
  });
});
