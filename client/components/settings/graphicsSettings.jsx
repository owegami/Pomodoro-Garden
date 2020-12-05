import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {CurrentSettingsForm, SettingsQuestion, Button} from './../../view/styledComponents.jsx';

const GraphicsSettings = ({selectHighContrast, setSelectHighContrast}) => {

  console.log(selectHighContrast)
  return (
    <CurrentSettingsForm onSubmit={(event) => {
      event.preventDefault();
      console.log('event.target.value', event.target.value);
      setSelectHighContrast(event.target.value);
      }}>

      <SettingsQuestion>
    Current preference: {selectHighContrast === '' ? 'Low contrast art' : 'High contrast art'} <br/>
          Select which image you prefer: <br/>
        <label>
          <input type='radio' name='LowContrast' value='' checked={selectHighContrast === ''}  onChange={(event) => {
            setSelectHighContrast(event.target.value);
          }} />
          <img src='/images/Tomato_5.png' alt='Low contrast picture of tomato plant'/>
        </label>
        <label>
          <input type='radio' name='HighContrast' value='HighContrast' checked={selectHighContrast === 'HighContrast'} onChange={(event) => {
            setSelectHighContrast(event.target.value);
          }} />
          <img src='/imagesHighContrast/Tomato_5.png' alt='[PLACEHOLDER IMAGE] High contrast picture of tomato plant'/>
        </label>
      </SettingsQuestion>
    </CurrentSettingsForm>
  )
}

export default GraphicsSettings;
