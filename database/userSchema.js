const mongoose = require('mongoose');
const db = require('./dbindex.js');

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  totalTime: Number,
  preferredSettings: Object
})

exports.User = mongoose.model('User', UserSchema);