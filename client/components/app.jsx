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
  flex-flow: column wrap;
  font-family: charybdis;
  font-size: 2em;
  color: DarkOliveGreen;
  width: 750px;
`;

const ComponentRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row nowrap;
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

const Button = styled.button`
  position: relative;
  font-family: charybdis;
  font-size: 1.5em;
  color: DarkOliveGreen;
  border: 6px dashed DarkSeaGreen;
  background-color: white;
  margin: 0px 10px 10px 10px;
  right: 5%;
  left: 2%;
`;

const HelloMessage = styled.h3`
  position: relative;
  left: 20px;
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
  const [showSettings, setToShowSettings] = useState(false);
  const [showSettingsVisual, setToShowSettingsVisual] = useState(false);

  //visualizer states
  const [plantChoice, setPlantChoice] = useState('Tomato');
  const [growthRate, setGrowthRate] = useState(1);
  const [plantMaxImgNum, setplantMaxImgNum] = useState(5);

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
      setUser(loginObj.name);
    }
    if (loginObj !== undefined) {
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
    console.log('got here to log the time');
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
      console.log('Did i log the time?');
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
        </>
      )
    } else {
      return (
        <Button onClick={() => {
          setToShowSettings(true)
        }}>Change Settings</Button>
      )
    }
  }

  const renderSettingsInformationVisual = () => {
    if (showSettingsVisual) {
      return (
        <>
          <Button onClick={() => {
            setToShowSettingsVisual(false)
          }}>Hide Current Settings Information</Button>
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
        </>
      )
    } else {
      return (
        <Button onClick={() => {
          setToShowSettingsVisual(true)
        }}>Show Current Settings Information</Button>
      )
    }
  }


  return (
    <ComponentContainer>
      <ComponentRowContainer>
        <ComponentColumnContainer>
          <Visualizer
          plantChoice={plantChoice}
          totalTimeEver={totalTimeEver}
          growthRate={growthRate}
          plantMaxImgNum={plantMaxImgNum}
          />
          {renderHello()}
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
        </ComponentColumnContainer>
      </ComponentRowContainer>
      <ComponentColumnContainer>
        {renderSettingsInformationVisual()}
        {renderSettings()}
      </ComponentColumnContainer>
    </ComponentContainer>
  )
}

const setToLocalStorage = (userSettingsObj) => {
  let userSettings = JSON.stringify(userSettingsObj);
  console.log('JSON.stringify(', userSettings);
  localStorage.setItem('userSettings', userSettings);
}

export default App;