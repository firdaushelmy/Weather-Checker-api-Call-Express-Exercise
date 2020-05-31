const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', function (req, res) {
  res.send('server is up and running')
})

app.listen(3000, function () {
  console.log('server is running on 3000')
})