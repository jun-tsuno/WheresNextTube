const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const { signup, login, getUser } = require('../controllers/authControllers');

router.post('/signup', signup);
router.post('/login', login);

// get login user
router.get('/user', verifyToken, getUser);

module.exports = router;
