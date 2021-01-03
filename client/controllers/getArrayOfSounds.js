exports.getArrayOfSounds = (catagory) => {
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