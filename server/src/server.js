require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const favListRoutes = require('./routes/favListRoute');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/favorite', favListRoutes);

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
