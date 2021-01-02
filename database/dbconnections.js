const mongoose = require('mongoose');
const db = require('./dbindex.js');
const User = require('./../database/userSchema.js');

exports.createUser = (userName, userObj) => {
  return new Promise((resolve, reject) => {
    User.countDocuments({ name: userName })
    .then((results) => {
      let userData = {
        name: userObj.name,
        password: userObj.password,
        breakLength: userObj.breakLength === undefined ? (5 * 60) : userObj.breakLength,
        sessionLength: userObj.sessionLength === undefined ? 1500 : userObj.sessionLength,
        timerStyle: userObj.timerStyle === undefined ?  'backward' : userObj.sessionLength,
        numberOfSessions: userObj.numberOfSessions === undefined ? 4 : userObj.sessionLength,
        totalTimeToday: userObj.totalTimeToday === undefined ? 0 : userObj.totalTimeToday
      };
      if (results === 0) {
        User.create(userData, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        })
      } else {
        resolve('User already exists. Please choose a different name.')
      }
    })
    .catch((err) => {
      console.log(err);
       reject(err);
    })
  })
}

exports.initializeUser = (userName, userPassword) => {
  return new Promise ((resolve, reject) => {
    User.find({name: userName, password: userPassword})
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
  })
}

exports.sendUserPrefs = (userObj) => {
  return new Promise ((resolve, reject) => {
    User.countDocuments({ name: userObj.name })
      .then((result) => {
        if(result === 0) {
          resolve('There is no user logged by that name. You must first create a login to save your preferences');
        } else {
          User.updateOne({ name: userObj.name }, { breakLength: userObj.breakLength, sessionLength: userObj.sessionLength, timerStyle: userObj.timerStyle, numberOfSessions: userObj.numberOfSessions})
            .then((result) => {
              resolve(`${userObj.name}'s preferences have been updated`);
            })
            .catch((err) => {
              console.log(err);
              reject(err);
            })
        }
      })
  })
}

exports.sendUserTimes = (userName, userPassword, newTime) => {
  return new Promise ((resolve, reject) => {
    User.updateOne({ name: userName, password: userPassword }, { totalTimeToday: newTime})
      .then((results) => {
        resolve('Time has been logged');
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
  })
}

exports.deleteUser = (userName, userPassword) => {
  return new Promise((resolve, reject) => {
    User.countDocuments({ name: userName, password: userPassword })
    .then((result) => {
      if (result === 0) {
        resolve('Without the correct username and password you do not have the authority to delete this user.')
      } else {
        User.deleteOne({ name: userName, password: userPassword })
          .then((result) => {
            resolve(`${userName} data has been deleted. Thank you for using Pomodoro Garden.`);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          })
      }
    })
  })
}