import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Minutes from './minutes.jsx';
import Seconds from './seconds.jsx';

const TimerBox = styled.div`
  border: 10px dashed DarkSeaGreen;
  border-radius: .5em;
  padding: 15px;
  text-align: center;
  font-size: 2em;
`;

const PauseWarning = styled.span`
  color: RebeccaPurple;
`;

const Button = styled.button`
  font-family: charybdis;
  font-size: .8em;
  color: DarkOliveGreen;
  border: 4px dashed DarkSeaGreen;
  background-color: white;
  margin: 2px;
`;

const TimerVisual = ({ sessionTotal, direction, isOn, setTimerOn, isReset, resetTimer, isSet, setNewSettings, breakTotal, pomodoros }) => {
  const [seconds, setSeconds] = useState('00');
  const [minutes, setMinutes] = useState('0');
  const [counter, setCounter] = useState(sessionTotal);
  const [directionHolder, setDirHolder] = useState(direction);
  const [sessionHolder, setSessHolder] = useState(sessionTotal);
  const [isPaused, pauseThisSucker] = useState(false);
  let interval;

  console.log(directionHolder, sessionHolder, breakTotal, pomodoros);

  useEffect(() => {
    if ( isReset || isSet ) {
      setDirHolder(direction);
      setNewSettings(false);
    }
  }, [isReset, isSet, directionHolder, direction])

  useEffect(() => {
    if ( isReset || isSet) {
      setSessHolder(sessionTotal);
      setNewSettings(false);
    }
  }, [isReset, isSet, sessionHolder, sessionTotal])

  useEffect(() => {
    if (directionHolder === 'backward' && (!isOn && isReset) && !isPaused) {
      setCounter(sessionHolder);
      resetTimer(false);
    } else if (directionHolder === 'forwards' && (!isOn || isReset) && !isPaused) {
      setCounter(0);
      resetTimer(false);
    }
  }, [sessionHolder, directionHolder, isOn, isReset])

  useEffect(() => {
    if (isOn && directionHolder !== 'backward' && counter <= sessionTotal) {
      interval = setInterval(() => {
        setCounter(counter => counter + 1);
        let secondsCounted = counter % 60;
        let minutesCounted = Math.floor(counter / 60);

        let secondsCountedStr = secondsCounted < 10 ? '0' + secondsCounted.toString() : secondsCounted.toString();
        let minutesCountedStr = minutesCounted.toString();

        setSeconds(secondsCountedStr);
        setMinutes(minutesCountedStr);
      }, 1000)

      return () => clearInterval(interval);
    } else if (isOn && directionHolder === 'backward' && counter >= 0) {
      interval = setInterval(() => {
        setCounter(counter => counter - 1);
        let secondsCounted = counter % 60;
        let minutesCounted = Math.floor(counter / 60);

        let secondsCountedStr = secondsCounted < 10 ? '0' + secondsCounted.toString() : secondsCounted.toString();
        let minutesCountedStr = minutesCounted.toString();

        setSeconds(secondsCountedStr);
        setMinutes(minutesCountedStr);
      }, 1000)

      return () => clearInterval(interval);
    }
  }, [seconds, minutes, counter, isOn])

  const renderButton = () => {
    if (isOn) {
      return (
      <Button onClick={() => {
        let state = !isOn;
        console.log(state);
        setTimerOn(state);
        pauseThisSucker(true);
      }}>Pause</Button>
      )
    } else {
      return (
        <>
          <PauseWarning>Timer is currently paused</PauseWarning>
          <br />
          <Button onClick={() => {
            let state = !isOn;
            console.log(state);
            setTimerOn(state);
            pauseThisSucker(false);
          }}>Start</Button>
        </>
      )
    }
  }

  const hardRestart = () => {
    setTimerOn(false);
    pauseThisSucker(false);
    resetTimer(true);
  }

  const logTime = () => {
    console.log('logged');
  }

  return (
    <div>
      <TimerBox>
        {minutes}:{seconds}:{counter}
      </TimerBox>
      <br />
      <div>
        {renderButton()}
        <Button onClick={hardRestart}>Reset</Button>
        <Button onClick={logTime}>Log Time</Button>
      </div>
    </div>
  )
}

export default TimerVisual;