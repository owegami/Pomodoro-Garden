import React from 'react';
import styled from 'styled-components';

const CurrentSettingsBox = styled.div`
  margin-top: 25px;
`;

const SettingsVisual = ({sessionTotal, direction, breakTotal, pomodoros, isSet, isReset, isOn, totalTime, totalTimeEver }) => {
  return (
    <CurrentSettingsBox>
      <div>
        Pomodoro/Session Length:<br/>
        {sessionTotal / 60} minutes<br/>
      </div>
      <div>
        Clock type:<br/>
        {direction === 'forwards' ? 'Stopwatch' : 'Timer'}<br/>
      </div>
      <div>
        Break Length:<br/>
        {breakTotal} minutes<br/>
      </div>
      <div>
        Pomodoros/Sessions:<br/>
        {pomodoros}<br/>
      </div>
      <div>
        Minutes total today:<br/>
        {Math.floor(totalTime / 60)}<br/>
      </div>
      <div>
        Total time logged ever:<br/>
        {totalTimeEver}<br/>
      </div>
    </CurrentSettingsBox>
  )
}

export default SettingsVisual;