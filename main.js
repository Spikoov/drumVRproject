AFRAME.registerComponent("snare", {
    init: function() {
      this.el.addEventListener("hitstart", (e) => {
        var audioCylindre1 = new Audio('https://raw.githubusercontent.com/Spikoov/drumVRproject/main/sound/snare.mp3')
        audioCylindre1.play()
        console.log("dans le listener")
      })
    }
  })