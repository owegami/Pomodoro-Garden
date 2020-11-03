const express = require('express');
const app = express();

app.use(express.json());
// app.use(express.urlencoded());

app.use('/',express.static(__dirname + '/../public'));

app.get('/timelog', (req, res) => {
  console.log('GET request to /timelog');
  res.send("I'm hacking the mainframe!");
})

app.post('/timelog', (req, res) => {
  console.log('POST request to /timelog');
  res.send("I'm hacking the mainframe!");
})

module.exports = app;