var mongoose = require('mongoose');

// Schema
var forumSchema = mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  },
  comment:{
    type: String,
    required: true
  },
  topic:{
    type: String,
    required: true
  }
});
