const express = require('express')
const router = express.Router()

router.get('/weather', async (req, res) => {
    const city = req.query.city
    const reponse = await fetch('https://vnexpress.net/microservice/weather')
    const data = await reponse.json()
    const cityWeather = data[city]
    if(data[city]) {
      const result = {
        temperature : cityWeather.temperature,
        temperature_max : cityWeather.temperature_max,
        temperature_min : cityWeather.temperature_min,
        phrase : cityWeather.phrase
      }
      res.json(result)
    }
    else {
      res.send("Không tìm thấy thành phố")
    }
  })
  
  module.exports = router