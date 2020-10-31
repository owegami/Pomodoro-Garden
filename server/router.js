const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(__dirname + '/public/index.html'));

app.get('/', (req, res) => {
  res.send("I'm hacking the mainframe!");
})

module.exports = app;