'use strict';

const SOUND_FILE_DIR = 'audio/';

window.onload = function () {
  let muteSound = {};
  let mute = {};
  const instrument = document.getElementById('instrument');

  instrument.innerText = instrument.dataset.name+'  音が出なくなった時は再読込して下さい';
  const openSound = new Tone.Sampler({ C4: SOUND_FILE_DIR + instrument.dataset.open + '.wav' }).toDestination();
  const slapSound = new Tone.Sampler({ C4: SOUND_FILE_DIR + instrument.dataset.slap + '.wav' }).toDestination();

  const cha = document.getElementById('cha');
  const open = document.getElementById('open');
  open.classList.add("solo");

  if (instrument.dataset.mute) { //-- set mute sound if there is mute 
    muteSound = new Tone.Sampler({ C4: SOUND_FILE_DIR + instrument.dataset.mute + '.wav' }).toDestination();
    mute = document.getElementById('mute');
    mute.addEventListener('touchstart', event => {
      muteSound.triggerAttack('C4');
      mute.classList.add("touched");
        event.preventDefault();
    }, { capture: true, passive: false });

    mute.addEventListener('touchend', event => {
      mute.classList.remove("touched");
       event.preventDefault();
    }, { capture: true, passive: false });
    open.classList.remove("solo");
  }

  document.addEventListener('touchstart', event => {
    if (event.touches.length > 2) {
      event.preventDefault();
    }
  }, { capture: true, passive: false });

  document.addEventListener('touchmove', event => {
    event.preventDefault();
  }, { capture: true, passive: false });

  document.addEventListener('touchend', event => {
  }, { capture: true, passive: false });

  // ---- set slap -----------------------------
  cha.addEventListener('touchstart', event => {
    slapSound.triggerAttack('C4');
    cha.classList.add("touched");
     event.preventDefault();
  }, { capture: true, passive: false });

  cha.addEventListener('touchend', event => {
    cha.classList.remove("touched");
      event.preventDefault();
  }, { capture: true, passive: false });

  //---- set open -------------------------------
  open.addEventListener('touchstart', event => {
    openSound.triggerAttack('C4');
    open.classList.add("touched");
      event.preventDefault();
  }, { capture: true, passive: false });

  open.addEventListener('touchend', event => {
    open.classList.remove("touched");
      event.preventDefault();
  }, { capture: true, passive: false });

};