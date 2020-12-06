import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import sounds from './../../public/sounds.js';
import {TimerBox, PauseMessageBox, PauseMessage, MessageSess, MessageBreak, Button} from './../view/styledComponents.jsx';

const TimerVisual = ({ sessionTotal, direction, isOn, setTimerOn, isReset, resetTimer, isSet, setNewSettings, breakTotal, pomodoros, totalTime, addToTotalTime, logTime, errorThrown, user, password }) => {
  const [seconds, setSeconds] = useState('00');
  const [minutes, setMinutes] = useState('25');
  const [counter, setCounter] = useState(sessionTotal);
  const [directionHolder, setDirHolder] = useState(direction);
  const [sessionHolder, setSessHolder] = useState(sessionTotal);
  const [isPaused, pauseThisSucker] = useState(false);
  const [isSession, switchToSession] = useState(true);
  const [isBreak, switchToBreak] = useState(false);
  const [counts, setCounts] = useState(0);
  let interval;
  let chimes1 = new sounds.chimes1();
  let chimes2 = new sounds.chimes2();

  const setMinutesAndSeconds = (counter) => {

    let minutesCounted = Math.floor(counter / 60);
    let secondsCounted  = Math.floor(counter % 60);

    let min = minutesCounted.toString();
    let sec = secondsCounted < 10 ? '0' + secondsCounted.toString() : secondsCounted.toString();

    setMinutes(min);
    setSeconds(sec);
  }

  const resetMinutesAndSeconds = () => {
    let startingPoint;
    if (isSession) {
      startingPoint = direction === 'backward' ? sessionHolder : 0;
    } else if (isBreak) {
      startingPoint = direction === 'backward' ? breakTotal : 0;
    } else {
      errorThrown(true);
    }
    setMinutesAndSeconds(startingPoint);
  }

  useEffect(() => {
    if (isSet) {
      setDirHolder(direction);
      resetMinutesAndSeconds();
      setSessHolder(sessionTotal);
      setNewSettings(false);
      hardSet();
    }
  }, [isSet, sessionHolder, sessionTotal, directionHolder, direction])

  useEffect(() => {
    if (isReset) {
      resetMinutesAndSeconds();
      setSessHolder(sessionHolder);
    }
  }, [isReset, sessionHolder, directionHolder])

  useEffect(() => {
    if (directionHolder === 'backward' && ((!isOn || !isPaused) && isReset)) {
      if (isSession) {
        setCounter(sessionHolder);
      } else {
        setCounter(breakTotal);
      }
      resetTimer(false);
    } else if (directionHolder === 'forwards' && ((!isOn || !isPaused) && isReset)) {
      setCounter(0);
      resetTimer(false);
    }
  }, [sessionHolder, directionHolder, isOn, isReset])

  useEffect(() => {
    if ((isOn && directionHolder !== 'backward' && counts < pomodoros)) {
      interval = setInterval(() => {
        setCounter(counter => counter + 1);
        if(isSession) {
          addToTotalTime(totalTime => totalTime + 1);
        }
        setMinutesAndSeconds(counter);
      }, 1000)
      if(counter === sessionTotal + 1 && isSession) {
        logTime(true);
        chimes2.play();
        switchToSession(false);
        switchToBreak(true);
        setCounter(0);
        setCounts(counts => counts + 1);
      } else if (counter === breakTotal + 1 && isBreak) {
        chimes1.play();
        switchToSession(true);
        switchToBreak(false);
        setCounter(0);
      }
      return () => clearInterval(interval);

    } else if (isOn && directionHolder === 'backward' && counts < pomodoros) {
      interval = setInterval(() => {
        setCounter(counter => counter - 1);
        if(isSession) {
          addToTotalTime(totalTime => totalTime + 1);
        }
        setMinutesAndSeconds(counter);
      }, 1000)
      if(counter === -1 && isSession) {
        logTime(true);
        chimes2.play();
        switchToSession(false);
        switchToBreak(true);
        setCounts(counts => counts + 1);
        setCounter(breakTotal);
      } else if (counter === -1 && isBreak) {
        chimes1.play();
        switchToSession(true);
        switchToBreak(false);
        setCounter(sessionHolder);
      }
      return () => clearInterval(interval);
    } else if (counts < pomodoros) {
      setTimerOn(false);
    }
  }, [seconds, minutes, counter, isOn, totalTime, isSession])

  const renderButton = () => {
    if (isOn) {
      return (
      <Button onClick={() => {
        let state = !isOn;
        setTimerOn(state);
        pauseThisSucker(true);
      }}>Pause</Button>
      )
    } else {
      return (
        <>
          <Button onClick={() => {
            let state = !isOn;
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

  const renderTime = () => {
    return (
      <>
        {minutes}:{seconds}
      </>
    )
  }

  const renderSessionOrBreakMessage = () => {
    if (isSession) {
      return (
        <MessageSess>In Session</MessageSess>
      )
    } else if (isBreak) {
      return (
        <MessageBreak>On Break</MessageBreak>
      )
    }
  }

  const hardSet = () => {
    setTimerOn(false);
    resetTimer(true);
  }

  const hardRestart = () => {
    setTimerOn(false);
    pauseThisSucker(true);
    resetTimer(true);
  }

  return (
    <div>
      {renderPauseBox()}
      <TimerBox>
        {renderTime()}
      </TimerBox>
      <br />
      <div>
        {renderButton()}
        <Button onClick={hardRestart}>Reset</Button>
      </div>
      {renderSessionOrBreakMessage()}
    </div>
  )
}

export default TimerVisual;