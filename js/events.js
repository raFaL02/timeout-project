import{
  btnPause,
  btnPlay,
  btnStop,
  btnSet,
  btnSoundOn,
  btnSoundOff
} from "./elements.js"

export default function Events({controls, timer, sound}) {
  btnPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })
  
  btnPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })
  
  btnStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })
  
  btnSoundOn.addEventListener('click', function() {
    btnSoundOff.classList.remove('hide')
    btnSoundOn.classList.add('hide')
    sound.bgAudio.play()
  })
  
  btnSoundOff.addEventListener('click', function() {
    btnSoundOn.classList.remove('hide')
    btnSoundOff.classList.add('hide')
    sound.bgAudio.pause()
  })
  
  btnSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()
  
    if(!newMinutes) {
      timer.reset()
      return
    }
  
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
}

