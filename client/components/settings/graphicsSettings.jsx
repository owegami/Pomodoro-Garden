import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {CurrentSettingsForm, SettingsQuestion, Button} from './../../view/styledComponents.jsx';

import regularimage from './../../../public/images/Tomato_5.png';

const GraphicsSettings = (selectHighContrast, setSelectHighContrast) => {

  return (
    <CurrentSettingsForm>
      <SettingsQuestion>
          Select which image you prefer: <br/>
        <label>
          <img src='/images/Tomato_5.png' alt='Low contrast picture of tomato plant'/>
          <input type="radio" value={regularimage}></input>
        </label>
      </SettingsQuestion>
    </CurrentSettingsForm>
  )
}

export default GraphicsSettings;
