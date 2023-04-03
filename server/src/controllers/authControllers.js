const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const generateToken = (email) => {
	// decode email
	return jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
		expiresIn: process.env.JWT_EXPIRES_IN,
	});
};

const generateRefreshToken = (email) => {
	return jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET_KEY, {
		expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
	});
};

const signup = async (req, res) => {
	const { name, email, password } = req.body;
	const isUserExist = await User.findOne({ email });
	if (isUserExist) {
		return res
			.status(400)
			.json({ message: 'User already exist with this email!' });
	}

	const salt = await bcrypt.genSalt();
	const passwordHash = await bcrypt.hash(password, salt);
	const user = await User.create({
		name,
		email,
		password: passwordHash,
	});

	const token = generateToken(user.email);
	const refresh_token = generateRefreshToken(user.email);

	return res
		.status(201)
		.json({ message: 'User created', token, refresh_token });
};

const login = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (!user) {
		return res.status(400).json({ message: 'User not found' });
	}

	const matchPassword = await bcrypt.compare(password, user.password);
	if (!matchPassword) {
		return res.status(400).json({ message: 'Password not matched' });
	}

	const token = generateToken(user.email);
	const refresh_token = generateRefreshToken(user.email);

	return res
		.status(200)
		.json({ message: 'Login Success', token, refresh_token });
};

const getUser = async (_req, res) => {
	const email = res.email;
	const user = await User.findOne({ email }).select('-password');

	if (!user) {
		return res.status(404).json({ message: 'No such user' });
	}
	return res.status(200).json({ user });
};

const refreshToken = async (req, res) => {
	const { refresh_token } = req.body;

	jwt.verify(refresh_token, REFRESH_TOKEN_SECRET_KEY, (err, decoded) => {
		if (err) {
			return res.status(401).json({ message: 'Not a valid token' });
		} else {
			const email = decoded.email;
			const token = generateToken(email);

			return res.status(200).json({ message: 'Issued new token', token });
		}
	});
};

module.exports = { signup, login, getUser, refreshToken };
