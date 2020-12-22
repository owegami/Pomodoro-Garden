import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {VisualizerBox, PlantImg} from './../view/styledComponents.jsx';

const Visualizer = ({totalTimeEver, plantChoice, growthRate, plantMaxImgNum, selectHighContrast }) => {
  let imgNumber = totalTimeEver === undefined ?  Math.floor(((0 / 3600) / 2) / growthRate)
  : Math.floor(((totalTimeEver / 3600) / 2) / growthRate);
  imgNumber = imgNumber > plantMaxImgNum ? plantMaxImgNum : imgNumber;
  const plant = `/images${selectHighContrast}/${plantChoice}_${imgNumber}.png`;

  return (
    <VisualizerBox>
      <PlantImg src={plant} alt="Picture of plant"/>
    </VisualizerBox>
  )
}

export default Visualizer;