import React, { useState, useEffect } from 'react';
import TimerVisual from './timer.jsx';
import Visualizer from './visualizer.jsx';

const App = () => {
  const [sessionTotal, setSession] = useState(60000 * 25);
  const [direction, setDirection] = useState('backward')

  return (
    <div>
      <TimerVisual
        sessionTotal={sessionTotal}
        direction={direction}
      />
      <Visualizer />
    </div>
  )
}

export default App;