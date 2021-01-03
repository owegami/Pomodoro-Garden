const sounds = require('./../../public/sounds.js');

exports.playClockTickingExample = (choice) => {
  let sound = new sounds[choice]();

  if (choice !== 'clock6') {
    sound.play();
    setTimeout(() => {
      sound.play();
    }, 1000);
  } else {
    let sound2 = new sounds.clock7();
    sound.play();
    setTimeout(() => {
      sound2.play();
    }, 1000);
  }
}

exports.playSampleSound = (choice) => {
  let sound = new sounds[choice]();
  sound.play();
}