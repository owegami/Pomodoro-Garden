
const processSoundIntoDropDownOption = (sound, sessionOrBreak) => {
  let stringVersion = sound.charAt(0).toUpperCase() + sound.slice(1);
  stringVersion = stringVersion.split(/(?=[A-Z])/).join(' ');
  return
    <DropDownOptions value={sound} name={sessionOrBreak} key={sessionOrBreak + sound}>{stringVersion}</DropDownOptions>;

}

const getArrayOfSounds = (catagory) => {
  if (catagory === 'bells') {
    return ['bellsIn', 'bellsOut', 'boxingBell', 'fairyBellIn', 'fairyBellOut', 'insistantBell', 'serviceBell', 'shipBell', 'tinBell'];
  } else if (catagory === 'birds') {
    return ['cardinalBird', 'turkeyPurr', 'warblingVireo'];
  } else if (catagory === 'misc') {
    return ['aTone', 'chimes1', 'chimes2', 'computerMagic', 'cuckooClock', 'gong', 'magicWand', 'musicBox', 'rumbleOut', 'stepIn', 'stepOut', 'thinkingChimes', 'wobbleIn', 'wobbleOut', 'woodenChimeEcho'];
  } else if (catagory === 'voices') {
    return ['britMale', 'fiona'];
  } else if (catagory === 'voicesAtStart') {
    return ['britMaleBreak', 'britMaleStart', 'fionaBreak', 'fionaStart'];
  }
}

exports.renderProperDropdown = (sessionOrBreak, catagory) => {
  let array = getArrayOfSounds(catagory);
  console.log(array, catagory);
  if (catagory === 'voices' && sessionOrBreak === 'sessionSound') {
    return array.map((sound) => {
      return processSoundIntoDropDownOption(sound + 'Start', sessionOrBreak);
    })
  } else {
    return array.map((sound) => {
      return processSoundIntoDropDownOption(sound + 'Break', sessionOrBreak);
    })
  }
  return array.map((sound) => {
    return processSoundIntoDropDownOption(sound, sessionOrBreak);
  })
}

exports.findStartforDropdown = (word) => {
  let catagories = ['bells', 'birds', 'misc', 'voices', 'voicesAtStart'];
  for (let i = 0; i < catagories.length; i++) {
    let array = getArrayOfSounds(catagories[i]);
    if (array.includes(word)) {
      return catagories[i];
    }
  }
}