const FavList = require('../models/favListModel');

//  Get all fav list by userId
const getFavLists = async (req, res) => {
	const videos = await FavList.find({ userId: req.body.userId });
	return res.status(200).json(videos);
};

// Add to fav list
const addFavList = async (req, res) => {
	const { videoId, text, pic, title, userId } = req.body;
	try {
		const video = await FavList.create({ videoId, text, pic, title, userId });
		return res.status(200).json(video);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};

// Remove from fav list
const removeFav = async (req, res) => {
	const { id } = req.params;

	try {
		const video = await FavList.findOneAndDelete({ videoId: id });

		if (!video) {
			return res.status(404).json({ message: 'No such favorite video' });
		}
		return res.status(200).json(video);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = { getFavLists, addFavList, removeFav };
