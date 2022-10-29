const mongoose = require('mongoose')
const dbConnect = async () => {
	try {
		mongoose.connect('mongodb://localhost:27017/weather-api', {
			useUnifiedTopology: true,
			useNewUrlParser:true
		})
		console.log('MongoDb Connected ');
	} catch (error) {
		console.log(`Error ${error.message}`);
	}
}
module.exports= dbConnect;