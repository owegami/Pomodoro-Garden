import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
  height: 200px;
  z-index: 2;
  border: 4px solid darkred;
  box-shadow: 2px 2px SlateGrey;
`;

const Message =  styled.span`
  position: absolute;
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
  top: 20%;
  min-width: 250px;
  max-width: 500px;
  min-height: 100px;
  max-height: 200px;
  z-index: 2;
  border: 4px solid DarkOliveGreen;
  box-shadow: 2px 2px SlateGrey;
`;

const App = () => {
  //timer states
  const [sessionTotal, setSession] = useState(1500);
  const [direction, setDirection] = useState('backward');
  const [totalTimeEver, addToTotalTimeEver] = useState(0);
  const [totalTime, addToTotalTime] = useState(0);
  const [isOn, setTimerOn] = useState(false);
  const [isReset, resetTimer] = useState(false);
  const [isSet, setNewSettings] = useState(false);
  const [breakTotal, setBreaks] = useState(5);
  const [pomodoros, setNumberOfSessions] = useState(4);

  //visualizer states
  const [plantChoice, setPlantChoice] = useState('Tomato');
  const [growthRate, setGrowthRate] = useState(1);
  const [plantMaxImgNum, setplantMaxImgNum] = useState(5);

  //server states
  const [willLogTime, logTime] = useState(false);
  const [errorPresent, errorThrown] = useState(false);
  const [haveServerMessage, setHaveServerMessage] = useState(false);
  const [serverResponseMessage, setSeverResponseMessage] = useState();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (willLogTime) {
      let data = {
        total: sessionTotal
      }
      axios({
        url: '/timer/timelog',
        method: 'PATCH',
        data: data
      })
      .then((response) => {
        console.log(response);
        setHaveServerMessage(true);
        setSeverResponseMessage(response.data);
      })
      .catch((err) => {
        console.log(err);
        errorThrown(true);
      })
    }
  }, [willLogTime])

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
          <Message>Please excuse the inconvience. There seems to have been an error logging your total time. If this problem persists, please contact developer.</Message>
        </ErrorMessageBox>
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
        <Settings
          setSession={setSession}
          setDirection={setDirection}
          setTimer={setTimerOn}
          setNewSettings={setNewSettings}
          setBreaks={setBreaks}
          setNumberOfSessions={setNumberOfSessions}
        />
      </ComponentColumnContainer>
      <ComponentColumnContainer>
      <Login
        setUser={setUser}
        setPassword={setPassword}
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

