import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import sounds from './../../../public/sounds.js';
import { getArrayOfSounds } from './../../controllers/getArrayOfSounds.js';
import {CurrentSettingsForm, SettingsQuestion, SettingsQuestionWithDoubleDropDowns, DropDownMenus, ErrorMessageBox, DropDownOptions, SmallerButton, TextInputBox} from './../../view/styledComponents.jsx';

const SoundSettings = ({ isTicking, setIsTicking, clockTickSound, setClockTickSound, hasThreeMinWarning, setThreeMinWarning, threeMinWarningSound, setThreeMinWarningSound, sessionSound, setSessionSound, breakSound, setBreakSound}) => {
  let sessionCatagoryStart = findStartforDropdown(sessionSound);
  let breakCatagoryStart = findStartforDropdown(breakSound);

  const [sessionSoundCatagory, setSessionSoundCatagory] = useState(sessionCatagoryStart);
  const [breakSoundCatagory, setBreakSoundCatagory] = useState(breakCatagoryStart);
  const warnings = [ 'aTone', 'bellsAlert', 'britMaleThree', 'fionaThree', 'tinBell', 'warblingVireo'];

  const renderSoundChoiceDropdowns = (sessionOrBreak) => {
    return (
      <>
        <SettingsQuestionWithDoubleDropDowns>
          <label>
          {sessionOrBreak === 'sessionSound' ? 'Session' : 'Break'} starting sound catagory:
          <DropDownMenus value={sessionOrBreak === 'sessionSound' ? sessionSoundCatagory : breakSoundCatagory} onChange={(event) => {
              if (sessionOrBreak === 'sessionSound') {
                setSessionSoundCatagory(event.target.value);
              } else {
                setBreakSoundCatagory(event.target.value);
              }
            }}>
            <DropDownOptions value='bells' name='SoundCatagory'>Bells</DropDownOptions>
            <DropDownOptions value='birds' name='SoundCatagory'>Birds</DropDownOptions>
            <DropDownOptions value='misc' name='SoundCatagory'>Miscellaneous</DropDownOptions>
            <DropDownOptions value='voices' name='SoundCatagory'>Voices</DropDownOptions>
          </DropDownMenus>
        </label>
        </SettingsQuestionWithDoubleDropDowns>
        <SettingsQuestionWithDoubleDropDowns>
          <label>
          Choose a sound:
          <DropDownMenus value={sessionOrBreak === 'sessionSound' ? sessionSound : breakSound} onChange={(event) => {
            playSampleSound(event.target.value);
            if (sessionOrBreak === 'sessionSound') {
              setSessionSound(event.target.value);
            } else {
              setBreakSound(event.target.value);
            }
          }}>
            {renderProperDropdown(sessionOrBreak, sessionOrBreak === 'sessionSound' ? sessionSoundCatagory : breakSoundCatagory)}
            </DropDownMenus>
          </label>
        </SettingsQuestionWithDoubleDropDowns>
        <br/>
      </>
    )
  }

  return (
    <CurrentSettingsForm>
      {renderSoundChoiceDropdowns('sessionSound')}
      {renderSoundChoiceDropdowns('breakSound')}
      <SettingsQuestion>
        <label>
          Three Minute Warning Sound:
          <DropDownMenus value={hasThreeMinWarning ? threeMinWarningSound : 'off'} onChange={(event) => {
            if (event.target.value === 'off') {
              setThreeMinWarning(false);
            } else {
              setThreeMinWarning(true);
              playSampleSound(event.target.value);
              setThreeMinWarningSound(event.target.value);
            }
          }}>
            <DropDownOptions value='off' name='threeMinWarningSounds'>Off</DropDownOptions>
            {
              warnings.map((sound) => {
                let copyOfSound = sound;
                let stringVersion = copyOfSound.charAt(0).toUpperCase() + copyOfSound.slice(1);
                stringVersion = stringVersion.split(/(?=[A-Z])/);
                return (
                  <DropDownOptions value={sound} name='threeMinWarningSounds' key={'threeMin' + sound}>{stringVersion}</DropDownOptions>
                )
              })
            }
          </DropDownMenus>
        </label>
      </SettingsQuestion>
      <br/>
      <SettingsQuestion>
        <label>
          Clock Ticking Sound:
          <DropDownMenus value={isTicking ? clockTickSound : 'off'} onChange={(event) => {
            if (event.target.value === 'off') {
              setIsTicking(false);
            } else {
              setIsTicking(true);
              playClockTickingExample('clock' + event.target.value);
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

const processSoundIntoDropDownOption = (sound, sessionOrBreak) => {
  let stringVersion = sound.charAt(0).toUpperCase() + sound.slice(1);
  stringVersion = stringVersion.split(/(?=[A-Z])/).join(' ');
  return (
    <DropDownOptions value={sound} name={sessionOrBreak} key={sessionOrBreak + sound}>{stringVersion}</DropDownOptions>
    )
}

const renderProperDropdown = (sessionOrBreak, catagory) => {
  let array = getArrayOfSounds(catagory);
  return array.map((sound) => {
    if (sessionOrBreak === 'sessionSound' && catagory === 'voices') {
      return processSoundIntoDropDownOption(sound + 'Start', sessionOrBreak);
    } else if (sessionOrBreak === 'breakSound' && catagory === 'voices') {
      return processSoundIntoDropDownOption(sound + 'Break', sessionOrBreak);
    } else {
      return processSoundIntoDropDownOption(sound, sessionOrBreak);
    }
  })
}

const findStartforDropdown = (word) => {
  let catagories = ['bells', 'birds', 'misc', 'voices', 'voicesAtStart'];
  for (let i = 0; i < catagories.length; i++) {
    let array = getArrayOfSounds(catagories[i]);
    if (array.includes(word)) {
      if (catagories[i] === 'voicesAtStart') {
        return 'voices';
      } else {
        return catagories[i];
      }
    }
  }
}

const playClockTickingExample = (choice) => {
  let sound = new sounds[choice]();

  if (choice !== 'clock6') {
    sound.play();
    setTimeout(() => {
      sound.play();
    }, 1000);
  } else {
    let sound2 = new sounds.clock7();
    sound.play();
    setTimeout(() => {
      sound2.play();
    }, 1000);
  }
}

const playSampleSound = (choice) => {
  let sound = new sounds[choice]();
  sound.play();
}

export default SoundSettings;