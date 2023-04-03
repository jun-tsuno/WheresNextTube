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
			required: false,
		},
		pic: {
			type: String,
			required: false,
		},
		title: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('FavList', favListSchema);
