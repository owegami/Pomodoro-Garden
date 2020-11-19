import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import TimerSettings from './../components/settings/timerSettings.jsx';
import GraphicsSettings from './../components/settings/graphicsSettings.jsx';
import SoundSettings from './../components/settings/soundSettings.jsx';
import DataSavingSettings from './../components/settings/dataSettings.jsx';
import SettingsVisual from './../components/settings/settingsVisual.jsx';

SoundSettings
import {Button, ComponentColumnContainer, ComponentRowContainer} from './../view/styledComponents.jsx';

const Settings = ({ setSession, setDirection, setNewSettings, setBreaks, setNumberOfSessions, user, password, setToSaveSettings, sessionTotal, direction, breakTotal, pomodoros, isSet, isReset, isOn, totalTime, totalTimeEver }) => {
  const [viewTimerSettings, setToViewTimerSettings] = useState(false);
  const [viewGraphicsSettings, setToViewGraphicsSettings] = useState(false);
  const [viewSoundSettings, setToViewSoundSettings] = useState(false);
  const [viewDataSettings, setToViewDataSettings] = useState(false);
  const [settingsSectionToVisualize, setSettingsSectionToVisualize] = useState('');

  const renderTimerSettings = () => {
    if (viewTimerSettings) {
      if (settingsSectionToVisualize !== 'timer') {
        setSettingsSectionToVisualize('timer');
      }
      console.log('settingsSectionToVisualize', settingsSectionToVisualize);
      let settingsObj = [sessionTotal, direction, breakTotal, pomodoros, isSet, isReset, isOn, totalTime, totalTimeEver];
      return (
        <ComponentColumnContainer>
          <Button onClick={() => {
            setToViewTimerSettings(false);
          }}>Hide Timer Settings</Button>
          <ComponentRowContainer>
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
              <SettingsVisual
              settingsSectionToVisualize={settingsSectionToVisualize}
              settingsObj={settingsObj}
              />
          </ComponentRowContainer>
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
      setSettingsSectionToVisualize('graphics');
      let settingsObj = [];
      return (
        <ComponentColumnContainer>
          <Button onClick={() => {
            setToViewGraphicsSettings(false);
          }}>Hide Graphics Settings</Button>
          <ComponentRowContainer>
              <GraphicsSettings />
              <SettingsVisual
              settingsSectionToVisualize={settingsSectionToVisualize}
              settingsObj={settingsObj}
              />
          </ComponentRowContainer>
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
      setSettingsSectionToVisualize('sound');
      let settingsObj = [];
      return (
        <ComponentColumnContainer>
          <Button onClick={() => {
            setToViewSoundSettings(false);
          }}>Hide Sound Settings</Button>
          <ComponentRowContainer>
              <SoundSettings />
              <SettingsVisual
              settingsSectionToVisualize={settingsSectionToVisualize}
              settingsObj={settingsObj}
              />
          </ComponentRowContainer>
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
      setSettingsSectionToVisualize('data');
      let settingsObj = [];
      return (
        <ComponentColumnContainer>
          <Button onClick={() => {
            setToViewDataSettings(false);
          }}>Hide Data Saving Settings</Button>
          <ComponentRowContainer>
              <DataSavingSettings />
              <SettingsVisual
              settingsSectionToVisualize={settingsSectionToVisualize}
              settingsObj={settingsObj}
              />
          </ComponentRowContainer>
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
