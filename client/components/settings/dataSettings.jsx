import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {CurrentSettingsForm, SettingsQuestion, DropDownMenus, ErrorMessageBox, DropDownOptions, SmallerButton, TextInputBox} from './../../view/styledComponents.jsx';

const DataSavingSettings = () => {

  return (
    <>
      <p>
        This section of the settings is only needed if you are switching between machines or browsers.
      </p>
      <p>
        Please note: if you are not planning to switch machines, it is recommended to not use these settings. By switching machines, your data is saved less frequently and there is the chance of a database error which could affect your experience negatively.
      </p>
      <CurrentSettingsForm>
        <SettingsQuestion>
          <label>
            Upload one time to database in order to switch to another machine?
            <SmallerButton>Upload</SmallerButton>
          </label>
        </SettingsQuestion>
        <br/>
        <SettingsQuestion>
          <label>
            Enable consistent saving to database?
            <SmallerButton>Enable</SmallerButton><br/><br/>
            * PLEASE NOTE: The above setting is only recommended if you are consistently switching between browsers and/or machines *
          </label>
        </SettingsQuestion>
        <br/><br/>
        <SettingsQuestion>
          <label>
            Login to retrieve data from database and save to new machine/browser?
            <SmallerButton>Retrieve Data</SmallerButton>
          </label>
        </SettingsQuestion>
      </CurrentSettingsForm>
    </>
  )
}

export default DataSavingSettings;
