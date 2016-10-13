import express from 'express';
import mongoose from 'mongoose';
import Pin from '../build/gmapsModel.js';//call mongoose Model
import path from 'path';
const app = express();

app.set("port", 7777);

const db = mongoose.connection;//Connect to mongoDB server
db.on('err', console.error);
db.once('open', ()=>{
	console.log("Connected to mongoDB server!");
});
mongoose.connect('mongodb://localhost/localDB');

<<<<<<< 13e5e3bf5dd29617c2d05a8cb22619367171efd4
app.use(express.static(__dirname + './../client/public'));

// Server-side routing
// it takes all url(*) to react-router
app.use('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'))
});

// Listen server 0.0.0.0:7777 or localhost:7777
const server = app.listen(app.get("port"), () => {
=======
app.use(express.static(__dirname + './../client/public'));  //server 에 정적파일 띄우기
app.use('*', (req, res)=>{  //react-router 사용위한 tool
  console.log(path.parse)
  res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'))
})
app.post('/upload', function(req, res, err){
  const pin = new Pin({
    userid: req.body.userid,
    lat:req.body.lat,
    lng:req.body.lng,
    tag:req.body.tag,
    image:req.body.image
  });
  
  })
})
const demoPin = new Pin({
	  userid: "demo",
	  lat:37.583248,
	  lng:126.985183,
	  tag: "midnight",
	  image:""
});

demoPin.save((err, pin)=> {
	if(err) { console.error(err) };
	console.dir(pin);
});






const server = app.listen(app.get("port"), () => {  
>>>>>>> mongo test
  console.log("Express listening on port", app.get("port"));
});
