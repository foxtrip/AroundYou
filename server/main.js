import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
app.set("port", 7777);

// [CONFIGURE mongoose]
// Connect to mongoDB server
const db = mongoose.connection;
db.on('err', console.error);
db.once('open', ()=>{
	console.log("Connected to mongoDB server!");
});
mongoose.connect('mongodb://localhost/')

// Define mongoose Model
import Pin from '../build/gmaps.js'

// Serve static files
app.use(express.static(__dirname + './../client/public'));

// Server-side routing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes)

// app.use(bodyParser.urlencoded({ extended: true }));

// Listen server 0.0.0.0:7777 or localhost:7777
const server = app.listen(app.get("port"), () => {
  console.log("Express listening on port", app.get("port"));
});
