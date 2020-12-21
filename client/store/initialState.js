let timerSettings = {
  sessionTotal: 1500,
  direction: 'backward',
  breakTotal: 300,
  pomodoros: 4,
}

let timerState = {
  isOn: false,
  isReset: false,
  isSet: false,
}

let timelog = {
  totalTimeEver: 60,
  totalTime: 20,
}

let sound  = {
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
  timerSettingsState: timerSettings,
  timerState: timerState,
  timeLogState: timelog,
  soundSettingsState: sound,
  visualizerState: visualizer,
  dataPersistingState: data
}

export default initialState;