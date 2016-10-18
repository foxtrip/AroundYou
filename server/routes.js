import bodyParser from 'body-parser';
import Pin from '../build/gmapsModel.js';//call mongoose Model
import express from 'express';
const router = express.Router();

router.get('/data', (req,res) => {	//data 요청시 mongoDB pin data 모두 보냄(array)
	Pin.find((err,pins)=>{
		if(err){console.log('err')}
		res.jsonp(pins);
	});
});

router.post('/upload', (req,res) => { //upload 요청시 DB에 저장.//아직 안됨.
	console.log(req);
	const pin = new Pin({ // UploadView의 form에서 받은 data로 새로운 pin 생성. form에서는 자료를 받을 수 있으나 state를 전송받지 못함.
		userid: req.body.userid,
		lat: req.body.lat,
		lng: req.body.lng,
		tag: req.body.tag,
		image:""
	});
	pin.save((err, pin)=> { //pin  저장. 
		if(err) { console.error(err) };
		console.log('pin Saved!');
	});
	res.json('pin saved!!');
});

export default router;