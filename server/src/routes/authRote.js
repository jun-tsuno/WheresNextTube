const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const {
	signup,
	login,
	getUser,
	refreshToken,
} = require('../controllers/authControllers');

router.post('/signup', signup);
router.post('/login', login);

// get login user
router.get('/user', verifyToken, getUser);

router.post('/refresh_token', refreshToken);

module.exports = router;
