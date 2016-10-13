'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _gmapsModel = require('../build/gmapsModel.js');

var _gmapsModel2 = _interopRequireDefault(_gmapsModel);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _reactRouter = require('react-router');

var _gmaps = require('../build/gmaps.js');

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//call mongoose Model
var app = (0, _express2.default)();

app.set("port", 7777);

var db = _mongoose2.default.connection; //Connect to mongoDB server
db.on('err', console.error);
db.once('open', function () {
	console.log("Connected to mongoDB server!");
});
_mongoose2.default.connect('mongodb://localhost/localDB');

app.use(_express2.default.static(__dirname + './../client/public')); //server 에 정적파일 띄우기
app.use('*', function (req, res) {
	//react-router 사용위한 tool
	console.log(_path2.default.parse);
	res.sendFile(_path2.default.resolve(__dirname, '../client/public', 'index.html'));
});
// app.post('/upload', function(req, res, err){
//   const pin = new Pin({ //pin객체 생성
//     userid: req.body.userid,
//     lat:req.body.lat,
//     lng:req.body.lng,
//     tag:req.body.tag,
//     image:req.body.image
//   });
//   pin.save(function(err,data){  //pin객체 저장
//     if(err) { console.error(err) };
//     res.send('success');
//   });
// });

var demoPin = new _gmapsModel2.default({ //demo 객체 생성
	userid: "demo",
	lat: 37.583248,
	lng: 126.985183,
	tag: "midnight",
	image: ""
});

demoPin.save(function (err, demoPin) {
	//mongodb에 저장
	if (err) {
		console.error(err);
	};
	console.log('demoPin Saved!');
});

var server = app.listen(app.get("port"), function () {
	console.log("Express listening on port", app.get("port"));
});