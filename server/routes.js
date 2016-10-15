import bodyParser from 'body-parser';
import Pin from '../build/gmapsModel.js';//call mongoose Model

const router = (req, res)=> {
	if(req.url === '/upload') {
		if(req.method === 'POST') {
			const demoPin = new Pin({ //demo 객체 생성
				  userid: req.body.userid,
				  lat: req.body.lat,
				  lng: req.body.lng,
				  tag: req.body.tag,
				  image:""
			})

			demoPin.save((err, demoPin)=> { //mongodb에 저장
				if(err) { console.error(err) };
				console.log('demoPin Saved!');
			});

			res.json('abc')
		// } else if (req.method === 'GET') {
		// 	console.log('Respose messages!')
			// res.end('res.get')
		}
	}
}

export default router;