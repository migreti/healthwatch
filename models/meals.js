var mongoose = require('mongoose');

// Schema
var mealsSchema = mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  },
  foodgroups:{
    type: Array,
    required: true
  },
  discomfort:{
    type: Boolean,
    required: true
  }
});
