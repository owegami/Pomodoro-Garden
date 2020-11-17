import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { prepareData, loginUser, logTimeToDatabase, createLogin, saveSettings } from './../controllers/logtodb.js';

import Login from './login.jsx';
import TimerVisual from './timer.jsx';
import Visualizer from './visualizer.jsx';
import SettingsVisual from './settingsVisual.jsx';
import Settings from './settings.jsx';

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: charybdis;
  font-size: 2em;
  color: DarkOliveGreen;
`;

const ComponentColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;

const ErrorMessageBox = styled.div`
  position: absolute;
  background-color: white;
  color: darkred;
  font-size:1em;
  right: 5%;
  top: 20%;
  width: 500px;
  height: 220px;
  z-index: 2;
  border: 4px solid darkred;
  box-shadow: 2px 2px SlateGrey;
`;

const Message =  styled.div`
  position: relative;
  margin-top: 21px;
  padding: 10px;
`;

const XButton = styled.div`
  position: absolute;
  right: -4px;
  top:-4px;
  width: 25px;
  height: 30px;
  z-index: 3;
  border: 4px solid;
  text-align: center;
  vertical-align: center;
  cursor: pointer;
`;

const ServerResponseMessage = styled.div`
  position: absolute;
  background-color: white;
  color: DarkOliveGreen;
  font-size:1em;
  right: 5%;
  top: 10%;
  min-width: 250px;
  max-width: 500px;
  min-height: 75px;
  max-height: 200px;
  z-index: 2;
  border: 4px solid DarkOliveGreen;
  box-shadow: 2px 2px SlateGrey;
`;

const App = () => {
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
  const [runningSettings, setRunningSettings] = useState([sessionTotal, direction, breakTotal, pomodoros]);

  //visualizer states
  const [plantChoice, setPlantChoice] = useState('Tomato');
  const [growthRate, setGrowthRate] = useState(1);
  const [plantMaxImgNum, setplantMaxImgNum] = useState(5);

  //server states
  const [willLogTime, logTime] = useState(false);
  const [errorPresent, errorThrown] = useState(false);
  const [haveServerMessage, setHaveServerMessage] = useState(false);
  const [serverResponseMessage, setServerResponseMessage] = useState();
  const [willLogin, setToLogin] = useState(false);
  const [willCreateLogin, setToCreateLogin] = useState(false);
  const [willSaveSettings, setToSaveSettings] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setToLoggedIn] = useState(false);
  const [saveToDatabase, setToSaveToDatabase] = useState(false);

  useEffect(() => {
    if (willLogin) {
      loginUser(prepareData(user, password, undefined, undefined, undefined, undefined, undefined))
      .then((response) => {
        if (typeof response.data === 'string') {
          setServerResponseMessage(response.data);
          setHaveServerMessage(true);
          setUser('');
          setPassword('');
          setToLoggedIn(false);
        } else {
          setSession(response.data[0].sessionLength);
          setDirection(response.data[0].timerStyle);
          setBreaks(response.data[0].breakLength);
          setNumberOfSessions(response.data[0].numberOfSessions);
          addToTotalTimeEver(response.data[0].totalTime);
          setToLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
        errorThrown(true);
      })
    }
  }, [willLogin])

  useEffect(() => {
    if (willLogTime && loggedIn) {
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
    }
  }, [willLogTime])

  useEffect(() => {
    if (willCreateLogin) {
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
    if (willSaveSettings) {
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
    }
  }, [willSaveSettings])

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
        <span>Hello, {user}!</span>
      )
    }
  }

  return (
    <ComponentContainer>
      <ComponentColumnContainer>
        <Visualizer
        plantChoice={plantChoice}
        totalTimeEver={totalTimeEver}
        growthRate={growthRate}
        plantMaxImgNum={plantMaxImgNum}
        />
        <br/>
        {renderHello()}
        <Settings
          setSession={setSession}
          setDirection={setDirection}
          setTimer={setTimerOn}
          setNewSettings={setNewSettings}
          setBreaks={setBreaks}
          setNumberOfSessions={setNumberOfSessions}
          user={user}
          password={password}
          setToSaveSettings={setToSaveSettings}
        />
      </ComponentColumnContainer>
      <ComponentColumnContainer>
      <Login
        setUser={setUser}
        user={user}
        setPassword={setPassword}
        password={password}
        setToLogin={setToLogin}
        willLogin={willLogin}
        willCreateLogin={willCreateLogin}
        setToCreateLogin={setToCreateLogin}
        loggedIn={loggedIn}
      />
      <TimerVisual
        sessionTotal={sessionTotal}
        direction={direction}
        totalTime={totalTime}
        addToTotalTime={addToTotalTime}
        isOn={isOn}
        setTimerOn={setTimerOn}
        isReset={isReset}
        resetTimer={resetTimer}
        isSet={isSet}
        setNewSettings={setNewSettings}
        breakTotal={breakTotal}
        pomodoros={pomodoros}
        totalTimeEver={totalTimeEver}
        addToTotalTimeEver={addToTotalTimeEver}
        logTime={logTime}
        errorThrown={errorThrown}
        user={user}
        password={password}
      />
      {renderError()}
      {renderServerMessage()}
        <SettingsVisual
          sessionTotal={sessionTotal}
          direction={direction}
          breakTotal={breakTotal}
          pomodoros={pomodoros}
          isSet={isSet}
          isReset={isReset}
          isOn={isOn}
          totalTime={totalTime}
          totalTimeEver={totalTimeEver}
        />
      </ComponentColumnContainer>
    </ComponentContainer>
  )
}

export default App;