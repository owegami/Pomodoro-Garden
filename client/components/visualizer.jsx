import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const VisualizerBox = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 300px;
  border: 11px dashed #4b692f;
  border-radius: 1em;
  padding: 10px;
`;

const PlantImg = styled.img`
  align-self: flex-end;
  margin-bottom: 30px;
`;

const Visualizer = ({totalTimeEver, plantChoice, growthRate, plantMaxImgNum }) => {
  let imgNumber = totalTimeEver === undefined ?  Math.floor(((0 / 3600) / 2) / growthRate)
  : Math.floor(((totalTimeEver / 3600) / 2) / growthRate);
  imgNumber = imgNumber > plantMaxImgNum ? plantMaxImgNum : imgNumber;
  const plant = `/images/${plantChoice}_${imgNumber}.png`;

  return (
    <VisualizerBox>
      <PlantImg src={plant} />
    </VisualizerBox>
  )
}

export default Visualizer;