import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';
import bodyParser from 'body-parser';
import Pin from '../build/gmapsModel.js';//call mongoose Model
import path from 'path';
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

//server 에 정적파일 띄우기
app.use(express.static(__dirname + './../client/public')); 
app.get('/upload', (req, res)=>{  //react-router 사용위한 tool //'*' 썻더니 ajax err 나서 일부만 쓰는걸로 바꿈. 
  res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'))
});

// Server-side routing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes)

const server = app.listen(app.get("port"), () => {  
  console.log("Express listening on port", app.get("port"));
});

