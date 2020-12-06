import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import sounds from './../../../public/sounds.js';
import {CurrentSettingsForm, SettingsQuestion, DropDownMenus, ErrorMessageBox, DropDownOptions, Button, TextInputBox} from './../../view/styledComponents.jsx';

const SoundSettings = ({ isTicking, setIsTicking, clockTickSound, setClockTickSound}) => {

  return (
    <CurrentSettingsForm>
      <SettingsQuestion>
        <label>
          Currently selected:
          <DropDownMenus value={isTicking ? clockTickSound : 'off'} onChange={(event) => {
            if (event.target.value === 'off') {
              setIsTicking(false);
            } else {
              setIsTicking(true);
              playClockTickingExample(event.target.value);
              setClockTickSound(event.target.value);
            }
          }}>
            <DropDownOptions value='off' name='clockSounds'>Off</DropDownOptions>
            <DropDownOptions value='1' name='clockSounds'>Clock Tick 1</DropDownOptions>
            <DropDownOptions value='2' name='clockSounds'>Clock Tick 2</DropDownOptions>
            <DropDownOptions value='3' name='clockSounds'>Clock Tick 3</DropDownOptions>
            <DropDownOptions value='4' name='clockSounds'>Clock Tick 4</DropDownOptions>
            <DropDownOptions value='5' name='clockSounds'>Clock Tick 5</DropDownOptions>
            <DropDownOptions value='6' name='clockSounds'>Clock Tick 6</DropDownOptions>
          </DropDownMenus>
        </label>
      </SettingsQuestion>
    </CurrentSettingsForm>
  )
}

const playClockTickingExample = (num) => {
  let clock1 = new sounds.clock1();
  let clock2 = new sounds.clock2();
  let clock3 = new sounds.clock3();
  let clock4 = new sounds.clock4();
  let clock5 = new sounds.clock5();
  let clock6 = new sounds.clock6();
  let clock7 = new sounds.clock7();

  if (num === '1') {
    clock1.play();
    setTimeout(() => {
      clock1.play();
    }, 1000);
  } else if (num === '2') {
    clock2.play();
    setTimeout(() => {
      clock2.play();
    }, 1000);
  } else if (num === '3') {
    clock3.play();
    setTimeout(() => {
      clock3.play();
    }, 1000);
  } else if (num === '4') {
    clock4.play();
    setTimeout(() => {
      clock4.play();
    }, 1000);
  } else if (num === '5') {
    clock5.play();
    setTimeout(() => {
      clock5.play();
    }, 1000);
  } else if (num === '6') {
    clock6.play();
    setTimeout(() => {
      clock7.play();
    }, 1000);
  }
}

export default SoundSettings;
