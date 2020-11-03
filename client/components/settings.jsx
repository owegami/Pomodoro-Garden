import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CurrentSettingsForm = styled.form`
  margin-top: 25px;
`;

const SettingsQuestion = styled.div`
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
  margin: 5px;
  border: 4px solid DarkSeaGreen;
  box-shadow: 2px 2px SlateGrey;
`;

const Settings = ({ setSession, setDirection, setNewSettings, setBreaks, setNumberOfSessions }) => {
  const [isCustomSessions, setCustomSessions] = useState(false);
  const [isCustomNumberOfSessions, setCustomNumberOfSessions] = useState(false);
  const [customTime, setCustomTime] = useState();
  const [customNumberOfSessions, setCustomSessionCount] = useState();

  // conditional rendering of the custom boxes line locations:
  // line 59: isCustomSessions & isCustomNumberOfSessions
  // line : isCustomSessions
  // line : isCustomNumberOfSessions
  // line : sans customization

  if (isCustomSessions && isCustomNumberOfSessions) {
    return (
      <CurrentSettingsForm>
        <SettingsQuestion>
          <label>
            Choose session length: <br/>
            <DropDownMenus onChange={() => {
              let value = Number.parseInt(event.target.value);
              if (Number.isNaN(value) === false) {
                console.log('number', value);
                setSession(value * 60);
              } else {
                console.log('setting custom');
                setCustomSessions(true);
                console.log('set custom', isCustomSessions);
              }
              }}>
              <DropDownOptions value='0' name='sessionTotal'>Number of session minutes?</DropDownOptions>
              <DropDownOptions value='25' name='sessionTotal'>25</DropDownOptions>
              <DropDownOptions value='50' name='sessionTotal'>50</DropDownOptions>
              <DropDownOptions value='Custom' name='sessionTotal'>Custom</DropDownOptions>
            </DropDownMenus>
            <TextInputBox type='text' value={customTime === undefined ? '' : customTime} onChange={() => {
              setCustomTime(event.target.value);
            }}></TextInputBox>
            <br />
            <Button onClick={(e) => {
              e.preventDefault();
              setSession(customTime * 60);
              setNewSettings(true);
              setTimeout(() => {
                setCustomSessions(false);
              }, 1000);
              setCustomTime();
            }}>Set Time</Button>
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
              <DropDownOptions value='5' name='breakTime'>5</DropDownOptions>
              <DropDownOptions value='10' name='breakTime'>10</DropDownOptions>
              <DropDownOptions value='15' name='breakTime'>15</DropDownOptions>
              <DropDownOptions value='20' name='breakTime'>20</DropDownOptions>
            </DropDownMenus>
          </label>
        </SettingsQuestion>
        <br />
        <SettingsQuestion>
          <label>
            Choose number of sessions/pomodoros:<br />
            <DropDownMenus onChange={() => {
              let value = Number.parseInt(event.target.value);
              if (Number.isNaN(value) === false) {
                setNumberOfSessions(event.target.value);
              } else {
                setCustomNumberOfSessions(true);
              }
            }}>
              <DropDownOptions value='null'>Number of sessions/pomodoros?</DropDownOptions>
              <DropDownOptions value='2' name='pomodoros'>2</DropDownOptions>
              <DropDownOptions value='4' name='pomodoros'>4</DropDownOptions>
              <DropDownOptions value='6' name='pomodoros'>6</DropDownOptions>
              <DropDownOptions value='Custom' name='pomodoros'>Custom</DropDownOptions>
            </DropDownMenus>
            <TextInputBox type='text' value={customTime === undefined ? '' : customTime} onChange={() => {
              setCustomTime(event.target.value);
            }}></TextInputBox>
            <br />
            <Button onClick={(e) => {
              e.preventDefault();
              setNumberOfSessions(customTime);
              setNewSettings(true);
              setTimeout(() => {
                setCustomNumberOfSessions(false);
              }, 1000);
            }}>Set Number of Sessions</Button>
          </label>
        </SettingsQuestion>
      </CurrentSettingsForm>
    )
  } else if (isCustomSessions && !isCustomNumberOfSessions) {
    return (
      <CurrentSettingsForm>
        <SettingsQuestion>
          <label>
            Choose session length: <br/>
            <DropDownMenus onChange={() => {
              let value = Number.parseInt(event.target.value);
              if (Number.isNaN(value) === false) {
                console.log('number', value);
                setSession(value * 60);
              } else {
                console.log('setting custom');
                setCustomSessions(true);
                console.log('set custom', isCustomSessions);
              }
              }}>
              <DropDownOptions value='0' name='sessionTotal'>Number of session minutes?</DropDownOptions>
              <DropDownOptions value='25' name='sessionTotal'>25</DropDownOptions>
              <DropDownOptions value='50' name='sessionTotal'>50</DropDownOptions>
              <DropDownOptions value='Custom' name='sessionTotal'>Custom</DropDownOptions>
            </DropDownMenus>
            <TextInputBox type='text' value={customTime === undefined ? '' : customTime} onChange={() => {
              setCustomTime(event.target.value);
            }}></TextInputBox>
            <br />
            <Button onClick={(e) => {
              e.preventDefault();
              setSession(customTime * 60);
              setNewSettings(true);
              setTimeout(() => {
                setCustomSessions(false);
              }, 1000);
              setCustomTime();
            }}>Set Time</Button>
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
              <DropDownOptions value='5' name='breakTime'>5</DropDownOptions>
              <DropDownOptions value='10' name='breakTime'>10</DropDownOptions>
              <DropDownOptions value='15' name='breakTime'>15</DropDownOptions>
              <DropDownOptions value='20' name='breakTime'>20</DropDownOptions>
            </DropDownMenus>
          </label>
        </SettingsQuestion>
        <br />
        <SettingsQuestion>
          <label>
            Choose number of sessions/pomodoros:<br />
            <DropDownMenus onChange={() => {
              let value = Number.parseInt(event.target.value);
              if (Number.isNaN(value) === false) {
                setNumberOfSessions(event.target.value);
              } else {
                setCustomNumberOfSessions(true);
              }
            }}>
              <DropDownOptions value='null'>Number of sessions/pomodoros?</DropDownOptions>
              <DropDownOptions value='2' name='pomodoros'>2</DropDownOptions>
              <DropDownOptions value='4' name='pomodoros'>4</DropDownOptions>
              <DropDownOptions value='6' name='pomodoros'>6</DropDownOptions>
              <DropDownOptions value='Custom' name='pomodoros'>Custom</DropDownOptions>
            </DropDownMenus>
          </label>
        </SettingsQuestion>
      </CurrentSettingsForm>
    )
  } else if (!isCustomSessions && isCustomNumberOfSessions) {
    return (
      <CurrentSettingsForm>
        <SettingsQuestion>
          <label>
            Choose session length: <br/>
            <DropDownMenus onChange={() => {
              let value = Number.parseInt(event.target.value);
              if (Number.isNaN(value) === false) {
                console.log('number', value);
                setSession(value * 60);
              } else {
                console.log('setting custom');
                setCustomSessions(true);
                console.log('set custom', isCustomSessions);
              }
              }}>
              <DropDownOptions value='0' name='sessionTotal'>Number of session minutes?</DropDownOptions>
              <DropDownOptions value='25' name='sessionTotal'>25</DropDownOptions>
              <DropDownOptions value='50' name='sessionTotal'>50</DropDownOptions>
              <DropDownOptions value='Custom' name='sessionTotal'>Custom</DropDownOptions>
            </DropDownMenus>
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
              <DropDownOptions value='5' name='breakTime'>5</DropDownOptions>
              <DropDownOptions value='10' name='breakTime'>10</DropDownOptions>
              <DropDownOptions value='15' name='breakTime'>15</DropDownOptions>
              <DropDownOptions value='20' name='breakTime'>20</DropDownOptions>
            </DropDownMenus>
          </label>
        </SettingsQuestion>
        <br />
        <SettingsQuestion>
          <label>
            Choose number of sessions/pomodoros:<br />
            <DropDownMenus onChange={() => {
              let value = Number.parseInt(event.target.value);
              if (Number.isNaN(value) === false) {
                setNumberOfSessions(event.target.value);
              } else {
                setCustomNumberOfSessions(true);
              }
            }}>
              <DropDownOptions value='null'>Number of sessions/pomodoros?</DropDownOptions>
              <DropDownOptions value='2' name='pomodoros'>2</DropDownOptions>
              <DropDownOptions value='4' name='pomodoros'>4</DropDownOptions>
              <DropDownOptions value='6' name='pomodoros'>6</DropDownOptions>
              <DropDownOptions value='Custom' name='pomodoros'>Custom</DropDownOptions>
            </DropDownMenus>
            <TextInputBox type='text' value={customTime === undefined ? '' : customTime} onChange={() => {
              setCustomTime(event.target.value);
            }}></TextInputBox>
            <br />
            <Button onClick={(e) => {
              e.preventDefault();
              setNumberOfSessions(customTime);
              setNewSettings(true);
              setTimeout(() => {
                setCustomNumberOfSessions(false);
              }, 1000);
            }}>Set Number of Sessions</Button>
          </label>
        </SettingsQuestion>
      </CurrentSettingsForm>
    )
  } else {
    return (
      <CurrentSettingsForm>
        <SettingsQuestion>
          <label>
            Choose session length: <br/>
            <DropDownMenus onChange={() => {
              let value = Number.parseInt(event.target.value);
              if (Number.isNaN(value) === false) {
                console.log('number', value);
                setSession(value * 60);
              } else {
                console.log('setting custom');
                setCustomSessions(true);
                console.log('set custom', isCustomSessions);
              }
              }}>
              <DropDownOptions value='0' name='sessionTotal'>Number of session minutes?</DropDownOptions>
              <DropDownOptions value='25' name='sessionTotal'>25</DropDownOptions>
              <DropDownOptions value='50' name='sessionTotal'>50</DropDownOptions>
              <DropDownOptions value='Custom' name='sessionTotal'>Custom</DropDownOptions>
            </DropDownMenus>
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
              <DropDownOptions value='5' name='breakTime'>5</DropDownOptions>
              <DropDownOptions value='10' name='breakTime'>10</DropDownOptions>
              <DropDownOptions value='15' name='breakTime'>15</DropDownOptions>
              <DropDownOptions value='20' name='breakTime'>20</DropDownOptions>
            </DropDownMenus>
          </label>
        </SettingsQuestion>
        <br />
        <SettingsQuestion>
          <label>
            Choose number of sessions/pomodoros:<br />
            <DropDownMenus onChange={() => {
              let value = Number.parseInt(event.target.value);
              if (Number.isNaN(value) === false) {
                setNumberOfSessions(event.target.value);
              } else {
                setCustomNumberOfSessions(true);
              }
            }}>
              <DropDownOptions value='null'>Number of sessions/pomodoros?</DropDownOptions>
              <DropDownOptions value='2' name='pomodoros'>2</DropDownOptions>
              <DropDownOptions value='4' name='pomodoros'>4</DropDownOptions>
              <DropDownOptions value='6' name='pomodoros'>6</DropDownOptions>
              <DropDownOptions value='Custom' name='pomodoros'>Custom</DropDownOptions>
            </DropDownMenus>
          </label>
        </SettingsQuestion>
      </CurrentSettingsForm>
    )
  }
}

export default Settings;
