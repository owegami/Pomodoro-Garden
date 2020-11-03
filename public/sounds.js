exports.chimes1 = function() {
  this.sound = document.createElement('audio');
  this.sound.src = '/30606__acclivity__jamesportwindchimes.mp3';
  this.sound.setAttribute('preload', 'auto');
  this.sound.setAttribute('controls', 'none');
  this.sound.style.display = 'none';
  document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();
  }
  this.stop = function() {
    this.sound.pause()
  }
}

exports.chimes2 = function() {
  this.sound = document.createElement('audio');
  this.sound.src = '/424033__mandymatz__wind-chimes.mp3';
  this.sound.setAttribute('preload', 'auto');
  this.sound.setAttribute('controls', 'none');
  this.sound.style.display = 'none';
  document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();
  }
  this.stop = function() {
    this.sound.pause()
  }
}