const express = require('express')
const router = express.Router()

router.get('/weather/cities', async (req, res) => {
    try {
    const reponse = await fetch('https://vnexpress.net/microservice/weather') //Gọi lên sv thông qua API để lấy dữ liệu
    const data = await reponse.json() 
    const cities = Object.keys(data) // Tên thành phố là 1 key
    res.json(cities)
    } catch (error) {
        res.status(500).send(error.message);
}
  })
  
  
  module.exports = router

// Promise
//   router.get('/weather/cities', (req, res) => {
//     fetch('https://vnexpress.net/microservice/weather')
//         .then(response => response.json())
//         .then(data => {
//             const cities = Object.keys(data);
//             res.json(cities);
//         })
//         .catch(error => {
//             res.status(500).send(error.message);
//         });
// });

  
