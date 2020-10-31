import React, { useState, useEffect } from 'react';
import TimerVisual from './timer.jsx';
import LapsedVisual from './lapsedVisual.jsx';

const App = () => {
  //declare state here when we want some

  return (
    <div>
      <TimerVisual />
      <LapsedVisual />
    </div>
  )
}

export default App;