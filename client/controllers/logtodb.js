const axios = require('axios');

exports.prepareData = (name, password, totalTime, breakLength, sessionLength, timerStyle, numberOfSessions, ) => {
  let dataObj = {};

  name === undefined ? dataObj.name = undefined : dataObj.name = name;
  password === undefined ? dataObj.password = undefined : dataObj.password = password;
  totalTimeToday === undefined ? dataObj.totalTimeToday = undefined : dataObj.totalTimeToday = totalTimeToday;
  breakLength === undefined ? dataObj.breakLength = undefined : dataObj.breakLength = breakLength;
  sessionLength === undefined ? dataObj.sessionLength = undefined : dataObj.sessionLength = sessionLength;
  timerStyle === undefined ? dataObj.timerStyle = undefined : dataObj.timerStyle = timerStyle;
  numberOfSessions === undefined ? dataObj.numberOfSessions = undefined : dataObj.numberOfSessions = numberOfSessions;

  return dataObj;
}

exports.loginUser = (data) => {
  return axios.request({
    url: '/timer/user/login',
    method: 'POST',
    data: data
  })
  .then((response) => {
   return response;
  })
  .catch((err) => {
    console.log(err);
    return err;
  })
}

exports.logTimeToDatabase = (data) => {
  data.totalTimeToday += data.sessionLength;
  return axios.request({
    url: '/timer/timelog',
    method: 'PATCH',
    data: data
  })
  .then((response) => {
    return response;
  })
  .catch((err) => {
    console.log(err);
    return err;
  })
}

exports.createLogin = (data) => {
  return axios.request({
    url: '/timer/user/creation',
    method: 'POST',
    data: data
  })
  .then((response) => {
    return response;
  })
  .catch((err) => {
    console.log(err);
    return err;
  })
}

exports.saveSettings = (data) => {
  return axios.request({
    url: '/timer/preferences',
    method: 'PUT',
    data: data
  })
  .then((response) => {
    return response;
  })
  .catch((err) => {
    console.log(err);
    errorThrown(true);
  })
}