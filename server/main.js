import express from 'express';
import mongoose from 'mongoose';
import Pin from '../build/gmapsModel.js';//call mongoose Model
import path from 'path';
import http from 'http';
const app = express();

app.set("port", 7777);

const db = mongoose.connection;//Connect to mongoDB server
db.on('err', console.error);
db.once('open', ()=>{
	console.log("Connected to mongoDB server!");
});
mongoose.connect('mongodb://localhost/localDB');

app.use(express.static(__dirname + './../client/public'));  //server 에 정적파일 띄우기
app.use('*', (req, res)=>{  //react-router 사용위한 tool
  console.log(path.parse)
  res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'))
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

const demoPin = new Pin({ //demo 객체 생성
	  userid: "demo",
	  lat:37.583248,
	  lng:126.985183,
	  tag: "midnight",
	  image:""
});

demoPin.save((err, demoPin)=> { //mongodb에 저장
	if(err) { console.error(err) };
	console.log('demoPin Saved!');
});

const server = app.listen(app.get("port"), () => {  
  console.log("Express listening on port", app.get("port"));
});
