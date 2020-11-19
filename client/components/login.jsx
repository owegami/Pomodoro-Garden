import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {SpaceHolderFlex, LoginButton, SpaceHolder, SubmitButton, TextInputBox, XButton, LoginInputs} from './../view/styledComponents.jsx';

const Login = ({ willLogin, setToLogin, user, setUser, password, setPassword, willCreateLogin, setToCreateLogin, loggedIn }) => {
  const [loginShown, setLoginToShow] = useState(false);
  const [chooseToLogin, setButtonToLogin] = useState(true);

  const renderSubmitButton = () => {
    if (chooseToLogin) {
      return (
        <SubmitButton onClick={() => {
          setToLogin(true);
          setLoginToShow(false);
        }}>Login</SubmitButton>
      )
    } else {
      return (
        <SubmitButton onClick={() => {
          setToCreateLogin(true);
          setLoginToShow(false);
        }}>Sign Up</SubmitButton>
      )
    }
  }
  const renderLoginWindow = () => {
    if (loginShown) {
      return (
        <SpaceHolder>
          <XButton onClick={() => {
            setToLogin(false);
            setToCreateLogin(false);
            setLoginToShow(false);
          }}>X</XButton>
          <LoginInputs>
            <label>
              Username:
              <TextInputBox value={user} onChange={(e) => {
                setUser(e.target.value.toLowerCase());
              }} />
            </label><br />
            <label>
              Password:
              <TextInputBox type='password' value={password} onChange={(e) => {
                setPassword(e.target.value);
              }} />
            </label><br />
              {renderSubmitButton()}
          </LoginInputs>
        </SpaceHolder>
      )
    } else {
      return (
        <></>
      )
    }
  }



  return (
    <SpaceHolderFlex>
      {renderLoginWindow()}
      {/* <LoginButtonHolder> */}
        <LoginButton onClick={() => {
          setButtonToLogin(true);
          setLoginToShow(true);
        }}>Login</LoginButton>
        <LoginButton onClick={() => {
          setButtonToLogin(false);
          setLoginToShow(true);
        }}>Sign Up</LoginButton>
      {/* </LoginButtonHolder> */}
    </SpaceHolderFlex>
  )
}

export default Login;