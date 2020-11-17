import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CurrentSettingsForm = styled.form`
  margin-top: 25px;
`;

const SettingsQuestion = styled.div`
  margin: -10px 0px;
`;

const DropDownMenus = styled.select`
  font-family: charybdis;
  font-size: .8em;
  color: DarkOliveGreen;
  border: 4px dashed DarkSeaGreen;
  background-color: white;
`;

const DropDownOptions = styled.option`
  font-family: charybdis;
  font-size: .8em;
  color: DarkOliveGreen;
  border: 4px dashed DarkSeaGreen;
  background-color: white;
`;

const Button = styled.button`
  font-family: charybdis;
  font-size: .8em;
  color: DarkOliveGreen;
  border: 4px dashed DarkSeaGreen;
  background-color: white;
  margin: 2px;
`;

const TextInputBox = styled.input`
  width: 300px;
  padding: 5px;
  font-family: charybdis;
  font-size: .8em;
  color: DarkOliveGreen;
  margin: 5px -50px 5px 5px;
  border: 4px solid DarkSeaGreen;
  box-shadow: 2px 2px SlateGrey;
`;

const Settings = ({ setSession, setDirection, setNewSettings, setBreaks, setNumberOfSessions, user, password, setToSaveSettings }) => {
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
    } else {
      return (
        <>
        <br/>
        <span>Login to save settings</span>
        </>
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
          Choose session length: <br/>
          <DropDownMenus onChange={() => {
            let value = Number.parseInt(event.target.value);
            if (Number.isNaN(value) === false) {
              setSession(value * 60);
            } else {
              setCustomSessions(true);
            }
            }}>
            <DropDownOptions value='0' name='sessionTotal'>Number of session minutes?</DropDownOptions>
            <DropDownOptions value='25' name='sessionTotal'>25</DropDownOptions>
            <DropDownOptions value='50' name='sessionTotal'>50</DropDownOptions>
            <DropDownOptions value='Custom' name='sessionTotal'>Custom</DropDownOptions>
          </DropDownMenus>
          {renderCustomTimeInput()}
        </label>
      </SettingsQuestion>
      <br />
      <SettingsQuestion>
        <label>
          Choose timer style:<br/>
          <DropDownMenus onChange={() => {
            setDirection(event.target.value);
          }}>
            <DropDownOptions value='null' name='direction'>Ascending/Descending timer?</DropDownOptions>
            <DropDownOptions value='backward' name='direction'>Timer (count down)</DropDownOptions>
            <DropDownOptions value='forwards' name='direction'>Stopwatch (count up)</DropDownOptions>
          </DropDownMenus>
        </label>
      </SettingsQuestion>
      <br/>
      <SettingsQuestion>
        <label>
          Choose break length(minutes):<br />
          <DropDownMenus onChange={() => {
            setBreaks(event.target.value);
          }}>
            <DropDownOptions value='null'>Number of break minutes?</DropDownOptions>
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
          Choose number of sessions:<br />
          <DropDownMenus onChange={() => {
            let value = Number.parseInt(event.target.value);
            if (Number.isNaN(value) === false) {
              setNumberOfSessions(event.target.value);
            } else {
              setCustomNumberOfSessions(true);
            }
          }}>
            <DropDownOptions value='null'>Number of sessions/pomodoros?</DropDownOptions>
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

export default Settings;
