import bodyParser from 'body-parser';
import Pin from '../build/gmapsModel.js';//call mongoose Model

const router = (req, res)=> {
	if(req.url === '/upload') {
		if(req.method === 'POST') {
			console.log(req)
			const demoPin = new Pin({ // UploadView의 form에서 받은 data로 새로운 pin 생성. form에서는 자료를 받을 수 있으나 state를 전송받지 못함.
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