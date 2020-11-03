import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

const ErrorMessage =  styled.span`
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
  border: 4px solid darkred;
  text-align: center;
  vertical-align: center;
  cursor: pointer;
`;

const App = () => {
  const [sessionTotal, setSession] = useState(1500);
  const [direction, setDirection] = useState('backward');
  const [totalTimeEver, addToTotalTimeEver] = useState(0);
  const [totalTime, addToTotalTime] = useState(0);
  const [isOn, setTimerOn] = useState(false);
  const [isReset, resetTimer] = useState(false);
  const [isSet, setNewSettings] = useState(false);
  const [breakTotal, setBreaks] = useState(5);
  const [pomodoros, setNumberOfSessions] = useState(4);
  const [willLogTime, logTime] = useState(false);
  const [errorPresent, errorThrown] = useState(false);

  useEffect(() => {
    if (willLogTime) {
      let data = {
        total: sessionTotal
      }
      axios({
        url: '/timelog',
        method: 'POST',
        data: data
      })
      .then((newTotalTime) => {
        console.log(newTotalTime);
      })
      .catch((err) => {
        console.log(err);
        errorThrown(true);
      })
    }
  }, [willLogTime])

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
          <ErrorMessage>Please excuse the inconvience. There seems to have been an error logging your total time. If this problem persists, please contact developer.</ErrorMessage>
        </ErrorMessageBox>
      )
    }
  }

  return (
    <ComponentContainer>
      <ComponentColumnContainer>
        <Visualizer />
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

