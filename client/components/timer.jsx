import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Minutes from './minutes.jsx';
import Seconds from './seconds.jsx';
import sounds from './../../public/sounds.js'

const TimerBox = styled.div`
  border: 10px dashed DarkSeaGreen;
  border-radius: .5em;
  padding: 15px;
  text-align: center;
  font-size: 2em;
`;

const PauseMessageBox = styled.div`
  position: absolute;
  background-color: white;
  color: RebeccaPurple;
  font-size:1em;
  right: 5%;
  top: 10%;
  width: 100px;
  height: 50px;
  z-index: 2;
  border: 4px solid darkred;
  box-shadow: 2px 2px SlateGrey;
`;

const PauseMessage = styled.span`
  color: RebeccaPurple;
  position: absolute;
  padding: 10px;
`;

const Button = styled.button`
  font-family: charybdis;
  font-size: .8em;
  color: DarkOliveGreen;
  border: 4px dashed DarkSeaGreen;
  background-color: white;
  margin: 2px;
`;

const TimerVisual = ({ sessionTotal, direction, isOn, setTimerOn, isReset, resetTimer, isSet, setNewSettings, breakTotal, pomodoros, totalTime, addToTotalTime, logTime }) => {
  const [seconds, setSeconds] = useState('00');
  const [minutes, setMinutes] = useState('0');
  const [counter, setCounter] = useState(sessionTotal);
  const [directionHolder, setDirHolder] = useState(direction);
  const [sessionHolder, setSessHolder] = useState(sessionTotal);
  const [isPaused, pauseThisSucker] = useState(false);
  const [isSession, switchToSession] = useState(true);
  const [isBreak, switchToBreak] = useState(false);
  let interval;
  let chimes1 = new sounds.chimes1();
  let chimes2 = new sounds.chimes2();


  // console.log(directionHolder, sessionHolder, breakTotal, pomodoros);

  useEffect(() => {
    if (isSet) {
      console.log('made it in here!');
      setDirHolder(direction);
      setSessHolder(sessionTotal);
      setNewSettings(false);
      hardSet();
    }
  }, [isSet, sessionHolder, sessionTotal, directionHolder, direction])

  useEffect(() => {
    if (isReset) {
      console.log('checking issue')
      setSessHolder(sessionHolder);
    }
  }, [isReset, sessionHolder, directionHolder])

  useEffect(() => {
    if (directionHolder === 'backward' && ((!isOn || !isPaused) && isReset)) {
      setCounter(sessionHolder);
      resetTimer(false);
    } else if (directionHolder === 'forwards' && ((!isOn || !isPaused) && isReset)) {
      setCounter(0);
      resetTimer(false);
    }
  }, [sessionHolder, directionHolder, isOn, isReset])

  useEffect(() => {
    if ((isOn && directionHolder !== 'backward' && counter <= sessionTotal) && isSession) {
      interval = setInterval(() => {
        setCounter(counter => counter + 1);
        let secondsCounted = counter % 60;
        let minutesCounted = Math.floor(counter / 60);

        let secondsCountedStr = secondsCounted < 10 ? '0' + secondsCounted.toString() : secondsCounted.toString();
        let minutesCountedStr = minutesCounted.toString();

        addToTotalTime(totalTime => totalTime + 1);
        setSeconds(secondsCountedStr);
        setMinutes(minutesCountedStr);
      }, 1000)

      if(counter === sessionTotal) {
        logTime(true);
        chimes2.play();
        switchToSession(false);
        switchToBreak(true);
      }

      return () => clearInterval(interval);
    } else if ((isOn && directionHolder === 'backward' && counter >= 0) && isSession) {
      interval = setInterval(() => {
        setCounter(counter => counter - 1);
        let secondsCounted = counter % 60;
        let minutesCounted = Math.floor(counter / 60);
        console.log(Math.floor(sessionTotal - counter))

        let secondsCountedStr = secondsCounted < 10 ? '0' + secondsCounted.toString() : secondsCounted.toString();
        let minutesCountedStr = minutesCounted.toString();

        addToTotalTime(totalTime => totalTime + 1);
        setSeconds(secondsCountedStr);
        setMinutes(minutesCountedStr);
      }, 1000)

      if(counter === 0) {
        logTime(true);
        chimes2.play();
        switchToSession(false);
        switchToBreak(true);
      }

      return () => clearInterval(interval);
    }
  }, [seconds, minutes, counter, isOn, totalTime, isSession])

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

  const renderPauseBox = () => {
    if (isPaused) {
      return (
        <PauseMessageBox>
          <PauseMessage>Paused</PauseMessage>
        </PauseMessageBox>
      )
    } else {
      return (
        <></>
      )
    }
  }

  const hardSet = () => {
    setTimerOn(false);
    resetTimer(true);
    setMinutes('0');
    setSeconds('00');
  }

  const hardRestart = () => {
    setTimerOn(false);
    pauseThisSucker(true);
    resetTimer(true);
    setMinutes('RE');
    setSeconds('SET');
  }

  return (
    <div>
      {renderPauseBox()}
      <TimerBox>
        {minutes}:{seconds}:{counter}
      </TimerBox>
      <br />
      <div>
        {renderButton()}
        <Button onClick={hardRestart}>Reset</Button>
      </div>
    </div>
  )
}

export default TimerVisual;