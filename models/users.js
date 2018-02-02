var mongoose = require('mongoose');

// Schema
var usersSchema = mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  autoemail:{
    type: Boolean,
    required: true
  },
  allergies:{
    type: Array,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});
