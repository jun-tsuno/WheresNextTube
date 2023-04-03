require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const favListRouters = require('./routes/favListRoute');
const authRouters = require('./routes/authRote');

const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	next();
});
app.use(express.json());

app.use('/api/auth', authRouters);
app.use('/api/favorite', favListRouters);

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`listening on port ${process.env.PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
