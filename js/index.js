import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import { minutesDisplay,
  secondsDisplay,
  btnPlay,
  btnPause,
  btnStop,
  btnSet,} from "./elements.js"

const controls = Controls({
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

Events({controls, timer, sound})