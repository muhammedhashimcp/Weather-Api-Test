const axios=require('axios');
const express = require('express');
const { findOne } = require('../models/weatherModal');
const weatherRouter = express.Router()
const weatherModal = require('../models/weatherModal')
// console.log(process.env.WEATHER_API_KEY, 'api key');

weatherRouter.get('/',async (req, res) => {
	// making the mapper 
	const weatherMapper = await weatherModal.find(
		{},
		{ _id: 0, createdAt: 0, updatedAt: 0, __v: 0,time:0 }
	);
	console.log("🚀 ~ file: weatherRoutes.js ~ line 14 ~ weatherRouter.get ~ weatherMapper", weatherMapper)

	res.send(weatherMapper);
})
weatherRouter.post('/weatherData',async (req, res) => {
	// making the mapper
	const {city}=req.params
	const weatherMapper = await weatherModal.find(
		{  },
		{ "_id": 0, "createdAt": 0, "updatedAt": 0, "__v": 0 ,time:0}
	);


	 

// weatherRouter.post('/weatherData',async (req, res) => {
// 	// making the mapper
// 	const {city}=req.query
// 	const weatherMapper = await weatherModal.find(
// 		{  },
// 		{ "_id": 0, "createdAt": 0, "updatedAt": 0, "__v": 0 ,time:0}
// 	);
// 	const weatherCurrent =await  axios.get(
// 		`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=calicut&aqi=no`
// 	);

// 	const weatherForecast = await axios.get(
// 		`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=calicut&days=1&aqi=no&alerts=no`
// 	); 
// 		// console.log(dataCreated);
// 		// const data = await weatherModal.findOne(
// 		// 	{ _id: weatherMapper._id },
// 		// 	{ _id: 0, createdAt: 0, updatedAt: 0, _v: 0 }
// 		// );
// 		// console.log(
// 		// 	'🚀 ~ file: weatherRoutes.js ~ line 48 ~ weatherRouter.get ~ data',
// 		// 	data
// 		// );
	 
// 	const dataCreated = await weatherModal.create({
// 		town: weatherCurrent.data.location.name,
// 		state: weatherCurrent.data.location.region,
// 		nation: weatherCurrent.data.location.country,
// 		latitude: weatherCurrent.data.location.lat,
// 		longitude: weatherCurrent.data.location.lon,
// 		timezone: weatherCurrent.data.location.tz_id,
// 		time: weatherCurrent.data.location.localtime,

// 		dawn: weatherForecast.data.forecast.forecastday[0].astro.sunrise,
// 		dusk: weatherForecast.data.forecast.forecastday[0].astro.sunset,
// 		moonlit: weatherForecast.data.forecast.forecastday[0].astro.moonrise,
// 		moonsleep: weatherForecast.data.forecast.forecastday[0].astro.moonset,
// 		orientation: weatherForecast.data.forecast.forecastday[0].astro.moon_phase, 
// 		illumination: weatherForecast.data.forecast.forecastday[0].astro.moon_illumination,
// 	});

	res.send(dataCreated);  
}) 
module.exports = weatherRouter
