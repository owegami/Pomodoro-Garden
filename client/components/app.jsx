import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import store from './../store/store.js';

import { prepareData, loginUser, logTimeToDatabase, createLogin, saveSettings } from './../controllers/logtodb.js';

import TimerVisual from './timer.jsx';
import Settings from './settings.jsx';

import TimerVisualContainer from './containers/timerContainer.js';
import VisualizerContainer from './containers/visualizerContainer.js';

import {ComponentContainer, ComponentRowContainer, ComponentColumnContainer, ErrorMessageBox, Message, XButton, ServerResponseMessage, Button, HelloMessage} from './../view/styledComponents.jsx';

const App = () => {
  //KEEP THIS ONE BECAUSE IT'S LOCAL
  const [showSettings, setToShowSettings] = useState(false);

  //setting and timer component states
  const [sessionTotal, setSession] = useState(1500);
  const [direction, setDirection] = useState('backward');
  const [totalTimeEver, addToTotalTimeEver] = useState(0);
  const [totalTime, addToTotalTime] = useState(0);
  const [isOn, setTimerOn] = useState(false);
  const [isReset, resetTimer] = useState(false);
  const [isSet, setNewSettings] = useState(false);
  const [breakTotal, setBreaks] = useState(5 * 60);
  const [pomodoros, setNumberOfSessions] = useState(4);
  const [isTicking, setIsTicking] = useState(false);
  const [clockTickSound, setClockTickSound] = useState('1');
  const [hasThreeMinWarning, setThreeMinWarning] = useState(false);

  //Data persisting states
  const [willLogTime, logTime] = useState(false);
  const [errorPresent, errorThrown] = useState(false);
  const [haveServerMessage, setHaveServerMessage] = useState(false);
  const [serverResponseMessage, setServerResponseMessage] = useState();
  const [willLogin, setToLogin] = useState(true);
  const [willCreateLogin, setToCreateLogin] = useState(false);
  const [willSaveSettings, setToSaveSettings] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setToLoggedIn] = useState(false);
  const [saveToDatabase, setToSaveToDatabase] = useState(false);

  console.log('initialState:', store.getState());

  useEffect(() => {
    let loginObj;
    if (willLogin && saveToDatabase) {
      loginUser(prepareData(user, password, undefined, undefined, undefined, undefined, undefined))
      .then((response) => {
        if (typeof response.data === 'string') {
          setServerResponseMessage(response.data);
          setHaveServerMessage(true);
          setUser('');
          setPassword('');
          setToLoggedIn(false);
        } else {
          loginObj = response.data[0];
        }
      })
      .catch((err) => {
        console.log(err);
        errorThrown(true);
      })
    } else if (willLogin && !saveToDatabase) {
      loginObj = JSON.parse(localStorage.getItem('userSettings'));
    }
    if (loginObj !== undefined && loginObj !== null) {
      setUser(loginObj.name);
      setSession(loginObj.sessionLength);
      setDirection(loginObj.timerStyle);
      setBreaks(loginObj.breakLength);
      setNumberOfSessions(loginObj.numberOfSessions);
      addToTotalTimeEver(loginObj.totalTime);
      setToLoggedIn(true);
      setNewSettings(true);
    }
    setToLogin(false);
  }, [willLogin])

  useEffect(() => {
    if (willLogTime && loggedIn && saveToDatabase) {
      logTimeToDatabase(prepareData(user, password, totalTimeEver, undefined, sessionTotal, undefined, undefined))
      .then((response) => {
        if (typeof response.data === 'string') {
          setServerResponseMessage(response.data);
          addToTotalTimeEver(totalTimeEver + sessionTotal)
          setHaveServerMessage(true);
        }
      })
      .catch((err) => {
        console.log(err);
        errorThrown(true);
      })
    } else if (willLogTime && !saveToDatabase) {
      let newTime = totalTimeEver + sessionTotal;
      setToLocalStorage(prepareData(user, undefined, newTime, breakTotal, sessionTotal, direction, pomodoros));
    }
  }, [willLogTime])

  useEffect(() => {
    if (willCreateLogin && saveToDatabase) {
      createLogin(prepareData(user, password, totalTimeEver, breakTotal, sessionTotal, direction, pomodoros))
      .then((response) => {
        if (typeof response.data === 'string') {
          setServerResponseMessage(response.data);
          setHaveServerMessage(true);
          setUser('');
          setPassword('');
          setToLoggedIn(false);
        } else {
          setToLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
        errorThrown(true);
      })
    }
  }, [willCreateLogin])

  useEffect(() => {
    if (willSaveSettings && saveToDatabase) {
      saveSettings(prepareData(user, password, totalTimeEver, breakTotal, sessionTotal, direction, pomodoros))
      .then((response) => {
        if (typeof response.data === 'string') {
          setServerResponseMessage(response.data);
          setHaveServerMessage(true);
        }
        if (willLogin) {
          setToLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
        errorThrown(true);
      })
    } else if (isSet && !saveToDatabase) {
      setToLocalStorage(prepareData(user, undefined, totalTimeEver, breakTotal, sessionTotal, direction, pomodoros));
    }
  }, [isSet])

  const renderServerMessage = () => {
    if (!haveServerMessage) {
      return (
        <></>
      )
    } else {
      setTimeout(() => {
        setHaveServerMessage(false);
      }, 5000)
      return (
        <ServerResponseMessage>
          <XButton onClick={() => {
            setHaveServerMessage(false);
          }}>X</XButton>
          <Message>{serverResponseMessage}</Message>
        </ServerResponseMessage>
      )
    }
  }

  const renderError = () => {
    if (!errorPresent) {
      return (
        <></>
      )
    } else {
      return (
        <ErrorMessageBox>
          <XButton onClick={() => {
            errorThrown(false);
          }}>X</XButton>
          <Message>Please excuse the inconvience. There seems to have been an error. Please refresh or try the operation again. If this problem persists, please contact developer.</Message>
        </ErrorMessageBox>
      )
    }
  }

  const renderHello = () => {
    if (user.length > 0 && loggedIn) {
      return (
        <HelloMessage>Hello, {user}!</HelloMessage>
      )
    } else {
      return (
        <HelloMessage>Hello!</HelloMessage>
      )
    }
  }

  const renderSettings = () => {
    if (showSettings) {
      return (
        <>
          <Button onClick={() => {
            setToShowSettings(false)
          }}>Hide Settings</Button>
          <Settings />
        </>
      )
    } else {
      return (
        <Button onClick={() => {
          setToShowSettings(true)
        }}>Settings</Button>
      )
    }
  }

  return (
    <ComponentContainer>
      <ComponentRowContainer>
        <ComponentColumnContainer>
          <VisualizerContainer />
          {renderHello()}
        </ComponentColumnContainer>
        <ComponentColumnContainer>
        <TimerVisualContainer />
        {renderError()}
        {renderServerMessage()}
        </ComponentColumnContainer>
      </ComponentRowContainer>
      <ComponentColumnContainer>
        {renderSettings()}
      </ComponentColumnContainer>
    </ComponentContainer>
  )
}

const setToLocalStorage = (userSettingsObj) => {
  let userSettings = JSON.stringify(userSettingsObj);
  if (localStorage.getItem('userSettings') !== undefined) {
    localStorage.removeItem('userSettings');
  }
  localStorage.setItem('userSettings', userSettings);
}

export default App;