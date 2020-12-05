import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {CurrentSettingsForm, SettingsQuestion, DropDownMenus, ErrorMessageBox, DropDownOptions, Button, TextInputBox} from './../../view/styledComponents.jsx';

const SoundSettings = ({ isTicking, setIsTicking, clockTickSound, setClockTickSound}) => {

  const [tickingSound, setTickingSound] = useState(clockTickSound);

  const renderButton = () => {
    if (isTicking) {
      return (
        <Button onClick={(e) => {
          e.preventDefault();
          setIsTicking(false);
        }}>On</Button>
      )
    } else {
      return (
        <Button onClick={(e) => {
          e.preventDefault();
          setIsTicking(true);
        }}>Off</Button>
      )
    }
  }

  return (
    <CurrentSettingsForm>
      <label>
        Ticking clock sound:  {renderButton()}
      </label>
      <SettingsQuestion>
        <label>
          Select preferred clock ticking sound:
          <DropDownMenus onChange={(event) => {
            setClockTickSound(event.target.value);
          }}>
            <DropDownOptions value={tickingSound} name='clockSounds'>{tickingSound}</DropDownOptions>
            <DropDownOptions value='Clock Tick 1' name='clockSounds'>Clock Tick 1</DropDownOptions>
            <DropDownOptions value='Clock Tick 2' name='clockSounds'>Clock Tick 2</DropDownOptions>
            <DropDownOptions value='Clock Tick 3' name='clockSounds'>Clock Tick 3</DropDownOptions>
            <DropDownOptions value='Clock Tick 4' name='clockSounds'>Clock Tick 4</DropDownOptions>
            <DropDownOptions value='Clock Tick 5' name='clockSounds'>Clock Tick 5</DropDownOptions>
            <DropDownOptions value='Clock Tick 6' name='clockSounds'>Clock Tick 6</DropDownOptions>
          </DropDownMenus>
        </label>
      </SettingsQuestion>
    </CurrentSettingsForm>
  )
}

export default SoundSettings;
