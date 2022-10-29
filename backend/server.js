const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors');
app.use(cors())
const dbConnect=require('../backend/config/mongoDb')()
const weatherRouter=require('./routes/weatherRoutes')
app.get("/", (req, res) => {
	
	console.log("Backend server API");
	res.send("Backend server API")
})
app.use('/api/weather',weatherRouter)
const port=process.env.PORT||5000
app.listen(port,(console.log(`server Started at at PORT ${port}`))) 