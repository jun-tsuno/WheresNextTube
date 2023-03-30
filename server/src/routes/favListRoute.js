const express = require('express');
const {
	getFavLists,
	addFavList,
	removeFav,
} = require('../controllers/favListController');

const router = express.Router();

// Get All favorite videos
router.get('/', getFavLists);

// Add to favorite list
router.post('/', addFavList);

// Remove from favorite list
router.delete('/:id', removeFav);

module.exports = router;
