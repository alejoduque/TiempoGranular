const Hydra = require('hydra-synth')
var loop = require('raf-loop')


function hydraBackground({ canvas, initialAnimationDuration }) {
  var self = this
  this.hydra = new Hydra({
    canvas: canvas,
    autoLoop: false,
    detectAudio: false
  })
  console.log("hydra is", this.hydra)
  this.engine = loop(function(dt) {
      // delta time in milliseconds
      self.hydra.tick(dt)
  }).start()

//  osc(80, 0.02, 1.4)
//    .rotate(0.1, -0.008)
//    .pixelate(50, 20)
//    .diff(o0)
//    .luma(0.1)
//    .scale(1.01)
//    .out()


//osc(20, 0.03, 1.7).kaleid().mult(osc(20, 0.001, 0).rotate(1.58)).blend(o0, 0.94).modulateScale(osc(10, 0),-0.03).scale(0.8, () => (1.05 + 0.1 * Math.sin(0.05*time))).out(o0)


//a.show()
//SOUND

//a.setScale (10  )
//a.setBins (6)
//
//a.settings[0].cutoff = 1
//a.settings[1].cutoff = 2
//a.settings[2].cutoff = 4
//a.settings[3].cutoff = 6
//a.settings[4].cutoff = 8
//a.settings[5].cutoff = 9

osc(322).color(0,0,0)
.add(shape(2).color(2,2,2).scale(0.006).rotate(0.000001))
.modulate(noise(()=> a.fft[1]*10 +0.01).scale(5,0.1))
.scale(1.2,1,3)
.scale(()=> a.fft[3]*0.1 -2)
.repeat(1,1)
//.rotate(1,()=> a.fft[3]*1 +0.01)
.out(o0)


  setTimeout(() => this.engine.stop(), initialAnimationDuration)
  //self.hydra.tick(0.01)
}

hydraBackground.prototype.play = function () {
  this.engine.start()
}

hydraBackground.prototype.pause = function() {
  this.engine.stop()
}

module.exports = hydraBackground
