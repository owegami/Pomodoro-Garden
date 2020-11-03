import React, { useState, useEffect } from 'react';
import TimerVisual from './timer.jsx';
import Visualizer from './visualizer.jsx';
import SettingsVisual from './settingsVisual.jsx';
import Settings from './settings.jsx';
import styled from 'styled-components';

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
  margin: 20px;
`;

const App = () => {
  const [sessionTotal, setSession] = useState(1500);
  const [direction, setDirection] = useState('backward');
  const [totalTime, addToTotalTime] = useState();
  const [isOn, setTimerOn] = useState(false);
  const [isReset, resetTimer] = useState(false);
  const [isSet, setNewSettings] = useState(false);
  const [breakTotal, setBreaks] = useState(5);
  const [pomodoros, setNumberOfSessions] = useState(4);

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
        addToTotalTime={addToTotalTime}
        isOn={isOn}
        setTimerOn={setTimerOn}
        isReset={isReset}
        resetTimer={resetTimer}
        isSet={isSet}
        setNewSettings={setNewSettings}
        breakTotal={breakTotal}
        pomodoros={pomodoros}
      />
        <SettingsVisual
          sessionTotal={sessionTotal}
          direction={direction}
          breakTotal={breakTotal}
          pomodoros={pomodoros}
          isSet={isSet}
          isReset={isReset}
          isOn={isOn}
        />
      </ComponentColumnContainer>
    </ComponentContainer>
  )
}

export default App;

