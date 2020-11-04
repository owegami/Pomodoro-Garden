import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SpaceHolderFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;
  position: relative;
  height: 170px;
`;

const LoginButton = styled.button`
  align-self: center;
  font-family: charybdis;
  font-size: 1.5em;
  color: DarkOliveGreen;
  border: 4px dashed DarkSeaGreen;
  background-color: white;
  cursor: pointer;
  margin: 5px;
`;

const SpaceHolder = styled.div`
  position: absolute;
  right: 10%;
  top: 10%;
  border: 4px solid DarkOliveGreen;
  width: 370px;
  height: 230px;
  background-color: white;
  z-index: 2;
  box-shadow: 3px 4px SlateGrey;
`;

const SubmitButton = styled.button`
  font-family: charybdis;
  font-size: 1em;
  color: DarkOliveGreen;
  border: 4px dashed DarkSeaGreen;
  background-color: white;
  margin: 2px;
  cursor: pointer;
`;

const TextInputBox = styled.input`
  width: 300px;
  padding: 5px;
  font-family: charybdis;
  font-size: .8em;
  color: DarkOliveGreen;
  margin: 5px -50px 5px 5px;
  border: 4px solid DarkSeaGreen;
`;

const XButton = styled.div`
  position: absolute;
  right: -4px;
  top:-4px;
  width: 25px;
  height: 30px;
  z-index: 3;
  border: 4px solid;
  text-align: center;
  vertical-align: center;
  cursor: pointer;
`;

const LoginInputs = styled.div`
  padding: 10px;
`;


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
                setUser(e.target.value);
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