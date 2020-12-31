import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import TimerSettingsContainer from './containers/timerSettingsContainer.js';
import GraphicsSettingsContainer from './containers/graphicsSettingsContainer.js';
import SoundSettingsContainer from './containers/soundSettingsContainer.js';
import DataSavingSettings from './../components/settings/dataSettings.jsx';

import {Button, ComponentColumnContainer, ComponentRowContainer} from './../view/styledComponents.jsx';

const Settings = ({ setSession, setDirection, setNewSettings, setBreaks, setNumberOfSessions, user, password, setToSaveSettings, sessionTotal, direction, breakTotal, pomodoros, totalTime, totalTimeEver, selectHighContrast, setSelectHighContrast, isTicking, setIsTicking, clockTickSound, setClockTickSound, hasThreeMinWarning, setThreeMinWarning }) => {
  const [viewTimerSettings, setToViewTimerSettings] = useState(false);
  const [viewGraphicsSettings, setToViewGraphicsSettings] = useState(false);
  const [viewSoundSettings, setToViewSoundSettings] = useState(false);
  const [viewDataSettings, setToViewDataSettings] = useState(false);
  const [settingsSectionToVisualize, setSettingsSectionToVisualize] = useState('');

  const renderTimerSettings = () => {
    if (viewTimerSettings) {
      return (
        <ComponentColumnContainer>
          <Button onClick={() => {
            setToViewTimerSettings(false);
          }}>Hide Timer Settings</Button>
              <TimerSettingsContainer />
        </ComponentColumnContainer>
      )
    } else {
      return (
        <Button onClick={() => {
          setToViewTimerSettings(true);
        }}>Show Timer Settings</Button>
      )
    }
  }

  const renderGraphicsSettings = () => {
    if (viewGraphicsSettings) {
      let settingsObj = [];
      return (
        <ComponentColumnContainer>
          <Button onClick={() => {
            setToViewGraphicsSettings(false);
          }}>Hide Graphics Settings</Button>
              <GraphicsSettingsContainer />
        </ComponentColumnContainer>
      )
    } else {
      return (
        <Button onClick={() => {
          setToViewGraphicsSettings(true);
        }}>Show Graphics Settings</Button>
      )
    }
  }

  const renderSoundSettings = () => {
    if (viewSoundSettings) {
      let settingsObj = [];
      return (
        <ComponentColumnContainer>
          <Button onClick={() => {
            setToViewSoundSettings(false);
          }}>Hide Sound Settings</Button>
              <SoundSettingsContainer />
        </ComponentColumnContainer>
      )
    } else {
      return (
        <Button onClick={() => {
          setToViewSoundSettings(true);
        }}>Show Sound Settings</Button>
      )
    }
  }

  const renderDataSettings = () => {
    if (viewDataSettings) {
      let settingsObj = [];
      return (
        <ComponentColumnContainer>
          <Button onClick={() => {
            setToViewDataSettings(false);
          }}>Hide Data Saving Settings</Button>
              <DataSavingSettings />
        </ComponentColumnContainer>
      )
    } else {
      return (
        <Button onClick={() => {
          setToViewDataSettings(true);
        }}>Show Data Saving Settings</Button>
      )
    }
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
