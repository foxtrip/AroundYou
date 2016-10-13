'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require('./routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gmaps = require('../build/gmaps.js');

var _gmaps2 = _interopRequireDefault(_gmaps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.set("port", 7777);

// [CONFIGURE mongoose]
// Connect to mongoDB server
var db = _mongoose2.default.connection;
db.on('err', console.error);
db.once('open', function () {
  console.log("Connected to mongoDB server!");
});
_mongoose2.default.connect('mongodb://localhost/');

// Define mongoose Model


// Serve static files
app.use(_express2.default.static(__dirname + './../client/public'));

// Server-side routing
app.use('/', _routes2.default);

// Listen server 0.0.0.0:7777 or localhost:7777
var server = app.listen(app.get("port"), function () {
  console.log("Express listening on port", app.get("port"));
});