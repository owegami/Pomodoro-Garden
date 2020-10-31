import React, { useState, useEffect } from 'react';
import TimerVisual from './timer.jsx';
import Visualizer from './visualizer.jsx';

const App = () => {
  //declare state here when we want some

  return (
    <div>
      <TimerVisual />
      <Visualizer />
    </div>
  )
}

export default App;