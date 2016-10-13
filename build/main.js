'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gmaps = require('../build/gmaps.js');

var _gmaps2 = _interopRequireDefault(_gmaps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
//import router from './routes.js'

app.set("port", 7777);

// [CONFIGURE mongoose]
// Connect to mongoDB server
var db = _mongoose2.default.connection;
db.on('err', console.error);
db.once('open', function () {
  console.log("Connected to mongoDB server!");
});
_mongoose2.default.connect('mongodb://localhost/localDB');

//call mongoose Model


app.use(_express2.default.static(__dirname + './../client/public')); //index.html? 
app.use('*', function (req, res) {
  //react-router
  console.log(_path2.default.parse);
  res.sendFile(_path2.default.resolve(__dirname, '../client/public', 'index.html'));
});

var server = app.listen(app.get("port"), function () {
  console.log("Express listening on port", app.get("port"));
});