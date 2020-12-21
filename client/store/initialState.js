let timer = {
  sessionTotal: 1500,
  direction: 'backward',
  totalTimeEver: 0,
  totalTime: 0,
  isOn: false,
  isReset: false,
  isSet: false,
  breakTotal: 300,
  pomodoros: 4,
  showSettings: false,
  showSettingsVisual: false,
  isTicking: true,
  clockTickSound: '1',
  hasThreeMinWarning: true,
}

let visualizer = {
  plantChoice: 'Tomato',
  growthRate: 1,
  plantMaxImgNum: 5,
  selectHighContrast: ''
};

let data = {
  willLogTime: false,
  errorPresent: false,
  haveServerMessage: false,
  serverResponseMessage: undefined,
  willLogin: true,
  willCreateLogin: false,
  willSaveSettings: false,
  user: '',
  password: '',
  loggedIn: false,
  saveToDatabase: false,
};

const initialState = {
  timerState: timer,
  visualizerState: visualizer,
  dataPersistingState: data
}

export default initialState;