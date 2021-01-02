const mongoose = require('mongoose');
const db = require('./dbindex.js');

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  totalTimeToday: Number,
  breakLength: Number,
  sessionLength: Number,
  timerStyle: String,
  numberOfSessions: Number,
  projects: Array, //currently unused
  currentProject: String  //currently unused
})

const User = mongoose.model('User', UserSchema);

module.exports = User;