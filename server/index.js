require('dotenv').config();

const express = require('express');
const cors = require('cors');
const favListRouters = require('./src/routes/favListRoute');
const authRouters = require('./src/routes/authRote');
const { connectToDb } = require('./src/config/db');

const app = express();
app.use(
	cors({
		origin: 'https://wheres-next-tube-front.vercel.app',
		credentials: true,
		optionsSuccessStatus: 200,
	})
);

app.use(express.json());

app.use('/api/auth', authRouters);
app.use('/api/favorite', favListRouters);

// connect to mongodb
connectToDb();

app.listen(process.env.PORT || 4000, () => {
	console.log(`listening on port ${process.env.PORT}`);
});
