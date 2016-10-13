'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


var pinSchema = _mongoose2.default.Schema({ //뼈대생성
	userid: String,
	lat: Number,
	lng: Number,
	data: { type: Date, default: Date.now },
	tag: String, // how does input multiple tag?
	image: Buffer
});

var Pin = _mongoose2.default.model('pin', pinSchema); //model생성

var demoPin = new Pin({
	userid: "demo",
	lat: 37.583248,
	lng: 126.985183,
	tag: "midnight",
	photo: ""
});

demoPin.save(function (err, pin) {
	if (err) {
		console.error(err);
	};
	console.dir(pin);
});

// 1. 값이 들어가는지 확인 >> 더미값
// 2. 위도/경도값 받아오는지 확인 >> gmaps에서 받아오는 값
// 3. 사용자 입력값 받아오고 >> 사용자가 post 보내는 값 (string)
// 4. img까지 >> img까지

exports.default = _mongoose2.default.model('pin', pinSchema);