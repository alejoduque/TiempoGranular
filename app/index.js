const AudioPlayer = require('./audioPlayer.js')
const VideoPlayer = require('./videoPlayer.js')
const HydraBackground = require('./hydraBackground.js')

var canvas = document.getElementById("hydra")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var hydra = new HydraBackground({
  canvas: canvas,
  initialAnimationDuration: 300
})

var audio = new AudioPlayer({
  stream: "http://stream.p-node.org/dab.mp3",
  type: "application/mp3",
  container: document.getElementById("player")
})



audio.onPlay = () => { hydra.play() }

audio.onPause = () => { hydra.pause() }
