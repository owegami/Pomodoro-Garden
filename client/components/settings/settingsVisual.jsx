import React from 'react';
import styled from 'styled-components';

import {CurrentSettingsBox} from './../../view/styledComponents.jsx';

const SettingsVisual = ({ settingsSectionToVisualize, settingsObj }) => {

  if (settingsSectionToVisualize === 'timer') {
    let [ sessionTotal, direction, breakTotal, pomodoros, isSet, isReset, isOn, totalTime, totalTimeEver ] = settingsObj;
    const renderTotalTime = () => {
      return Math.floor(totalTime / 60);
    }

    const renderTotalTimeEver = () => {
      return Math.floor(totalTimeEver / 60);
    }
    return (
      <CurrentSettingsBox>
        <div>
          Pomodoro/Session Length:<br/>
          {Number.isNaN(sessionTotal / 60) === true ? 'Please input proper length of time' : sessionTotal / 60 + ' minutes'}<br/>
        </div>
        <div>
          Clock type:<br/>
          {direction === 'forwards' ? 'Stopwatch' : 'Timer'}<br/>
        </div>
        <div>
          Break Length:<br/>
          {Math.floor(breakTotal / 60)}<br/>
        </div>
        <div>
          Pomodoros/Sessions:<br/>
          {Number.isNaN(pomodoros / 1) === true ? 'Please input proper number of sessions' : pomodoros}<br/>
        </div>
        <div>
          Minutes total today:<br/>
          {renderTotalTime()}<br/>
        </div>
        <div>
          Total time logged ever:<br/>
          {renderTotalTimeEver()}<br/>
        </div>
      </CurrentSettingsBox>
    )
  } else if (settingsSectionToVisualize === 'graphics') {

  } else if (settingsSectionToVisualize === 'sound') {

  } else if (settingsSectionToVisualize === 'data') {

  }

}

export default SettingsVisual;