const express = require('express');
const app = express();
const https = require('https');

require('dotenv').config();

app.get('/', function (req, res) {
  const api_key = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}&units=metric`;

  https.get(url, function (response) {
    console.log(response.statusCode);
  })

  res.send('server is up and running');
})

app.listen(3000, function () {
  console.log('server is running on 3000');
})
