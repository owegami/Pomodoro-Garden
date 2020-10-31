import React, { useState, useEffect } from 'react';
import Timer from 'react-compound-timer';
import styled from 'styled-components';

const TimerBox = styled.div`
  width: auto;
  height: auto;
`;

const TimerVisual = ({sessionTotal, direction}) => {
  //declare state here when we want some
  console.log(sessionTotal, direction)
  return (
    <TimerBox>
      <Timer
        initialTime={sessionTotal}
        direction={direction}
      >
        <Timer.Minutes />:
        <Timer.Seconds
          formatValue={(text) => (text.toString().length > 1 ? text : "0" + text)}
        />
      </Timer>
    </TimerBox>
  )
}

export default TimerVisual;