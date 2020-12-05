import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {CurrentSettingsForm, SettingsQuestion, Button} from './../../view/styledComponents.jsx';

const GraphicsSettings = (selectHighContrast, setSelectHighContrast) => {
  console.log(selectHighContrast);
  return (
    <CurrentSettingsForm onSubmit={(event) => {
      event.preventDefault();
      setSelectHighContrast(event.target.value);
      }}>

      <SettingsQuestion>
          Select which image you prefer: <br/>
        <label>
          <img src='/images/Tomato_5.png' alt='Low contrast picture of tomato plant'/>
          <input type="radio" value=''></input>
        </label>
        <label>
          <img src='/imagesHighContrast/Tomato_5.png' alt='[PLACEHOLDER IMAGE] High contrast picture of tomato plant'/>
          <input type="radio" value='HighContrast'></input>
        </label>
        <Button>I want this level of contrast when possible</Button>
      </SettingsQuestion>
    </CurrentSettingsForm>
  )
}

export default GraphicsSettings;
