const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favListSchema = new Schema(
	{
		videoId: {
			type: String,
			required: true,
		},
		userId: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		pic: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('FavList', favListSchema);
