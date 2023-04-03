const express = require('express');
const {
	getFavLists,
	addFavList,
	removeFav,
} = require('../controllers/favListController');

const router = express.Router();

// Get All favorite videos
router.post('/', getFavLists);

// Add to favorite list
router.put('/', addFavList);

// Remove from favorite list
router.delete('/:id', removeFav);

module.exports = router;
