import React from 'react';
import styled from 'styled-components';

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: column wrap;
  font-family: charybdis;
  font-size: 2em;
  color: DarkOliveGreen;
  width: 750px;
`;

export const ComponentRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row nowrap;
`;

export const ComponentColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;

export const ErrorMessageBox = styled.div`
  position: absolute;
  background-color: white;
  color: darkred;
  font-size:1em;
  right: 5%;
  top: 20%;
  width: 500px;
  height: 220px;
  z-index: 2;
  border: 4px solid darkred;
  box-shadow: 2px 2px SlateGrey;
`;

export const Message =  styled.div`
  position: relative;
  margin-top: 21px;
  padding: 10px;
`;

export const XButton = styled.div`
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

export const ServerResponseMessage = styled.div`
  position: absolute;
  background-color: white;
  color: DarkOliveGreen;
  font-size:1em;
  right: 5%;
  top: 10%;
  min-width: 250px;
  max-width: 500px;
  min-height: 75px;
  max-height: 200px;
  z-index: 2;
  border: 4px solid DarkOliveGreen;
  box-shadow: 2px 2px SlateGrey;
`;

export const Button = styled.button`
  position: relative;
  font-family: charybdis;
  font-size: 1.5em;
  color: DarkOliveGreen;
  border: 6px dashed DarkSeaGreen;
  background-color: white;
  margin: 0px 10px 10px 10px;
  right: 5%;
  left: 2%;
`;

export const HelloMessage = styled.h3`
  position: relative;
  left: 20px;
`;

export const TimerBox = styled.div`
  border: 10px dashed DarkSeaGreen;
  padding: 15px;
  text-align: center;
  font-size: 2em;
`;

export const PauseMessageBox = styled.div`
  position: absolute;
  background-color: white;
  color: RebeccaPurple;
  font-size: 1em;
  right: 5%;
  top: 10%;
  width: 100px;
  height: 50px;
  z-index: 2;
  border: 4px solid darkred;
  box-shadow: 2px 2px SlateGrey;
`;

export const PauseMessage = styled.span`
  color: RebeccaPurple;
  position: absolute;
  padding: 10px;
`;

export const MessageSess = styled.div`
  background-color: white;
  color: RebeccaPurple;
  font-size: 1.5em;
  width: 250px;
  height: 50px;
  padding: 10px;
  margin: 15px;
  text-align: center;
  border: 8px dashed RebeccaPurple;
`;

export const MessageBreak = styled.div`
  background-color: white;
  color: cornflowerBlue;
  font-size: 1.5em;
  width: 250px;
  height: 50px;
  padding: 10px;
  margin: 15px;
  text-align: center;
  border: 8px dashed cornflowerBlue;
`;

export const CurrentSettingsBox = styled.div`
  margin-top: 25px;
`;

export const CurrentSettingsForm = styled.form`
  margin-top: 25px;
`;

export const SettingsQuestion = styled.div`
  margin: -10px 0px;
`;

export const DropDownMenus = styled.select`
  font-family: charybdis;
  font-size: .8em;
  color: DarkOliveGreen;
  border: 4px dashed DarkSeaGreen;
  background-color: white;
`;

export const DropDownOptions = styled.option`
  font-family: charybdis;
  font-size: .8em;
  color: DarkOliveGreen;
  border: 4px dashed DarkSeaGreen;
  background-color: white;
`;

export const VisualizerBox = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 300px;
  border: 11px dashed #4b692f;
  padding: 10px;
`;

export const PlantImg = styled.img`
  align-self: flex-end;
  margin-bottom: 30px;
`;

export const SpaceHolderFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;
  position: relative;
  height: 170px;
`;

export const LoginButton = styled.button`
  align-self: center;
  font-family: charybdis;
  font-size: 1.5em;
  color: DarkOliveGreen;
  border: 4px dashed DarkSeaGreen;
  background-color: white;
  cursor: pointer;
  margin: 5px;
`;

export const SpaceHolder = styled.div`
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

export const SubmitButton = styled.button`
  font-family: charybdis;
  font-size: 1em;
  color: DarkOliveGreen;
  border: 4px dashed DarkSeaGreen;
  background-color: white;
  margin: 2px;
  cursor: pointer;
`;

export const TextInputBox = styled.input`
  width: 300px;
  padding: 5px;
  font-family: charybdis;
  font-size: .8em;
  color: DarkOliveGreen;
  margin: 5px -50px 5px 5px;
  border: 4px solid DarkSeaGreen;
  box-shadow: 2px 2px SlateGrey;
`;
export const LoginInputs = styled.div`
  padding: 10px;
`;