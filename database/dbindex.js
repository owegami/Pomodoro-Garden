const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost/pomodorotimer';

const db = mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;