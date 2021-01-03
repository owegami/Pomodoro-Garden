const getRidOfCurrentChoiceInArray = (array, currentChoice) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === currentChoice) {
      array = array.slice(0, i).concat(array.slice(i+1));
      console.log('ARRAY:', array);
      return array;
    }
  }
  return array;
}

let counter = 0;

exports.getArrayOfSounds = (catagory, currentChoice) => {
  const bells = ['bellsIn', 'bellsOut', 'boxingBell', 'fairyBellIn', 'fairyBellOut', 'insistantBell', 'serviceBell', 'shipBell', 'tinBell'];
  const birds = ['cardinalBird', 'turkeyPurr', 'warblingVireo'];
  const misc = ['aTone', 'chimes1', 'chimes2', 'computerMagic', 'cuckooClock', 'gong', 'magicWand', 'musicBox', 'rumbleOut', 'stepIn', 'stepOut', 'thinkingChimes', 'wobbleIn', 'wobbleOut', 'woodenChimeEcho'];
  const voices = ['britMale', 'fiona'];
  const voicesAtStart = ['britMaleBreak', 'britMaleStart', 'fionaBreak', 'fionaStart'];
  console.log(counter, 'got it here:', catagory, currentChoice);
  counter++;
  if (catagory === 'bells') {
    if (currentChoice !== undefined) {
      return getRidOfCurrentChoiceInArray(bells, currentChoice);
    }
    return bells;
  } else if (catagory === 'birds') {
    if (currentChoice !== undefined) {
      return getRidOfCurrentChoiceInArray(birds, currentChoice);
    }
    return birds;
  } else if (catagory === 'misc') {
    if (currentChoice !== undefined) {
      return getRidOfCurrentChoiceInArray(misc, currentChoice);
    }
    return misc;
  } else if (catagory === 'voices') {
    if (currentChoice !== undefined) {
      return getRidOfCurrentChoiceInArray(voices, currentChoice);
    }
    return voices;
  } else if (catagory === 'voicesAtStart') {
    if (currentChoice !== undefined) {
      return getRidOfCurrentChoiceInArray(voicesAtStart, currentChoice);
    }
    return voicesAtStart;
  }
}