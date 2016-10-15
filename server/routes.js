import bodyParser from 'body-parser';

const router = (req, res)=> {
	if(req.url === '/upload') {
		if(req.method === 'POST') {
			console.log('req', req.body)
			res.end()
		// } else if (req.method === 'GET') {
		// 	console.log('Respose messages!')
			// res.end('res.get')
		}
	}
}

export default router;