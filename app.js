const express = require('express');
const app = express();
const https = require('https');

require('dotenv').config();

app.get('/', function (req, res) {
  const api_key = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}&units=metric`;

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on('data', function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      console.log(temp)
      const weatherDesc = weatherData.weather[0].description
      res.write(`<h1>The temperature in London is ${temp} degree celcius</h1>`);
      res.write(`<h2>The weather looks like ${weatherDesc}</h2>`);
      res.send();
    })
  })
})

app.listen(3000, function () {
  console.log('server is running on 3000');
})