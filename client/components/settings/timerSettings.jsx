import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {CurrentSettingsForm, SettingsQuestion, DropDownMenus, ErrorMessageBox, DropDownOptions, Button, TextInputBox} from './../../view/styledComponents.jsx';

const TimerSettings = ({ setSession, setDirection, setNewSettings, setBreaks, setNumberOfSessions, user, password, setToSaveSettings, sessionTotal, direction, breakTotal, pomodoros }) => {

  let dropDownDirectionStatement = direction === 'backwards' ? 'Timer view' : 'Stopwatch view';

  const [isCustomSessions, setCustomSessions] = useState(false);
  const [isCustomNumberOfSessions, setCustomNumberOfSessions] = useState(false);
  const [customTime, setCustomTime] = useState();
  const [customNumberOfSessions, setCustomSessionCount] = useState();

  const renderCustomTimeInput = () => {
    if (isCustomSessions) {
      return (
        <>
        <br/>
          <TextInputBox type='text' value={customTime === undefined ? '' : customTime} onChange={() => {
            setCustomTime(event.target.value);
          }}></TextInputBox>
          <br />
          <Button onClick={(e) => {
            e.preventDefault();
            setSession(customTime * 60);
            setTimeout(() => {
              setCustomSessions(false);
            }, 500)
            setCustomTime(); //flushing
          }}>Set Time</Button>
        </>
      )
    } else {
      return (
        <></>
      )
    }
  }

  useEffect(() => {
    renderCustomSessionNumberInput();
    renderCustomTimeInput();
  }, [isCustomNumberOfSessions, isCustomSessions])

  const renderCustomSessionNumberInput = () => {
    if (isCustomNumberOfSessions) {
      return (
        <>
        <br/>
          <TextInputBox type='text' value={customNumberOfSessions === undefined ? '' : customNumberOfSessions} onChange={() => {
              setCustomSessionCount(event.target.value);
            }}></TextInputBox>
            <br />
            <Button onClick={(e) => {
              e.preventDefault();
              setNumberOfSessions(customNumberOfSessions);
              setTimeout(() => {
                setCustomNumberOfSessions(false);
              }, 500)
              setCustomSessionCount(); //flushing
            }}>Set Number of Sessions</Button>
        </>
      )
    } else {
      return (
        <></>
      )
    }
  }
  const renderSaveSettingsButton = () => {
    if (user.length > 0 && password.length > 0) {
      return (
        <Button onClick={() => {setToSaveSettings(true)}}>Save Settings</Button>
      )
    }
  }

  return (
    <CurrentSettingsForm onSubmit={(e) => {
      e.preventDefault();
      setNewSettings(true);
    }}>
      <SettingsQuestion>
        <label>
          Session length: {(sessionTotal / 60) !== 25 && (sessionTotal / 60) !== 50 ? (sessionTotal / 60) + ' minutes' : ''}<br/>
          <DropDownMenus onChange={(event) => {
            let value = Number.parseInt(event.target.value);
            if (Number.isNaN(value) === false) {
              setSession(value * 60);
            } else {
              setCustomSessions(true);
            }
            }} value={sessionTotal/60 !== 25 && sessionTotal/60 !== 50 ? 'Custom' : sessionTotal/60}>
            <DropDownOptions value='25' name='sessionTotal'>25 minutes</DropDownOptions>
            <DropDownOptions value='50' name='sessionTotal'>50 minutes</DropDownOptions>
          <DropDownOptions value='Custom' name='sessionTotal'>Custom</DropDownOptions>
          </DropDownMenus>
          {renderCustomTimeInput()}
        </label>
      </SettingsQuestion>
      <br />
      <SettingsQuestion>
        <label>
          Timer style:<br/>
          <DropDownMenus value={direction} onChange={() => {
            setDirection(event.target.value);
          }}>
            <DropDownOptions value='backward' name='direction'>Timer (count down)</DropDownOptions>
            <DropDownOptions value='forwards' name='direction'>Stopwatch (count up)</DropDownOptions>
          </DropDownMenus>
        </label>
      </SettingsQuestion>
      <br/>
      <SettingsQuestion>
        <label>
          Break length(minutes):<br />
          <DropDownMenus value={breakTotal} onChange={() => {
            setBreaks(event.target.value);
          }}>
            <DropDownOptions value={5 * 60} name='breakTime'>5</DropDownOptions>
            <DropDownOptions value={10 * 60} name='breakTime'>10</DropDownOptions>
            <DropDownOptions value={15 * 60} name='breakTime'>15</DropDownOptions>
            <DropDownOptions value={20 * 60} name='breakTime'>20</DropDownOptions>
          </DropDownMenus>
        </label>
      </SettingsQuestion>
      <br />
      <SettingsQuestion>
        <label>
          Number of sessions: {pomodoros != 2 && pomodoros != 4 && pomodoros != 6 ? pomodoros + ' pomodoros/sessions' : ''}<br />
          <DropDownMenus value={pomodoros != 2 && pomodoros != 4 && pomodoros != 6 || isCustomNumberOfSessions ? 'Custom' : pomodoros} onChange={() => {
            let value = Number.parseInt(event.target.value);
            if (Number.isNaN(value) === false) {
              setNumberOfSessions(event.target.value);
            } else {
              setCustomNumberOfSessions(true);
            }
          }}>
            <DropDownOptions value={2} name='pomodoros'>2</DropDownOptions>
            <DropDownOptions value={4} name='pomodoros'>4</DropDownOptions>
            <DropDownOptions value={6} name='pomodoros'>6</DropDownOptions>
            <DropDownOptions value='Custom' name='pomodoros'>Custom</DropDownOptions>
          </DropDownMenus>
          {renderCustomSessionNumberInput()}
        </label>
      </SettingsQuestion>
      <br/>
      <Button onClick={() => {setNewSettings(true)}}>Set Timer Settings</Button>
      <br/>
      {renderSaveSettingsButton()}
    </CurrentSettingsForm>
  )
}

export default TimerSettings;
