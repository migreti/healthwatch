const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//connect to mongoose

mongoose.connect('mongodb://localhost/healthwatch');
var db = mongoose.connection;

//app.use(express.static(__dirname+'/client'));
//app.use(bodyParser.json());

app.get('/client/views/registration.html', function(req, res) {
  res.send('');
})

app.listen(3000);
console.log('Running on port 3000...');
