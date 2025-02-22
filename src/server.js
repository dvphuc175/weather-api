require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const cities = require('./routes/cities')
const weatherCity = require('./routes/weatherCity')

// Routes
app.use('/', cities)
app.use('/', weatherCity)

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})