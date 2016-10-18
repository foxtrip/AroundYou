import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';
import bodyParser from 'body-parser';
import Pin from '../build/gmapsModel.js';//call mongoose Model
// import path from 'path';
// import http from 'http';
const app = express();

app.set("port", 7777);

// Mongoose connecting
const db = mongoose.connection;
db.on('err', console.error);
db.once('open', ()=>{
	console.log("Connected to mongoDB server!");
});
mongoose.connect('mongodb://localhost/localDB');
//demoPin 생성, 저장
// const demoPin = new Pin({ // demoPin 생성.
// 	userid: "demo",
// 	lat: "37.582547",
// 	lng: "126.983531",
// 	tag: "북촌 11길",
// 	image:""
// });
// demoPin.save((err, pin)=> { //demoPin  저장. 
// 	if(err) { console.error(err) };
// 	console.log('pin Saved!');
// });

//server 에 정적파일 띄우기
app.use(express.static(__dirname + './../client/public')); 
// app.use('*', (req, res)=>{  //react-router 사용위한 tool
//   res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'))
// });

// Server-side routing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes)

const server = app.listen(app.get("port"), () => {  
  console.log("Express listening on port", app.get("port"));
});

