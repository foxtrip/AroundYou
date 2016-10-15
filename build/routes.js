'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default function routes (data) {
// 	const uploads = app.Router();
// 	console.log('routes on')
// 	// console.log('url', uri)
// 	// console.log('data', data)

// 	uploads.post('#/upload', (req,res)=>{
// 		// console.log(req, res)
// 		console.log('Post request!!')
// 	})
// 	uploads.get('#/upload', (req, res)=>{
// 		// console.log(req, res)
// 		console.log('Respose messages!')	
// 	})
// }


var router = function router(req, res) {
	// console.log(req.body)
	// console.log('req.url', req.url)
	// console.log(path.pathname)
	if (req.url === '/upload') {
		if (req.method === 'POST') {
			console.log('Post requeefst!!');
			// res.end('res.post')
			// console.log('reqsss', req)
			console.log('req', req.body);
			// res.end('dse')
			// } else if (req.method === 'GET') {
			// 	console.log('Respose messages!')
			// res.end('res.get')
		}
	}
	// console.log('res.url', res.url)
}; // import app from 'express'
// import path from 'path'
exports.default = router;