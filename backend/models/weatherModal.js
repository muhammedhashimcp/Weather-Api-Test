const mongoose = require('mongoose');
const weatherSchema = new mongoose.Schema(
	{
		town: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
		nation: {
			type: String,
			required: true,
		},
		latitude: {
			type: Number,
			required: true,
		},
		longitude: {
			type: Number,
			required: true,
		},
		timezone: {
			type: String,
			required: true,
		},
		time: {
			type: Date,
			required: true,
		},
		dawn: {
			type: String,
			required: true,
		},
		dusk: {
			type: String,
			required: true,
		},
		moonlit: {
			type: String,
			required: true,
		},
		moonsleep: {
			type: String,
			required: true,
		},
		orientation: {
			type: String,
			required: true,
		},
		illumination: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
const WeatherMapper = mongoose.model('WeatherMapper', weatherSchema)
module.exports=WeatherMapper