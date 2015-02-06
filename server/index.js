/**
 * Aaron R. Brown © 2015
 * file: server/index.js
 */

'use strict';

var app = require('./app').app,
    conf = require('./config/convict-config');

app.listen(conf.get('port'), function (err) {
  if (err) {
    console.error(err.stack);
  }
  console.log('express started on port ' + conf.get('port'));
})
