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

router.post('/uploadView', (req,res) => { //uploadView 요청시 DB에 저장.
	const pin = new Pin({
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
	res.json(pin);
});

export default router;