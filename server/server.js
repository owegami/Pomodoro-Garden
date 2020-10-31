const express = require('express');
const app = require('./router.js');
const port = 3000;
const host = '127.0.0.1';

app.listen(port, () => {
  console.log(`Pomodoro Garden server is listening at http://${host}:${port}`);
})