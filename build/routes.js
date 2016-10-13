"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
// import controllers from './routes.js'
// import app from 'express'

// const router = app.Router();

var router = function router(req, res) {
	console.log(req.url);
	console.log(res.url);
};

exports.default = router;