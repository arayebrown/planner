/**
 * Aaron R. Brown © 2015
 * file: server/app.js
 */

'use strict';

var express = require('express'),
  app = exports.app = express(),
  bodyParser = require('body-parser'),
  conf = require('./config/convict-config'),
  multer = require('multer');

app.disable('x-powered-by');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// middleware for handling multipart/form-data
app.use(multer());

if (!module.parent) {
  app.listen(conf.get('port'), function() {
    console.log('express started on port ' + conf.get('port'));
  });
}
