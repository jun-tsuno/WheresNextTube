const FavList = require('../models/favListModel');
const { ObjectId } = require('mongodb');

//  Get all fav list
const getFavLists = async (req, res) => {
	const dummyD = await FavList.find({});

	return res.status(200).json(dummyD);
};

// Add to fav list
const addFavList = async (req, res) => {
	const { videoId, text, pic, title } = req.body;

	try {
		const video = await FavList.create({ videoId, text, pic, title });
		res.status(200).json(video);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Remove from fav list
const removeFav = async (req, res) => {
	const { id } = req.params;

	if (!ObjectId.isValid(id)) {
		return res.status(500).json({ message: 'Not a valid id' });
	}

	try {
		const video = await FavList.findOneAndDelete({ _id: id });

		if (!video) {
			return res.status(404).json({ message: 'No such favorite video' });
		}
		return res.status(200).json(video);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = { getFavLists, addFavList, removeFav };