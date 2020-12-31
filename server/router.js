const express = require('express');
const app = express();
const connections = require('./../database/dbconnections.js');

app.use(express.json());
// app.use(express.urlencoded());

app.use('/',express.static(__dirname + '/../public'));

app.post('/timer/user/login', (req, res) => {
  connections.initializeUser(req.body.name, req.body.password)
    .then((result) => {
      if (result.length === 0) {
        res.send('There is no record of that user');
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    })
})

app.post('/timer/user/creation', (req, res) => {
  connections.createUser(req.body.name, req.body)
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(400);
  })
})

app.delete('/timer/user', (req, res) => {
  connections.deleteUser(req.body.name, req.body.password)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.setStatus(400);
    })
})

app.patch('/timer/timelog', (req, res) => {
  connections.sendUserTimes(req.body.name, req.body.password, req.body.totalTime)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    })
})

app.put('/timer/preferences', (req, res) => {
  connections.sendUserPrefs(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.setStatus(400);
    })
})

module.exports = app;