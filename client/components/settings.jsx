import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import TimerSettings from './../components/settings/timerSettings.jsx';
import SettingsVisual from './../components/settings/settingsVisual.jsx';

import {Button, ComponentColumnContainer, ComponentRowContainer} from './../view/styledComponents.jsx';

const Settings = ({ setSession, setDirection, setNewSettings, setBreaks, setNumberOfSessions, user, password, setToSaveSettings, sessionTotal, direction, breakTotal, pomodoros, isSet, isReset, isOn, totalTime, totalTimeEver }) => {
  const [viewTimerSettings, setToViewTimerSettings] = useState(false);
  const [viewGraphicsSettings, setToViewGraphicsSettings] = useState(false);
  const [viewSoundSettings, setToViewSoundSettings] = useState(false);
  const [viewDataSettings, setToViewDataSettings] = useState(false);

  const renderTimerSettings = () => {
    if (viewTimerSettings) {
      let settingsObj = {sessionTotal, direction, breakTotal, pomodoros, isSet, isReset, isOn, totalTime, totalTimeEver}
      return (
        <ComponentRowContainer>
          <ComponentColumnContainer>
            <Button onClick={() => {
              setToViewTimerSettings(false);
            }}>Timer Settings</Button>
            <TimerSettings
              setSession={setSession}
              setDirection={setDirection}
              setNewSettings={setNewSettings}
              setBreaks={setBreaks}
              setNumberOfSessions={setNumberOfSessions}
              user={user}
              password={password}
              setToSaveSettings={setToSaveSettings}
              />
            <SettingsVisual settingsObj={settingsObj} />
          </ComponentColumnContainer>
        </ComponentRowContainer>
      )
    } else {
      return (
        <Button onClick={() => {
          setToViewTimerSettings(true);
        }}>Timer Settings</Button>
      )
    }
  }

  const renderGraphicsSettings = () => {

  }

  const renderSoundSettings = () => {

  }

  const renderDataSettings = () => {

  }

  return (
    <>
      {renderTimerSettings()}
      {renderGraphicsSettings()}
      {renderSoundSettings()}
      {renderDataSettings()}
    </>
  )
}

export default Settings;
