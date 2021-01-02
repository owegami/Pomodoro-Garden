import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { prepareData, loginUser, logTimeToDatabase, createLogin, saveSettings } from './../controllers/logtodb.js';
import { setToLocalStorage } from './../controllers/setToLocalStorage.js';

import store from './../store/store.js';
import totalTimeTodayAction from './../actions/totalTimeTodayAction.js';
import dateAction from './../actions/dateAction.js';
import isOnAction from './../actions/isOnAction.js';

import TimerVisual from './timer.jsx';
import Settings from './settings.jsx';
import TimerVisualContainer from './containers/timerContainer.js';
import VisualizerContainer from './containers/visualizerContainer.js';

import {ComponentContainer, ComponentRowContainer, ComponentColumnContainer, ErrorMessageBox, Message, XButton, ServerResponseMessage, Button, HelloMessage} from './../view/styledComponents.jsx';

const App = () => {
  //KEEP THIS ONE BECAUSE IT'S LOCAL
  const [showSettings, setToShowSettings] = useState(false);

  initializeAppState();

  const renderServerMessage = () => {
    if (!haveServerMessage) {
      return (
        <></>
      )
    } else {
      setTimeout(() => {
        setHaveServerMessage(false);
      }, 5000)
      return (
        <ServerResponseMessage>
          <XButton onClick={() => {
            setHaveServerMessage(false);
          }}>X</XButton>
          <Message>{serverResponseMessage}</Message>
        </ServerResponseMessage>
      )
    }
  }

  // const renderError = () => {
  //   if (!errorPresent) {
  //     return (
  //       <></>
  //     )
  //   } else {
  //     return (
  //       <ErrorMessageBox>
  //         <XButton onClick={() => {
  //           errorThrown(false);
  //         }}>X</XButton>
  //         <Message>Please excuse the inconvience. There seems to have been an error. Please refresh or try the operation again. If this problem persists, please contact developer.</Message>
  //       </ErrorMessageBox>
  //     )
  //   }
  // }

  const renderHello = () => {
    // if (user.length > 0 && loggedIn) {
    //   return (
    //     <HelloMessage>Hello, {user}!</HelloMessage>
    //   )
    // } else {
      return (
        <HelloMessage>Hello!</HelloMessage>
      )
    // }
  }

  const renderSettings = () => {
    if (showSettings) {
      return (
        <>
          <Button onClick={() => {
            setToShowSettings(false)
          }}>Hide Settings</Button>
          <Settings />
        </>
      )
    } else {
      return (
        <Button onClick={() => {
          setToShowSettings(true)
        }}>Settings</Button>
      )
    }
  }

  return (
    <ComponentContainer>
      <ComponentRowContainer>
        <ComponentColumnContainer>
          <VisualizerContainer />
          {renderHello()}
        </ComponentColumnContainer>
        <ComponentColumnContainer>
        <TimerVisualContainer />
        {/* {renderError()} */}
        {/* {renderServerMessage()} */}
        </ComponentColumnContainer>
      </ComponentRowContainer>
      <ComponentColumnContainer>
        {renderSettings()}
      </ComponentColumnContainer>
    </ComponentContainer>
  )
}

const initializeAppState = () => {
  let state = store.getState();
  if (state.date !== (new Date().getMonth())+1 + '/' + (new Date().getDate())) {
    store.dispatch(totalTimeTodayAction(0));
    store.dispatch(dateAction((new Date().getMonth())+1 + '/' + (new Date().getDate())));
  }
}

export default App;