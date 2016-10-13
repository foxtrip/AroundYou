// import controllers from './routes.js'
// import app from 'express'
// import path from 'path'
// const router = app.Router();

// export default function routes (data) {
// 	const router = app.Router();
// 	console.log('routes on')
// 	// console.log('url', uri)
// 	// console.log('data', data)

// 	router.post('#/upload', (req,res)=>{
// 		// console.log(req, res)
// 		console.log('Post request!!')
// 	})
// 	router.get('#/upload', (req, res)=>{
// 		// console.log(req, res)
// 		console.log('Respose messages!')	
// 	})
// }


const router = (req, res)=> {
	console.log('req.url', req.url)
	// console.log(path.pathname)
	if(req.url === '/upload') {
		if(req.method === 'POST') {
			console.log('Post request!!')
		} else if (req.method === 'GET') {
			console.log('Respose messages!')
		}
	}
	// console.log('res.url', res.url)
}

export default router;