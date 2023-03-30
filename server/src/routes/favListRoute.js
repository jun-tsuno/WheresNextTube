const express = require('express');
const { getFavLists } = require('../controllers/favListController');

const router = express.Router();

// Get All favorite videos
router.get('/', getFavLists);

module.exports = router;
