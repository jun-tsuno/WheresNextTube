const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
	try {
		const bearToken = req.headers['authorization'];
		const token = bearToken.split(' ')[1];

		if (!token) {
			return res.status(400).json({ message: 'No access token' });
		}

		jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
			if (error) {
				return res.status(400).json({ message: 'Not a valid token' });
			} else {
				// pass 'email', so that the next middleware can search user by email
				res.email = decoded.email;
				next();
			}
		});
	} catch (error) {
		return res.status(401).json({ message: error.message });
	}
};

module.exports = verifyToken;
