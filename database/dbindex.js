const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost/pomodorotimer';

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true });

exports.db = mongoose.connect(mongoURL);