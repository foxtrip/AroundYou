import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';
import path from 'path';
import bodyParser from 'body-parser';
import Pin from '../build/gmapsModel.js';//call mongoose Model
import http from 'http';

const app = express();

app.set("port", 7777);

// Mongoose connecting
const db = mongoose.connection;//Connect to mongoDB server
db.on('err', console.error);
db.once('open', ()=>{
	console.log("Connected to mongoDB server!");
});
mongoose.connect('mongodb://localhost/localDB');

// Serve static files
app.use(express.static(__dirname + './../client/public'));  //server 에 정적파일 띄우기

// Server-side routing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes)

// Mongoose DB Schema
const demoPin = new Pin({ //demo 객체 생성
	  userid: "demo",
	  lat:37.583248,
	  lng:126.985183,
	  tag: "midnight",
	  image:""

demoPin.save((err, demoPin)=> { //mongodb에 저장
	if(err) { console.error(err) };
	console.log('demoPin Saved!');
});

const server = app.listen(app.get("port"), () => {  
  console.log("Express listening on port", app.get("port"));
});