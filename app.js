const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

Users = require('./models/users');

//connect to mongoose

mongoose.connect('mongodb://localhost/healthwatch');
var db = mongoose.connection;

app.get('/', function(req, res) {
  Users.getUsers(function(err, users){
    if(err) {
      throw err;
    }
    res.json(users);
  })
})

app.listen(3000);
console.log('Running on port 3000...');
