const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('hi');  
})

app.listen(3000);
console.log('Running on port 3000...');
