'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = routes;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const router = app.Router();

// import controllers from './routes.js'
function routes(data) {
	var router = _express2.default.Router();
	console.log('routes on');
	// console.log('url', uri)
	// console.log('data', data)

	router.post('#/upload', function (req, res) {
		// console.log(req, res)
		console.log('Post request!!');
	});
	router.get('#/upload', function (req, res) {
		// console.log(req, res)
		console.log('Respose messages!');
	});
}

// const router = (req, res)=> {
// 	console.log('req.url', req.url)
// 	// console.log(path.pathname)
// 	if(req.url === '/upload') {
// 		if(req.method === 'POST') {
// 			console.log('Post request!!')
// 		} else if (req.method === 'GET') {
// 			console.log('Respose messages!')
// 		}
// 	}
// 	// console.log('res.url', res.url)
// }

// export default router;